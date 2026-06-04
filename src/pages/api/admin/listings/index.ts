import type { APIRoute } from 'astro';
import { createListing, slugify, getListings } from '../../../../lib/db';
import { getKV } from '../../../../lib/runtime';
import type { Listing, Tag } from '../../../../lib/types';
import { ALL_TAGS } from '../../../../lib/types';

export const POST: APIRoute = async ({ request, redirect, locals }) => {
  const kv   = getKV(locals);
  const form = await request.formData();

  const str = (k: string) => ((form.get(k) as string) ?? '').trim();
  const toLines = (s: string) => s.split('\n').map(l => l.trim()).filter(Boolean);

  const title = str('title');
  const tags  = ALL_TAGS.filter(t => form.get(`tag_${t}`) === 'on') as Tag[];

  // Ensure a unique slug
  const baseSlug = slugify(title);
  const existing = (await getListings(kv)).map(l => l.slug);
  let slug = baseSlug || `listing`;
  let n = 2;
  while (existing.includes(slug)) slug = `${baseSlug}-${n++}`;

  const ka = {
    title:       str('ka_title')       || undefined,
    address:     str('ka_address')     || undefined,
    description: str('ka_description') || undefined,
  };
  const hasKa = ka.title || ka.address || ka.description;

  const listing: Listing = {
    id:           `lst_${Date.now()}`,
    slug,
    title,
    address:      str('address'),
    district:     str('district'),
    tags,
    size_sqm:     Number(form.get('size_sqm')),
    floor:        Number(form.get('floor')),
    total_floors: Number(form.get('total_floors')),
    year_built:   form.get('year_built') ? Number(form.get('year_built')) : undefined,
    images: {
      cover:                str('cover'),
      before:               toLines(str('before_urls')),
      after:                toLines(str('after_urls')),
      floor_plan_existing:  str('floor_plan_existing'),
      floor_plan_optimized: str('floor_plan_optimized'),
      gallery:              toLines(str('gallery_urls')),
    },
    financials: {
      asking_price_gel:           Number(form.get('asking_price')),
      renovation_estimate_gel:    Number(form.get('renovation_estimate')),
      post_reno_market_value_gel: Number(form.get('post_reno_value')),
    },
    featured:    form.get('featured') === 'on',
    published:   new Date().toISOString().split('T')[0],
    description: str('description'),
    ...(hasKa ? { ka } : {}),
  };

  await createListing(kv, listing);
  return redirect('/admin/dashboard?created=1');
};
