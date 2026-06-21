import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";
import { SiloHub } from "@/components/sections/SiloHub";
import { InfoCallout } from "@/components/sections/GeoBlocks";
import { articlesBySilo } from "@/lib/content";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
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
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema(CRUMBS)} />
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
    </>
  );
}
