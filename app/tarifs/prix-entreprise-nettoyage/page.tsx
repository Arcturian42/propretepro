import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, datasetSchema } from "@/lib/schema";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { SOURCES } from "@/lib/sources";
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
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, type Article } from "@/lib/content";

const PATH = "/tarifs/prix-entreprise-nettoyage";
const author = AUTHORS["marc-leroy"];
const DATE_PUBLISHED = "2026-02-12";
const DATE_MODIFIED = "2026-06-05";
const READ_MINUTES = 9;
const EXCERPT =
  "Prix moyen d'une prestation d'entreprise de nettoyage : forfaits, abonnements mensuels et logique de tarification pour un contrat régulier.";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix d'une entreprise de nettoyage", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "forfaits", label: "Forfaits et abonnements mensuels" },
  { id: "logique", label: "Comment se construit le prix" },
  { id: "exemple", label: "Exemple de budget annuel" },
  { id: "facteurs", label: "Facteurs qui influencent le prix" },
  { id: "negocier", label: "Négocier et sécuriser" },
  { id: "definition", label: "Forfait, abonnement, régie" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix d'une entreprise de nettoyage en 2026 : forfaits et abonnements",
  description:
    "Prix moyen d'une entreprise de nettoyage en 2026 : forfaits mensuels de 150 à plus de 2 000 € selon la surface et la fréquence. Logique des abonnements, facteurs de prix et conseils pour négocier.",
  path: PATH,
  type: "article",
  publishedTime: DATE_PUBLISHED,
  modifiedTime: DATE_MODIFIED,
  authors: [author.name],
  keywords: [
    "prix entreprise de nettoyage",
    "tarif entreprise nettoyage",
    "abonnement nettoyage mensuel",
    "forfait nettoyage",
    "prix prestation nettoyage",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix moyen d'une entreprise de nettoyage par mois ?",
    answer:
      "Pour un contrat régulier, l'abonnement mensuel d'une entreprise de nettoyage va le plus souvent de 150 € pour de petits locaux à plus de 2 000 € pour de grandes surfaces nettoyées fréquemment, hors taxes. Le montant dépend avant tout de la surface, de la fréquence et de l'étendue des prestations. Un forfait plancher (souvent 90 à 150 €/mois) s'applique aux très petits sites.",
  },
  {
    question: "Forfait ou facturation à l'heure : que choisir ?",
    answer:
      "Pour une prestation récurrente et stable (bureaux, commerces), le forfait mensuel est généralement préférable : il lisse le coût et garantit un budget prévisible. La facturation à l'heure convient plutôt aux interventions ponctuelles ou variables. Dans tous les cas, demandez le détail du temps de présence prévu pour vérifier que le forfait est réaliste.",
  },
  {
    question: "Que comprend un abonnement de nettoyage ?",
    answer:
      "Un abonnement standard couvre l'entretien courant : sols, sanitaires, poubelles, dépoussiérage des surfaces. Les prestations périodiques (vitrerie, remise en état des sols, grand nettoyage) sont souvent facturées en plus. Vérifiez toujours si les fournitures et consommables (papier, savon) sont inclus, car c'est une source fréquente d'écart entre devis.",
  },
  {
    question: "Peut-on négocier le prix d'un contrat de nettoyage ?",
    answer:
      "Oui, surtout en jouant sur la durée d'engagement et la fréquence. Un engagement de 12 à 36 mois ou une fréquence élevée donnent de la visibilité au prestataire et justifient une remise. À l'inverse, exiger des prestations supplémentaires sans rallonger le temps de présence dégrade la qualité. La négociation la plus saine porte sur le périmètre, pas sur la compression du temps.",
  },
  {
    question: "Existe-t-il un forfait minimum pour de petits locaux ?",
    answer:
      "Oui. La plupart des entreprises de nettoyage appliquent un forfait plancher, souvent compris entre 90 et 150 € HT par mois, en deçà duquel l'intervention n'est pas rentable (temps de déplacement, gestion administrative). Pour de très petites surfaces, ce minimum peut représenter un prix au m² élevé : regrouper les passages ou mutualiser avec un voisin permet d'optimiser.",
  },
  {
    question: "Comment le prix d'un contrat de nettoyage évolue-t-il dans le temps ?",
    answer:
      "Un contrat pluriannuel comporte en principe une clause de révision de prix qui réindexe le tarif chaque année, le plus souvent sur un indice de coût du travail (la main-d'œuvre étant le poste dominant). Sans cette clause, le prix reste figé mais le prestataire absorbe seul la hausse des salaires, ce qui finit par dégrader la prestation. Vérifiez la formule et l'indice avant de signer.",
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
      "Grille de comparaison et pièges à éviter pour comparer objectivement plusieurs devis de nettoyage.",
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
            name: "Prix d'une entreprise de nettoyage en 2026 (France)",
            description:
              "Fourchettes indicatives HT des abonnements mensuels d'entreprise de nettoyage sur le marché français en 2026, à titre informatif.",
            path: PATH,
            dateModified: DATE_MODIFIED,
            temporalCoverage: "2026",
            keywords: [
              "prix entreprise de nettoyage",
              "abonnement nettoyage mensuel",
              "forfait nettoyage",
            ],
            variables: ["Surface", "1x / semaine", "2-3x / semaine", "5x / semaine"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Forfaits"
        title="Prix d'une entreprise de nettoyage : forfaits et abonnements"
        intro="Combien coûte un contrat d'entretien régulier ? Repères de prix pour les forfaits et abonnements mensuels des entreprises de nettoyage, logique de tarification et leviers de négociation."
        author={author}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        readMinutes={READ_MINUTES}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, l&apos;abonnement mensuel d&apos;une entreprise de nettoyage va le plus souvent
          de <strong>150 €/mois</strong> pour de petits locaux à <strong>plus de 2 000 €/mois</strong>{" "}
          pour de grandes surfaces fréquemment entretenues (HT). Le prix se construit sur la base
          d&apos;un <strong>temps de présence facturé 18 à 35 €/h</strong>, transformé en forfait.
          Surface, fréquence et périmètre des prestations sont les trois leviers déterminants.
        </AnswerBox>

        <p>
          La plupart des entreprises confient leur propreté à un prestataire via un{" "}
          <strong>contrat d&apos;entretien récurrent</strong>, facturé sous forme d&apos;abonnement
          mensuel. C&apos;est le modèle le plus répandu pour les bureaux, commerces, cabinets et
          locaux d&apos;activité. Comprendre comment ce forfait se construit permet de juger
          si un prix est juste et de négocier sur les bons paramètres.
        </p>

        <InfoCallout title="Lecture des prix">
          Les montants ci-dessous sont des ordres de grandeur 2026 pour le marché français, hors
          taxes. Le prix réel dépend du site et fait l&apos;objet d&apos;un chiffrage après visite.
        </InfoCallout>

        <h2 id="forfaits">Forfaits et abonnements mensuels</h2>
        <p>
          Un forfait mensuel correspond à un nombre d&apos;heures de présence par mois, valorisé au
          tarif horaire du prestataire. Voici des fourchettes indicatives pour un entretien courant
          de bureaux ou commerces, hors prestations périodiques (vitrerie, remise en état).
        </p>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Un forfait mensuel n&apos;est jamais qu&apos;un temps de présence valorisé au tarif
          horaire du prestataire : la surface et la fréquence en fixent le volume d&apos;heures,
          et c&apos;est là que tout se joue.
        </PullQuote>

        <FactTable
          caption="Abonnement mensuel indicatif — entretien courant (HT) — 2026"
          headers={["Surface", "1x / semaine", "2-3x / semaine", "5x / semaine"]}
          rows={[
            ["100 m²", "90 – 150 €", "150 – 230 €", "260 – 360 €"],
            ["300 m²", "180 – 280 €", "420 – 620 €", "700 – 950 €"],
            ["600 m²", "320 – 480 €", "780 – 1 150 €", "1 300 – 1 800 €"],
            ["1 200 m²", "580 – 880 €", "1 450 – 2 150 €", "2 400 – 3 300 €"],
          ]}
        />

        <p>
          Au-delà de l&apos;entretien courant, les <strong>prestations périodiques</strong> sont
          souvent facturées séparément, en complément de l&apos;abonnement :
        </p>

        <FactTable
          caption="Prestations périodiques courantes (HT) — 2026"
          headers={["Prestation", "Unité", "Prix indicatif"]}
          rows={[
            ["Vitrerie", "par m² de vitre", "1,50 – 4 €"],
            ["Décapage / remise en état des sols", "par m²", "2 – 6 €"],
            ["Shampooing moquette", "par m²", "2 – 5 €"],
            ["Grand nettoyage de printemps", "forfait demi-journée", "180 – 350 €"],
          ]}
        />

        <h2 id="logique">Comment se construit le prix d&apos;un contrat</h2>
        <p>
          Un prestataire sérieux raisonne en trois temps : il estime le <strong>temps de
          nettoyage</strong> à partir d&apos;une cadence (250 à 400 m²/h pour des bureaux), il
          multiplie par sa <strong>fréquence</strong> mensuelle, puis applique son{" "}
          <strong>tarif horaire facturé</strong> (qui couvre le salaire chargé, l&apos;encadrement,
          les fournitures, les frais de structure et la marge). Le forfait mensuel en découle.
        </p>
        <p>
          C&apos;est pourquoi un abonnement très bas n&apos;est pas forcément une bonne affaire :
          il traduit souvent un temps de présence comprimé, donc une prestation expédiée. Pour
          décortiquer la part salariale d&apos;un tarif, voir le{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a>.
        </p>

        <h2 id="exemple">Exemple de budget annuel</h2>
        <p>
          Pour passer du forfait mensuel au coût réel, projetez la dépense sur l&apos;année, TVA
          comprise, et ajoutez les prestations périodiques. Exemple pour <strong>300 m² de bureaux,
          2 à 3 passages par semaine</strong> :
        </p>
        <FactTable
          caption="Budget annuel d'un contrat d'entretien (300 m², 2-3×/sem, exemple indicatif)"
          headers={["Poste", "Base", "Montant"]}
          rows={[
            ["Abonnement mensuel HT", "Entretien courant", "520 €"],
            ["Abonnement annuel HT", "× 12 mois", "6 240 €"],
            ["Prestations périodiques HT", "Vitrerie, sols (annuel)", "≈ 600 €"],
            ["Total annuel HT", "—", "≈ 6 840 €"],
            ["TVA", "20 %", "1 368 €"],
            ["Total annuel TTC", "—", "≈ 8 208 €"],
          ]}
        />
        <p>
          Raisonner en coût annuel TTC évite de comparer des forfaits d&apos;entrée trompeurs et
          révèle le vrai poids du poste propreté dans votre budget.
        </p>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <ul>
          <li>
            <strong>La surface et la fréquence</strong> : les deux moteurs principaux du volume
            d&apos;heures, donc du forfait.
          </li>
          <li>
            <strong>Le périmètre des prestations</strong> : sanitaires, vitrerie, sols techniques
            ou simple entretien ne mobilisent pas le même temps.
          </li>
          <li>
            <strong>Les fournitures incluses ou non</strong> : papier, savon, sacs ; leur exclusion
            allège artificiellement le forfait affiché.
          </li>
          <li>
            <strong>La durée d&apos;engagement</strong> : un contrat de 12 à 36 mois sécurise le
            prestataire et ouvre la voie à une remise.
          </li>
          <li>
            <strong>Les horaires et la zone géographique</strong> : interventions tôt/tard,
            week-end, ou Île-de-France majorent le coût.
          </li>
        </ul>

        <h2 id="negocier">Négocier et sécuriser son contrat</h2>
        <p>
          Une fois le juste prix identifié, l&apos;enjeu est de le sécuriser dans la durée :
        </p>
        <ul>
          <li><strong>Durée d&apos;engagement</strong> : 12 à 36 mois donnent de la visibilité au prestataire et justifient une remise.</li>
          <li><strong>Périmètre clair</strong> : un{" "}
            <a href="/developpement/cahier-des-charges-nettoyage">cahier des charges</a> évite les prestations non facturées… ou non réalisées.</li>
          <li><strong>Clause de révision de prix</strong> : encadrez l&apos;indexation annuelle pour éviter les hausses surprises — voir le{" "}
            <a href="/developpement/contrat-nettoyage-clause-revision-prix">contrat &amp; clause de révision</a>.</li>
          <li><strong>Continuité de service</strong> : exigez un plan de remplacement en cas d&apos;absence.</li>
        </ul>

        <KeyTakeaways
          items={[
            "Un abonnement va de 150 €/mois (petits locaux) à plus de 2 000 €/mois (grandes surfaces fréquentes).",
            "Le forfait n'est qu'un temps de présence valorisé au tarif horaire du prestataire.",
            "Vitrerie et remise en état des sols sont généralement facturées hors abonnement.",
            "Négociez sur la durée d'engagement et le périmètre, jamais sur la compression du temps.",
            "Vérifiez systématiquement si les consommables sont inclus.",
          ]}
        />

        <h2 id="definition">Forfait, abonnement, régie : quelles différences ?</h2>
        <DefinitionBox term="Contrat de nettoyage au forfait">
          Engagement à réaliser une prestation définie (surfaces, fréquence, périmètre) pour un
          prix mensuel fixe, indépendamment du temps réellement passé. Il s&apos;oppose à la régie,
          où le client paie les heures réellement effectuées au tarif horaire. Le forfait offre un
          budget prévisible ; la régie, plus de souplesse pour des besoins variables.
        </DefinitionBox>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Cadrez votre contrat avant de signer
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Un cahier des charges clair vous évite les mauvaises surprises.
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
        <SourcesBox sources={SOURCES.tarifsSecteur} />

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
