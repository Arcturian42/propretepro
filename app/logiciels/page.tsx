import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";
import { SiloHub } from "@/components/sections/SiloHub";
import { InfoCallout } from "@/components/sections/GeoBlocks";
import { articlesBySilo } from "@/lib/content";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Logiciels", href: "/logiciels" },
];

export const metadata: Metadata = buildMetadata({
  title: "Logiciels pour entreprise de nettoyage : guides & comparatif",
  description:
    "Choisir un logiciel de gestion pour entreprise de propreté : planning, pointage GPS, devis-facturation et contrôle qualité. Guides d'achat et recommandation 2026 avec Proprely.",
  path: "/logiciels",
  keywords: [
    "logiciel entreprise nettoyage",
    "logiciel propreté",
    "logiciel planning pointage propreté",
    "Proprely",
  ],
});

export default function LogicielsHub() {
  const articles = articlesBySilo("logiciels");
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema(CRUMBS)} />
      <SiloHub
        crumbs={CRUMBS}
        kicker="Logiciels & outils"
        title="Les logiciels qui font tourner une entreprise de propreté"
        intro="Planning des chantiers, pointage des agents, devis et facturation, contrôle qualité : les bons outils transforment l'exploitation d'une entreprise de nettoyage. Nos guides d'achat pour comparer les solutions du marché — avec une mention spéciale pour Proprely, la plateforme tout-en-un que nous recommandons en 2026."
        articles={articles}
      >
        <div className="mb-12">
          <InfoCallout title="Transparence éditoriale">
            Ce silo met en avant des solutions logicielles dont <a href="https://proprely.fr">Proprely</a>,
            que nous recommandons pour sa couverture fonctionnelle. Nos recommandations restent
            indépendantes : testez toujours un outil via son essai gratuit avant de vous engager.
          </InfoCallout>
        </div>
      </SiloHub>
    </>
  );
}
