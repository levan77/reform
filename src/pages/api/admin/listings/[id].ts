import type { APIRoute } from 'astro';
import { updateListing, deleteListing } from '../../../../lib/db';
import { getKV } from '../../../../lib/runtime';
import type { Tag } from '../../../../lib/types';
import { ALL_TAGS } from '../../../../lib/types';

export const PUT: APIRoute = async ({ request, params, redirect, locals }) => {
  const { id } = params;
  if (!id) return new Response('Missing id', { status: 400 });

  const kv   = getKV(locals);
  const form = await request.formData();

  const str = (k: string) => ((form.get(k) as string) ?? '').trim();
  const toLines = (s: string) => s.split('\n').map(l => l.trim()).filter(Boolean);

  const tags = ALL_TAGS.filter(t => form.get(`tag_${t}`) === 'on') as Tag[];

  const ka = {
    title:       str('ka_title')       || undefined,
    address:     str('ka_address')     || undefined,
    description: str('ka_description') || undefined,
  };
  const hasKa = ka.title || ka.address || ka.description;

  const patch = {
    title:        str('title'),
    address:      str('address'),
    district:     str('district'),
    size_sqm:     Number(form.get('size_sqm')),
    floor:        Number(form.get('floor')),
    total_floors: Number(form.get('total_floors')),
    year_built:   form.get('year_built') ? Number(form.get('year_built')) : undefined,
    description:  str('description'),
    featured:     form.get('featured') === 'on',
    tags,
    images: {
      cover:                str('cover'),
      before:               toLines(str('before_urls')),
      after:                toLines(str('after_urls')),
      floor_plan_existing:  str('floor_plan_existing'),
      floor_plan_optimized: str('floor_plan_optimized'),
    },
    financials: {
      asking_price_gel:           Number(form.get('asking_price')),
      renovation_estimate_gel:    Number(form.get('renovation_estimate')),
      post_reno_market_value_gel: Number(form.get('post_reno_value')),
    },
    ...(hasKa ? { ka } : { ka: undefined }),
  };

  const ok = await updateListing(kv, id, patch);
  return redirect(ok ? '/admin/dashboard?updated=1' : '/admin/dashboard?error=1');
};

export const DELETE: APIRoute = async ({ params, redirect, locals }) => {
  const { id } = params;
  if (!id) return new Response('Missing id', { status: 400 });
  await deleteListing(getKV(locals), id);
  return redirect('/admin/dashboard?deleted=1');
};
