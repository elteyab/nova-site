import type { Dictionary } from './config';

export const fr: Dictionary = {
  meta: {
    title: 'Nova — un environnement de dev complet sur Android',
    description:
      "Nova est un éditeur de code qui tourne sur votre téléphone Android et exécute le code pour de vrai sur l'appareil : Python, JavaScript, PHP, Go, Rust, Ruby, Java, Kotlin, Dart, C/C++. Gratuit pour toujours.",
  },
  header: { features: 'Fonctions', download: 'Télécharger', langLabel: 'Langue', themeLabel: 'Thème' },
  hero: {
    kicker: 'N° 01 — Le téléphone est une vraie machine de dev',
    tagline:
      'Écrivez du code, appuyez sur Exécuter, et voyez le résultat — dans un vrai environnement Linux embarqué dans l’application. Ni serveur. Ni émulation.',
    primaryCta: 'Télécharger Nova →',
    secondaryCta: 'Voir les fonctions',
    note: 'Gratuit pour toujours · Sans compte · Hors-ligne après la première installation',
  },
  features: {
    kicker: 'Ce qu’il fait',
    title: 'Tout, sur votre téléphone.',
    items: [
      {
        title: 'I. Vrai éditeur',
        body: 'Éditeur multi-onglets avec coloration syntaxique, autocomplétion, thèmes et polices de code.',
      },
      {
        title: 'II. Vrai terminal',
        body: 'Un terminal interactif complet avec un clavier adapté à la saisie mobile.',
      },
      {
        title: 'III. Dix langages',
        body: 'Python, Node.js, PHP, Go, Rust, Ruby, Java, Kotlin, Dart et C/C++ — installés à la demande.',
      },
      {
        title: 'IV. Git intégré',
        body: 'Clonez, commitez et gérez vos dépôts sans quitter l’application.',
      },
      {
        title: 'V. Aperçu web',
        body: 'Servez votre projet et prévisualisez la page instantanément dans Nova.',
      },
      {
        title: 'VI. Priorité hors-ligne',
        body: 'Après la première installation des paquets, tout fonctionne sans connexion.',
      },
    ],
  },
  stats: {
    items: [
      { value: '10+', label: 'Langages exécutés sur l’appareil' },
      { value: '0', label: 'Serveurs — rien ne quitte votre téléphone' },
      { value: '100%', label: 'Hors-ligne après la première installation' },
      { value: '0', label: 'Prix — gratuit pour toujours, un waqf' },
    ],
  },
  download: {
    kicker: 'Obtenir Nova',
    title: 'Installez. Exécutez.',
    body: 'Deux façons d’obtenir l’application. Gratuites toutes les deux, et c’est le même Nova.',
    playCta: 'Disponible sur Google Play →',
    apkCta: 'Télécharger l’APK (GitHub) →',
    reqTitle: 'Prérequis',
    reqs: [
      'Un téléphone Android (arm64), Android 8.0 ou plus récent',
      'Connexion internet au premier lancement uniquement (téléchargement du runtime)',
      '~70 Mo pour le runtime léger, ~283 Mo pour le pack complet hors-ligne',
    ],
  },
  editor: {
    kicker: 'L’éditeur',
    title: 'Nova Dark, tout droit de l’app.',
    filename: 'main.py — Nova Dark',
  },
  quote: {
    text: 'Le téléphone n’est pas un écran. C’est la machine.',
    author: '— La philosophie Nova',
  },
  final: {
    title: 'Cessez d’attendre un ordinateur.',
    body: 'Votre prochain programme commence dans votre poche.',
    cta: 'Télécharger Nova →',
  },
  footer: {
    tagline: 'Un environnement de dev complet sur Android.',
    rights: 'Nova est un waqf pour Allah. Licence Waqf-1.0.',
    releases: 'Versions',
    source: 'Code source',
    sitemap: 'Plan du site',
    top: 'Haut de page',
  },
  sitemapPage: {
    title: 'Plan du site.',
    intro: 'Toutes les pages du site, dans toutes les langues.',
    pages: 'Pages',
    sections: 'Sections',
    links: 'Liens',
  },
  notFound: {
    title: '404 — Rien ici.',
    body: 'Cette page n’existe pas. L’éditeur, lui, existe.',
    back: '← Retour à l’accueil',
  },
};
