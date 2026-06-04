import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const form    = await request.formData();
  const name    = (form.get('name')    as string ?? '').trim();
  const email   = (form.get('email')   as string ?? '').trim();
  const message = (form.get('message') as string ?? '').trim();

  if (!name || !email || !message) {
    return redirect('/contact?error=missing');
  }

  // In production: send via Resend / Nodemailer / Postmark
  console.log('[CONTACT]', { name, email, message });

  return redirect('/contact?sent=1');
};
