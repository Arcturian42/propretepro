import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, datasetSchema } from "@/lib/schema";
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

const PATH = "/tarifs/prix-nettoyage-industriel";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const related = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH).slice(0, 3);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage industriel", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "reperes-site", label: "Repères de prix par type de site" },
  { id: "pourquoi-plus-cher", label: "Pourquoi plus cher que le tertiaire" },
  { id: "contraintes", label: "Contraintes spécifiques" },
  { id: "agroalimentaire", label: "Le cas agroalimentaire (HACCP)" },
  { id: "leviers", label: "Les leviers de prix" },
  { id: "definition", label: "Nettoyage industriel : définition" },
  { id: "challenger-devis", label: "Challenger un devis industriel" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage industriel : repères et facteurs de coût",
  description:
    "Prix du nettoyage industriel en 2026 : 0,40 à 1,50 €/m² par passage ou 28 à 50 €/h selon le site (atelier, entrepôt, agroalimentaire). Contraintes HACCP, horaires décalés, EPI et leviers de coût pour chiffrer un site industriel.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix nettoyage industriel",
    "tarif nettoyage industriel",
    "prix nettoyage entrepôt",
    "tarif nettoyage agroalimentaire",
    "coût nettoyage atelier",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage industriel en 2026 ?",
    answer:
      "Le nettoyage industriel se situe généralement entre 0,40 et 1,50 € par m² et par passage en 2026, hors taxes, ou entre 28 et 50 €/h facturés selon le site. Un entrepôt logistique dégagé reste dans le bas de la fourchette, tandis qu'un site agroalimentaire soumis à des normes d'hygiène strictes, avec désinfection et traçabilité, atteint le haut, voire au-delà. L'écart avec le nettoyage tertiaire de bureaux (0,30 à 0,60 €/m²) s'explique par les contraintes techniques, les EPI, les horaires décalés et les normes.",
  },
  {
    question: "Pourquoi le nettoyage industriel coûte-t-il plus cher que le nettoyage de bureaux ?",
    answer:
      "Plusieurs facteurs cumulés : des sols techniques plus difficiles à traiter (béton, résine, salissures grasses ou collantes), des équipements spécifiques comme les autolaveuses et monobrosses, des EPI obligatoires, des horaires décalés ou de nuit pour ne pas perturber la production, des normes d'hygiène (HACCP en agroalimentaire) imposant désinfection et traçabilité, et parfois des arrêts de production à synchroniser. Chacun de ces points allonge le temps de travail ou exige une main-d'œuvre plus qualifiée, donc plus chère.",
  },
  {
    question: "Qu'est-ce que les normes HACCP changent au tarif en agroalimentaire ?",
    answer:
      "En agroalimentaire, le nettoyage fait partie intégrante de la maîtrise sanitaire (HACCP). Il impose un protocole précis : pré-nettoyage, détergence, rinçage, désinfection, parfois second rinçage, avec des produits homologués contact alimentaire, une traçabilité écrite de chaque opération et des contrôles (prélèvements de surface). Ce niveau d'exigence allonge les temps, mobilise du personnel formé et augmente le coût des consommables, ce qui place le nettoyage agroalimentaire parmi les plus chers au m².",
  },
  {
    question: "Le nettoyage industriel se facture-t-il au m² ou à l'heure ?",
    answer:
      "Les deux coexistent. Le m² convient aux grandes surfaces homogènes (entrepôts, halls) où une autolaveuse couvre vite le sol. L'heure ou la vacation s'impose pour les interventions techniques, les machines à démonter et nettoyer, les arrêts de production ou les sites très encombrés où la surface n'est pas représentative du travail réel. Beaucoup de prestataires raisonnent à l'heure (28 à 50 €/h HT) puis traduisent en prix au m² ou en forfait mensuel.",
  },
  {
    question: "Les horaires décalés font-ils monter la facture ?",
    answer:
      "Oui. Beaucoup de sites industriels ne peuvent être nettoyés qu'en dehors de la production : nuit, très tôt le matin, week-end ou pendant des arrêts programmés. Ces plages entraînent des majorations conventionnelles (travail de nuit, dimanche, jours fériés) qui se répercutent sur le tarif. Synchroniser le nettoyage avec un arrêt de production complique aussi la planification et peut imposer des équipes renforcées sur un créneau court.",
  },
  {
    question: "La TVA s'applique-t-elle au nettoyage industriel ?",
    answer:
      "Oui, au taux normal de 20 %. Les tarifs des prestataires sont presque toujours exprimés hors taxes (HT). Pensez à ajouter la TVA pour obtenir le coût réellement débité. Vérifiez aussi que les postes spécifiques au site (produits homologués, EPI dédiés, location éventuelle de matériel lourd, élimination de déchets) sont bien intégrés au prix ou clairement listés en option.",
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
            name: "Prix du nettoyage industriel en 2026 (France)",
            description:
              "Fourchettes de prix HT 2026 du nettoyage industriel sur le marché français, par type de site, exprimées au m² par passage et en repère horaire facturé.",
            path: PATH,
            dateModified: article.dateModified,
            temporalCoverage: "2026",
            keywords: [
              "prix nettoyage industriel",
              "tarif nettoyage industriel",
              "nettoyage agroalimentaire",
            ],
            variables: ["Type de site", "Prix / m² / passage", "Repère horaire facturé"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Nettoyage industriel"
        title="Prix du nettoyage industriel : repères et facteurs de coût"
        intro="Combien coûte le nettoyage d'un site industriel ? Repères de prix par type de site (atelier, entrepôt, agroalimentaire), contraintes spécifiques et leviers de coût pour comprendre pourquoi le nettoyage industriel est plus cher que le tertiaire."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage industriel coûte généralement{" "}
          <strong>0,40 à 1,50 € par m² et par passage</strong> (HT), soit un{" "}
          <strong>tarif horaire facturé de 28 à 50 €/h</strong> selon le site. Un{" "}
          <strong>entrepôt dégagé</strong> reste dans le bas de la fourchette ; un site{" "}
          <strong>agroalimentaire soumis aux normes HACCP</strong> atteint le haut, voire au-delà.
          C&apos;est nettement plus cher que le tertiaire (0,30 à 0,60 €/m²) à cause des contraintes
          techniques, des EPI, des horaires décalés et des normes d&apos;hygiène. La TVA à 20 %
          s&apos;ajoute aux prix HT.
        </AnswerBox>

        <p>
          Le nettoyage industriel n&apos;a presque rien à voir avec l&apos;entretien de bureaux.
          Sols techniques, machines, horaires contraints, normes sanitaires, EPI : chaque
          spécificité du site déplace le curseur du prix. Vouloir y appliquer les repères du
          tertiaire conduit systématiquement à sous-budgétiser. Cette page donne des ordres de
          grandeur par type de site et explique les facteurs qui font le prix, pour challenger un
          devis sans se tromper de référentiel.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. La variabilité est forte en industrie : seul un chiffrage ferme après
          visite technique du site, machine par machine, fait foi. Ces repères servent à cadrer un
          budget et à détecter un devis hors-sol.
        </InfoCallout>

        <h2 id="reperes-site">Repères de prix par type de site</h2>
        <p>
          Le prix dépend avant tout de la <strong>nature du site</strong> et de son niveau
          d&apos;exigence sanitaire. Le tableau ci-dessous donne des ordres de grandeur au m² par
          passage, du moins au plus contraignant.
        </p>

        <FactTable
          caption="Prix indicatif du nettoyage industriel par type de site (HT) — 2026"
          headers={["Type de site", "Prix / m² / passage", "Repère horaire facturé"]}
          rows={[
            ["Entrepôt / plateforme logistique", "0,40 – 0,80 €", "28 – 38 €/h"],
            ["Atelier / site de production", "0,60 – 1,10 €", "32 – 44 €/h"],
            ["Site agroalimentaire (HACCP)", "0,90 – 1,50 €", "38 – 50 €/h"],
            ["Salle blanche / zone à atmosphère contrôlée", "1,20 – 2,50 €", "42 – 60 €/h"],
          ]}
        />
        <PullQuote cite={`${author.name}, ${author.role}`}>
          En industrie, le prix au m² n&apos;est qu&apos;un point de départ : deux sites de même
          surface n&apos;exigent pas le même travail. Seule la visite technique permet de chiffrer
          juste.
        </PullQuote>

        <p>
          Ces fourchettes sont larges à dessein : en industrie, deux ateliers de même surface
          peuvent demander un travail très différent selon les machines, les salissures et les
          normes. Le m² n&apos;est qu&apos;un point de départ — la <strong>visite technique</strong>{" "}
          reste incontournable.
        </p>

        <h2 id="pourquoi-plus-cher">Pourquoi c&apos;est plus cher que le tertiaire</h2>
        <p>
          À surface égale, un site industriel coûte régulièrement deux à trois fois plus cher
          qu&apos;un plateau de bureaux. L&apos;écart n&apos;a rien d&apos;arbitraire : il reflète un
          travail objectivement plus lourd et plus qualifié.
        </p>
        <ul>
          <li>
            <strong>Des sols techniques</strong> : béton brut, résine, carrelage technique, avec des
            salissures grasses, huileuses ou collantes qui résistent à un simple lavage.
          </li>
          <li>
            <strong>Du matériel lourd</strong> : autolaveuses, monobrosses, nettoyeurs haute
            pression, parfois aspirateurs industriels classés ; investissement et maintenance se
            répercutent.
          </li>
          <li>
            <strong>Des EPI obligatoires</strong> : chaussures de sécurité, gants, protections
            auditives, parfois combinaisons et masques, qui ont un coût et imposent des temps
            d&apos;habillage.
          </li>
          <li>
            <strong>Des horaires décalés</strong> : nuit, week-end ou arrêts de production, avec les
            majorations conventionnelles associées.
          </li>
          <li>
            <strong>Des normes d&apos;hygiène</strong> : en agroalimentaire notamment, désinfection,
            produits homologués et traçabilité écrite.
          </li>
        </ul>
        <p>
          Pour mesurer ce que pèse réellement la main-d&apos;œuvre dans ce prix, voir le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>,
          qui détaille salaire chargé, majorations et productivité.
        </p>

        <h2 id="contraintes">Les contraintes spécifiques du site</h2>
        <p>
          Plusieurs contraintes propres à l&apos;industrie allongent le temps de travail ou imposent
          une main-d&apos;œuvre plus qualifiée. Les anticiper dans le cahier des charges évite les
          mauvaises surprises au moment du chiffrage.
        </p>
        <ul>
          <li>
            <strong>Sols techniques et machines</strong> : nettoyer autour, voire à l&apos;intérieur,
            des lignes de production ; gérer les huiles, copeaux, poussières et résidus de procédé.
          </li>
          <li>
            <strong>Autolaveuses et matériel adapté</strong> : sur de grandes surfaces, une
            autolaveuse autoportée fait gagner du temps, mais son passage doit être planifié et
            l&apos;opérateur formé.
          </li>
          <li>
            <strong>Horaires décalés et arrêts de production</strong> : intervenir de nuit ou
            pendant un arrêt programmé, sur un créneau court, parfois avec une équipe renforcée.
          </li>
          <li>
            <strong>EPI et sécurité</strong> : port d&apos;équipements de protection, consignation
            des machines, respect des plans de prévention et accueil sécurité sur site.
          </li>
          <li>
            <strong>Gestion des déchets</strong> : tri, évacuation et parfois élimination de déchets
            spécifiques selon le procédé industriel.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 0,40 à 1,50 €/m² par passage en industrie, soit 28 à 50 €/h facturés selon le site.",
            "L'entrepôt logistique est le moins cher au m² ; l'agroalimentaire HACCP, le plus cher.",
            "Le nettoyage industriel coûte 2 à 3 fois le tertiaire à cause des contraintes techniques.",
            "Sols techniques, autolaveuses, EPI, horaires décalés et normes HACCP font le prix.",
            "Les horaires de nuit et de week-end entraînent des majorations conventionnelles.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA, et faites toujours une visite technique.",
          ]}
        />

        <h2 id="agroalimentaire">Le cas agroalimentaire : le nettoyage soumis aux normes HACCP</h2>
        <p>
          L&apos;agroalimentaire est le segment le plus exigeant et le plus cher. Le nettoyage
          n&apos;y est pas une prestation annexe : il fait partie intégrante de la{" "}
          <strong>maîtrise sanitaire</strong>. Le protocole suit un enchaînement strict — pré-nettoyage,
          détergence, rinçage, désinfection, parfois second rinçage — avec des produits homologués
          contact alimentaire.
        </p>
        <p>
          À cela s&apos;ajoutent une <strong>traçabilité écrite</strong> de chaque opération, des{" "}
          <strong>contrôles de surface</strong> (prélèvements microbiologiques) et du personnel
          spécifiquement formé. Ce niveau d&apos;exigence allonge fortement les temps, augmente le
          coût des consommables et mobilise une main-d&apos;œuvre qualifiée, ce qui explique des prix
          au m² au sommet de la fourchette industrielle.
        </p>
        <InfoCallout title="Le nettoyage fait partie du process">
          En agroalimentaire, un nettoyage insuffisant peut entraîner un arrêt de production ou un
          rappel de lots. Le prix d&apos;un prestataire intègre donc une exigence de fiabilité et de
          traçabilité qu&apos;un tarif d&apos;appel trop bas ne peut pas couvrir.
        </InfoCallout>

        <h2 id="leviers">Les leviers de prix à négocier</h2>
        <p>
          Plusieurs leviers permettent d&apos;optimiser un budget de nettoyage industriel sans
          rogner sur la qualité ni la conformité :
        </p>
        <ul>
          <li>
            <strong>La fréquence ajustée par zone</strong> : toutes les zones n&apos;exigent pas le
            même rythme. Différencier production, circulations et locaux sociaux évite de payer une
            fréquence uniforme inutile.
          </li>
          <li>
            <strong>L&apos;optimisation des plages horaires</strong> : grouper les interventions
            pour limiter les majorations de nuit et de week-end quand le process le permet.
          </li>
          <li>
            <strong>Le bon dimensionnement du matériel</strong> : une autolaveuse adaptée à la
            surface réduit le temps de main-d&apos;œuvre sur les grands halls.
          </li>
          <li>
            <strong>Un cahier des charges précis</strong> : mieux le besoin est décrit, moins le
            prestataire intègre de marge d&apos;incertitude dans son prix.
          </li>
          <li>
            <strong>L&apos;engagement dans la durée</strong> : un contrat pluriannuel sécurise le
            prestataire et permet d&apos;amortir le matériel et la formation.
          </li>
        </ul>

        <h2 id="definition">Nettoyage industriel : de quoi parle-t-on ?</h2>
        <DefinitionBox term="Nettoyage industriel">
          Ensemble des prestations de propreté réalisées sur des sites de production, ateliers,
          entrepôts et installations agroalimentaires. Il se distingue du nettoyage tertiaire par
          ses contraintes techniques (sols et machines spécifiques, matériel lourd), réglementaires
          (normes d&apos;hygiène HACCP, plans de prévention) et organisationnelles (horaires décalés,
          arrêts de production, EPI). Il se facture au m² par passage ou à l&apos;heure, presque
          toujours après une visite technique du site.
        </DefinitionBox>

        <p>
          Pour situer ce segment par rapport au nettoyage classique de locaux, comparez avec le{" "}
          <a href="/tarifs/nettoyage-bureaux-m2">prix du nettoyage de bureaux au m²</a> et le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>.
        </p>

        <h2 id="challenger-devis">Challenger un devis de nettoyage industriel</h2>
        <p>
          Un devis industriel se vérifie en s&apos;assurant que les paramètres qui font le coût réel
          sont explicitement traités. Un prix global sans détail est inexploitable pour comparer.
        </p>
        <ul>
          <li>
            <strong>Le périmètre par zone</strong> : production, circulations, sanitaires, locaux
            sociaux, extérieurs — chacun avec sa fréquence.
          </li>
          <li>
            <strong>Les plages horaires retenues</strong> : jour, nuit, week-end ? Les majorations
            sont-elles intégrées ou en supplément ?
          </li>
          <li>
            <strong>Le matériel et les consommables</strong> : autolaveuse fournie, produits
            homologués (agroalimentaire), EPI dédiés — inclus ou refacturés ?
          </li>
          <li>
            <strong>Le niveau de protocole et de traçabilité</strong> : simple entretien ou
            protocole de désinfection documenté ?
          </li>
        </ul>
        <p>
          Pour appliquer une grille de lecture commune à plusieurs offres, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
          Pour vérifier qu&apos;un taux horaire facturé couvre bien le coût de revient et le plancher
          salarial, recoupez avec le{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a> et la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          En industrie plus qu&apos;ailleurs, la <strong>visite technique</strong> est
          incontournable : aucun prestataire sérieux ne chiffre un site de production sans l&apos;avoir
          vu. Fournissez un cadre identique à chaque candidat — plans, surfaces par zone, fréquences,
          contraintes horaires, normes applicables — pour comparer des offres réellement
          comparables. Pour approfondir la lecture d&apos;un budget, consultez aussi notre{" "}
          <a href="/blog">blog</a> et le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Passez de l&apos;estimation au devis
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Cadrez votre besoin industriel zone par zone, puis demandez des devis comparables après
            visite technique.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="primary">
              Comment comparer des devis
            </Button>
            <Button href="/tarifs/cout-revient-agent-proprete" variant="secondary">
              Coût de revient d&apos;un agent
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
