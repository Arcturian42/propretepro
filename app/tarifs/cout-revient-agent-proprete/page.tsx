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
import { AUTHORS, ARTICLES, getArticle } from "@/lib/content";

const PATH = "/tarifs/cout-revient-agent-proprete";
const COVER = "/covers/cout-revient-agent-proprete.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];
const RELATED = ARTICLES.filter((a) => a.silo === "tarifs" && a.href !== PATH);

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Coût de revient d'un agent de propreté", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "Qu'est-ce que le coût de revient ?" },
  { id: "methode", label: "La méthode en 6 étapes" },
  { id: "salaire-charge", label: "Du salaire brut au coût chargé" },
  { id: "heures-productives", label: "Les heures réellement productives" },
  { id: "cout-productif", label: "Le coût horaire productif" },
  { id: "prix-vente", label: "Du coût chargé au prix de vente" },
  { id: "exemple", label: "Exemple chiffré de bout en bout" },
  { id: "erreurs", label: "Les erreurs qui détruisent la marge" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Coût de revient d'un agent de propreté : méthode 2026",
  description:
    "Méthode complète pour calculer le coût horaire chargé réel d'un agent de propreté (salaire, charges, congés, productivité) et fixer vos prix avec marge. Exemple chiffré 2026.",
  path: PATH,
    image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "coût de revient agent propreté",
    "coût horaire chargé nettoyage",
    "calcul coût agent de nettoyage",
    "prix de revient heure nettoyage",
    "marge entreprise de propreté",
  ],
});

