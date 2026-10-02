export const PLAY_URL = 'https://play.google.com/store/apps/details?id=sd.adaa.codeide';
export const RELEASES_URL = 'https://github.com/Tayeb-Ali/nova/releases';
export const REPO_URL = 'https://github.com/Tayeb-Ali/nova';

export const SITE_URL = 'https://nova.elteyab.sd';

export type Locale = 'en' | 'ar' | 'fr';

export const LOCALES: { code: Locale; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
];

export interface Feature {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  header: { features: string; download: string; langLabel: string; themeLabel: string };
  hero: {
    kicker: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  features: { kicker: string; title: string; items: Feature[] };
  stats: { items: Stat[] };
  editor: { kicker: string; title: string; filename: string };
  download: {
    kicker: string;
    title: string;
    body: string;
    playCta: string;
    apkCta: string;
    reqTitle: string;
    reqs: string[];
  };
  quote: { text: string; author: string };
  final: { title: string; body: string; cta: string };
  footer: { tagline: string; rights: string; releases: string; source: string; sitemap: string; top: string };
  sitemapPage: { title: string; intro: string; pages: string; sections: string; links: string };
  notFound: { title: string; body: string; back: string };
}

export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '/' : path;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}

export function pageUrl(locale: Locale): string {
  return new URL(localePath(locale), SITE_URL).href;
}
