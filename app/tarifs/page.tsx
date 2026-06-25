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
  { name: "Tarifs", href: "/tarifs" },
];

const FAQ = [
  {
    question: "Combien coûte le nettoyage de bureaux au m² en 2026 ?",
    answer:
      "Le prix du nettoyage de bureaux se situe généralement entre 0,30 et 0,60 € HT par m² et par passage en France, selon la fréquence, la surface, le type de locaux et la zone géographique. Pour de grandes surfaces ou des fréquences élevées, le prix au m² baisse.",
  },
  {
    question: "Comment est calculé le tarif horaire d'une prestation de nettoyage ?",
    answer:
      "Le tarif horaire facturé part du coût horaire chargé réel d'un agent (salaire conventionnel, charges patronales, congés, absentéisme, encadrement, matériel), auquel s'ajoutent les frais de structure et la marge. Il se situe le plus souvent dans une fourchette indicative de 22 à 30 € HT de l'heure.",
  },
  {
    question: "Pourquoi les devis de nettoyage varient-ils autant ?",
    answer:
      "Parce que les prestations, fréquences et surfaces de référence diffèrent d'un devis à l'autre. À périmètre égal, les écarts viennent du coût de main-d'œuvre, du niveau de qualité et des prestations incluses. Un cahier des charges commun rend les devis réellement comparables.",
  },
  {
    question: "Les prix affichés sont-ils hors taxes ?",
    answer:
      "Oui. Les fourchettes publiées sont des ordres de grandeur indicatifs hors taxes (HT) pour le marché français en 2026. Le nettoyage professionnel relève en principe du taux normal de TVA à 20 %.",
  },
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
  const itemList = itemListSchema({
    name: "Guides tarifs & prix du nettoyage en France",
    items: articles.map((a) => ({ name: a.title, href: a.href, description: a.excerpt })),
  });
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema(CRUMBS), itemList, faqSchema(FAQ)]} />
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
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <FAQSection items={FAQ} title="Prix du nettoyage : questions fréquentes" />
      </section>
    </>
  );
}
