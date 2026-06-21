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
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/tarifs/prix-nettoyage-vitres";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const related = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH).slice(0, 3);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Prix nettoyage de vitres", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "deux-modes", label: "Au m² ou à la vacation ?" },
  { id: "reperes-m2", label: "Repères de prix au m²" },
  { id: "reperes-vacation", label: "Repères à la vacation / heure" },
  { id: "facteurs", label: "Facteurs qui font bouger le prix" },
  { id: "hauteur-acces", label: "Hauteur, accès et matériel" },
  { id: "definition", label: "Vitrerie : de quoi parle-t-on ?" },
  { id: "ponctuel-contrat", label: "Vitrerie ponctuelle vs contrat" },
  { id: "challenger-devis", label: "Challenger un devis de vitrerie" },
  { id: "obtenir-devis", label: "Obtenir un devis fiable" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prix du nettoyage de vitres et vitrerie en 2026",
  description:
    "Prix du nettoyage de vitres en 2026 : 1 à 5 €/m² ou 30 à 55 €/h en vacation selon la hauteur, l'accès et la fréquence. Repères et facteurs de coût de la vitrerie.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prix nettoyage vitres",
    "tarif nettoyage vitrerie",
    "prix nettoyage vitres m2",
    "tarif laveur de vitres",
    "prix vitrerie professionnelle",
  ],
});

