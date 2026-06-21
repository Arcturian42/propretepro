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
import { AUTHORS, getArticle, type Article } from "@/lib/content";

const PATH = "/tarifs/nettoyage-bureaux-m2";
const COVER = "/covers/nettoyage-bureaux-m2.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage bureaux au m²", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "fourchettes", label: "Prix au m² par fréquence" },
  { id: "methode-budget", label: "Estimer son budget pas à pas" },
  { id: "types-locaux", label: "Prix par type de locaux" },
  { id: "facteurs", label: "Facteurs qui influencent le prix" },
  { id: "inclus-options", label: "Prestations incluses vs en option" },
  { id: "definition", label: "Prix au m² ou tarif horaire ?" },
  { id: "challenger-devis", label: "Décomposer un devis au m²" },
  { id: "cout-revient", label: "Prix bas et coût de revient" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage de bureaux au m² en 2026",
  description:
    "Prix du nettoyage de bureaux au m² en 2026 : 0,30 à 0,60 €/m² par passage ou 18 à 35 €/h selon la prestation. Tableaux par fréquence et surface, et tous les facteurs qui font bouger le tarif.",
  path: PATH,
    image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix nettoyage bureaux m2",
    "tarif nettoyage bureaux",
    "prix nettoyage bureau au m2",
    "coût nettoyage bureaux",
    "tarif nettoyage bureaux m2",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage de bureaux au m² en 2026 ?",
    answer:
      "Le prix du nettoyage de bureaux se situe généralement entre 0,30 et 0,60 € par m² et par passage en 2026, hors taxes. Une intervention plus fréquente fait baisser le prix unitaire au m² grâce à l'optimisation des temps de présence, tandis qu'une grande surface bénéficie d'un effet d'échelle. Pour de petits locaux, un forfait minimum (souvent 90 à 150 € par mois) s'applique.",
  },
  {
    question: "Vaut-il mieux raisonner au m² ou au tarif horaire ?",
    answer:
      "Les deux sont liés. Le prestataire calcule un temps de nettoyage à partir d'une cadence (par exemple 250 à 400 m² nettoyés par heure pour des bureaux), puis applique son tarif horaire facturé (18 à 35 €/h HT). Le prix au m² affiché en découle. Demandez les deux informations : elles permettent de vérifier la cohérence d'un devis et de comparer des offres entre elles.",
  },
  {
    question: "Pourquoi deux devis de nettoyage de bureaux peuvent-ils varier du simple au double ?",
    answer:
      "L'écart vient surtout du cahier des charges implicite : fréquence, surfaces réellement traitées, prestations incluses (sanitaires, vitrerie, sols spécifiques), fournitures consommables, qualité du personnel et niveau d'encadrement. Un prix très bas masque souvent une cadence irréaliste ou une prestation amputée. Comparer les devis sur une base identique est indispensable.",
  },
  {
    question: "La TVA s'applique-t-elle au nettoyage de bureaux ?",
    answer:
      "Oui. Les prestations de nettoyage de bureaux relèvent du taux normal de TVA à 20 %. Les prix affichés par les prestataires sont presque toujours exprimés hors taxes (HT) : pensez à ajouter la TVA pour obtenir le coût réellement débité à votre entreprise.",
  },
  {
    question: "Comment est calculée la cadence de nettoyage ?",
    answer:
      "La cadence exprime la surface nettoyée par heure pour un type de prestation donné. Pour des bureaux en entretien courant, elle se situe généralement entre 250 et 400 m²/heure ; elle descend à 150-250 m²/heure pour des locaux médicaux ou très cloisonnés, et peut monter au-delà pour de grands open spaces dégagés. Le prestataire divise la surface par la cadence pour obtenir un temps de présence, qu'il multiplie par son taux horaire facturé. Une cadence affichée anormalement haute (par exemple 600 m²/heure pour des bureaux cloisonnés) est le signe d'un devis sous-dimensionné.",
  },
  {
    question: "Pourquoi un forfait minimum mensuel s'applique-t-il ?",
    answer:
      "Chaque intervention comporte un temps incompressible : déplacement, installation du matériel, vidage des corbeilles, entretien des sanitaires et sortie des déchets. Sur une petite surface, ce temps fixe représente une part importante de la prestation, si bien que le prix au m² grimpe. Pour rester rentable, le prestataire applique un forfait minimum, souvent compris entre 90 et 150 € par mois (HT), en dessous duquel il ne descend pas, quel que soit le calcul théorique au m².",
  },
  {
    question: "Le prix au m² inclut-il les consommables ?",
    answer:
      "Pas toujours. Le papier toilette, l'essuie-mains, le savon et les sacs poubelle sont parfois facturés en supplément, soit au réel, soit via un forfait consommables mensuel. Un prix d'appel attractif exclut fréquemment ces fournitures. Demandez systématiquement si les consommables sanitaires sont inclus et, si oui, sur quelle base de consommation, afin de comparer les devis à périmètre identique.",
  },
];

