import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema, howToSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout } from "@/components/sections/GeoBlocks";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { SOURCES } from "@/lib/sources";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, ARTICLES } from "@/lib/content";

const PATH = "/entreprise-de-nettoyage";
const DATE_PUBLISHED = "2026-06-27";
const DATE_MODIFIED = "2026-06-27";
const READ_MINUTES = 15;
const author = AUTHORS["marc-leroy"];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Entreprise de nettoyage", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "Qu'est-ce qu'une entreprise de nettoyage" },
  { id: "creer", label: "Créer son entreprise" },
  { id: "reglementation", label: "Cadre réglementaire (IDCC 3043)" },
  { id: "salaires", label: "Salaires et coût du travail" },
  { id: "tarifs", label: "Fixer ses tarifs" },
  { id: "rentabilite", label: "Coût de revient et rentabilité" },
  { id: "marches", label: "Gagner des marchés" },
  { id: "outils", label: "S'outiller" },
  { id: "chiffres", label: "Chiffres clés du secteur" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Entreprise de nettoyage : le guide complet (création, gestion, rentabilité)",
  description:
    "Le guide complet pour créer et piloter une entreprise de nettoyage en France : statut, réglementation IDCC 3043, salaires, tarifs, coût de revient, appels d'offres et outils.",
  path: PATH,
  type: "article",
  publishedTime: DATE_PUBLISHED,
  modifiedTime: DATE_MODIFIED,
  authors: [author.name],
  keywords: [
    "entreprise de nettoyage",
    "créer une entreprise de nettoyage",
    "entreprise de propreté",
    "gérer une entreprise de nettoyage",
    "rentabilité entreprise nettoyage",
  ],
});

const FAQ = [
  {
    question: "Comment créer une entreprise de nettoyage en France ?",
    answer:
      "Il faut choisir un statut juridique (micro-entreprise, SASU/SAS, EURL/SARL), immatriculer l'entreprise, souscrire une assurance responsabilité civile professionnelle, puis se mettre en conformité avec la convention collective de la propreté (IDCC 3043) dès la première embauche. Aucun diplôme n'est obligatoire, mais une connaissance des coûts et de la réglementation est déterminante pour la rentabilité.",
  },
  {
    question: "Quel budget pour démarrer une entreprise de nettoyage ?",
    answer:
      "Le ticket d'entrée est faible : l'activité demande peu de matériel au départ (consommables, petit équipement, éventuellement une autolaveuse ou une monobrosse). Les principaux postes sont l'assurance, le fonds de roulement pour avancer les salaires avant paiement des clients, et les outils de gestion. Le vrai investissement est commercial et organisationnel, pas matériel.",
  },
  {
    question: "Une entreprise de nettoyage est-elle rentable ?",
    answer:
      "Oui, à condition de maîtriser le coût de revient horaire chargé d'un agent et la productivité (m²/h). La marge se joue sur le chiffrage : un prix fixé sous le coût réel, des cadences surestimées ou une reprise de personnel mal anticipée détruisent la rentabilité. Les entreprises performantes pilotent ces indicateurs en continu.",
  },
  {
    question: "Quelle convention collective pour une entreprise de nettoyage ?",
    answer:
      "Les entreprises de propreté relèvent de la convention collective nationale des entreprises de propreté et services associés, identifiée par l'IDCC 3043. Elle fixe les classifications, les salaires minima, les primes, les congés et la reprise de personnel (annexe 7).",
  },
  {
    question: "Comment trouver des clients quand on lance son entreprise de nettoyage ?",
    answer:
      "Les leviers principaux sont la prospection directe auprès des bureaux, commerces, copropriétés et collectivités, la réponse aux appels d'offres (privés et marchés publics) et le bouche-à-oreille appuyé sur une qualité constante. Un devis clair et un cahier des charges bien compris font souvent la différence.",
  },
  {
    question: "Faut-il un diplôme pour ouvrir une entreprise de nettoyage ?",
    answer:
      "Non, aucun diplôme n'est légalement exigé pour créer une entreprise de nettoyage. En revanche, des certifications (qualité, sécurité, environnement) et la maîtrise de la convention collective et du chiffrage sont des atouts forts pour gagner des marchés et préserver les marges.",
  },
];

