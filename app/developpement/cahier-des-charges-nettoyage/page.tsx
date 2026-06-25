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

const PATH = "/developpement/cahier-des-charges-nettoyage";
const COVER = "/covers/cahier-des-charges-nettoyage.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Développement", href: "/developpement" },
  { name: "Cahier des charges de nettoyage", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "CDC, CCTP : de quoi parle-t-on ?" },
  { id: "structure", label: "Les rubriques d'un bon CDC" },
  { id: "frequences", label: "Prestations et fréquences" },
  { id: "qualite", label: "Niveaux de qualité et contrôle" },
  { id: "rediger", label: "Rédiger un CDC en 6 étapes" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Cahier des charges de nettoyage : méthode et structure (CCTP)",
  description:
    "Comment rédiger ou décrypter un cahier des charges de nettoyage : périmètre, prestations et fréquences, niveaux de qualité, indicateurs de contrôle et rubriques essentielles.",
  path: PATH,
  image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "cahier des charges nettoyage",
    "CCTP nettoyage",
    "cahier des charges propreté",
    "cahier des charges entretien des locaux",
    "rédiger un cahier des charges nettoyage",
  ],
});

const FAQ = [
  {
    question: "Qu'est-ce qu'un cahier des charges de nettoyage ?",
    answer:
      "Un cahier des charges de nettoyage est le document qui décrit précisément la prestation attendue : les locaux concernés, les prestations à réaliser, leurs fréquences, les niveaux de qualité exigés et les modalités de contrôle. Dans un marché, sa partie technique s'appelle le CCTP (cahier des clauses techniques particulières). Il sert de référence commune au donneur d'ordre et au prestataire et rend les offres comparables.",
  },
  {
    question: "Quelle différence entre obligation de moyens et obligation de résultat ?",
    answer:
      "En obligation de moyens, le cahier des charges impose des fréquences et des tâches (par exemple : aspiration des sols 3 fois par semaine). En obligation de résultat, il fixe un niveau de propreté à atteindre, mesuré par des indicateurs, en laissant le prestataire organiser ses moyens. L'obligation de résultat responsabilise le prestataire mais exige une grille de contrôle qualité claire et opposable.",
  },
  {
    question: "Que doit contenir un cahier des charges de nettoyage ?",
    answer:
      "Au minimum : l'identification et la description des sites, le périmètre des locaux et leurs surfaces, la liste des prestations par type de local, les fréquences, les niveaux de qualité et indicateurs de contrôle, les contraintes d'horaires et d'accès, les produits et matériels attendus, ainsi que les modalités contractuelles (durée, révision de prix, pénalités). Plus il est précis, plus les devis sont comparables.",
  },
  {
    question: "Comment définir les fréquences de nettoyage ?",
    answer:
      "Les fréquences se définissent local par local, selon l'usage et le flux : sanitaires et zones de restauration au quotidien, bureaux et circulations plusieurs fois par semaine, vitrerie et remise en état de façon périodique. Une fréquence sur-dimensionnée gonfle le coût ; sous-dimensionnée, elle dégrade la propreté perçue. Le bon réglage se fait au croisement de l'usage réel et du budget.",
  },
  {
    question: "Un cahier des charges est-il obligatoire pour un nettoyage ?",
    answer:
      "Il n'est pas légalement obligatoire pour un marché privé, mais il est fortement recommandé : sans lui, les devis ne sont pas comparables et la qualité n'est pas opposable. Dans les marchés publics, un document décrivant le besoin (CCTP ou équivalent) est en revanche indispensable au titre du Code de la commande publique.",
  },
  {
    question: "Comment rendre les devis comparables avec un cahier des charges ?",
    answer:
      "En imposant un cadre de réponse commun : mêmes surfaces de référence, mêmes fréquences, même décomposition de prix (bordereau ou décomposition du forfait). Tous les prestataires chiffrent alors le même périmètre, ce qui neutralise les écarts de présentation et révèle les vraies différences de prix et d'organisation.",
  },
];

