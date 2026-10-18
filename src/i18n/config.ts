export const PLAY_URL = 'https://play.google.com/store/apps/details?id=sd.adaa.codeide';
export const RELEASES_URL = 'https://github.com/Tayeb-Ali/nova/releases';
export const REPO_URL = 'https://github.com/Tayeb-Ali/nova';

export const SITE_URL = 'https://nova.elteyab.sd';
export const PERSONAL_URL = 'https://elteyab.sd';
export const CONTACT_EMAIL = 'elteyab@smart.sd';

/// Public page the user can visit to request deletion of their Nova account
/// and data. This is the URL submitted to the Google Play Data Safety form.
export const DELETE_ACCOUNT_PATH = '/delete-account/';
export const DELETE_ACCOUNT_URL = new URL(DELETE_ACCOUNT_PATH, SITE_URL).href;

/// Developer shown on the Google Play listing (organization name).
export const DEVELOPER_NAME = 'TheDeveloper SD';

/// Address users write to in order to request account & data deletion.
export const DELETE_ACCOUNT_EMAIL = 'nova@smart.sd';

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
  footer: { tagline: string; rights: string; releases: string; source: string; sitemap: string; top: string; contact: string; website: string; deleteAccount: string };
  sitemapPage: { title: string; intro: string; pages: string; sections: string; links: string };
  notFound: { title: string; body: string; back: string };
  deleteAccount: {
    kicker: string;
    title: string;
    updated: string;
    intro: string;
    inAppTitle: string;
    inAppBody: string;
    inAppSteps: string[];
    webTitle: string;
    webBody: string;
    webEmailLabel: string;
    deletedTitle: string;
    deletedBody: string;
    deletedItems: string[];
    retainedTitle: string;
    retainedBody: string;
    retainedItems: string[];
    localTitle: string;
    localBody: string;
    contactTitle: string;
    contactBody: string;
    back: string;
  };
}

export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '/' : path;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}

export function pageUrl(locale: Locale): string {
  return new URL(localePath(locale), SITE_URL).href;
}
