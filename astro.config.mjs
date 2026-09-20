// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import { SITE } from './src/consts';

export default defineConfig({
  site: SITE.url || undefined,
  integrations: [
    tailwind(),
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
    // 英文为默认语言：搜索需求（entrance fee / opening hours / photos）几乎全部为英文，
    // 规范地址应为根路径 https://chocolatehillsbohol.com/ ，Filipino 版本位于 /fil/
    defaultLocale: 'en',
    locales: ['en', 'fil'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
