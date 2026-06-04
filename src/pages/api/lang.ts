import type { APIRoute } from 'astro';
import { LOCALES, localeCookie, type Locale } from '../../lib/i18n';

export const GET: APIRoute = ({ url }) => {
  const to   = url.searchParams.get('to') as Locale | null;
  let   from = url.searchParams.get('from') ?? '/';

  // Only allow same-origin relative paths as redirect targets
  if (!from.startsWith('/') || from.startsWith('//')) from = '/';

  const locale: Locale = to && LOCALES.includes(to) ? to : 'ka';

  return new Response(null, {
    status: 302,
    headers: {
      Location:     from,
      'Set-Cookie': localeCookie(locale),
    },
  });
};
