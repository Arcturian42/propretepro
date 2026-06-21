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

const PATH = "/reglementation/duree-travail-pauses-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Durée du travail et pauses", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "duree-legale", label: "Durée légale : 35 h" },
  { id: "durees-max", label: "Durées maximales" },
  { id: "pauses", label: "Temps de pause" },
  { id: "repos", label: "Repos quotidien et hebdomadaire" },
  { id: "amplitude", label: "Amplitude de la journée" },
  { id: "tableau", label: "Tableau récapitulatif" },
  { id: "coupures", label: "Vacations et coupures" },
  { id: "controle", label: "Décompte et contrôle" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Durée du travail et temps de pause d'un agent de propreté (2026)",
  description:
    "Durée légale 35 h, durées maximales (10 h/jour, 48 h/semaine, 44 h sur 12 semaines), temps de pause (20 min après 6 h), repos quotidien (11 h) et hebdomadaire (35 h), amplitude et coupures dans la branche propreté (IDCC 3043).",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "durée du travail propreté",
    "temps de pause agent de nettoyage",
    "repos quotidien 11 heures",
    "coupure vacation propreté",
    "IDCC 3043",
  ],
});

const FAQ = [
  {
    question: "Quelle est la durée légale du travail d'un agent de propreté ?",
    answer:
      "La durée légale est de 35 heures par semaine, comme pour l'ensemble des salariés en France. Au-delà, les heures effectuées sont des heures supplémentaires majorées. Beaucoup d'agents de propreté travaillent toutefois à temps partiel, avec une durée contractuelle inférieure : la durée légale reste la référence pour le déclenchement des heures supplémentaires des temps complets.",
  },
  {
    question: "Quelles sont les durées maximales de travail à ne pas dépasser ?",
    answer:
      "La durée quotidienne ne peut en principe excéder 10 heures de travail effectif. La durée hebdomadaire est plafonnée à 48 heures sur une même semaine et à 44 heures en moyenne sur une période de 12 semaines consécutives. Ces plafonds sont d'ordre public ; seules des dérogations encadrées (accord, autorisation administrative) peuvent les assouplir dans des limites précises.",
  },
  {
    question: "Quel temps de pause un agent de propreté doit-il avoir ?",
    answer:
      "Dès que le temps de travail quotidien atteint 6 heures, le salarié a droit à une pause d'au moins 20 minutes consécutives. Cette pause n'est pas du temps de travail effectif et n'est en principe pas rémunérée, sauf disposition plus favorable de la convention collective, d'un accord d'entreprise ou du contrat. Des conventions ou accords peuvent prévoir une pause plus longue.",
  },
  {
    question: "Quel est le repos minimal entre deux journées de travail ?",
    answer:
      "Tout salarié doit bénéficier d'un repos quotidien d'au moins 11 heures consécutives entre la fin d'une journée de travail et le début de la suivante. Ce point est particulièrement sensible dans la propreté, où un même agent peut enchaîner une vacation du soir et une vacation tôt le matin : l'employeur doit s'assurer que les 11 heures de repos sont bien respectées entre les deux.",
  },
  {
    question: "Les coupures dans la journée d'un agent de propreté sont-elles encadrées ?",
    answer:
      "Oui. Le travail en vacations (matin et soir) entraîne souvent des coupures dans la journée. Pour les salariés à temps partiel, la journée ne peut en principe comporter qu'une seule coupure, ou une coupure supérieure à 2 heures uniquement si un accord de branche ou d'entreprise le prévoit, avec des contreparties. Ces règles visent à limiter une amplitude excessive sans temps de travail rémunéré correspondant.",
  },
  {
    question: "Comment l'employeur doit-il décompter le temps de travail ?",
    answer:
      "L'employeur doit pouvoir justifier des heures réellement effectuées par chaque salarié, notamment en cas de contrôle de l'inspection du travail ou de litige prud'homal. Dans un contexte multi-sites et horaires décalés comme la propreté, un système fiable de décompte (pointage, feuilles d'heures, badgeuse) est fortement recommandé pour sécuriser la paie, les heures supplémentaires et le respect des repos.",
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
        title="Durée du travail et temps de pause d'un agent de propreté"
        intro="Durée légale, durées maximales, pauses, repos quotidien et hebdomadaire, amplitude et encadrement des coupures (vacations matin/soir) dans la branche propreté (IDCC 3043)."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          La durée légale du travail est de <strong>35 h/semaine</strong>. Les durées maximales sont de{" "}
          <strong>10 h par jour</strong>, <strong>48 h sur une semaine</strong> et{" "}
          <strong>44 h en moyenne sur 12 semaines</strong>. Une <strong>pause d&apos;au moins 20 min</strong>{" "}
          est due dès <strong>6 h</strong> de travail. Le salarié bénéficie d&apos;un{" "}
          <strong>repos quotidien de 11 h</strong> et d&apos;un <strong>repos hebdomadaire de 35 h</strong>{" "}
          (24 h + 11 h). Les <strong>coupures</strong> liées aux vacations matin/soir sont encadrées,
          surtout à temps partiel.
        </AnswerBox>

        <p>
          La propreté est un secteur d&apos;horaires atypiques : interventions tôt le matin ou tard le
          soir, hors présence des occupants, sur plusieurs sites au cours d&apos;une même journée. Ce
          fonctionnement en <strong>vacations</strong> rend la maîtrise du temps de travail
          particulièrement sensible. Les règles ci-dessous, issues du Code du travail et de la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective IDCC 3043
          </a>
          , fixent le cadre que tout dirigeant doit respecter.
        </p>

        <InfoCallout title="Avertissement">
          Cette page est un repère pédagogique et ne remplace pas un conseil juridique
          individualisé. Les seuils, dérogations et contreparties exacts doivent être vérifiés à la date
          d&apos;application auprès d&apos;un avocat, d&apos;un expert-comptable ou de votre organisation
          professionnelle, au regard de votre accord d&apos;entreprise et du dernier état de la
          réglementation.
        </InfoCallout>

        <h2 id="duree-legale">La durée légale : 35 heures par semaine</h2>
        <p>
          La <strong>durée légale du travail effectif</strong> est fixée à <strong>35 heures par
          semaine</strong>. Ce n&apos;est ni un minimum ni un maximum, mais le seuil à partir duquel les
          heures travaillées par un salarié à temps complet deviennent des{" "}
          <a href="/reglementation/heures-supplementaires-proprete">heures supplémentaires</a>, majorées
          et imputées sur le contingent annuel. Dans la propreté, une large part des effectifs travaille
          à <strong>temps partiel</strong>, avec une durée contractuelle inférieure à 35 h : la durée
          légale demeure néanmoins la référence pour les temps complets.
        </p>

        <DefinitionBox term="Temps de travail effectif">
          Période pendant laquelle le salarié est à la disposition de l&apos;employeur et se conforme à
          ses directives, sans pouvoir vaquer librement à des occupations personnelles. Les temps de
          pause, de repas ou de trajet domicile-travail n&apos;en font en principe pas partie ; certains
          temps de déplacement entre deux sites au cours d&apos;une vacation peuvent en revanche être
          considérés comme du travail effectif.
        </DefinitionBox>

        <h2 id="durees-max">Les durées maximales de travail</h2>
        <p>
          Le Code du travail fixe des plafonds destinés à protéger la santé et la sécurité des salariés.
          Ils s&apos;imposent à l&apos;employeur, sauf dérogations encadrées.
        </p>
        <ul>
          <li>
            <strong>Durée quotidienne maximale : 10 heures</strong> de travail effectif par jour. Une
            dérogation jusqu&apos;à 12 h est possible par accord ou autorisation, dans des cas limités.
          </li>
          <li>
            <strong>Durée hebdomadaire maximale absolue : 48 heures</strong> sur une même semaine.
          </li>
          <li>
            <strong>Durée hebdomadaire moyenne : 44 heures</strong> sur une période de{" "}
            <strong>12 semaines consécutives</strong> (46 h possibles par dérogation).
          </li>
        </ul>

        <PullQuote cite="Code du travail, durées maximales de travail">
          Les plafonds de 10 heures par jour, 48 heures par semaine et 44 heures en moyenne sur douze
          semaines sont des limites de sécurité : les dépasser, hors dérogation, engage la responsabilité
          de l&apos;employeur.
        </PullQuote>

        <h2 id="pauses">Le temps de pause : 20 minutes après 6 heures</h2>
        <p>
          Dès que le temps de travail quotidien atteint <strong>6 heures</strong>, le salarié a droit à
          une <strong>pause d&apos;au moins 20 minutes consécutives</strong>. Cette pause n&apos;est en
          principe pas du temps de travail effectif et n&apos;est donc pas rémunérée, sauf disposition
          plus favorable de la convention collective, d&apos;un accord d&apos;entreprise ou du contrat de
          travail. Si, pendant sa pause, l&apos;agent reste à la disposition de l&apos;employeur (par
          exemple en cas d&apos;astreinte sur site), ce temps peut alors être requalifié en travail
          effectif et rémunéré comme tel.
        </p>

        <h2 id="repos">Repos quotidien (11 h) et hebdomadaire (35 h)</h2>
        <p>
          Au-delà des pauses dans la journée, deux repos minimaux structurent le rythme de travail.
        </p>
        <ul>
          <li>
            <strong>Repos quotidien : 11 heures consécutives</strong> minimum entre la fin d&apos;une
            journée de travail et le début de la suivante.
          </li>
          <li>
            <strong>Repos hebdomadaire : 35 heures consécutives</strong> minimum, soit les 24 heures du
            repos hebdomadaire (en principe le dimanche) auxquelles s&apos;ajoutent les 11 heures du
            repos quotidien.
          </li>
        </ul>
        <p>
          Le repos quotidien de 11 heures est <strong>le point de vigilance majeur</strong> dans la
          propreté : un agent affecté à une vacation du soir puis à une vacation tôt le lendemain matin
          doit conserver au moins 11 heures entre les deux. L&apos;employeur doit organiser les plannings
          en conséquence.
        </p>

        <h2 id="amplitude">L&apos;amplitude de la journée de travail</h2>
        <p>
          L&apos;<strong>amplitude</strong> est le délai entre le début et la fin de la journée de
          travail, temps de coupure inclus. Le repos quotidien de 11 heures la borne mécaniquement : sur
          24 heures, l&apos;amplitude ne peut donc en principe dépasser <strong>13 heures</strong>. Une
          amplitude large mais entrecoupée de longues pauses non rémunérées est précisément ce que les
          règles sur les coupures (ci-dessous) cherchent à encadrer dans le secteur.
        </p>

        <DefinitionBox term="Amplitude vs durée du travail">
          La durée du travail correspond aux seules heures de travail effectif. L&apos;amplitude englobe
          l&apos;ensemble de la journée, y compris les coupures non travaillées. Un agent peut ainsi
          n&apos;effectuer que 6 heures de travail effectif sur une amplitude de 11 heures s&apos;il
          intervient le matin puis le soir avec une longue coupure entre les deux.
        </DefinitionBox>

        <h2 id="tableau">Tableau récapitulatif des durées et repos</h2>
        <FactTable
          caption="Durées maximales et repos minimaux applicables (repères)"
          headers={["Notion", "Seuil", "Nature"]}
          rows={[
            ["Durée légale hebdomadaire", "35 h", "Référence heures sup."],
            ["Durée maximale quotidienne", "10 h", "Maximum (12 h par dérogation)"],
            ["Durée maximale hebdomadaire absolue", "48 h", "Maximum sur une semaine"],
            ["Durée maximale moyenne (12 semaines)", "44 h", "Maximum en moyenne"],
            ["Temps de pause", "20 min après 6 h", "Minimum"],
            ["Repos quotidien", "11 h", "Minimum consécutif"],
            ["Repos hebdomadaire", "35 h", "Minimum consécutif (24 h + 11 h)"],
            ["Amplitude maximale (de fait)", "13 h", "Borne issue du repos de 11 h"],
          ]}
        />

        <KeyTakeaways
          items={[
            "La durée légale reste 35 h/semaine ; au-delà, ce sont des heures supplémentaires majorées pour un temps complet.",
            "Les durées maximales sont de 10 h/jour, 48 h sur une semaine et 44 h en moyenne sur 12 semaines.",
            "Une pause d'au moins 20 minutes est obligatoire dès 6 heures de travail quotidien.",
            "Le repos quotidien de 11 heures est crucial entre une vacation du soir et une vacation du matin.",
            "Le repos hebdomadaire est d'au moins 35 heures consécutives (24 h + 11 h).",
            "Les coupures et l'amplitude des journées en vacations sont strictement encadrées, surtout à temps partiel.",
          ]}
        />

        <h2 id="coupures">Vacations et coupures : le cas spécifique de la propreté</h2>
        <p>
          Le travail en <strong>vacations</strong> (intervention le matin, puis de nouveau le soir) est
          structurel dans la propreté. Il génère des <strong>coupures</strong> au milieu de la journée,
          souvent pour des salariés à temps partiel. Ces coupures sont encadrées afin d&apos;éviter des
          amplitudes excessives sans rémunération correspondante.
        </p>
        <ul>
          <li>
            <strong>Principe pour le temps partiel.</strong> La journée de travail ne peut en principe
            comporter qu&apos;<strong>une seule coupure</strong>, et celle-ci ne peut dépasser{" "}
            <strong>2 heures</strong>, sauf si un accord de branche ou d&apos;entreprise prévoit une
            organisation différente.
          </li>
          <li>
            <strong>Coupure supérieure à 2 heures.</strong> Elle n&apos;est possible que si un accord le
            permet, et doit alors s&apos;accompagner de <strong>contreparties</strong> (par exemple une
            amplitude plafonnée, une indemnisation, ou une garantie d&apos;horaires regroupés).
          </li>
          <li>
            <strong>Déplacements inter-sites.</strong> Le temps de trajet entre deux chantiers au cours
            d&apos;une même vacation peut, selon les cas, constituer du temps de travail effectif et
            ouvrir droit à rémunération ou à une prime de déplacement.
          </li>
        </ul>
        <p>
          Le sujet rejoint directement la question du{" "}
          <a href="/reglementation/heures-supplementaires-proprete">décompte des heures</a> et de la{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">classification</a> de
          l&apos;agent : un planning en vacations mal construit peut générer des heures complémentaires
          ou supplémentaires non prévues, ou faire dépasser les durées maximales.
        </p>

        <InfoCallout title="Bonne pratique">
          Construire les plannings en raisonnant <strong>par agent et par semaine</strong>, pas
          seulement par site, permet de vérifier d&apos;un coup d&apos;œil le respect des 11 heures de
          repos quotidien, des durées maximales et du nombre de coupures — les trois écueils les plus
          fréquents du secteur.
        </InfoCallout>

        <h2 id="controle">Décompte et contrôle du temps de travail</h2>
        <p>
          L&apos;employeur doit être en mesure de <strong>justifier les heures réellement effectuées</strong>
          par chaque salarié. En cas de contrôle de l&apos;inspection du travail ou de litige
          prud&apos;homal, l&apos;absence de décompte fiable se retourne généralement contre
          l&apos;entreprise. Dans un contexte multi-sites et à horaires décalés, un dispositif de suivi
          (pointage, feuilles d&apos;heures signées, badgeuse mobile) sécurise à la fois la paie, le
          calcul des heures supplémentaires et complémentaires, et le respect des repos. Ce suivi
          alimente aussi le calcul du{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent</a>, donc la
          rentabilité de chaque chantier.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Du temps de travail au coût réel
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Traduisez vos heures, coupures et repos en coût horaire chargé pour fixer vos prix avec
            marge.
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
