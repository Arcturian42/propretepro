import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, howToSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout, PullQuote } from "@/components/sections/GeoBlocks";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/developpement/repondre-appel-offres-nettoyage";
const COVER = "/covers/repondre-appel-offres-nettoyage.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Développement", href: "/developpement" },
  { name: "Répondre à un appel d'offres", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "types-marches", label: "Marché public ou privé ?" },
  { id: "pieces-dossier", label: "Les pièces du dossier" },
  { id: "memoire-technique", label: "Le mémoire technique" },
  { id: "reprise-personnel", label: "Reprise du personnel (Annexe 7)" },
  { id: "chiffrage", label: "Chiffrer sans casser sa marge" },
  { id: "securiser-contrat", label: "Sécuriser le contrat" },
  { id: "erreurs", label: "Erreurs qui font perdre" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Répondre à un appel d'offres de nettoyage : la méthode complète 2026",
  description:
    "Méthode complète pour répondre à un appel d'offres de nettoyage : pièces du dossier (DC1, DC2, mémoire technique), chiffrage avec marge, reprise du personnel (Annexe 7) et clause de révision de prix.",
  path: PATH,
  image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "répondre à un appel d'offres de nettoyage",
    "appel d'offres nettoyage",
    "marché public nettoyage",
    "mémoire technique propreté",
    "cahier des charges nettoyage",
  ],
});

const FAQ = [
  {
    question: "Où trouver les appels d'offres de nettoyage ?",
    answer:
      "Les marchés publics de nettoyage sont publiés sur le BOAMP, sur le profil acheteur (plateformes de dématérialisation type PLACE, Maximilien, Achatpublic) et, au-dessus des seuils européens, au JOUE/TED. Les appels d'offres privés circulent via les directions achats des entreprises, les facility managers, les syndics et les plateformes de mise en relation. Une veille structurée (alertes par mots-clés et codes CPV 90910000 « services de nettoyage ») est indispensable pour ne pas les manquer.",
  },
  {
    question: "Qu'est-ce qu'un mémoire technique dans un appel d'offres de nettoyage ?",
    answer:
      "Le mémoire technique est le document dans lequel l'entreprise décrit comment elle exécutera la prestation : organisation des chantiers, moyens humains et encadrement, fréquences et protocoles, matériel et produits, démarche qualité et RSE, gestion de la continuité de service. C'est lui qui porte la note « valeur technique », souvent pondérée de 40 à 60 % de la note finale. Un mémoire générique perd des points : il doit être personnalisé au site et au cahier des charges (CCTP).",
  },
  {
    question: "La reprise du personnel est-elle obligatoire lors d'un changement de prestataire ?",
    answer:
      "Oui, sous conditions. L'annexe 7 de la convention collective de la propreté (IDCC 3043) impose à l'entreprise entrante de reprendre les salariés affectés au marché qui remplissent les critères d'ancienneté et de présence sur le site. Vous devez intégrer le coût réel de ce personnel transféré (ancienneté, classification, primes acquises) dans votre chiffrage : le sous-estimer est l'erreur la plus coûteuse d'une réponse à appel d'offres.",
  },
  {
    question: "Comment fixer son prix dans un appel d'offres de nettoyage ?",
    answer:
      "Partez du coût de revient horaire chargé réel d'un agent (salaire, charges patronales, congés, absentéisme, encadrement, matériel), multipliez-le par le temps nécessaire à chaque fréquence, puis ajoutez vos frais de structure et votre marge. Ne calez jamais votre prix sur celui du concurrent : un marché remporté à perte se paie pendant toute la durée du contrat, souvent 1 à 3 ans.",
  },
  {
    question: "Quels sont les critères de sélection d'un appel d'offres de nettoyage ?",
    answer:
      "Le règlement de consultation (RC) fixe les critères et leur pondération. On retrouve typiquement le prix (40 à 50 %), la valeur technique (40 à 60 %) et parfois des critères RSE, d'insertion ou de délai. Le moins-disant ne gagne pas toujours : c'est l'offre économiquement la plus avantageuse, au croisement du prix et de la qualité, qui l'emporte. Lire attentivement la pondération oriente l'effort sur le mémoire ou sur le prix.",
  },
  {
    question: "Comment protéger sa marge sur la durée du marché ?",
    answer:
      "Vérifiez la présence et la formule de la clause de révision de prix : elle réindexe le tarif chaque année sur des indices officiels (coût de la main-d'œuvre, SMIC, indices INSEE/Syntec). Sans révision, l'inflation salariale conventionnelle érode votre marge année après année. Examinez aussi la durée, les conditions de reconduction, les pénalités et le périmètre exact des prestations pour éviter les surcoûts non facturés.",
  },
];

