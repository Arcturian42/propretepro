import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SourcesBox } from "@/components/sections/SourcesBox";
import { SOURCES } from "@/lib/sources";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/facturation-electronique-2026";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Facturation électronique 2026", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "reforme", label: "La réforme en bref" },
  { id: "calendrier", label: "Calendrier d'entrée en vigueur" },
  { id: "pdp", label: "Les plateformes (PDP)" },
  { id: "formats", label: "Formats et Factur-X" },
  { id: "obligations", label: "Obligations pour la propreté" },
  { id: "sanctions", label: "Sanctions" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Facturation électronique 2026 : ce qui change pour la propreté",
  description:
    "Réforme de la facturation électronique : calendrier, plateformes de dématérialisation partenaires (PDP), formats Factur-X, obligations e-invoicing et e-reporting, sanctions pour les entreprises de nettoyage.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "facturation électronique 2026",
    "PDP plateforme dématérialisation",
    "Factur-X",
    "e-invoicing e-reporting",
    "facture électronique propreté",
  ],
});

const FAQ = [
  {
    question: "Quand la facturation électronique devient-elle obligatoire ?",
    answer:
      "La réception de factures électroniques deviendra obligatoire pour toutes les entreprises assujetties à la TVA à compter du 1er septembre 2026. L'émission obligatoire est échelonnée selon la taille de l'entreprise : 2026 pour les grandes entreprises et ETI, et 1er septembre 2027 pour les PME et microentreprises. Une entreprise de propreté doit donc, dès 2026, être en capacité de recevoir des factures électroniques.",
  },
  {
    question: "Qu'est-ce qu'une PDP et faut-il en choisir une ?",
    answer:
      "Une PDP (plateforme de dématérialisation partenaire) est un opérateur immatriculé par l'administration, autorisé à émettre, transmettre et recevoir les factures électroniques et à transmettre les données à l'administration fiscale. Toute entreprise devra se raccorder à au moins une PDP pour émettre et recevoir ses factures conformément à la réforme.",
  },
  {
    question: "Une entreprise de nettoyage est-elle concernée par l'e-reporting ?",
    answer:
      "L'e-reporting concerne la transmission à l'administration des données de transactions non couvertes par l'e-invoicing, notamment les ventes à des particuliers (B2C) et certaines opérations internationales. Une entreprise de propreté facturant des particuliers (par exemple du nettoyage de domicile) devra transmettre ces données de transaction et d'encaissement via sa plateforme.",
  },
  {
    question: "Quel format de facture électronique utiliser ?",
    answer:
      "La réforme repose sur des formats structurés ou mixtes conformes à la norme européenne EN 16931 : Factur-X (PDF lisible doublé de données XML), UBL et CII. Le format Factur-X est souvent privilégié par les TPE-PME car il reste lisible par un humain tout en intégrant les données exploitables par les plateformes.",
  },
];

