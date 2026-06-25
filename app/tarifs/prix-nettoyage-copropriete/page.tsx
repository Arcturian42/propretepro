import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, datasetSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import {
  AnswerBox,
  KeyTakeaways,
  DefinitionBox,
  FactTable,
  InfoCallout,
  PullQuote,
} from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, type Article } from "@/lib/content";

const PATH = "/tarifs/prix-nettoyage-copropriete";
const author = AUTHORS["marc-leroy"];
const DATE_PUBLISHED = "2026-02-12";
const DATE_MODIFIED = "2026-06-05";
const READ_MINUTES = 9;
const EXCERPT =
  "Prix du nettoyage des parties communes de copropriété en 2026 : par lot et par mois, facteurs de prix et logique de répartition des charges.";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage copropriété", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "prix-lot", label: "Prix par lot et par mois" },
  { id: "facteurs", label: "Facteurs qui influencent le prix" },
  { id: "options", label: "Conteneurs et options" },
  { id: "charges", label: "Comment le coût est réparti" },
  { id: "optimiser", label: "Maîtriser le budget" },
  { id: "definition", label: "Parties communes" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage de copropriété en 2026 : par lot et par mois",
  description:
    "Prix du nettoyage des parties communes de copropriété en 2026 : 8 à 25 € par lot et par mois selon la fréquence et le standing. Facteurs de prix et répartition des charges entre copropriétaires.",
  path: PATH,
  type: "article",
  publishedTime: DATE_PUBLISHED,
  modifiedTime: DATE_MODIFIED,
  authors: [author.name],
  keywords: [
    "prix nettoyage copropriété",
    "tarif nettoyage parties communes",
    "coût nettoyage immeuble",
    "nettoyage copropriété par lot",
    "entretien parties communes prix",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage des parties communes d'une copropriété ?",
    answer:
      "Le nettoyage des parties communes se chiffre souvent entre 8 et 25 € par lot et par mois HT en 2026, selon la fréquence de passage, le standing de l'immeuble et la surface des communs. Pour une copropriété de taille moyenne, le budget mensuel global se situe fréquemment entre 300 et 1 500 € HT. La sortie et la rentrée des conteneurs, quand elles sont incluses, augmentent ce montant.",
  },
  {
    question: "À quelle fréquence faut-il nettoyer les parties communes ?",
    answer:
      "Cela dépend de la taille et du passage de l'immeuble. Une petite copropriété peut se contenter d'un passage hebdomadaire ; un immeuble standing ou à fort passage justifie 2 à 5 passages par semaine, voire un nettoyage quotidien du hall. La fréquence est le premier déterminant du coût : c'est le point à arbitrer en assemblée générale selon le niveau de propreté attendu.",
  },
  {
    question: "Que comprend le nettoyage d'une copropriété ?",
    answer:
      "L'entretien courant couvre le hall, les escaliers, les paliers, l'ascenseur, les vitres des communs, le local poubelles et parfois les sous-sols ou parkings. La sortie et la rentrée des conteneurs ainsi que le nettoyage des locaux poubelles peuvent être inclus ou facturés en supplément. Les prestations périodiques (vitrerie complète, lessivage des sols, façades) sont généralement à part.",
  },
  {
    question: "Comment le coût du nettoyage est-il réparti entre copropriétaires ?",
    answer:
      "Le coût du nettoyage des parties communes est intégré aux charges de copropriété et réparti entre les copropriétaires selon les tantièmes (quotes-parts) figurant dans le règlement de copropriété, en fonction de l'usage de chaque partie commune. C'est pourquoi raisonner « par lot et par mois » donne un repère utile pour comparer une copropriété à une autre.",
  },
  {
    question: "La sortie des poubelles est-elle incluse dans le nettoyage de copropriété ?",
    answer:
      "Pas toujours. La sortie et la rentrée des conteneurs, ainsi que le nettoyage et la désinfection du local poubelles, sont fréquemment facturés en supplément de l'entretien courant, car ils impliquent des passages supplémentaires calés sur le calendrier de collecte. Vérifiez précisément ce qui est inclus dans le forfait avant de comparer deux devis.",
  },
  {
    question: "Comment réduire le coût du nettoyage des parties communes ?",
    answer:
      "Ajustez la fréquence au passage réel de l'immeuble, distinguez l'entretien courant des prestations périodiques (vitrerie, lessivage) facturées à part, mutualisez si vous gérez plusieurs immeubles, et mettez le contrat en concurrence sur la base d'un cahier des charges clair. La fréquence reste le premier levier : passer de 5 à 3 passages hebdomadaires réduit nettement la facture.",
  },
];

