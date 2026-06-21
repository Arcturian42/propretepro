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

const PATH = "/reglementation/rupture-conventionnelle-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Rupture conventionnelle propreté", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "principe", label: "Le principe" },
  { id: "procedure", label: "La procédure étape par étape" },
  { id: "entretien", label: "L'entretien" },
  { id: "cerfa", label: "Le formulaire Cerfa" },
  { id: "retractation", label: "Délai de rétractation" },
  { id: "homologation", label: "Homologation DREETS" },
  { id: "indemnite", label: "L'indemnité spécifique" },
  { id: "chomage", label: "Droit au chômage" },
  { id: "cas-interdits", label: "Cas interdits et risques" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Rupture conventionnelle d'un agent de propreté : procédure et indemnité 2026",
  description:
    "Rupture conventionnelle dans la propreté (IDCC 3043) : principe du commun accord, procédure, entretien, formulaire Cerfa, délai de rétractation de 15 jours, homologation DREETS et calcul de l'indemnité spécifique.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "rupture conventionnelle propreté",
    "rupture conventionnelle agent de nettoyage",
    "indemnité rupture conventionnelle",
    "homologation DREETS",
    "IDCC 3043",
  ],
});

const FAQ = [
  {
    question: "Quelle est l'indemnité minimale d'une rupture conventionnelle pour un agent de propreté ?",
    answer:
      "L'indemnité spécifique de rupture conventionnelle ne peut être inférieure à l'indemnité légale de licenciement, soit 1/4 de mois de salaire par année d'ancienneté jusqu'à 10 ans, puis 1/3 de mois au-delà. Si la convention collective IDCC 3043 prévoit une indemnité conventionnelle de licenciement plus favorable, c'est ce montant plus élevé qui sert de plancher. Le salaire de référence est la moyenne la plus avantageuse entre les 12 ou les 3 derniers mois.",
  },
  {
    question: "Combien de temps dure une rupture conventionnelle de A à Z ?",
    answer:
      "Il faut compter environ un mois à un mois et demi : un ou plusieurs entretiens, la signature de la convention, un délai de rétractation de 15 jours calendaires, puis l'instruction de la demande d'homologation par la DREETS qui dispose de 15 jours ouvrables. La rupture du contrat ne peut intervenir qu'au lendemain de l'homologation (ou de l'expiration du délai d'instruction valant homologation tacite).",
  },
  {
    question: "Quel est le délai de rétractation après signature ?",
    answer:
      "Chaque partie, employeur comme salarié, dispose d'un délai de rétractation de 15 jours calendaires à compter du lendemain de la signature de la convention. La rétractation se fait par lettre recommandée avec accusé de réception ou remise en main propre contre décharge, et n'a pas à être motivée. Si l'une des parties se rétracte, la procédure est annulée et le contrat se poursuit.",
  },
  {
    question: "Un agent de propreté en rupture conventionnelle a-t-il droit au chômage ?",
    answer:
      "Oui. La rupture conventionnelle ouvre droit à l'allocation chômage (ARE) dans les mêmes conditions qu'un licenciement, sous réserve de remplir les conditions d'affiliation à France Travail. C'est l'un des principaux avantages de ce mode de rupture par rapport à une démission, qui n'ouvre en principe pas droit aux allocations.",
  },
  {
    question: "Peut-on faire une rupture conventionnelle pendant un arrêt maladie ou un congé maternité ?",
    answer:
      "La rupture conventionnelle est interdite pendant les périodes de protection absolue, notamment le congé maternité et les quatre semaines qui suivent, ou l'arrêt consécutif à un accident du travail. Pendant un arrêt maladie simple (non professionnel), la jurisprudence l'admet à condition que le consentement du salarié soit libre et éclairé et qu'il n'y ait pas de fraude ou de pression.",
  },
  {
    question: "La rupture conventionnelle peut-elle être imposée par l'employeur ?",
    answer:
      "Non. La rupture conventionnelle repose par définition sur le consentement mutuel et libre des deux parties. Aucune ne peut l'imposer à l'autre. Un consentement vicié (pression, menace, contexte de harcèlement ou de conflit) peut entraîner l'annulation de la rupture par le conseil de prud'hommes, qui la requalifie alors en licenciement sans cause réelle et sérieuse.",
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
        kicker="Réglementation · Rupture du contrat"
        title="Rupture conventionnelle d'un agent de propreté"
        intro="Principe du commun accord, procédure pas à pas, formulaire Cerfa, délai de rétractation, homologation DREETS et calcul de l'indemnité spécifique pour un salarié relevant de la branche propreté (IDCC 3043)."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          La <strong>rupture conventionnelle</strong> permet à l&apos;employeur et à l&apos;agent de
          propreté de rompre le CDI <strong>d&apos;un commun accord</strong>. Elle suppose au moins{" "}
          <strong>un entretien</strong>, la signature d&apos;une convention (formulaire Cerfa
          n&deg;&nbsp;14598), un <strong>délai de rétractation de 15 jours calendaires</strong>, puis
          une <strong>homologation par la DREETS</strong> (15 jours ouvrables). L&apos;indemnité
          spécifique ne peut être <strong>inférieure à l&apos;indemnité légale de licenciement</strong>,
          et le salarié <strong>conserve son droit au chômage</strong>.
        </AnswerBox>

        <p>
          Dans un secteur à forte rotation comme la propreté, la rupture conventionnelle est un outil
          fréquemment utilisé pour mettre fin à un contrat sans contentieux. Elle offre une issue
          sécurisée à l&apos;employeur — pas de risque de licenciement contesté — et au salarié — qui
          touche une indemnité et bénéficie de l&apos;assurance chômage. Encore faut-il respecter une
          procédure stricte : la moindre irrégularité peut faire requalifier la rupture en
          licenciement sans cause réelle et sérieuse.
        </p>

        <InfoCallout title="Avertissement">
          Cette page est un repère pédagogique et ne remplace pas un conseil juridique
          individualisé. La procédure et les montants exacts doivent être vérifiés à la date de la
          rupture auprès d&apos;un avocat, d&apos;un expert-comptable ou de votre organisation
          professionnelle, en tenant compte de votre situation et du dernier état de la réglementation.
        </InfoCallout>

        <h2 id="principe">Le principe : une rupture d&apos;un commun accord</h2>
        <p>
          La rupture conventionnelle individuelle est un mode de rupture du CDI distinct du
          licenciement et de la démission. Elle ne peut résulter que de la{" "}
          <strong>volonté commune et libre</strong> de l&apos;employeur et du salarié. Aucune des deux
          parties ne peut l&apos;imposer à l&apos;autre : c&apos;est cette réciprocité qui la distingue
          du licenciement (décision de l&apos;employeur) et de la démission (décision du salarié).
        </p>

        <DefinitionBox term="Rupture conventionnelle">
          Mode de rupture amiable d&apos;un contrat à durée indéterminée, par lequel l&apos;employeur et
          le salarié conviennent ensemble des conditions de la fin du contrat. Elle est encadrée par le
          Code du travail, donne lieu à une indemnité spécifique et nécessite une homologation
          administrative pour produire ses effets.
        </DefinitionBox>

        <p>
          Elle ne concerne que les <strong>CDI</strong>. Un contrat à durée déterminée (CDD) ne peut
          pas faire l&apos;objet d&apos;une rupture conventionnelle individuelle : il se rompt par
          d&apos;autres voies (accord de rupture anticipée, faute grave, etc.). Le consentement doit
          être libre et éclairé tout au long de la procédure.
        </p>

        <h2 id="procedure">La procédure étape par étape</h2>
        <p>
          La procédure se déroule en plusieurs phases successives, chacune assortie de délais
          impératifs. Le tableau ci-dessous récapitule le déroulé et les durées à respecter.
        </p>
        <FactTable
          caption="Étapes et délais d'une rupture conventionnelle"
          headers={["Étape", "Délai / durée", "Forme"]}
          rows={[
            ["1. Demande et au moins un entretien", "Aucun délai imposé", "Entretien physique"],
            ["2. Signature de la convention (Cerfa)", "Le jour de l'accord", "Formulaire signé en double"],
            ["3. Délai de rétractation", "15 jours calendaires", "LRAR ou remise contre décharge"],
            ["4. Demande d'homologation à la DREETS", "Au terme de la rétractation", "Téléservice TéléRC"],
            ["5. Instruction par la DREETS", "15 jours ouvrables", "Silence = homologation tacite"],
            ["6. Rupture effective du contrat", "Lendemain de l'homologation", "Solde de tout compte"],
          ]}
        />

        <h3 id="entretien">L&apos;entretien (un ou plusieurs)</h3>
        <p>
          La loi impose <strong>au moins un entretien</strong> entre l&apos;employeur et le salarié
          pour convenir du principe et des conditions de la rupture. Rien n&apos;interdit d&apos;en
          organiser plusieurs. Le salarié peut se faire <strong>assister</strong> (par un salarié de
          l&apos;entreprise ou, en l&apos;absence de représentants du personnel, par un conseiller du
          salarié figurant sur une liste préfectorale). S&apos;il use de cette faculté, l&apos;employeur
          peut lui-même se faire assister. L&apos;absence d&apos;entretien est une cause de nullité de
          la rupture.
        </p>

        <h3 id="cerfa">Le formulaire Cerfa</h3>
        <p>
          L&apos;accord est formalisé par une <strong>convention de rupture</strong> établie sur le
          formulaire <strong>Cerfa n&deg;&nbsp;14598</strong> (ou via le téléservice TéléRC). Elle
          précise notamment le <strong>montant de l&apos;indemnité spécifique</strong> et la{" "}
          <strong>date de rupture du contrat</strong>, fixée au plus tôt au lendemain de
          l&apos;homologation. La convention doit être signée par les deux parties, et un{" "}
          <strong>exemplaire doit obligatoirement être remis au salarié</strong> : à défaut, la rupture
          est nulle, car le salarié ne pourrait pas exercer son droit de rétractation en connaissance de
          cause.
        </p>

        <PullQuote cite="Code du travail, articles L. 1237-11 et suivants">
          La rupture conventionnelle ne peut être imposée par l&apos;une ou l&apos;autre des parties :
          elle résulte d&apos;une convention signée librement et homologuée par l&apos;administration.
        </PullQuote>

        <h2 id="retractation">Le délai de rétractation : 15 jours calendaires</h2>
        <p>
          Après la signature, chacune des parties dispose d&apos;un{" "}
          <strong>délai de rétractation de 15 jours calendaires</strong> (tous les jours comptent,
          week-ends et fériés inclus). Il court à compter du <strong>lendemain de la signature</strong>.
          La rétractation s&apos;exerce par lettre recommandée avec accusé de réception ou par remise en
          main propre contre décharge, et n&apos;a <strong>pas à être motivée</strong>. Tant que ce
          délai n&apos;est pas écoulé, aucune demande d&apos;homologation ne peut être déposée. Si une
          partie se rétracte, la procédure tombe et le contrat de travail se poursuit normalement.
        </p>

        <h2 id="homologation">L&apos;homologation par la DREETS</h2>
        <p>
          Une fois le délai de rétractation expiré, la partie la plus diligente adresse la demande
          d&apos;<strong>homologation</strong> à la <strong>DREETS</strong> (Direction régionale de
          l&apos;économie, de l&apos;emploi, du travail et des solidarités), le plus souvent via le
          téléservice TéléRC. L&apos;administration dispose de <strong>15 jours ouvrables</strong> pour
          instruire le dossier et vérifier la liberté du consentement et le respect des règles
          (indemnité au moins égale au minimum, délais respectés). <strong>Le silence de
          l&apos;administration au terme de ce délai vaut homologation</strong> (homologation tacite).
          La rupture du contrat ne peut intervenir qu&apos;au lendemain de cette homologation.
        </p>

        <InfoCallout title="Salariés protégés">
          Pour un salarié protégé (représentant du personnel, membre du CSE…), la rupture
          conventionnelle n&apos;est pas homologuée mais soumise à <strong>autorisation de
          l&apos;inspection du travail</strong>. Le contrat ne peut être rompu qu&apos;après obtention
          de cette autorisation, selon une procédure spécifique.
        </InfoCallout>

        <h2 id="indemnite">L&apos;indemnité spécifique de rupture conventionnelle</h2>
        <p>
          Le salarié perçoit une <strong>indemnité spécifique de rupture conventionnelle</strong> qui
          ne peut être <strong>inférieure à l&apos;indemnité légale de licenciement</strong>. Si la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective IDCC 3043
          </a>{" "}
          prévoit une indemnité conventionnelle de licenciement plus favorable, c&apos;est ce montant
          supérieur qui constitue le plancher. L&apos;indemnité légale se calcule ainsi :
        </p>
        <FactTable
          caption="Barème de l'indemnité légale de licenciement (plancher de la rupture conventionnelle)"
          headers={["Tranche d'ancienneté", "Indemnité par année", "Base"]}
          rows={[
            ["Jusqu'à 10 ans", "1/4 de mois de salaire", "Salaire de référence"],
            ["Au-delà de 10 ans", "1/3 de mois de salaire", "Pour les années au-delà de 10"],
          ]}
        />
        <p>
          Le <strong>salaire de référence</strong> retenu est la moyenne la plus favorable entre les{" "}
          <strong>12 derniers mois</strong> et les <strong>3 derniers mois</strong> (avec proratisation
          des primes annuelles ou exceptionnelles sur les 3 mois). Voici un exemple de calcul pour un
          agent de propreté.
        </p>
        <FactTable
          caption="Exemple de calcul — agent AS2, 6 ans d'ancienneté, salaire de référence 1 950 € brut"
          headers={["Élément", "Détail", "Montant"]}
          rows={[
            ["Salaire de référence mensuel", "Moyenne la plus favorable", "1 950,00 €"],
            ["Indemnité par année (≤ 10 ans)", "1/4 de 1 950 €", "487,50 €"],
            ["Ancienneté retenue", "6 années complètes", "× 6"],
            ["Indemnité spécifique minimale", "487,50 € × 6", "≈ 2 925,00 €"],
          ]}
        />
        <p>
          Les parties peuvent toujours convenir d&apos;une indemnité <strong>supérieure</strong> à ce
          plancher : c&apos;est fréquent dans la négociation. Une fraction de l&apos;indemnité peut être
          exonérée de cotisations et d&apos;impôt dans certaines limites, mais le régime social et fiscal
          (forfait social, CSG/CRDS) évolue : il doit être vérifié avec votre expert-comptable au moment
          de la rupture. Pour situer le coût d&apos;un salarié, voyez aussi le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>.
        </p>

        <KeyTakeaways
          items={[
            "La rupture conventionnelle repose sur un accord mutuel et libre : elle ne peut être imposée ni par l'employeur ni par le salarié.",
            "La procédure impose au moins un entretien, une convention écrite (Cerfa n° 14598) dont un exemplaire est remis au salarié, puis une homologation administrative.",
            "Le délai de rétractation est de 15 jours calendaires à compter du lendemain de la signature, sans avoir à se justifier.",
            "La DREETS dispose de 15 jours ouvrables pour homologuer ; son silence vaut homologation tacite.",
            "L'indemnité spécifique ne peut être inférieure à l'indemnité légale de licenciement (ou conventionnelle si plus favorable).",
            "Le salarié conserve son droit à l'allocation chômage, contrairement à une démission.",
          ]}
        />

        <h2 id="chomage">Le droit au chômage</h2>
        <p>
          L&apos;un des intérêts majeurs de la rupture conventionnelle pour le salarié est qu&apos;elle
          ouvre droit à l&apos;<strong>allocation d&apos;aide au retour à l&apos;emploi (ARE)</strong>,
          dans les mêmes conditions qu&apos;un licenciement, dès lors que les conditions
          d&apos;affiliation à France Travail sont remplies. C&apos;est ce qui la rend nettement plus
          attractive qu&apos;une démission, laquelle n&apos;ouvre en principe pas de droits (hors cas de
          démission légitime). Le salarié doit s&apos;inscrire comme demandeur d&apos;emploi après la
          rupture effective du contrat.
        </p>

        <h2 id="cas-interdits">Cas interdits et risques d&apos;annulation</h2>
        <p>
          La rupture conventionnelle est <strong>exclue ou strictement encadrée</strong> dans plusieurs
          situations. La méconnaître expose à la nullité de la rupture et à sa requalification en
          licenciement sans cause réelle et sérieuse, avec les indemnités correspondantes.
        </p>
        <ul>
          <li>
            <strong>Périodes de protection.</strong> Elle est interdite pendant le congé maternité et
            les semaines qui suivent, ou pendant la suspension du contrat consécutive à un accident du
            travail ou une maladie professionnelle.
          </li>
          <li>
            <strong>Consentement vicié.</strong> Pression, menace, contexte de harcèlement ou de
            conflit aigu peuvent caractériser un vice du consentement et entraîner l&apos;annulation.
          </li>
          <li>
            <strong>Contournement d&apos;une procédure.</strong> Elle ne peut servir à contourner les
            règles d&apos;un licenciement économique collectif ou un plan de sauvegarde de l&apos;emploi.
          </li>
          <li>
            <strong>Irrégularités de forme.</strong> Absence d&apos;entretien, non-remise d&apos;un
            exemplaire de la convention, non-respect du délai de rétractation : autant de causes de
            nullité.
          </li>
        </ul>
        <p>
          En cas de litige, le salarié dispose d&apos;un délai de <strong>12 mois</strong> à compter de
          l&apos;homologation pour saisir le conseil de prud&apos;hommes. Pour distinguer ce mode de
          rupture des autres situations de fin de contrat et de leurs incidences (préavis, classification,
          ancienneté reprise), voyez la{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">
            classification des agents de propreté
          </a>{" "}
          et la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective de branche
          </a>
          .
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Besoin de chiffrer le coût réel d&apos;un agent ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Indemnités, charges, congés : calculez le coût horaire chargé réel pour piloter votre
            masse salariale.
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