const STEPS = [
  { name: "Décrire les sites et le périmètre", text: "Adresses, surfaces, nature et usage des locaux, plans si possible. Un périmètre flou produit des devis incomparables." },
  { name: "Lister les prestations par type de local", text: "Pour chaque zone (bureaux, sanitaires, circulations, restauration), détailler les tâches attendues." },
  { name: "Fixer les fréquences", text: "Associer une fréquence à chaque prestation selon l'usage et le flux, en arbitrant entre qualité perçue et budget." },
  { name: "Définir les niveaux de qualité et le contrôle", text: "Choisir entre obligation de moyens et de résultat, et formaliser une grille de contrôle avec indicateurs." },
  { name: "Préciser les contraintes et moyens", text: "Horaires, accès, sécurité, produits écolabellisés, matériel, gestion des déchets et continuité de service." },
  { name: "Cadrer les modalités contractuelles", text: "Durée, reconduction, clause de révision de prix, pénalités et cadre de réponse imposé aux candidats." },
];

export default function Page() {
  const relatedHrefs = [
    "/developpement/repondre-appel-offres-nettoyage",
    "/developpement/contrat-nettoyage-clause-revision-prix",
    "/tarifs/comment-comparer-devis-nettoyage",
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
          howToSchema({
            name: "Rédiger un cahier des charges de nettoyage",
            description: "Les six étapes pour construire un cahier des charges (CCTP) clair et comparable pour une prestation de nettoyage.",
            steps: STEPS,
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Développement · Achats"
        title="Cahier des charges de nettoyage : méthode et structure (CCTP)"
        intro="Périmètre, prestations, fréquences, niveaux de qualité et contrôle : les rubriques d'un cahier des charges qui rendent les devis comparables et la propreté opposable."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Un <strong>cahier des charges de nettoyage</strong> décrit précisément la prestation
          attendue : <strong>locaux et surfaces</strong>, <strong>prestations et fréquences</strong>,{" "}
          <strong>niveaux de qualité</strong> et <strong>modalités de contrôle</strong>. Sa partie
          technique, dans un marché, s&apos;appelle le <strong>CCTP</strong>. Bien rédigé, il rend les
          devis comparables, rend la qualité opposable et protège les deux parties. Mal rédigé, il
          ouvre la porte aux malentendus et aux surcoûts.
        </AnswerBox>

        <p>
          Que vous soyez donneur d&apos;ordre cherchant à consulter, ou prestataire répondant à une
          consultation, le cahier des charges est la pièce centrale. C&apos;est lui qui définit le
          besoin, fixe les règles du jeu et permet de comparer objectivement les offres. Ce guide en
          détaille les rubriques essentielles et propose une méthode de rédaction.
        </p>

        <h2 id="definition">CDC, CCTP : de quoi parle-t-on ?</h2>
        <DefinitionBox term="Cahier des charges (CDC) et CCTP">
          Le cahier des charges est le document décrivant le besoin et les exigences d&apos;une
          prestation. Dans un marché structuré, il se décompose souvent en un volet technique — le{" "}
          <strong>CCTP</strong> (cahier des clauses techniques particulières) — et un volet
          administratif — le <strong>CCAP</strong> (cahier des clauses administratives particulières)
          qui fixe durée, prix, pénalités et révision.
        </DefinitionBox>
        <p>
          Pour le <strong>donneur d&apos;ordre</strong>, le cahier des charges sécurise l&apos;achat :
          il garantit que tous les candidats chiffrent le même périmètre. Pour le{" "}
          <strong>prestataire</strong>, c&apos;est la base d&apos;un chiffrage juste et d&apos;un{" "}
          <a href="/developpement/repondre-appel-offres-nettoyage">mémoire technique</a> pertinent.
        </p>

        <h2 id="structure">Les rubriques d&apos;un bon cahier des charges</h2>
        <FactTable
          caption="Rubriques attendues dans un cahier des charges de nettoyage"
          headers={["Rubrique", "Ce qu'elle précise"]}
          rows={[
            ["Contexte et sites", "Activité, adresses, surfaces, plans, effectifs présents"],
            ["Périmètre", "Locaux concernés et exclus, zones spécifiques (sanitaires, restauration)"],
            ["Prestations", "Tâches détaillées par type de local"],
            ["Fréquences", "Rythme de chaque prestation (quotidien, hebdomadaire, périodique)"],
            ["Qualité", "Obligation de moyens ou de résultat, indicateurs, grille de contrôle"],
            ["Contraintes", "Horaires, accès, sécurité, continuité de service"],
            ["Moyens", "Produits (écolabel), matériel, gestion des déchets"],
            ["Modalités", "Durée, reconduction, révision de prix, pénalités, cadre de réponse"],
          ]}
        />

        <h2 id="frequences">Prestations et fréquences</h2>
        <p>
          Le cœur opérationnel du cahier des charges est la matrice prestations × fréquences. Elle
          doit coller à l&apos;usage réel : sur-dimensionner gonfle le coût, sous-dimensionner dégrade
          la propreté perçue.
        </p>
        <FactTable
          caption="Exemple indicatif de fréquences par type de local (à adapter)"
          headers={["Local", "Prestation", "Fréquence indicative"]}
          rows={[
            ["Sanitaires", "Désinfection complète", "1×/jour minimum"],
            ["Bureaux", "Vidage corbeilles, dépoussiérage", "3 à 5×/semaine"],
            ["Circulations", "Aspiration / lavage des sols", "2 à 5×/semaine"],
            ["Salle de restauration", "Nettoyage et désinfection", "1×/jour"],
            ["Vitrerie intérieure", "Nettoyage des vitres", "1×/trimestre"],
            ["Sols durs", "Remise en état (décapage)", "1 à 2×/an"],
          ]}
        />
        <InfoCallout title="Conseil de chiffrage">
          Côté prestataire, traduisez chaque fréquence en temps puis en{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût horaire chargé</a>. Côté donneur
          d&apos;ordre, imposez une décomposition de prix commune pour rendre les{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">devis comparables</a>.
        </InfoCallout>

        <h2 id="qualite">Niveaux de qualité et contrôle</h2>
        <p>
          Deux logiques coexistent. L&apos;<strong>obligation de moyens</strong> impose des tâches et
          des fréquences. L&apos;<strong>obligation de résultat</strong> fixe un niveau de propreté
          mesuré par des indicateurs, en laissant le prestataire organiser ses moyens. Cette dernière
          approche, plus moderne, exige une <strong>grille de contrôle qualité</strong> opposable.
        </p>
        <PullQuote cite={`${author.name}, ${author.role}`}>
          Un niveau de qualité qui n&apos;est pas mesurable n&apos;est pas exigible : sans grille de
          contrôle, l&apos;obligation de résultat reste un vœu pieux.
        </PullQuote>
        <KeyTakeaways
          items={[
            "Le cahier des charges rend les devis comparables : même périmètre, mêmes fréquences, même décomposition de prix.",
            "Décrire les prestations local par local, puis y associer des fréquences calées sur l'usage réel.",
            "Privilégier l'obligation de résultat seulement si elle s'accompagne d'une grille de contrôle mesurable.",
            "Préciser horaires, accès et continuité de service : ces contraintes pèsent sur le coût.",
            "Renvoyer les modalités contractuelles (durée, révision de prix, pénalités) au CCAP.",
            "Imposer un cadre de réponse commun pour neutraliser les écarts de présentation entre candidats.",
          ]}
        />

        <h2 id="rediger">Rédiger un cahier des charges en 6 étapes</h2>
        <FactTable
          caption="Méthode de rédaction d'un cahier des charges de nettoyage"
          headers={["Étape", "Contenu"]}
          rows={STEPS.map((s) => [s.name, s.text])}
        />

        <h2 id="erreurs">Erreurs fréquentes</h2>
        <ul>
          <li><strong>Périmètre flou</strong> : surfaces absentes ou approximatives, rendant tout chiffrage hasardeux.</li>
          <li><strong>Fréquences copiées</strong> d&apos;un autre site sans tenir compte de l&apos;usage réel.</li>
          <li><strong>Qualité non mesurable</strong> : exiger un résultat sans grille de contrôle.</li>
          <li><strong>Oubli des contraintes</strong> d&apos;accès et d&apos;horaires, qui font exploser les coûts.</li>
          <li><strong>Absence de cadre de réponse</strong>, qui rend les offres incomparables.</li>
        </ul>

        {/* Sources externes faisant autorité (citabilité GEO + E-E-A-T). */}
        <SourcesBox
          sources={[
            { label: "Code de la commande publique", href: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000037701019", publisher: "Légifrance" },
            { label: "Cahiers des clauses administratives générales (CCAG)", href: "https://www.economie.gouv.fr/daj/cahiers-des-clauses-administratives-generales-en-vigueur", publisher: "Direction des affaires juridiques (Bercy)" },
            { label: "Normalisation des services de propreté", href: "https://www.afnor.org", publisher: "AFNOR" },
          ]}
        />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">Du cahier des charges au contrat</p>
          <p className="mt-1 text-sm text-muted-ink">
            Une fois le besoin défini, sécurisez la relation et votre marge dans la durée.
          </p>
          <div className="mt-4">
            <Button href="/developpement/contrat-nettoyage-clause-revision-prix" variant="primary">
              Contrat &amp; clause de révision de prix
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
