import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout } from "@/components/sections/GeoBlocks";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/developpement/tva-nettoyage";
const COVER = "/covers/tva-nettoyage.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Développement", href: "/developpement" },
  { name: "TVA dans le nettoyage", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "taux", label: "Quel taux de TVA ?" },
  { id: "sap", label: "Le cas des particuliers (SAP)" },
  { id: "autoliquidation", label: "Autoliquidation en sous-traitance" },
  { id: "facturation", label: "Mentions de facturation" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "TVA dans le nettoyage : taux, autoliquidation et facturation",
  description:
    "Taux de TVA applicables aux prestations de nettoyage, règle d'autoliquidation en sous-traitance du bâtiment et mentions de facturation obligatoires pour une entreprise de propreté.",
  path: PATH,
  image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "TVA nettoyage",
    "taux TVA nettoyage",
    "autoliquidation TVA nettoyage",
    "TVA sous-traitance nettoyage",
    "facturation nettoyage TVA",
  ],
});

const FAQ = [
  {
    question: "Quel taux de TVA s'applique au nettoyage ?",
    answer:
      "Les prestations de nettoyage professionnel (bureaux, commerces, copropriétés, industrie) relèvent en principe du taux normal de TVA à 20 %. Il n'existe pas de taux réduit pour le nettoyage courant des locaux d'entreprise. Un taux réduit peut s'appliquer dans des cas spécifiques, notamment certains services de ménage à domicile rendus aux particuliers dans le cadre des services à la personne.",
  },
  {
    question: "Le ménage chez les particuliers est-il soumis à un taux réduit ?",
    answer:
      "Les prestations de ménage et d'entretien du domicile rendues à des particuliers par un organisme déclaré au titre des services à la personne (SAP) peuvent bénéficier d'un taux réduit de TVA (10 %), sous réserve de respecter les conditions de déclaration et la nature des prestations éligibles. Le nettoyage de locaux professionnels reste, lui, au taux normal de 20 %.",
  },
  {
    question: "Qu'est-ce que l'autoliquidation de la TVA dans le nettoyage ?",
    answer:
      "L'autoliquidation transfère le paiement de la TVA du prestataire (sous-traitant) vers le donneur d'ordre assujetti. Dans le bâtiment, elle s'applique aux travaux réalisés par un sous-traitant, ce qui inclut le nettoyage qui est le prolongement ou l'accessoire de travaux (par exemple le nettoyage de fin de chantier). Le sous-traitant facture alors hors taxe, en portant la mention « Autoliquidation ».",
  },
  {
    question: "Le nettoyage d'entretien courant est-il concerné par l'autoliquidation ?",
    answer:
      "Non. L'autoliquidation du bâtiment vise les travaux de construction et leur prolongement. Les contrats d'entretien et de nettoyage courant des locaux, indépendants de travaux de bâtiment, en sont exclus : ils suivent le régime classique avec TVA facturée à 20 %. La distinction tient au lien du nettoyage avec des travaux.",
  },
  {
    question: "Quelles mentions de TVA faire figurer sur une facture de nettoyage ?",
    answer:
      "Une facture standard mentionne le taux de TVA (20 %), le montant HT, le montant de TVA et le montant TTC, ainsi que le numéro de TVA intracommunautaire. En cas d'autoliquidation, la facture est établie hors taxe et porte la mention « Autoliquidation », sans TVA facturée : c'est le client qui déclare et acquitte la TVA.",
  },
  {
    question: "Comment la facturation électronique change-t-elle la donne ?",
    answer:
      "La réforme de la facturation électronique impose progressivement l'émission et la réception de factures sous format électronique via des plateformes agréées, avec transmission de données à l'administration. Les règles de TVA (taux, autoliquidation, mentions) restent les mêmes, mais elles doivent être correctement renseignées dans la facture électronique.",
  },
];