const RELATED: Article[] = [
  {
    slug: "tarif-horaire-nettoyage",
    href: "/tarifs/tarif-horaire-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Tarif horaire du nettoyage en 2026",
    excerpt:
      "Fourchette du taux horaire facturé (18 à 35 €/h HT), ce qui le compose et les écarts selon la région et la prestation.",
    authorSlug: "marc-leroy",
    datePublished: "2026-02-12",
    dateModified: "2026-06-05",
    readMinutes: 9,
    badge: { label: "Tarifs", tone: "teal" },
  },
  {
    slug: "prix-entreprise-nettoyage",
    href: "/tarifs/prix-entreprise-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix d'une entreprise de nettoyage : forfaits et abonnements",
    excerpt:
      "Prix moyen d'une prestation d'entreprise de nettoyage : forfaits, abonnements mensuels et logique de tarification.",
    authorSlug: "marc-leroy",
    datePublished: "2026-02-12",
    dateModified: "2026-06-05",
    readMinutes: 9,
  },
  {
    slug: "comment-comparer-devis-nettoyage",
    href: "/tarifs/comment-comparer-devis-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Comment comparer des devis de nettoyage",
    excerpt:
      "Une grille de comparaison et les pièges à éviter pour comparer objectivement plusieurs devis de nettoyage.",
    authorSlug: "marc-leroy",
    datePublished: "2026-02-12",
    dateModified: "2026-06-05",
    readMinutes: 9,
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
    image: COVER,
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
        title="Prix du nettoyage de bureaux au m² en 2026"
        intro="Combien coûte le nettoyage de bureaux en France ? Fourchettes de prix au m² selon la fréquence et la surface, et tous les facteurs qui font bouger le tarif pour ne plus signer un devis à l'aveugle."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage de bureaux coûte en moyenne{" "}
          <strong>0,30 à 0,60 € par m² et par passage</strong> (HT), ce qui correspond à un{" "}
          <strong>tarif horaire facturé d&apos;environ 18 à 35 €/h</strong> selon la prestation.
          Le prix au m² <strong>baisse quand la fréquence et la surface augmentent</strong> ; un
          forfait minimum (souvent 90 à 150 €/mois) s&apos;applique aux petits locaux. La TVA à
          20 % s&apos;ajoute aux prix affichés hors taxes.
        </AnswerBox>

        <p>
          Le nettoyage de bureaux est le poste le plus courant de la propreté tertiaire. Pourtant,
          peu d&apos;acheteurs savent ce qu&apos;est un prix « normal » : les prestataires
          communiquent rarement leurs tarifs, et les devis arrivent souvent sous forme d&apos;un
          forfait global, sans détail du prix au m². Cette page donne des repères chiffrés clairs
          et explique comment décomposer un prix pour ne plus signer à l&apos;aveugle.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. Ils servent à cadrer un budget et à challenger un devis, pas à remplacer
          un chiffrage ferme établi après visite technique.
        </InfoCallout>

        <h2 id="fourchettes">Prix au m² selon la fréquence et la surface</h2>
        <p>
          La variable la plus structurante est la <strong>fréquence</strong>. Plus le prestataire
          passe souvent, plus il optimise les temps de déplacement et de mise en place, ce qui fait
          baisser le coût unitaire au m². À l&apos;inverse, un passage hebdomadaire isolé reste
          plus cher au m² car le temps fixe est amorti sur peu de surface réellement traitée.
        </p>

        <FactTable
          caption="Prix indicatif du nettoyage de bureaux par passage (HT) — 2026"
          headers={["Fréquence", "Prix / m² / passage", "Repère horaire facturé"]}
          rows={[
            ["1x / semaine", "0,45 – 0,60 €", "20 – 28 €/h"],
            ["2 à 3x / semaine", "0,35 – 0,50 €", "19 – 26 €/h"],
            ["5x / semaine", "0,30 – 0,42 €", "18 – 24 €/h"],
            ["Quotidien (locaux médicaux)", "0,40 – 0,65 €", "24 – 35 €/h"],
          ]}
        />

        <p>
          La <strong>surface</strong> joue ensuite un effet d&apos;échelle. En dessous de 150 m²,
          le prix au m² grimpe car le temps incompressible (installation, sanitaires, sortie des
          déchets) pèse lourd ; un <strong>forfait minimum</strong> s&apos;applique alors. Au-delà
          de 1 000 m², le prix au m² se tasse.
        </p>

        <FactTable
          caption="Budget mensuel indicatif pour des bureaux à 2-3 passages/semaine (HT) — 2026"
          headers={["Surface", "Budget mensuel estimé", "Soit / m² / mois"]}
          rows={[
            ["100 m²", "150 – 230 €", "1,50 – 2,30 €"],
            ["300 m²", "420 – 620 €", "1,40 – 2,07 €"],
            ["600 m²", "780 – 1 150 €", "1,30 – 1,92 €"],
            ["1 200 m²", "1 450 – 2 150 €", "1,21 – 1,79 €"],
          ]}
        />

        <h2 id="methode-budget">Estimer son budget pas à pas</h2>
        <p>
          En l&apos;absence de calculateur, vous pouvez estimer vous-même un budget mensuel fiable
          en quatre étapes. La méthode reste approximative, mais elle suffit à savoir si un devis
          tombe dans une fourchette crédible avant toute visite technique.
        </p>
        <ol>
          <li>
            <strong>Mesurez la surface réellement entretenue</strong> (en m²). Ne comptez que les
            zones nettoyées : bureaux, circulations, sanitaires, coin café. Les locaux techniques
            ou archives rarement traités sont à exclure ou à compter à part.
          </li>
          <li>
            <strong>Fixez la fréquence</strong> : combien de passages par semaine ? C&apos;est la
            variable la plus structurante pour le prix au m².
          </li>
          <li>
            <strong>Choisissez un prix au m² par passage</strong> dans la fourchette 0,30 à 0,60 €
            (HT), en vous calant sur le tableau par fréquence ci-dessus.
          </li>
          <li>
            <strong>Calculez le budget mensuel</strong> : surface × prix au m² × nombre de passages
            par semaine × 4,33 (nombre moyen de semaines par mois).
          </li>
        </ol>
        <p>
          <strong>Exemple 1 — 500 m² nettoyés 5x/semaine.</strong> À 5 passages, on retient un prix
          unitaire bas, autour de 0,34 €/m² par passage. Le calcul donne 500 × 0,34 × 5 × 4,33 ≈
          <strong> 3 680 € par mois</strong> (HT), soit environ 7,4 €/m²/mois. C&apos;est un
          contrat dense, typique d&apos;un siège tertiaire occupé en continu.
        </p>
        <p>
          <strong>Exemple 2 — 1 500 m² nettoyés 3x/semaine.</strong> La grande surface joue
          l&apos;effet d&apos;échelle : on prend 0,38 €/m² par passage. Soit 1 500 × 0,38 × 3 ×
          4,33 ≈ <strong>7 400 € par mois</strong> (HT), soit environ 4,9 €/m²/mois. Le prix au m²
          mensuel est bien plus bas qu&apos;à l&apos;exemple 1, malgré une surface trois fois
          supérieure, car la fréquence est moindre.
        </p>
        <p>
          <strong>Exemple 3 — 200 m² nettoyés 2x/semaine.</strong> Petite surface : on retient
          0,48 €/m². Soit 200 × 0,48 × 2 × 4,33 ≈ 830 € par mois (HT). Mais attention : sur cette
          taille, le <strong>forfait minimum</strong> du prestataire peut relever la facture s&apos;il
          juge le temps de présence trop court pour être rentable.
        </p>

        <FactTable
          caption="Exemples de budget mensuel reconstitué (HT) — 2026"
          headers={["Surface", "Fréquence", "€/m²/passage", "Budget mensuel ≈"]}
          rows={[
            ["200 m²", "2x / sem", "0,48 €", "830 €"],
            ["500 m²", "5x / sem", "0,34 €", "3 680 €"],
            ["1 500 m²", "3x / sem", "0,38 €", "7 400 €"],
          ]}
        />
        <p>
          Ces montants restent des ordres de grandeur : ils ignorent les majorations horaires, les
          consommables et les prestations ponctuelles (vitrerie, sols spécifiques). Pour transformer
          une estimation en chiffrage ferme, voir le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>.
        </p>

        <h2 id="types-locaux">Prix selon le type de locaux</h2>
        <p>
          Tous les bureaux ne se nettoient pas au même rythme. La configuration des espaces et le
          niveau d&apos;exigence sanitaire pèsent directement sur la cadence, donc sur le prix au m².
          Un open space dégagé se traite vite ; des bureaux cloisonnés multiplient les obstacles ;
          un cabinet médical impose des protocoles de désinfection plus longs.
        </p>

        <FactTable
          caption="Prix indicatif par type de locaux (HT) — 2026"
          headers={["Type de locaux", "Prix / m² / passage", "Cadence repère"]}
          rows={[
            ["Open space dégagé", "0,28 – 0,42 €", "350 – 450 m²/h"],
            ["Bureaux cloisonnés", "0,38 – 0,55 €", "250 – 350 m²/h"],
            ["Locaux médicaux / labo", "0,45 – 0,70 €", "150 – 250 m²/h"],
            ["Commerces / surfaces de vente", "0,30 – 0,50 €", "300 – 400 m²/h"],
          ]}
        />
        <p>
          Les locaux médicaux et les laboratoires sont les plus chers au m² : ils combinent
          désinfection des surfaces de contact, traçabilité renforcée et souvent une fréquence
          quotidienne. À l&apos;inverse, un grand open space sans mobilier dense affiche le meilleur
          rapport surface/temps, donc le prix unitaire le plus bas.
        </p>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <p>
          À surface et fréquence égales, deux devis peuvent diverger fortement. Les principaux
          leviers de prix sont :
        </p>
        <ul>
          <li>
            <strong>Le périmètre des prestations</strong> : sanitaires, cuisine/coin café, vitrerie,
            sols spécifiques (moquette, PVC, parquet) ou simple entretien courant ne mobilisent pas
            le même temps.
          </li>
          <li>
            <strong>La cadence de nettoyage</strong> : un prestataire sérieux table sur 250 à 400 m²
            par heure pour des bureaux. Une cadence affichée bien plus élevée signale un devis
            sous-dimensionné.
          </li>
          <li>
            <strong>Les fournitures et consommables</strong> : papier, savon, sacs poubelle inclus
            ou non. Leur exclusion peut expliquer un prix d&apos;appel attractif.
          </li>
          <li>
            <strong>Les horaires d&apos;intervention</strong> : un nettoyage en soirée, tôt le matin,
            le week-end ou de nuit entraîne des majorations conventionnelles.
          </li>
          <li>
            <strong>La zone géographique</strong> : l&apos;Île-de-France et les grandes
            métropoles sont structurellement plus chères que les zones rurales.
          </li>
          <li>
            <strong>L&apos;encadrement et la qualité</strong> : contrôles qualité, chef
            d&apos;équipe, traçabilité des passages se paient, mais sécurisent la prestation.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 0,30 à 0,60 €/m² par passage pour des bureaux, soit environ 18 à 35 €/h facturés.",
            "Plus la fréquence et la surface sont élevées, plus le prix au m² baisse.",
            "Estimez votre budget mensuel : surface × €/m² × passages/semaine × 4,33.",
            "Le type de locaux compte : un open space coûte moins cher au m² qu'un cabinet médical.",
            "Un forfait minimum (90 à 150 €/mois) s'applique aux petits locaux, et un prix anormalement bas cache souvent une cadence irréaliste ou des prestations exclues.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA pour le coût réel.",
          ]}
        />

        <h2 id="inclus-options">Prestations incluses ou en option</h2>
        <p>
          Une grande partie des écarts de prix entre devis vient de ce qui est compté, ou non, dans
          le forfait de base. L&apos;entretien courant (poussières, sols, corbeilles, sanitaires de
          base) constitue le socle ; au-delà, plusieurs postes font gonfler la facture et doivent
          être explicitement listés.
        </p>
        <ul>
          <li>
            <strong>Vitrerie</strong> : le nettoyage des vitres est presque toujours en option, à
            une fréquence distincte (mensuelle ou trimestrielle), facturé au m² de vitrage ou au
            forfait. Une grande façade vitrée peut peser lourd.
          </li>
          <li>
            <strong>Sanitaires renforcés</strong> : désinfection approfondie, réapprovisionnement
            des consommables et traçabilité dépassent l&apos;entretien courant et se facturent souvent
            à part.
          </li>
          <li>
            <strong>Sols spécifiques</strong> : cristallisation de marbre, décapage-protection de
            sols PVC, shampouinage de moquette, entretien de parquet sont des prestations
            périodiques distinctes du nettoyage quotidien.
          </li>
          <li>
            <strong>Consommables</strong> : papier, savon, sacs poubelle. Inclus ou refacturés, ils
            font facilement varier un budget de plusieurs points.
          </li>
        </ul>
        <InfoCallout title="Le piège du forfait « tout compris »">
          Un devis qui annonce « tout inclus » sans détailler la vitrerie, les sols spécifiques ni
          les consommables mérite une demande de précision écrite. Ce qui n&apos;est pas listé n&apos;est
          généralement pas dû, et réapparaîtra en avenant.
        </InfoCallout>

        <h2 id="definition">Prix au m² ou tarif horaire : que demander ?</h2>
        <DefinitionBox term="Prix au m² (nettoyage)">
          Montant facturé pour nettoyer un mètre carré lors d&apos;un passage. Il se déduit du
          tarif horaire du prestataire divisé par la cadence de nettoyage (m²/heure). Demander à la
          fois le prix au m², la cadence retenue et le tarif horaire permet de vérifier qu&apos;un
          devis est mathématiquement cohérent.
        </DefinitionBox>

        <p>
          Pour aller plus loin sur la composition du tarif horaire (salaire chargé, encadrement,
          marge), consultez notre page dédiée au{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a>. Pour comprendre
          la logique des abonnements mensuels, voir le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>.
        </p>

        <h2 id="challenger-devis">Décomposer et challenger un devis au m²</h2>
        <p>
          Un devis de nettoyage de bureaux se challenge en remontant la chaîne de calcul du
          prestataire. Trois grandeurs suffisent à vérifier qu&apos;un prix tient debout : la{" "}
          <strong>cadence</strong> (m²/heure), le <strong>taux horaire facturé</strong> et le niveau
          d&apos;<strong>encadrement</strong>.
        </p>
        <ul>
          <li>
            <strong>Reconstituez le temps de présence</strong> : surface ÷ cadence. Pour 800 m² de
            bureaux à 300 m²/h, comptez environ 2 h 40 par passage. Si le devis facture nettement
            moins, soit la cadence retenue est irréaliste, soit des zones ne sont pas traitées.
          </li>
          <li>
            <strong>Recoupez avec le taux horaire</strong> : temps de présence × taux horaire =
            coût main-d&apos;œuvre du passage. Un taux inférieur à 18 €/h HT est difficilement
            compatible avec un salaire conventionnel chargé et un minimum de marge.
          </li>
          <li>
            <strong>Repérez l&apos;encadrement</strong> : un chef d&apos;équipe, des contrôles
            qualité et une traçabilité des passages ont un coût, mais sécurisent la prestation.
            Leur absence explique parfois un prix bas, au prix de la régularité.
          </li>
        </ul>
        <p>
          Pour appliquer cette grille à plusieurs offres et les mettre face à face sur une base
          identique, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
        </p>

        <h2 id="cout-revient">Lien entre prix affiché et coût de revient</h2>
        <p>
          Un prix au m² n&apos;est crédible que s&apos;il couvre le coût de revient du prestataire.
          Le poste dominant est la main-d&apos;œuvre : un salaire conventionnel de la propreté,
          chargé, représente la majeure partie de l&apos;heure facturée, auquel s&apos;ajoutent le
          matériel, les consommables, l&apos;encadrement, les frais de structure et une marge.
          Mécaniquement, un tarif horaire facturé sous le seuil du salaire chargé ne laisse aucune
          place au reste : il est suspect.
        </p>
        <p>
          Concrètement, un prix d&apos;appel très inférieur à la fourchette signale presque toujours
          l&apos;un de ces ajustements cachés : cadence gonflée (donc temps de présence réduit),
          prestations exclues du périmètre, consommables non inclus, ou personnel sous-déclaré. Pour
          situer le plancher salarial qui borde ce coût de revient, consultez la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
          Comparer un devis à cette base évite de confondre une vraie économie avec une prestation
          amputée.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          La meilleure façon d&apos;obtenir un prix juste est de fournir aux prestataires un cadre
          identique : surfaces détaillées, fréquences, prestations attendues et plages horaires.
          Vous comparez alors des offres réellement comparables. Pour aller plus loin, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Passez de l&apos;estimation au devis
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Cadrez votre besoin avec un modèle prêt à l&apos;emploi, puis demandez des devis
            comparables.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/reglementation/grille-salaire-proprete-2026" variant="primary">
              Voir la grille de salaire 2026
            </Button>
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="secondary">
              Comment comparer des devis
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
