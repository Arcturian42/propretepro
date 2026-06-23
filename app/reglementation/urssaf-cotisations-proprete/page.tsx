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
import { AUTHORS, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/urssaf-cotisations-proprete";
const author = AUTHORS["claire-vidal"];
const datePublished = "2026-02-15";
const dateModified = "2026-06-10";
const readMinutes = 11;

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Cotisations URSSAF", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "structure", label: "Structure des cotisations" },
  { id: "grandes-cotisations", label: "Les grandes cotisations" },
  { id: "reduction", label: "Réduction générale (ex-Fillon)" },
  { id: "atmp", label: "Taux AT/MP du secteur" },
  { id: "dsn", label: "La DSN" },
  { id: "allegements", label: "Allègements et exonérations" },
  { id: "controle", label: "Contrôle URSSAF" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Cotisations URSSAF dans la propreté : taux, réduction générale et DSN",
  description:
    "Cotisations sociales dans la propreté : taux de cotisations URSSAF, réduction générale (ex-Fillon), taux AT/MP du secteur du nettoyage et déclarations DSN. Repères pour fiabiliser la paie.",
  path: PATH,
  type: "article",
  publishedTime: datePublished,
  modifiedTime: dateModified,
  authors: [author.name],
  keywords: [
    "cotisations URSSAF propreté",
    "réduction générale Fillon",
    "taux AT/MP nettoyage",
    "DSN propreté",
    "charges sociales propreté",
  ],
});

