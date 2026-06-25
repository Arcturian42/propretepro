import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, howToSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout, PullQuote } from "@/components/sections/GeoBlocks";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/developpement/contrat-nettoyage-clause-revision-prix";
const COVER = "/covers/contrat-nettoyage-clause-revision-prix.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Développement", href: "/developpement" },
  { name: "Contrat & révision de prix", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "composition", label: "Ce que contient le contrat" },
  { id: "duree", label: "Durée et reconduction" },
  { id: "revision", label: "La clause de révision de prix" },
  { id: "formule", label: "Comprendre la formule" },
  { id: "exemple", label: "Exemple de révision" },
  { id: "penalites", label: "Pénalités et périmètre" },
  { id: "erreurs", label: "Pièges à éviter" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Contrat de nettoyage et clause de révision de prix",
  description:
    "Durée, reconduction, pénalités et clause de révision de prix : comment sécuriser un contrat de nettoyage et protéger sa marge sur toute sa durée, avec formule d'indexation et exemple chiffré.",
  path: PATH,
  image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "contrat de nettoyage",
    "clause de révision de prix nettoyage",
    "indice révision prix propreté",
    "révision prix contrat de nettoyage",
    "contrat de prestation de propreté",
  ],
});

const FAQ = [
  {
    question: "Qu'est-ce qu'une clause de révision de prix dans un contrat de nettoyage ?",
    answer:
      "C'est la clause qui réajuste périodiquement le prix du contrat selon l'évolution de coûts de référence, via une formule indexée sur des indices officiels (coût horaire du travail, SMIC, indices INSEE/Syntec). Comme la main-d'œuvre représente l'essentiel du coût d'une prestation de nettoyage, cette clause protège le prestataire contre la hausse des salaires conventionnels pendant toute la durée du contrat.",
  },
  {
    question: "Quelle différence entre révision et indexation des prix ?",
    answer:
      "La révision applique une formule paramétrique qui recalcule le prix en fonction d'un ou plusieurs indices, généralement à date fixe (une fois par an). L'indexation au sens strict fait varier automatiquement le prix sur un indice unique. En pratique, dans la propreté, on parle de clause de révision avec une formule combinant une part fixe et une part variable indexée.",
  },
  {
    question: "Sur quel indice indexer un contrat de nettoyage ?",
    answer:
      "Le plus pertinent est un indice reflétant le coût du travail, puisque la main-d'œuvre domine le coût : indice du coût horaire du travail (ICHT) publié par l'INSEE, évolution du SMIC ou du minimum conventionnel de la branche propreté. Certains contrats combinent un indice de main-d'œuvre et un indice de prix pour les consommables. L'indice doit être public, vérifiable et clairement nommé dans la clause.",
  },
  {
    question: "Une clause de révision de prix est-elle obligatoire ?",
    answer:
      "Non, elle n'est pas obligatoire dans un marché privé, mais son absence est risquée pour le prestataire : sans révision, une hausse de la grille de salaire en cours de contrat ampute directement la marge. Dans les marchés publics pluriannuels, le Code de la commande publique encourage fortement une clause de révision pour les prestations exposées aux aléas économiques.",
  },
  {
    question: "Quelle durée pour un contrat de nettoyage ?",
    answer:
      "Les contrats de nettoyage sont souvent conclus pour un à trois ans, avec reconduction. Une durée longue sécurise le chiffre d'affaires mais fige le prix : elle rend la clause de révision indispensable. Pensez aussi aux conditions de résiliation et au préavis, ainsi qu'aux règles de tacite reconduction encadrées par la loi.",
  },
  {
    question: "Comment se protéger d'un contrat de nettoyage non rentable ?",
    answer:
      "Trois réflexes : chiffrer à partir de son coût de revient réel (reprise du personnel incluse), vérifier la présence et la formule d'une clause de révision de prix, et cerner précisément le périmètre et les pénalités. Un prix ferme sur plusieurs années sans révision revient à financer soi-même l'inflation salariale conventionnelle.",
  },
];

