/**
 * Couche de contenu éditorial (data layer).
 * Dans une V2, ces données proviendraient de MDX ou d'un CMS headless.
 * Ici, elles sont typées et centralisées pour alimenter home, listes et SEO.
 */

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
};

export const AUTHORS: Record<string, Author> = {
  "claire-vidal": {
    slug: "claire-vidal",
    name: "Claire Vidal",
    role: "Juriste en droit social, spécialiste propreté",
    bio: "12 ans d'expérience sur la convention collective de la propreté (IDCC 3043). Accompagne les entreprises de nettoyage sur la paie, les classifications et les transferts de personnel.",
  },
  "marc-leroy": {
    slug: "marc-leroy",
    name: "Marc Leroy",
    role: "Consultant exploitation & achats propreté",
    bio: "Ancien responsable d'exploitation dans un groupe de multiservices. Analyse les structures de coûts, les tarifs et la rentabilité des prestations de nettoyage.",
  },
};

export type Article = {
  slug: string;
  href: string;
  silo: "reglementation" | "tarifs" | "logiciels";
  siloLabel: string;
  title: string;
  excerpt: string;
  authorSlug: string;
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  badge?: { label: string; tone: "emerald" | "teal" | "cyan" | "amber" | "night" };
  popular?: boolean;
  urgent?: boolean;
};

