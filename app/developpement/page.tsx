import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { SiloHub } from "@/components/sections/SiloHub";
import { FAQSection } from "@/components/sections/FAQSection";
import { InfoCallout } from "@/components/sections/GeoBlocks";
import { articlesBySilo } from "@/lib/content";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Développement", href: "/developpement" },
];

const FAQ = [
  {
    question: "Comment répondre à un appel d'offres de nettoyage ?",
    answer:
      "Un dossier comporte deux volets : la candidature (DC1, DC2 ou DUME, attestations) et l'offre (acte d'engagement, prix détaillé et mémoire technique). La décision se joue sur le croisement prix / valeur technique. Pensez à intégrer le coût de la reprise du personnel (annexe 7) et à vérifier la clause de révision de prix.",
  },
  {
    question: "Qu'est-ce qu'un cahier des charges de nettoyage (CCTP) ?",
    answer:
      "C'est le document qui décrit la prestation attendue : locaux et surfaces, prestations et fréquences, niveaux de qualité et modalités de contrôle. Dans un marché, sa partie technique s'appelle le CCTP. Bien rédigé, il rend les devis comparables et la qualité opposable.",
  },
  {
    question: "Pourquoi une clause de révision de prix dans un contrat de nettoyage ?",
    answer:
      "Parce que la main-d'œuvre domine le coût : sans réindexation, une hausse de la grille de salaire en cours de contrat ampute la marge. La clause de révision réajuste le prix chaque année via une formule indexée sur des indices officiels (coût du travail, SMIC, indices INSEE).",
  },
  {
    question: "Quel taux de TVA pour une prestation de nettoyage ?",
    answer:
      "Le nettoyage professionnel relève en principe du taux normal de TVA à 20 %. En sous-traitance du bâtiment, le nettoyage prolongeant des travaux (ex. fin de chantier) relève de l'autoliquidation ; l'entretien courant reste à 20 %.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Développement commercial d'une entreprise de nettoyage",
  description:
    "Remporter et sécuriser des marchés de propreté : appels d'offres, cahier des charges (CCTP), contrats de nettoyage, clause de révision de prix et TVA. Guides pour les dirigeants.",
  path: "/developpement",
  keywords: [
    "appel d'offres nettoyage",
    "cahier des charges nettoyage",
    "contrat de nettoyage",
    "clause de révision de prix nettoyage",
    "développement entreprise de propreté",
  ],
});

export default function DeveloppementHub() {
  const articles = articlesBySilo("developpement");
  const itemList = itemListSchema({
    name: "Guides développement & gestion d'entreprise de propreté",
    items: articles.map((a) => ({ name: a.title, href: a.href, description: a.excerpt })),
  });
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema(CRUMBS), itemList, faqSchema(FAQ)]} />
      <SiloHub
        crumbs={CRUMBS}
        kicker="Développement & gestion"
        title="Remporter des marchés et sécuriser sa rentabilité"
        intro="Répondre aux appels d'offres, lire et rédiger un cahier des charges, contractualiser sans perdre sa marge et maîtriser la TVA : la boîte à outils commerciale et contractuelle du dirigeant d'entreprise de propreté."
        articles={articles}
      >
        <div className="mb-12">
          <InfoCallout title="Pourquoi ce silo">
            Savoir payer ses agents et fixer ses prix ne suffit pas : encore faut-il décrocher les
            contrats et les exécuter avec marge. Ce silo couvre la dimension commerciale et
            contractuelle, des appels d&apos;offres jusqu&apos;à la révision de prix.
          </InfoCallout>
        </div>
      </SiloHub>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <FAQSection items={FAQ} title="Développement commercial : questions fréquentes" />
      </section>
    </>
  );
}
