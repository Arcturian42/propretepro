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
  { name: "Réglementation", href: "/reglementation" },
];

const FAQ = [
  {
    question: "Quelle est la convention collective des entreprises de propreté ?",
    answer:
      "Les entreprises de propreté relèvent de la convention collective nationale des entreprises de propreté et services associés, identifiée par l'IDCC 3043. Elle encadre les classifications, les salaires minima, les primes, les congés et le transfert de personnel (annexe 7).",
  },
  {
    question: "Quel est le salaire minimum d'un agent de propreté en 2026 ?",
    answer:
      "En 2026, le taux horaire minimum conventionnel d'un agent de service échelon AS1 (coefficient 110) s'établit autour de 12,30 € brut, légèrement au-dessus du SMIC. Le montant exact dépend du dernier avenant salaires étendu au Journal officiel.",
  },
  {
    question: "Qu'est-ce que l'annexe 7 dans la propreté ?",
    answer:
      "L'annexe 7 organise la reprise du personnel lors d'un changement de prestataire : l'entreprise entrante reprend les salariés affectés au marché qui remplissent les conditions d'ancienneté et de présence, aux conditions acquises.",
  },
  {
    question: "Où vérifier les textes officiels applicables ?",
    answer:
      "Les sources de référence sont Légifrance (convention IDCC 3043 et Code du travail), l'URSSAF et le Bulletin officiel de la Sécurité sociale (boss.gouv.fr). Chaque guide de ce silo cite ses sources et affiche sa date de mise à jour.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Réglementation propreté : paie & convention IDCC 3043",
  description:
    "La réglementation des entreprises de propreté : grille de salaire 2026, convention collective IDCC 3043, URSSAF, congés et transfert de personnel.",
  path: "/reglementation",
  keywords: ["réglementation propreté", "convention collective propreté", "IDCC 3043", "grille salaire propreté"],
});

export default function ReglementationHub() {
  const articles = articlesBySilo("reglementation");
  const itemList = itemListSchema({
    name: "Guides réglementation & paie de la propreté (IDCC 3043)",
    items: articles.map((a) => ({ name: a.title, href: a.href, description: a.excerpt })),
  });
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema(CRUMBS), itemList, faqSchema(FAQ)]} />
      <SiloHub
        crumbs={CRUMBS}
        kicker="Réglementation & conformité"
        title="La réglementation de la propreté, claire et à jour"
        intro="Grilles de salaire, convention collective, cotisations URSSAF, facturation électronique et transferts de personnel : les repères fiables pour rester conforme, sans jargon inutile."
        articles={articles}
      >
        <div className="mb-12">
          <InfoCallout title="Source de référence">
            Les contenus de ce silo s&apos;appuient sur la convention collective nationale des
            entreprises de propreté (IDCC 3043) et les textes officiels en vigueur. Chaque page
            indique sa date de mise à jour et ses sources.
          </InfoCallout>
        </div>
      </SiloHub>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <FAQSection items={FAQ} title="Réglementation propreté : questions fréquentes" />
      </section>
    </>
  );
}
