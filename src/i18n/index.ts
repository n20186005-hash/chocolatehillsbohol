import { en } from './en';
import { fil } from './fil';

export const translations = {
  en,
  fil,
} as const;

export type LocaleCode = 'fil' | 'en';
export type TranslationDict = typeof fil;

export const DEFAULT_LOCALE: LocaleCode = 'en';

export function getDictionary(locale: LocaleCode | undefined | string): TranslationDict {
  const key = (locale ?? DEFAULT_LOCALE) as LocaleCode;
  return translations[key] ?? translations[DEFAULT_LOCALE];
}

/** 默认语言（en）位于根路径，其他语言带 /fil 前缀；传入的 path 可能已带语言前缀，需先剥掉 */
export function localizePath(pathname: string, locale: LocaleCode | string | undefined): string {
  const target = (locale ?? DEFAULT_LOCALE) as LocaleCode;
  const path = pathname || '/';
  const stripped = (path.startsWith('/fil/') ? path.slice(4) : path === '/fil' ? '/' : path) || '/';
  if (target === 'en') return stripped;
  return stripped === '/' ? '/fil/' : `/fil${stripped}`;
}

export const localeNames: Record<LocaleCode, { native: string; english: string; flag: string }> = {
  en: { native: 'English', english: 'English', flag: '🇬🇧' },
  fil: { native: 'Filipino', english: 'Filipino', flag: '🇵🇭' },
};

export const locales: LocaleCode[] = ['en', 'fil'];