const FAQ = [
  {
    question: "Quel est le coût de revient horaire réel d'un agent de propreté en 2026 ?",
    answer:
      "Pour un agent AS1 rémunéré autour de 12,30 €/h brut, le coût de revient horaire productif se situe généralement entre 22 et 24 €/h en 2026, hors taxes. On part du salaire brut, on ajoute environ 42 % de charges patronales, puis on divise le coût annuel chargé par les heures réellement productives (déduction faite des congés payés, jours fériés, absentéisme et temps de trajet inter-sites). Ce coût productif sert ensuite de base pour fixer un prix de vente avec marge, souvent entre 30 et 35 €/h.",
  },
  {
    question: "Pourquoi le coût horaire est-il bien plus élevé que le salaire brut ?",
    answer:
      "Deux effets se cumulent. D'abord les charges patronales, qui ajoutent environ 42 % au brut (avant réduction générale sur les bas salaires). Ensuite la productivité : un agent payé 1 607 heures par an n'en passe pas 1 607 sur les sites. En retirant cinq semaines de congés payés, les jours fériés, l'absentéisme et le temps de trajet entre deux chantiers, le nombre d'heures réellement facturables descend nettement. Le coût annuel chargé doit donc être réparti sur ces heures productives, ce qui gonfle le coût horaire réel.",
  },
  {
    question: "Quel taux de charges patronales retenir pour un agent de propreté ?",
    answer:
      "À titre indicatif, on retient souvent environ 42 % de charges patronales sur le salaire brut pour un calcul de coût de revient prudent. Ce taux varie selon le niveau de rémunération : la réduction générale de cotisations (ex-Fillon) abaisse fortement le taux effectif sur les salaires proches du SMIC, tandis que le taux AT/MP propre au secteur de la propreté et les cotisations conventionnelles le font remonter. Pour un chiffrage précis, calez-vous sur votre bulletin de paie réel et votre taux AT/MP notifié.",
  },
  {
    question: "Combien d'heures productives compter par an pour un agent à temps plein ?",
    answer:
      "Un temps plein est rémunéré sur 1 607 heures par an. En déduisant les cinq semaines de congés payés, les jours fériés chômés, un taux d'absentéisme courant et le temps de trajet inter-sites non facturable, les heures réellement productives tombent souvent entre 1 350 et 1 500 heures par an selon l'organisation. C'est ce dénominateur, et non les 1 607 heures théoriques, qui doit servir à calculer le coût horaire productif.",
  },
  {
    question: "Quelle marge appliquer sur le coût de revient d'un agent ?",
    answer:
      "La marge cible dépend de votre structure de frais généraux (encadrement, matériel, locaux, administratif) et de votre rentabilité visée. En pratique, après avoir couvert ces frais de structure, beaucoup d'entreprises de propreté visent un prix de vente situé 40 à 55 % au-dessus du coût horaire productif. Sur un coût productif de 22 à 24 €/h, cela conduit à un prix de vente conseillé d'environ 30 à 35 €/h HT. Un tarif vendu sous votre coût de revient productif vous fait travailler à perte, quelle que soit la marge affichée.",
  },
  {
    question: "Le coût de revient change-t-il selon l'échelon de l'agent ?",
    answer:
      "Oui. Un agent classé à un échelon supérieur (ATQS, chef d'équipe) a un salaire brut de base plus élevé, donc un coût chargé et un coût productif plus hauts. La prime d'ancienneté, les majorations pour travail de nuit, le dimanche ou les jours fériés alourdissent également le coût horaire réel. Il est donc indispensable de partir du bon salaire de base, en s'appuyant sur la grille de salaire de la branche, avant d'appliquer charges et productivité.",
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
          datasetSchema({
            name: "Coût de revient d'un agent de propreté en 2026 (France)",
            description:
              "Repères chiffrés indicatifs pour calculer le coût horaire chargé et le prix de vente d'un agent de propreté en 2026, hors taxes, sur le marché français.",
            path: PATH,
            dateModified: article.dateModified,
            temporalCoverage: "2026",
            keywords: ["coût de revient agent propreté", "coût horaire chargé nettoyage"],
            variables: ["Étape", "Base de calcul", "Montant ≈"],
            unitText: "EUR",
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Gestion"
        title="Coût de revient d'un agent de propreté : méthode et exemple 2026"
        intro="Combien vous coûte réellement une heure d'agent ? La méthode complète, du salaire brut au prix de vente conseillé, pour ne plus jamais signer un contrat sous votre coût de revient."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Le coût de revient horaire réel d&apos;un agent de propreté ne se résume pas à son salaire
          brut. Pour un agent <strong>AS1 à 12,30 €/h brut</strong>, on ajoute environ{" "}
          <strong>42 % de charges patronales</strong>, puis on répartit le coût annuel chargé sur les{" "}
          <strong>heures réellement productives</strong> (après congés, fériés, absentéisme et
          trajets). On obtient un <strong>coût horaire productif d&apos;environ 22 à 24 €/h</strong>,
          puis un <strong>prix de vente conseillé de 30 à 35 €/h</strong> (HT) une fois la marge et
          les frais de structure intégrés.
        </AnswerBox>

        <p>
          Le coût de revient est le chiffre le plus important — et le plus souvent mal calculé — d&apos;une
          entreprise de propreté. Beaucoup de dirigeants chiffrent leurs prestations à partir du
          salaire horaire brut, parfois majoré « à la louche », sans isoler les charges patronales
          ni corriger les heures payées mais non productives. Résultat : des contrats apparemment
          rentables qui, une fois la marge réelle reconstituée, font travailler à perte. Cette page
          déroule la méthode complète, étape par étape, avec un exemple chiffré de bout en bout.
        </p>

        <InfoCallout title="Lecture des chiffres">
          Tous les montants sont indicatifs, exprimés hors taxes (HT), pour le marché français 2026.
          Les taux de charges et le nombre d&apos;heures productives dépendent de votre situation
          réelle (rémunération, réduction générale de cotisations, taux AT/MP, organisation). Ils
          servent à poser une méthode, pas à remplacer votre comptabilité.
        </InfoCallout>

        <h2 id="definition">Qu&apos;est-ce que le coût de revient d&apos;un agent ?</h2>
        <DefinitionBox term="Coût de revient horaire productif">
          Montant que vous coûte réellement une heure de travail effectivement réalisée sur un site
          client. Il s&apos;obtient en additionnant le salaire brut et toutes les charges patronales
          pour obtenir le coût annuel chargé, puis en divisant ce coût par le nombre d&apos;heures
          réellement productives (et non par les heures payées). C&apos;est le plancher absolu en
          dessous duquel vendre une heure revient à perdre de l&apos;argent.
        </DefinitionBox>

        <p>
          La distinction clé est celle entre <strong>heures payées</strong> et{" "}
          <strong>heures productives</strong>. Un salarié à temps plein est rémunéré sur 1 607 heures
          par an, mais il ne passe pas ces 1 607 heures à nettoyer chez vos clients : congés payés,
          jours fériés, absences et déplacements amputent le temps réellement facturable. Ignorer cet
          écart est l&apos;erreur de calcul la plus coûteuse du secteur.
        </p>

        <PullQuote>
          Tant que vous ne connaissez pas votre coût horaire chargé réel, vous ne vendez pas une
          prestation : vous pariez sur votre marge.
        </PullQuote>

        <h2 id="methode">La méthode en 6 étapes</h2>
        <p>
          Le calcul du coût de revient suit une logique simple et toujours identique. On part du
          salaire de base de l&apos;agent et on remonte, étape après étape, jusqu&apos;au prix de
          vente conseillé :
        </p>
        <ol>
          <li>
            <strong>Salaire brut de base</strong> : le taux horaire conventionnel de l&apos;agent
            selon son échelon, à caler sur la{" "}
            <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
          </li>
          <li>
            <strong>+ Charges patronales</strong> : environ 42 % du brut à titre indicatif, à
            affiner selon la réduction générale de cotisations et le taux AT/MP du secteur (voir nos{" "}
            <a href="/reglementation/grille-salaire-proprete-2026">repères de rémunération</a>).
          </li>
          <li>
            <strong>Coût annuel chargé</strong> : le coût horaire chargé multiplié par les heures
            payées sur l&apos;année (1 607 h pour un temps plein).
          </li>
          <li>
            <strong>Heures réellement productives</strong> : on retranche congés payés (~5 semaines),
            jours fériés, absentéisme et temps de trajet inter-sites non facturable.
          </li>
          <li>
            <strong>Coût horaire productif</strong> : coût annuel chargé divisé par les heures
            productives. C&apos;est le coût de revient réel d&apos;une heure facturable.
          </li>
          <li>
            <strong>Prix de vente conseillé</strong> : on ajoute la couverture des frais de structure
            et une marge cible pour obtenir le tarif à proposer au client.
          </li>
        </ol>

        <h2 id="salaire-charge">Étape 1 et 2 : du salaire brut au coût chargé</h2>
        <p>
          La première brique est le <strong>salaire brut de base</strong>. Il dépend de l&apos;échelon
          de l&apos;agent : un AS1 en entretien courant ne se rémunère pas comme un agent qualifié de
          service (ATQS) ou un chef d&apos;équipe. Partez toujours du taux conventionnel applicable,
          puis ajoutez la prime d&apos;ancienneté et les éventuelles majorations (nuit, dimanche,
          jours fériés) propres au site.
        </p>
        <p>
          Vient ensuite l&apos;ajout des <strong>charges patronales</strong>. Sur le marché français,
          on retient à titre indicatif environ <strong>42 %</strong> du brut pour un calcul prudent.
          Ce taux est une moyenne : la réduction générale de cotisations abaisse fortement le taux
          effectif sur les rémunérations proches du SMIC, tandis que le taux AT/MP du secteur de la
          propreté et les cotisations conventionnelles le font remonter. Pour un chiffrage ferme,
          remplacez ce taux indicatif par votre coefficient de charges réel issu de la paie.
        </p>

        <FactTable
          caption="Du salaire brut au coût horaire chargé (HT, indicatif) — 2026"
          headers={["Étape", "Base de calcul", "Montant ≈"]}
          rows={[
            ["Salaire brut de base (AS1)", "Taux horaire conventionnel", "12,30 €/h"],
            ["+ Charges patronales", "~42 % du brut", "+ 5,17 €/h"],
            ["= Coût horaire chargé", "Brut + charges", "17,47 €/h"],
            ["Coût annuel chargé (temps plein)", "17,47 € × 1 607 h", "≈ 28 070 €/an"],
          ]}
        />
        <p>
          À ce stade, on a un <strong>coût horaire chargé d&apos;environ 17,50 €/h</strong>. Mais ce
          chiffre est trompeur : il suppose que l&apos;agent est productif 1 607 heures par an, ce qui
          n&apos;est jamais le cas. C&apos;est l&apos;étape suivante qui révèle le coût réel.
        </p>

        <h2 id="heures-productives">Étape 4 : les heures réellement productives</h2>
        <p>
          Un temps plein est payé 1 607 heures par an, mais une partie de ce temps n&apos;est pas
          facturable au client. Pour obtenir le coût de revient réel, il faut retrancher tout ce qui
          est rémunéré sans production sur site :
        </p>
        <ul>
          <li>
            <strong>Congés payés (~5 semaines)</strong> : l&apos;agent est payé mais absent des sites,
            soit environ 175 heures par an à déduire.
          </li>
          <li>
            <strong>Jours fériés chômés</strong> : selon le calendrier, on retire l&apos;équivalent de
            plusieurs journées de travail dans l&apos;année.
          </li>
          <li>
            <strong>Absentéisme</strong> : maladie, retards, aléas. Un taux courant de 5 à 8 % du
            temps de travail est prudent à provisionner.
          </li>
          <li>
            <strong>Temps de trajet inter-sites</strong> : les déplacements entre deux chantiers dans
            une même vacation sont du temps payé non facturable, souvent sous-estimé.
          </li>
        </ul>

        <FactTable
          caption="Des heures payées aux heures productives (temps plein, indicatif) — 2026"
          headers={["Poste", "Heures", "Heures restantes"]}
          rows={[
            ["Heures payées (temps plein)", "1 607 h", "1 607 h"],
            ["− Congés payés (~5 sem.)", "− 175 h", "1 432 h"],
            ["− Jours fériés chômés", "− 56 h", "1 376 h"],
            ["− Absentéisme (~5 %)", "− 69 h", "1 307 h"],
            ["− Trajets inter-sites non facturables", "− 50 h", "≈ 1 257 h"],
          ]}
        />
        <p>
          Dans cet exemple, on passe de 1 607 heures payées à environ <strong>1 250 à 1 350 heures
          réellement productives</strong>, selon l&apos;organisation. C&apos;est ce dénominateur, et
          lui seul, qui doit servir à répartir le coût annuel chargé.
        </p>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Répartir le coût chargé sur les heures réellement passées chez le client, et non sur les
          heures payées, change tout : c&apos;est ce qui sépare un devis rentable d&apos;un contrat
          travaillé à perte.
        </PullQuote>

        <h2 id="cout-productif">Étape 5 : le coût horaire productif</h2>
        <p>
          On divise désormais le coût annuel chargé par les heures productives, et non par les heures
          payées. C&apos;est ici que le coût horaire bondit par rapport au coût chargé brut :
        </p>
        <p>
          <strong>28 070 € de coût annuel chargé ÷ 1 257 heures productives ≈ 22,3 €/h.</strong> Avec
          un absentéisme plus marqué ou davantage de trajets, on atteint facilement 23 à 24 €/h. Le
          coût de revient réel d&apos;une heure d&apos;AS1 est donc de l&apos;ordre de{" "}
          <strong>22 à 24 €/h</strong>, soit près du double du salaire brut affiché de 12,30 €/h.
        </p>

        <InfoCallout title="Le piège du « brut + un peu »">
          Vendre une heure d&apos;agent à 18 ou 20 €/h en pensant marger parce que le brut n&apos;est
          « que » de 12,30 € est une illusion fréquente. À ce prix, vous êtes déjà sous votre coût de
          revient productif de 22 à 24 €/h : chaque heure travaillée vous appauvrit, avant même
          d&apos;avoir couvert le moindre frais de structure.
        </InfoCallout>

        <h2 id="prix-vente">Étape 6 : du coût chargé au prix de vente</h2>
        <p>
          Le coût horaire productif n&apos;est qu&apos;un plancher. Pour fixer un{" "}
          <strong>prix de vente</strong> viable, il faut encore couvrir les{" "}
          <strong>frais de structure</strong> (encadrement, contrôle qualité, matériel,
          consommables, locaux, administratif, assurance) puis ajouter une{" "}
          <strong>marge cible</strong>. En pratique, on majore le coût productif d&apos;un coefficient
          qui intègre ces deux composantes.
        </p>

        <FactTable
          caption="Du coût horaire productif au prix de vente (HT, indicatif) — 2026"
          headers={["Étape", "Base de calcul", "Montant ≈"]}
          rows={[
            ["Coût horaire productif", "Coût chargé ÷ heures productives", "23,00 €/h"],
            ["+ Frais de structure", "~20 % (encadrement, matériel, admin.)", "+ 4,60 €/h"],
            ["= Coût complet", "Productif + structure", "27,60 €/h"],
            ["+ Marge cible", "~20 % du coût complet", "+ 5,52 €/h"],
            ["= Prix de vente conseillé", "Coût complet + marge", "≈ 33 €/h"],
          ]}
        />
        <p>
          Selon le poids réel de votre structure et votre marge visée, le prix de vente conseillé
          pour un AS1 ressort entre <strong>30 et 35 €/h HT</strong>. Ce repère est cohérent avec les
          fourchettes du <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire du nettoyage</a> et
          avec la logique d&apos;abonnement décrite dans le{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">prix d&apos;une entreprise de nettoyage</a>.
        </p>

        <h2 id="exemple">Exemple chiffré de bout en bout</h2>
        <p>
          Reprenons l&apos;ensemble de la chaîne pour un agent <strong>AS1 à 12,30 €/h brut</strong>,
          à temps plein, sur des sites en entretien courant :
        </p>
        <ol>
          <li>
            <strong>Salaire brut</strong> : 12,30 €/h, soit 19 766 € sur 1 607 heures payées.
          </li>
          <li>
            <strong>+ Charges patronales (~42 %)</strong> : le coût horaire chargé passe à 17,47 €/h,
            soit un <strong>coût annuel chargé de ≈ 28 070 €</strong>.
          </li>
          <li>
            <strong>Heures productives</strong> : après congés, fériés, absentéisme et trajets, on
            retient ≈ <strong>1 257 heures</strong> réellement facturables.
          </li>
          <li>
            <strong>Coût horaire productif</strong> : 28 070 € ÷ 1 257 h ≈ <strong>22,3 €/h</strong>,
            arrondi à 23 €/h pour la prudence.
          </li>
          <li>
            <strong>+ Frais de structure (~20 %)</strong> et <strong>+ marge (~20 %)</strong> :{" "}
            le prix de vente conseillé ressort à <strong>≈ 33 €/h HT</strong>.
          </li>
        </ol>
        <p>
          Conclusion : un agent affiché à 12,30 €/h de brut doit se facturer autour de{" "}
          <strong>30 à 35 €/h HT</strong> pour couvrir charges, improductivité, structure et marge.
          Tout devis remporté nettement sous 25 €/h pour ce profil détruit de la valeur, sauf à
          rogner sur la qualité, la déclaration du personnel ou la cadence — ce qui se paie tôt ou
          tard.
        </p>

        <KeyTakeaways
          items={[
            "Le coût de revient d'un agent n'est pas son salaire brut : comptez charges (~42 %) et improductivité.",
            "Pour un AS1 à 12,30 €/h brut, le coût horaire chargé est d'environ 17,50 €/h.",
            "Répartissez le coût annuel chargé sur les heures productives (≈ 1 250-1 350 h), pas sur 1 607 h.",
            "Le coût horaire productif réel ressort autour de 22 à 24 €/h pour un AS1.",
            "Ajoutez frais de structure et marge : le prix de vente conseillé est de 30 à 35 €/h HT.",
            "Vendre sous le coût productif fait travailler à perte, quelle que soit la marge affichée.",
          ]}
        />

        <h2 id="erreurs">Les erreurs qui détruisent la marge</h2>
        <p>
          Trois erreurs reviennent systématiquement dans les chiffrages perdants. Les connaître
          permet de sécuriser chaque devis :
        </p>
        <ul>
          <li>
            <strong>Oublier l&apos;improductivité</strong> : diviser le coût chargé par 1 607 heures
            au lieu des heures réellement productives sous-estime le coût de 15 à 25 %. C&apos;est
            l&apos;erreur la plus coûteuse.
          </li>
          <li>
            <strong>Sous-estimer les charges</strong> : retenir un taux de charges trop optimiste, ou
            oublier le taux AT/MP propre à la propreté et les cotisations conventionnelles, abaisse
            artificiellement le coût horaire.
          </li>
          <li>
            <strong>Négliger les majorations</strong> : un site nettoyé de nuit, le dimanche ou un
            jour férié déclenche des majorations qui alourdissent le coût horaire réel et doivent être
            répercutées dans le prix. Voir nos repères sur les{" "}
            <a href="/reglementation/heures-supplementaires-proprete">heures supplémentaires</a>.
          </li>
        </ul>
        <p>
          Une fois votre coût de revient maîtrisé, vous pouvez challenger n&apos;importe quel devis,
          le vôtre comme celui d&apos;un concurrent. Pour appliquer cette logique à une grille de
          comparaison, suivez notre{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">méthode de comparaison des devis</a>.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Du coût de revient au prix juste
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Partez du bon salaire de base, puis vérifiez la cohérence de vos prix de vente.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/reglementation/grille-salaire-proprete-2026" variant="primary">
              Voir la grille de salaire 2026
            </Button>
            <Button href="/tarifs/tarif-horaire-nettoyage" variant="secondary">
              Comprendre le tarif horaire
            </Button>
          </div>
        </div>
        <SourcesBox sources={SOURCES.coutRevient} />

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
