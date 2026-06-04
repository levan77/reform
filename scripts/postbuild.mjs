// After `astro build`, emit dist/.assetsignore so Wrangler's static-assets
// uploader skips the SSR worker bundle and the Pages-only routes file.
// Required because the worker entry (dist/_worker.js) lives inside the
// assets directory (dist/) in the Cloudflare Workers + Assets model.
import { writeFileSync } from 'node:fs';

const target = new URL('../dist/.assetsignore', import.meta.url);
writeFileSync(target, '_worker.js\n_routes.json\n');
console.log('postbuild: wrote dist/.assetsignore');
