export const locales = ['pl', 'ro', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  pl: 'Polski',
  ro: 'Română',
  en: 'English',
};

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix a root-relative path with the deployment base path. */
export function withBase(path: string): string {
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** URL of a page inside a locale, e.g. localePath('pl', 'gallery/') → /SchoolWell/pl/gallery/ */
export function localePath(lang: Locale, path = ''): string {
  return withBase(`${lang}/${path.replace(/^\/+/, '')}`);
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Path of the current page with the locale segment swapped, for the language switcher. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const rest = pathname
    .replace(/^\/+/, '/')
    .slice(base.length)
    .replace(/^\/(pl|ro|en)(?=\/|$)/, '');
  return localePath(target, rest.replace(/^\/+/, ''));
}