export default function Page() {
  const relatedHrefs = [
    "/developpement/repondre-appel-offres-nettoyage",
    "/tarifs/cout-revient-agent-proprete",
    "/reglementation/grille-salaire-proprete-2026",
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
          howToSchema({
            name: "Calculer la révision de prix d'un contrat de nettoyage",
            description:
              "Appliquer une formule de révision de prix indexée sur un indice de coût du travail pour réajuster le tarif d'un contrat de nettoyage.",
            steps: [
              {
                name: "Poser la formule de révision",
                text: "Reprendre la formule P1 = P0 × (a + b × I1 / I0), où P0 est le prix initial, P1 le prix révisé, a la part fixe et b la part variable indexée (avec a + b = 1).",
              },
              {
                name: "Fixer la part fixe et la part variable",
                text: "Définir la part fixe (a) et la part variable (b) selon le poids de la main-d'œuvre, par exemple a = 0,15 et b = 0,85 pour une prestation où la main-d'œuvre domine le coût.",
              },
              {
                name: "Relever l'évolution de l'indice",
                text: "Mesurer l'évolution de l'indice de coût du travail entre la date initiale et la date de révision, par exemple un indice passant de 100 à 103, soit I1 / I0 = 1,03.",
              },
              {
                name: "Calculer le coefficient de révision",
                text: "Calculer le coefficient de révision : 0,15 + 0,85 × 1,03 = 1,0255.",
              },
              {
                name: "Appliquer le coefficient au prix initial",
                text: "Multiplier le prix initial par le coefficient pour obtenir le prix révisé : 4 800 € × 1,0255 ≈ 4 922 €.",
              },
            ],
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Développement · Contrats"
        title="Contrat de nettoyage et clause de révision de prix"
        intro="Durée, reconduction, pénalités et surtout révision de prix : comment contractualiser une prestation de propreté sans laisser l'inflation salariale grignoter votre marge."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Un <strong>contrat de nettoyage</strong> ne se résume pas à un prix : sa rentabilité dépend
          de quelques clauses. La plus décisive est la <strong>clause de révision de prix</strong>,
          qui réindexe chaque année le tarif sur des <strong>indices officiels</strong> (coût du
          travail, SMIC, indices INSEE). Sans elle, une hausse de la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire</a> en cours de
          contrat réduit directement votre marge. Vérifiez aussi la durée, les pénalités et le
          périmètre exact.
        </AnswerBox>

        <p>
          Gagner un marché ne garantit pas de gagner de l&apos;argent. Entre la signature et le terme
          d&apos;un contrat pluriannuel, les salaires conventionnels augmentent une à deux fois par an.
          Si le prix reste figé, la marge fond. Ce guide passe en revue les clauses qui protègent —
          ou exposent — votre rentabilité.
        </p>

        <h2 id="composition">Ce que contient le contrat</h2>
        <FactTable
          caption="Clauses clés d'un contrat de prestation de nettoyage"
          headers={["Clause", "Rôle"]}
          rows={[
            ["Objet et périmètre", "Sites, prestations et fréquences (renvoi au cahier des charges)"],
            ["Prix et décomposition", "Montant, décomposition (forfait / unitaire), modalités de paiement"],
            ["Révision de prix", "Formule d'indexation et périodicité"],
            ["Durée et reconduction", "Date d'effet, durée, conditions de reconduction et préavis"],
            ["Qualité et pénalités", "Niveaux attendus, contrôles et pénalités de non-qualité"],
            ["Personnel", "Reprise au titre de l'annexe 7, encadrement, remplacement"],
            ["Résiliation", "Cas, préavis, conséquences"],
          ]}
        />

        <h2 id="duree">Durée et reconduction</h2>
        <p>
          Les contrats de nettoyage courent généralement sur <strong>1 à 3 ans</strong>, souvent avec
          reconduction. Une durée longue sécurise le chiffre d&apos;affaires mais fige le prix —
          d&apos;où l&apos;importance vitale de la clause de révision. La <strong>tacite
          reconduction</strong> est encadrée par la loi : le professionnel doit informer le client de
          la possibilité de ne pas reconduire dans certains cas. Vérifiez le préavis et les conditions
          de résiliation.
        </p>

        <h2 id="revision">La clause de révision de prix</h2>
        <DefinitionBox term="Clause de révision de prix">
          Clause qui réajuste périodiquement le prix du marché selon l&apos;évolution de coûts de
          référence, via une <strong>formule paramétrique</strong> indexée sur des indices officiels.
          Elle distingue une <strong>part fixe</strong> (non révisable) et une{" "}
          <strong>part variable</strong> indexée, le plus souvent sur le coût de la main-d&apos;œuvre.
        </DefinitionBox>
        <p>
          Dans la propreté, la main-d&apos;œuvre représente l&apos;essentiel du coût : la formule
          s&apos;appuie donc principalement sur un indice de coût du travail. Les indices courants
          sont l&apos;<strong>ICHT</strong> (indice du coût horaire du travail, INSEE), l&apos;évolution
          du <strong>SMIC</strong> ou du minimum conventionnel de branche, parfois complétés d&apos;un
          indice pour les consommables.
        </p>

        <h2 id="formule">Comprendre la formule</h2>
        <p>
          Une formule de révision typique prend la forme suivante :
        </p>
        <PullQuote>
          P1 = P0 × ( a + b × I1 / I0 )
        </PullQuote>
        <p>
          où <strong>P0</strong> est le prix initial, <strong>P1</strong> le prix révisé,{" "}
          <strong>a</strong> la part fixe, <strong>b</strong> la part variable (avec a + b = 1), et{" "}
          <strong>I0 / I1</strong> les valeurs de l&apos;indice à la date initiale et à la date de
          révision. Plus <strong>b</strong> est élevé, plus le prix suit l&apos;évolution des salaires
          — ce qui protège le prestataire.
        </p>
        <InfoCallout title="Bon réglage">
          Pour une prestation de nettoyage où la main-d&apos;œuvre pèse ~85 % du coût, une part
          variable <strong>b</strong> de l&apos;ordre de 0,80 à 0,85 reflète la réalité économique. Une
          part variable trop faible laisse l&apos;inflation salariale à votre charge.
        </InfoCallout>

        <h2 id="exemple">Exemple de révision</h2>
        <p>
          Prenons un contrat à <strong>4 800 € HT/mois</strong>, avec a = 0,15, b = 0,85, et un indice
          de coût du travail passant de 100 à 103 sur un an (+3 %).
        </p>
        <FactTable
          caption="Calcul de la révision annuelle (exemple indicatif)"
          headers={["Élément", "Valeur"]}
          rows={[
            ["Prix initial P0", "4 800 €"],
            ["Part fixe (a)", "0,15"],
            ["Part variable (b)", "0,85"],
            ["Évolution de l'indice (I1/I0)", "103 / 100 = 1,03"],
            ["Coefficient de révision", "0,15 + 0,85 × 1,03 = 1,0255"],
            ["Prix révisé P1", "4 800 € × 1,0255 ≈ 4 922 €"],
          ]}
        />
        <p>
          La hausse de salaires de 3 % se répercute ici à hauteur de ~2,55 % sur le prix, soit{" "}
          <strong>+122 €/mois</strong>. Sans clause de révision, ces 122 € seraient venus directement
          en déduction de votre marge.
        </p>
        <KeyTakeaways
          items={[
            "La clause de révision de prix est la protection n°1 de la marge sur un contrat pluriannuel.",
            "Indexer sur un indice de coût du travail (ICHT, SMIC, minimum conventionnel) : c'est le poste dominant.",
            "Régler la part variable (b) au niveau réel du poids de la main-d'œuvre (~0,80 à 0,85).",
            "Vérifier la périodicité, la date de référence et le nom exact de l'indice dans la clause.",
            "Surveiller durée, reconduction tacite et préavis de résiliation.",
            "Chiffrer à partir du coût de revient réel, reprise du personnel (Annexe 7) incluse.",
          ]}
        />

        <h2 id="penalites">Pénalités et périmètre</h2>
        <p>
          Deux autres clauses pèsent sur la rentabilité réelle. Les <strong>pénalités de
          non-qualité</strong> doivent être proportionnées et adossées à une grille de contrôle
          objective. Le <strong>périmètre</strong> doit être sans ambiguïté : les prestations
          ponctuelles (vitrerie, remise en état) non incluses doivent faire l&apos;objet de devis
          séparés, faute de quoi elles sont réalisées sans être facturées.
        </p>

        <h2 id="erreurs">Pièges à éviter</h2>
        <ul>
          <li><strong>Prix ferme</strong> sur plusieurs années, sans clause de révision.</li>
          <li><strong>Part variable trop faible</strong>, qui n&apos;absorbe pas la hausse des salaires.</li>
          <li><strong>Indice imprécis</strong> ou introuvable, rendant la révision inapplicable.</li>
          <li><strong>Périmètre flou</strong> conduisant à des prestations non facturées.</li>
          <li><strong>Pénalités déséquilibrées</strong> sans grille de contrôle opposable.</li>
        </ul>

        {/* Sources externes faisant autorité (citabilité GEO + E-E-A-T). */}
        <SourcesBox
          sources={[
            { label: "Indices et séries (coût du travail, prix)", href: "https://www.insee.fr", publisher: "INSEE" },
            { label: "Révision et actualisation des prix dans les marchés publics", href: "https://www.economie.gouv.fr/daj/marches-publics", publisher: "Direction des affaires juridiques (Bercy)" },
            { label: "Tacite reconduction des contrats", href: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006069565", publisher: "Légifrance (Code de la consommation)" },
          ]}
        />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">Chiffrez sur des bases saines</p>
          <p className="mt-1 text-sm text-muted-ink">
            Une bonne clause de révision protège un prix… encore faut-il qu&apos;il soit juste au départ.
          </p>
          <div className="mt-4">
            <Button href="/tarifs/cout-revient-agent-proprete" variant="primary">
              Calculer le coût de revient d&apos;un agent
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
