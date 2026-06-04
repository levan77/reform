import type { Listing } from './types';
import type { KVNamespace } from './runtime';
import { SEED_LISTINGS } from './seed';

const KEY = 'listings';

/**
 * Reads all listings from KV. On first run (empty namespace) it seeds the demo
 * listings and persists them, so the catalog is never empty out of the box.
 */
export async function getListings(kv: KVNamespace): Promise<Listing[]> {
  const data = (await kv.get(KEY, 'json')) as Listing[] | null;
  if (!data) {
    await kv.put(KEY, JSON.stringify(SEED_LISTINGS));
    return SEED_LISTINGS;
  }
  return data;
}

async function saveAll(kv: KVNamespace, listings: Listing[]): Promise<void> {
  await kv.put(KEY, JSON.stringify(listings));
}

export async function getListing(kv: KVNamespace, slug: string): Promise<Listing | undefined> {
  return (await getListings(kv)).find(l => l.slug === slug);
}

export async function getListingById(kv: KVNamespace, id: string): Promise<Listing | undefined> {
  return (await getListings(kv)).find(l => l.id === id);
}

export async function createListing(kv: KVNamespace, listing: Listing): Promise<void> {
  const all = await getListings(kv);
  all.unshift(listing);
  await saveAll(kv, all);
}

export async function updateListing(
  kv: KVNamespace,
  id: string,
  patch: Partial<Listing>,
): Promise<boolean> {
  const all = await getListings(kv);
  const idx = all.findIndex(l => l.id === id);
  if (idx === -1) return false;
  all[idx] = { ...all[idx], ...patch };
  await saveAll(kv, all);
  return true;
}

export async function deleteListing(kv: KVNamespace, id: string): Promise<boolean> {
  const all      = await getListings(kv);
  const filtered = all.filter(l => l.id !== id);
  if (filtered.length === all.length) return false;
  await saveAll(kv, filtered);
  return true;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
