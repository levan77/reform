import type { APIRoute } from 'astro';
import { clearCookie } from '../../../lib/auth';

export const POST: APIRoute = () =>
  new Response(null, {
    status: 302,
    headers: { Location: '/admin', 'Set-Cookie': clearCookie() },
  });
