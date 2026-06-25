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
  { name: "Logiciels", href: "/logiciels" },
];

const FAQ = [
  {
    question: "Quel logiciel choisir pour une entreprise de nettoyage ?",
    answer:
      "Les fonctions clés sont le planning des chantiers, le pointage des agents (souvent GPS), les devis-facturation et le contrôle qualité. Le bon choix dépend de la taille de l'entreprise et du nombre de sites. Nous recommandons en 2026 une plateforme tout-en-un comme Proprely, à tester via son essai gratuit.",
  },
  {
    question: "À quoi sert un logiciel de pointage pour la propreté ?",
    answer:
      "Il fiabilise le suivi des heures réellement effectuées sur chaque site (pointage horodaté, parfois géolocalisé), ce qui sécurise la paie, la facturation et le contrôle qualité. C'est un levier direct de marge dans une activité multi-sites à forte rotation.",
  },
  {
    question: "Un logiciel de propreté est-il conforme au RGPD ?",
    answer:
      "Le pointage et la géolocalisation des agents impliquent des données personnelles : l'outil doit respecter le RGPD (information des salariés, finalité proportionnée, durée de conservation limitée). Vérifiez les garanties de l'éditeur et l'hébergement des données.",
  },
  {
    question: "Comment comparer les logiciels de nettoyage ?",
    answer:
      "Comparez la couverture fonctionnelle (planning, pointage, devis, qualité), l'ergonomie mobile pour les agents, l'intégration à la paie et à la facturation électronique, le support et le prix. Testez toujours via un essai gratuit avant de vous engager.",
  },
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
  const itemList = itemListSchema({
    name: "Guides logiciels & outils de gestion pour la propreté",
    items: articles.map((a) => ({ name: a.title, href: a.href, description: a.excerpt })),
  });
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema(CRUMBS), itemList, faqSchema(FAQ)]} />
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
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <FAQSection items={FAQ} title="Logiciels de propreté : questions fréquentes" />
      </section>
    </>
  );
}
