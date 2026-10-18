import type { Dictionary } from './config';
import { DELETE_ACCOUNT_EMAIL, DEVELOPER_NAME } from './config';

export const en: Dictionary = {
  meta: {
    title: 'Nova — a complete dev environment on Android',
    description:
      'Nova is a code editor that runs on your Android phone and executes code for real on the device: Python, JavaScript, PHP, Go, Rust, Ruby, Java, Kotlin, Dart, C/C++. Free forever.',
  },
  header: { features: 'Features', download: 'Download', langLabel: 'Language', themeLabel: 'Theme' },
  hero: {
    kicker: 'N° 01 — The phone is a real dev machine',
    tagline:
      'Write code, press Run, and see the result — inside a real Linux environment embedded in the app itself. No server. No emulation.',
    primaryCta: 'Download Nova →',
    secondaryCta: 'See features',
    note: 'Free forever · No account · Works offline after first install',
  },
  features: {
    kicker: 'What it does',
    title: 'Everything, on your phone.',
    items: [
      {
        title: 'I. Real editor',
        body: 'Multi-tab editor with syntax highlighting, autocomplete, themes and coding fonts.',
      },
      {
        title: 'II. Real terminal',
        body: 'A full interactive terminal with a custom keyboard for mobile typing.',
      },
      {
        title: 'III. Ten languages',
        body: 'Python, Node.js, PHP, Go, Rust, Ruby, Java, Kotlin, Dart and C/C++ — installed on demand.',
      },
      {
        title: 'IV. Git built in',
        body: 'Clone, commit and manage repositories without leaving the app.',
      },
      {
        title: 'V. Web preview',
        body: 'Serve your project and preview the page instantly inside Nova.',
      },
      {
        title: 'VI. Offline first',
        body: 'After the first package install, everything runs without a connection.',
      },
    ],
  },
  stats: {
    items: [
      { value: '10+', label: 'Languages that run on-device' },
      { value: '0', label: 'Servers — nothing leaves your phone' },
      { value: '100%', label: 'Offline after the first install' },
      { value: '0', label: 'Price — free forever, a waqf' },
    ],
  },
  download: {
    kicker: 'Get Nova',
    title: 'Install it. Run code.',
    body: 'Two ways to get the app. Both are free, both are the same Nova.',
    playCta: 'Get it on Google Play →',
    apkCta: 'Download APK (GitHub) →',
    reqTitle: 'Requirements',
    reqs: [
      'An Android phone (arm64), Android 8.0 or newer',
      'Internet connection on first launch only (runtime download)',
      '~70 MB for the slim runtime, ~283 MB for the full offline pack',
    ],
  },
  editor: {
    kicker: 'The editor',
    title: 'Nova Dark, straight from the app.',
    filename: 'main.py — Nova Dark',
  },
  quote: {
    text: 'The phone is not a viewer. It is the machine.',
    author: '— The Nova philosophy',
  },
  final: {
    title: 'Stop waiting for a computer.',
    body: 'Your next program starts in your pocket.',
    cta: 'Download Nova →',
  },
  footer: {
    tagline: 'A complete dev environment on Android.',
    rights: 'Nova is a waqf for the sake of Allah. Licensed under the Waqf-1.0 license.',
    releases: 'Releases',
    source: 'Source code',
    sitemap: 'Sitemap',
    top: 'Back to top',
    contact: 'Contact',
    website: 'Personal website',
    deleteAccount: 'Delete account',
  },
  sitemapPage: {
    title: 'Sitemap.',
    intro: 'Every page on this site, in every language.',
    pages: 'Pages',
    sections: 'Sections',
    links: 'Links',
  },
  notFound: {
    title: '404 — Nothing here.',
    body: 'This page does not exist. The editor, however, does.',
    back: '← Back to home',
  },
  deleteAccount: {
    kicker: 'Google Play — Account deletion',
    title: 'Delete your Nova account and data.',
    updated: 'Last updated: 18 October 2026',
    intro:
      `This page explains how to delete your Nova account and the data associated with it. Nova (app ID sd.adaa.codeide) is published by ${DEVELOPER_NAME} on Google Play.`,
    inAppTitle: 'Option 1 — Delete from inside the app (recommended)',
    inAppBody:
      'If Nova is still installed on your phone, you can delete your account directly in the app. Your sign-in account is deleted immediately.',
    inAppSteps: [
      'Open Nova.',
      'Open Settings.',
      'In the Account card, tap “Delete account”.',
      'Confirm in the dialog. Your account is deleted immediately.',
    ],
    webTitle: 'Option 2 — Request deletion without the app',
    webBody:
      'If you no longer have Nova installed, email us from the address linked to your account and we will delete it for you, normally within 30 days.',
    webEmailLabel:
      `Send an email to ${DELETE_ACCOUNT_EMAIL} with the subject “Nova account deletion”.`,
    deletedTitle: 'Data that is deleted',
    deletedBody:
      'When your account is deleted, the following data is permanently removed:',
    deletedItems: [
      'Your Nova sign-in account: email address, display name, and linked sign-in providers (Google, GitHub, X, or email/password).',
      'Your profile record linked to your account ID (email, display name, linked providers).',
      'Your device push-notification token.',
      'Your rewards points balance and coupon/redemption history.',
    ],
    retainedTitle: 'Data that may be retained',
    retainedBody: 'A limited set of data is kept after deletion:',
    retainedItems: [
      'Aggregated, de-identified analytics events may be retained for up to 14 months, and crash reports for up to 90 days, to keep the app stable. This data is not linked to your identity after deletion.',
      'Records we are legally required to keep (for example for accounting or fraud prevention) are retained only for as long as the law requires.',
      'Backups: copies in encrypted backups may persist for up to 30 days before being overwritten.',
    ],
    localTitle: 'Your code stays on your device',
    localBody:
      'Your projects and files live only on your phone and are never uploaded to our servers. Deleting your account does not touch them; uninstalling Nova removes the app, its runtime, and those local files.',
    contactTitle: 'Contact',
    contactBody:
      `For any question about account or data deletion, contact ${DELETE_ACCOUNT_EMAIL}.`,
    back: '← Back to home',
  },
};
