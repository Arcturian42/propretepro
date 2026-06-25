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
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/tarifs/prix-nettoyage-cage-escalier";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const related = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage cage d'escalier", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "Cage d'escalier : ce qui est nettoyé" },
  { id: "modeles", label: "Comment se facture la prestation" },
  { id: "prix-etages", label: "Prix selon étages et fréquence" },
  { id: "facteurs", label: "Facteurs qui font le prix" },
  { id: "poubelles", label: "La gestion des poubelles" },
  { id: "exemples", label: "Exemples de budget syndic" },
  { id: "challenger-devis", label: "Décomposer un devis" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage de cage d'escalier en copropriété (2026)",
  description:
    "Prix du nettoyage de cage d'escalier en copropriété en 2026 : 40 à 120 € par passage selon le nombre d'étages, ou 80 à 400 €/mois. Tableaux par étages et fréquence, et repères pour un syndic.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix nettoyage cage escalier",
    "tarif nettoyage cage escalier copropriété",
    "prix entretien escalier immeuble",
    "coût nettoyage parties communes escalier",
    "tarif nettoyage escalier par étage",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage d'une cage d'escalier en 2026 ?",
    answer:
      "Le nettoyage d'une cage d'escalier se situe généralement entre 40 et 120 € par passage (HT) selon le nombre d'étages, ou entre 80 et 400 € par mois selon la fréquence. Un petit immeuble de 2-3 étages nettoyé une fois par semaine se chiffre autour de 90 à 180 €/mois ; un immeuble de 6 étages ou plus, nettoyé deux à trois fois par semaine, dépasse facilement 300 €/mois. Un forfait minimum d'intervention s'applique aux très petites copropriétés.",
  },
  {
    question: "Comment se facture le nettoyage d'une cage d'escalier ?",
    answer:
      "Trois logiques coexistent. Le plus courant en copropriété est le forfait mensuel : un prix fixe par mois pour une fréquence convenue, intégré aux charges. On trouve aussi la facturation par passage (utile pour des fréquences irrégulières) et, plus rarement, par étage ou par volée. Le prestataire calcule en réalité un temps de présence à partir du nombre d'étages et applique son tarif horaire, puis l'exprime au format demandé par le syndic.",
  },
  {
    question: "Le nombre d'étages change-t-il beaucoup le prix ?",
    answer:
      "Oui, c'est le facteur le plus structurant. Chaque étage ajoute une volée de marches, un palier et des surfaces de contact (rampes, interrupteurs) à traiter, donc du temps. À fréquence égale, le prix au passage augmente quasi proportionnellement au nombre d'étages. La présence d'un ascenseur réduit la pénibilité mais ajoute la cabine et les portes palières à nettoyer, ce qui compense en partie l'économie de temps de déplacement.",
  },
  {
    question: "La sortie des poubelles est-elle incluse dans le prix ?",
    answer:
      "Pas systématiquement. La sortie et la rentrée des conteneurs, ainsi que le nettoyage du local poubelles, sont des prestations distinctes du nettoyage de la cage. Elles sont souvent facturées en supplément, au forfait mensuel, car elles imposent des passages calés sur le calendrier de collecte. Un syndic doit vérifier si ces tâches sont incluses dans le devis ou refacturées à part, sous peine d'avenant.",
  },
  {
    question: "À quelle fréquence faut-il nettoyer une cage d'escalier ?",
    answer:
      "La fréquence dépend du nombre de lots, du passage et du standing souhaité. Un petit immeuble peu fréquenté peut se contenter d'un passage hebdomadaire ; une copropriété dense ou de standing justifie deux à trois passages par semaine. Plus la fréquence est élevée, plus le coût mensuel monte, mais le prix unitaire par passage baisse grâce à l'optimisation des déplacements. C'est au syndic d'arbitrer entre budget de charges et niveau de propreté attendu.",
  },
  {
    question: "La TVA s'applique-t-elle au nettoyage des parties communes ?",
    answer:
      "Oui, au taux normal de 20 %. Les prix des prestataires sont presque toujours exprimés hors taxes (HT) : le syndic doit ajouter la TVA pour obtenir le coût réellement répercuté sur les charges de copropriété. Aucun taux réduit ne s'applique au nettoyage courant des parties communes d'un immeuble.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema({
            headline: metadata.title as string,
            description: article.excerpt,
            path: PATH,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
          datasetSchema({
            name: "Prix du nettoyage de cage d'escalier en copropriété (2026, France)",
            description:
              "Fourchettes indicatives HT du nettoyage de cage d'escalier en copropriété en 2026, par nombre d'étages et par fréquence, pour le marché français.",
            path: PATH,
            dateModified: article.dateModified,
            temporalCoverage: "2026",
            keywords: [
              "prix nettoyage cage escalier",
              "tarif nettoyage cage escalier copropriété",
              "tarif nettoyage escalier par étage",
            ],
            variables: ["Nombre d'étages", "Prix / passage", "Temps repère"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Copropriété"
        title="Prix du nettoyage de cage d'escalier en copropriété"
        intro="Combien coûte l'entretien d'une cage d'escalier en immeuble ? Tarifs par étage, par passage et par mois, facteurs de prix et repères concrets pour un syndic qui veut comparer des devis sans se tromper."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage d&apos;une cage d&apos;escalier coûte généralement{" "}
          <strong>40 à 120 € par passage (HT)</strong> selon le nombre d&apos;étages, soit{" "}
          <strong>80 à 400 € par mois</strong> selon la fréquence. Le{" "}
          <strong>nombre d&apos;étages et la fréquence</strong> sont les deux variables
          structurantes ; la sortie des poubelles et le nettoyage du local conteneurs sont souvent
          facturés en plus. La TVA à 20 % s&apos;ajoute aux prix hors taxes.
        </AnswerBox>

        <p>
          L&apos;entretien des parties communes est le poste de propreté le plus visible d&apos;une
          copropriété, et l&apos;un des plus discutés en assemblée générale. Pourtant, peu de
          syndics savent ce qu&apos;est un prix « normal » pour une cage d&apos;escalier, car les
          devis arrivent souvent sous forme de forfait mensuel global, sans détail. Cette page donne
          des repères chiffrés par étage et par fréquence, et explique comment décomposer un prix
          pour le défendre devant les copropriétaires.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. Ils servent à cadrer un budget de charges et à challenger un devis, pas à
          remplacer un chiffrage ferme établi après visite de l&apos;immeuble.
        </InfoCallout>

        <h2 id="definition">Cage d&apos;escalier : ce qui est nettoyé</h2>
        <DefinitionBox term="Nettoyage de cage d'escalier">
          Entretien régulier des circulations verticales d&apos;un immeuble : balayage et lavage des
          marches et paliers, dépoussiérage des rampes et mains courantes, nettoyage des surfaces de
          contact (interrupteurs, boîtes aux lettres, portes palières), entretien du hall
          d&apos;entrée et, selon le contrat, de la cabine d&apos;ascenseur. La prestation
          s&apos;exprime au passage, au mois ou, plus rarement, par étage.
        </DefinitionBox>

        <p>
          Le périmètre exact varie d&apos;un contrat à l&apos;autre. Le socle comprend toujours les
          marches, paliers et rampes. S&apos;y ajoutent fréquemment le hall, les vitres de la porte
          d&apos;entrée, l&apos;ascenseur, les boîtes aux lettres et, en option, le local poubelles
          et la sortie des conteneurs. Préciser ce périmètre est la première condition d&apos;un
          devis comparable.
        </p>

        <h2 id="modeles">Comment se facture la prestation</h2>
        <p>
          Trois logiques de facturation coexistent. Toutes reposent en réalité sur le même calcul de
          fond : un <strong>temps de présence</strong> déduit du nombre d&apos;étages, multiplié par
          un <strong>tarif horaire facturé</strong>.
        </p>
        <ul>
          <li>
            <strong>Le forfait mensuel</strong> : le plus courant en copropriété. Un prix fixe par
            mois pour une fréquence convenue, simple à intégrer aux charges et à voter en assemblée.
          </li>
          <li>
            <strong>La facturation par passage</strong> : utile pour des fréquences irrégulières ou
            des prestations ponctuelles (grand nettoyage, remise en état après travaux).
          </li>
          <li>
            <strong>La facturation par étage ou par volée</strong> : plus rare, elle sert surtout de
            base de calcul interne au prestataire et de repère pour comparer deux immeubles de
            tailles différentes.
          </li>
        </ul>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Quel que soit le format affiché — au mois, au passage ou par étage — un devis de cage
          d&apos;escalier se ramène toujours à un temps de présence multiplié par un taux horaire.
          C&apos;est cette grandeur qu&apos;un syndic doit savoir reconstituer.
        </PullQuote>

        <h2 id="prix-etages">Prix selon le nombre d&apos;étages et la fréquence</h2>
        <p>
          Les deux variables les plus structurantes sont le <strong>nombre d&apos;étages</strong>{" "}
          (qui détermine le temps par passage) et la <strong>fréquence</strong> (qui multiplie ce
          temps sur le mois). Plus la fréquence est élevée, plus le coût mensuel monte, mais plus le
          prix unitaire par passage baisse grâce à l&apos;optimisation des déplacements.
        </p>

        <FactTable
          caption="Prix indicatif par passage selon le nombre d'étages (HT) — 2026"
          headers={["Nombre d'étages", "Prix / passage", "Temps repère"]}
          rows={[
            ["2 à 3 étages", "40 – 60 €", "45 min – 1 h"],
            ["4 à 5 étages", "55 – 85 €", "1 h – 1 h 30"],
            ["6 à 8 étages", "80 – 120 €", "1 h 30 – 2 h 15"],
            ["Plus de 8 étages", "110 – 160 €", "2 h – 3 h"],
          ]}
        />

        <FactTable
          caption="Budget mensuel indicatif pour un immeuble de 4-5 étages (HT) — 2026"
          headers={["Fréquence", "Passages / mois ≈", "Budget mensuel estimé"]}
          rows={[
            ["1x / semaine", "4,3", "240 – 360 €"],
            ["2x / semaine", "8,7", "420 – 650 €"],
            ["3x / semaine", "13", "600 – 950 €"],
            ["Tous les 15 jours", "2,2", "120 – 190 €"],
          ]}
        />
        <p>
          Pour une copropriété de petite taille (2-3 étages, un passage hebdomadaire), le budget
          mensuel tourne plutôt autour de <strong>90 à 180 € (HT)</strong>. En dessous d&apos;un
          certain seuil de surface, un <strong>forfait minimum</strong> d&apos;intervention
          s&apos;applique, car le temps incompressible de déplacement pèse lourd sur une petite
          cage.
        </p>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <p>
          À nombre d&apos;étages et fréquence égaux, deux devis peuvent diverger. Les principaux
          leviers de prix sont :
        </p>
        <ul>
          <li>
            <strong>Le nombre d&apos;étages</strong> : facteur dominant, il fixe le temps de présence
            par passage.
          </li>
          <li>
            <strong>La présence d&apos;un ascenseur</strong> : il réduit la pénibilité mais ajoute la
            cabine et les portes palières à nettoyer ; l&apos;effet sur le prix est globalement
            neutre à légèrement haussier.
          </li>
          <li>
            <strong>La fréquence</strong> : elle multiplie le coût mensuel mais fait baisser le prix
            unitaire par passage.
          </li>
          <li>
            <strong>La sortie des poubelles</strong> : prestation distincte, souvent facturée en
            supplément (voir plus bas).
          </li>
          <li>
            <strong>Le type de revêtement</strong> : carrelage, pierre, béton, moquette de palier ou
            sol PVC n&apos;appellent pas le même temps ni le même entretien périodique.
          </li>
          <li>
            <strong>La zone géographique</strong> : l&apos;Île-de-France et les grandes métropoles
            sont structurellement plus chères que les zones rurales.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 40 à 120 € par passage (HT) selon le nombre d'étages, soit 80 à 400 €/mois selon la fréquence.",
            "Le nombre d'étages est le facteur dominant : il fixe le temps de présence par passage.",
            "Plus la fréquence est élevée, plus le coût mensuel monte mais plus le prix par passage baisse.",
            "La sortie des poubelles et le nettoyage du local conteneurs sont souvent facturés en plus.",
            "Un forfait minimum s'applique aux très petites copropriétés.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA pour le coût réel sur les charges.",
          ]}
        />

        <h2 id="poubelles">La gestion des poubelles : un poste à part</h2>
        <p>
          La sortie et la rentrée des conteneurs, ainsi que le nettoyage du local poubelles, sont
          des prestations distinctes du nettoyage de la cage. Elles imposent des passages calés sur
          le calendrier de collecte, parfois différents des jours de nettoyage, ce qui complique
          l&apos;organisation et justifie une ligne séparée au devis.
        </p>
        <FactTable
          caption="Prestation poubelles : repères indicatifs (HT) — 2026"
          headers={["Prestation", "Mode", "Budget mensuel estimé"]}
          rows={[
            ["Sortie / rentrée conteneurs", "Forfait mensuel", "30 – 90 €"],
            ["Nettoyage du local poubelles", "Forfait mensuel", "25 – 70 €"],
            ["Lavage des conteneurs", "Périodique", "Sur devis"],
          ]}
        />
        <InfoCallout title="Point de vigilance pour le syndic">
          Vérifiez systématiquement si la sortie des poubelles est incluse dans le forfait de
          nettoyage de la cage ou facturée à part. Une prestation supposée incluse mais non listée
          réapparaît en avenant, et alimente les litiges en assemblée générale.
        </InfoCallout>

        <h2 id="exemples">Exemples de budget pour un syndic</h2>
        <p>
          Pour situer un devis dans une fourchette crédible, reconstituez le budget mensuel à partir
          du nombre d&apos;étages, du prix par passage et de la fréquence.
        </p>

        <FactTable
          caption="Exemples de budget mensuel reconstitué (HT) — 2026"
          headers={["Immeuble", "Fréquence", "€/passage", "Budget mensuel ≈"]}
          rows={[
            ["3 étages, 8 lots", "1x / sem", "50 €", "215 €"],
            ["5 étages, 16 lots", "2x / sem", "70 €", "610 €"],
            ["8 étages, 30 lots", "3x / sem", "105 €", "1 365 €"],
          ]}
        />
        <p>
          Le calcul repose sur environ 4,33 passages par semaine et par mois (52 semaines ÷ 12). Ces
          montants restent des ordres de grandeur : ils excluent la sortie des poubelles, les
          prestations périodiques (vitrerie, remise en état) et les majorations éventuelles. Pour
          une vue d&apos;ensemble des charges de propreté d&apos;un immeuble, voir le{" "}
          <a href="/tarifs/prix-nettoyage-copropriete">prix du nettoyage de copropriété et parties
          communes</a>.
        </p>

        <h2 id="challenger-devis">Décomposer et challenger un devis</h2>
        <p>
          Un devis de cage d&apos;escalier se vérifie en remontant la chaîne de calcul du
          prestataire. Trois grandeurs suffisent : le <strong>temps de présence</strong> par
          passage, le <strong>taux horaire facturé</strong> et le périmètre exact des tâches.
        </p>
        <ul>
          <li>
            <strong>Reconstituez le temps de présence</strong> : un immeuble de 5 étages demande
            généralement 1 h à 1 h 30 par passage. Si le devis suppose un temps nettement inférieur,
            soit des zones ne sont pas traitées, soit la cadence retenue est irréaliste.
          </li>
          <li>
            <strong>Recoupez avec le taux horaire</strong> : temps × taux horaire = coût
            main-d&apos;œuvre du passage. Un taux inférieur à 18 €/h HT est difficilement compatible
            avec un salaire conventionnel chargé et un minimum de marge.
          </li>
          <li>
            <strong>Vérifiez le périmètre</strong> : ascenseur, hall, vitres, local poubelles,
            sortie des conteneurs inclus ou non. C&apos;est là que se cachent les écarts entre
            offres.
          </li>
        </ul>
        <p>
          Pour appliquer cette grille à plusieurs offres sur une base identique, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
          Pour situer le plancher de coût qui borde ces prix, voir le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de
          propreté</a> et la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          La meilleure façon d&apos;obtenir un prix juste est de fournir à chaque prestataire le même
          cadre : nombre d&apos;étages, présence d&apos;un ascenseur, fréquence souhaitée, périmètre
          exact (hall, vitres, local poubelles, sortie des conteneurs) et type de revêtement. Vous
          comparez alors des offres réellement comparables, défendables devant les copropriétaires.
          Pour le tarif horaire qui sous-tend ces forfaits, voir le{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a>.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Passez de l&apos;estimation au devis
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Cadrez le besoin de votre copropriété, puis demandez des devis comparables sur une base
            identique.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="primary">
              Comment comparer des devis
            </Button>
            <Button href="/tarifs/prix-nettoyage-copropriete" variant="secondary">
              Prix du nettoyage de copropriété
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
