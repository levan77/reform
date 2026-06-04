import { defineMiddleware } from 'astro:middleware';
import { getSessionFromRequest } from '../lib/auth';
import { getSessionSecret } from '../lib/runtime';

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { pathname } = ctx.url;

  // Protect /admin/* pages and /api/admin/* routes — except the login endpoint.
  const isAdminPage = pathname.startsWith('/admin/');
  const isAdminApi  = pathname.startsWith('/api/admin/') && !pathname.endsWith('/login');

  if (isAdminPage || isAdminApi) {
    const secret = getSessionSecret(ctx.locals);
    const authed = await getSessionFromRequest(ctx.request, secret);
    if (!authed) {
      if (pathname.startsWith('/api/')) {
        return new Response('Unauthorized', { status: 401 });
      }
      return ctx.redirect('/admin');
    }
  }

  return next();
});