const RELATED = [
  "/reglementation/convention-collective-proprete-idcc-3043",
  "/tarifs/cout-revient-agent-proprete",
  "/developpement/repondre-appel-offres-nettoyage",
]
  .map((href) => ARTICLES.find((a) => a.href === href))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

export default function Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema({
            headline: "Entreprise de nettoyage : le guide complet",
            description:
              "Créer et piloter une entreprise de nettoyage en France : statut, réglementation IDCC 3043, salaires, tarifs, rentabilité, appels d'offres et outils.",
            path: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
          howToSchema({
            name: "Comment créer une entreprise de nettoyage",
            description:
              "Étapes clés pour créer une entreprise de propreté conforme et rentable en France.",
            steps: [
              { name: "Choisir un statut juridique", text: "Sélectionner la forme adaptée (micro-entreprise, SASU, EURL/SARL) selon le projet et le volume d'activité visé." },
              { name: "Immatriculer l'entreprise", text: "Déclarer l'activité et obtenir un numéro SIRET via le guichet unique des formalités des entreprises." },
              { name: "Souscrire les assurances", text: "Souscrire au minimum une responsabilité civile professionnelle, souvent exigée par les clients et les marchés." },
              { name: "Se mettre en conformité sociale", text: "Appliquer la convention collective IDCC 3043 dès la première embauche : classification, salaire minimum, primes et déclarations." },
              { name: "Chiffrer et prospecter", text: "Calculer le coût de revient horaire, fixer des prix avec marge et démarcher bureaux, commerces, copropriétés et collectivités." },
            ],
          }),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Guide pilier"
        title="Entreprise de nettoyage : le guide complet"
        intro="Créer, structurer et faire grandir une entreprise de propreté en France : du choix du statut à la rentabilité, en passant par la réglementation, les prix et les marchés."
        author={author}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        readMinutes={READ_MINUTES}
        toc={TOC}
        noCover
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Créer une <strong>entreprise de nettoyage</strong> est accessible — peu de capital, aucun
          diplôme obligatoire — mais la réussite repose sur trois piliers : la{" "}
          <strong>conformité</strong> à la convention collective de la propreté (IDCC 3043), un{" "}
          <strong>chiffrage rigoureux</strong> fondé sur le coût de revient horaire chargé, et une{" "}
          <strong>organisation</strong> capable de tenir la qualité sur le terrain. C&apos;est sur le
          chiffrage et l&apos;exploitation, bien plus que sur le matériel, que se joue la rentabilité.
        </AnswerBox>

        <p>
          Le secteur de la propreté emploie plus de 600 000 salariés en France et reste très ouvert :
          chaque année, de nouvelles structures se lancent sur le nettoyage de bureaux, de commerces,
          de copropriétés ou de sites industriels. Ce guide pilier rassemble l&apos;essentiel pour créer et
          piloter une entreprise de nettoyage, et renvoie vers nos guides détaillés sur chaque sujet.
        </p>

        <h2 id="definition">Qu&apos;est-ce qu&apos;une entreprise de nettoyage</h2>
        <DefinitionBox term="Entreprise de propreté">
          Entreprise dont l&apos;activité principale est le nettoyage et l&apos;entretien de locaux et
          de surfaces pour des clients professionnels (bureaux, commerces, industries) ou des
          collectivités. Elle relève de la convention collective nationale des entreprises de propreté
          (IDCC 3043) et facture des prestations d&apos;entretien courant ou de remise en état.
        </DefinitionBox>
        <p>
          On distingue l&apos;<strong>entretien courant</strong> (prestations récurrentes :
          nettoyage quotidien ou hebdomadaire de bureaux, parties communes, magasins) des{" "}
          <strong>interventions ponctuelles</strong> (remise en état, fin de chantier, vitrerie). Une
          entreprise peut se spécialiser (médical, industriel, copropriété) ou rester généraliste,
          voire évoluer vers le <em>multiservices</em> en agrégeant accueil, espaces verts ou
          maintenance.
        </p>

        <h2 id="creer">Créer son entreprise de nettoyage</h2>
        <p>
          La création suit un parcours simple, mais chaque choix a des conséquences sur la fiscalité,
          la protection sociale et la crédibilité face aux donneurs d&apos;ordre.
        </p>
        <ol>
          <li>
            <strong>Choisir un statut juridique.</strong> La micro-entreprise convient pour tester
            l&apos;activité, mais ses plafonds et l&apos;impossibilité de déduire les charges la
            limitent vite dès qu&apos;on embauche. La SASU/SAS ou l&apos;EURL/SARL sont mieux adaptées
            à une activité avec salariés et marchés.
          </li>
          <li>
            <strong>Immatriculer l&apos;entreprise</strong> via le guichet unique pour obtenir un
            SIRET et déclarer le code d&apos;activité du nettoyage.
          </li>
          <li>
            <strong>Souscrire une assurance responsabilité civile professionnelle</strong>, presque
            toujours exigée par les clients et indispensable dans les appels d&apos;offres.
          </li>
          <li>
            <strong>Se mettre en conformité sociale</strong> dès la première embauche : application de
            la convention IDCC 3043, classification correcte, salaire minimum conventionnel,
            déclarations URSSAF et DSN.
          </li>
        </ol>
        <InfoCallout title="Le piège du démarrage">
          Beaucoup de créateurs sous-estiment le besoin en fonds de roulement : les salaires se paient
          chaque mois, alors que les clients règlent souvent à 30 ou 45 jours. Prévoir cette avance de
          trésorerie est aussi important que de trouver les premiers contrats.
        </InfoCallout>

        <h2 id="reglementation">Le cadre réglementaire (IDCC 3043)</h2>
        <p>
          Toute entreprise de propreté est encadrée par la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective nationale des entreprises de propreté (IDCC 3043)
          </a>
          . Elle fixe les classifications, les salaires minima, les primes, les congés et la
          prévoyance. Deux mécanismes méritent une attention particulière :
        </p>
        <ul>
          <li>
            La <a href="/reglementation/classification-echelon-agent-proprete">classification</a> :
            chaque salarié relève d&apos;un échelon (AS1 à ATQS, puis maîtrise et cadres) selon les
            tâches réellement exercées, ce qui détermine son salaire minimum.
          </li>
          <li>
            La <a href="/reglementation/transfert-personnel-annexe-7-proprete">reprise de personnel
            (annexe 7)</a> : lors d&apos;un changement de prestataire, l&apos;entreprise entrante
            reprend les salariés affectés au marché. C&apos;est un point décisif lorsqu&apos;on gagne
            ou perd un contrat.
          </li>
        </ul>
        <p>
          S&apos;ajoutent les obligations communes à toute entreprise employeuse : durée du travail,
          heures supplémentaires, congés payés et, depuis la réforme, la{" "}
          <a href="/reglementation/facturation-electronique-2026">facturation électronique</a>.
        </p>

        <h2 id="salaires">Salaires et coût du travail</h2>
        <p>
          La masse salariale représente l&apos;essentiel des coûts d&apos;une entreprise de nettoyage.
          Le point de départ est la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a> :
          en 2026, le minimum conventionnel d&apos;un agent de service AS1 (coefficient 110) s&apos;établit
          autour de 12,30 €/h brut, légèrement au-dessus du SMIC. À ce taux de base s&apos;ajoutent la
          prime d&apos;ancienneté, les primes de conditions de travail et les majorations pour horaires
          atypiques (nuit, dimanche, jours fériés).
        </p>
        <p>
          Mais le taux horaire de grille ne suffit pas à chiffrer : il faut raisonner en{" "}
          <strong>coût chargé</strong>, en intégrant les cotisations patronales (voir{" "}
          <a href="/reglementation/urssaf-cotisations-proprete">URSSAF et cotisations</a>), les congés
          et l&apos;absentéisme.
        </p>

        <h2 id="tarifs">Fixer ses tarifs</h2>
        <p>
          Bien fixer ses prix est la compétence qui distingue une entreprise pérenne d&apos;une
          entreprise qui s&apos;épuise. Les repères de marché dépendent du type de site :
        </p>
        <FactTable
          caption="Repères de prix indicatifs (HT, marché français) — voir guides détaillés"
          headers={["Prestation", "Repère de prix", "Guide"]}
          rows={[
            ["Nettoyage de bureaux", "0,30 à 0,60 €/m²/passage", "Prix au m²"],
            ["Tarif horaire", "Selon coût chargé + marge", "Tarif horaire"],
            ["Copropriété", "Par lot et par mois", "Prix copropriété"],
            ["Fin de chantier", "Au m², selon état", "Prix fin de chantier"],
          ]}
        />
        <p>
          Ces fourchettes ne sont que des points de départ : le bon prix est toujours celui qui couvre
          votre coût de revient et dégage une marge. Nos guides développent chaque cas :{" "}
          <a href="/tarifs/nettoyage-bureaux-m2">prix du nettoyage de bureaux au m²</a>,{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire</a>,{" "}
          <a href="/tarifs/prix-entreprise-nettoyage">forfaits et abonnements</a> et{" "}
          <a href="/tarifs/comment-comparer-devis-nettoyage">comment comparer des devis</a>.
        </p>

        <h2 id="rentabilite">Coût de revient et rentabilité</h2>
        <p>
          La rentabilité d&apos;un contrat se décide au moment du chiffrage. La méthode tient en deux
          questions : combien me coûte réellement une heure d&apos;agent, et combien de m² cet agent
          traite-t-il par heure sur ce site ?
        </p>
        <KeyTakeaways
          items={[
            "Le coût de revient horaire chargé (salaire + charges + congés + absentéisme) est la base de tout prix de vente.",
            "La productivité (m²/h) varie fortement selon le type de local, le matériel et le niveau de finition : la mesurer évite de sous-chiffrer.",
            "Une marge nette saine se construit contrat par contrat, pas en moyenne : un seul marché déficitaire peut absorber la marge des autres.",
            "La reprise de personnel (annexe 7) doit être intégrée au chiffrage dès qu'on reprend un marché existant.",
          ]}
        />
        <p>
          La méthode complète, avec exemple chiffré de bout en bout, est détaillée dans notre guide{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>.
        </p>

        <h2 id="marches">Gagner des marchés</h2>
        <p>
          Le développement commercial passe par la prospection directe et par la réponse aux appels
          d&apos;offres, privés comme publics. Trois documents structurent cette démarche :
        </p>
        <ul>
          <li>
            Le <a href="/developpement/cahier-des-charges-nettoyage">cahier des charges (CCTP)</a>,
            qu&apos;il faut savoir lire — ou rédiger — pour chiffrer juste.
          </li>
          <li>
            Le dossier de réponse à un{" "}
            <a href="/developpement/repondre-appel-offres-nettoyage">appel d&apos;offres</a> (DC1, DC2,
            mémoire technique), où la note technique fait souvent la différence.
          </li>
          <li>
            Le <a href="/developpement/contrat-nettoyage-clause-revision-prix">contrat et sa clause de
            révision de prix</a>, qui protège la marge sur toute la durée du marché.
          </li>
        </ul>
        <p>
          Pensez aussi à la <a href="/developpement/tva-nettoyage">TVA</a> et à
          l&apos;autoliquidation en cas de sous-traitance, souvent source d&apos;erreurs de
          facturation.
        </p>

        <h2 id="outils">S&apos;outiller</h2>
        <p>
          À mesure que les effectifs et les sites se multiplient, la gestion manuelle atteint ses
          limites. Un <a href="/logiciels/meilleur-logiciel-entreprise-nettoyage">logiciel de gestion
          dédié</a> permet de centraliser le{" "}
          <a href="/logiciels/logiciel-planning-pointage-proprete">planning et le pointage des
          agents</a>, le suivi qualité et la facturation — un levier de productivité et de fiabilité
          sur les marchés multi-sites.
        </p>

        <h2 id="chiffres">Chiffres clés du secteur</h2>
        <FactTable
          caption="Repères du secteur de la propreté en France (à vérifier aux sources officielles)"
          headers={["Indicateur", "Repère"]}
          rows={[
            ["Salariés de la branche", "Plus de 600 000"],
            ["Convention collective", "IDCC 3043"],
            ["Minimum agent AS1 2026", "≈ 12,30 €/h brut"],
            ["Prix nettoyage bureaux", "0,30 à 0,60 €/m²/passage"],
          ]}
        />

        <SourcesBox sources={SOURCES.tarifsSecteur} />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Par où commencer ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Maîtrisez d&apos;abord votre coût de revient : c&apos;est la base d&apos;un chiffrage
            rentable.
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
        <RelatedArticles articles={RELATED} />
      </div>
    </>
  );
}