const FAQ = [
  {
    question: "Quel est le taux de charges sociales dans la propreté ?",
    answer:
      "Les cotisations patronales représentent, avant allègements, de l'ordre de 40 à 45 % du salaire brut, et les cotisations salariales environ 22 %. Dans la propreté, où les rémunérations sont proches du SMIC, la réduction générale de cotisations patronales réduit fortement la charge réelle, ce qui ramène le taux patronal effectif bien en dessous de ce niveau pour les bas salaires.",
  },
  {
    question: "Qu'est-ce que la réduction générale (ex-Fillon) ?",
    answer:
      "La réduction générale de cotisations patronales, anciennement appelée réduction Fillon, allège les cotisations patronales sur les rémunérations inférieures à 1,6 SMIC. Maximale au niveau du SMIC, elle décroît à mesure que le salaire augmente et s'annule à 1,6 SMIC. C'est un dispositif structurant pour la propreté, secteur à forte intensité de main-d'œuvre payée près du minimum.",
  },
  {
    question: "Le taux AT/MP est-il spécifique à la propreté ?",
    answer:
      "Oui. Le taux de cotisation accidents du travail / maladies professionnelles (AT/MP) est fixé par l'Assurance maladie en fonction de la sinistralité de l'activité. Le nettoyage, exposé aux troubles musculo-squelettiques et aux chutes, présente un taux notifié propre à chaque établissement (ou un taux collectif selon l'effectif), généralement plus élevé que la moyenne tertiaire.",
  },
  {
    question: "Comment déclarer les cotisations dans la propreté ?",
    answer:
      "Les cotisations sont déclarées et payées via la déclaration sociale nominative (DSN), transmise mensuellement à partir des données de paie. La DSN regroupe l'ensemble des déclarations sociales (URSSAF, retraite, prévoyance, France Travail) et alimente les organismes à partir d'un fichier unique généré par le logiciel de paie.",
  },
  {
    question: "Comment est calculé le taux AT/MP dans le nettoyage ?",
    answer:
      "Le taux AT/MP est notifié chaque année par la Carsat à partir d'un code risque correspondant à l'activité de nettoyage. Selon l'effectif de l'entreprise, le taux est collectif (petits effectifs), mixte ou individuel (gros effectifs) : plus l'entreprise est grande, plus son taux reflète directement sa propre sinistralité (accidents déclarés, maladies professionnelles, coûts associés). Investir dans la prévention et faire baisser la sinistralité réduit donc mécaniquement ce taux d'une année sur l'autre.",
  },
  {
    question: "La réduction générale s'applique-t-elle aux temps partiels ?",
    answer:
      "Oui. La réduction générale s'applique à tous les contrats relevant de l'assurance chômage, y compris les temps partiels très répandus dans la propreté. Le calcul est proratisé en fonction de la durée de travail rémunérée sur le mois : un agent à temps partiel payé au SMIC ouvre droit à la réduction sur la base de ses heures réelles. C'est précisément cette population qui bénéficie le plus de l'allègement.",
  },
  {
    question: "Quand faut-il déclarer la DSN ?",
    answer:
      "La DSN mensuelle est exigible le 5 du mois suivant pour les employeurs d'au moins 50 salariés payés au cours du mois, et le 15 du mois suivant pour les autres. Ces échéances conditionnent aussi le paiement des cotisations. Tout retard ou anomalie peut entraîner des majorations : la fiabilité du logiciel de paie et le respect du calendrier sont des points de vigilance pour un secteur à effectifs importants et mouvants.",
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
            description:
              "Cotisations sociales dans la propreté : taux URSSAF, réduction générale (ex-Fillon), taux AT/MP du secteur et déclarations DSN.",
            path: PATH,
            datePublished,
            dateModified,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Réglementation · Cotisations sociales"
        title="Cotisations URSSAF dans la propreté"
        intro="Taux de cotisations sociales, réduction générale (ex-Fillon), taux AT/MP du nettoyage et déclarations DSN : les repères pour fiabiliser la paie et le coût du travail dans la propreté."
        author={author}
        datePublished={datePublished}
        dateModified={dateModified}
        readMinutes={readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Dans la propreté, les <strong>cotisations sociales</strong> se composent d&apos;une part
          patronale (de l&apos;ordre de 40 à 45 % du brut avant allègements) et d&apos;une part
          salariale (environ 22 %). Le secteur étant à bas salaires, la{" "}
          <strong>réduction générale</strong> (ex-Fillon) abaisse fortement la charge patronale au
          niveau du SMIC. Un <strong>taux AT/MP</strong> propre au nettoyage s&apos;y ajoute, et toutes
          les cotisations sont déclarées via la <strong>DSN</strong> mensuelle.
        </AnswerBox>

        <p>
          La main-d&apos;œuvre représente l&apos;essentiel du coût d&apos;une prestation de nettoyage.
          Comprendre la structure des cotisations URSSAF est donc indispensable pour fiabiliser la paie,
          calculer le coût horaire chargé d&apos;un agent et fixer ses prix avec marge. Cette page
          synthétise les principaux taux, le mécanisme d&apos;allègement et les obligations
          déclaratives.
        </p>

        <DefinitionBox term="Cotisations sociales">
          Prélèvements assis sur le salaire brut, destinés à financer la protection sociale (maladie,
          retraite, famille, chômage, accidents du travail). Elles se répartissent entre cotisations
          patronales (à la charge de l&apos;employeur) et cotisations salariales (déduites du salaire du
          salarié), et sont collectées principalement par l&apos;URSSAF.
        </DefinitionBox>

        <h2 id="structure">Structure des cotisations</h2>
        <p>
          Le salaire brut sert de base à un ensemble de cotisations réparties entre l&apos;employeur et
          le salarié : assurance maladie, vieillesse, allocations familiales, assurance chômage,
          retraite complémentaire, CSG/CRDS et cotisation AT/MP. S&apos;y ajoutent, dans la propreté,
          les contributions au régime de prévoyance et à la complémentaire santé de branche, prévues par
          la <a href="/reglementation/convention-collective-proprete-idcc-3043">convention collective
          (IDCC 3043)</a>. Schématiquement, le coût du travail se lit en trois temps : le salaire brut,
          le brut majoré des cotisations patronales pour obtenir le <strong>coût employeur</strong>, et le
          brut diminué des cotisations salariales pour obtenir le <strong>net</strong> versé à
          l&apos;agent.
        </p>
        <p>
          Dans un secteur où la masse salariale représente souvent 70 à 80 % du chiffre d&apos;affaires,
          chaque point de cotisation pèse sur la rentabilité d&apos;un chantier. Maîtriser cette mécanique
          est donc autant un enjeu de conformité que de pilotage économique : le coût horaire chargé d&apos;un
          agent, base de tout devis, découle directement de ces taux et des allègements applicables.
        </p>

        <h2 id="grandes-cotisations">Les grandes cotisations sur le bulletin</h2>
        <p>
          Plusieurs grandes familles de cotisations se cumulent sur la fiche de paie. L&apos;assurance
          maladie et la branche famille (<strong>allocations familiales</strong>) sont à la seule charge
          de l&apos;employeur ; leur taux est réduit pour les rémunérations basses, ce qui profite à la
          propreté. L&apos;<strong>assurance vieillesse</strong> comporte une part plafonnée (jusqu&apos;au
          plafond de la Sécurité sociale) et une part déplafonnée (sur la totalité du salaire), réparties
          entre employeur et salarié. L&apos;<strong>assurance chômage</strong> est patronale, tandis que
          la <strong>retraite complémentaire Agirc-Arrco</strong> et la <strong>CSG/CRDS</strong> viennent
          compléter le prélèvement, cette dernière étant calculée sur une assiette légèrement réduite.
        </p>
        <FactTable
          caption="Principales cotisations sur salaire brut (taux indicatifs, hors allègements)"
          headers={["Cotisation", "Part patronale", "Part salariale"]}
          rows={[
            ["Assurance maladie", "≈ 7 % à 13 %", "—"],
            ["Assurance vieillesse (plafonnée + déplafonnée)", "≈ 8,55 % + 2,02 %", "≈ 6,90 % + 0,40 %"],
            ["Allocations familiales", "≈ 3,45 % à 5,25 %", "—"],
            ["Assurance chômage", "≈ 4,05 %", "—"],
            ["Retraite complémentaire (Agirc-Arrco)", "≈ 4,72 %+", "≈ 3,15 %+"],
            ["CSG / CRDS", "—", "≈ 9,70 % (sur base réduite)"],
            ["AT/MP", "Taux notifié (variable)", "—"],
          ]}
        />
        <InfoCallout title="Des taux à confirmer">
          Les taux ci-dessus sont des ordres de grandeur et susceptibles d&apos;évoluer chaque année. Le
          taux exact, les seuils de plafond et les bandes (réduites, déplafonnées) doivent être vérifiés
          sur <strong>urssaf.fr</strong> ou auprès de votre logiciel de paie à jour avant tout calcul
          opposable.
        </InfoCallout>
        <p>
          Cumulées, ces cotisations expliquent l&apos;écart important entre le net perçu par l&apos;agent
          et le coût réel supporté par l&apos;entreprise. C&apos;est cet écart, plus que le seul taux
          horaire, qu&apos;il faut intégrer pour bâtir des prix justes : un agent payé au minimum
          conventionnel coûte sensiblement plus que son brut une fois les charges patronales ajoutées —
          avant que la réduction générale ne vienne corriger ce coût à la baisse.
        </p>

        <h2 id="reduction">La réduction générale de cotisations patronales (ex-Fillon)</h2>
        <p>
          Pivot du coût du travail dans la propreté, la <strong>réduction générale de cotisations
          patronales</strong>, anciennement <strong>réduction Fillon</strong>, allège la charge patronale
          sur les rémunérations inférieures à <strong>1,6 SMIC</strong>. Son principe : un coefficient
          de réduction, <strong>maximal au niveau du SMIC</strong>, décroît à mesure que le salaire
          augmente et s&apos;annule à 1,6 SMIC. Concrètement, au niveau du SMIC, une large fraction des
          cotisations patronales (maladie, famille, vieillesse, chômage, retraite complémentaire, voire
          partie du taux AT/MP) est annulée.
        </p>
        <p>
          Comme une part majoritaire des agents de la propreté est rémunérée au minimum conventionnel ou
          tout près, ce dispositif s&apos;applique massivement et abaisse fortement le taux patronal
          <strong> effectif</strong> du secteur : il peut tomber à quelques points seulement au niveau du
          SMIC, contre 40 à 45 % en théorie. Comprendre où se situent ses agents sur la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire 2026</a> permet donc
          d&apos;anticiper précisément le coût chargé réel d&apos;un chantier et de ne pas surestimer ses
          charges dans un devis.
        </p>

        <h2 id="atmp">Taux AT/MP du secteur propreté</h2>
        <p>
          Le taux <strong>AT/MP</strong> (accidents du travail / maladies professionnelles) est notifié
          chaque année par la Carsat à partir d&apos;un <strong>code risque</strong> propre à
          l&apos;activité de nettoyage. Son mode de calcul dépend de l&apos;effectif : <strong>taux
          collectif</strong> pour les petits effectifs, <strong>taux mixte</strong> pour les effectifs
          intermédiaires, et <strong>taux individuel</strong> pour les grandes entreprises, qui reflète
          alors directement leur propre sinistralité (accidents et maladies professionnelles déclarés,
          coûts associés).
        </p>
        <p>
          Le nettoyage, exposé aux <strong>troubles musculo-squelettiques</strong>, aux chutes de
          plain-pied et au contact avec les produits, présente une sinistralité supérieure à la moyenne du
          tertiaire : son taux pèse donc davantage sur le coût du travail. Bonne nouvelle pour les
          dirigeants : ce taux est l&apos;une des rares composantes <strong>maîtrisables</strong>. Investir
          dans la formation aux gestes et postures, le matériel ergonomique, l&apos;organisation du travail
          et le suivi des accidents fait baisser la sinistralité — et donc le taux notifié les années
          suivantes. La prévention est ici un levier de coût autant qu&apos;un enjeu social.
        </p>

        <h2 id="dsn">La DSN (Déclaration Sociale Nominative)</h2>
        <p>
          La <strong>déclaration sociale nominative (DSN)</strong> est le canal unique de déclaration des
          cotisations. Générée <strong>mensuellement</strong> par le logiciel de paie à partir des données
          individuelles des salariés, elle <strong>remplace</strong> la quasi-totalité des anciennes
          déclarations sociales (DUCS, DADS, attestations employeur, déclarations de prévoyance) et
          alimente d&apos;un seul fichier l&apos;URSSAF, les caisses de retraite Agirc-Arrco, les
          organismes de prévoyance et France Travail.
        </p>
        <p>
          Côté échéances, la DSN est exigible le <strong>5 du mois suivant</strong> pour les employeurs
          d&apos;au moins 50 salariés et le <strong>15</strong> pour les autres ; ces dates conditionnent
          aussi le paiement des cotisations. Dans la propreté, plusieurs points de vigilance s&apos;imposent.
          Les situations de <strong>multi-employeurs</strong> sont fréquentes : un même agent peut cumuler
          plusieurs contrats à temps partiel, ce qui impose une déclaration rigoureuse par établissement.
          Le <strong>temps partiel</strong> généralisé exige un suivi précis des heures réelles, des
          compléments d&apos;heures et des absences. Enfin, les <a href="/reglementation/transfert-personnel-annexe-7-proprete">transferts
          de personnel (annexe 7)</a> lors d&apos;une reprise de marché doivent être déclarés sans rupture
          de droits. La fiabilité de la DSN dépend directement de l&apos;exactitude des paramètres de paie :
          classification, taux horaire, heures, primes et taux AT/MP.
        </p>

        <h2 id="allegements">Allègements et exonérations utiles</h2>
        <p>
          Au-delà de la réduction générale, plusieurs dispositifs peuvent alléger le coût du travail dans
          la propreté. L&apos;<strong>apprentissage</strong> et les contrats en alternance ouvrent droit à
          des aides à l&apos;embauche et à un régime social favorable, utiles pour former et fidéliser des
          chefs d&apos;équipe ou agents qualifiés dans un secteur en tension de recrutement. Selon
          l&apos;implantation des chantiers, des dispositifs zonés comme les <strong>ZRR</strong> (zones de
          revitalisation rurale) ou certains quartiers prioritaires peuvent, le cas échéant, ouvrir des
          exonérations spécifiques.
        </p>
        <InfoCallout title="Cumul et conditions">
          Ces dispositifs obéissent à des conditions strictes (zonage, type de contrat, plafonds) et leurs
          règles de cumul avec la réduction générale évoluent. Avant d&apos;intégrer un allègement dans un
          calcul de coût, validez son éligibilité sur <strong>urssaf.fr</strong> ou auprès d&apos;un expert
          paie : un allègement mal appliqué se transforme en redressement lors d&apos;un contrôle.
        </InfoCallout>
        <KeyTakeaways
          items={[
            "Cotisations patronales d'environ 40 à 45 % et salariales d'environ 22 % du brut, avant allègements.",
            "La réduction générale (ex-Fillon) est maximale au SMIC et s'annule à 1,6 SMIC : elle s'applique massivement dans la propreté, temps partiels inclus.",
            "Le coût employeur réel d'un agent au minimum conventionnel est bien inférieur aux taux théoriques une fois la réduction générale appliquée.",
            "Le taux AT/MP du nettoyage est notifié individuellement, souvent supérieur à la moyenne tertiaire, mais maîtrisable par la prévention.",
            "La DSN mensuelle remplace les anciennes déclarations et exige une rigueur particulière sur le temps partiel et le multi-employeurs.",
            "Apprentissage et dispositifs zonés (ZRR) peuvent compléter les allègements, sous conditions à vérifier sur urssaf.fr.",
          ]}
        />

        <h2 id="controle">Contrôle URSSAF</h2>
        <p>
          Le secteur, à forte intensité de main-d&apos;œuvre, fait l&apos;objet d&apos;une attention
          particulière de l&apos;URSSAF (travail dissimulé, sous-traitance, application des minima).
          Tenir à jour les classifications conformes à la{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">grille de classification</a> et
          respecter la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire en vigueur</a>{" "}
          constitue la première ligne de défense en cas de contrôle, avec une DSN cohérente.
        </p>

        <SourcesBox sources={SOURCES.cotisations} />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Calculez le coût chargé réel d&apos;un agent
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Intégrez salaire, charges et réduction générale pour fixer vos prix avec marge.
          </p>
          <div className="mt-4">
            <Button href="/tarifs/nettoyage-bureaux-m2" variant="primary">
              Voir les prix du nettoyage de bureaux
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
