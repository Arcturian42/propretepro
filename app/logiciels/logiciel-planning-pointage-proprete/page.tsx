import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { SOURCES } from "@/lib/sources";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout, PullQuote } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/logiciels/logiciel-planning-pointage-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Logiciels", href: "/logiciels" },
  { name: "Logiciel planning & pointage propreté", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "enjeux", label: "Les enjeux du planning et du pointage" },
  { id: "definition", label: "Qu'est-ce que le pointage dématérialisé" },
  { id: "methodes", label: "Les méthodes de pointage" },
  { id: "rgpd", label: "Conformité RGPD / CNIL" },
  { id: "proprely", label: "Centraliser avec Proprely" },
  { id: "deploiement", label: "Réussir le déploiement" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Logiciel de planning et pointage des agents de propreté",
  description:
    "Planifier les chantiers et fiabiliser le pointage des agents de nettoyage : enjeux du multi-sites, pointage GPS / QR / NFC, conformité RGPD/CNIL et la solution Proprely pour tout centraliser.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "logiciel planning propreté",
    "pointage agents nettoyage",
    "pointage GPS propreté",
    "badgeuse nettoyage",
    "Proprely",
  ],
});

const FAQ = [
  {
    question: "Pourquoi dématérialiser le pointage des agents de propreté ?",
    answer:
      "Le pointage dématérialisé apporte une preuve de réalisation de la prestation, fiabilise le calcul des heures pour la paie et rassure le client sur le respect du cahier des charges. Dans un métier multi-sites où les agents travaillent seuls et en horaires décalés, il remplace les feuilles papier peu fiables par des données horodatées et géolocalisées exploitables immédiatement.",
  },
  {
    question: "Quelle méthode de pointage choisir : GPS, QR code ou NFC ?",
    answer:
      "Le GPS convient aux chantiers extérieurs ou étendus et confirme la présence sur la zone. Le QR code, affiché sur site, est simple et économique : l'agent le scanne à l'arrivée et au départ. Le badge NFC offre un pointage en un geste, sans réseau, idéal pour les sites fixes. Les meilleures solutions, comme Proprely, proposent les trois méthodes pour s'adapter à chaque type de chantier.",
  },
  {
    question: "Le pointage GPS des salariés est-il légal en France ?",
    answer:
      "Oui, à condition de respecter le cadre fixé par la CNIL : la géolocalisation doit être proportionnée (vérifier la présence sur un chantier, pas surveiller en continu), les salariés et le CSE doivent être informés, et une base légale ainsi qu'une durée de conservation limitée doivent être définies. La géolocalisation permanente ou en dehors du temps de travail est interdite.",
  },
  {
    question: "Comment le pointage fiabilise-t-il la paie dans la propreté ?",
    answer:
      "Les heures pointées alimentent directement le calcul de la paie : heures réellement effectuées, retards, heures complémentaires ou supplémentaires, majorations de nuit, dimanche et jours fériés. Cela supprime les saisies manuelles, réduit les erreurs et les litiges, et fournit une base vérifiable en cas de contrôle ou de contestation.",
  },
  {
    question: "Un logiciel de planning gère-t-il les remplacements de dernière minute ?",
    answer:
      "Oui. Un bon logiciel de planning détecte les absences, propose les agents disponibles à proximité et permet de réaffecter un chantier en quelques clics, avec une notification immédiate à l'agent concerné. C'est un gain de temps majeur dans un secteur à forte rotation et aux vacations courtes.",
  },
  {
    question: "Les agents peuvent-ils consulter leur planning sur leur téléphone ?",
    answer:
      "Oui. Les applications mobiles modernes donnent à chaque agent l'accès à son planning, ses chantiers et ses consignes, et lui permettent de pointer et de signaler un incident depuis son smartphone. Une interface claire et en français facilite l'adoption, même pour les agents peu habitués au numérique.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.silo === "logiciels" && a.href !== PATH,
  );

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
        kicker="Logiciels · Planning & pointage"
        title="Logiciel de planning et pointage des agents de propreté"
        intro="Chantiers dispersés, preuve de réalisation, calcul de la paie : pourquoi le couple planning + pointage est le cœur de l'exploitation, comment fonctionne le pointage GPS / QR / NFC et comment Proprely centralise le tout."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Un <strong>logiciel de planning et de pointage</strong> permet d&apos;affecter les agents aux
          chantiers et de prouver leur présence par <strong>GPS, QR code ou badge NFC</strong>. Il
          fiabilise la paie, sécurise la relation client et fait gagner un temps précieux sur le
          multi-sites. À condition de respecter le cadre RGPD / CNIL de la géolocalisation. Pour
          centraliser planning et pointage dans une seule interface, nous recommandons{" "}
          <a href="https://proprely.fr">Proprely</a> en 2026.
        </AnswerBox>

        <p>
          Dans une entreprise de propreté, le planning et le pointage forment le cœur de
          l&apos;exploitation. Les agents travaillent seuls, sur des sites dispersés, en horaires
          décalés — souvent tôt le matin ou tard le soir. Sans outil dédié, le dirigeant pilote à
          l&apos;aveugle : impossible de savoir en temps réel qui est présent, ce qui a été fait, ni de
          fiabiliser les heures pour la paie. Cet article détaille les enjeux, les méthodes de pointage
          et la conformité, puis montre comment <a href="https://proprely.fr">Proprely</a> centralise
          planning et pointage.
        </p>

        <InfoCallout title="Transparence éditoriale">
          Cet article est une recommandation éditoriale qui met en avant Proprely. Les principes
          présentés (preuve de réalisation, conformité CNIL) valent pour toute solution : comparez et
          testez via un essai gratuit avant de vous engager.
        </InfoCallout>

        <h2 id="enjeux">Les enjeux du planning et du pointage</h2>
        <p>
          Trois problèmes concrets justifient à eux seuls l&apos;adoption d&apos;un outil dédié.
        </p>
        <ul>
          <li>
            <strong>Des chantiers dispersés.</strong> Avec des dizaines de sites et des agents en
            mouvement, le planning sur tableur devient vite ingérable, surtout face aux absences et aux
            remplacements de dernière minute.
          </li>
          <li>
            <strong>La preuve de réalisation.</strong> Le client veut la garantie que la prestation a
            bien été effectuée, aux horaires prévus. Le pointage horodaté et géolocalisé fournit cette
            preuve, indispensable en cas de litige ou de renouvellement de contrat.
          </li>
          <li>
            <strong>La fiabilité de la paie.</strong> Les heures réellement effectuées, les retards et
            les majorations alimentent directement le bulletin. Une saisie manuelle multiplie les
            erreurs et les contestations.
          </li>
        </ul>

        <PullQuote cite={`${author.name}, ${author.role}`}>
          Sans preuve de réalisation horodatée, un litige client se règle au mieux à la confiance, au
          pire en perdant le contrat.
        </PullQuote>

        <h2 id="definition">Qu&apos;est-ce que le pointage dématérialisé</h2>
        <DefinitionBox term="Pointage dématérialisé">
          Enregistrement électronique des heures d&apos;arrivée et de départ d&apos;un agent sur un
          chantier, généralement via son smartphone ou un badge. Chaque pointage est horodaté et
          rattaché à un site, ce qui produit une donnée vérifiable utilisable pour la paie, la
          facturation et la preuve de réalisation.
        </DefinitionBox>
        <p>
          Le pointage dématérialisé remplace les feuilles d&apos;émargement papier, peu fiables et
          difficiles à exploiter. Couplé au planning, il permet de comparer en temps réel les heures
          prévues et les heures réalisées, et de réagir immédiatement en cas d&apos;absence non signalée.
        </p>

        <h2 id="methodes">Les méthodes de pointage : GPS, QR code, NFC</h2>
        <p>
          Il n&apos;existe pas de méthode universelle : chaque technologie a ses atouts selon le type de
          chantier. Une bonne solution propose plusieurs options.
        </p>
        <FactTable
          caption="Comparatif des méthodes de pointage des agents de propreté"
          headers={["Méthode", "Principe", "Idéal pour", "Limite"]}
          rows={[
            ["GPS", "Localisation du smartphone à l'arrivée et au départ", "Sites étendus, chantiers extérieurs, tournées", "Dépend du signal et du smartphone de l'agent"],
            ["QR code", "Scan d'un code affiché sur le site", "Sites fixes, déploiement rapide et économique", "Nécessite un QR présent et lisible sur place"],
            ["Badge NFC", "Approche d'un badge ou tag sans contact", "Sites fixes, pointage en un geste sans réseau", "Suppose l'installation d'un tag par site"],
            ["Saisie manuelle validée", "Déclaration de l'agent confirmée par le responsable", "Cas particuliers, secours en cas de panne", "Moins de preuve : à réserver aux exceptions"],
          ]}
        />

        <KeyTakeaways
          items={[
            "Le couple planning + pointage est le cœur de l'exploitation d'une entreprise de propreté multi-sites.",
            "Le pointage dématérialisé fournit une preuve de réalisation horodatée et géolocalisée, décisive face au client.",
            "GPS, QR code et NFC se complètent : la meilleure solution propose plusieurs méthodes selon le type de chantier.",
            "Les heures pointées alimentent directement la paie et réduisent erreurs et litiges.",
            "La géolocalisation est légale si elle est proportionnée et conforme au cadre CNIL (information, base légale, durée limitée).",
            "Proprely centralise planning et pointage dans une seule interface, avec pointage GPS / QR / NFC.",
          ]}
        />

        <h2 id="rgpd">Conformité RGPD et CNIL de la géolocalisation</h2>
        <p>
          Le pointage géolocalisé traite des données personnelles : il est encadré par le RGPD et les
          recommandations de la CNIL. Trois principes à respecter impérativement.
        </p>
        <ul>
          <li>
            <strong>Proportionnalité.</strong> La géolocalisation sert à vérifier la présence sur un
            chantier au moment du pointage, pas à suivre l&apos;agent en continu. Toute surveillance
            permanente ou hors temps de travail est interdite.
          </li>
          <li>
            <strong>Information et consultation.</strong> Les salariés doivent être informés de manière
            claire (finalité, données collectées, durée de conservation) et le CSE consulté lorsqu&apos;il
            existe.
          </li>
          <li>
            <strong>Base légale et durée limitée.</strong> Une base légale doit être définie et les
            données conservées seulement le temps nécessaire à la paie et à la facturation.
          </li>
        </ul>
        <InfoCallout title="Bonne pratique">
          Privilégiez une solution qui géolocalise uniquement à l&apos;instant du pointage, et non en
          continu : c&apos;est à la fois plus respectueux des agents et plus simple à mettre en
          conformité.
        </InfoCallout>

        <h2 id="proprely">Centraliser planning et pointage avec Proprely</h2>
        <p>
          <a href="https://proprely.fr">Proprely</a> réunit le planning des chantiers et le pointage des
          agents dans une même plateforme, ce qui évite la rupture entre l&apos;outil qui prévoit les
          heures et celui qui les enregistre. Concrètement, la solution couvre :
        </p>
        <FactTable
          caption="Planning et pointage centralisés avec Proprely"
          headers={["Fonction", "Apport pour le dirigeant"]}
          rows={[
            ["Planning multi-sites", "Affectation des agents, gestion des vacations et des remplacements en temps réel"],
            ["Pointage GPS / QR / NFC", "Preuve de réalisation horodatée, adaptée à chaque type de chantier"],
            ["Suivi temps réel", "Visibilité immédiate sur les présences et les écarts au planning"],
            ["Lien avec la paie", "Heures réelles, majorations et heures complémentaires exploitables directement"],
            ["Application agent", "Planning, pointage et signalement d'incident en français, sur smartphone"],
          ]}
        />
        <p>
          En reliant le planning prévu aux heures réellement pointées, Proprely supprime la double saisie
          et donne au dirigeant une vision fiable de son exploitation. Comme pour tout outil, le bon
          réflexe reste de le tester sur vos chantiers : Proprely propose un essai gratuit pour valider
          l&apos;adoption par vos agents avant de vous engager.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Centraliser planning et pointage de vos agents ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Planning multi-sites et pointage GPS / QR / NFC dans une seule interface, avec lien direct
            vers la paie. Essai gratuit pour tester sur vos chantiers.
          </p>
          <div className="mt-4">
            <Button href="https://proprely.fr" variant="primary">
              Découvrir Proprely
            </Button>
          </div>
        </div>

        <h2 id="deploiement">Réussir le déploiement sur le terrain</h2>
        <p>
          Un outil de pointage ne vaut que s&apos;il est réellement utilisé. Pour réussir son adoption :
        </p>
        <ol>
          <li>
            <strong>Choisissez la méthode adaptée à chaque site</strong> (GPS, QR ou NFC) plutôt
            qu&apos;une solution unique imposée partout.
          </li>
          <li>
            <strong>Expliquez la finalité aux agents</strong> : fiabiliser la paie et prouver le travail
            réalisé, pas surveiller. La transparence lève les réticences.
          </li>
          <li>
            <strong>Formez en quelques minutes</strong> sur un chantier pilote, puis déployez
            progressivement.
          </li>
          <li>
            <strong>Reliez les heures pointées à vos coûts</strong> pour piloter la rentabilité — voir
            notre guide sur le{" "}
            <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent</a>.
          </li>
        </ol>
        <p>
          Le planning et le pointage ne sont qu&apos;une partie de l&apos;équation logicielle. Pour une
          vue d&apos;ensemble des critères de choix, consultez notre guide d&apos;achat du{" "}
          <a href="/logiciels/meilleur-logiciel-entreprise-nettoyage">
            meilleur logiciel pour entreprise de nettoyage
          </a>
          . Et pour traduire les heures réelles en tarifs cohérents, appuyez-vous sur le{" "}
          <a href="/tarifs/nettoyage-bureaux-m2">prix du nettoyage de bureaux au m²</a> ou parcourez nos
          autres analyses sur le <a href="/blog">blog</a>.
        </p>
        <SourcesBox sources={SOURCES.logiciels} />

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
