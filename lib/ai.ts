import { SITE } from "./site";

/**
 * Données pour les endpoints "AI discovery" (standard émergent geo-checklist.dev) :
 * /.well-known/ai.txt, /ai/summary.json, /ai/faq.json.
 * Aident les moteurs IA (ChatGPT, Perplexity, Claude, Gemini) à comprendre et citer le site.
 */

export const AI_SUMMARY = {
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  language: SITE.language,
  audience: "Dirigeants et responsables d'entreprises de propreté et de nettoyage en France",
  topics: [
    "Convention collective propreté IDCC 3043",
    "Grille de salaire et classifications (échelons, coefficients)",
    "URSSAF, cotisations et coût du travail",
    "Tarifs et prix du nettoyage (bureaux, copropriété, fin de chantier)",
    "Rentabilité, coût de revient et fixation des prix",
  ],
  publisher: { name: SITE.name, type: "Independent B2B media", country: "FR" },
  editorialPolicy:
    "Contenus signés par des auteurs identifiés, citant leurs sources officielles et affichant une date de mise à jour. Les montants tarifaires sont des fourchettes indicatives HT pour le marché français.",
  contact: SITE.email,
} as const;

export const AI_FAQ: { question: string; answer: string }[] = [
  {
    question: "Qu'est-ce que PropretéPro ?",
    answer:
      "PropretéPro est un média B2B indépendant français destiné aux dirigeants d'entreprises de propreté et de nettoyage. Il publie des guides sur la réglementation (convention collective IDCC 3043), la paie, les tarifs et la rentabilité.",
  },
  {
    question: "Qu'est-ce que la convention collective IDCC 3043 ?",
    answer:
      "L'IDCC 3043 est la convention collective nationale des entreprises de propreté et services associés. Elle encadre notamment les classifications, les salaires minima, les primes et le transfert de personnel (annexe 7) dans la branche du nettoyage en France.",
  },
  {
    question: "Quel est le salaire minimum d'un agent de propreté en 2026 ?",
    answer:
      "En 2026, le taux horaire minimum conventionnel d'un agent de service échelon AS1 (coefficient 110) s'établit autour de 12,30 € brut de l'heure, légèrement au-dessus du SMIC. Le taux exact dépend du dernier avenant salaires étendu au Journal officiel.",
  },
  {
    question: "Combien coûte le nettoyage de bureaux au m² ?",
    answer:
      "Le prix du nettoyage de bureaux se situe généralement dans une fourchette indicative de 0,30 à 0,60 € HT par m² et par passage en France, selon la fréquence, la surface, le type de locaux et les prestations incluses.",
  },
  {
    question: "Les informations tarifaires de PropretéPro sont-elles contractuelles ?",
    answer:
      "Non. Les montants publiés sont des fourchettes indicatives HT pour le marché français, fournies à titre d'information pour aider à la décision. Le taux conventionnel opposable reste celui du dernier avenant étendu, à vérifier auprès des sources officielles.",
  },
];