const RELATED: Article[] = [
  {
    slug: "nettoyage-bureaux-m2",
    href: "/tarifs/nettoyage-bureaux-m2",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage de bureaux au m² en 2026",
    excerpt:
      "Fourchettes de prix au m² selon la fréquence et la surface, facteurs de prix et exemples chiffrés.",
    authorSlug: "marc-leroy",
    datePublished: "2026-01-15",
    dateModified: "2026-06-08",
    readMinutes: 10,
    badge: { label: "Guide tarifs", tone: "teal" },
  },
  {
    slug: "prix-entreprise-nettoyage",
    href: "/tarifs/prix-entreprise-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix d'une entreprise de nettoyage : forfaits et abonnements",
    excerpt:
      "Prix moyen d'une prestation : forfaits, abonnements mensuels et logique de tarification.",
    authorSlug: "marc-leroy",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    readMinutes: READ_MINUTES,
  },
  {
    slug: "comment-comparer-devis-nettoyage",
    href: "/tarifs/comment-comparer-devis-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Comment comparer des devis de nettoyage",
    excerpt:
      "Grille de comparaison et pièges à éviter pour comparer objectivement plusieurs devis.",
    authorSlug: "marc-leroy",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    readMinutes: READ_MINUTES,
  },
];

export default function Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema({
            headline: metadata.title as string,
            description: EXCERPT,
            path: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
          datasetSchema({
            name: "Prix du nettoyage de copropriété en 2026 (France)",
            description:
              "Fourchettes de prix HT 2026 du nettoyage des parties communes de copropriété sur le marché français, par lot et par mois selon la fréquence et le standing.",
            path: PATH,
            dateModified: DATE_MODIFIED,
            temporalCoverage: "2026",
            keywords: ["prix nettoyage copropriété", "tarif nettoyage parties communes"],
            variables: ["Fréquence", "Par lot / mois", "Profil d'immeuble"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Copropriété"
        title="Prix du nettoyage de copropriété en 2026"
        intro="Combien coûte l'entretien des parties communes ? Repères de prix par lot et par mois, facteurs qui font varier le tarif et logique de répartition dans les charges de copropriété."
        author={author}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        readMinutes={READ_MINUTES}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage des parties communes d&apos;une copropriété revient le plus souvent
          à <strong>8 à 25 € par lot et par mois HT</strong>, selon la fréquence et le standing.
          Pour une copropriété moyenne, le budget mensuel global se situe entre{" "}
          <strong>300 et 1 500 € HT</strong>. La fréquence de passage est le premier déterminant du
          coût ; la sortie des conteneurs, quand elle est incluse, l&apos;augmente.
        </AnswerBox>

        <p>
          L&apos;entretien des parties communes est un poste récurrent des charges de copropriété.
          Raisonner <strong>« par lot et par mois »</strong> est la meilleure façon de comparer une
          copropriété à une autre, car cela neutralise la taille de l&apos;immeuble. Cette page
          donne des repères 2026 et explique comment le coût se construit puis se répartit.
        </p>

        <InfoCallout title="Lecture des prix">
          Montants indicatifs 2026 pour le marché français, hors taxes. Le prix dépend du nombre de
          lots, de la surface des communs, de la fréquence et du niveau de prestation.
        </InfoCallout>

        <h2 id="prix-lot">Prix par lot et par mois selon la fréquence</h2>
        <FactTable
          caption="Coût indicatif du nettoyage de copropriété par lot et par mois (HT) — 2026"
          headers={["Fréquence", "Par lot / mois", "Profil d'immeuble"]}
          rows={[
            ["1x / semaine", "8 – 14 €", "Petite copropriété, passage modéré"],
            ["2 à 3x / semaine", "12 – 20 €", "Immeuble standard"],
            ["5x / semaine", "18 – 25 €", "Standing ou fort passage"],
            ["Quotidien (hall) + communs", "22 – 30 €", "Résidence de standing"],
          ]}
        />

        <PullQuote cite={`${author.name}, ${author.role}`}>
          La fréquence de passage reste le premier levier du coût : c&apos;est elle qu&apos;il faut
          arbitrer avant tout pour situer le prix par lot et par mois.
        </PullQuote>

        <p>
          Rapporté à l&apos;immeuble entier, cela donne des budgets mensuels très variables selon
          le nombre de lots :
        </p>

        <FactTable
          caption="Budget mensuel global indicatif (2-3 passages/semaine, HT) — 2026"
          headers={["Nombre de lots", "Budget mensuel estimé", "Soit / lot / mois"]}
          rows={[
            ["15 lots", "230 – 380 €", "15 – 25 €"],
            ["30 lots", "420 – 650 €", "14 – 22 €"],
            ["60 lots", "780 – 1 150 €", "13 – 19 €"],
            ["100 lots", "1 200 – 1 800 €", "12 – 18 €"],
          ]}
        />

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <ul>
          <li>
            <strong>La fréquence de passage</strong> : le levier numéro un du coût.
          </li>
          <li>
            <strong>La surface et la configuration des communs</strong> : nombre d&apos;étages,
            cages d&apos;escalier, ascenseurs, sous-sols et parkings.
          </li>
          <li>
            <strong>La gestion des conteneurs</strong> : sortie/rentrée des poubelles et nettoyage
            du local poubelles, souvent facturés en supplément.
          </li>
          <li>
            <strong>Le standing attendu</strong> : une résidence haut de gamme exige un niveau de
            finition et une régularité qui se paient.
          </li>
          <li>
            <strong>Les prestations périodiques</strong> : vitrerie complète, lessivage des sols,
            entretien des espaces verts, en dehors de l&apos;entretien courant.
          </li>
        </ul>

        <h2 id="options">Conteneurs et prestations en option</h2>
        <p>
          Au-delà de l&apos;entretien courant, plusieurs prestations sont souvent facturées à part.
          Les chiffrer séparément évite les mauvaises surprises et fiabilise la comparaison des devis.
        </p>
        <FactTable
          caption="Prestations en option d'une copropriété (HT, indicatif) — 2026"
          headers={["Prestation", "Tarif indicatif", "Périodicité"]}
          rows={[
            ["Sortie / rentrée des conteneurs", "30 – 120 €/mois", "Selon le calendrier de collecte"],
            ["Nettoyage et désinfection du local poubelles", "20 – 60 €/mois", "Hebdomadaire"],
            ["Vitrerie complète des communs", "1 – 3 €/m²", "Trimestrielle"],
            ["Lessivage / décapage des sols", "2 – 4 €/m²", "1 à 2×/an"],
            ["Nettoyage de la cage d'escalier seule", "Voir le détail", "Variable"],
          ]}
        />
        <p>
          Pour le détail d&apos;une prestation ciblée, voir le{" "}
          <a href="/tarifs/prix-nettoyage-cage-escalier">prix du nettoyage de cage d&apos;escalier</a>.
        </p>

        <KeyTakeaways
          items={[
            "Comptez 8 à 25 € par lot et par mois HT selon la fréquence et le standing.",
            "Le budget mensuel global d'une copropriété moyenne va de 300 à 1 500 € HT.",
            "La fréquence de passage est le premier déterminant du coût.",
            "La sortie des conteneurs est souvent facturée en plus de l'entretien courant.",
            "Le coût est réparti entre copropriétaires selon les tantièmes.",
          ]}
        />

        <h2 id="charges">Comment le coût est réparti dans les charges</h2>
        <p>
          Le nettoyage des parties communes est intégré aux <strong>charges de copropriété</strong>{" "}
          et réparti entre les copropriétaires selon les <strong>tantièmes</strong> (quotes-parts)
          fixés par le règlement de copropriété, en fonction de l&apos;usage des parties communes
          concernées. Un copropriétaire d&apos;un grand lot supporte donc une part plus importante
          qu&apos;un studio. Comparer le coût « par lot et par mois » permet au conseil syndical de
          challenger un contrat lors de sa mise en concurrence.
        </p>
        <p>
          Pour comprendre comment un prestataire bâtit son forfait, voir le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>,
          et pour décortiquer le taux facturé, le{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a>.
        </p>

        <h2 id="optimiser">Comment maîtriser le budget</h2>
        <ul>
          <li><strong>Caler la fréquence sur le passage réel</strong> de l&apos;immeuble plutôt que sur une habitude.</li>
          <li><strong>Distinguer entretien courant et prestations périodiques</strong> pour ne payer ces dernières qu&apos;au besoin.</li>
          <li><strong>Mutualiser</strong> si le syndic gère plusieurs immeubles proches.</li>
          <li><strong>Mettre en concurrence</strong> sur la base d&apos;un{" "}
            <a href="/developpement/cahier-des-charges-nettoyage">cahier des charges clair</a> pour obtenir des devis comparables.</li>
        </ul>

        {/* Sources d'autorité (copropriété) pour la citabilité GEO + E-E-A-T. */}
        <SourcesBox
          sources={[
            { label: "La copropriété : fonctionnement et charges", href: "https://www.service-public.fr/particuliers/vosdroits/N13692", publisher: "service-public.fr" },
            { label: "Information sur le logement et la copropriété", href: "https://www.anil.org", publisher: "ANIL" },
          ]}
        />

        <h2 id="definition">Parties communes, en clair</h2>
        <DefinitionBox term="Parties communes (copropriété)">
          Espaces et équipements d&apos;un immeuble en copropriété affectés à l&apos;usage de tous
          les copropriétaires : hall, escaliers, paliers, ascenseur, couloirs, local poubelles,
          sous-sols, parkings et espaces extérieurs communs. Leur entretien, dont le nettoyage, est
          financé collectivement via les charges de copropriété réparties selon les tantièmes.
        </DefinitionBox>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Mettez votre contrat en concurrence
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Un cahier des charges clair permet au conseil syndical de comparer des devis comparables.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="primary">
              Comment comparer des devis
            </Button>
            <Button href="/reglementation/grille-salaire-proprete-2026" variant="secondary">
              Voir la grille de salaire 2026
            </Button>
          </div>
        </div>
      </ArticleLayout>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FAQSection items={FAQ} />
        </div>
        <RelatedArticles articles={RELATED} />
      </div>
    </>
  );
}