export default function Page() {
  const relatedHrefs = [
    "/reglementation/facturation-electronique-2026",
    "/tarifs/prix-nettoyage-fin-chantier",
    "/developpement/repondre-appel-offres-nettoyage",
  ];
  const related = relatedHrefs
    .map((h) => ARTICLES.find((a) => a.href === h))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema({
            headline: metadata.title as string,
            description: article.excerpt,
            path: PATH,
            image: COVER,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Développement · Fiscalité"
        title="TVA dans le nettoyage : taux, autoliquidation et facturation"
        intro="Quel taux appliquer, quand la TVA s'autoliquide en sous-traitance, et quelles mentions porter sur vos factures de prestation de propreté."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Le nettoyage professionnel relève en principe du <strong>taux normal de TVA à 20 %</strong>.
          Un <strong>taux réduit (10 %)</strong> peut concerner le ménage à domicile chez les
          particuliers via un organisme <strong>services à la personne</strong> déclaré. En{" "}
          <strong>sous-traitance du bâtiment</strong>, le nettoyage prolongeant des travaux (ex.
          fin de chantier) relève de l&apos;<strong>autoliquidation</strong> : le sous-traitant facture
          HT avec la mention « Autoliquidation ». L&apos;entretien courant, lui, reste à 20 %.
        </AnswerBox>

        <p>
          La TVA paraît simple — 20 % sur tout — mais deux situations méritent l&apos;attention : les
          prestations aux particuliers et la sous-traitance du bâtiment. Une erreur de taux ou de
          mention expose à un redressement. Ce guide fait le point.
        </p>

        <h2 id="taux">Quel taux de TVA pour une prestation de nettoyage ?</h2>
        <FactTable
          caption="Taux de TVA indicatifs selon la prestation (à confirmer selon votre situation)"
          headers={["Prestation", "Client", "Taux en principe"]}
          rows={[
            ["Nettoyage de bureaux / commerces", "Entreprise", "20 %"],
            ["Nettoyage de copropriété (parties communes)", "Syndic", "20 %"],
            ["Nettoyage industriel", "Entreprise", "20 %"],
            ["Nettoyage de fin de chantier", "Entreprise / BTP", "20 % (ou autoliquidation si sous-traitance)"],
            ["Ménage à domicile (SAP déclaré)", "Particulier", "10 % sous conditions"],
          ]}
        />
        <InfoCallout title="Règle générale">
          En l&apos;absence de disposition spécifique, le nettoyage suit le <strong>taux normal de
          20 %</strong>. Les taux réduits sont des exceptions encadrées : ne les appliquez qu&apos;après
          avoir vérifié l&apos;éligibilité de la prestation.
        </InfoCallout>

        <h2 id="sap">Le cas des particuliers (services à la personne)</h2>
        <p>
          Les prestations de <strong>ménage et d&apos;entretien du domicile</strong> rendues à des
          particuliers par un organisme <strong>déclaré au titre des services à la personne</strong>{" "}
          peuvent bénéficier d&apos;un taux réduit. L&apos;éligibilité dépend de la déclaration de
          l&apos;organisme et de la nature des prestations. Cette logique ne concerne pas le nettoyage
          de locaux professionnels, qui demeure au taux normal.
        </p>

        <h2 id="autoliquidation">Autoliquidation en sous-traitance du bâtiment</h2>
        <DefinitionBox term="Autoliquidation de la TVA">
          Mécanisme par lequel ce n&apos;est pas le prestataire qui collecte la TVA, mais le client
          assujetti qui la déclare et l&apos;acquitte. Le sous-traitant facture{" "}
          <strong>hors taxe</strong> et porte la mention « Autoliquidation ». Dans le bâtiment, ce
          régime s&apos;applique aux travaux réalisés par un sous-traitant pour un donneur d&apos;ordre
          assujetti.
        </DefinitionBox>
        <p>
          Le nettoyage entre dans ce champ lorsqu&apos;il est le <strong>prolongement ou
          l&apos;accessoire de travaux</strong> de bâtiment — typiquement le{" "}
          <a href="/tarifs/prix-nettoyage-fin-chantier">nettoyage de fin de chantier</a> sous-traité.
          À l&apos;inverse, les <strong>contrats d&apos;entretien et de nettoyage courant</strong>,
          détachés de tout chantier, en sont <strong>exclus</strong> et suivent le régime classique à
          20 %.
        </p>
        <KeyTakeaways
          items={[
            "Nettoyage professionnel : taux normal de 20 % par principe.",
            "Ménage à domicile via un organisme SAP déclaré : taux réduit (10 %) sous conditions.",
            "Sous-traitance bâtiment : autoliquidation pour le nettoyage prolongeant des travaux (ex. fin de chantier).",
            "Entretien et nettoyage courant : exclus de l'autoliquidation, TVA à 20 %.",
            "Facture en autoliquidation : établie HT avec la mention « Autoliquidation ».",
            "En cas de doute sur l'éligibilité d'un taux réduit ou de l'autoliquidation, vérifier le BOFiP.",
          ]}
        />

        <h2 id="facturation">Mentions de facturation</h2>
        <p>
          Au-delà des mentions générales (identité, numéro de facture, date, désignation), la TVA
          impose : le <strong>taux</strong> appliqué, le <strong>montant HT</strong>, le{" "}
          <strong>montant de TVA</strong>, le <strong>TTC</strong> et le numéro de{" "}
          <strong>TVA intracommunautaire</strong>. En autoliquidation, la facture est <strong>HT</strong>{" "}
          et porte la mention « Autoliquidation ». Ces règles doivent être correctement reportées dans
          la <a href="/reglementation/facturation-electronique-2026">facturation électronique</a>.
        </p>

        <h2 id="erreurs">Erreurs fréquentes</h2>
        <ul>
          <li><strong>Appliquer un taux réduit</strong> au nettoyage de locaux professionnels.</li>
          <li><strong>Facturer la TVA</strong> alors que l&apos;autoliquidation s&apos;applique (sous-traitance bâtiment).</li>
          <li><strong>Autoliquider à tort</strong> un contrat d&apos;entretien courant sans lien avec des travaux.</li>
          <li><strong>Oublier la mention</strong> « Autoliquidation » sur une facture HT.</li>
          <li><strong>Mentions incomplètes</strong> dans la facture électronique.</li>
        </ul>
        <InfoCallout title="Avertissement">
          Cette page fournit des repères généraux à jour 2026. La situation fiscale dépend de la nature
          exacte de la prestation et du client : confirmez le traitement applicable auprès du BOFiP ou
          de votre expert-comptable avant facturation.
        </InfoCallout>

        {/* Sources externes faisant autorité (citabilité GEO + E-E-A-T). */}
        <SourcesBox
          sources={[
            { label: "Bulletin officiel des finances publiques (BOFiP-Impôts)", href: "https://bofip.impots.gouv.fr", publisher: "impots.gouv.fr" },
            { label: "Code général des impôts (CGI)", href: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006069577", publisher: "Légifrance" },
            { label: "TVA et services à la personne", href: "https://entreprendre.service-public.fr", publisher: "service-public.fr (Entreprendre)" },
          ]}
        />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">Facturation électronique 2026</p>
          <p className="mt-1 text-sm text-muted-ink">
            Taux et mentions de TVA doivent être correctement renseignés dans vos factures électroniques.
          </p>
          <div className="mt-4">
            <Button href="/reglementation/facturation-electronique-2026" variant="primary">
              Comprendre la facturation électronique
            </Button>
          </div>
        </div>
      </ArticleLayout>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FAQSection items={FAQ} />
        </div>
        <RelatedArticles articles={related} />
      </div>
    </>
  );
}
