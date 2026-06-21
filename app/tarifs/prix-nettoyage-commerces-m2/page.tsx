import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import {
  AnswerBox,
  KeyTakeaways,
  DefinitionBox,
  FactTable,
  InfoCallout,
} from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, ARTICLES, getArticle } from "@/lib/content";

const PATH = "/tarifs/prix-nettoyage-commerces-m2";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const RELATED = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage commerces au m²", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "fourchettes", label: "Prix au m² par type de commerce" },
  { id: "specificites", label: "Les spécificités du commerce" },
  { id: "facteurs", label: "Facteurs qui font bouger le prix" },
  { id: "budgets", label: "Exemples de budget par type" },
  { id: "definition", label: "Prix au m² ou au passage ?" },
  { id: "challenger", label: "Décomposer un devis commerce" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage de commerces et magasins au m² en 2026",
  description:
    "Prix du nettoyage de commerces au m² en 2026 : 0,35 à 0,70 €/m² par passage selon le type de magasin. Spécificités (vitrines, flux clients, horaires), exemples de budget par boutique, supérette et grande surface.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix nettoyage commerces m2",
    "tarif nettoyage magasin",
    "prix nettoyage boutique",
    "coût nettoyage commerce",
    "tarif nettoyage surface de vente",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage d'un commerce au m² en 2026 ?",
    answer:
      "Le nettoyage d'un commerce coûte généralement entre 0,35 et 0,70 € par m² et par passage en 2026, hors taxes. Le tarif au m² est un peu plus élevé que pour des bureaux car le commerce combine un flux clients important, des vitrines et surfaces vitrées, des sanitaires accessibles au public et une fréquence souvent quotidienne avec des créneaux contraints avant ouverture ou après fermeture. Plus la surface de vente est grande et la fréquence élevée, plus le prix unitaire au m² baisse grâce à l'effet d'échelle.",
  },
  {
    question: "Pourquoi le nettoyage d'un commerce coûte-t-il plus cher que des bureaux ?",
    answer:
      "Un commerce subit un passage clients beaucoup plus intense que des bureaux : sols salissants, traces, déchets et sanitaires publics à entretenir plusieurs fois. Les vitrines et surfaces vitrées doivent rester impeccables car elles font partie de l'image commerciale. Les horaires sont contraints (avant ouverture ou après fermeture), ce qui réduit la souplesse d'organisation. Enfin, la fréquence est souvent quotidienne. Tous ces facteurs allongent le temps de présence et tirent le prix au m² vers le haut.",
  },
  {
    question: "À quelle fréquence faut-il nettoyer un magasin ?",
    answer:
      "La plupart des commerces ouverts au public sont nettoyés quotidiennement, hors jours de fermeture, car le flux clients salit vite les sols et les sanitaires. Les boutiques à faible fréquentation peuvent se contenter de 2 à 3 passages par semaine, tandis que les supérettes, pharmacies, salles de restauration et grandes surfaces alimentaires nécessitent un entretien quotidien voire pluriquotidien sur les zones sensibles. La fréquence est le premier déterminant du budget mensuel.",
  },
  {
    question: "Le nettoyage des vitrines est-il inclus dans le prix au m² ?",
    answer:
      "Pas toujours. L'entretien courant des sols, du mobilier et des sanitaires constitue le socle, mais le nettoyage des vitrines et de la façade vitrée est souvent une prestation distincte, facturée au m² de vitrage ou au forfait, à une fréquence propre (hebdomadaire ou plus fréquente pour un commerce de rue). Pour un magasin, la propreté des vitrines est stratégique : précisez-la explicitement dans le cahier des charges pour éviter qu'elle ne réapparaisse en supplément.",
  },
  {
    question: "Comment sont gérés les horaires de nettoyage d'un commerce ?",
    answer:
      "Le nettoyage d'un commerce se fait presque toujours en dehors des heures d'ouverture : tôt le matin avant l'arrivée des clients, ou le soir après la fermeture. Ces créneaux décalés peuvent entraîner des majorations horaires conventionnelles, notamment pour le travail très matinal, tardif ou le dimanche. Les commerces ouverts en continu imposent en plus des interventions discrètes en journée sur les zones sensibles, ce qui complexifie l'organisation et le chiffrage.",
  },
  {
    question: "La TVA s'applique-t-elle au nettoyage de commerces ?",
    answer:
      "Oui. Les prestations de nettoyage de commerces relèvent du taux normal de TVA à 20 %. Les prix affichés par les prestataires sont presque toujours exprimés hors taxes (HT). Pour connaître le coût réellement débité à votre entreprise, ajoutez 20 % de TVA aux montants au m² ou aux forfaits mensuels indiqués.",
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
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Prix au m²"
        title="Prix du nettoyage de commerces et magasins au m²"
        intro="Combien coûte le nettoyage d'une boutique, d'une supérette ou d'une grande surface ? Fourchettes au m², spécificités du commerce et exemples de budget pour cadrer un devis sans surprise."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage d&apos;un commerce coûte en moyenne{" "}
          <strong>0,35 à 0,70 € par m² et par passage</strong> (HT), un peu plus qu&apos;un bureau en
          raison du <strong>flux clients</strong>, des <strong>vitrines</strong>, des{" "}
          <strong>sanitaires publics</strong> et d&apos;une <strong>fréquence souvent quotidienne</strong>
          {" "}sur des créneaux contraints (avant ouverture ou après fermeture). Le prix au m² baisse
          quand la surface de vente et la fréquence augmentent. La TVA à 20 % s&apos;ajoute aux prix
          affichés hors taxes.
        </AnswerBox>

        <p>
          Le nettoyage de commerces obéit à une logique différente de celle des bureaux. Un magasin
          accueille du public toute la journée : ses sols, ses sanitaires et ses vitrines se salissent
          vite et doivent rester irréprochables car ils participent directement à l&apos;image
          commerciale. Cette page donne des repères chiffrés au m² par type de commerce, détaille les
          spécificités qui font monter la facture et propose des exemples de budget concrets.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. Ils servent à cadrer un budget et à challenger un devis, pas à remplacer un
          chiffrage ferme établi après visite technique du point de vente.
        </InfoCallout>

        <h2 id="fourchettes">Prix au m² par type de commerce</h2>
        <p>
          Le prix au m² varie nettement selon le type de point de vente. Une boutique de prêt-à-porter
          au sol propre se nettoie vite ; une supérette ou une boulangerie, avec leurs sols
          alimentaires et leur flux dense, demandent plus de temps ; une grande surface bénéficie en
          revanche d&apos;un fort effet d&apos;échelle qui fait baisser le coût unitaire.
        </p>

        <FactTable
          caption="Prix indicatif du nettoyage de commerces par passage (HT) — 2026"
          headers={["Type de commerce", "Prix / m² / passage", "Fréquence courante"]}
          rows={[
            ["Boutique (mode, déco, services)", "0,45 – 0,70 €", "2 à 6x / semaine"],
            ["Supérette / alimentaire de proximité", "0,40 – 0,65 €", "Quotidien"],
            ["Pharmacie / commerce d'hygiène", "0,45 – 0,70 €", "Quotidien"],
            ["Moyenne surface (300-1000 m²)", "0,35 – 0,55 €", "Quotidien"],
            ["Grande surface (> 1000 m²)", "0,30 – 0,45 €", "Quotidien / pluriquotidien"],
          ]}
        />
        <p>
          Les petits commerces affichent le prix au m² le plus élevé : le temps incompressible
          (installation, sanitaires, sortie des déchets, vitrines) pèse lourd sur une faible surface.
          À l&apos;inverse, une grande surface dilue ce temps fixe sur des milliers de m² et obtient
          le meilleur tarif unitaire, même si son budget mensuel total reste le plus important.
        </p>

        <h2 id="specificites">Les spécificités du nettoyage de commerce</h2>
        <p>
          Plusieurs contraintes propres au commerce expliquent l&apos;écart de prix avec un simple
          bureau. Elles doivent toutes figurer noir sur blanc dans le cahier des charges :
        </p>
        <ul>
          <li>
            <strong>Vitrines et surfaces vitrées</strong> : essentielles à l&apos;image du magasin,
            elles imposent un nettoyage fréquent, souvent facturé à part. Une devanture de rue se
            salit vite et peut exiger plusieurs passages par semaine.
          </li>
          <li>
            <strong>Surface de vente et sols</strong> : les sols supportent un flux clients intense
            et des salissures variées (terre, eau, denrées). Ils requièrent un entretien quotidien et,
            périodiquement, un traitement spécifique (lavage mécanisé, décapage, protection).
          </li>
          <li>
            <strong>Sanitaires accessibles au public</strong> : plus sollicités et plus exposés que
            des sanitaires de bureau, ils demandent une désinfection renforcée et un
            réapprovisionnement régulier des consommables.
          </li>
          <li>
            <strong>Horaires avant ouverture ou après fermeture</strong> : l&apos;intervention se fait
            hors présence clients, sur des créneaux décalés (tôt le matin, en soirée, parfois le
            dimanche), ce qui peut déclencher des majorations conventionnelles.
          </li>
          <li>
            <strong>Fréquence quotidienne</strong> : la plupart des commerces ouverts au public sont
            nettoyés chaque jour d&apos;ouverture, ce qui structure fortement le budget mensuel.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 0,35 à 0,70 €/m² par passage pour un commerce, soit un peu plus qu'un bureau.",
            "Le flux clients, les vitrines et les sanitaires publics tirent le prix au m² vers le haut.",
            "La fréquence est souvent quotidienne et structure le budget mensuel.",
            "Le nettoyage des vitrines est fréquemment une prestation distincte, à préciser au cahier des charges.",
            "Les créneaux avant ouverture / après fermeture peuvent entraîner des majorations horaires.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA pour le coût réel.",
          ]}
        />

        <h2 id="facteurs">Les facteurs qui font bouger le prix</h2>
        <p>
          À type de commerce et surface équivalents, deux devis peuvent diverger fortement. Les
          principaux leviers de prix sont :
        </p>
        <ul>
          <li>
            <strong>Le périmètre des prestations</strong> : entretien courant seul, ou avec vitrines,
            sols spécifiques, réserve et arrière-boutique, sanitaires renforcés.
          </li>
          <li>
            <strong>La nature du sol</strong> : carrelage, PVC, béton ciré, parquet ou moquette ne se
            traitent pas à la même cadence et n&apos;exigent pas les mêmes traitements périodiques.
          </li>
          <li>
            <strong>Le flux clients</strong> : un commerce de centre-ville très fréquenté se salit
            beaucoup plus vite qu&apos;une boutique de quartier, à surface égale.
          </li>
          <li>
            <strong>Les horaires d&apos;intervention</strong> : créneaux très matinaux, tardifs ou
            dominicaux entraînent des majorations conventionnelles.
          </li>
          <li>
            <strong>Les consommables</strong> : papier, savon, sacs poubelle inclus ou refacturés —
            un poste plus lourd qu&apos;en bureau du fait des sanitaires publics.
          </li>
          <li>
            <strong>La zone géographique</strong> : l&apos;Île-de-France et les grandes métropoles
            sont structurellement plus chères que les zones rurales.
          </li>
        </ul>

        <h2 id="budgets">Exemples de budget par type de commerce</h2>
        <p>
          Pour transformer un prix au m² en budget mensuel, on multiplie : surface × prix au m² par
          passage × nombre de passages par semaine × 4,33 (semaines moyennes par mois). Voici trois
          cas typiques reconstitués.
        </p>
        <p>
          <strong>Boutique de 120 m², 6 passages/semaine.</strong> À 0,55 €/m² par passage : 120 ×
          0,55 × 6 × 4,33 ≈ <strong>1 715 € par mois</strong> (HT), vitrines comprises sur une base
          hebdomadaire. Sur cette taille, un forfait minimum peut s&apos;appliquer si le temps de
          présence quotidien est très court.
        </p>
        <p>
          <strong>Supérette de 350 m², nettoyage quotidien (6 j/sem.).</strong> À 0,50 €/m² par
          passage : 350 × 0,50 × 6 × 4,33 ≈ <strong>4 545 € par mois</strong> (HT). Le sol alimentaire
          et les sanitaires publics justifient un entretien dense et un traitement périodique des sols.
        </p>
        <p>
          <strong>Moyenne surface de 800 m², quotidien (6 j/sem.).</strong> L&apos;effet d&apos;échelle
          joue : à 0,42 €/m² par passage, 800 × 0,42 × 6 × 4,33 ≈ <strong>8 730 € par mois</strong>{" "}
          (HT). Le prix au m² est plus bas qu&apos;en boutique, mais le budget total grimpe avec la
          surface.
        </p>

        <FactTable
          caption="Exemples de budget mensuel reconstitué (HT) — 2026"
          headers={["Commerce", "Surface", "Fréquence", "Budget mensuel ≈"]}
          rows={[
            ["Boutique", "120 m²", "6x / sem", "1 715 €"],
            ["Supérette", "350 m²", "6x / sem", "4 545 €"],
            ["Moyenne surface", "800 m²", "6x / sem", "8 730 €"],
          ]}
        />
        <p>
          Ces montants restent des ordres de grandeur : ils ignorent les majorations horaires, la
          vitrerie en supplément et les traitements de sols périodiques. Pour situer la logique
          d&apos;abonnement mensuel, voir le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>, et
          pour comparer au tertiaire, le{" "}
          <a href="/tarifs/nettoyage-bureaux-m2">prix du nettoyage de bureaux au m²</a>.
        </p>

        <h2 id="definition">Prix au m² ou prix au passage : que demander ?</h2>
        <DefinitionBox term="Prix au m² (commerce)">
          Montant facturé pour nettoyer un mètre carré de surface de vente lors d&apos;un passage. Il
          se déduit du tarif horaire du prestataire divisé par la cadence de nettoyage (m²/heure), qui
          est plus basse en commerce qu&apos;en bureau du fait du flux clients et des vitrines.
          Demander à la fois le prix au m², la cadence retenue et le tarif horaire permet de vérifier
          qu&apos;un devis est mathématiquement cohérent.
        </DefinitionBox>
        <p>
          Pour comprendre la composition du tarif horaire (salaire chargé, encadrement, marge),
          consultez notre page dédiée au{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a>. Pour savoir ce
          qu&apos;une heure d&apos;agent coûte réellement à un prestataire, voir le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>.
        </p>

        <h2 id="challenger">Décomposer et challenger un devis de commerce</h2>
        <p>
          Un devis de nettoyage de commerce se vérifie en remontant la chaîne de calcul du
          prestataire. Trois grandeurs suffisent à juger sa cohérence :
        </p>
        <ul>
          <li>
            <strong>Reconstituez le temps de présence</strong> : surface ÷ cadence. En commerce, la
            cadence tourne souvent autour de 250 à 350 m²/h selon l&apos;encombrement et les vitrines.
            Un temps facturé nettement inférieur signale une cadence irréaliste ou des zones non
            traitées.
          </li>
          <li>
            <strong>Recoupez avec le taux horaire</strong> : temps de présence × taux horaire = coût
            main-d&apos;œuvre du passage. Un taux sous le coût de revient réel d&apos;un agent est
            suspect.
          </li>
          <li>
            <strong>Isolez la vitrerie et les sols spécifiques</strong> : vérifiez si ces prestations
            sont incluses ou en option, et à quelle fréquence, pour éviter les avenants surprises.
          </li>
        </ul>
        <p>
          Pour mettre plusieurs offres face à face sur une base identique, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>. Et
          pour situer le plancher salarial qui borne le coût de revient, consultez la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          La meilleure façon d&apos;obtenir un prix juste est de fournir aux prestataires un cadre
          identique : surface de vente détaillée, surfaces vitrées, fréquence souhaitée, créneaux
          horaires, traitements de sols et niveau d&apos;exigence sur les sanitaires. Vous comparez
          alors des offres réellement comparables, sans mauvaise surprise au premier avenant.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Cadrez votre besoin de nettoyage commerce
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Comparez des devis sur une base identique et vérifiez leur cohérence tarifaire.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="primary">
              Comment comparer des devis
            </Button>
            <Button href="/tarifs/nettoyage-bureaux-m2" variant="secondary">
              Comparer au prix des bureaux
            </Button>
          </div>
        </div>
      </ArticleLayout>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FAQSection items={FAQ} />
        </div>
        <RelatedArticles articles={RELATED} />
      </div>
    </>
  );
}
