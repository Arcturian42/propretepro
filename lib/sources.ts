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
    href: "https://www.legifrance.gouv.fr/liste/idcc",
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
} as const satisfies Record<string, Source[]>;
