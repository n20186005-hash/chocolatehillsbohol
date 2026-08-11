// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts';

export default defineConfig({
  site: SITE.url || undefined,
  integrations: [
    ...(SITE.url ? [sitemap()] : []),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'fil',
    locales: ['fil', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
