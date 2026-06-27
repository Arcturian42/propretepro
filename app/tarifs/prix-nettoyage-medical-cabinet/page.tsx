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

const PATH = "/tarifs/prix-nettoyage-medical-cabinet";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const related = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage médical et cabinets", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "fourchettes", label: "Prix au m² et à l'heure" },
  { id: "zones", label: "Prix par zone du cabinet" },
  { id: "protocoles", label: "Protocoles d'hygiène et traçabilité" },
  { id: "plus-cher", label: "Pourquoi c'est plus cher que le tertiaire" },
  { id: "definition", label: "Le bionettoyage en milieu médical" },
  { id: "facteurs", label: "Facteurs qui influencent le prix" },
  { id: "budget", label: "Estimer un budget" },
  { id: "challenger-devis", label: "Décomposer un devis" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage médical et de cabinets de santé en 2026",
  description:
    "Prix du nettoyage et de la désinfection en milieu médical en 2026 : 0,70 à 1,40 €/m² par passage ou 26 à 45 €/h. Protocoles de bionettoyage, traçabilité et raisons d'un tarif supérieur au tertiaire.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix nettoyage médical",
    "tarif nettoyage cabinet médical",
    "désinfection cabinet médical prix",
    "nettoyage clinique laboratoire m2",
    "bionettoyage milieu médical tarif",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage d'un cabinet médical au m² en 2026 ?",
    answer:
      "Le nettoyage et la désinfection d'un cabinet médical coûtent généralement entre 0,70 et 1,40 € par m² et par passage en 2026, hors taxes, selon l'intensité du protocole. Pour une intervention courte, les prestataires raisonnent plutôt à l'heure : comptez 26 à 45 €/h facturés. Ces fourchettes intègrent le bionettoyage des surfaces de contact, l'usage de produits virucides et bactéricides homologués et la traçabilité des passages, qui rendent ce nettoyage plus cher que le tertiaire classique.",
  },
  {
    question: "Pourquoi le nettoyage médical coûte-t-il plus cher que des bureaux ?",
    answer:
      "Trois raisons cumulées : la cadence est plus lente (bionettoyage minutieux des surfaces de contact, désinfection en plus du simple nettoyage), les produits sont des virucides et bactéricides homologués plus coûteux, et la prestation impose une traçabilité écrite. À cela s'ajoutent une gestion des déchets de soins et un personnel formé aux protocoles. Là où des bureaux se nettoient à 250-400 m²/h, une zone de soins descend à 100-180 m²/h, ce qui mécaniquement renchérit le prix au m².",
  },
  {
    question: "Quels produits sont utilisés pour la désinfection en milieu médical ?",
    answer:
      "Le nettoyage médical recourt à des détergents-désinfectants normés, à action bactéricide, fongicide et virucide, conformes aux normes européennes (EN 14476, EN 1276, etc.). Les surfaces de contact et les zones de soins reçoivent un désinfectant après nettoyage ; le matériel (lavettes, supports) est souvent à usage unique ou à code couleur pour éviter les contaminations croisées. Ces produits homologués coûtent plus cher que des produits d'entretien courant, ce qui pèse sur le prix.",
  },
  {
    question: "La salle d'attente se nettoie-t-elle comme la salle de soins ?",
    answer:
      "Non. La salle d'attente, très fréquentée, relève d'un nettoyage et d'une désinfection réguliers des surfaces de contact (sièges, poignées, comptoir, jouets éventuels), mais à une intensité moindre que la salle de soins. Cette dernière exige un bionettoyage approfondi après chaque session, avec désinfection du plan de travail, du mobilier médical et du sol. Les sanitaires constituent une troisième zone à risque, désinfectée fréquemment. Le prix global du cabinet est une moyenne pondérée de ces zones.",
  },
  {
    question: "La TVA s'applique-t-elle au nettoyage d'un cabinet médical ?",
    answer:
      "Oui. Les prestations de nettoyage et de désinfection relèvent du taux normal de TVA à 20 %, y compris en milieu médical. Le prestataire facture en HT puis ajoute la TVA. À noter : un professionnel de santé exonéré de TVA sur ses actes ne récupère généralement pas cette TVA, ce qui renchérit le coût net du nettoyage pour lui. Les prix de cette page sont indicatifs et exprimés hors taxes.",
  },
  {
    question: "Pourquoi la traçabilité est-elle importante dans le nettoyage médical ?",
    answer:
      "La traçabilité (fiches de passage, plan de désinfection, relevé des zones traitées) prouve que le protocole a bien été appliqué. Elle est attendue en cas de contrôle, de réclamation ou d'incident infectieux, et rassure le professionnel de santé sur la régularité de la prestation. Elle a un coût en temps et en encadrement, mais elle distingue un vrai nettoyage médical d'un simple entretien : un devis sans traçabilité formalisée pour une zone de soins doit alerter.",
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
            name: "Prix du nettoyage de cabinet médical en 2026 (France)",
            description:
              "Fourchettes de prix HT 2026 du nettoyage et de la désinfection en milieu médical sur le marché français : 0,70 à 1,40 €/m² par passage ou 26 à 45 €/h facturés.",
            path: PATH,
            dateModified: article.dateModified,
            temporalCoverage: "2026",
            keywords: [
              "prix nettoyage médical",
              "tarif nettoyage cabinet médical",
              "bionettoyage milieu médical",
            ],
            variables: [
              "Type d'établissement",
              "Prix / m² / passage",
              "Repère horaire facturé",
            ],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Milieu médical"
        title="Prix du nettoyage médical et de cabinets de santé en 2026"
        intro="Combien coûte le nettoyage et la désinfection d'un cabinet médical, d'une clinique ou d'un laboratoire ? Fourchettes de prix au m² et à l'heure, protocoles de bionettoyage et raisons d'un tarif supérieur au tertiaire."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage et la désinfection en milieu médical coûtent en moyenne{" "}
          <strong>0,70 à 1,40 € par m² et par passage</strong> (HT), soit un{" "}
          <strong>tarif horaire facturé d&apos;environ 26 à 45 €/h</strong> pour les interventions
          courtes. Ce prix, nettement supérieur au tertiaire, s&apos;explique par le{" "}
          <strong>bionettoyage des surfaces de contact</strong>, l&apos;usage de produits virucides
          et bactéricides homologués, la traçabilité des passages et une cadence plus lente. La TVA
          à 20 % s&apos;ajoute aux prix affichés hors taxes.
        </AnswerBox>

        <p>
          Le nettoyage en milieu médical n&apos;est pas un nettoyage tertiaire un peu plus poussé :
          c&apos;est une discipline à part, où la désinfection prime sur le simple entretien
          visuel. Cabinets de médecins, dentistes, kinésithérapeutes, cliniques et laboratoires
          d&apos;analyses partagent une exigence : limiter le risque de transmission croisée. Pour
          un dirigeant d&apos;entreprise de propreté, ce segment est rémunérateur mais technique,
          et son chiffrage doit refléter ces contraintes réelles.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. Ils servent à cadrer un budget et à challenger un devis, pas à remplacer un
          chiffrage ferme établi après visite technique et analyse des protocoles attendus.
        </InfoCallout>

        <h2 id="fourchettes">Prix au m² et à l&apos;heure</h2>
        <p>
          En milieu médical, le double affichage au m² et à l&apos;heure est la règle. Les
          interventions sont souvent courtes mais intenses, si bien que le tarif horaire facturé est
          un repère plus parlant que le prix au m² seul. Plus le protocole de désinfection est
          exigeant, plus la cadence ralentit et plus le prix monte.
        </p>

        <FactTable
          caption="Prix indicatif du nettoyage médical (HT) — 2026"
          headers={["Type d'établissement", "Prix / m² / passage", "Repère horaire facturé"]}
          rows={[
            ["Cabinet médical / dentaire", "0,80 – 1,30 €", "28 – 42 €/h"],
            ["Cabinet paramédical (kiné, ostéo)", "0,70 – 1,10 €", "26 – 38 €/h"],
            ["Laboratoire d'analyses", "0,90 – 1,40 €", "32 – 45 €/h"],
            ["Clinique / centre de soins", "0,85 – 1,40 €", "30 – 45 €/h"],
          ]}
        />
        <p>
          Le laboratoire et la clinique sont les plus chers au m² : zones à risque infectieux,
          désinfection fréquente et traçabilité renforcée. À l&apos;inverse, un cabinet paramédical
          sans actes invasifs reste plus proche du bas de la fourchette. Dans tous les cas, le tarif
          dépasse celui des bureaux, qui plafonne autour de 0,30 à 0,60 €/m².
        </p>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          En milieu médical, le tarif au m² dépasse toujours celui du tertiaire : ce n&apos;est pas
          la surface qu&apos;on facture, mais la lenteur du bionettoyage et la désinfection imposée.
        </PullQuote>

        <h2 id="zones">Prix par zone du cabinet</h2>
        <p>
          Un cabinet médical n&apos;est pas une surface homogène : chaque zone porte un niveau de
          risque et un protocole différents. C&apos;est pourquoi le prix global est une moyenne
          pondérée, et qu&apos;un devis sérieux distingue les zones plutôt que d&apos;appliquer un
          tarif unique.
        </p>

        <FactTable
          caption="Intensité et prix indicatif par zone (HT) — 2026"
          headers={["Zone", "Niveau de risque", "Prix / m² / passage", "Protocole"]}
          rows={[
            ["Salle d'attente", "Modéré", "0,60 – 0,95 €", "Nettoyage + désinfection contacts"],
            ["Salle de soins / examen", "Élevé", "1,00 – 1,60 €", "Bionettoyage après session"],
            ["Sanitaires", "Élevé", "0,90 – 1,50 €", "Désinfection fréquente"],
            ["Accueil / circulations", "Modéré", "0,55 – 0,85 €", "Entretien + points de contact"],
            ["Local déchets de soins", "Élevé", "Forfait", "Désinfection + gestion DASRI"],
          ]}
        />
        <p>
          La salle de soins concentre l&apos;exigence : bionettoyage complet du plan de travail, du
          mobilier médical et du sol après chaque session, avec un désinfectant homologué. Les
          sanitaires, points chauds de transmission, sont désinfectés à chaque passage. La salle
          d&apos;attente, très fréquentée, exige une désinfection régulière des sièges et surfaces de
          contact sans atteindre l&apos;intensité de la zone de soins.
        </p>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          En milieu médical, on ne paie pas une surface : on paie un protocole et sa traçabilité. Un
          prix au m² seul, sans détail des zones, ne veut rien dire.
        </PullQuote>

        <h2 id="protocoles">Protocoles d&apos;hygiène et traçabilité</h2>
        <p>
          Ce qui distingue le nettoyage médical, c&apos;est la formalisation des protocoles. Là où
          le tertiaire se contente d&apos;un entretien visuel, le médical impose une méthode écrite,
          appliquée et tracée.
        </p>
        <ul>
          <li>
            <strong>Bionettoyage des surfaces de contact</strong> : poignées, interrupteurs, plans
            de travail, mobilier médical sont nettoyés puis désinfectés à chaque passage.
          </li>
          <li>
            <strong>Produits virucides et bactéricides homologués</strong> : détergents-désinfectants
            conformes aux normes (EN 14476, EN 1276, etc.), plus coûteux que des produits courants.
          </li>
          <li>
            <strong>Matériel à usage unique ou code couleur</strong> : lavettes et supports dédiés
            par zone pour éviter les contaminations croisées.
          </li>
          <li>
            <strong>Traçabilité écrite</strong> : fiches de passage, plan de désinfection et relevé
            des zones traitées, attendus en cas de contrôle ou d&apos;incident.
          </li>
          <li>
            <strong>Gestion des déchets de soins</strong> : circuit DASRI distinct des déchets
            ménagers, désinfection du local dédié.
          </li>
        </ul>

        <h2 id="plus-cher">Pourquoi c&apos;est plus cher que le tertiaire</h2>
        <p>
          Le surcoût du nettoyage médical par rapport aux bureaux n&apos;est pas une marge
          opportuniste : il reflète des coûts réels supplémentaires. Quatre postes l&apos;expliquent.
        </p>
        <ul>
          <li>
            <strong>Une cadence plus lente</strong> : 100 à 180 m²/h en zone de soins contre 250 à
            400 m²/h pour des bureaux. Le temps de présence au m² double presque.
          </li>
          <li>
            <strong>Des produits plus chers</strong> : virucides et bactéricides homologués, parfois
            consommables à usage unique.
          </li>
          <li>
            <strong>Du personnel formé</strong> : agents formés aux protocoles de bionettoyage et au
            circuit des déchets de soins.
          </li>
          <li>
            <strong>De la traçabilité et de l&apos;encadrement</strong> : fiches, contrôles et
            supervision qui sécurisent la prestation mais ont un coût.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 0,70 à 1,40 €/m² par passage en milieu médical, soit environ 26 à 45 €/h facturés.",
            "Le prix dépasse nettement le tertiaire (0,30-0,60 €/m²) à cause du bionettoyage et de la désinfection.",
            "Raisonnez par zone : salle de soins et sanitaires en haut de fourchette, salle d'attente plus bas.",
            "Les produits virucides et bactéricides homologués et le matériel à usage unique pèsent sur le coût.",
            "La traçabilité écrite des passages distingue un vrai nettoyage médical d'un simple entretien.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA pour le coût réel.",
          ]}
        />

        <h2 id="definition">Le bionettoyage en milieu médical</h2>
        <DefinitionBox term="Bionettoyage médical">
          Procédé en plusieurs étapes visant à réduire la contamination biologique d&apos;une
          surface : nettoyage (élimination des salissures), rinçage si nécessaire, puis désinfection
          avec un produit virucide et bactéricide homologué. En milieu médical, il s&apos;applique en
          priorité aux surfaces de contact, aux plans de travail et au mobilier des zones de soins,
          et s&apos;accompagne d&apos;une traçabilité écrite. Plus lent et plus exigeant qu&apos;un
          entretien courant, il est la principale source du surcoût au m².
        </DefinitionBox>

        <p>
          Pour situer ce surcoût dans la structure de prix d&apos;une prestation, consultez le{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a> et le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>.
        </p>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <p>
          À surface comparable, plusieurs leviers font diverger les devis de nettoyage médical :
        </p>
        <ul>
          <li>
            <strong>Le type d&apos;établissement</strong> : un laboratoire ou une clinique impose un
            protocole plus lourd qu&apos;un cabinet paramédical.
          </li>
          <li>
            <strong>La fréquence</strong> : un cabinet à fort flux patient exige des passages
            quotidiens, voire pluriquotidiens, là où un petit cabinet se contente de quelques
            passages par semaine.
          </li>
          <li>
            <strong>Les horaires</strong> : un nettoyage en soirée après les consultations entraîne
            des majorations conventionnelles.
          </li>
          <li>
            <strong>Les consommables et produits</strong> : virucides homologués, lavettes à usage
            unique et sacs DASRI inclus ou refacturés.
          </li>
          <li>
            <strong>La zone géographique</strong> : l&apos;Île-de-France et les grandes métropoles
            sont structurellement plus chères.
          </li>
          <li>
            <strong>La traçabilité et l&apos;encadrement</strong> : fiches de désinfection,
            contrôles qualité et supervision se paient.
          </li>
        </ul>

        <h2 id="budget">Estimer un budget</h2>
        <p>
          En l&apos;absence de calculateur, un budget mensuel se reconstitue ainsi : surface
          réellement entretenue × prix au m² par passage × nombre de passages par semaine × 4,33. En
          médical, on pondère selon la part de zones de soins, plus chères.
        </p>
        <p>
          <strong>Exemple — cabinet médical de 120 m², nettoyé 5 fois par semaine.</strong> Avec une
          part importante de salle de soins, on retient 1,10 €/m² par passage. Le calcul donne 120 ×
          1,10 × 5 × 4,33 ≈ <strong>2 860 € par mois</strong> (HT). Le prix au m² est élevé mais la
          surface réduite : c&apos;est le temps de bionettoyage qui structure la facture, pas la
          taille des locaux.
        </p>

        <FactTable
          caption="Budget mensuel indicatif (HT) — 2026"
          headers={["Établissement", "Surface", "Passages/sem", "€/m²", "Budget mensuel ≈"]}
          rows={[
            ["Cabinet paramédical", "80 m²", "3", "0,90 €", "940 €"],
            ["Cabinet médical", "120 m²", "5", "1,10 €", "2 860 €"],
            ["Laboratoire d'analyses", "250 m²", "6", "1,20 €", "7 790 €"],
          ]}
        />
        <p>
          Ces montants restent des ordres de grandeur : ils ignorent les majorations horaires, les
          consommables spécifiques et la gestion des déchets de soins. Pour transformer une
          estimation en chiffrage ferme adossé au coût réel des agents, voir le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>.
        </p>

        <h2 id="challenger-devis">Décomposer et challenger un devis</h2>
        <p>
          Un devis de nettoyage médical se vérifie en remontant la chaîne de calcul : surface par
          zone, cadence retenue, taux horaire facturé et protocole de désinfection. Un prix au m²
          anormalement bas pour une zone de soins trahit presque toujours un protocole au rabais ou
          une cadence irréaliste.
        </p>
        <ul>
          <li>
            <strong>Reconstituez le temps de présence</strong> : surface ÷ cadence. Pour une zone de
            soins avec bionettoyage, comptez 100 à 180 m²/h, soit bien moins que des bureaux.
          </li>
          <li>
            <strong>Vérifiez le protocole et les produits</strong> : produits virucides homologués,
            matériel à code couleur ou à usage unique, traçabilité formalisée.
          </li>
          <li>
            <strong>Recoupez avec le taux horaire</strong> : un taux inférieur à 26 €/h HT est
            difficilement compatible avec un agent formé et un protocole médical complet.
          </li>
        </ul>
        <p>
          Pour appliquer cette grille à plusieurs offres sur une base identique, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
          Pour situer le plancher salarial qui borde le coût de revient, consultez la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          La meilleure façon d&apos;obtenir un prix juste est de fournir aux prestataires un cadre
          identique : surfaces par zone, niveaux de risque, protocoles de désinfection attendus,
          fréquences et plages horaires. Vous comparez alors des offres réellement comparables, et
          vous évitez de confondre une économie réelle avec un protocole amputé.
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
        <SourcesBox sources={SOURCES.sante} />

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
