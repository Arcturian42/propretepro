import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, howToSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import {
  AnswerBox,
  KeyTakeaways,
  DefinitionBox,
  FactTable,
  InfoCallout,
} from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, type Article } from "@/lib/content";

const PATH = "/tarifs/comment-comparer-devis-nettoyage";
const COVER = "/covers/comment-comparer-devis-nettoyage.webp";
const author = AUTHORS["marc-leroy"];
const DATE_PUBLISHED = "2026-02-12";
const DATE_MODIFIED = "2026-06-05";
const READ_MINUTES = 9;
const EXCERPT =
  "Méthode pour comparer des devis de nettoyage : grille de comparaison, ramener chaque offre au prix au m² et à l'heure, et pièges à éviter.";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Comparer des devis de nettoyage", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "methode", label: "La méthode en 4 étapes" },
  { id: "grille", label: "La grille de comparaison" },
  { id: "pieges", label: "Les pièges à éviter" },
  { id: "definition", label: "Comparer à périmètre égal" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Comment comparer des devis de nettoyage en 2026 : méthode et grille",
  description:
    "Méthode pour comparer des devis de nettoyage : harmoniser le périmètre, ramener chaque offre au prix au m² et à l'heure, utiliser une grille de comparaison et déjouer les pièges des prix d'appel.",
  path: PATH,
    image: COVER,
  type: "article",
  publishedTime: DATE_PUBLISHED,
  modifiedTime: DATE_MODIFIED,
  authors: [author.name],
  keywords: [
    "comparer devis nettoyage",
    "comparaison devis nettoyage",
    "choisir entreprise de nettoyage",
    "grille comparaison devis",
    "analyser devis propreté",
  ],
});

