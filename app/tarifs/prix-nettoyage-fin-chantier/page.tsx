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

const PATH = "/tarifs/prix-nettoyage-fin-chantier";
const author = AUTHORS["marc-leroy"];
const DATE_PUBLISHED = "2026-02-12";
const DATE_MODIFIED = "2026-06-05";
const READ_MINUTES = 9;
const EXCERPT =
  "Prix du nettoyage de fin de chantier en 2026 : 2 à 6 €/m² selon l'état, les facteurs de prix et la question de la TVA réduite.";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage fin de chantier", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "prix-m2", label: "Prix au m² selon l'état" },
  { id: "facteurs", label: "Facteurs qui influencent le prix" },
  { id: "tva", label: "Quelle TVA pour la fin de chantier ?" },
  { id: "autoliquidation", label: "Sous-traitance et autoliquidation" },
  { id: "checklist", label: "Préparer sa demande de devis" },
  { id: "definition", label: "Nettoyage fin de chantier" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage de fin de chantier en 2026 : tarif au m² et TVA",
  description:
    "Prix du nettoyage de fin de chantier en 2026 : 2 à 6 €/m² selon le niveau de salissure (nettoyage grossier, fin ou de livraison). Facteurs de prix et règles de TVA pour les travaux de rénovation.",
  path: PATH,
  type: "article",
  publishedTime: DATE_PUBLISHED,
  modifiedTime: DATE_MODIFIED,
  authors: [author.name],
  keywords: [
    "prix nettoyage fin de chantier",
    "tarif nettoyage fin de chantier m2",
    "nettoyage après travaux prix",
    "nettoyage de livraison",
    "tva nettoyage fin de chantier",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix d'un nettoyage de fin de chantier au m² ?",
    answer:
      "Le nettoyage de fin de chantier coûte généralement entre 2 et 6 € par m² HT en 2026. Un nettoyage grossier (évacuation des gros résidus) se situe vers 2 à 3 €/m², un nettoyage fin vers 3 à 4,50 €/m², et un nettoyage de livraison (état impeccable, traces et adhésifs compris) peut atteindre 4,50 à 6 €/m². Un forfait minimum de déplacement s'applique aux petites surfaces.",
  },
  {
    question: "Pourquoi le nettoyage de fin de chantier est-il plus cher qu'un entretien courant ?",
    answer:
      "Parce qu'il s'agit d'un travail ponctuel, physique et minutieux : retrait des poussières fines, des traces de peinture, de colle et d'adhésifs, nettoyage des vitres, des sanitaires et des sols neufs. Il mobilise du matériel spécifique et une cadence beaucoup plus lente qu'un entretien récurrent, d'où un prix au m² nettement supérieur.",
  },
  {
    question: "Le nettoyage de fin de chantier bénéficie-t-il d'une TVA réduite ?",
    answer:
      "Cela dépend du contexte. Réalisé dans le cadre de travaux de rénovation d'un logement de plus de deux ans, le nettoyage de fin de chantier peut, sous conditions, suivre le taux réduit applicable aux travaux (10 %), notamment s'il est facturé par l'entreprise qui réalise les travaux. Pour une construction neuve ou des locaux professionnels, le taux normal de 20 % s'applique. Faites confirmer le taux par votre prestataire selon votre situation.",
  },
  {
    question: "Comment obtenir un prix juste pour un nettoyage de fin de chantier ?",
    answer:
      "Faites visiter le site avant le devis : l'état réel (poussière, gravats, traces) conditionne tout. Précisez le niveau attendu (grossier, fin ou livraison), la surface, le nombre de pièces et de vitres, et la date butoir. Un devis établi sans visite ou très inférieur aux autres signale un risque de prestation incomplète.",
  },
  {
    question: "Le nettoyage de fin de chantier en sous-traitance est-il soumis à l'autoliquidation de TVA ?",
    answer:
      "Oui. Lorsqu'il est sous-traité dans le cadre de travaux de bâtiment, le nettoyage de fin de chantier relève de l'autoliquidation : le sous-traitant facture hors taxe avec la mention « Autoliquidation », et c'est l'entreprise principale (donneur d'ordre assujetti) qui déclare la TVA. Cette règle vise le nettoyage prolongeant des travaux, pas l'entretien courant.",
  },
  {
    question: "Quelles informations fournir pour obtenir un devis fiable ?",
    answer:
      "Communiquez la surface, le niveau de finition attendu (grossier, fin, livraison), le nombre et le type de vitres, la nature des sols, l'accessibilité (étage, ascenseur, co-activité) et la date butoir. Une visite préalable reste le meilleur moyen d'obtenir un prix réaliste et d'éviter les avenants.",
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
    slug: "tarif-horaire-nettoyage",
    href: "/tarifs/tarif-horaire-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Tarif horaire du nettoyage en 2026",
    excerpt:
      "Fourchette du taux horaire facturé, sa composition et les écarts selon la région et la prestation.",
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
            name: "Prix du nettoyage de fin de chantier en 2026 (France)",
            description:
              "Fourchettes de prix au m² HT 2026 du nettoyage de fin de chantier sur le marché français, selon le niveau de finition (grossier, fin, livraison).",
            path: PATH,
            dateModified: DATE_MODIFIED,
            temporalCoverage: "2026",
            keywords: ["prix nettoyage fin de chantier", "tarif m2", "nettoyage après travaux"],
            variables: ["Type de prestation", "Prix / m²", "Ce qui est traité"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Fin de chantier"
        title="Prix du nettoyage de fin de chantier en 2026"
        intro="Combien coûte le nettoyage après travaux ? Prix au m² selon le niveau de salissure, facteurs qui font varier le tarif et règles de TVA pour les chantiers de rénovation."
        author={author}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        readMinutes={READ_MINUTES}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage de fin de chantier coûte entre <strong>2 et 6 € par m² HT</strong>{" "}
          selon l&apos;état du site : ~2 à 3 €/m² pour un nettoyage grossier, 3 à 4,50 €/m² pour un
          nettoyage fin, et jusqu&apos;à 4,50 à 6 €/m² pour un nettoyage de livraison impeccable.
          La <strong>TVA est de 20 %</strong>, sauf cas de rénovation d&apos;un logement de plus de
          deux ans où un taux réduit peut s&apos;appliquer sous conditions.
        </AnswerBox>

        <p>
          Le nettoyage de fin de chantier (ou nettoyage après travaux) est une prestation{" "}
          <strong>ponctuelle, technique et physique</strong>, très différente d&apos;un entretien
          courant. Son prix au m² est plus élevé car la cadence est lente et le matériel
          spécifique. Cette page donne les fourchettes 2026 et clarifie la question de la TVA.
        </p>

        <InfoCallout title="Lecture des prix">
          Montants indicatifs 2026 pour le marché français, hors taxes. L&apos;état réel du chantier
          conditionne le prix : une visite préalable est indispensable pour un chiffrage fiable.
        </InfoCallout>

        <h2 id="prix-m2">Prix au m² selon l&apos;état du chantier</h2>
        <p>
          Le tarif dépend directement du <strong>niveau de finition</strong> attendu. On distingue
          classiquement trois prestations :
        </p>

        <FactTable
          caption="Prix du nettoyage de fin de chantier au m² (HT) — 2026"
          headers={["Type de prestation", "Prix / m²", "Ce qui est traité"]}
          rows={[
            ["Nettoyage grossier", "2 – 3 €", "Évacuation des gros résidus, balayage, dépoussiérage"],
            ["Nettoyage fin", "3 – 4,50 €", "Traces de peinture/plâtre, sols, sanitaires, vitres"],
            ["Nettoyage de livraison", "4,50 – 6 €", "État impeccable, adhésifs, traces, finitions"],
          ]}
        />

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Si la fin de chantier se paie plus cher au m² qu&apos;un entretien courant, c&apos;est
          parce qu&apos;elle impose une cadence lente et un matériel spécifique : c&apos;est le
          niveau de finition attendu qui fixe le prix.
        </PullQuote>

        <p>
          Pour de petites surfaces, un <strong>forfait minimum</strong> (souvent 150 à 300 €)
          couvre le déplacement et la mise en place. Voici quelques budgets indicatifs pour un
          nettoyage fin :
        </p>

        <FactTable
          caption="Budget indicatif pour un nettoyage fin de chantier (HT) — 2026"
          headers={["Surface", "Budget estimé", "Soit / m²"]}
          rows={[
            ["50 m²", "200 – 320 €", "4 – 6,40 €"],
            ["100 m²", "330 – 480 €", "3,30 – 4,80 €"],
            ["250 m²", "750 – 1 100 €", "3 – 4,40 €"],
            ["500 m²", "1 400 – 2 100 €", "2,80 – 4,20 €"],
          ]}
        />

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <ul>
          <li>
            <strong>Le niveau de salissure</strong> : poussière de plâtre, projections de peinture,
            colle et adhésifs allongent fortement les temps.
          </li>
          <li>
            <strong>La quantité de vitres</strong> : la vitrerie est chronophage et souvent comptée
            à part (1,50 à 4 €/m² de vitre).
          </li>
          <li>
            <strong>Le type de sols</strong> : carrelage, parquet, béton ciré ou résine n&apos;ont
            pas les mêmes contraintes de remise en état.
          </li>
          <li>
            <strong>L&apos;accessibilité</strong> : étages sans ascenseur, co-activité avec
            d&apos;autres corps de métier, évacuation des déchets.
          </li>
          <li>
            <strong>Le délai</strong> : une intervention en urgence ou le week-end avant une
            livraison se paie plus cher.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 2 à 6 €/m² HT selon qu'il s'agit d'un nettoyage grossier, fin ou de livraison.",
            "La vitrerie est souvent facturée à part (1,50 à 4 €/m² de vitre).",
            "Un forfait minimum (150 à 300 €) s'applique aux petites surfaces.",
            "Une visite préalable est indispensable : l'état réel conditionne tout le prix.",
            "TVA de 20 %, sauf rénovation de logement de plus de 2 ans (taux réduit possible).",
          ]}
        />

        <h2 id="tva">Quelle TVA pour le nettoyage de fin de chantier ?</h2>
        <p>
          La règle générale est le <strong>taux normal de 20 %</strong>. Toutefois, lorsque le
          nettoyage de fin de chantier s&apos;inscrit dans des <strong>travaux de rénovation
          d&apos;un logement achevé depuis plus de deux ans</strong>, il peut, sous conditions,
          suivre le taux réduit applicable à ces travaux (10 %), en particulier s&apos;il est
          facturé par l&apos;entreprise qui a réalisé les travaux. Pour une construction neuve ou
          des locaux professionnels, le taux normal de 20 % s&apos;applique.
        </p>

        <InfoCallout title="À vérifier au cas par cas">
          L&apos;application du taux réduit dépend de la nature exacte des travaux et du bien
          concerné. Demandez à votre prestataire de confirmer le taux retenu et, en cas de doute,
          rapprochez-vous d&apos;un expert-comptable.
        </InfoCallout>

        <h2 id="autoliquidation">Sous-traitance et autoliquidation de la TVA</h2>
        <p>
          Le nettoyage de fin de chantier est fréquemment <strong>sous-traité</strong> par
          l&apos;entreprise générale ou un corps de métier. Dans ce cas, il relève de
          l&apos;<strong>autoliquidation de la TVA</strong> applicable aux travaux de bâtiment : le
          sous-traitant facture <strong>hors taxe</strong>, avec la mention « Autoliquidation », et
          c&apos;est le donneur d&apos;ordre assujetti qui déclare la TVA. Cette règle vise le
          nettoyage qui prolonge des travaux, et non l&apos;entretien courant. Le détail est dans
          notre guide{" "}
          <a href="/developpement/tva-nettoyage">TVA dans le nettoyage : taux, autoliquidation et facturation</a>.
        </p>

        <h2 id="checklist">Préparer sa demande de devis</h2>
        <p>
          Pour un chiffrage fiable et comparable, transmettez à chaque prestataire les mêmes
          informations :
        </p>
        <ul>
          <li><strong>Surface</strong> et nombre de pièces.</li>
          <li><strong>Niveau de finition</strong> attendu : grossier, fin ou livraison.</li>
          <li><strong>Vitrerie</strong> : nombre et type de vitres (chronophage, souvent à part).</li>
          <li><strong>Nature des sols</strong> : carrelage, parquet, béton, résine.</li>
          <li><strong>Accessibilité</strong> : étage, ascenseur, co-activité, évacuation des déchets.</li>
          <li><strong>Date butoir</strong> et contraintes d&apos;horaires.</li>
        </ul>

        {/* Sources d'autorité (TVA travaux) pour la citabilité GEO + E-E-A-T. */}
        <SourcesBox
          sources={[
            { label: "TVA : taux applicables aux travaux", href: "https://entreprendre.service-public.fr", publisher: "service-public.fr (Entreprendre)" },
            { label: "Bulletin officiel des finances publiques (BOFiP)", href: "https://bofip.impots.gouv.fr", publisher: "impots.gouv.fr" },
          ]}
        />

        <h2 id="definition">Nettoyage de fin de chantier, en clair</h2>
        <DefinitionBox term="Nettoyage de fin de chantier">
          Prestation ponctuelle réalisée à l&apos;issue de travaux de construction ou de rénovation,
          destinée à rendre les locaux propres et utilisables. Elle comprend l&apos;élimination des
          poussières fines, des traces de peinture, de plâtre, de colle et d&apos;adhésifs, ainsi
          que le nettoyage des sols, vitres et sanitaires. On la décline en nettoyage grossier, fin
          ou de livraison selon le niveau de finition attendu.
        </DefinitionBox>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Cadrez votre demande avant de consulter
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Un cahier des charges précis évite les prestations incomplètes et les avenants.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/developpement/cahier-des-charges-nettoyage" variant="primary">
              Rédiger un cahier des charges
            </Button>
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="secondary">
              Comment comparer des devis
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
