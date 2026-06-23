import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { SOURCES } from "@/lib/sources";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/heures-supplementaires-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Heures supplémentaires", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "Qu'est-ce qu'une heure supplémentaire ?" },
  { id: "taux", label: "Taux de majoration (25 % et 50 %)" },
  { id: "complementaires", label: "Heures supplémentaires vs complémentaires" },
  { id: "contingent", label: "Contingent annuel" },
  { id: "repos", label: "Repos compensateur de remplacement" },
  { id: "exemple", label: "Exemple chiffré pour un AS2" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "application", label: "Comment l'appliquer" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Heures supplémentaires propreté : calcul, taux 25 % et 50 %",
  description:
    "Heures supplémentaires dans la propreté (IDCC 3043) : seuil de 35 h, majorations de 25 % et 50 %, contingent annuel, repos compensateur et exemple chiffré pour un agent AS2.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "heures supplémentaires propreté",
    "majoration heures supplémentaires 25 %",
    "majoration 50 %",
    "contingent annuel heures supplémentaires",
    "repos compensateur propreté",
  ],
});

const FAQ = [
  {
    question: "À partir de combien d'heures compte-t-on les heures supplémentaires dans la propreté ?",
    answer:
      "Pour un salarié à temps plein, les heures supplémentaires se décomptent au-delà de la durée légale de 35 heures par semaine (semaine civile, du lundi 0 h au dimanche 24 h). Toute heure de travail effectif accomplie au-delà de ce seuil, à la demande ou avec l'accord de l'employeur, constitue une heure supplémentaire ouvrant droit à majoration.",
  },
  {
    question: "Quel est le taux de majoration des heures supplémentaires ?",
    answer:
      "Le taux de droit commun est de 25 % pour les 8 premières heures supplémentaires de la semaine (de la 36e à la 43e heure), puis de 50 % au-delà (à partir de la 44e heure). Un accord de branche ou d'entreprise peut prévoir un taux différent, sans pouvoir descendre en dessous de 10 %. En l'absence d'accord plus favorable, c'est le barème 25 % / 50 % qui s'applique.",
  },
  {
    question: "Quelle est la différence entre heures supplémentaires et heures complémentaires ?",
    answer:
      "Les heures supplémentaires concernent les salariés à temps plein et se décomptent au-delà de 35 h par semaine, avec une majoration de 25 % puis 50 %. Les heures complémentaires concernent les salariés à temps partiel : ce sont les heures effectuées au-delà de la durée prévue au contrat, dans la limite du dixième ou du tiers, avec des majorations spécifiques. Un temps partiel ne fait jamais d'heures supplémentaires au sens strict.",
  },
  {
    question: "Qu'est-ce que le contingent annuel d'heures supplémentaires ?",
    answer:
      "Le contingent annuel est le volume maximal d'heures supplémentaires qu'un salarié peut accomplir dans l'année sans contrepartie obligatoire en repos. Le contingent légal supplétif est de 220 heures par an et par salarié, mais un accord de branche ou d'entreprise peut le modifier. Au-delà du contingent, chaque heure supplémentaire ouvre droit à une contrepartie obligatoire en repos, en plus de la majoration.",
  },
  {
    question: "Peut-on remplacer le paiement des heures supplémentaires par du repos ?",
    answer:
      "Oui, via le repos compensateur de remplacement (RCR). Un accord collectif, ou à défaut l'employeur dans certaines conditions, peut prévoir que tout ou partie des heures supplémentaires et de leur majoration soit remplacé par un repos équivalent. Une heure majorée à 25 % donne alors 1 h 15 de repos, une heure à 50 % donne 1 h 30. Les heures supplémentaires intégralement compensées en repos ne s'imputent pas sur le contingent annuel.",
  },
  {
    question: "Les heures supplémentaires sont-elles exonérées de cotisations et d'impôt ?",
    answer:
      "Les heures supplémentaires bénéficient d'une réduction de cotisations salariales et d'une exonération d'impôt sur le revenu, dans la limite d'un plafond annuel fixé par la loi. La majoration entre dans l'assiette exonérée. Ce dispositif évolue régulièrement : il faut vérifier le plafond et le taux de la réduction salariale en vigueur à la date de paie, notamment pour le calcul du coût chargé réel.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.silo === "reglementation" && a.href !== PATH,
  );

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
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Réglementation · Temps de travail"
        title="Heures supplémentaires dans la propreté : calcul et majorations"
        intro="Seuil de déclenchement, taux de 25 % et 50 %, contingent annuel et repos compensateur : le mode d'emploi des heures supplémentaires pour un agent de propreté relevant de l'IDCC 3043."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Dans la propreté, une <strong>heure supplémentaire</strong> est une heure de travail effectif
          accomplie <strong>au-delà de 35 h par semaine</strong> pour un salarié à temps plein. Les
          8 premières sont majorées de <strong>25 %</strong> (36e à 43e heure), les suivantes de{" "}
          <strong>50 %</strong> (à partir de la 44e). Au-delà du <strong>contingent annuel</strong>{" "}
          (220 h en l&apos;absence d&apos;accord), s&apos;ajoute une contrepartie obligatoire en repos.
          Le paiement peut être remplacé par un <strong>repos compensateur</strong>.
        </AnswerBox>

        <p>
          La propreté est un secteur où les pics d&apos;activité, les remplacements et les chantiers
          exceptionnels (remises en état, vitreries, fins de chantier) génèrent régulièrement des
          dépassements de la durée du travail. Pour un dirigeant, maîtriser le décompte et la
          majoration des heures supplémentaires est doublement stratégique : c&apos;est une obligation
          de paie, mais aussi un poste de coût qui pèse directement sur la marge des prestations.
        </p>

        <InfoCallout title="Avertissement">
          Les montants et seuils cités ici sont des ordres de grandeur fournis à titre informatif. Les
          taux opposables sont ceux du Code du travail et du dernier avenant de la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective IDCC 3043
          </a>{" "}
          en vigueur. Vérifiez la version étendue applicable à la date de paie.
        </InfoCallout>

        <h2 id="definition">Qu&apos;est-ce qu&apos;une heure supplémentaire ?</h2>
        <p>
          Une heure supplémentaire est une heure de <strong>travail effectif</strong> accomplie au-delà
          de la durée légale du travail, fixée à <strong>35 heures par semaine</strong>. Le décompte
          s&apos;apprécie en principe à la semaine civile, du lundi 0 h au dimanche 24 h, sauf
          aménagement du temps de travail sur une période supérieure (cycle, annualisation) prévu par
          accord. Trois conditions caractérisent une heure supplémentaire.
        </p>
        <ul>
          <li>
            <strong>Du temps de travail effectif</strong> : le salarié est à la disposition de
            l&apos;employeur et se conforme à ses directives. Les temps de trajet entre deux chantiers
            au cours d&apos;une même vacation peuvent, selon les cas, être assimilés à du travail
            effectif.
          </li>
          <li>
            <strong>Au-delà de 35 h hebdomadaires</strong> : seules les heures dépassant le seuil légal
            sont des heures supplémentaires, et non chaque heure au-delà de l&apos;horaire contractuel.
          </li>
          <li>
            <strong>À la demande ou avec l&apos;accord de l&apos;employeur</strong> : une heure
            effectuée de la seule initiative du salarié, sans accord, n&apos;ouvre pas
            automatiquement droit à majoration. En pratique, une tolérance ou une demande implicite
            suffit souvent à caractériser l&apos;accord.
          </li>
        </ul>

        <DefinitionBox term="Heure supplémentaire">
          Heure de travail effectif accomplie par un salarié à temps plein au-delà de la durée légale
          de 35 heures par semaine, à la demande ou avec l&apos;accord de l&apos;employeur. Elle ouvre
          droit à une majoration de salaire et, au-delà du contingent annuel, à une contrepartie
          obligatoire en repos.
        </DefinitionBox>

        <h2 id="taux">Taux de majoration : 25 % puis 50 %</h2>
        <p>
          Le taux de majoration de droit commun s&apos;applique par paliers à l&apos;intérieur de la
          semaine. Un accord de branche ou d&apos;entreprise peut fixer un taux différent, sans
          pouvoir descendre sous le plancher légal de 10 %. À défaut d&apos;accord plus favorable,
          c&apos;est le barème suivant qui s&apos;impose.
        </p>
        <FactTable
          caption="Taux de majoration des heures supplémentaires (régime de droit commun)"
          headers={["Tranche hebdomadaire", "Heures concernées", "Taux de majoration"]}
          rows={[
            ["De la 36e à la 43e heure", "8 premières heures sup.", "+ 25 %"],
            ["À partir de la 44e heure", "Au-delà des 8 premières", "+ 50 %"],
          ]}
        />
        <p>
          La majoration se calcule sur le <strong>taux horaire de base</strong> du salarié, qui ne peut
          être inférieur au minimum conventionnel de son échelon. Pour un agent dont le coefficient est
          mal positionné, l&apos;erreur de classement se répercute donc aussi sur le coût des heures
          supplémentaires. Le bon réflexe consiste à vérifier la{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">
            classification et l&apos;échelon
          </a>{" "}
          avant tout calcul.
        </p>

        <h2 id="complementaires">Heures supplémentaires ou heures complémentaires ?</h2>
        <p>
          La confusion entre les deux notions est l&apos;une des sources d&apos;erreur les plus
          fréquentes dans la propreté, secteur où les contrats à temps partiel sont majoritaires. La
          distinction est pourtant nette : elle dépend du statut du salarié, pas du nombre d&apos;heures.
        </p>
        <FactTable
          caption="Heures supplémentaires vs heures complémentaires"
          headers={["Critère", "Heures supplémentaires", "Heures complémentaires"]}
          rows={[
            ["Salarié concerné", "Temps plein", "Temps partiel"],
            ["Seuil de déclenchement", "Au-delà de 35 h/sem.", "Au-delà de la durée contractuelle"],
            ["Plafond", "Contingent annuel (≈ 220 h)", "1/10 ou 1/3 de la durée contractuelle"],
            ["Majoration", "+ 25 % puis + 50 %", "+ 10 % puis + 25 % (selon la tranche)"],
          ]}
        />
        <p>
          Un salarié à temps partiel ne fait jamais d&apos;heures supplémentaires au sens strict : ses
          dépassements sont des heures complémentaires, soumises à un régime spécifique détaillé dans
          notre guide sur le{" "}
          <a href="/reglementation/temps-partiel-proprete">temps partiel dans la propreté</a>.
        </p>

        <h2 id="contingent">Le contingent annuel</h2>
        <p>
          Le <strong>contingent annuel</strong> est le volume d&apos;heures supplémentaires qu&apos;un
          salarié peut accomplir sur l&apos;année <em>sans</em> déclencher la contrepartie obligatoire
          en repos. À défaut d&apos;accord collectif fixant un autre volume, le contingent légal
          supplétif est de <strong>220 heures par an et par salarié</strong>.
        </p>
        <ul>
          <li>
            <strong>En deçà du contingent</strong> : les heures supplémentaires sont payées (ou
            remplacées par du repos) et majorées, sans contrepartie supplémentaire.
          </li>
          <li>
            <strong>Au-delà du contingent</strong> : chaque heure ouvre droit, en plus de la
            majoration, à une <strong>contrepartie obligatoire en repos</strong> (50 % des heures
            accomplies hors contingent dans les entreprises jusqu&apos;à 20 salariés, 100 % au-delà).
          </li>
        </ul>
        <InfoCallout title="Bon à savoir">
          Les heures supplémentaires intégralement compensées par un repos compensateur de remplacement
          ne s&apos;imputent pas sur le contingent annuel. C&apos;est un levier utile pour absorber des
          pics d&apos;activité sans saturer le contingent ni alourdir la masse salariale.
        </InfoCallout>

        <h2 id="repos">Le repos compensateur de remplacement</h2>
        <p>
          Le <strong>repos compensateur de remplacement (RCR)</strong> permet de remplacer le paiement
          de tout ou partie des heures supplémentaires — et de leur majoration — par un temps de repos
          équivalent. Il est mis en place par accord collectif, ou à défaut par décision de
          l&apos;employeur lorsque la branche le permet et en l&apos;absence d&apos;opposition des
          représentants du personnel.
        </p>
        <FactTable
          caption="Conversion des heures supplémentaires en repos (RCR)"
          headers={["Heure supplémentaire", "Majoration", "Repos équivalent"]}
          rows={[
            ["1 heure majorée à 25 %", "+ 25 %", "1 h 15 de repos"],
            ["1 heure majorée à 50 %", "+ 50 %", "1 h 30 de repos"],
          ]}
        />
        <p>
          Pour un dirigeant, le RCR est un outil de pilotage : il lisse la trésorerie en période de
          forte activité et n&apos;impute pas les heures concernées sur le contingent. En contrepartie,
          il faut suivre rigoureusement les compteurs de repos acquis et veiller à ce qu&apos;ils
          soient effectivement pris dans les délais prévus par l&apos;accord.
        </p>

        <h2 id="exemple">Exemple chiffré pour un agent AS2</h2>
        <p>
          Prenons un agent <strong>AS2 (coefficient 120)</strong> dont le taux horaire de base est de{" "}
          <strong>12,46 €</strong> (ordre de grandeur 2026, à vérifier sur le dernier avenant). Une
          semaine particulièrement chargée, il travaille <strong>45 heures</strong>, soit 10 heures
          au-delà des 35 heures légales : 8 heures majorées à 25 % et 2 heures majorées à 50 %.
        </p>
        <FactTable
          caption="Calcul des heures supplémentaires d'un AS2 sur une semaine à 45 h (exemple indicatif)"
          headers={["Élément", "Base de calcul", "Montant brut"]}
          rows={[
            ["Heures normales (35 h)", "35 h × 12,46 €", "436,10 €"],
            ["Heures sup. à 25 % (8 h)", "8 h × 12,46 € × 1,25", "124,60 €"],
            ["Heures sup. à 50 % (2 h)", "2 h × 12,46 € × 1,50", "37,38 €"],
            ["Total brut de la semaine", "—", "≈ 598,08 €"],
          ]}
        />
        <p>
          Le surcoût des heures supplémentaires par rapport à un paiement au taux normal s&apos;élève
          ici à environ <strong>31 € brut</strong> sur la semaine (la part de majoration). Reporté sur
          plusieurs agents et plusieurs semaines, c&apos;est un poste de coût qui doit impérativement
          être intégré au <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent</a>{" "}
          et au tarif facturé, sous peine d&apos;éroder la marge.
        </p>

        <KeyTakeaways
          items={[
            "Une heure supplémentaire se décompte au-delà de 35 h par semaine pour un salarié à temps plein, sur la base du travail effectif.",
            "Les 8 premières heures de la semaine sont majorées de 25 %, les suivantes de 50 %, sauf accord plus favorable (plancher légal de 10 %).",
            "Heures supplémentaires (temps plein) et heures complémentaires (temps partiel) obéissent à deux régimes distincts : ne pas les confondre.",
            "Le contingent annuel (220 h à défaut d'accord) délimite le seuil au-delà duquel une contrepartie obligatoire en repos s'ajoute à la majoration.",
            "Le repos compensateur de remplacement convertit les heures en repos (1 h 15 pour une heure à 25 %, 1 h 30 pour une heure à 50 %) et n'impute pas le contingent.",
            "La majoration se calcule sur le taux de base : un sous-classement de l'agent renchérit aussi le coût des heures supplémentaires.",
          ]}
        />

        <h2 id="erreurs">Erreurs fréquentes dans la propreté</h2>
        <ul>
          <li>
            <strong>Confondre heures supplémentaires et complémentaires.</strong> Appliquer le régime
            du temps plein à un salarié à temps partiel (ou l&apos;inverse) fausse à la fois le décompte
            et la majoration.
          </li>
          <li>
            <strong>Décompter au mois plutôt qu&apos;à la semaine.</strong> Sauf aménagement formalisé
            du temps de travail, le seuil de déclenchement s&apos;apprécie à la semaine civile, pas sur
            le mois.
          </li>
          <li>
            <strong>Oublier la majoration de 50 % au-delà de 43 h.</strong> Payer toutes les heures
            supplémentaires à 25 % sous-rémunère le salarié dès la 44e heure.
          </li>
          <li>
            <strong>Calculer la majoration sur un taux inférieur au minimum conventionnel.</strong>{" "}
            L&apos;assiette doit au moins être le minimum de l&apos;échelon issu de la{" "}
            <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire 2026</a>.
          </li>
          <li>
            <strong>Ignorer le contingent et la contrepartie en repos.</strong> Au-delà de 220 h
            annuelles (à défaut d&apos;accord), la contrepartie obligatoire en repos est due en sus.
          </li>
        </ul>

        <h2 id="application">Comment appliquer correctement les heures supplémentaires</h2>
        <p>
          Pour sécuriser ce poste sensible, la démarche est la suivante :
        </p>
        <ul>
          <li>Distinguer en amont les salariés à temps plein (heures sup.) des temps partiels (heures complémentaires).</li>
          <li>Décompter les heures à la semaine civile et identifier les tranches 36e–43e puis 44e et au-delà.</li>
          <li>Appliquer 25 % puis 50 % sur le taux de base, au moins égal au minimum conventionnel.</li>
          <li>Suivre le contingent annuel et déclencher la contrepartie en repos lorsqu&apos;il est dépassé.</li>
          <li>Intégrer le surcoût des majorations au calcul du coût chargé et du tarif facturé.</li>
        </ul>

        <SourcesBox sources={SOURCES.tempsTravail} />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Besoin de chiffrer l&apos;impact réel sur vos coûts ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Calculez le coût horaire chargé d&apos;un agent, majorations comprises, pour fixer vos prix
            avec marge.
          </p>
          <div className="mt-4">
            <Button href="/tarifs/cout-revient-agent-proprete" variant="primary">
              Voir le coût de revient d&apos;un agent
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
