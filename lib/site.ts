/**
 * Configuration globale du site PropretéPro.com
 * Source de vérité pour les métadonnées, la navigation et les constantes de marque.
 */

export const SITE = {
  name: "PropretéPro",
  domain: "propretepro.fr",
  url: "https://propretepro.fr",
  tagline: "Le média des dirigeants de la propreté",
  description:
    "Le média qui aide les dirigeants d'entreprises de nettoyage à piloter leur rentabilité : réglementation et paie (IDCC 3043), tarifs et prix du nettoyage, coût de revient.",
  locale: "fr_FR",
  language: "fr",
  email: "contact@propretepro.fr",
  twitter: "@propretepro",
  foundingYear: 2026,
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const MAIN_NAV: NavItem[] = [
  {
    label: "Réglementation",
    href: "/reglementation",
    description: "Grille de salaire, convention collective, URSSAF, conformité.",
  },
  {
    label: "Tarifs",
    href: "/tarifs",
    description: "Prix du nettoyage de bureaux, tarifs horaires, fixer ses prix.",
  },
  {
    label: "Développement",
    href: "/developpement",
    description: "Appels d'offres, cahier des charges, contrats et révision de prix.",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Guides et analyses pour piloter une entreprise de propreté.",
  },
];

export const PILLARS = [
  {
    label: "Réglementation & paie",
    href: "/reglementation",
    icon: "ScrollText",
    accent: "emerald",
    summary:
      "Grille de salaire 2026, convention collective IDCC 3043, URSSAF, facturation électronique, transfert de personnel : restez conforme sans y passer vos nuits.",
  },
  {
    label: "Tarifs & prix",
    href: "/tarifs",
    icon: "Calculator",
    accent: "teal",
    summary:
      "Prix au m², tarifs horaires, fin de chantier et copropriété : fixez des prix justes et défendez vos marges face aux donneurs d'ordre.",
  },
  {
    label: "Développement & gestion",
    href: "/developpement",
    icon: "FileText",
    accent: "cyan",
    summary:
      "Appels d'offres, cahier des charges, contrats et clause de révision de prix : remportez des marchés et sécurisez votre rentabilité dans la durée.",
  },
] as const;

export const FOOTER_NAV: { title: string; links: NavItem[] }[] = [
  {
    title: "Réglementation & paie",
    links: [
      { label: "Grille de salaire propreté 2026", href: "/reglementation/grille-salaire-proprete-2026" },
      { label: "Convention collective IDCC 3043", href: "/reglementation/convention-collective-proprete-idcc-3043" },
      { label: "Classification & échelons", href: "/reglementation/classification-echelon-agent-proprete" },
      { label: "URSSAF & cotisations", href: "/reglementation/urssaf-cotisations-proprete" },
    ],
  },
  {
    title: "Tarifs & prix",
    links: [
      { label: "Prix nettoyage bureaux au m²", href: "/tarifs/nettoyage-bureaux-m2" },
      { label: "Tarif horaire nettoyage", href: "/tarifs/tarif-horaire-nettoyage" },
      { label: "Prix nettoyage copropriété", href: "/tarifs/prix-nettoyage-copropriete" },
      { label: "Comparer des devis de nettoyage", href: "/tarifs/comment-comparer-devis-nettoyage" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Prix entreprise de nettoyage", href: "/tarifs/prix-entreprise-nettoyage" },
      { label: "Prix nettoyage fin de chantier", href: "/tarifs/prix-nettoyage-fin-chantier" },
      { label: "Transfert de personnel (Annexe 7)", href: "/reglementation/transfert-personnel-annexe-7-proprete" },
      { label: "Tous les guides (blog)", href: "/blog" },
    ],
  },
];
