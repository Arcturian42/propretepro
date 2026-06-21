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

const PATH = "/reglementation/arret-maladie-prevoyance-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Arrêt maladie & prévoyance", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "maintien", label: "Maintien de salaire employeur" },
  { id: "durees", label: "Durées selon l'ancienneté" },
  { id: "ijss", label: "Indemnités journalières (IJSS)" },
  { id: "subrogation", label: "La subrogation" },
  { id: "prevoyance", label: "Prévoyance de branche" },
  { id: "cotisation", label: "Cotisation prévoyance" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Arrêt maladie et prévoyance dans la propreté (IDCC 3043) : maintien de salaire et garanties",
  description:
    "Arrêt maladie d'un agent de propreté : conditions du maintien de salaire employeur (ancienneté, délai de carence, durée), indemnités journalières, subrogation et régime de prévoyance de branche (incapacité, invalidité, décès).",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "arrêt maladie propreté",
    "maintien de salaire propreté",
    "prévoyance propreté IDCC 3043",
    "subrogation arrêt maladie",
    "indemnités journalières nettoyage",
  ],
});

const FAQ = [
  {
    question: "À partir de quelle ancienneté un agent de propreté a-t-il droit au maintien de salaire ?",
    answer:
      "Le maintien de salaire par l'employeur, prévu par la loi de mensualisation, suppose en règle générale au moins 1 an d'ancienneté dans l'entreprise à la date du début de l'arrêt. La convention collective ou un accord d'entreprise peut prévoir des conditions plus favorables, par exemple une ancienneté requise plus courte ou une indemnisation renforcée.",
  },
  {
    question: "Y a-t-il un délai de carence avant le maintien de salaire ?",
    answer:
      "Pour le maintien de salaire légal en cas de maladie ou d'accident de la vie courante, un délai de carence de 7 jours s'applique : l'employeur n'indemnise qu'à compter du 8e jour d'absence. Ce délai est supprimé pour les arrêts liés à un accident du travail ou une maladie professionnelle. La convention collective ou la prévoyance de branche peuvent réduire ou supprimer cette carence.",
  },
  {
    question: "Combien de temps dure le maintien de salaire ?",
    answer:
      "La durée du maintien augmente avec l'ancienneté. À titre de repère, le régime légal prévoit 30 jours indemnisés à 90 % puis 30 jours à 66,66 % pour 1 à 5 ans d'ancienneté, ces durées s'allongeant par tranches (par exemple 40 + 40 jours de 6 à 10 ans), jusqu'à 90 + 90 jours au-delà de 30 ans. La convention collective propreté peut prévoir un régime plus favorable.",
  },
  {
    question: "Qu'est-ce que la subrogation dans la propreté ?",
    answer:
      "La subrogation est le mécanisme par lequel l'employeur perçoit directement les indemnités journalières de la Sécurité sociale (IJSS) à la place du salarié, et lui verse en contrepartie l'intégralité de sa rémunération maintenue. Le salarié reçoit ainsi un salaire continu sans attendre le versement de la CPAM. Elle est fréquente pendant la période de maintien de salaire.",
  },
  {
    question: "Quelles garanties couvre la prévoyance de branche propreté ?",
    answer:
      "Le régime de prévoyance de branche couvre principalement l'incapacité temporaire de travail (indemnités complémentaires aux IJSS pendant l'arrêt), l'invalidité (rente en cas d'incapacité permanente réduisant la capacité de gain) et le décès (capital et éventuelles rentes aux ayants droit). Il intervient en complément de la Sécurité sociale et au-delà de la période de maintien de salaire employeur.",
  },
  {
    question: "Qui paie la cotisation de prévoyance dans la propreté ?",
    answer:
      "La cotisation de prévoyance est exprimée en pourcentage du salaire (généralement référencé sur les tranches de rémunération) et répartie entre l'employeur et le salarié selon les règles fixées par l'accord de branche. La part patronale doit être intégrée au calcul du coût chargé d'un agent. Le taux exact et la répartition figurent dans la convention collective et l'accord de prévoyance en vigueur.",
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
        kicker="Réglementation · Protection sociale"
        title="Arrêt maladie et prévoyance dans la propreté (IDCC 3043)"
        intro="Maintien de salaire, délai de carence, indemnités journalières, subrogation et régime de prévoyance de branche : le cadre complet de l'indemnisation d'un agent de propreté en arrêt."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En cas d&apos;arrêt maladie, un agent de propreté perçoit les{" "}
          <strong>indemnités journalières de la Sécurité sociale (IJSS)</strong> et, sous condition
          d&apos;<strong>ancienneté (au moins 1 an en règle générale)</strong>, un{" "}
          <strong>maintien de salaire par l&apos;employeur</strong> après un{" "}
          <strong>délai de carence de 7 jours</strong> (supprimé pour un accident du travail). La durée
          du maintien <strong>augmente avec l&apos;ancienneté</strong>. Au-delà, le{" "}
          <strong>régime de prévoyance de branche</strong> couvre incapacité, invalidité et décès.
        </AnswerBox>

        <p>
          L&apos;indemnisation d&apos;un arrêt de travail dans la propreté combine trois étages : les{" "}
          <strong>indemnités journalières de la Sécurité sociale</strong>, le{" "}
          <strong>maintien de salaire</strong> à la charge de l&apos;employeur (loi de mensualisation,
          complétée par la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective IDCC 3043
          </a>
          ), et le <strong>régime de prévoyance de branche</strong> pour les situations longues ou graves.
          Pour un dirigeant, bien articuler ces trois niveaux évite à la fois les rappels de salaire et les
          erreurs de cotisation.
        </p>

        <InfoCallout title="Avertissement">
          Cette page présente des repères pratiques à titre informatif et ne remplace pas un conseil
          juridique personnalisé. Les conditions exactes (ancienneté requise, durées, taux, carence)
          dépendent de la version en vigueur de la convention collective, de l&apos;accord de prévoyance et
          de la situation du salarié : faites-les vérifier par votre expert-comptable, votre conseil ou
          votre organisation professionnelle.
        </InfoCallout>

        <h2 id="maintien">Le maintien de salaire par l&apos;employeur</h2>
        <p>
          La <strong>loi de mensualisation</strong> impose à l&apos;employeur de compléter les indemnités
          journalières de la Sécurité sociale pour garantir au salarié malade une part de sa rémunération.
          Trois conditions principales encadrent ce maintien :
        </p>
        <ul>
          <li>
            <strong>Une ancienneté minimale.</strong> En règle générale, le salarié doit justifier
            d&apos;<strong>au moins 1 an d&apos;ancienneté</strong> dans l&apos;entreprise à la date du
            début de l&apos;arrêt. La convention collective propreté peut prévoir une condition plus
            favorable.
          </li>
          <li>
            <strong>Un justificatif et une prise en charge par la Sécurité sociale.</strong> Le salarié doit
            avoir transmis son arrêt dans les délais et percevoir les IJSS.
          </li>
          <li>
            <strong>Un délai de carence.</strong> Pour un arrêt de maladie ordinaire, le maintien
            n&apos;intervient qu&apos;à compter du <strong>8e jour</strong> (7 jours de carence). Cette
            carence est <strong>supprimée</strong> en cas d&apos;accident du travail ou de maladie
            professionnelle.
          </li>
        </ul>

        <DefinitionBox term="Délai de carence">
          Période initiale d&apos;un arrêt de travail pendant laquelle aucune indemnité complémentaire
          n&apos;est versée par l&apos;employeur. Pour le maintien de salaire légal, il est de 7 jours en cas
          de maladie ordinaire, et nul en cas d&apos;accident du travail ou de maladie professionnelle. La
          convention collective ou la prévoyance de branche peuvent le réduire ou le supprimer.
        </DefinitionBox>

        <h2 id="durees">Durées de maintien selon l&apos;ancienneté</h2>
        <p>
          La durée pendant laquelle l&apos;employeur maintient tout ou partie du salaire{" "}
          <strong>croît avec l&apos;ancienneté</strong>. Le régime légal prévoit deux paliers
          d&apos;indemnisation par tranche d&apos;ancienneté : une première période à 90 % de la
          rémunération brute, puis une seconde à 66,66 %. Le tableau ci-dessous donne les repères du régime
          légal ; la convention collective propreté peut prévoir un régime plus favorable.
        </p>

        <FactTable
          caption="Durées indicatives de maintien de salaire selon l'ancienneté (régime légal de mensualisation)"
          headers={["Ancienneté", "Indemnisation à 90 %", "Indemnisation à 66,66 %", "Durée totale"]}
          rows={[
            ["1 à 5 ans", "30 jours", "30 jours", "60 jours"],
            ["6 à 10 ans", "40 jours", "40 jours", "80 jours"],
            ["11 à 15 ans", "50 jours", "50 jours", "100 jours"],
            ["16 à 20 ans", "60 jours", "60 jours", "120 jours"],
            ["21 à 25 ans", "70 jours", "70 jours", "140 jours"],
            ["26 à 30 ans", "80 jours", "80 jours", "160 jours"],
            ["Plus de 30 ans", "90 jours", "90 jours", "180 jours"],
          ]}
        />

        <p>
          Ces durées s&apos;apprécient sur une période de référence glissante : les jours déjà indemnisés au
          cours des douze mois précédents s&apos;imputent sur le crédit disponible. Le pourcentage maintenu
          (90 % puis 66,66 %) s&apos;entend <strong>indemnités journalières de la Sécurité sociale
          incluses</strong> : l&apos;employeur ne verse que le complément nécessaire pour atteindre le taux
          garanti.
        </p>

        <PullQuote cite="Loi de mensualisation et convention collective des entreprises de propreté">
          Le maintien de salaire n&apos;est pas un avantage : c&apos;est une obligation de l&apos;employeur
          dès lors que le salarié remplit les conditions d&apos;ancienneté et de prise en charge.
        </PullQuote>

        <h2 id="ijss">Les indemnités journalières de la Sécurité sociale (IJSS)</h2>
        <p>
          Pendant l&apos;arrêt, la Caisse primaire d&apos;assurance maladie (CPAM) verse au salarié des{" "}
          <strong>indemnités journalières</strong> calculées sur la base de ses salaires antérieurs, après un{" "}
          <strong>délai de carence de 3 jours</strong> propre à la Sécurité sociale (distinct du délai de
          carence de l&apos;employeur). Ces IJSS constituent le socle de l&apos;indemnisation ; le maintien
          de salaire et la prévoyance viennent les compléter. Le calcul, les plafonds et la durée maximale
          d&apos;indemnisation relèvent de la réglementation de la Sécurité sociale, indépendante de la
          branche.
        </p>

        <KeyTakeaways
          items={[
            "L'indemnisation d'un arrêt combine trois étages : IJSS de la Sécurité sociale, maintien de salaire employeur et prévoyance de branche.",
            "Le maintien de salaire suppose en principe au moins 1 an d'ancienneté et s'applique après 7 jours de carence pour une maladie ordinaire (carence supprimée en accident du travail).",
            "La durée du maintien augmente avec l'ancienneté, par paliers de 90 % puis 66,66 % de la rémunération, IJSS incluses.",
            "La subrogation permet à l'employeur de percevoir les IJSS et de verser un salaire continu au salarié, sans rupture de trésorerie pour ce dernier.",
            "Le régime de prévoyance de branche couvre l'incapacité, l'invalidité et le décès, au-delà du maintien de salaire employeur.",
            "La cotisation de prévoyance est répartie entre employeur et salarié ; la part patronale s'intègre au coût chargé de l'agent.",
          ]}
        />

        <h2 id="subrogation">La subrogation</h2>
        <p>
          La <strong>subrogation</strong> est le mécanisme par lequel l&apos;employeur perçoit directement
          les IJSS à la place du salarié, et lui verse en contrepartie l&apos;intégralité de sa rémunération
          maintenue. Concrètement, le salarié reçoit un <strong>salaire continu</strong> sur sa fiche de
          paie, sans avoir à attendre le versement de la CPAM, et c&apos;est l&apos;employeur qui se fait
          rembourser les indemnités journalières.
        </p>
        <p>
          La subrogation est <strong>de droit pendant la période de maintien de salaire</strong> à taux
          plein (90 %), et reste possible au-delà selon les modalités prévues. Elle évite au salarié les
          décalages de trésorerie liés au délai de traitement des IJSS, et simplifie le suivi de la paie
          pour l&apos;employeur. Elle suppose en revanche que l&apos;entreprise déclare correctement
          l&apos;arrêt en DSN et fournisse l&apos;attestation de salaire nécessaire au calcul des IJSS — un
          point traité dans notre page{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire 2026</a> côté éléments de
          paie.
        </p>

        <DefinitionBox term="Subrogation">
          Mécanisme par lequel l&apos;employeur se substitue au salarié pour percevoir les indemnités
          journalières de la Sécurité sociale, tout en versant au salarié l&apos;intégralité de sa
          rémunération maintenue. Le salarié bénéficie d&apos;un salaire continu ; l&apos;employeur récupère
          les IJSS auprès de la CPAM.
        </DefinitionBox>

        <h2 id="prevoyance">Le régime de prévoyance de branche</h2>
        <p>
          La branche propreté est dotée d&apos;un <strong>régime de prévoyance obligatoire</strong>,
          institué par accord collectif, qui intervient en complément de la Sécurité sociale et au-delà de la
          période de maintien de salaire employeur. Il couvre trois grands risques :
        </p>
        <ul>
          <li>
            <strong>Incapacité temporaire de travail.</strong> Versement d&apos;indemnités journalières
            complémentaires aux IJSS pendant l&apos;arrêt, afin de maintenir une part du revenu une fois la
            période de maintien de salaire employeur épuisée.
          </li>
          <li>
            <strong>Invalidité.</strong> Versement d&apos;une rente lorsque le salarié est reconnu invalide
            par la Sécurité sociale (incapacité permanente réduisant durablement sa capacité de gain), en
            complément de la pension d&apos;invalidité.
          </li>
          <li>
            <strong>Décès.</strong> Versement d&apos;un capital décès aux bénéficiaires désignés ou aux
            ayants droit, et, le cas échéant, de rentes (de conjoint ou d&apos;éducation pour les enfants à
            charge).
          </li>
        </ul>
        <p>
          Ce régime garantit un filet de sécurité aux salariés du secteur, où les arrêts longs et les
          situations d&apos;usure professionnelle ne sont pas rares. Les garanties précises (taux de la
          rente, montant du capital, conditions) figurent dans l&apos;accord de prévoyance de branche et la
          notice de l&apos;organisme assureur.
        </p>

        <h2 id="cotisation">La cotisation de prévoyance</h2>
        <p>
          Le financement du régime repose sur une <strong>cotisation de prévoyance</strong>, exprimée en
          pourcentage du salaire et généralement assise sur les tranches de rémunération. Elle est{" "}
          <strong>répartie entre l&apos;employeur et le salarié</strong> selon les règles fixées par
          l&apos;accord de branche. Pour le dirigeant, deux points méritent l&apos;attention :
        </p>
        <ul>
          <li>
            La <strong>part patronale</strong> de la cotisation de prévoyance doit être intégrée au{" "}
            <a href="/tarifs/cout-revient-agent-proprete">coût chargé réel d&apos;un agent</a>, au même titre
            que les autres charges sociales, sous peine de sous-estimer le coût de revient et donc le tarif.
          </li>
          <li>
            La cotisation doit figurer correctement sur le bulletin de paie et être déclarée en DSN ; une
            absence d&apos;adhésion au régime obligatoire expose l&apos;entreprise à un redressement et à
            l&apos;obligation de prendre en charge elle-même les prestations dues.
          </li>
        </ul>

        <InfoCallout title="Bon à savoir">
          La part patronale finançant le régime de prévoyance bénéficie, sous conditions, d&apos;un régime
          social et fiscal de faveur. Mais ce traitement suppose le respect du caractère collectif et
          obligatoire du régime : tout salarié de la catégorie concernée doit y être affilié.
        </InfoCallout>

        <h2 id="erreurs">Erreurs fréquentes</h2>
        <ul>
          <li>
            <strong>Appliquer le mauvais délai de carence.</strong> Confondre la carence de la Sécurité
            sociale (3 jours pour les IJSS) et la carence du maintien de salaire employeur (7 jours en
            maladie ordinaire), ou oublier que la carence employeur est supprimée en accident du travail.
          </li>
          <li>
            <strong>Oublier d&apos;imputer les IJSS.</strong> Le pourcentage maintenu (90 % puis 66,66 %)
            s&apos;entend IJSS incluses : l&apos;employeur ne verse que le complément, pas la totalité du
            taux en plus des IJSS.
          </li>
          <li>
            <strong>Mal décompter le crédit de maintien.</strong> Ne pas tenir compte des jours déjà
            indemnisés au cours des douze mois glissants, ce qui conduit à indemniser au-delà du droit.
          </li>
          <li>
            <strong>Négliger l&apos;adhésion à la prévoyance.</strong> Ne pas affilier un salarié au régime
            obligatoire de branche, ou ne pas déclarer la cotisation, expose à un redressement et au paiement
            des prestations en lieu et place de l&apos;assureur.
          </li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Intégrez la prévoyance dans votre coût chargé
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            La part patronale de prévoyance et l&apos;absentéisme pèsent sur le coût de revient d&apos;un
            agent : calculez le coût horaire chargé réel pour fixer vos prix avec marge.
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