export default function Page() {
  const related = ARTICLES.filter(
    (a) => a.silo === "reglementation" && a.href !== PATH,
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
        kicker="Réglementation · Facturation"
        title="Facturation électronique 2026 : ce qui change pour la propreté"
        intro="Calendrier d'entrée en vigueur, plateformes agréées (PDP), formats Factur-X, obligations d'e-invoicing et d'e-reporting, sanctions : comment les entreprises de nettoyage doivent se préparer à la réforme."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          À compter du <strong>1er septembre 2026</strong>, toutes les entreprises assujetties à la TVA
          devront être en capacité de <strong>recevoir des factures électroniques</strong>.
          L&apos;émission obligatoire est échelonnée : 2026 pour les grandes entreprises et ETI,{" "}
          <strong>1er septembre 2027</strong> pour les PME et microentreprises. Les entreprises de
          propreté devront passer par une <strong>PDP</strong> et émettre leurs factures dans un format
          structuré (Factur-X, UBL ou CII), sous peine d&apos;amendes.
        </AnswerBox>

        <p>
          La réforme de la facturation électronique généralise l&apos;échange de factures
          dématérialisées et structurées entre entreprises (B2B) et la transmission de données de
          transaction à l&apos;administration fiscale. Objectifs affichés : lutter contre la fraude à
          la TVA, simplifier les déclarations et fiabiliser les paiements. Pour les entreprises de
          nettoyage, souvent facturières de nombreux clients B2B récurrents, l&apos;enjeu est
          opérationnel autant que réglementaire.
        </p>

        <DefinitionBox term="E-invoicing et e-reporting">
          L&apos;<strong>e-invoicing</strong> désigne l&apos;obligation d&apos;émettre et de recevoir
          les factures entre assujettis (B2B domestique) sous forme électronique. L&apos;
          <strong>e-reporting</strong> désigne la transmission à l&apos;administration des données des
          transactions non concernées par l&apos;e-invoicing : ventes aux particuliers (B2C),
          opérations avec l&apos;étranger et données d&apos;encaissement.
        </DefinitionBox>

        <h2 id="reforme">La réforme en bref</h2>
        <p>
          Concrètement, une facture ne pourra plus être un simple PDF envoyé par e-mail. Elle devra
          transiter par une plateforme agréée, dans un format lisible par les machines, et certaines
          données seront automatiquement remontées à l&apos;administration. Toutes les entreprises sont
          concernées, quelle que soit leur taille, mais le calendrier d&apos;obligation d&apos;émission
          dépend de la catégorie de l&apos;entreprise.
        </p>

        <h2 id="calendrier">Calendrier d&apos;entrée en vigueur</h2>
        <FactTable
          caption="Calendrier de la réforme de la facturation électronique"
          headers={["Échéance", "Réception (toutes entreprises)", "Émission obligatoire"]}
          rows={[
            ["1er septembre 2026", "Obligatoire pour toutes les entreprises", "Grandes entreprises et ETI"],
            ["1er septembre 2027", "—", "PME, microentreprises et autres assujettis"],
          ]}
        />
        <InfoCallout title="Un calendrier susceptible d'ajustement">
          Les dates de la réforme ont déjà fait l&apos;objet de reports successifs. Avant tout
          déploiement, vérifiez le calendrier en vigueur auprès de l&apos;administration fiscale ou de
          votre expert-comptable, et confirmez la date applicable à votre catégorie d&apos;entreprise.
        </InfoCallout>

        <h2 id="pdp">Les plateformes de dématérialisation partenaires (PDP)</h2>
        <p>
          Le dispositif repose sur des <strong>plateformes de dématérialisation partenaires (PDP)</strong>,
          opérateurs privés immatriculés par l&apos;administration. Elles assurent l&apos;émission, la
          transmission et la réception des factures, ainsi que l&apos;extraction et la remontée des
          données fiscales. Chaque entreprise devra se raccorder à au moins une PDP, directement ou via
          son logiciel de gestion ou son expert-comptable.
        </p>

        <h2 id="formats">Formats et Factur-X</h2>
        <p>
          Les factures devront respecter un format structuré ou hybride conforme à la norme européenne
          EN 16931 :
        </p>
        <ul>
          <li>
            <strong>Factur-X</strong> : format mixte associant un PDF lisible et un fichier XML de
            données. Très adapté aux TPE-PME car il reste consultable par un humain.
          </li>
          <li>
            <strong>UBL</strong> et <strong>CII</strong> : formats purement structurés (XML),
            privilégiés pour les échanges automatisés à fort volume.
          </li>
        </ul>

        <h2 id="obligations">Obligations concrètes pour la propreté</h2>
        <p>
          Pour une entreprise de nettoyage, la mise en conformité passe par plusieurs étapes :
        </p>
        <ul>
          <li>Fiabiliser ses données clients (SIREN, adresses, mentions légales) car elles conditionnent l&apos;acheminement des factures.</li>
          <li>Choisir et se raccorder à une PDP, idéalement intégrée à son logiciel de gestion ou de facturation.</li>
          <li>Être prêt à recevoir des factures électroniques dès le 1er septembre 2026.</li>
          <li>Gérer l&apos;e-reporting pour les prestations facturées à des particuliers (nettoyage de domicile, par exemple).</li>
        </ul>
        <KeyTakeaways
          items={[
            "La réception de factures électroniques est obligatoire pour toutes les entreprises au 1er septembre 2026.",
            "L'émission obligatoire est échelonnée : grandes entreprises et ETI en 2026, PME et micro en 2027.",
            "Toute entreprise devra passer par une plateforme de dématérialisation partenaire (PDP).",
            "Les factures B2C et internationales relèvent de l'e-reporting, pertinent pour le nettoyage de particuliers.",
          ]}
        />

        <h2 id="sanctions">Sanctions en cas de non-conformité</h2>
        <p>
          Le défaut d&apos;émission d&apos;une facture sous forme électronique est sanctionné par une
          amende forfaitaire par facture, plafonnée par année civile. Un manquement aux obligations
          d&apos;e-reporting est sanctionné par une amende par transmission, également plafonnée
          annuellement. Au-delà de l&apos;amende, l&apos;impossibilité d&apos;émettre ou de recevoir
          des factures conformes bloquerait en pratique la facturation et donc l&apos;encaissement.
        </p>

        <SourcesBox sources={SOURCES.facturation} />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Restez conforme côté social aussi
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Cotisations URSSAF, déclarations DSN : maîtrisez vos obligations sociales en parallèle.
          </p>
          <div className="mt-4">
            <Button href="/reglementation/urssaf-cotisations-proprete" variant="primary">
              Voir les cotisations URSSAF de la propreté
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