const MEMOIRE_STEPS = [
  {
    name: "Analyser le CCTP et le site",
    text: "Décortiquer le cahier des charges (CCTP), les surfaces, les fréquences imposées et les contraintes d'accès. Réaliser si possible une visite de site pour dimensionner juste.",
  },
  {
    name: "Décrire l'organisation et les moyens humains",
    text: "Présenter l'équipe affectée, le taux d'encadrement, le plan de remplacement des absences et la continuité de service. C'est le cœur de la valeur technique.",
  },
  {
    name: "Détailler protocoles, matériel et produits",
    text: "Associer à chaque local des modes opératoires, des fréquences, du matériel (mécanisation, autolaveuses) et des produits, en cohérence avec les exigences d'hygiène du site.",
  },
  {
    name: "Formaliser la démarche qualité et RSE",
    text: "Plan de contrôle qualité, indicateurs, traçabilité du pointage, produits écolabellisés, insertion et conditions de travail : autant de points souvent notés.",
  },
  {
    name: "Personnaliser et relire",
    text: "Bannir le copier-coller générique : citer le nom du site, ses spécificités et le vocabulaire du CCTP. Faire relire l'offre et vérifier la complétude des pièces avant dépôt.",
  },
];

export default function Page() {
  const relatedHrefs = [
    "/reglementation/transfert-personnel-annexe-7-proprete",
    "/tarifs/cout-revient-agent-proprete",
    "/tarifs/comment-comparer-devis-nettoyage",
  ];
  const related = relatedHrefs
    .map((h) => ARTICLES.find((a) => a.href === h))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

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
          howToSchema({
            name: "Rédiger un mémoire technique de nettoyage qui gagne",
            description:
              "Les cinq étapes pour construire un mémoire technique personnalisé et compétitif en réponse à un appel d'offres de nettoyage.",
            steps: MEMOIRE_STEPS,
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Développement · Commercial"
        title="Répondre à un appel d'offres de nettoyage : la méthode complète"
        intro="Pièces du dossier, mémoire technique, chiffrage avec marge et reprise du personnel : la marche à suivre pour décrocher un marché de nettoyage sans sacrifier votre rentabilité."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Pour <strong>répondre à un appel d&apos;offres de nettoyage</strong>, déposez un dossier en
          deux volets : la <strong>candidature</strong> (DC1, DC2 ou DUME, attestations) et
          l&apos;<strong>offre</strong> (acte d&apos;engagement, prix détaillé et{" "}
          <strong>mémoire technique</strong>). La décision se joue sur le croisement{" "}
          <strong>prix / valeur technique</strong> — et non sur le seul moins-disant. Deux points
          déterminent votre rentabilité : intégrer le coût réel de la{" "}
          <strong>reprise du personnel (Annexe 7)</strong> et vérifier la{" "}
          <strong>clause de révision de prix</strong> qui protégera votre marge sur toute la durée du
          contrat.
        </AnswerBox>

        <p>
          Les appels d&apos;offres représentent une part majeure du chiffre d&apos;affaires des
          entreprises de propreté, en particulier sur les marchés tertiaires, publics et de santé.
          Pourtant, beaucoup de dossiers sont écartés pour des motifs évitables — pièce manquante,
          mémoire générique — ou, pire, remportés à un prix qui condamne la marge pendant toute la
          durée du marché. Ce guide détaille la méthode, du repérage de l&apos;avis jusqu&apos;à la
          sécurisation du contrat.
        </p>

        <h2 id="types-marches">Marché public ou marché privé ?</h2>
        <p>
          La première question est la nature du marché, car elle conditionne le formalisme et les
          documents attendus.
        </p>
        <ul>
          <li>
            <strong>Marché public</strong> (administrations, collectivités, hôpitaux, écoles) : régi
            par le Code de la commande publique. Au-delà de certains seuils, la procédure est
            « formalisée » (appel d&apos;offres ouvert) avec des règles strictes de publicité et de
            mise en concurrence ; en dessous, la procédure est « adaptée » (MAPA), plus souple. Les
            seuils sont révisés tous les deux ans : vérifiez toujours les montants en vigueur.
          </li>
          <li>
            <strong>Marché privé</strong> (entreprises, foncières, syndics) : la liberté contractuelle
            domine. Le donneur d&apos;ordre fixe son propre processus, mais la logique reste la même —
            un cahier des charges, une mise en concurrence et une grille de notation.
          </li>
        </ul>
        <InfoCallout title="Où chercher les avis">
          Côté public : le BOAMP, le profil acheteur et, au-dessus des seuils européens, le JOUE/TED.
          Filtrez sur le code CPV <strong>90910000</strong> (« services de nettoyage »). Côté privé :
          directions achats, facility managers, syndics et plateformes de consultation. Une veille
          outillée évite de découvrir un marché la veille de la clôture.
        </InfoCallout>

        <h2 id="pieces-dossier">Les pièces du dossier</h2>
        <p>
          Un dossier se construit en deux blocs : la candidature (qui êtes-vous, êtes-vous en règle ?)
          et l&apos;offre (que proposez-vous, à quel prix ?). Voici les pièces les plus fréquemment
          demandées.
        </p>
        <FactTable
          caption="Pièces types d'une réponse à appel d'offres de nettoyage"
          headers={["Bloc", "Document", "Rôle"]}
          rows={[
            ["Candidature", "DC1 (lettre de candidature)", "Identité, groupement éventuel, déclaration sur l'honneur"],
            ["Candidature", "DC2 (déclaration du candidat)", "Capacités financières, références, moyens"],
            ["Candidature", "DUME", "Formulaire européen pouvant remplacer DC1/DC2"],
            ["Candidature", "Attestations", "Régularité fiscale et sociale, assurance RC, Kbis"],
            ["Offre", "Acte d'engagement (ATTRI1)", "Engagement signé sur le prix et les conditions"],
            ["Offre", "BPU / DPGF", "Détail des prix unitaires ou décomposition du forfait"],
            ["Offre", "Mémoire technique", "Description de l'organisation et de la qualité (valeur technique)"],
          ]}
        />
        <p>
          La liste exacte figure dans le <strong>règlement de consultation (RC)</strong> : c&apos;est
          le document à lire en premier, car il fixe les pièces à fournir, les{" "}
          <strong>critères de sélection et leur pondération</strong>, la date limite et les modalités
          de dépôt (le plus souvent dématérialisé). Une seule pièce manquante peut rendre l&apos;offre
          irrecevable.
        </p>

        <h2 id="memoire-technique">Le mémoire technique : là où se gagne le marché</h2>
        <p>
          Le prix départage des offres proches, mais c&apos;est le mémoire technique qui fait la
          différence sur la <strong>valeur technique</strong>, souvent pondérée de 40 à 60 %. Un
          mémoire personnalisé, ancré dans le CCTP et le site, surclasse systématiquement un document
          générique. Construisez-le en cinq étapes.
        </p>
        <FactTable
          caption="Méthode de construction d'un mémoire technique"
          headers={["Étape", "Contenu attendu"]}
          rows={MEMOIRE_STEPS.map((s) => [s.name, s.text])}
        />
        <PullQuote cite={`${author.name}, ${author.role}`}>
          Un mémoire technique ne décrit pas votre entreprise en général : il décrit comment vous
          allez nettoyer <em>ce</em> site-là, avec <em>ces</em> contraintes-là.
        </PullQuote>

        <h2 id="reprise-personnel">La reprise du personnel (Annexe 7)</h2>
        <p>
          Sur un changement de prestataire, l&apos;<strong>annexe 7</strong> de la convention
          collective de la propreté impose à l&apos;entreprise entrante de{" "}
          <a href="/reglementation/transfert-personnel-annexe-7-proprete">
            reprendre les salariés affectés au marché
          </a>{" "}
          qui remplissent les conditions d&apos;ancienneté et de présence. C&apos;est un facteur de
          coût majeur, et non une variable d&apos;ajustement : vous héritez de l&apos;ancienneté, de
          la classification et des primes acquises des agents transférés.
        </p>
        <DefinitionBox term="Annexe 7 (reprise du personnel)">
          Dispositif conventionnel de la branche propreté organisant le transfert automatique des
          contrats de travail des agents affectés à un marché lorsqu&apos;il change de prestataire,
          sous conditions d&apos;ancienneté et de présence sur le site. L&apos;entreprise entrante
          reprend les salariés éligibles aux conditions acquises.
        </DefinitionBox>
        <p>
          Avant de chiffrer, demandez la liste du personnel transférable (effectifs, ancienneté,
          coefficients, primes). L&apos;ignorer conduit à une offre déconnectée du coût réel : c&apos;est
          la principale cause de marchés remportés… puis exécutés à perte.
        </p>

        <h2 id="chiffrage">Chiffrer sans casser sa marge</h2>
        <p>
          Le chiffrage part toujours du <strong>coût de revient</strong>, jamais du prix du
          concurrent. La démarche est descendante :
        </p>
        <ol>
          <li>
            Calculer le{" "}
            <a href="/tarifs/cout-revient-agent-proprete">coût horaire chargé réel d&apos;un agent</a>{" "}
            (salaire de la <a href="/reglementation/grille-salaire-proprete-2026">grille IDCC 3043</a>,
            charges patronales, congés, absentéisme, encadrement, matériel).
          </li>
          <li>Estimer le temps nécessaire par local et par fréquence imposée dans le CCTP.</li>
          <li>En déduire le nombre d&apos;heures, donc le coût direct de main-d&apos;œuvre.</li>
          <li>Ajouter les frais de structure, l&apos;encadrement, les consommables, puis la marge.</li>
        </ol>
        <FactTable
          caption="Illustration simplifiée d'un chiffrage mensuel (valeurs indicatives)"
          headers={["Poste", "Base", "Montant"]}
          rows={[
            ["Main-d'œuvre directe", "160 h × 22 €/h chargé", "3 520 €"],
            ["Encadrement & qualité", "≈ 8 % de la M.O.", "282 €"],
            ["Consommables & matériel", "Forfait mensuel", "190 €"],
            ["Frais de structure", "≈ 12 %", "479 €"],
            ["Marge (≈ 8 %)", "Sur coût total", "358 €"],
            ["Prix de vente mensuel", "—", "≈ 4 829 €"],
          ]}
        />
        <KeyTakeaways
          items={[
            "Lire le règlement de consultation en premier : pièces, critères et pondération orientent tout l'effort.",
            "Le mémoire technique porte la valeur technique (40 à 60 % de la note) : il doit être personnalisé au site.",
            "Intégrer dès le chiffrage le coût réel de la reprise du personnel (Annexe 7) — ancienneté, classification, primes.",
            "Chiffrer à partir du coût de revient, pas du prix supposé du concurrent : un marché à perte se subit sur 1 à 3 ans.",
            "Vérifier la clause de révision de prix : sans réindexation, l'inflation salariale conventionnelle ronge la marge.",
            "Une pièce manquante rend l'offre irrecevable : contrôler la complétude avant le dépôt dématérialisé.",
          ]}
        />

        <h2 id="securiser-contrat">Sécuriser le contrat : durée, révision, pénalités</h2>
        <p>
          Gagner ne suffit pas : encore faut-il que le marché reste rentable jusqu&apos;à son terme.
          Trois clauses méritent une lecture attentive.
        </p>
        <DefinitionBox term="Clause de révision de prix">
          Clause qui réajuste périodiquement (en général chaque année) le prix du marché en fonction
          de l&apos;évolution de coûts de référence, via une <strong>formule indexée</strong> sur des
          indices officiels (coût de la main-d&apos;œuvre, SMIC, indices INSEE/Syntec). Elle protège
          le prestataire contre la hausse des salaires conventionnels sur la durée du contrat.
        </DefinitionBox>
        <ul>
          <li>
            <strong>Durée et reconduction.</strong> Un marché pluriannuel sécurise le chiffre
            d&apos;affaires, mais fige aussi le prix : la clause de révision devient alors essentielle.
          </li>
          <li>
            <strong>Révision de prix.</strong> Sans formule de révision, une hausse de la{" "}
            <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire</a> en cours de
            marché ampute directement votre marge. Vérifiez la formule, sa périodicité et son indice.
          </li>
          <li>
            <strong>Pénalités et périmètre.</strong> Cernez les pénalités de non-qualité et le
            périmètre exact des prestations : les « petits plus » non facturés (vitrerie, remise en
            état) finissent par peser lourd.
          </li>
        </ul>

        <h2 id="erreurs">Erreurs qui font perdre (ou couler) un marché</h2>
        <ul>
          <li>
            <strong>Dossier incomplet ou hors délai.</strong> Pièce oubliée, signature manquante,
            dépôt dématérialisé raté : l&apos;offre est écartée sans être lue.
          </li>
          <li>
            <strong>Mémoire technique générique.</strong> Un copier-coller sans référence au site ni
            au CCTP plombe la note de valeur technique.
          </li>
          <li>
            <strong>Reprise du personnel sous-estimée.</strong> Chiffrer sans intégrer l&apos;ancienneté
            réelle des agents transférés mène droit à l&apos;exécution à perte.
          </li>
          <li>
            <strong>Prix calé sur le concurrent.</strong> Aligner son prix sans connaître son propre
            coût de revient revient à parier sa marge.
          </li>
          <li>
            <strong>Absence de révision de prix.</strong> Accepter un prix ferme sur plusieurs années
            sans clause d&apos;indexation, c&apos;est financer l&apos;inflation salariale à sa place.
          </li>
        </ul>
        <InfoCallout title="Bonne pratique">
          Construisez une trame de mémoire technique réutilisable, puis personnalisez-la à chaque
          consultation. Vous gagnez du temps sans tomber dans le générique — à condition de toujours
          réinjecter les spécificités du site et le vocabulaire du CCTP.
        </InfoCallout>

        {/* Sources externes faisant autorité (citabilité GEO + E-E-A-T).
            NB : portails officiels de référence — affiner vers les fiches profondes une fois confirmées. */}
        <SourcesBox
          sources={[
            {
              label: "Code de la commande publique",
              href: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000037701019",
              publisher: "Légifrance",
            },
            {
              label: "Bulletin officiel des annonces des marchés publics",
              href: "https://www.boamp.fr",
              publisher: "BOAMP",
            },
            {
              label: "Seuils de procédure et achats publics",
              href: "https://www.economie.gouv.fr/daj/seuils-de-procedure-et-seuils-de-publicite-des-marches-publics",
              publisher: "Direction des affaires juridiques (Bercy)",
            },
            {
              label: "Convention collective des entreprises de propreté (IDCC 3043)",
              href: "https://www.legifrance.gouv.fr/liste/idcc?idcc=3043",
              publisher: "Légifrance",
            },
          ]}
        />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Chiffrez juste avant de répondre
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Calculez le coût horaire chargé réel d&apos;un agent pour bâtir une offre rentable, reprise
            de personnel incluse.
          </p>
          <div className="mt-4">
            <Button href="/tarifs/cout-revient-agent-proprete" variant="primary">
              Calculer le coût de revient d&apos;un agent
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
