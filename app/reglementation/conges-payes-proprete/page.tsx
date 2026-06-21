import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout, PullQuote } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/conges-payes-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Congés payés propreté", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "acquisition", label: "Acquisition des congés" },
  { id: "periode", label: "Période de référence" },
  { id: "indemnite", label: "Calcul de l'indemnité" },
  { id: "exemple", label: "Exemple chiffré" },
  { id: "supplementaires", label: "Congés supplémentaires" },
  { id: "report-cet", label: "Report et CET" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Congés payés dans la propreté (IDCC 3043) : acquisition, calcul et indemnité",
  description:
    "Congés payés dans la propreté : acquisition de 2,5 jours ouvrables par mois, période de référence juin-mai, calcul de l'indemnité (règle du 1/10e vs maintien de salaire), report et CET, avec exemple chiffré.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "congés payés propreté",
    "indemnité congés payés propreté",
    "règle du 1/10e congés payés",
    "IDCC 3043",
    "acquisition congés payés nettoyage",
  ],
});

const FAQ = [
  {
    question: "Combien de jours de congés payés acquiert un agent de propreté par mois ?",
    answer:
      "Un salarié de la branche propreté acquiert 2,5 jours ouvrables de congés payés par mois de travail effectif, soit 30 jours ouvrables (5 semaines) pour une année complète de référence. Ce droit est identique pour les salariés à temps partiel, le décompte se faisant en jours et non en heures.",
  },
  {
    question: "Quelle est la période de référence des congés payés dans la propreté ?",
    answer:
      "La période de référence pour l'acquisition court traditionnellement du 1er juin de l'année N au 31 mai de l'année N+1. Les congés acquis sur cette période sont en principe pris au cours de la période suivante. Un accord d'entreprise peut caler la période de référence sur l'année civile.",
  },
  {
    question: "Comment se calcule l'indemnité de congés payés d'un agent de propreté ?",
    answer:
      "L'indemnité se calcule selon deux méthodes : la règle du 1/10e (un dixième de la rémunération brute totale perçue pendant la période de référence) et le maintien de salaire (le salaire que l'agent aurait perçu s'il avait travaillé). L'employeur doit retenir le montant le plus favorable au salarié, ce qui impose de comparer les deux à chaque prise de congés.",
  },
  {
    question: "Pourquoi la règle du 1/10e est-elle souvent plus favorable dans la propreté ?",
    answer:
      "Parce que l'assiette du 1/10e intègre des éléments variables fréquents dans le secteur : heures supplémentaires, majorations de nuit, de dimanche et de jours fériés, et la prime d'ancienneté. Quand un agent a réalisé beaucoup d'heures majorées sur la période de référence, le 1/10e dépasse le simple maintien du salaire de base, et c'est lui qui s'applique.",
  },
  {
    question: "Un agent de propreté peut-il reporter ses congés payés ?",
    answer:
      "En principe, les congés doivent être pris pendant la période fixée et ne sont pas reportables. Des exceptions existent : maladie ou accident, congé maternité, ou accord d'entreprise. Lorsqu'un compte épargne-temps (CET) existe dans l'entreprise, le salarié peut y affecter une partie de ses congés au-delà de la cinquième semaine.",
  },
  {
    question: "Que deviennent les congés payés non pris en cas de départ de l'entreprise ?",
    answer:
      "À la rupture du contrat (démission, licenciement, fin de CDD), les congés acquis mais non pris donnent lieu à une indemnité compensatrice de congés payés, calculée selon les mêmes règles que l'indemnité de congés (1/10e ou maintien, le plus favorable). Elle figure sur le solde de tout compte et est due quel que soit le motif de la rupture.",
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
        kicker="Réglementation · Paie"
        title="Congés payés dans la propreté : calcul, acquisition et indemnité"
        intro="Acquisition, période de référence, calcul de l'indemnité et report : tout ce qu'un dirigeant d'entreprise de propreté doit savoir pour gérer les congés payés de ses agents sans risque de rappel."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Un agent de propreté acquiert <strong>2,5 jours ouvrables de congés payés par mois</strong>{" "}
          de travail effectif, soit <strong>30 jours ouvrables (5 semaines)</strong> sur une période de
          référence allant en principe du <strong>1er juin au 31 mai</strong>. L&apos;indemnité de congés
          se calcule de deux façons — la <strong>règle du 1/10e</strong> et le{" "}
          <strong>maintien de salaire</strong> — et l&apos;employeur verse le montant{" "}
          <strong>le plus favorable</strong> au salarié.
        </AnswerBox>

        <p>
          Dans la branche propreté, le droit aux congés payés suit le régime du Code du travail, complété
          par la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective nationale des entreprises de propreté (IDCC 3043)
          </a>
          . Pour un dirigeant, l&apos;enjeu n&apos;est pas tant le principe — bien connu — que le calcul de
          l&apos;indemnité, qui recèle l&apos;essentiel des erreurs de paie. Les horaires atypiques,
          fréquents dans le secteur, rendent la comparaison entre les deux méthodes décisive.
        </p>

        <InfoCallout title="Avertissement">
          Cette page fournit des repères pratiques à titre informatif et ne remplace pas un conseil
          juridique personnalisé. Le calcul exact dépend de la situation du salarié, des accords
          d&apos;entreprise et de la version en vigueur de la convention collective : vérifiez ces points
          auprès de votre expert-comptable, de votre conseil ou de votre organisation professionnelle.
        </InfoCallout>

        <h2 id="acquisition">Acquisition des congés payés</h2>
        <p>
          Le salarié acquiert des congés dès le premier jour de travail. Le rythme d&apos;acquisition est
          de <strong>2,5 jours ouvrables par mois de travail effectif</strong>, plafonné à 30 jours
          ouvrables (soit cinq semaines) sur une année complète. Sont assimilées à du travail effectif pour
          l&apos;acquisition certaines périodes : congés payés eux-mêmes, congé maternité ou paternité,
          arrêts pour accident du travail ou maladie professionnelle dans la limite légale, jours de repos
          compensateur, etc.
        </p>

        <FactTable
          caption="Acquisition des congés payés selon la durée de travail"
          headers={["Durée de travail effectif", "Jours ouvrables acquis", "Équivalent en semaines"]}
          rows={[
            ["1 mois", "2,5 jours", "0,5 semaine"],
            ["3 mois", "7,5 jours", "1,25 semaine"],
            ["6 mois", "15 jours", "2,5 semaines"],
            ["9 mois", "22,5 jours", "3,75 semaines"],
            ["12 mois (année complète)", "30 jours", "5 semaines"],
          ]}
        />

        <DefinitionBox term="Jour ouvrable">
          Tout jour de la semaine, sauf le jour de repos hebdomadaire (en général le dimanche) et les jours
          fériés chômés. La semaine compte donc 6 jours ouvrables, ce qui explique que 5 semaines de congés
          correspondent à 30 jours ouvrables. À ne pas confondre avec le jour ouvré (jour effectivement
          travaillé dans l&apos;entreprise, généralement 5 par semaine).
        </DefinitionBox>

        <p>
          Le décompte des congés des salariés à temps partiel se fait de la même manière qu&apos;à temps
          plein : <strong>2,5 jours ouvrables par mois</strong>, sans proratisation du nombre de jours.
          C&apos;est l&apos;indemnité versée, et non le nombre de jours acquis, qui tient compte de la durée
          du travail. Le temps partiel étant très répandu dans le secteur, ce point fait l&apos;objet de
          nombreuses erreurs ; il est développé sur la page{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            consacrée à la convention collective
          </a>
          .
        </p>

        <h2 id="periode">Période de référence</h2>
        <p>
          La <strong>période de référence</strong> est la période pendant laquelle les congés
          s&apos;acquièrent. Dans la propreté, elle court traditionnellement du{" "}
          <strong>1er juin de l&apos;année N au 31 mai de l&apos;année N+1</strong>. Les congés acquis sur
          cette période sont ensuite pris au cours de la période de prise qui suit. Un accord d&apos;entreprise
          ou de branche peut toutefois retenir l&apos;année civile (1er janvier – 31 décembre) comme période
          de référence ; il faut donc vérifier ce qui s&apos;applique dans l&apos;entreprise.
        </p>

        <PullQuote cite="Convention collective nationale des entreprises de propreté (IDCC 3043)">
          L&apos;employeur doit toujours retenir le mode de calcul de l&apos;indemnité de congés le plus
          favorable au salarié : c&apos;est une obligation, non une faculté.
        </PullQuote>

        <h2 id="indemnite">Calcul de l&apos;indemnité de congés payés</h2>
        <p>
          Pendant ses congés, le salarié perçoit une <strong>indemnité de congés payés</strong> qui remplace
          son salaire. Le Code du travail impose de la calculer selon deux méthodes et de retenir{" "}
          <strong>le résultat le plus favorable</strong> :
        </p>
        <ul>
          <li>
            <strong>La règle du 1/10e</strong> : l&apos;indemnité totale pour les congés est égale à un
            dixième (10 %) de la rémunération brute totale perçue par le salarié pendant la période de
            référence. Cette assiette intègre le salaire de base mais aussi les heures supplémentaires, les
            majorations de nuit, de dimanche et de jours fériés, ainsi que la prime d&apos;ancienneté.
          </li>
          <li>
            <strong>Le maintien de salaire</strong> : l&apos;indemnité correspond à la rémunération que le
            salarié aurait perçue s&apos;il avait continué à travailler pendant ses congés, sur la base de
            son horaire habituel et de son taux en vigueur au moment du départ en congés.
          </li>
        </ul>
        <p>
          Dans la propreté, la <strong>règle du 1/10e est souvent la plus favorable</strong> : dès qu&apos;un
          agent réalise régulièrement des heures majorées (nuit, dimanche, jours fériés) ou des heures
          supplémentaires, l&apos;assiette du dixième dépasse le simple maintien du salaire de base. Le calcul
          de ces majorations est détaillé dans nos pages{" "}
          <a href="/reglementation/heures-supplementaires-proprete">heures supplémentaires</a> et{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire 2026</a>.
        </p>

        <DefinitionBox term="Règle du 1/10e">
          Méthode de calcul de l&apos;indemnité de congés payés égale à 10 % de la rémunération brute totale
          perçue pendant la période de référence. Comparée systématiquement au maintien de salaire, elle est
          retenue lorsqu&apos;elle aboutit à un montant supérieur, ce qui est fréquent en présence
          d&apos;heures majorées ou supplémentaires.
        </DefinitionBox>

        <h2 id="exemple">Exemple chiffré</h2>
        <p>
          Prenons un agent <strong>AS2</strong>, à temps plein, payé 1 890 € brut mensuel de base, avec une
          prime d&apos;ancienneté de 57 € et des majorations de nuit régulières. Sur la période de référence,
          sa rémunération brute totale s&apos;établit à 24 600 € (salaire de base, ancienneté et majorations
          comprises). Comparons les deux méthodes pour ses 30 jours de congés.
        </p>

        <FactTable
          caption="Comparaison des deux méthodes de calcul (exemple indicatif, AS2 avec heures majorées)"
          headers={["Méthode", "Base de calcul", "Indemnité pour 30 jours"]}
          rows={[
            ["Règle du 1/10e", "10 % de 24 600 € (rémunération brute de la période)", "2 460,00 €"],
            ["Maintien de salaire", "≈ 5 mois de salaire de base + ancienneté", "≈ 2 347,50 €"],
            ["Montant retenu (le plus favorable)", "Règle du 1/10e", "2 460,00 €"],
          ]}
        />

        <p>
          Ici, la règle du 1/10e l&apos;emporte de plus de <strong>110 €</strong> grâce à
          l&apos;intégration des majorations de nuit dans l&apos;assiette. À l&apos;inverse, pour un agent
          sans heures majorées ni heures supplémentaires, le maintien de salaire et le 1/10e aboutissent à un
          résultat très proche, et c&apos;est souvent le maintien qui est retenu. La{" "}
          <strong>comparaison doit être faite à chaque prise de congés</strong> : c&apos;est précisément
          parce que l&apos;assiette varie d&apos;une année sur l&apos;autre qu&apos;on ne peut pas figer la
          méthode une fois pour toutes.
        </p>

        <KeyTakeaways
          items={[
            "L'agent acquiert 2,5 jours ouvrables de congés par mois de travail effectif, soit 30 jours (5 semaines) sur une année de référence complète.",
            "La période de référence court en principe du 1er juin au 31 mai, sauf accord d'entreprise calé sur l'année civile.",
            "L'indemnité se calcule par deux méthodes — règle du 1/10e et maintien de salaire — et l'employeur retient toujours le montant le plus favorable au salarié.",
            "La règle du 1/10e est souvent gagnante dans la propreté car son assiette intègre les majorations de nuit, dimanche, jours fériés et heures supplémentaires.",
            "Le temps partiel acquiert le même nombre de jours qu'un temps plein ; c'est l'indemnité, et non le nombre de jours, qui tient compte de la durée du travail.",
            "À la rupture du contrat, les congés non pris sont payés via l'indemnité compensatrice de congés payés, calculée selon les mêmes règles.",
          ]}
        />

        <h2 id="supplementaires">Congés supplémentaires éventuels</h2>
        <p>
          Au-delà des cinq semaines légales, plusieurs sources peuvent ouvrir des{" "}
          <strong>congés supplémentaires</strong> :
        </p>
        <ul>
          <li>
            <strong>Jours de fractionnement</strong> : lorsque le salarié prend une partie de son congé
            principal (les 4 premières semaines) en dehors de la période du 1er mai au 31 octobre, il peut
            bénéficier d&apos;un ou deux jours ouvrables supplémentaires, selon le nombre de jours pris hors
            saison.
          </li>
          <li>
            <strong>Congés pour ancienneté</strong> : certaines conventions ou accords accordent des jours
            supplémentaires en fonction de l&apos;ancienneté dans l&apos;entreprise ; ce point se vérifie
            dans la convention collective ou l&apos;accord applicable.
          </li>
          <li>
            <strong>Congés pour événements familiaux</strong> : mariage, naissance, décès d&apos;un proche
            ouvrent des jours d&apos;absence autorisés et rémunérés, distincts des congés payés annuels.
          </li>
        </ul>

        <h2 id="report-cet">Report des congés et compte épargne-temps (CET)</h2>
        <p>
          Par principe, les congés se prennent pendant la période fixée et{" "}
          <strong>ne sont pas reportables</strong> : non pris, ils sont en principe perdus. Plusieurs
          exceptions encadrent ce principe :
        </p>
        <ul>
          <li>
            <strong>Maladie ou accident</strong> : un salarié empêché de prendre ses congés en raison
            d&apos;un arrêt peut, selon la jurisprudence, en obtenir le report. Voir notre page{" "}
            <a href="/reglementation/arret-maladie-prevoyance-proprete">arrêt maladie et prévoyance</a>.
          </li>
          <li>
            <strong>Congé maternité ou d&apos;adoption</strong> : les congés payés non pris du fait de ces
            congés sont reportés après la reprise du travail.
          </li>
          <li>
            <strong>Accord d&apos;entreprise</strong> : il peut prévoir des modalités de report
            spécifiques.
          </li>
        </ul>
        <p>
          Lorsqu&apos;un <strong>compte épargne-temps (CET)</strong> existe, le salarié peut y affecter des
          jours de congés au-delà de la cinquième semaine, des repos compensateurs ou des sommes diverses,
          afin de les épargner pour un usage futur (congé long, complément de rémunération, etc.). Le CET
          n&apos;est obligatoire ni en droit commun ni dans la branche : il résulte d&apos;un accord
          collectif et n&apos;existe que dans les entreprises qui l&apos;ont mis en place.
        </p>

        <h2 id="erreurs">Erreurs fréquentes sur les congés payés</h2>
        <ul>
          <li>
            <strong>Ne pas comparer les deux méthodes.</strong> Appliquer systématiquement le maintien de
            salaire (plus simple à paramétrer) sans vérifier le 1/10e revient souvent à sous-payer
            l&apos;indemnité, donc à constituer un rappel potentiel.
          </li>
          <li>
            <strong>Oublier les majorations dans l&apos;assiette du 1/10e.</strong> Les majorations de nuit,
            de dimanche et de jours fériés, ainsi que la prime d&apos;ancienneté, doivent figurer dans la
            rémunération brute servant de base au dixième.
          </li>
          <li>
            <strong>Proratiser les jours pour un temps partiel.</strong> Un agent à mi-temps acquiert
            30 jours, pas 15 ; seule l&apos;indemnité tient compte de la durée du travail.
          </li>
          <li>
            <strong>Négliger l&apos;indemnité compensatrice au départ.</strong> Les congés acquis non pris
            sont dus, quel que soit le motif de la rupture, et doivent figurer au solde de tout compte.
          </li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Intégrez les congés dans votre coût horaire
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Les congés payés pèsent sur le coût de revient d&apos;un agent : calculez le coût horaire chargé
            réel pour fixer vos prix avec marge.
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
