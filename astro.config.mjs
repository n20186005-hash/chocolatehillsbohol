// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { SITE } from './src/consts';

export default defineConfig({
  site: SITE.url || undefined,
  integrations: [
    ...(SITE.url ? [sitemap()] : []),
  ],
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: 'passthrough',
  }),
  build: {
    format: 'directory',
    assets: 'assets', // 避免 Wrangler 忽略 _astro 目录（下划线前缀会被默认跳过）
  },
  i18n: {
    defaultLocale: 'fil',
    locales: ['fil', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
