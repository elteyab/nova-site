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
    contact: 'Contact',
    website: 'Site personnel',
    deleteAccount: 'Supprimer le compte',
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
  deleteAccount: {
    kicker: 'Google Play — Suppression de compte',
    title: 'Supprimez votre compte Nova et vos données.',
    updated: 'Dernière mise à jour : 18 octobre 2026',
    intro:
      'Cette page explique comment demander la suppression de votre compte Nova et des données associées. Nova (identifiant sd.adaa.codeide) est développé par Elteyab (Tayeb Ali), le développeur indiqué sur la fiche Google Play.',
    inAppTitle: 'Option 1 — Supprimer depuis l’application (recommandé)',
    inAppBody:
      'Si Nova est encore installé, vous pouvez supprimer votre compte directement dans l’application. Votre compte de connexion est supprimé immédiatement.',
    inAppSteps: [
      'Ouvrez Nova.',
      'Ouvrez les Paramètres.',
      'Dans la carte « Compte », appuyez sur « Supprimer le compte ».',
      'Confirmez dans la boîte de dialogue. Votre compte est supprimé immédiatement.',
    ],
    webTitle: 'Option 2 — Demander la suppression sans l’application',
    webBody:
      'Si vous n’avez plus Nova installé, écrivez-nous depuis l’adresse liée à votre compte et nous le supprimerons, normalement sous 30 jours.',
    webEmailLabel:
      'Envoyez la demande à elteyab@smart.sd avec l’objet « Suppression du compte Nova ».',
    deletedTitle: 'Données supprimées',
    deletedBody:
      'Lors de la suppression de votre compte, les données suivantes sont définitivement effacées :',
    deletedItems: [
      'Votre compte de connexion Nova : adresse e-mail, nom affiché et fournisseurs liés (Google, GitHub, X ou e-mail/mot de passe).',
      'Votre fiche de profil liée à l’identifiant du compte (e-mail, nom affiché, fournisseurs liés).',
      'Le jeton de notifications push de votre appareil.',
      'Votre solde de points et l’historique des coupons/utilisations.',
    ],
    retainedTitle: 'Données pouvant être conservées',
    retainedBody:
      'Un ensemble limité de données est conservé après la suppression :',
    retainedItems: [
      'Des événements analytiques agrégés et anonymisés peuvent être conservés jusqu’à 14 mois, et les rapports de plantage jusqu’à 90 jours, pour la stabilité de l’application. Ces données ne sont plus liées à votre identité après la suppression.',
      'Les enregistrements que la loi nous oblige à conserver (comptabilité, prévention de la fraude) ne sont gardés que le temps légalement requis.',
      'Sauvegardes : des copies dans des sauvegardes chiffrées peuvent subsister jusqu’à 30 jours avant d’être écrasées.',
    ],
    localTitle: 'Votre code reste sur votre appareil',
    localBody:
      'Vos projets et fichiers n’existent que sur votre téléphone et ne sont jamais envoyés à nos serveurs. Supprimer votre compte n’y touche pas ; désinstaller Nova supprime l’application, son runtime et ces fichiers locaux.',
    contactTitle: 'Contact',
    contactBody: 'Une question sur la suppression ? Écrivez à elteyab@smart.sd.',
    back: '← Retour à l’accueil',
  },
};
