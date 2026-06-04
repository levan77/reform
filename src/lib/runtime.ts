/**
 * Helpers for accessing the Cloudflare runtime (KV bindings + env vars).
 *
 * In `astro dev` these are provided by the adapter's platformProxy (miniflare).
 * In production they come from the Pages project's bindings / env variables.
 */

/** Minimal KV namespace surface we rely on — avoids a @cloudflare/workers-types dependency. */
export interface KVNamespace {
  get(key: string, type: 'json'): Promise<unknown>;
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
}

export interface RuntimeEnv {
  LISTINGS:        KVNamespace;
  ADMIN_PASSWORD?: string;
  SESSION_SECRET?: string;
}

// Local-dev fallbacks (used only if the binding/var is missing)
const DEFAULTS = {
  ADMIN_PASSWORD: 'reforma2024',
  SESSION_SECRET: 'reforma-local-dev-secret-change-in-production',
} as const;

function runtimeEnv(locals: App.Locals): Partial<RuntimeEnv> {
  return (locals as { runtime?: { env?: RuntimeEnv } })?.runtime?.env ?? {};
}

/** Returns the LISTINGS KV namespace, throwing a clear error if the binding is missing. */
export function getKV(locals: App.Locals): KVNamespace {
  const kv = runtimeEnv(locals).LISTINGS;
  if (!kv) {
    throw new Error(
      'LISTINGS KV binding not found. In dev ensure platformProxy is enabled and ' +
      'wrangler.toml defines the namespace; in production bind it in the Pages dashboard.',
    );
  }
  return kv;
}

export function getAdminPassword(locals: App.Locals): string {
  return runtimeEnv(locals).ADMIN_PASSWORD ?? DEFAULTS.ADMIN_PASSWORD;
}

export function getSessionSecret(locals: App.Locals): string {
  return runtimeEnv(locals).SESSION_SECRET ?? DEFAULTS.SESSION_SECRET;
}
