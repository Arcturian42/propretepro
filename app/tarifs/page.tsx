import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";
import { SiloHub } from "@/components/sections/SiloHub";
import { InfoCallout } from "@/components/sections/GeoBlocks";
import { articlesBySilo } from "@/lib/content";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
];

export const metadata: Metadata = buildMetadata({
  title: "Tarifs nettoyage 2026 : prix au m², tarif horaire et devis",
  description:
    "Tous les prix du nettoyage professionnel en France : prix au m² des bureaux, tarif horaire, forfaits d'entreprise, fin de chantier et copropriété. Fourchettes à jour 2026 et méthode de comparaison des devis.",
  path: "/tarifs",
  keywords: [
    "tarif nettoyage",
    "prix nettoyage m2",
    "tarif horaire nettoyage",
    "prix entreprise de nettoyage",
    "devis nettoyage",
  ],
});

export default function TarifsHub() {
  const articles = articlesBySilo("tarifs");
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema(CRUMBS)} />
      <SiloHub
        crumbs={CRUMBS}
        kicker="Tarifs & prix"
        title="Les prix du nettoyage professionnel, sans zone d'ombre"
        intro="Prix au m², tarif horaire, forfaits d'entreprise, fin de chantier ou copropriété : des fourchettes de prix sourcées pour le marché français 2026, expliquées et accompagnées d'une méthode pour cadrer votre budget avant de demander un devis."
        articles={articles}
      >
        <div className="mb-12">
          <InfoCallout title="Comment lire nos fourchettes de prix">
            Les prix indiqués sont des ordres de grandeur observés sur le marché français en 2026,
            exprimés hors taxes. Le prix réel d&apos;une prestation dépend de la surface, de la
            fréquence, du type de locaux et de la zone géographique. Chaque page détaille les
            facteurs qui font varier le tarif et détaille une méthode pour comparer les devis.
          </InfoCallout>
        </div>
      </SiloHub>
    </>
  );
}
