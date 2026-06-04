import type { APIRoute } from 'astro';
import { createSessionToken, sessionCookie } from '../../../lib/auth';
import { getAdminPassword, getSessionSecret } from '../../../lib/runtime';

export const POST: APIRoute = async ({ request, redirect, locals }) => {
  const form     = await request.formData();
  const password = ((form.get('password') as string) ?? '').trim();

  if (password !== getAdminPassword(locals)) {
    return redirect('/admin?error=1');
  }

  const token = await createSessionToken(getSessionSecret(locals));
  return new Response(null, {
    status: 302,
    headers: {
      Location:     '/admin/dashboard',
      'Set-Cookie': sessionCookie(token),
    },
  });
};