const FAQ = [
  {
    question: "Quel est le prix du nettoyage de vitres au m² en 2026 ?",
    answer:
      "Le nettoyage de vitres se facture généralement entre 1 et 5 € par m² de vitrage en 2026, hors taxes. Une vitre accessible de plain-pied au sol, lavée des deux faces, se situe dans le bas de la fourchette (1 à 2,50 €/m²). Dès qu'il faut une perche télescopique, une nacelle ou des cordistes pour atteindre des surfaces en hauteur, le prix au m² grimpe nettement (3 à 5 €/m² et au-delà). Le m² s'entend par face traitée : intérieur + extérieur double la surface facturée.",
  },
  {
    question: "Vaut-il mieux facturer la vitrerie au m² ou à la vacation ?",
    answer:
      "Cela dépend du chantier. La facturation au m² convient aux grandes surfaces vitrées homogènes (façades, baies) où l'on peut mesurer précisément. La vacation (un forfait de présence, par exemple une demi-journée) est plus adaptée aux petites surfaces dispersées, aux encadrements complexes ou aux interventions ponctuelles, où le temps d'accès et de mise en place pèse plus que la surface elle-même. Beaucoup de prestataires raisonnent en interne à l'heure (30 à 55 €/h HT) puis traduisent en prix au m² ou en forfait.",
  },
  {
    question: "Pourquoi le nettoyage de vitres en hauteur coûte-t-il beaucoup plus cher ?",
    answer:
      "La hauteur impose des moyens d'accès spécifiques : perche télescopique avec eau osmosée, nacelle élévatrice, échafaudage ou cordistes. Ces moyens représentent un coût de location, un temps de mise en place et des contraintes de sécurité (habilitations, EPI antichute, balisage) qui n'ont rien à voir avec un lavage de plain-pied. À surface égale, une vitre à 8 mètres peut coûter deux à quatre fois plus cher qu'une vitre accessible au sol.",
  },
  {
    question: "Le prix inclut-il l'intérieur et l'extérieur des vitres ?",
    answer:
      "Pas automatiquement. Un devis doit préciser s'il porte sur l'intérieur seul, l'extérieur seul ou les deux faces. Laver les deux côtés double la surface réellement traitée et donc, en grande partie, le prix. L'extérieur peut aussi nécessiter des moyens d'accès différents de l'intérieur. Demandez toujours sur quelle base (une ou deux faces) est calculé le m² annoncé.",
  },
  {
    question: "À quelle fréquence faut-il nettoyer les vitres de locaux professionnels ?",
    answer:
      "Pour des bureaux, une fréquence trimestrielle à mensuelle est courante ; pour des commerces avec vitrines exposées à la rue, on monte souvent à un passage hebdomadaire voire bi-hebdomadaire. Plus la fréquence est élevée, plus le prix unitaire au m² baisse, car le prestataire amortit ses déplacements et son matériel et car les vitres entretenues régulièrement se lavent plus vite. Un contrat récurrent obtient presque toujours un meilleur tarif qu'une intervention isolée.",
  },
  {
    question: "La TVA s'applique-t-elle au nettoyage de vitres ?",
    answer:
      "Oui, au taux normal de 20 % pour une prestation de nettoyage de vitres dans des locaux professionnels. Les tarifs communiqués par les prestataires sont quasiment toujours exprimés hors taxes (HT). Pensez à ajouter la TVA pour obtenir le coût réellement débité, et vérifiez que les frais de moyens d'accès (location de nacelle notamment) sont bien intégrés ou clairement listés.",
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
        kicker="Tarifs · Vitrerie"
        title="Prix du nettoyage de vitres et vitrerie en 2026"
        intro="Combien coûte le nettoyage de vitres pour des locaux professionnels ? Repères de prix au m² et à la vacation, et tous les facteurs (hauteur, accès, faces traitées, fréquence) qui font bouger le tarif d'une prestation de vitrerie."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le nettoyage de vitres se facture entre{" "}
          <strong>1 et 5 € par m² de vitrage</strong> (HT) ou{" "}
          <strong>30 à 55 €/h en vacation</strong>, selon la hauteur, l&apos;accessibilité et la
          fréquence. Une vitre lavée de plain-pied au sol reste dans le bas de la fourchette ; dès
          qu&apos;une <strong>perche, une nacelle ou des cordistes</strong> sont nécessaires, le prix
          au m² grimpe fortement. Le m² s&apos;entend <strong>par face</strong> : intérieur +
          extérieur double la surface facturée. La TVA à 20 % s&apos;ajoute aux prix HT.
        </AnswerBox>

        <p>
          La vitrerie est l&apos;une des prestations les plus mal cadrées de la propreté : deux
          devis pour les mêmes baies peuvent varier du simple au triple selon ce que l&apos;on
          compte. La raison est simple : le prix d&apos;un lavage de vitres dépend bien moins de la
          surface que de la façon d&apos;y accéder. Cette page donne des repères chiffrés et explique
          comment lire un devis de vitrerie pour ne pas comparer des prestations qui n&apos;ont rien
          à voir.
        </p>

        <InfoCallout title="Lecture des prix">
          Tous les montants ci-dessous sont indicatifs, exprimés hors taxes (HT), pour le marché
          français 2026. Ils servent à cadrer un budget et à challenger un devis, pas à remplacer un
          chiffrage ferme établi après visite technique, indispensable dès qu&apos;il y a de la
          hauteur.
        </InfoCallout>

        <h2 id="deux-modes">Au m² ou à la vacation : deux façons de facturer</h2>
        <p>
          La vitrerie se chiffre selon deux logiques, souvent combinées. Comprendre laquelle
          s&apos;applique évite la plupart des malentendus sur un devis.
        </p>
        <ul>
          <li>
            <strong>Au m² de vitrage</strong> : adapté aux grandes surfaces homogènes (façades
            rideaux, baies vitrées, verrières) où la mesure est précise et le geste répétitif. Le
            prix unitaire baisse quand la surface augmente.
          </li>
          <li>
            <strong>À la vacation ou à l&apos;heure</strong> : un forfait de présence (souvent une
            demi-journée minimum) pour des surfaces dispersées, des petites fenêtres à encadrements
            complexes ou des interventions ponctuelles, où le temps d&apos;accès domine.
          </li>
        </ul>
        <p>
          Dans les deux cas, le prestataire raisonne en interne à partir d&apos;un{" "}
          <strong>temps de travail</strong> et d&apos;un <strong>taux horaire</strong>. La vacation
          l&apos;exprime directement ; le prix au m² en découle après estimation de la cadence (m²
          de vitrage lavés par heure).
        </p>

        <h2 id="reperes-m2">Repères de prix au m² de vitrage</h2>
        <p>
          Le facteur le plus structurant n&apos;est pas la surface mais{" "}
          <strong>l&apos;accessibilité</strong>. Le tableau ci-dessous donne des ordres de grandeur
          au m² de vitrage, par face traitée, selon le mode d&apos;accès.
        </p>

        <FactTable
          caption="Prix indicatif du nettoyage de vitres au m² de vitrage, par face (HT) — 2026"
          headers={["Configuration", "Prix / m² / face", "Accès type"]}
          rows={[
            ["Vitres accessibles de plain-pied", "1,00 – 2,50 €", "Raclette, perche courte"],
            ["Vitrage en hauteur (perche eau osmosée)", "2,00 – 3,50 €", "Perche télescopique"],
            ["Façade nécessitant une nacelle", "3,00 – 5,00 €", "Nacelle élévatrice"],
            ["Surfaces vitrées sur corde (cordistes)", "4,50 – 8,00 €", "Travaux sur corde"],
          ]}
        />
        <p>
          Attention au piège classique : un prix « au m² » très bas s&apos;entend parfois{" "}
          <strong>pour une seule face</strong>. Si vous voulez l&apos;intérieur et l&apos;extérieur,
          la surface facturée double. De même, les <strong>encadrements de fenêtres</strong> (montants,
          appuis, châssis) sont parfois inclus, parfois facturés en supplément : un dépoussiérage et
          un nettoyage des cadres alourdissent le temps de présence.
        </p>

        <h2 id="reperes-vacation">Repères à la vacation et à l&apos;heure</h2>
        <p>
          Pour les petits chantiers et les interventions ponctuelles, la facturation au temps est
          souvent plus juste. Voici des repères de taux horaire facturé et de forfaits de vacation.
        </p>

        <FactTable
          caption="Prix indicatif de la vitrerie à l'heure et à la vacation (HT) — 2026"
          headers={["Format", "Repère de prix", "Remarque"]}
          rows={[
            ["Taux horaire laveur de vitres", "30 – 45 €/h", "Niveau du sol, matériel léger"],
            ["Taux horaire avec moyens d'accès", "40 – 55 €/h", "Perche, harnais, habilitations"],
            ["Vacation demi-journée", "150 – 280 €", "Forfait de présence minimum fréquent"],
            ["Vacation journée", "280 – 480 €", "Hors location nacelle"],
          ]}
        />
        <InfoCallout title="La location de nacelle se facture à part">
          Quand une nacelle élévatrice est nécessaire, sa location (souvent 150 à 400 € la journée
          selon le type et la hauteur, livraison comprise) est généralement refacturée en plus de la
          main-d&apos;œuvre. Un devis « tout compris » qui ne mentionne pas ce poste mérite une
          clarification écrite.
        </InfoCallout>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <p>
          À surface égale, un devis de vitrerie peut doubler selon plusieurs leviers. Les principaux
          sont :
        </p>
        <ul>
          <li>
            <strong>La hauteur et l&apos;accessibilité</strong> : c&apos;est le facteur n°1. Plain-pied,
            perche, nacelle ou corde changent radicalement le coût.
          </li>
          <li>
            <strong>Intérieur seul vs intérieur + extérieur</strong> : laver les deux faces double la
            surface réellement traitée.
          </li>
          <li>
            <strong>Les encadrements et châssis</strong> : nettoyer les cadres, appuis et montants
            ajoute du temps par rapport au seul vitrage.
          </li>
          <li>
            <strong>La fréquence</strong> : un contrat récurrent obtient un meilleur prix au m² qu&apos;une
            intervention isolée, et des vitres entretenues se lavent plus vite.
          </li>
          <li>
            <strong>L&apos;état initial</strong> : vitres très encrassées, traces de chantier, calcaire
            ou résidus collés demandent un traitement plus long, parfois un grattage.
          </li>
          <li>
            <strong>La zone géographique</strong> : l&apos;Île-de-France et les grandes métropoles
            restent structurellement plus chères que les zones rurales.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Comptez 1 à 5 €/m² de vitrage par face, ou 30 à 55 €/h en vacation, selon l'accès.",
            "Le m² s'entend par face : intérieur + extérieur double la surface facturée.",
            "La hauteur est le premier facteur de prix : perche, nacelle ou corde changent tout.",
            "La location de nacelle se refacture le plus souvent en plus de la main-d'œuvre.",
            "Un contrat récurrent obtient un meilleur tarif qu'une vitrerie ponctuelle isolée.",
            "Tous les prix sont hors taxes : ajoutez 20 % de TVA pour le coût réel.",
          ]}
        />

        <h2 id="hauteur-acces">Hauteur, accès et matériel : ce qui change la donne</h2>
        <p>
          La technique d&apos;accès retenue détermine à elle seule la structure de coût d&apos;une
          prestation de vitrerie. Quatre grandes familles couvrent la plupart des cas.
        </p>
        <ul>
          <li>
            <strong>Raclette classique au sol</strong> : la méthode la plus économique, limitée aux
            vitrages accessibles depuis le sol ou un petit escabeau.
          </li>
          <li>
            <strong>Perche télescopique à eau osmosée</strong> : permet d&apos;atteindre plusieurs
            étages depuis le sol, sans échafaudage, avec une eau purifiée qui sèche sans trace.
            Excellent rapport sécurité/coût en hauteur modérée.
          </li>
          <li>
            <strong>Nacelle élévatrice</strong> : pour les façades hautes ou en surplomb. Elle ajoute
            un coût de location, un temps de mise en place et des contraintes de balisage.
          </li>
          <li>
            <strong>Travaux sur corde (cordistes)</strong> : pour les tours et façades inaccessibles
            autrement. Main-d&apos;œuvre spécialisée et habilitée, c&apos;est l&apos;option la plus
            chère au m².
          </li>
        </ul>
        <p>
          Plus on monte dans cette échelle, plus la part sécurité (habilitations, EPI antichute,
          vérification du matériel) pèse dans le prix. C&apos;est normal : elle protège les
          intervenants et engage votre responsabilité de donneur d&apos;ordre.
        </p>

        <h2 id="definition">Vitrerie : de quoi parle-t-on exactement ?</h2>
        <DefinitionBox term="Nettoyage de vitres (vitrerie)">
          Prestation de propreté consistant à laver les surfaces vitrées d&apos;un bâtiment — baies,
          fenêtres, façades rideaux, verrières, vitrines — sur une ou deux faces, à l&apos;aide
          d&apos;outils adaptés (raclette, mouilleur, perche à eau osmosée) et, en hauteur, de moyens
          d&apos;accès (nacelle, corde). Elle se facture au m² de vitrage par face traitée ou à la
          vacation, et constitue presque toujours une prestation distincte de l&apos;entretien
          courant des locaux.
        </DefinitionBox>

        <p>
          C&apos;est pourquoi la vitrerie apparaît le plus souvent <strong>en option</strong> dans un
          contrat de nettoyage, à une fréquence propre. Pour situer ce poste dans un budget de
          propreté global, voir le{" "}
          <a href="/tarifs/nettoyage-bureaux-m2">prix du nettoyage de bureaux au m²</a> et le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>.
        </p>

        <h2 id="ponctuel-contrat">Vitrerie ponctuelle ou contrat récurrent ?</h2>
        <p>
          Le choix entre une intervention ponctuelle et un contrat régulier change la logique de
          prix et le niveau de service.
        </p>
        <ul>
          <li>
            <strong>Vitrerie ponctuelle</strong> : utile pour une remise en état, une vitrine sale
            ou un besoin saisonnier. Le prix au m² est plus élevé car le prestataire amortit ses
            déplacements et son matériel sur une seule visite, et un forfait minimum (vacation
            demi-journée) s&apos;applique souvent.
          </li>
          <li>
            <strong>Contrat récurrent</strong> : intégré au contrat de propreté à une fréquence
            définie (mensuelle, trimestrielle, hebdomadaire pour des vitrines). Le prix au m² baisse,
            la planification est anticipée et les vitres entretenues régulièrement restent plus
            faciles à laver.
          </li>
        </ul>
        <p>
          Pour des commerces dont la vitrine est un outil commercial, la fréquence prime sur le prix
          unitaire : une vitrine impeccable se paie, mais se voit. Pour des bureaux, un rythme
          trimestriel suffit généralement.
        </p>

        <h2 id="challenger-devis">Challenger un devis de vitrerie</h2>
        <p>
          Un devis de vitrerie se vérifie en s&apos;assurant que les quatre paramètres déterminants
          sont explicites. S&apos;ils manquent, le prix n&apos;est pas comparable d&apos;une offre à
          l&apos;autre.
        </p>
        <ul>
          <li>
            <strong>Surface et nombre de faces</strong> : le m² annoncé porte-t-il sur une ou deux
            faces ? C&apos;est la première source d&apos;écart.
          </li>
          <li>
            <strong>Mode d&apos;accès et location éventuelle</strong> : perche, nacelle, corde ? La
            location de nacelle est-elle incluse ou en sus ?
          </li>
          <li>
            <strong>Périmètre exact</strong> : vitrage seul ou vitrage + encadrements ? Vitrines
            extérieures comprises ?
          </li>
          <li>
            <strong>Fréquence et engagement</strong> : prestation isolée ou contrat ? Le prix
            unitaire doit refléter cet engagement.
          </li>
        </ul>
        <p>
          Pour appliquer une grille de lecture commune à plusieurs offres et les comparer sur une
          base identique, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>. Et
          pour vérifier qu&apos;un taux horaire facturé tient debout au regard du coût de revient,
          consultez le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>{" "}
          et la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="obtenir-devis">Obtenir un devis fiable</h2>
        <p>
          La meilleure façon d&apos;obtenir un prix juste est de fournir aux prestataires un cadre
          identique : surfaces vitrées mesurées, nombre de faces, hauteurs et contraintes
          d&apos;accès, fréquence souhaitée. Vous comparez alors des offres réellement comparables.
          Une visite technique reste indispensable dès qu&apos;il y a de la hauteur. Pour aller plus
          loin sur la logique tarifaire, voir le{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a>.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Passez de l&apos;estimation au devis
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Cadrez votre besoin de vitrerie, puis demandez des devis comparables sur une base
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
