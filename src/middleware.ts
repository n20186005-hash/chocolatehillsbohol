import { defineMiddleware } from 'astro:middleware';

/**
 * URL 规范化（Technical SEO）
 * - 站点的默认语言是 English，规范地址为根路径 https://chocolatehillsbohol.com/
 * - /en、/en/（历史英文地址）301 到根路径，把权重集中到一处
 * - /fil 补上尾斜杠，避免与 /fil/ 产生重复收录
 * - 历史遗留短链 301 到对应锚点，避免 404 与抓取浪费
 */
const PERMANENT_REDIRECTS: Record<string, string> = {
  '/en': '/',
  '/en/': '/',
  '/fil': '/fil/',
  '/home': '/',
  '/about': '/#about',
  '/history': '/#history',
  '/visit': '/#fees',
  '/travel': '/#transport',
  '/plan': '/#itinerary',
  '/itinerary': '/#itinerary',
  '/food': '/#food',
  '/hotel': '/#facilities',
  '/stay': '/#facilities',
};

export const onRequest = defineMiddleware((context, next) => {
  const target = PERMANENT_REDIRECTS[context.url.pathname];
  const productionHost = ['chocolatehillsbohol.com', 'www.chocolatehillsbohol.com'].includes(context.url.hostname);
  if (target || (productionHost && (context.url.protocol !== 'https:' || context.url.hostname.startsWith('www.')))) {
    const destination = new URL(target || context.url.pathname, productionHost ? 'https://chocolatehillsbohol.com' : context.url.origin);
    destination.search = context.url.search;
    return context.redirect(destination.href, 301);
  }
  return next();
});
