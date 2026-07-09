# Tech Stack

Reference for spinning up a bilingual, statically generated content website with
no backend, database, or admin UI. Deploys to GitHub Pages via GitHub Actions.

## Core

| Layer | Choice | Version | Notes |
|-------|--------|---------|-------|
| Static site generator | [Astro](https://astro.build) | `^6.4.4` | Builds Markdown + templates into plain HTML in `dist/`. No server at request time. |
| Runtime | Node.js | `>=22.12.0` | Build-time only. |
| Package manager | pnpm | — | Lockfile is `pnpm-lock.yaml`. |
| Language | TypeScript | strict | Extends `astro/tsconfigs/strict`. |
| UI framework (islands) | [React](https://react.dev) | `^19.2` | Via `@astrojs/react`. Optional — most of the site is zero-JS `.astro` components; React is opt-in per component with `client:load`. |
| Styling | [Tailwind CSS](https://tailwindcss.com) | `^4.3` | v4, wired through the `@tailwindcss/vite` plugin (not a PostCSS config). `@tailwindcss/typography` for prose. |
| Hosting | GitHub Pages | — | Free static hosting with custom domain + HTTPS. Built and deployed by GitHub Actions on push to `main`. |
| CI/CD | GitHub Actions | — | `withastro/action` builds the site; `actions/deploy-pages` publishes it. |

## Dependencies

```json
"dependencies": {
  "@astrojs/react": "^5.0.7",
  "@tailwindcss/vite": "^4.3.0",
  "@types/react": "^19.2.17",
  "@types/react-dom": "^19.2.3",
  "astro": "^6.4.4",
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "tailwindcss": "^4.3.0"
},
"devDependencies": {
  "@tailwindcss/typography": "^0.5.19"
}
```

## Key architectural patterns

**Content as the "CMS."** No database and no admin UI. All content is Markdown
files in the repo. Astro **content collections** (`src/content.config.ts`) define
the shape of each collection with a **Zod** schema. `astro build` validates every
Markdown file against its schema — a bad frontmatter field fails the build before
anything ships. Editing content = opening a pull request; merging triggers rebuild
and redeploy.

- Collections loaded with `glob({ pattern: '**/*.md', base: './src/content/<name>' })`.
- Zod `.refine()` enforces cross-field rules (e.g. an `event` must have a `location`).

**Internationalization (bilingual).** Configured in `astro.config.mjs` under `i18n`
(`locales`, `defaultLocale`, `routing.prefixDefaultLocale`). Routes live under
`src/pages/[lang]/...`. Content is duplicated per locale (`content/news/{en,pl}/`).
A build-time parity check (`src/i18n/parity.ts`) fails the build if a slug is missing
in any locale. A tiny script at the root path (`src/pages/index.astro`) reads the
browser language and redirects, remembering the choice in `localStorage`.

> **GitHub Pages caveat:** if you deploy to a project site
> (`https://<user>.github.io/<repo>`), set `base: '/<repo>'` in `astro.config.mjs`
> and build all internal links — including the root-redirect and locale-switch URLs
> in `src/i18n/utils.ts` — off `import.meta.env.BASE_URL` instead of a hardcoded `/`.
> With a custom domain or a user/org site (`<user>.github.io`), `base` stays `/` and
> this problem disappears.

**Islands architecture.** Pages are static HTML by default. Interactivity is added
per-component with React islands (`<Component client:load />`) only where needed.

## Project layout

```
src/
├── content.config.ts     Zod schemas for content collections
├── content/{en,pl}/      Markdown content, one folder per locale
├── i18n/                 UI string dictionary, url helpers, build-time parity check
├── components/           Reusable .astro components
├── layouts/              HTML shell + SEO meta (og tags, hreflang)
├── pages/
│   ├── index.astro       Root: browser-language redirect
│   └── [lang]/...        Localized routes
└── styles/global.css     Tailwind entry
public/images/            Static assets referenced from frontmatter
astro.config.mjs          Site URL, i18n, integrations, Vite/Tailwind plugin
tsconfig.json             Strict TS + React JSX
```

## Commands

```sh
pnpm install      # install dependencies
pnpm dev          # dev server at http://localhost:4321 (hot reload)
pnpm build        # produce static site in dist/
pnpm preview      # serve the built site locally to verify before deploy
```

## To bootstrap a new project like this

```sh
pnpm create astro@latest
pnpm astro add react
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @tailwindcss/typography
```

Then: configure `i18n` in `astro.config.mjs`, define content collections with Zod
schemas in `src/content.config.ts`, add the `@tailwindcss/vite` plugin under
`vite.plugins`, and connect a Cloudflare Pages project to the repo for CI/CD.
