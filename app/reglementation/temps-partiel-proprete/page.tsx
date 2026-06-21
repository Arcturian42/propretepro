import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/temps-partiel-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Temps partiel", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "Le temps partiel dans la propreté" },
  { id: "duree-minimale", label: "Durée minimale" },
  { id: "contrat", label: "Mentions obligatoires du contrat" },
  { id: "complementaires", label: "Heures complémentaires" },
  { id: "avenant", label: "Avenant de complément d'heures" },
  { id: "coupures", label: "Coupures et amplitude" },
  { id: "priorite", label: "Priorité d'accès au temps plein" },
  { id: "application", label: "Comment l'appliquer" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Temps partiel propreté : durée minimale et heures complémentaires",
  description:
    "Temps partiel dans la propreté (IDCC 3043) : durée minimale, mentions du contrat, heures complémentaires (limite 1/10 ou 1/3), avenant de complément d'heures, coupures et priorité d'accès au temps plein.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "temps partiel propreté",
    "durée minimale temps partiel",
    "heures complémentaires propreté",
    "avenant complément d'heures",
    "coupure amplitude propreté",
  ],
});

const FAQ = [
  {
    question: "Quelle est la durée minimale d'un contrat à temps partiel dans la propreté ?",
    answer:
      "La durée minimale légale est de 24 heures par semaine, mais la branche propreté dispose d'un accord permettant de déroger à ce plancher, ce qui explique la fréquence des contrats courts dans le secteur. Des dérogations existent aussi à la demande écrite et motivée du salarié (contraintes personnelles, cumul d'emplois) ou pour les étudiants de moins de 26 ans. La durée exacte applicable doit être vérifiée dans la convention collective IDCC 3043 en vigueur.",
  },
  {
    question: "Quelles mentions doit comporter un contrat à temps partiel ?",
    answer:
      "Le contrat à temps partiel doit obligatoirement être écrit et préciser la qualification, la rémunération, la durée hebdomadaire ou mensuelle de travail, la répartition des heures entre les jours de la semaine (ou les semaines du mois), les modalités de communication des horaires, les conditions de modification de cette répartition et les limites dans lesquelles des heures complémentaires peuvent être effectuées. L'absence de mention de la durée fait présumer un temps plein.",
  },
  {
    question: "Combien d'heures complémentaires un salarié à temps partiel peut-il faire ?",
    answer:
      "Les heures complémentaires sont plafonnées au dixième de la durée contractuelle. Un accord collectif peut porter cette limite jusqu'au tiers de la durée prévue au contrat. Dans tous les cas, les heures complémentaires ne peuvent pas porter la durée de travail au niveau d'un temps plein (35 h par semaine) : atteindre 35 h requalifierait le contrat en temps plein.",
  },
  {
    question: "Comment sont majorées les heures complémentaires ?",
    answer:
      "Les heures complémentaires accomplies dans la limite du dixième de la durée contractuelle sont majorées de 10 %. Celles effectuées au-delà du dixième et jusqu'au tiers (lorsqu'un accord le permet) sont majorées de 25 %. Ces taux sont des minima : un accord d'entreprise ou de branche peut prévoir des majorations plus favorables, à vérifier dans la convention collective applicable.",
  },
  {
    question: "Qu'est-ce qu'un avenant de complément d'heures ?",
    answer:
      "L'avenant de complément d'heures permet d'augmenter temporairement la durée contractuelle d'un salarié à temps partiel, lorsqu'un accord de branche étendu le prévoit. Contrairement aux heures complémentaires, les heures comprises dans l'avenant ne sont pas nécessairement majorées (sauf accord plus favorable), mais le dispositif est strictement encadré : nombre maximal d'avenants par an et par salarié, priorité d'attribution. Il est utile pour couvrir un remplacement ou un surcroît temporaire d'activité.",
  },
  {
    question: "Un salarié à temps partiel est-il prioritaire pour un poste à temps plein ?",
    answer:
      "Oui. Le salarié à temps partiel bénéficie d'une priorité d'accès aux emplois à temps plein (ou à un temps partiel supérieur) ressortissant à sa catégorie professionnelle, ou à un emploi équivalent, qui se libèrent dans l'entreprise. L'employeur doit l'informer des postes disponibles. Dans la propreté, où le multi-sites et le cumul de vacations courtes sont fréquents, c'est un point de vigilance pour limiter le risque de requalification et fidéliser les agents.",
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
        kicker="Réglementation · Contrat de travail"
        title="Temps partiel dans la propreté : règles et compléments d'heures"
        intro="Durée minimale, mentions obligatoires du contrat, heures complémentaires, avenant de complément d'heures et coupures : les règles du temps partiel, omniprésent dans la branche propreté (IDCC 3043)."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Le <strong>temps partiel</strong> est le contrat dominant dans la propreté. Sa durée
          minimale légale est de <strong>24 h/semaine</strong>, mais la branche IDCC 3043 permet
          d&apos;y déroger. Le contrat doit être <strong>écrit</strong> et préciser la répartition des
          horaires. Les <strong>heures complémentaires</strong> sont limitées au{" "}
          <strong>dixième</strong> (voire au <strong>tiers</strong> par accord) et majorées de 10 %
          puis 25 %. Le salarié bénéficie d&apos;une <strong>priorité d&apos;accès au temps plein</strong>.
        </AnswerBox>

        <p>
          Dans la propreté, la majorité des salariés travaillent à temps partiel : interventions tôt
          le matin ou en soirée, vacations courtes réparties sur plusieurs sites, prestations dont le
          volume horaire est calé au plus juste sur le besoin du client. Cette réalité fait du temps
          partiel un sujet central de paie et de sécurité juridique pour les dirigeants du secteur,
          car les contrats courts multi-sites concentrent les risques de requalification.
        </p>

        <InfoCallout title="Avertissement">
          Les durées, limites et majorations citées ici sont des repères fournis à titre informatif.
          Les règles opposables sont celles du Code du travail et du dernier accord étendu de la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective IDCC 3043
          </a>
          , à vérifier dans leur version en vigueur à la date de signature ou de paie.
        </InfoCallout>

        <h2 id="definition">Le temps partiel dans la propreté</h2>
        <p>
          Est à <strong>temps partiel</strong> tout salarié dont la durée de travail est inférieure à
          la durée légale (35 h par semaine) ou à la durée conventionnelle applicable dans
          l&apos;entreprise. Cette définition simple emporte des conséquences importantes : un cadre
          contractuel renforcé, des limites strictes aux dépassements, et des droits spécifiques
          pour le salarié.
        </p>

        <DefinitionBox term="Salarié à temps partiel">
          Salarié dont la durée de travail, hebdomadaire ou mensuelle, est inférieure à la durée légale
          de 35 heures par semaine (ou à la durée conventionnelle de référence). Son contrat doit être
          écrit, mentionner la répartition des horaires et encadrer le recours aux heures
          complémentaires.
        </DefinitionBox>

        <h2 id="duree-minimale">La durée minimale</h2>
        <p>
          La loi fixe une durée minimale de <strong>24 heures par semaine</strong> pour les contrats à
          temps partiel. La branche propreté dispose toutefois d&apos;un accord permettant de déroger à
          ce plancher, ce qui explique la prévalence des contrats de quelques heures par semaine dans le
          secteur. Plusieurs dérogations encadrent ce régime.
        </p>
        <ul>
          <li>
            <strong>Demande du salarié</strong> : une durée inférieure peut être prévue à la demande
            écrite et motivée du salarié, pour faire face à des contraintes personnelles ou cumuler
            plusieurs emplois.
          </li>
          <li>
            <strong>Étudiants de moins de 26 ans</strong> : une durée plus courte, compatible avec les
            études, peut être convenue.
          </li>
          <li>
            <strong>Accord de branche</strong> : la convention propreté peut fixer une durée minimale
            spécifique, assortie de contreparties (regroupement des horaires, garanties de mise en
            œuvre d&apos;horaires réguliers).
          </li>
        </ul>
        <InfoCallout title="Point de vigilance">
          Même lorsqu&apos;une durée inférieure à 24 h est licite, l&apos;employeur doit, en principe,
          regrouper les horaires de travail sur des journées ou demi-journées régulières ou complètes,
          afin de limiter le morcellement de la journée du salarié.
        </InfoCallout>

        <h2 id="contrat">Les mentions obligatoires du contrat</h2>
        <p>
          Le contrat à temps partiel est nécessairement <strong>écrit</strong>. À défaut d&apos;écrit,
          ou en l&apos;absence de mention de la durée du travail, le contrat est présumé à temps plein
          — un risque de requalification majeur et coûteux. Il doit comporter au minimum les éléments
          suivants.
        </p>
        <FactTable
          caption="Mentions obligatoires du contrat à temps partiel"
          headers={["Mention", "Précision attendue"]}
          rows={[
            ["Qualification & rémunération", "Classification, échelon, taux horaire"],
            ["Durée du travail", "Hebdomadaire ou mensuelle"],
            ["Répartition des heures", "Entre jours de la semaine ou semaines du mois"],
            ["Communication des horaires", "Modalités et délai de prévenance"],
            ["Modification de la répartition", "Conditions et délai (en principe 7 jours)"],
            ["Heures complémentaires", "Limites dans lesquelles elles peuvent être faites"],
          ]}
        />
        <p>
          La rémunération doit respecter le minimum conventionnel de l&apos;échelon, proratisé au temps
          de travail. Le bon point de départ reste donc la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire 2026</a> et la{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">
            classification de l&apos;agent
          </a>
          .
        </p>

        <h2 id="complementaires">Les heures complémentaires</h2>
        <p>
          Les <strong>heures complémentaires</strong> sont les heures effectuées par un salarié à temps
          partiel <em>au-delà</em> de la durée prévue à son contrat. Elles sont strictement plafonnées
          et majorées, et ne doivent jamais être confondues avec les{" "}
          <a href="/reglementation/heures-supplementaires-proprete">heures supplémentaires</a>, qui
          concernent les seuls salariés à temps plein.
        </p>
        <FactTable
          caption="Limites et majorations des heures complémentaires"
          headers={["Tranche", "Limite", "Majoration"]}
          rows={[
            ["Jusqu'au 1/10 de la durée contractuelle", "Limite légale de base", "+ 10 %"],
            ["Au-delà du 1/10 et jusqu'au 1/3", "Si un accord collectif le prévoit", "+ 25 %"],
            ["Atteinte de 35 h/semaine", "Interdit (sinon requalification)", "—"],
          ]}
        />
        <p>
          Deux garde-fous sont essentiels. D&apos;une part, les heures complémentaires ne peuvent
          jamais porter la durée de travail au niveau d&apos;un temps plein : franchir 35 h
          requalifierait le contrat. D&apos;autre part, le recours régulier à des heures
          complémentaires peut, au fil du temps, obliger à <strong>réviser la durée contractuelle</strong>{" "}
          si l&apos;horaire réellement accompli dépasse durablement l&apos;horaire prévu de deux heures
          par semaine pendant douze semaines.
        </p>

        <h2 id="avenant">L&apos;avenant de complément d&apos;heures</h2>
        <p>
          Lorsqu&apos;un accord de branche étendu le permet, l&apos;<strong>avenant de complément
          d&apos;heures</strong> autorise à augmenter temporairement la durée contractuelle d&apos;un
          salarié à temps partiel — par exemple pour couvrir le remplacement d&apos;un absent ou un
          surcroît d&apos;activité sur un chantier. Ce mécanisme se distingue nettement des heures
          complémentaires.
        </p>
        <ul>
          <li>
            <strong>Pas de majoration obligatoire</strong> des heures comprises dans l&apos;avenant
            (sauf accord plus favorable), contrairement aux heures complémentaires.
          </li>
          <li>
            <strong>Nombre d&apos;avenants encadré</strong> : l&apos;accord fixe un nombre maximal
            d&apos;avenants par an et par salarié (hors remplacement d&apos;un salarié absent nommément
            désigné).
          </li>
          <li>
            <strong>Priorité d&apos;attribution</strong> : l&apos;accord doit définir les modalités
            selon lesquelles les compléments d&apos;heures sont proposés aux salariés.
          </li>
        </ul>
        <InfoCallout title="Bon à savoir">
          Au-delà de la durée fixée par l&apos;avenant, les heures supplémentaires éventuelles sont,
          elles, majorées au taux applicable. L&apos;avenant ne supprime donc pas tout coût de
          majoration : il faut suivre précisément le compteur d&apos;heures pour le calcul du coût
          chargé.
        </InfoCallout>

        <h2 id="coupures">Coupures et amplitude</h2>
        <p>
          La propreté est marquée par des horaires fractionnés : une vacation tôt le matin, une autre
          en fin de journée. La loi encadre ces <strong>coupures</strong> pour protéger le salarié.
          En principe, la journée de travail d&apos;un salarié à temps partiel ne peut comporter, au
          cours d&apos;une même journée, plus d&apos;une interruption d&apos;activité ou une
          interruption supérieure à deux heures, sauf disposition conventionnelle prévoyant des
          contreparties.
        </p>
        <FactTable
          caption="Coupures et amplitude : repères"
          headers={["Notion", "Principe", "Aménagement par accord"]}
          rows={[
            ["Nombre de coupures par jour", "Une seule en principe", "Possible avec contreparties"],
            ["Durée maximale d'une coupure", "2 heures en principe", "Dépassement possible si contreparties"],
            ["Amplitude de la journée", "À encadrer", "Plafond et contreparties conventionnels"],
          ]}
        />
        <p>
          La branche peut autoriser des coupures plus longues à condition de prévoir des contreparties
          (indemnisation, regroupement des horaires, prise en charge de déplacements). Ces sujétions
          ont un impact direct sur l&apos;organisation et sur le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient de l&apos;agent</a>, qu&apos;il
          convient d&apos;intégrer au chiffrage des prestations multi-sites.
        </p>

        <h2 id="priorite">La priorité d&apos;accès au temps plein</h2>
        <p>
          Le salarié à temps partiel bénéficie d&apos;une <strong>priorité d&apos;accès</strong> aux
          emplois à temps plein — ou à temps partiel d&apos;une durée supérieure — de sa catégorie
          professionnelle, ou aux emplois équivalents, qui se libèrent dans l&apos;entreprise.
          L&apos;employeur est tenu de porter ces postes disponibles à la connaissance des salariés
          concernés.
        </p>
        <p>
          Dans un secteur où le cumul de vacations courtes est la norme, cette priorité est un levier
          de fidélisation autant qu&apos;une obligation. La respecter limite le risque contentieux et
          stabilise les équipes, ce qui réduit mécaniquement la rotation — un facteur de coût souvent
          sous-estimé dans le chiffrage des marchés.
        </p>

        <KeyTakeaways
          items={[
            "Le temps partiel domine la propreté : sa durée minimale légale est de 24 h/semaine, mais la branche IDCC 3043 permet d'y déroger.",
            "Le contrat doit être écrit et mentionner la durée et la répartition des horaires ; à défaut, il est présumé à temps plein.",
            "Les heures complémentaires sont limitées au dixième (au tiers par accord) et majorées de 10 % puis 25 %, sans jamais atteindre 35 h.",
            "L'avenant de complément d'heures augmente temporairement la durée, sans majoration obligatoire, mais reste strictement encadré.",
            "Les coupures (en principe une seule, de 2 h maximum) ne peuvent être étendues que moyennant des contreparties conventionnelles.",
            "Le salarié à temps partiel est prioritaire pour accéder à un temps plein : un point clé pour limiter requalification et turnover.",
          ]}
        />

        <h2 id="application">Comment appliquer correctement le temps partiel</h2>
        <p>
          Pour sécuriser vos contrats à temps partiel, la démarche recommandée est la suivante :
        </p>
        <ul>
          <li>Rédiger systématiquement un contrat écrit mentionnant durée et répartition des horaires.</li>
          <li>Proratiser la rémunération au minimum conventionnel de l&apos;échelon de l&apos;agent.</li>
          <li>Suivre les heures complémentaires (1/10 ou 1/3) et leur majoration, sans franchir 35 h.</li>
          <li>Recourir à l&apos;avenant de complément d&apos;heures pour les besoins temporaires, dans la limite prévue.</li>
          <li>Respecter le régime des coupures et informer les salariés des postes à temps plein disponibles.</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Vos contrats courts pèsent-ils sur votre marge ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Calculez le coût horaire chargé réel d&apos;un agent à temps partiel pour fixer vos prix
            sans rogner votre rentabilité.
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
