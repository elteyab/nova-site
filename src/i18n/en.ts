import type { Dictionary } from './config';

export const en: Dictionary = {
  meta: {
    title: 'Nova — a complete dev environment on Android',
    description:
      'Nova is a code editor that runs on your Android phone and executes code for real on the device: Python, JavaScript, PHP, Go, Rust, Ruby, Java, Kotlin, Dart, C/C++. Free forever.',
  },
  header: { features: 'Features', download: 'Download', langLabel: 'Language' },
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
  },
  notFound: {
    title: '404 — Nothing here.',
    body: 'This page does not exist. The editor, however, does.',
    back: '← Back to home',
  },
};