const FAQ = [
  {
    question: "Comment comparer objectivement plusieurs devis de nettoyage ?",
    answer:
      "La règle d'or est de comparer à périmètre identique. Fournissez à tous les prestataires le même cahier des charges (surfaces, fréquences, prestations, horaires), puis ramenez chaque devis au prix au m² par passage et au tarif horaire implicite. Vous neutralisez ainsi les différences de présentation et repérez immédiatement les offres sous- ou surdimensionnées.",
  },
  {
    question: "Comment calculer le prix au m² caché d'un devis au forfait ?",
    answer:
      "Divisez le forfait mensuel par le nombre de passages mensuels, puis par la surface : vous obtenez le prix au m² par passage. Pour le tarif horaire implicite, divisez le forfait par le nombre d'heures de présence annoncées. Si le prestataire ne communique pas son temps de présence, demandez-le : c'est un indicateur essentiel de sérieux.",
  },
  {
    question: "Faut-il toujours choisir le devis le moins cher ?",
    answer:
      "Non. Un prix nettement inférieur aux autres traduit le plus souvent une cadence irréaliste, des prestations exclues ou des consommables non inclus, ce qui dégrade la qualité et génère des avenants. À l'inverse, le plus cher n'est pas toujours le plus pertinent. Le bon choix est l'offre cohérente : périmètre complet, temps de présence réaliste, prix au m² dans la fourchette de marché.",
  },
  {
    question: "Quels documents demander pour comparer des devis de nettoyage ?",
    answer:
      "Demandez le détail des prestations par zone et par fréquence, le temps de présence prévu, le tarif horaire de référence, la liste des consommables inclus, les conditions de remplacement en cas d'absence, la durée d'engagement et les conditions de révision de prix. Ces éléments rendent les devis réellement comparables et limitent les mauvaises surprises.",
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
    image: COVER,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
          howToSchema({
            name: "Comment comparer des devis de nettoyage",
            description:
              "Méthode en 5 étapes pour comparer objectivement plusieurs devis de nettoyage sur une base identique.",
            steps: [
              { name: "Définir un cahier des charges commun", text: "Cadrez le périmètre, les surfaces, la fréquence et les prestations attendues, identiques pour tous les prestataires." },
              { name: "Exiger le détail du prix", text: "Demandez le prix au m² et le tarif horaire, pas seulement un forfait global, pour comparer des bases identiques." },
              { name: "Vérifier les prestations incluses", text: "Contrôlez ce qui est inclus ou en option : sanitaires, vitrerie, sols spécifiques, consommables." },
              { name: "Contrôler la cohérence des temps", text: "Vérifiez la cadence et le nombre d'heures : un prix très bas masque souvent une cadence irréaliste." },
              { name: "Comparer le coût total annuel", text: "Projetez la dépense sur 12 mois, TVA comprise, plutôt que de comparer les seuls prix d'entrée." },
            ],
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Méthode"
        title="Comment comparer des devis de nettoyage"
        intro="Trois devis, trois présentations différentes, des écarts du simple au double : voici la méthode pour les rendre comparables, la grille à utiliser et les pièges qui faussent la comparaison."
        author={author}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        readMinutes={READ_MINUTES}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Pour comparer des devis de nettoyage, <strong>comparez à périmètre identique</strong> :
          imposez le même cahier des charges à tous, puis ramenez chaque offre au{" "}
          <strong>prix au m² par passage</strong> et au <strong>tarif horaire implicite</strong>.
          Un prix au m² nettement hors de la fourchette de marché (0,30 à 0,60 €/m² pour des
          bureaux) signale une offre sous- ou surdimensionnée. Le bon choix n&apos;est ni le moins
          cher, ni le plus cher : c&apos;est le plus <strong>cohérent</strong>.
        </AnswerBox>

        <p>
          Comparer des devis de nettoyage est piégeux : chaque prestataire présente son offre à sa
          façon (forfait global, prix au m², à l&apos;heure), avec des périmètres implicites
          différents. Sans méthode, on compare des choux et des carottes. Voici comment procéder.
        </p>

        <InfoCallout title="Le préalable indispensable">
          La comparaison n&apos;a de sens que si tous les prestataires ont chiffré le{" "}
          <strong>même besoin</strong>. Un{" "}
          cahier des charges commun est le seul
          moyen d&apos;obtenir des devis réellement comparables.
        </InfoCallout>

        <h2 id="methode">La méthode en 4 étapes</h2>
        <ul>
          <li>
            <strong>1. Harmoniser le périmètre.</strong> Diffusez à tous le même cahier des charges :
            surfaces détaillées, fréquences, prestations attendues, horaires, consommables.
          </li>
          <li>
            <strong>2. Ramener au prix au m².</strong> Divisez le forfait mensuel par le nombre de
            passages mensuels, puis par la surface. Vous obtenez un prix au m² par passage,
            comparable d&apos;un devis à l&apos;autre.
          </li>
          <li>
            <strong>3. Calculer le tarif horaire implicite.</strong> Divisez le forfait par le
            temps de présence annoncé. Un tarif sous 18 €/h ou une cadence supérieure à 400 m²/h
            doivent alerter.
          </li>
          <li>
            <strong>4. Confronter aux fourchettes de marché.</strong> Replacez chaque devis dans les
            repères 2026 (voir le{" "}
            <a href="/tarifs/nettoyage-bureaux-m2">prix au m²</a> et le{" "}
            <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire</a>) pour repérer les anomalies.
          </li>
        </ul>

        <h2 id="grille">La grille de comparaison</h2>
        <p>
          Reportez chaque devis dans un tableau à colonnes identiques. Vous visualisez
          immédiatement où se logent les écarts et ce qu&apos;ils cachent.
        </p>

        <FactTable
          caption="Grille de comparaison de devis de nettoyage"
          headers={["Critère", "Devis A", "Devis B", "Devis C"]}
          rows={[
            ["Surface et fréquence", "À aligner", "À aligner", "À aligner"],
            ["Forfait mensuel HT", "—", "—", "—"],
            ["Prix au m² / passage", "—", "—", "—"],
            ["Temps de présence / passage", "—", "—", "—"],
            ["Tarif horaire implicite", "—", "—", "—"],
            ["Consommables inclus", "Oui / Non", "Oui / Non", "Oui / Non"],
            ["Remplacement en cas d'absence", "—", "—", "—"],
            ["Durée d'engagement / révision", "—", "—", "—"],
          ]}
        />

        <h2 id="pieges">Les pièges à éviter</h2>
        <ul>
          <li>
            <strong>Le prix d&apos;appel.</strong> Un forfait très bas masque souvent une cadence
            irréaliste : la prestation sera expédiée et générera des avenants.
          </li>
          <li>
            <strong>Le périmètre flou.</strong> « Nettoyage des bureaux » sans détail laisse la
            porte ouverte à l&apos;exclusion des sanitaires, de la vitrerie ou des sols techniques.
          </li>
          <li>
            <strong>Les consommables non inclus.</strong> Papier et savon facturés à part faussent
            la comparaison ; rapportez tout au même périmètre.
          </li>
          <li>
            <strong>L&apos;absence de plan de remplacement.</strong> Que se passe-t-il si l&apos;agent
            est absent ? Un bon devis le précise.
          </li>
          <li>
            <strong>La révision de prix non encadrée.</strong> Vérifiez l&apos;indice et la
            périodicité d&apos;indexation pour éviter les hausses surprises.
          </li>
          <li>
            <strong>Comparer du TTC avec du HT.</strong> Raisonnez toujours sur la même base (HT),
            la TVA à 20 % s&apos;ajoute ensuite.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Imposez un cahier des charges commun : sans périmètre identique, aucune comparaison n'est valable.",
            "Ramenez chaque devis au prix au m² par passage et au tarif horaire implicite.",
            "Confrontez les chiffres aux fourchettes de marché 2026 pour repérer les anomalies.",
            "Méfiez-vous du prix d'appel : il cache souvent une cadence irréaliste.",
            "Vérifiez consommables, remplacement et révision de prix avant de signer.",
          ]}
        />

        <h2 id="definition">Comparer à périmètre égal, en clair</h2>
        <DefinitionBox term="Comparaison à périmètre égal">
          Principe selon lequel deux devis ne sont comparables que s&apos;ils portent exactement sur
          le même besoin : mêmes surfaces, mêmes fréquences, mêmes prestations, mêmes horaires et
          mêmes consommables. Harmoniser le périmètre via un cahier des charges commun, puis ramener
          chaque offre à des indicateurs unitaires (prix au m², tarif horaire), est la condition
          d&apos;une comparaison honnête.
        </DefinitionBox>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Outillez votre comparaison
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Un cahier des charges et un modèle de devis posent les bases d&apos;une mise en
            concurrence saine.
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
