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

const PATH = "/tarifs/prix-remise-en-etat-nettoyage";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const related = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix remise en état", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "Remise en état : définition" },
  { id: "difference", label: "Remise en état vs entretien courant" },
  { id: "prix-prestation", label: "Prix par type de prestation" },
  { id: "facteurs", label: "Facteurs qui font le prix" },
  { id: "horaire-m2", label: "Au m² ou à l'heure ?" },
  { id: "exemples", label: "Exemples de budget" },
  { id: "challenger-devis", label: "Décomposer un devis" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix d'une remise en état (nettoyage approfondi) au m² en 2026",
  description:
    "Prix d'une remise en état ou nettoyage approfondi en 2026 : 2 à 8 €/m² selon la prestation, ou 25 à 45 €/h HT. Décapage, métallisation, grand nettoyage : tableaux par prestation et facteurs de prix.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix remise en état nettoyage",
    "tarif nettoyage approfondi m2",
    "prix décapage métallisation sol",
    "coût grand nettoyage ponctuel",
    "tarif remise en état m2",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix d'une remise en état de nettoyage en 2026 ?",
    answer:
      "Une remise en état se facture le plus souvent entre 2 et 8 € par m² (HT) selon le niveau de salissure et la nature des travaux, ou de 25 à 45 € de l'heure HT en régie. Un simple grand nettoyage approfondi se situe dans le bas de la fourchette (2 à 4 €/m²), tandis qu'un décapage complet suivi d'une métallisation des sols atteint le haut (5 à 8 €/m²). Un forfait minimum d'intervention (souvent 150 à 300 €) s'applique aux petites surfaces.",
  },
  {
    question: "Quelle différence entre une remise en état et un entretien courant ?",
    answer:
      "L'entretien courant est une prestation récurrente et légère (dépoussiérage, sols, sanitaires, corbeilles) facturée au passage, autour de 0,30 à 0,60 €/m². La remise en état est une intervention ponctuelle et intensive qui restaure un local dégradé ou jamais entretenu : décapage des sols, détartrage poussé, lessivage des murs, traitement des sols. Elle mobilise plus de temps, de matériel et de produits, d'où un prix au m² nettement supérieur.",
  },
  {
    question: "Combien coûte un décapage suivi d'une métallisation de sol ?",
    answer:
      "Le décapage-métallisation (décapage de l'ancienne protection puis pose de plusieurs couches d'émulsion protectrice) est l'une des prestations les plus techniques. Comptez généralement 4 à 8 € par m² (HT) selon l'état du sol, le nombre de couches d'émulsion et la nécessité de déplacer du mobilier. Le prix grimpe si le sol n'a jamais été protégé ou si l'ancienne métallisation est très encrassée.",
  },
  {
    question: "La remise en état se facture-t-elle au m² ou à l'heure ?",
    answer:
      "Les deux logiques coexistent. Sur des surfaces homogènes (sols d'un plateau, hall), le prix au m² est le plus lisible. Sur des chantiers hétérogènes ou très dégradés, où le temps est difficile à estimer à l'avance, le prestataire facture souvent en régie à l'heure (25 à 45 €/h HT), parfois avec un plafond. Demandez les deux : la cadence retenue (m²/h) doit rester cohérente avec le prix au m² affiché.",
  },
  {
    question: "Pourquoi le déplacement du mobilier fait-il monter le prix ?",
    answer:
      "Une remise en état des sols suppose souvent de dégager entièrement la zone : déplacer bureaux, étagères, mobilier lourd, puis tout remettre en place. Ce travail de manutention s'ajoute au temps de nettoyage pur et peut représenter une part importante du chiffrage. Un devis qui suppose des locaux déjà vidés sera moins cher : précisez toujours si le mobilier doit être déplacé par le prestataire.",
  },
  {
    question: "La TVA s'applique-t-elle à une remise en état ?",
    answer:
      "Oui. Les prestations de nettoyage et de remise en état relèvent du taux normal de TVA à 20 %. Les prix affichés par les prestataires sont presque toujours hors taxes (HT) : ajoutez la TVA pour obtenir le coût réellement débité. Aucun taux réduit ne s'applique à une remise en état de locaux professionnels.",
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
            name: "Prix de la remise en état en nettoyage en 2026 (France)",
            description:
              "Fourchettes de prix HT 2026 d'une remise en état (nettoyage approfondi) sur le marché français : 2 à 8 €/m² ou 25 à 45 €/h selon la prestation (décapage, métallisation, cristallisation, shampouinage, lessivage).",
            path: PATH,
            dateModified: article.dateModified,
            temporalCoverage: "2026",
            keywords: [
              "prix remise en état nettoyage",
              "tarif nettoyage approfondi m2",
              "décapage métallisation sol",
            ],
            variables: ["Prestation", "Prix / m²", "Repère horaire"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Remise en état"
        title="Prix d'une remise en état (nettoyage approfondi) au m²"
        intro="Combien coûte une remise en état ou un grand nettoyage ponctuel ? Fourchettes au m² et à l'heure par type de prestation — décapage, métallisation, lessivage — et tous les facteurs qui font bouger le devis."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, une remise en état coûte en moyenne{" "}
          <strong>2 à 8 € par m² (HT)</strong> selon le niveau de salissure et la nature des
          travaux, ou <strong>25 à 45 €/h facturés</strong> en régie. Un grand nettoyage approfondi
          se situe dans le bas de la fourchette ; un{" "}
          <strong>décapage suivi d&apos;une métallisation</strong> atteint le haut. Un forfait
          minimum (souvent 150 à 300 €) s&apos;applique aux petites surfaces. La TVA à 20 %
          s&apos;ajoute aux prix hors taxes.
        </AnswerBox>

        <p>
          La remise en état est une prestation ponctuelle bien distincte de l&apos;entretien
          courant. On la commande après des travaux, à la reprise d&apos;un local négligé, avant
          une cession, ou pour restaurer périodiquement des sols protégés. Comme chaque chantier est
          singulier, les prix sont plus dispersés que pour un nettoyage récurrent : cette page donne
          des repères au m² et à l&apos;heure, et explique comment décomposer un devis pour ne pas
          le signer à l&apos;aveugle.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. Ils servent à cadrer un budget et à challenger un devis, pas à remplacer un
          chiffrage ferme établi après visite technique sur site.
        </InfoCallout>

        <h2 id="definition">Remise en état : de quoi parle-t-on ?</h2>
        <DefinitionBox term="Remise en état (nettoyage approfondi)">
          Intervention ponctuelle et intensive visant à restaurer un local dégradé ou jamais
          entretenu, au-delà du simple entretien courant. Elle peut inclure le décapage et la
          protection des sols (métallisation), le détartrage poussé des sanitaires, le lessivage des
          murs et plafonds, le shampouinage des moquettes ou le dégraissage de cuisines. Son prix se
          mesure au m² ou à l&apos;heure, jamais au passage récurrent.
        </DefinitionBox>

        <p>
          Concrètement, on parle de remise en état dans plusieurs situations : reprise d&apos;un
          local après le départ d&apos;un occupant, locaux laissés sans entretien, sols protégés
          arrivés en fin de cycle (la couche d&apos;émulsion est encrassée et doit être refaite), ou
          encore grand nettoyage de printemps avant un événement. Le point commun : un effort très
          supérieur à la routine, sur une durée courte.
        </p>

        <h2 id="difference">Remise en état ou entretien courant ?</h2>
        <p>
          La confusion entre les deux est la première source de devis mal calibrés. L&apos;entretien
          courant est <strong>récurrent et léger</strong> ; la remise en état est{" "}
          <strong>ponctuelle et intensive</strong>. Les deux ne se chiffrent pas du tout de la même
          façon.
        </p>

        <FactTable
          caption="Entretien courant vs remise en état — repères 2026 (HT)"
          headers={["Critère", "Entretien courant", "Remise en état"]}
          rows={[
            ["Fréquence", "Récurrente (1 à 5x/sem)", "Ponctuelle (one-shot)"],
            ["Unité de prix", "€/m² par passage", "€/m² global ou €/h"],
            ["Repère de prix", "0,30 – 0,60 €/m²", "2 – 8 €/m²"],
            ["Cadence", "250 – 400 m²/h", "30 – 120 m²/h"],
            ["Matériel", "Léger (chariot, aspirateur)", "Monobrosse, autolaveuse, injection"],
          ]}
        />
        <p>
          L&apos;écart de cadence est révélateur : là où un agent traite 300 m²/h en entretien
          courant, il peut tomber à 40 m²/h sur un décapage. C&apos;est cette différence de
          productivité, et non une marge plus élevée, qui explique l&apos;essentiel du surcoût au
          m².
        </p>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Une remise en état facturée comme de l&apos;entretien courant est mathématiquement
          impossible : la cadence d&apos;un décapage est cinq à huit fois plus lente qu&apos;un
          passage de routine.
        </PullQuote>

        <h2 id="prix-prestation">Prix indicatif par type de prestation</h2>
        <p>
          Le mot « remise en état » recouvre des travaux très différents, chacun avec sa propre
          logique de prix. Le tableau ci-dessous donne les fourchettes les plus courantes pour les
          prestations dominantes du tertiaire.
        </p>

        <FactTable
          caption="Prix indicatif par type de prestation (HT) — 2026"
          headers={["Prestation", "Prix / m²", "Repère horaire"]}
          rows={[
            ["Grand nettoyage approfondi", "2 – 4 €", "25 – 35 €/h"],
            ["Décapage de sol", "3 – 6 €", "30 – 40 €/h"],
            ["Décapage + métallisation", "4 – 8 €", "35 – 45 €/h"],
            ["Cristallisation / lustrage marbre", "5 – 12 €", "35 – 50 €/h"],
            ["Shampouinage moquette", "2 – 5 €", "25 – 35 €/h"],
            ["Lessivage murs / plafonds", "3 – 7 €", "25 – 40 €/h"],
          ]}
        />
        <PullQuote cite={`${author.name}, ${author.role}`}>
          Si le décapage-métallisation et la cristallisation de marbre figurent en haut de la
          fourchette, c&apos;est qu&apos;ils additionnent un matériel spécifique, un temps de
          séchage entre couches et un vrai savoir-faire technique.
        </PullQuote>

        <p>
          Le décapage-métallisation et la cristallisation de marbre sont les plus chers : ils
          combinent un matériel spécifique (monobrosse, disques, émulsions, poudres de
          cristallisation), un temps de séchage entre couches et un savoir-faire technique. Le
          shampouinage de moquette et le grand nettoyage restent dans le bas de la fourchette, sauf
          taches incrustées ou très forte salissure.
        </p>

        <InfoCallout title="Le piège du forfait « tout compris »">
          Un devis de remise en état qui annonce un prix global sans détailler les prestations (un
          décapage est-il inclus ? combien de couches de métallisation ? le mobilier est-il déplacé
          ?) doit être précisé par écrit. Ce qui n&apos;est pas listé n&apos;est généralement pas dû
          et réapparaît en avenant.
        </InfoCallout>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <p>
          À surface égale, deux remises en état peuvent varier du simple au triple. Les principaux
          leviers de prix sont :
        </p>
        <ul>
          <li>
            <strong>L&apos;état initial du local</strong> : un sol entretenu régulièrement se
            restaure vite ; un sol jamais protégé, taché ou couvert de plusieurs couches
            d&apos;émulsion encrassée multiplie le temps de décapage.
          </li>
          <li>
            <strong>Le type de sol</strong> : PVC, carrelage, béton ciré, marbre, parquet ou
            moquette n&apos;appellent ni le même produit, ni la même cadence. Le marbre
            (cristallisation) et la moquette (injection-extraction) sont les plus techniques.
          </li>
          <li>
            <strong>La surface</strong> : en dessous d&apos;un certain seuil, le temps fixe
            (installation, séchage, manutention) pèse lourd et fait grimper le prix au m² ; un
            forfait minimum s&apos;applique.
          </li>
          <li>
            <strong>Le déplacement du mobilier</strong> : dégager puis remettre en place bureaux et
            rayonnages ajoute un temps de manutention parfois équivalent au nettoyage lui-même.
          </li>
          <li>
            <strong>L&apos;accessibilité et les horaires</strong> : intervention de nuit, en
            week-end, en site occupé ou en étages sans ascenseur entraîne des majorations.
          </li>
          <li>
            <strong>L&apos;évacuation des déchets</strong> : eaux de décapage, anciens revêtements,
            encombrants à évacuer en déchèterie peuvent être facturés à part.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 2 à 8 €/m² (HT) pour une remise en état, ou 25 à 45 €/h facturés en régie.",
            "Le grand nettoyage approfondi est le moins cher ; le décapage-métallisation et la cristallisation de marbre sont les plus chers.",
            "La cadence chute (30 à 120 m²/h) par rapport à l'entretien courant (250 à 400 m²/h) : c'est ce qui explique le surcoût.",
            "L'état initial, le type de sol et le déplacement du mobilier sont les facteurs les plus structurants.",
            "Un forfait minimum (souvent 150 à 300 €) s'applique aux petites surfaces.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA pour le coût réel.",
          ]}
        />

        <h2 id="horaire-m2">Facturer au m² ou à l&apos;heure ?</h2>
        <p>
          Les deux logiques sont liées et toutes deux légitimes. Le prestataire estime un temps de
          travail à partir d&apos;une cadence (par exemple 40 à 80 m²/h pour un décapage), puis
          applique son tarif horaire facturé. Le prix au m² affiché en découle.
        </p>
        <ul>
          <li>
            <strong>Au m²</strong> : adapté aux surfaces homogènes (un plateau, un hall), où la
            cadence est prévisible. C&apos;est le repère le plus lisible pour comparer des devis.
          </li>
          <li>
            <strong>À l&apos;heure (régie)</strong> : adapté aux chantiers hétérogènes ou très
            dégradés, où le temps est difficile à estimer. Exigez alors une estimation du nombre
            d&apos;heures et, si possible, un plafond.
          </li>
        </ul>
        <p>
          Demandez toujours les deux informations : le prix au m², la cadence retenue et le tarif
          horaire. Elles permettent de vérifier la cohérence d&apos;un devis. Pour la composition du
          tarif horaire (salaire chargé, encadrement, marge), voir notre page sur le{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a>.
        </p>

        <h2 id="exemples">Exemples de budget reconstitué</h2>
        <p>
          Pour situer un devis dans une fourchette crédible, reconstituez le budget à partir de la
          surface, du prix au m² de la prestation et d&apos;un éventuel forfait minimum.
        </p>

        <FactTable
          caption="Exemples de budget de remise en état (HT) — 2026"
          headers={["Cas", "Surface", "€/m²", "Budget ≈"]}
          rows={[
            ["Grand nettoyage plateau", "250 m²", "3 €", "750 €"],
            ["Décapage + métallisation hall", "120 m²", "6 €", "720 €"],
            ["Cristallisation marbre accueil", "60 m²", "9 €", "540 €"],
            ["Shampouinage moquette open space", "400 m²", "3,5 €", "1 400 €"],
          ]}
        />
        <p>
          Ces montants restent des ordres de grandeur : ils ignorent le déplacement du mobilier, les
          majorations horaires et l&apos;évacuation des déchets. Sur une petite surface, le forfait
          minimum du prestataire peut relever la facture au-delà du calcul théorique au m².
        </p>

        <h2 id="challenger-devis">Décomposer et challenger un devis</h2>
        <p>
          Un devis de remise en état se vérifie en remontant la chaîne de calcul. Trois grandeurs
          suffisent : la <strong>cadence</strong> (m²/h propre à la prestation), le{" "}
          <strong>taux horaire facturé</strong> et le périmètre exact des travaux.
        </p>
        <ul>
          <li>
            <strong>Reconstituez le temps</strong> : surface ÷ cadence. Pour 120 m² de décapage à
            50 m²/h, comptez environ 2 h 30. Si le devis facture nettement moins, soit la cadence
            est irréaliste, soit une étape (déplacement de mobilier, couches de métallisation) est
            escamotée.
          </li>
          <li>
            <strong>Recoupez avec le taux horaire</strong> : temps × taux horaire = coût
            main-d&apos;œuvre. Un taux inférieur à 25 €/h HT est difficilement compatible avec une
            prestation technique et un salaire conventionnel chargé.
          </li>
          <li>
            <strong>Vérifiez le périmètre</strong> : produits et matériel inclus, nombre de couches
            d&apos;émulsion, mobilier déplacé ou non, évacuation des déchets. C&apos;est là que se
            cachent les écarts entre offres.
          </li>
        </ul>
        <p>
          Pour appliquer cette grille à plusieurs offres sur une base identique, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
          Pour situer le coût de revient d&apos;un agent qui borde ces prix, voir le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de
          propreté</a> et la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          La remise en état est la prestation où la visite technique compte le plus : seul un
          passage sur site permet d&apos;évaluer l&apos;état réel des sols et le temps nécessaire.
          Pour comparer des offres réellement comparables, fournissez à chaque prestataire le même
          cadre : surfaces, type de sols, état constaté, prestations attendues, contraintes
          d&apos;accès et d&apos;horaires.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Passez de l&apos;estimation au devis
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Cadrez votre besoin de remise en état, puis demandez des devis comparables sur une base
            identique.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/tarifs/comment-comparer-devis-nettoyage" variant="primary">
              Comment comparer des devis
            </Button>
            <Button href="/tarifs/nettoyage-bureaux-m2" variant="secondary">
              Prix du nettoyage de bureaux
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
