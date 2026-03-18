# Patriots For Action PAC (React + Vite)

Production-ready PAC website built with **Vite + React + TypeScript** and **Tailwind CSS**, following the layout/component patterns from the `patriot-paper` template (two-tier header, patriotic tokens, motion helpers, UI primitives).

## Local development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Routes

- `/` Home
- `/about`
- `/issues`
- `/counties` (**external-only**: links out to `patriotsinactiontx.com`, no county subpages)
- `/news`
- `/news/:postSlug`
- `/operation-show-up`
- `/volunteer`
- `/donate`
- `/contact`
- `/privacy`
- `/terms`
- `*` 404

## Environment variables

Create `.env.local` for local overrides (never commit secrets).

### Core

- **`VITE_SITE_URL`**: canonical site URL used for `canonical` links and `sitemap.xml` (e.g. `https://pac.example.org`)
- **`VITE_CMS_PROVIDER`**: `json` (default), `decap`, `sanity`, `wordpress` (stubs; see CMS section)

### Analytics (privacy-friendly)

The repo includes a clean example for **Plausible** behind an env flag.

- **`VITE_ANALYTICS_ENABLED`**: `true|false` (default false)
- **`VITE_ANALYTICS_PROVIDER`**: `plausible`
- **`VITE_PLAUSIBLE_DOMAIN`**: your domain (e.g. `pac.example.org`)
- **`VITE_PLAUSIBLE_SRC`** (optional): script URL (defaults to `https://plausible.io/js/script.js`)

### Donations

This site never collects raw card details. Donation modes are enabled independently:

- **ActBlue embed**
  - `VITE_DONATE_ACTBLUE_ENABLED=true`
  - `VITE_DONATE_ACTBLUE_IFRAME_SRC=<iframe src URL>`
- **PayPal hosted checkout**
  - `VITE_DONATE_PAYPAL_ENABLED=true`
  - `VITE_DONATE_PAYPAL_URL=<hosted checkout URL>`
- **Stripe hosted Checkout**
  - `VITE_DONATE_STRIPE_ENABLED=true`
  - `VITE_DONATE_STRIPE_CHECKOUT_URL=<hosted checkout URL>`

## Content: events and news

Default content source is **local JSON** in `src/data/`:

- `src/data/events.json`
- `src/data/news.json`

### Add an event

Add a new object to `src/data/events.json` with a unique `slug`. Event detail pages render `detailsMarkdown` via a sanitized Markdown renderer.

> Note: Events routes are currently disabled (temporarily). The data model and pages remain in the repo for easy re-enable later.

### Add a news post

Add a new object to `src/data/news.json` with a unique `slug`. Optional `sourceUrl` renders an “Originally published at …” line (no scraping).

## CMS swap guidance (`src/lib/cms/`)

The app calls a CMS abstraction layer so you can swap sources later:

- **JSON (default)**: simple, fast, no backend
- **Decap CMS** (git-based): great editorial UX on Netlify; content lives in-repo
- **Sanity**: structured content, scalable; requires project + tokens
- **Headless WordPress (REST)**: familiar admin UI; requires hosting + caching plan

To switch, set `VITE_CMS_PROVIDER` and implement the provider client under `src/lib/cms/providers/`.

## Forms: Volunteer / Contact / Submit an event

Forms are:

- Accessible (labels, focus, keyboard)
- Validated client-side (Zod + React Hook Form)
- Submitted via **Netlify Forms** by default (with a honeypot)

### Spam protection options

- **Netlify Forms + honeypot**: enabled by default
- **reCAPTCHA**: optional (documented configuration)
- **Cloudflare Turnstile**: example server-side verification endpoints:
  - Netlify: `netlify/functions/turnstile-verify.js`
  - Vercel: `api/turnstile-verify.js`

Set:

- `TURNSTILE_SECRET_KEY` (server-side env var)

## SEO

- `Seo` component uses `react-helmet-async` for title/description/canonical + OpenGraph/Twitter
- `sitemap.xml` and `robots.txt` are generated at build time (`scripts/generate-seo.mjs`)
  - No county dynamic routes exist, and none are generated

## Optional pre-rendering (SSG) for marketing routes

To generate crawlable HTML for key marketing routes (`/`, `/about`, `/issues`, `/donate`, `/volunteer`):

```bash
npm run build:prerender
```

This uses a Vite SSR build + a prerender script:

- SSR entry: `src/entry-server.tsx`
- prerender: `scripts/prerender.mjs`

## Deployment

### Netlify

- Config: `netlify.toml`
- Includes SPA rewrite rules so refresh works on nested routes.
- Build output: `dist/`

If you want prerendered marketing pages on Netlify, set build command to:

```bash
npm run build:prerender
```

### Vercel

- Config: `vercel.json` (SPA rewrite)
- Build output: `dist/`

## Compliance TODO checklist (do before launch)

- Replace **footer** disclaimer placeholder text with legal-approved copy
- Confirm **Donate** page donor certifications and disclaimer copy
- Set correct entity legal name / address / jurisdiction in `src/config/site.ts`
- Confirm analytics policy (on/off + disclosures in `Privacy`)

## Counties policy (important)

County-specific “Patriots in Action” sites are hosted on **`patriotsinactiontx.com`**.

This PAC app **must not** replicate or host county microsites:

- No `/counties/:countySlug` routes
- No county cards or lists
- `/counties` only explains and links out

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
