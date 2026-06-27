import type { Source } from "@/components/sections/SourcesBox";

/**
 * Registre central des sources officielles de référence.
 * Centralise les liens externes faisant autorité pour la citabilité GEO (méthode
 * Princeton n°1 : « cite sources ») et l'E-E-A-T.
 *
 * NB : on pointe ici des portails officiels stables. Affiner vers les fiches profondes
 * (avenant salaires étendu, article précis du Code du travail…) une fois les URLs confirmées.
 */

const S = {
  idcc3043: {
    label: "Convention collective nationale des entreprises de propreté (IDCC 3043)",
    href: "https://www.legifrance.gouv.fr/liste/idcc?idcc=3043",
    publisher: "Légifrance",
  },
  codeTravail: {
    label: "Code du travail",
    href: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006072050",
    publisher: "Légifrance",
  },
  smic: {
    label: "Montant du SMIC horaire et mensuel",
    href: "https://www.service-public.fr/particuliers/vosdroits/F2300",
    publisher: "service-public.fr",
  },
  urssaf: {
    label: "Taux de cotisations et déclarations employeur",
    href: "https://www.urssaf.fr",
    publisher: "URSSAF",
  },
  boss: {
    label: "Règles de cotisations et de Sécurité sociale",
    href: "https://boss.gouv.fr",
    publisher: "Bulletin officiel de la Sécurité sociale",
  },
  travailEmploi: {
    label: "Droit du travail et fiches pratiques",
    href: "https://travail-emploi.gouv.fr",
    publisher: "Ministère du Travail",
  },
  entreprendre: {
    label: "Obligations sociales des entreprises",
    href: "https://entreprendre.service-public.fr",
    publisher: "service-public.fr (Entreprendre)",
  },
  facturationElec: {
    label: "Facturation électronique des entreprises",
    href: "https://www.impots.gouv.fr",
    publisher: "impots.gouv.fr",
  },
  // --- Sources sectorielles & tarifs (citabilité GEO des contenus prix) ---
  insee: {
    label: "Activités de nettoyage : données et chiffres du secteur (NAF 81.2)",
    href: "https://www.insee.fr/fr/metadonnees/nafr2/sousClasse/81.21Z",
    publisher: "INSEE",
  },
  fep: {
    label: "Chiffres clés et observatoire de la branche propreté",
    href: "https://www.monde-proprete.com",
    publisher: "Fédération des Entreprises de Propreté (FEP)",
  },
  bofipTva: {
    label: "TVA : taux et règles applicables (BOFiP)",
    href: "https://bofip.impots.gouv.fr",
    publisher: "impots.gouv.fr",
  },
  tvaTravaux: {
    label: "TVA applicable aux prestations et travaux",
    href: "https://entreprendre.service-public.fr/vosdroits/F23567",
    publisher: "service-public.fr (Entreprendre)",
  },
  devisFacture: {
    label: "Règles du devis et de la facture entre professionnels",
    href: "https://entreprendre.service-public.fr/vosdroits/F23208",
    publisher: "service-public.fr (Entreprendre)",
  },
  marchesPublics: {
    label: "Marchés publics : principes, seuils et procédures",
    href: "https://www.economie.gouv.fr/daj/commande-publique",
    publisher: "Direction des affaires juridiques (Bercy)",
  },
  inrs: {
    label: "Prévention des risques professionnels dans la propreté",
    href: "https://www.inrs.fr/metiers/proprete.html",
    publisher: "INRS",
  },
  cnil: {
    label: "Géolocalisation et badgeage des salariés (RGPD)",
    href: "https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries",
    publisher: "CNIL",
  },
  hasSante: {
    label: "Hygiène des locaux et bionettoyage en milieu de soins",
    href: "https://www.has-sante.fr",
    publisher: "Haute Autorité de Santé",
  },
  anil: {
    label: "Copropriété : fonctionnement et charges",
    href: "https://www.anil.org",
    publisher: "ANIL",
  },
} as const satisfies Record<string, Source>;

/** Bundles thématiques prêts à passer au composant <SourcesBox />. */
export const SOURCES = {
  conventionGenerale: [S.idcc3043, S.codeTravail, S.travailEmploi],
  remuneration: [S.idcc3043, S.smic, S.codeTravail],
  cotisations: [S.urssaf, S.boss, S.idcc3043],
  tempsTravail: [S.codeTravail, S.travailEmploi, S.idcc3043],
  conges: [S.codeTravail, S.entreprendre, S.idcc3043],
  maladiePrevoyance: [S.idcc3043, S.boss, S.travailEmploi],
  rupture: [S.codeTravail, S.entreprendre, S.travailEmploi],
  transfert: [S.idcc3043, S.codeTravail],
  classification: [S.idcc3043, S.codeTravail],
  facturation: [S.facturationElec, S.entreprendre],
  // --- Bundles tarifs & développement ---
  tarifsSecteur: [S.insee, S.fep],
  coutRevient: [S.urssaf, S.smic, S.fep],
  devis: [S.devisFacture, S.fep],
  tva: [S.tvaTravaux, S.bofipTva],
  marchesPublics: [S.marchesPublics, S.fep],
  sante: [S.hasSante, S.fep],
  securiteHauteur: [S.inrs, S.fep],
  nettoyageIndustriel: [S.inrs, S.fep],
  copropriete: [S.anil, S.fep],
  logiciels: [S.cnil, S.fep],
} as const satisfies Record<string, Source[]>;