export const ARTICLES: Article[] = [
  {
        slug: "grille-salaire-proprete-2026",
        href: "/reglementation/grille-salaire-proprete-2026",
        silo: "reglementation",
        siloLabel: "Réglementation",
        title: "Grille de salaire propreté 2026 (IDCC 3043)",
        excerpt:
          "Tous les taux horaires minima par échelon et coefficient applicables en 2026 dans la branche propreté, avec tableau téléchargeable.",
        authorSlug: "claire-vidal",
        datePublished: "2026-01-08",
        dateModified: "2026-06-15",
        readMinutes: 9,
        badge: { label: "Mis à jour 2026", tone: "emerald" },
        popular: true,
        urgent: true,
      },
  {
        slug: "convention-collective-proprete-idcc-3043",
        href: "/reglementation/convention-collective-proprete-idcc-3043",
        silo: "reglementation",
        siloLabel: "Réglementation",
        title: "Convention collective propreté IDCC 3043 : le guide complet",
        excerpt:
          "Champ d'application, classifications, primes, congés, prévoyance : l'essentiel de la convention collective des entreprises de propreté.",
        authorSlug: "claire-vidal",
        datePublished: "2026-01-12",
        dateModified: "2026-05-20",
        readMinutes: 14,
        badge: { label: "Guide pilier", tone: "night" },
        popular: true,
      },
  {
        slug: "facturation-electronique-2026",
        href: "/reglementation/facturation-electronique-2026",
        silo: "reglementation",
        siloLabel: "Réglementation",
        title: "Facturation électronique 2026 : ce qui change pour la propreté",
        excerpt:
          "Calendrier, plateformes agréées et obligations pour les entreprises de nettoyage face à la réforme de la facturation électronique.",
        authorSlug: "claire-vidal",
        datePublished: "2026-02-02",
        dateModified: "2026-06-01",
        readMinutes: 8,
        badge: { label: "Échéance proche", tone: "amber" },
        urgent: true,
      },
  {
        slug: "nettoyage-bureaux-m2",
        href: "/tarifs/nettoyage-bureaux-m2",
        silo: "tarifs",
        siloLabel: "Tarifs",
        title: "Prix du nettoyage de bureaux au m² en 2026",
        excerpt:
          "Fourchettes de prix au m² selon la fréquence et la surface, et tous les facteurs qui influencent le tarif d'un nettoyage de bureaux.",
        authorSlug: "marc-leroy",
        datePublished: "2026-01-15",
        dateModified: "2026-06-08",
        readMinutes: 10,
        badge: { label: "Guide tarifs", tone: "teal" },
        popular: true,
      },
  {
        slug: "transfert-personnel-annexe-7-proprete",
        href: "/reglementation/transfert-personnel-annexe-7-proprete",
        silo: "reglementation",
        siloLabel: "Réglementation",
        title: "Transfert de personnel (Annexe 7) dans la propreté",
        excerpt:
          "Reprise du personnel lors d'un changement de prestataire : conditions de l'Annexe 7, salariés concernés et obligations des entreprises entrante et sortante.",
        authorSlug: "claire-vidal",
        datePublished: "2026-02-15",
        dateModified: "2026-06-10",
        readMinutes: 11,
      },
  {
        slug: "classification-echelon-agent-proprete",
        href: "/reglementation/classification-echelon-agent-proprete",
        silo: "reglementation",
        siloLabel: "Réglementation",
        title: "Classification et échelons des agents de propreté",
        excerpt:
          "AS1 à ATQS, maîtrise et cadres : critères de classement, grille des coefficients et méthode pour classer correctement un agent de propreté.",
        authorSlug: "claire-vidal",
        datePublished: "2026-02-15",
        dateModified: "2026-06-10",
        readMinutes: 10,
      },
  {
        slug: "urssaf-cotisations-proprete",
        href: "/reglementation/urssaf-cotisations-proprete",
        silo: "reglementation",
        siloLabel: "Réglementation",
        title: "URSSAF et cotisations sociales dans la propreté",
        excerpt:
          "Taux de cotisations, réduction générale (ex-Fillon), taux AT/MP du secteur et déclarations DSN pour les entreprises de nettoyage.",
        authorSlug: "claire-vidal",
        datePublished: "2026-02-15",
        dateModified: "2026-06-10",
        readMinutes: 10,
      },
  {
        slug: "prix-entreprise-nettoyage",
        href: "/tarifs/prix-entreprise-nettoyage",
        silo: "tarifs",
        siloLabel: "Tarifs",
        title: "Prix d'une entreprise de nettoyage : forfaits et abonnements",
        excerpt:
          "Combien coûte une prestation d'entreprise de nettoyage : forfaits mensuels, abonnements et facteurs qui font varier le prix.",
        authorSlug: "marc-leroy",
        datePublished: "2026-02-12",
        dateModified: "2026-06-05",
        readMinutes: 9,
      },
  {
        slug: "tarif-horaire-nettoyage",
        href: "/tarifs/tarif-horaire-nettoyage",
        silo: "tarifs",
        siloLabel: "Tarifs",
        title: "Tarif horaire du nettoyage en 2026",
        excerpt:
          "Fourchette du tarif horaire d'une prestation de nettoyage, ce qui le compose et les écarts selon la région et le type de prestation.",
        authorSlug: "marc-leroy",
        datePublished: "2026-02-12",
        dateModified: "2026-06-05",
        readMinutes: 9,
      },
  {
        slug: "prix-nettoyage-fin-chantier",
        href: "/tarifs/prix-nettoyage-fin-chantier",
        silo: "tarifs",
        siloLabel: "Tarifs",
        title: "Prix du nettoyage de fin de chantier au m²",
        excerpt:
          "Prix au m² du nettoyage de fin de chantier, facteurs déterminants (état, accès, déchets) et TVA applicable.",
        authorSlug: "marc-leroy",
        datePublished: "2026-02-12",
        dateModified: "2026-06-05",
        readMinutes: 9,
      },
  {
        slug: "prix-nettoyage-copropriete",
        href: "/tarifs/prix-nettoyage-copropriete",
        silo: "tarifs",
        siloLabel: "Tarifs",
        title: "Prix du nettoyage de copropriété et parties communes",
        excerpt:
          "Tarifs du nettoyage des parties communes de copropriété : prix par lot et par mois, prestations incluses et critères de comparaison.",
        authorSlug: "marc-leroy",
        datePublished: "2026-02-12",
        dateModified: "2026-06-05",
        readMinutes: 9,
      },
  {
        slug: "comment-comparer-devis-nettoyage",
        href: "/tarifs/comment-comparer-devis-nettoyage",
        silo: "tarifs",
        siloLabel: "Tarifs",
        title: "Comment comparer des devis de nettoyage",
        excerpt:
          "La méthode pour comparer objectivement des devis de nettoyage : grille de comparaison, pièges fréquents et points de vigilance.",
        authorSlug: "marc-leroy",
        datePublished: "2026-02-12",
        dateModified: "2026-06-05",
        readMinutes: 9,
      },

  // === Nouveaux articles (extension SEO long-tail) ===
  {
    slug: "heures-supplementaires-proprete",
    href: "/reglementation/heures-supplementaires-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Heures supplémentaires dans la propreté : calcul et majorations",
    excerpt:
      "Seuil de déclenchement, taux de majoration (25 % et 50 %), contingent annuel et repos compensateur : tout sur les heures supplémentaires d'un agent de propreté.",
    authorSlug: "claire-vidal",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 9,
  },
  {
    slug: "temps-partiel-proprete",
    href: "/reglementation/temps-partiel-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Temps partiel dans la propreté : règles et compléments d'heures",
    excerpt:
      "Durée minimale, heures complémentaires, avenant de complément d'heures et coupures : les règles du temps partiel dans la branche propreté.",
    authorSlug: "claire-vidal",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 9,
  },
  {
    slug: "prime-anciennete-proprete",
    href: "/reglementation/prime-anciennete-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Prime d'ancienneté propreté : barème et calcul (IDCC 3043)",
    excerpt:
      "Barème de la prime d'ancienneté par paliers, base de calcul et exemple chiffré pour un agent de propreté relevant de la convention collective.",
    authorSlug: "claire-vidal",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 7,
  },
  {
    slug: "travail-nuit-dimanche-ferie-proprete",
    href: "/reglementation/travail-nuit-dimanche-ferie-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Travail de nuit, dimanche et jours fériés en propreté",
    excerpt:
      "Définition du travail de nuit, majorations du dimanche et des jours fériés, contreparties et repos : les règles pour les agents de propreté.",
    authorSlug: "claire-vidal",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },
  {
    slug: "cout-revient-agent-proprete",
    href: "/tarifs/cout-revient-agent-proprete",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Coût de revient d'un agent de propreté : méthode et exemple 2026",
    excerpt:
      "Salaire brut, charges patronales, congés, absentéisme et productivité : la méthode complète pour calculer le coût horaire chargé réel d'un agent et fixer vos prix avec marge.",
    authorSlug: "marc-leroy",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 10,
    badge: { label: "Guide gestion", tone: "teal" },
    popular: true,
  },
  {
    slug: "prix-nettoyage-commerces-m2",
    href: "/tarifs/prix-nettoyage-commerces-m2",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage de commerces et magasins au m²",
    excerpt:
      "Fourchettes de prix au m² pour le nettoyage de commerces, boutiques et magasins, facteurs spécifiques (vitrines, flux clients, horaires) et exemples de budget.",
    authorSlug: "marc-leroy",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },
  {
    slug: "prix-nettoyage-vitres",
    href: "/tarifs/prix-nettoyage-vitres",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage de vitres et vitrerie en 2026",
    excerpt:
      "Tarifs de la vitrerie au m² ou à la vacation, facteurs de prix (hauteur, accès, fréquence) et repères pour chiffrer une prestation de nettoyage de vitres.",
    authorSlug: "marc-leroy",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 7,
  },
  {
    slug: "prix-nettoyage-industriel",
    href: "/tarifs/prix-nettoyage-industriel",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage industriel : repères et facteurs de coût",
    excerpt:
      "Tarifs indicatifs du nettoyage industriel (ateliers, entrepôts, agroalimentaire), contraintes spécifiques et leviers de prix pour chiffrer un site industriel.",
    authorSlug: "marc-leroy",
    datePublished: "2026-03-15",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },

  // === Vague 2 (extension SEO long-tail) ===
  {
    slug: "conges-payes-proprete",
    href: "/reglementation/conges-payes-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Congés payés dans la propreté : calcul, acquisition et indemnité",
    excerpt:
      "Acquisition des congés (2,5 jours/mois), période de référence, calcul de l'indemnité (règle du 1/10e vs maintien) et report : les congés payés d'un agent de propreté.",
    authorSlug: "claire-vidal",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 9,
  },
  {
    slug: "arret-maladie-prevoyance-proprete",
    href: "/reglementation/arret-maladie-prevoyance-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Arrêt maladie et prévoyance dans la propreté (IDCC 3043)",
    excerpt:
      "Maintien de salaire, délai de carence, indemnités journalières et régime de prévoyance de branche : ce qui s'applique en cas d'arrêt maladie d'un agent de propreté.",
    authorSlug: "claire-vidal",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 9,
  },
  {
    slug: "rupture-conventionnelle-proprete",
    href: "/reglementation/rupture-conventionnelle-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Rupture conventionnelle d'un agent de propreté : procédure et indemnité",
    excerpt:
      "Procédure, entretien, délai de rétractation, homologation et calcul de l'indemnité spécifique de rupture conventionnelle pour un agent de propreté.",
    authorSlug: "claire-vidal",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },
  {
    slug: "duree-travail-pauses-proprete",
    href: "/reglementation/duree-travail-pauses-proprete",
    silo: "reglementation",
    siloLabel: "Réglementation",
    title: "Durée du travail et temps de pause d'un agent de propreté",
    excerpt:
      "Durée légale, amplitude, temps de pause, repos quotidien et hebdomadaire, et coupures : le cadre du temps de travail dans la branche propreté.",
    authorSlug: "claire-vidal",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },
  {
    slug: "prix-remise-en-etat-nettoyage",
    href: "/tarifs/prix-remise-en-etat-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix d'une remise en état (nettoyage approfondi) au m²",
    excerpt:
      "Tarifs d'une remise en état ou nettoyage approfondi (décapage, métallisation, grand nettoyage), facteurs de prix et différence avec l'entretien courant.",
    authorSlug: "marc-leroy",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },
  {
    slug: "prix-nettoyage-cage-escalier",
    href: "/tarifs/prix-nettoyage-cage-escalier",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage de cage d'escalier (copropriété)",
    excerpt:
      "Tarifs du nettoyage de cage d'escalier par étage et par mois, facteurs de prix (étages, ascenseur, fréquence) et repères pour un syndic ou un prestataire.",
    authorSlug: "marc-leroy",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 7,
  },
  {
    slug: "prix-nettoyage-ecole-collectivite",
    href: "/tarifs/prix-nettoyage-ecole-collectivite",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage d'écoles et de collectivités au m²",
    excerpt:
      "Tarifs du nettoyage d'écoles, crèches et bâtiments de collectivités, contraintes spécifiques (hygiène, horaires, marchés publics) et repères de budget.",
    authorSlug: "marc-leroy",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },
  {
    slug: "prix-nettoyage-medical-cabinet",
    href: "/tarifs/prix-nettoyage-medical-cabinet",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage médical et de cabinets de santé",
    excerpt:
      "Tarifs du nettoyage et de la désinfection en milieu médical (cabinets, cliniques), protocoles d'hygiène, traçabilité et facteurs qui font monter le prix.",
    authorSlug: "marc-leroy",
    datePublished: "2026-04-05",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },

  // === Logiciels (blog) — proprely.fr mis en avant ===
  {
    slug: "meilleur-logiciel-entreprise-nettoyage",
    href: "/logiciels/meilleur-logiciel-entreprise-nettoyage",
    silo: "logiciels",
    siloLabel: "Logiciels",
    title: "Meilleur logiciel pour entreprise de nettoyage en 2026",
    excerpt:
      "Comment choisir un logiciel de gestion pour une entreprise de propreté : planning, pointage, devis et qualité. Notre recommandation 2026 : Proprely.fr, la plateforme tout-en-un.",
    authorSlug: "marc-leroy",
    datePublished: "2026-05-10",
    dateModified: "2026-06-20",
    readMinutes: 9,
    badge: { label: "Recommandé", tone: "emerald" },
    popular: true,
  },
  {
    slug: "logiciel-planning-pointage-proprete",
    href: "/logiciels/logiciel-planning-pointage-proprete",
    silo: "logiciels",
    siloLabel: "Logiciels",
    title: "Logiciel de planning et pointage des agents de propreté",
    excerpt:
      "Planifier les chantiers et fiabiliser le pointage GPS des agents de nettoyage : fonctions clés, conformité RGPD et la solution Proprely.fr pour tout centraliser.",
    authorSlug: "marc-leroy",
    datePublished: "2026-05-10",
    dateModified: "2026-06-20",
    readMinutes: 8,
  },
];

export function getArticle(href: string): Article | undefined {
  return ARTICLES.find((a) => a.href === href);
}

export function articlesBySilo(silo: Article["silo"]): Article[] {
  return ARTICLES.filter((a) => a.silo === silo);
}

export const POPULAR_RESOURCES = [
  { label: "Grille salaire propreté 2026", href: "/reglementation/grille-salaire-proprete-2026", kind: "Réglementation" },
  { label: "Convention collective IDCC 3043", href: "/reglementation/convention-collective-proprete-idcc-3043", kind: "Réglementation" },
  { label: "Prix nettoyage bureaux au m²", href: "/tarifs/nettoyage-bureaux-m2", kind: "Tarifs" },
  { label: "Classification & échelons agents", href: "/reglementation/classification-echelon-agent-proprete", kind: "Réglementation" },
  { label: "Tarif horaire du nettoyage", href: "/tarifs/tarif-horaire-nettoyage", kind: "Tarifs" },
  { label: "Comparer des devis de nettoyage", href: "/tarifs/comment-comparer-devis-nettoyage", kind: "Tarifs" },
];
