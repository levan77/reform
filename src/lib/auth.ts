/**
 * Stateless session tokens signed with HMAC-SHA256 via the Web Crypto API,
 * which is available natively in both Cloudflare Workers and Node 18+.
 * Token format:  base64url(JSON{exp}) + "." + base64url(HMAC)
 */

const COOKIE_NAME = 'reforma_session';
const TTL_MS      = 24 * 60 * 60 * 1000; // 24h
const enc         = new TextEncoder();

// ─── base64url helpers ───────────────────────────────────────────────────────
function bytesToB64Url(bytes: Uint8Array): string {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function strToB64Url(s: string): string {
  return bytesToB64Url(enc.encode(s));
}
function b64UrlToStr(s: string): string {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/');
  return decodeURIComponent(
    atob(b64).split('').map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''),
  );
}

// ─── HMAC ────────────────────────────────────────────────────────────────────
async function sign(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return bytesToB64Url(new Uint8Array(sig));
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

// ─── Public API ──────────────────────────────────────────────────────────────
export async function createSessionToken(secret: string): Promise<string> {
  const encoded = strToB64Url(JSON.stringify({ exp: Date.now() + TTL_MS }));
  return `${encoded}.${await sign(encoded, secret)}`;
}

export async function verifySessionToken(token: string, secret: string): Promise<boolean> {
  const dot = token.lastIndexOf('.');
  if (dot < 1) return false;
  const encoded = token.slice(0, dot);
  const sig     = token.slice(dot + 1);
  try {
    if (!safeEqual(sig, await sign(encoded, secret))) return false;
    const { exp } = JSON.parse(b64UrlToStr(encoded));
    return typeof exp === 'number' && Date.now() < exp;
  } catch {
    return false;
  }
}

export async function getSessionFromRequest(request: Request, secret: string): Promise<boolean> {
  const cookies = request.headers.get('cookie') ?? '';
  const match   = cookies.match(new RegExp(`${COOKIE_NAME}=([^;\\s]+)`));
  return match ? verifySessionToken(decodeURIComponent(match[1]), secret) : false;
}

export const sessionCookie = (token: string) =>
  `${COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${TTL_MS / 1000}`;

export const clearCookie = () =>
  `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
