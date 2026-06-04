import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare({
    // Expose Cloudflare bindings (KV, env vars) during `astro dev` via miniflare
    platformProxy: { enabled: true },
    // We only use plain <img> with remote URLs, so skip the sharp-based service
    imageService: 'passthrough',
  }),
  build: {
    inlineStylesheets: 'auto',
  },
});
