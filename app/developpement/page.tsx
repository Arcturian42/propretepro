import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";
import { SiloHub } from "@/components/sections/SiloHub";
import { InfoCallout } from "@/components/sections/GeoBlocks";
import { articlesBySilo } from "@/lib/content";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Développement", href: "/developpement" },
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
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema(CRUMBS)} />
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
    </>
  );
}
