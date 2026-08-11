import { en } from './en';
import { fil } from './fil';

export const translations = {
  en,
  fil,
} as const;

export type LocaleCode = 'fil' | 'en';
export type TranslationDict = typeof fil;

export function getDictionary(locale: LocaleCode | undefined | string): TranslationDict {
  const key = (locale ?? 'fil') as LocaleCode;
  return translations[key] ?? translations.fil;
}

export function localizePath(pathname: string, locale: LocaleCode | string | undefined): string {
  const target = (locale ?? 'fil') as LocaleCode;
  if (target === 'fil') return pathname || '/';
  return `/en${pathname === '/' ? '' : pathname}`;
}

export const localeNames: Record<LocaleCode, { native: string; english: string; flag: string }> = {
  fil: { native: 'Filipino', english: 'Filipino', flag: '🇵🇭' },
  en: { native: 'English', english: 'English', flag: '🇬🇧' },
};
