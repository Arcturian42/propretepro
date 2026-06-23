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

const PATH = "/reglementation/travail-nuit-dimanche-ferie-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Travail de nuit, dimanche et fériés", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "pourquoi", label: "Pourquoi c'est si fréquent en propreté" },
  { id: "majorations", label: "Majorations en un coup d'œil" },
  { id: "nuit", label: "Travail de nuit" },
  { id: "dimanche", label: "Travail du dimanche" },
  { id: "feries", label: "Jours fériés" },
  { id: "cumul", label: "Cumul et exemple de paie" },
  { id: "obligations", label: "Obligations de l'employeur" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Travail de nuit, dimanche et jours fériés en propreté (IDCC 3043)",
  description:
    "Travail de nuit (21h-6h), du dimanche et des jours fériés dans la propreté : définitions, majorations indicatives, contreparties en repos et surveillance médicale pour les agents de nettoyage.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "travail de nuit propreté",
    "majoration dimanche nettoyage",
    "jour férié travaillé propreté",
    "IDCC 3043 horaires atypiques",
    "contrepartie travail de nuit agent de propreté",
  ],
});

const FAQ = [
  {
    question: "Quelles sont les heures considérées comme travail de nuit dans la propreté ?",
    answer:
      "À titre indicatif, le travail de nuit correspond à la plage 21 h – 6 h. La période de nuit et le statut de travailleur de nuit (nombre d'heures de nuit déclenchant ce statut) sont précisés par les dispositions légales et conventionnelles. Cette plage peut être adaptée par accord, dans les limites prévues par le Code du travail. Il faut vérifier la définition applicable dans la convention collective et les accords d'entreprise.",
  },
  {
    question: "Comment est majoré le travail de nuit d'un agent de propreté ?",
    answer:
      "Les heures de nuit ouvrent droit à une contrepartie, le plus souvent une majoration de salaire (de l'ordre de 20 % à titre indicatif) et/ou un repos compensateur. Le taux et la nature de la contrepartie (majoration, repos, ou les deux) dépendent de la convention collective et des accords applicables. À titre de repère, une majoration de 20 % sur un taux de base de 12,46 €/h porte l'heure de nuit à environ 14,95 €.",
  },
  {
    question: "Le travail du dimanche est-il majoré dans la propreté ?",
    answer:
      "Oui, le travail du dimanche donne en principe lieu à une majoration de salaire (de l'ordre de 20 % à titre indicatif) et, selon les cas, à un repos compensateur. Le taux exact relève de la convention collective et des accords d'entreprise, qui peuvent prévoir des conditions plus favorables. Le repos hebdomadaire doit par ailleurs être organisé conformément aux règles légales.",
  },
  {
    question: "Comment est payé un jour férié travaillé dans la propreté ?",
    answer:
      "Un jour férié travaillé donne généralement lieu à une majoration (souvent de l'ordre de 100 % à titre indicatif pour le 1er Mai, et selon les dispositions conventionnelles pour les autres fériés) ou à une récupération. Le 1er Mai chômé est payé ; s'il est travaillé, il ouvre droit à une majoration spécifique. Les autres jours fériés suivent les règles de la convention collective et des accords d'entreprise.",
  },
  {
    question: "Un employeur peut-il imposer le travail de nuit ou le dimanche à un agent ?",
    answer:
      "Le recours au travail de nuit et au travail du dimanche est encadré : il doit reposer sur des justifications liées à l'activité, respecter les contreparties prévues, les durées maximales de travail et les temps de repos. Certains salariés bénéficient de protections (état de santé, contraintes familiales). La mise en place suppose le respect des règles légales et conventionnelles ; un agent ne peut pas être contraint en dehors de ce cadre.",
  },
  {
    question: "Le travail de nuit impose-t-il une surveillance médicale particulière ?",
    answer:
      "Oui. Les travailleurs de nuit bénéficient d'un suivi médical renforcé par le service de prévention et de santé au travail, avec une visite d'information et de prévention avant l'affectation puis un suivi à intervalles réguliers. L'employeur doit également veiller aux durées maximales de travail de nuit et aux temps de repos spécifiques. Ces obligations relèvent du Code du travail.",
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
        title="Travail de nuit, dimanche et jours fériés en propreté"
        intro="Définitions, majorations indicatives, contreparties en repos et obligations de l'employeur pour les horaires atypiques, omniprésents dans la branche propreté."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Dans la propreté, le travail de <strong>nuit</strong> (plage indicative <strong>21 h – 6 h</strong>),
          du <strong>dimanche</strong> et des <strong>jours fériés</strong> est très fréquent. Il ouvre droit à
          des <strong>contreparties</strong> : majoration de salaire (souvent de l&apos;ordre de{" "}
          <strong>20 %</strong> pour la nuit et le dimanche, jusqu&apos;à <strong>100 %</strong> pour un férié
          travaillé) et/ou repos compensateur. Le travail de nuit impose en outre une{" "}
          <strong>surveillance médicale renforcée</strong>.
        </AnswerBox>

        <p>
          La propreté est l&apos;un des secteurs où les horaires atypiques sont la règle plutôt que
          l&apos;exception : bureaux nettoyés tôt le matin ou tard le soir, centres commerciaux entretenus la
          nuit, sites industriels en continu, parties communes nettoyées le week-end. Maîtriser les règles du
          travail de nuit, du dimanche et des jours fériés est donc essentiel, tant pour sécuriser la paie que
          pour calculer un <a href="/tarifs/cout-revient-agent-proprete">coût de revient</a> juste.
        </p>

        <InfoCallout title="Avertissement">
          Les définitions horaires et les taux de majoration ci-dessous sont des ordres de grandeur fournis à
          titre informatif. Les valeurs opposables sont celles du Code du travail, de la convention collective
          IDCC 3043 et des accords d&apos;entreprise applicables, à vérifier à la date de paie.
        </InfoCallout>

        <h2 id="pourquoi">Pourquoi les horaires atypiques sont si fréquents en propreté</h2>
        <p>
          La prestation de nettoyage s&apos;effectue le plus souvent en dehors des heures de présence des
          occupants, pour ne pas gêner l&apos;activité du site. Cela conduit structurellement à des
          interventions très matinales, tardives ou de week-end, qui relèvent fréquemment du travail de nuit,
          du dimanche ou des jours fériés. Ces sujétions ont un coût : elles s&apos;ajoutent au salaire de
          base et doivent être anticipées dès la réponse à l&apos;appel d&apos;offres, faute de quoi la marge
          s&apos;érode.
        </p>

        <h2 id="majorations">Les majorations en un coup d&apos;œil</h2>
        <p>
          Le tableau ci-dessous synthétise les majorations indicatives pour les principales situations
          d&apos;horaires atypiques, illustrées sur un taux de base de 12,46 €/h (AS2).
        </p>
        <FactTable
          caption="Majorations indicatives pour horaires atypiques (sur un taux de base de 12,46 €/h)"
          headers={["Situation", "Majoration indicative", "Taux horaire majoré", "Contrepartie possible"]}
          rows={[
            ["Heures de nuit (21 h – 6 h)", "+ 20 %", "≈ 14,95 €", "Majoration et/ou repos"],
            ["Travail du dimanche", "+ 20 %", "≈ 14,95 €", "Majoration et/ou repos"],
            ["Jour férié travaillé", "+ 100 %", "≈ 24,92 €", "Majoration ou récupération"],
            ["1er Mai travaillé", "+ 100 %", "≈ 24,92 €", "Majoration légale spécifique"],
          ]}
        />
        <p>
          Ces taux sont des repères : la convention de branche, un accord d&apos;entreprise ou le contrat
          peuvent prévoir des majorations plus favorables, et la contrepartie peut prendre la forme d&apos;un
          repos compensateur plutôt que d&apos;une majoration de salaire. Lorsqu&apos;une part importante des
          heures est réalisée en horaires atypiques, ces majorations se cumulent éventuellement avec les{" "}
          <a href="/reglementation/heures-supplementaires-proprete">heures supplémentaires</a>.
        </p>

        <KeyTakeaways
          items={[
            "Le travail de nuit correspond à titre indicatif à la plage 21 h – 6 h ; la définition précise relève du Code du travail et des accords applicables.",
            "Nuit et dimanche ouvrent droit à une contrepartie (majoration de l'ordre de 20 % et/ou repos compensateur) ; un férié travaillé est souvent majoré jusqu'à 100 %.",
            "Le 1er Mai chômé est payé ; travaillé, il donne droit à une majoration légale spécifique.",
            "Les travailleurs de nuit bénéficient d'un suivi médical renforcé et de durées maximales de travail spécifiques.",
            "Les majorations s'ajoutent au salaire de base et, parfois, aux heures supplémentaires : un point clé du coût de revient.",
            "Les taux exacts dépendent de la convention IDCC 3043 et des accords d'entreprise, à vérifier à la date de paie.",
          ]}
        />

        <h2 id="nuit">Travail de nuit</h2>
        <p>
          Le travail de nuit obéit à un encadrement strict car il présente des risques pour la santé. Trois
          dimensions doivent être maîtrisées : la définition, les contreparties et la surveillance médicale.
        </p>

        <DefinitionBox term="Travail de nuit">
          À titre indicatif, tout travail effectué entre 21 h et 6 h. La période de nuit exacte et le seuil
          d&apos;heures conférant le statut de « travailleur de nuit » sont fixés par le Code du travail et les
          accords applicables, qui peuvent décaler la plage dans les limites légales.
        </DefinitionBox>

        <h3>Contreparties</h3>
        <p>
          Les heures de nuit ouvrent droit à une contrepartie, qui peut prendre la forme d&apos;une{" "}
          <strong>majoration de salaire</strong> (de l&apos;ordre de 20 % à titre indicatif), d&apos;un{" "}
          <strong>repos compensateur</strong>, ou des deux à la fois. La nature et le niveau de la
          contrepartie dépendent de la convention collective et des accords d&apos;entreprise. Le statut de
          travailleur de nuit, lorsqu&apos;il est atteint, ouvre des droits supplémentaires (repos
          spécifiques, priorité d&apos;accès à un poste de jour).
        </p>

        <h3>Surveillance médicale et durées maximales</h3>
        <p>
          Le travailleur de nuit bénéficie d&apos;un <strong>suivi médical renforcé</strong> : visite
          d&apos;information et de prévention avant l&apos;affectation, puis suivi régulier par le service de
          prévention et de santé au travail. L&apos;employeur doit en outre respecter des{" "}
          <strong>durées maximales</strong> de travail de nuit et des temps de repos spécifiques. Le non-respect
          de ces obligations engage sa responsabilité.
        </p>

        <h2 id="dimanche">Travail du dimanche</h2>
        <p>
          Le repos hebdomadaire est en principe donné le dimanche, mais le secteur de la propreté bénéficie de
          dérogations qui permettent l&apos;intervention dominicale, notamment sur les sites fonctionnant le
          week-end. Le travail du dimanche ouvre alors droit à une <strong>majoration</strong> (de l&apos;ordre
          de 20 % à titre indicatif) et, selon les cas, à un repos compensateur. L&apos;employeur doit veiller
          à garantir au salarié le repos hebdomadaire prévu par la loi et à organiser le roulement des équipes
          en conséquence.
        </p>
        <InfoCallout title="Bon à savoir">
          Majoration de salaire et repos compensateur ne sont pas exclusifs l&apos;un de l&apos;autre :
          certaines dispositions prévoient les deux. Il faut lire la convention collective et l&apos;éventuel
          accord d&apos;entreprise pour connaître la combinaison applicable.
        </InfoCallout>

        <h2 id="feries">Jours fériés</h2>
        <p>
          Le traitement des jours fériés combine règles légales et conventionnelles. Deux situations doivent
          être distinguées.
        </p>
        <ul>
          <li>
            <strong>Jour férié chômé.</strong> Lorsque le jour férié n&apos;est pas travaillé, son paiement
            dépend des conditions d&apos;ancienneté et des dispositions conventionnelles. Le 1er Mai chômé est,
            lui, légalement payé.
          </li>
          <li>
            <strong>Jour férié travaillé.</strong> Il donne en principe lieu à une <strong>majoration</strong>{" "}
            (souvent de l&apos;ordre de 100 % à titre indicatif pour le 1er Mai, et selon les dispositions
            conventionnelles pour les autres fériés) ou à une <strong>récupération</strong>.
          </li>
        </ul>
        <FactTable
          caption="Jours fériés : traitement indicatif"
          headers={["Situation", "Traitement indicatif", "À vérifier"]}
          rows={[
            ["Férié chômé (hors 1er Mai)", "Paiement selon ancienneté / convention", "Convention collective"],
            ["1er Mai chômé", "Payé (règle légale)", "Code du travail"],
            ["Férié travaillé", "Majoration ou récupération", "Convention + accords"],
            ["1er Mai travaillé", "Majoration légale spécifique", "Code du travail"],
          ]}
        />

        <h2 id="cumul">Cumul des majorations et exemple de paie</h2>
        <p>
          En pratique, plusieurs majorations peuvent se cumuler sur une même période : une heure de dimanche
          peut aussi être une heure de nuit, et une heure réalisée au-delà de la durée légale peut relever des
          heures supplémentaires. Les règles de cumul (et notamment l&apos;ordre d&apos;application des
          majorations) doivent être vérifiées dans la convention et les accords. À titre d&apos;illustration,
          pour un AS2 au taux de base de 12,46 €/h :
        </p>
        <FactTable
          caption="Exemple indicatif de valorisation d'heures atypiques (base 12,46 €/h)"
          headers={["Heures réalisées", "Majoration appliquée", "Valeur de l'heure", "Total"]}
          rows={[
            ["8 h de nuit en semaine", "+ 20 %", "14,95 €", "≈ 119,62 €"],
            ["6 h le dimanche", "+ 20 %", "14,95 €", "≈ 89,71 €"],
            ["7 h un jour férié", "+ 100 %", "24,92 €", "≈ 174,44 €"],
          ]}
        />
        <p>
          Ces montants illustratifs montrent l&apos;impact des horaires atypiques sur la masse salariale. Pour
          un dirigeant, c&apos;est le <strong>coût chargé</strong> intégrant ces majorations qui doit servir de
          base au tarif facturé, afin de préserver la marge sur les chantiers à forte composante nuit, dimanche
          ou férié.
        </p>

        <h2 id="obligations">Obligations de l&apos;employeur</h2>
        <ul>
          <li>
            <strong>Respecter les contreparties.</strong> Appliquer les majorations et/ou repos prévus par la
            convention et les accords pour chaque situation (nuit, dimanche, férié).
          </li>
          <li>
            <strong>Garantir les repos.</strong> Repos quotidien, repos hebdomadaire et repos spécifiques aux
            travailleurs de nuit doivent être respectés.
          </li>
          <li>
            <strong>Organiser le suivi médical.</strong> Assurer le suivi renforcé des travailleurs de nuit
            auprès du service de prévention et de santé au travail.
          </li>
          <li>
            <strong>Tracer les heures.</strong> Décompter précisément les heures de nuit, de dimanche et de
            férié, en lien avec le suivi des{" "}
            <a href="/reglementation/heures-supplementaires-proprete">heures supplémentaires</a>.
          </li>
          <li>
            <strong>Sécuriser la paie.</strong> Croiser le décompte des heures atypiques avec la{" "}
            <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire</a> et les taux de
            majoration applicables pour éviter tout rappel.
          </li>
        </ul>

        <SourcesBox sources={SOURCES.tempsTravail} />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Chiffrez l&apos;impact des horaires atypiques
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Intégrez nuit, dimanche et fériés dans le coût horaire chargé pour fixer des tarifs qui préservent
            votre marge.
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
