import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, datasetSchema } from "@/lib/schema";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { SOURCES } from "@/lib/sources";
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

const PATH = "/tarifs/prix-nettoyage-ecole-collectivite";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const related = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage écoles et collectivités", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "fourchettes", label: "Prix au m² par établissement" },
  { id: "contraintes", label: "Contraintes spécifiques" },
  { id: "marches-publics", label: "Marchés publics et appels d'offres" },
  { id: "facteurs", label: "Facteurs qui influencent le prix" },
  { id: "definition", label: "Bionettoyage et hygiène renforcée" },
  { id: "budget", label: "Estimer un budget" },
  { id: "challenger-devis", label: "Décomposer un devis" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage d'écoles et de collectivités au m² en 2026",
  description:
    "Prix du nettoyage d'écoles, crèches et bâtiments de collectivités en 2026 : 0,45 à 0,90 €/m² par passage selon l'établissement. Contraintes d'hygiène, horaires hors présence des enfants et règles des marchés publics.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix nettoyage école",
    "tarif nettoyage collectivité",
    "prix nettoyage crèche m2",
    "nettoyage écoles marché public",
    "coût nettoyage établissement scolaire",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage d'une école au m² en 2026 ?",
    answer:
      "Le prix du nettoyage d'une école se situe généralement entre 0,50 et 0,80 € par m² et par passage en 2026, hors taxes, pour un entretien quotidien en période scolaire. Les crèches, soumises à une hygiène renforcée et à une désinfection plus poussée des points de contact, montent souvent de 0,60 à 0,90 €/m². Ces fourchettes supposent un nettoyage hors présence des enfants, condition qui structure l'organisation et donc le coût.",
  },
  {
    question: "Pourquoi le nettoyage d'une crèche coûte-t-il plus cher qu'une école ?",
    answer:
      "Une crèche accueille de très jeunes enfants au système immunitaire fragile, en contact direct avec le sol et le mobilier. Le protocole impose une désinfection fréquente des surfaces de contact, des sanitaires, des tables de change et du matériel de couchage, avec des produits adaptés et une traçabilité. Cette intensité d'intervention rallonge le temps de présence au m², ce qui explique un prix unitaire supérieur à celui d'une école élémentaire classique.",
  },
  {
    question: "À quels horaires se fait le nettoyage des écoles ?",
    answer:
      "Le nettoyage des locaux scolaires se réalise presque toujours hors présence des enfants : tôt le matin avant l'ouverture, en soirée après la classe, ou pendant les vacances pour les remises en état. Ces plages décalées entraînent des majorations conventionnelles (matinée précoce, soirée) qui se répercutent sur le tarif. La contrainte horaire est un facteur de coût autant qu'une exigence de sécurité.",
  },
  {
    question: "Comment fonctionne un marché public de nettoyage scolaire ?",
    answer:
      "Une collectivité (commune, intercommunalité, conseil départemental ou régional) qui externalise le nettoyage de ses bâtiments passe par un marché public dès lors que le montant dépasse les seuils de la commande publique. La consultation s'appuie sur un cahier des clauses techniques (CCTP) qui détaille surfaces, fréquences et protocoles. Le prix n'est qu'un critère parmi d'autres : la valeur technique, l'insertion et le développement durable pèsent souvent autant, voire davantage, dans l'attribution.",
  },
  {
    question: "La TVA s'applique-t-elle au nettoyage des bâtiments de collectivités ?",
    answer:
      "Oui. Les prestations de nettoyage relèvent du taux normal de TVA à 20 %, y compris pour les écoles et bâtiments publics. Les collectivités la récupèrent en partie via le FCTVA selon les cas, mais le prestataire facture toujours en HT puis ajoute la TVA. Les prix indicatifs de cette page sont exprimés hors taxes.",
  },
  {
    question: "Quelle fréquence de nettoyage prévoir pour une école ?",
    answer:
      "Les locaux à forte fréquentation (salles de classe, sanitaires, réfectoire, circulations) sont nettoyés quotidiennement pendant les jours d'école. Les sanitaires font souvent l'objet de passages renforcés ou d'un contrôle en cours de journée. À cela s'ajoutent des prestations périodiques : vitrerie, désinfection approfondie, remise en état des sols pendant les vacances scolaires. C'est cette combinaison d'un quotidien dense et de gros entretiens saisonniers qui détermine le budget annuel.",
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
            name: "Prix du nettoyage d'école et de collectivité en 2026 (France)",
            description:
              "Fourchettes de prix HT au m² par passage du nettoyage d'écoles, crèches et bâtiments de collectivités sur le marché français en 2026, par type d'établissement.",
            path: PATH,
            dateModified: article.dateModified,
            temporalCoverage: "2026",
            keywords: ["prix nettoyage école", "tarif nettoyage collectivité", "nettoyage crèche"],
            variables: ["Type d'établissement", "Prix / m² / passage", "Fréquence type"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Écoles & collectivités"
        title="Prix du nettoyage d'écoles et de collectivités au m² en 2026"
        intro="Combien coûte le nettoyage d'une école, d'une crèche ou d'un bâtiment public ? Fourchettes de prix au m² par type d'établissement, contraintes d'hygiène et règles des marchés publics pour cadrer un budget juste."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage d&apos;écoles et de bâtiments de collectivités coûte en moyenne{" "}
          <strong>0,45 à 0,90 € par m² et par passage</strong> (HT), selon le type
          d&apos;établissement. Une <strong>école élémentaire</strong> se situe autour de 0,50 à
          0,80 €/m² en entretien quotidien ; une <strong>crèche</strong> grimpe à 0,60 à 0,90 €/m²
          du fait de l&apos;hygiène renforcée. Le prix intègre des contraintes fortes : nettoyage
          hors présence des enfants, désinfection des points de contact et exigences des marchés
          publics. La TVA à 20 % s&apos;ajoute aux prix affichés hors taxes.
        </AnswerBox>

        <p>
          Le nettoyage des établissements recevant des enfants n&apos;a rien d&apos;un nettoyage de
          bureaux classique. L&apos;enjeu sanitaire y est central : un local mal désinfecté favorise
          la circulation des infections dans une population vulnérable. Pour un dirigeant
          d&apos;entreprise de propreté comme pour un acheteur public, comprendre la structure de
          prix de ces marchés est indispensable pour chiffrer juste et défendre une offre crédible.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. Ils servent à cadrer un budget et à challenger un devis, pas à remplacer un
          chiffrage ferme établi après visite technique et lecture du cahier des charges.
        </InfoCallout>

        <h2 id="fourchettes">Prix au m² par type d&apos;établissement</h2>
        <p>
          Les établissements de collectivités ne se nettoient pas tous au même rythme ni avec la
          même intensité. Plus la population accueillie est jeune et vulnérable, plus le protocole
          de désinfection est exigeant, et plus le prix au m² monte. À l&apos;inverse, un bâtiment
          administratif s&apos;apparente à du tertiaire et reste dans des fourchettes plus basses.
        </p>

        <FactTable
          caption="Prix indicatif du nettoyage par type d'établissement (HT) — 2026"
          headers={["Type d'établissement", "Prix / m² / passage", "Fréquence type"]}
          rows={[
            ["Crèche / halte-garderie", "0,60 – 0,90 €", "Quotidien renforcé"],
            ["École maternelle", "0,55 – 0,85 €", "Quotidien"],
            ["École élémentaire", "0,50 – 0,80 €", "Quotidien"],
            ["Collège / lycée", "0,45 – 0,70 €", "Quotidien"],
            ["Bâtiment administratif", "0,35 – 0,55 €", "2 à 5x / semaine"],
            ["Gymnase / salle des sports", "0,40 – 0,65 €", "Variable"],
          ]}
        />
        <p>
          La crèche et la maternelle sont les plus chères au m² : sols nettoyés et désinfectés
          chaque jour, tables de change, jeux et mobilier au contact direct des enfants, sanitaires
          adaptés. Les collèges et lycées, où les élèves sont plus autonomes, retrouvent des
          cadences proches de celles de grands locaux tertiaires cloisonnés.
        </p>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Plus le public accueilli est jeune et vulnérable, plus le protocole de désinfection est
          exigeant : c&apos;est ce qui fait grimper le prix au m² d&apos;une crèche ou d&apos;une
          maternelle au-dessus de celui d&apos;un collège.
        </PullQuote>

        <h2 id="contraintes">Les contraintes spécifiques qui font le prix</h2>
        <p>
          Le surcoût des établissements scolaires et de collectivités ne tient pas au hasard : il
          répond à un cumul de contraintes opérationnelles et sanitaires absentes du tertiaire
          ordinaire.
        </p>
        <ul>
          <li>
            <strong>Hygiène renforcée</strong> : désinfection quotidienne des surfaces de contact
            (poignées, interrupteurs, tables, rampes), des sanitaires et du mobilier de proximité,
            avec des produits adaptés à un public d&apos;enfants.
          </li>
          <li>
            <strong>Horaires hors présence des enfants</strong> : interventions tôt le matin, en
            soirée ou pendant les vacances, ce qui génère des majorations et complique
            l&apos;organisation des équipes.
          </li>
          <li>
            <strong>Désinfection des points de contact</strong> : protocole spécifique en période
            épidémique (gastro-entérite, grippe), avec passages supplémentaires et traçabilité.
          </li>
          <li>
            <strong>Saisonnalité scolaire</strong> : un quotidien dense en période de classe, des
            remises en état (sols, vitrerie, grand ménage) concentrées sur les vacances.
          </li>
          <li>
            <strong>Sécurité et habilitations</strong> : personnel formé, produits stockés hors de
            portée, vérification des accès dans des bâtiments accueillant des mineurs.
          </li>
        </ul>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Sur un marché scolaire, le prix au m² le plus bas n&apos;est presque jamais le plus
          intéressant : ce qui se paie, c&apos;est la régularité de la désinfection et la fiabilité
          des équipes hors présence des enfants.
        </PullQuote>

        <h2 id="marches-publics">Marchés publics et appels d&apos;offres</h2>
        <p>
          La grande spécificité de ce segment est que l&apos;acheteur est le plus souvent une
          collectivité publique. Dès que le montant dépasse les seuils de la commande publique, le
          nettoyage des écoles et bâtiments municipaux passe par un <strong>appel d&apos;offres</strong>{" "}
          encadré par un cahier des clauses techniques particulières (CCTP).
        </p>
        <ul>
          <li>
            <strong>Le prix n&apos;est qu&apos;un critère</strong> : la valeur technique (méthode,
            encadrement, protocoles), l&apos;insertion professionnelle et les engagements
            environnementaux pèsent souvent autant que le tarif dans la note finale.
          </li>
          <li>
            <strong>Le CCTP cadre tout</strong> : surfaces, fréquences, prestations périodiques et
            niveaux d&apos;exigence sont détaillés ; le chiffrage doit coller au cahier des charges,
            sans sous-estimer les remises en état de vacances.
          </li>
          <li>
            <strong>Des bordereaux de prix unitaires</strong> : la collectivité demande souvent un
            prix au m² ou à l&apos;heure ventilé par type de local, ce qui rend la transparence du
            coût de revient déterminante.
          </li>
        </ul>
        <InfoCallout title="Répondre à un marché scolaire">
          Un chiffrage de marché public se construit à partir du coût de revient réel des agents,
          majorations horaires comprises, puis d&apos;une marge soutenable. Sous-évaluer pour
          remporter le marché expose à une exécution déficitaire que les pénalités du CCTP
          aggravent.
        </InfoCallout>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <p>
          À type d&apos;établissement et surface comparables, plusieurs leviers font diverger les
          devis et les chiffrages de marché :
        </p>
        <ul>
          <li>
            <strong>Le niveau de désinfection exigé</strong> : un protocole de bionettoyage renforcé
            mobilise plus de temps et de produits qu&apos;un entretien courant.
          </li>
          <li>
            <strong>Les plages horaires</strong> : interventions matinales, en soirée ou le week-end
            entraînent des majorations conventionnelles.
          </li>
          <li>
            <strong>La configuration des locaux</strong> : sanitaires nombreux, mobilier dense,
            sols spécifiques (sols souples, parquet de gymnase) ralentissent la cadence.
          </li>
          <li>
            <strong>Les prestations périodiques</strong> : vitrerie, remise en état des sols et
            grand ménage de vacances s&apos;ajoutent au quotidien.
          </li>
          <li>
            <strong>La zone géographique</strong> : l&apos;Île-de-France et les grandes métropoles
            sont structurellement plus chères.
          </li>
          <li>
            <strong>L&apos;encadrement et la traçabilité</strong> : chef d&apos;équipe, contrôles
            qualité et fiches de désinfection sécurisent la prestation mais ont un coût.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 0,45 à 0,90 €/m² par passage selon l'établissement : crèche et maternelle en haut de fourchette, collège/lycée et administratif plus bas.",
            "Une crèche coûte plus cher au m² qu'une école à cause de l'hygiène renforcée et de la désinfection des surfaces de contact.",
            "Le nettoyage se fait hors présence des enfants : matinée, soirée ou vacances, avec majorations à la clé.",
            "Les marchés publics jugent le prix mais aussi la valeur technique, l'insertion et l'environnement.",
            "La saisonnalité scolaire combine un quotidien dense et des remises en état concentrées sur les vacances.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA pour le coût réel.",
          ]}
        />

        <h2 id="definition">Bionettoyage et hygiène renforcée</h2>
        <DefinitionBox term="Bionettoyage">
          Procédé de nettoyage destiné à réduire la contamination biologique d&apos;une surface. Il
          combine un nettoyage (élimination des salissures), un rinçage et l&apos;application
          d&apos;un produit désinfectant homologué. Dans les crèches et établissements scolaires, il
          cible en priorité les surfaces de contact et les sanitaires. Plus exigeant et plus long
          qu&apos;un entretien courant, il explique une part importante du surcoût au m².
        </DefinitionBox>

        <p>
          Pour situer ce surcoût dans la structure de prix générale d&apos;une prestation,
          consultez le <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a> et
          le <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>.
        </p>

        <h2 id="budget">Estimer un budget</h2>
        <p>
          En l&apos;absence de calculateur, un budget mensuel se reconstitue simplement : surface
          réellement entretenue × prix au m² par passage × nombre de passages par semaine × 4,33
          (semaines moyennes par mois). Pour une école, on raisonne sur les jours d&apos;école, puis
          on ajoute à part les prestations périodiques de vacances.
        </p>
        <p>
          <strong>Exemple — école élémentaire de 1 200 m², nettoyée chaque jour de classe.</strong>{" "}
          À 0,60 €/m² par passage et environ 4 jours de classe pleins par semaine, on obtient 1 200
          × 0,60 × 4 × 4,33 ≈ <strong>12 470 € par mois</strong> (HT) en période scolaire. À cela
          s&apos;ajoutent des remises en état de sols et de vitrerie pendant les vacances, chiffrées
          séparément. Sur l&apos;année, la facture se lisse en tenant compte des semaines sans
          classe.
        </p>

        <FactTable
          caption="Budget mensuel indicatif en période scolaire (HT) — 2026"
          headers={["Établissement", "Surface", "€/m²/passage", "Budget mensuel ≈"]}
          rows={[
            ["Crèche", "300 m²", "0,75 €", "2 920 €"],
            ["École maternelle", "700 m²", "0,68 €", "8 250 €"],
            ["École élémentaire", "1 200 m²", "0,60 €", "12 470 €"],
            ["Collège", "3 000 m²", "0,55 €", "28 580 €"],
          ]}
        />
        <p>
          Ces montants restent des ordres de grandeur : ils ignorent les majorations horaires
          précises, les prestations de vacances et la saisonnalité. Pour transformer une estimation
          en chiffrage ferme adossé au coût réel des agents, voir le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>.
        </p>

        <h2 id="challenger-devis">Décomposer et challenger un devis</h2>
        <p>
          Un devis ou une offre de marché scolaire se vérifie en remontant la chaîne de calcul :
          surface, cadence retenue, taux horaire facturé et majorations horaires. Un prix au m²
          anormalement bas trahit presque toujours une cadence irréaliste, une désinfection au
          rabais ou des majorations oubliées.
        </p>
        <ul>
          <li>
            <strong>Reconstituez le temps de présence</strong> : surface ÷ cadence. Pour des locaux
            scolaires cloisonnés avec désinfection, comptez 150 à 250 m²/h, soit nettement moins que
            de l&apos;open space.
          </li>
          <li>
            <strong>Vérifiez les majorations horaires</strong> : un nettoyage en soirée ou tôt le
            matin doit intégrer les majorations conventionnelles, sous peine de masquer un déficit.
          </li>
          <li>
            <strong>Repérez les prestations périodiques</strong> : les remises en état de vacances
            sont-elles chiffrées séparément ou noyées dans un forfait flou ?
          </li>
        </ul>
        <p>
          Pour appliquer cette grille à plusieurs offres et les mettre face à face sur une base
          identique, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
          Pour situer le plancher salarial qui borde le coût de revient, consultez la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          La meilleure façon d&apos;obtenir un prix juste est de fournir aux prestataires un cadre
          identique : surfaces détaillées par type de local, fréquences, protocoles de désinfection
          attendus, plages horaires et prestations de vacances. Vous comparez alors des offres
          réellement comparables, qu&apos;il s&apos;agisse d&apos;un devis privé ou d&apos;une
          réponse à appel d&apos;offres.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Passez de l&apos;estimation au devis
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Cadrez votre besoin et le coût réel des agents avant de demander des devis comparables.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/tarifs/cout-revient-agent-proprete" variant="primary">
              Calculer le coût de revient d&apos;un agent
            </Button>
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="secondary">
              Comment comparer des devis
            </Button>
          </div>
        </div>
        <SourcesBox sources={SOURCES.marchesPublics} />

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
