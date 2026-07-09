// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Project site on GitHub Pages: https://insolitus-create.github.io/SchoolWell
// All internal links must be built off import.meta.env.BASE_URL (see src/i18n/utils.ts).
export default defineConfig({
  site: 'https://insolitus-create.github.io',
  base: '/SchoolWell',
  i18n: {
    locales: ['pl', 'ro', 'en'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
