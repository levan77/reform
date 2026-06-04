# ReForma — reforma.ge

Architectural real estate platform for Tbilisi. Showcases heritage apartments
and their post-renovation potential through interactive before/after sliders,
floor-plan switchers, and a financial-potential dashboard.

Bilingual (**Georgian** default + English), with a password-protected admin
panel for managing listings. Built on **Astro** (SSR) + **Tailwind**, deployed
to **Cloudflare Pages** with listings stored in **Cloudflare KV**.

---

## Tech stack

| Concern        | Choice                                            |
|----------------|---------------------------------------------------|
| Framework      | Astro 4 (SSR via `@astrojs/cloudflare`)           |
| Styling        | Tailwind CSS                                       |
| Interactions   | Vanilla TypeScript (no UI framework)              |
| Data store     | Cloudflare KV (`LISTINGS` namespace)              |
| Auth           | HMAC-signed cookie (Web Crypto), single admin password |
| i18n           | Cookie-based locale (`ka` default, `en`)         |
| Hosting        | Cloudflare Pages (Git integration)               |

---

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
```

`astro dev` uses the Cloudflare adapter's **platform proxy**, so the `LISTINGS`
KV namespace is simulated locally (state persisted under `.wrangler/`). On first
load the store is auto-seeded with the demo listings in `src/lib/seed.ts`.

- **Public site:** http://localhost:4321
- **Admin:** http://localhost:4321/admin — default password `reforma2024`

Local env defaults live in `wrangler.toml` under `[vars]`. Change the password /
secret there for local testing, or set real values in the Cloudflare dashboard
for production (see below).

---

## Deploying to Cloudflare Pages

### 1. Create the KV namespace (one time)

```bash
npx wrangler login
npm run kv:create          # = wrangler kv namespace create LISTINGS
```

Copy the printed `id` and paste it into `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "LISTINGS"
id = "PASTE_THE_ID_HERE"
```

Commit and push that change.

### 2. Connect the repo to Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → select this repository.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. **Settings → Functions → KV namespace bindings:** add
   `LISTINGS` → your namespace (if not already picked up from `wrangler.toml`).
4. **Settings → Environment variables** (Production *and* Preview):
   - `ADMIN_PASSWORD` — your real admin password
   - `SESSION_SECRET` — a long random string (e.g. `openssl rand -base64 32`)
5. **Settings → Functions → Compatibility flags:** add `nodejs_compat`
   (also already declared in `wrangler.toml`).

### 3. Deploy

Every push to the default branch triggers a build + deploy automatically.
The KV store seeds itself on first request, so the catalog is populated
immediately after the first deploy.

> **Note on KV:** writes are strongly consistent within a region and propagate
> globally within ~60s. For a single-admin listing workflow this is invisible.

---

## Project structure

```
src/
├── components/        # Slider, floor-plan switcher, dashboard, cards, nav…
├── layouts/           # BaseLayout (public), AdminLayout
├── lib/
│   ├── types.ts       # Listing type + tag enum
│   ├── seed.ts        # Demo listings (seeded into KV on first run)
│   ├── db.ts          # KV-backed CRUD
│   ├── runtime.ts     # KV + env accessors for the Cloudflare runtime
│   ├── auth.ts        # HMAC session tokens (Web Crypto)
│   └── i18n.ts        # ka/en dictionary + translators
├── middleware/        # Protects /admin/* and /api/admin/*
└── pages/
    ├── index.astro            # Hero + catalog + process
    ├── about.astro, contact.astro
    ├── properties/[slug].astro
    ├── admin/                 # Login, dashboard, new/edit forms
    └── api/                   # login, logout, listings CRUD, contact, lang
```

## Managing listings

Log in at `/admin`, then add / edit / delete from the dashboard. Each listing
supports optional Georgian translations (title / address / description); if left
blank, the English text is shown in both languages. Tags and districts are
translated automatically.
