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
import { AUTHORS, type Article } from "@/lib/content";

const PATH = "/tarifs/tarif-horaire-nettoyage";
const author = AUTHORS["marc-leroy"];
const DATE_PUBLISHED = "2026-02-12";
const DATE_MODIFIED = "2026-06-05";
const READ_MINUTES = 9;
const EXCERPT =
  "Tarif horaire du nettoyage en 2026 : fourchette de 18 à 35 €/h HT, ce qui le compose et les écarts selon la région et la prestation.";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Tarif horaire du nettoyage", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "fourchette", label: "Fourchette du tarif horaire" },
  { id: "composition", label: "Ce qui compose le tarif" },
  { id: "ecarts", label: "Écarts selon région et prestation" },
  { id: "facteurs", label: "Facteurs qui influencent le prix" },
  { id: "definition", label: "Taux horaire facturé" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Tarif horaire du nettoyage en 2026 : fourchette et composition (€/h)",
  description:
    "Tarif horaire du nettoyage en 2026 : 18 à 35 €/h HT selon la prestation et la région. Décomposition du taux horaire facturé (salaire chargé, encadrement, marge) et facteurs qui le font varier.",
  path: PATH,
  type: "article",
  publishedTime: DATE_PUBLISHED,
  modifiedTime: DATE_MODIFIED,
  authors: [author.name],
  keywords: [
    "tarif horaire nettoyage",
    "prix heure nettoyage",
    "taux horaire femme de ménage entreprise",
    "tarif horaire agent de propreté",
    "prix nettoyage à l'heure",
  ],
});

const FAQ = [
  {
    question: "Quel est le tarif horaire d'un nettoyage professionnel en 2026 ?",
    answer:
      "Le tarif horaire facturé par une entreprise de nettoyage se situe généralement entre 18 et 35 € HT en 2026. Le bas de la fourchette concerne l'entretien courant de bureaux en province ; le haut concerne les prestations techniques, médicales ou réalisées en horaires décalés, et l'Île-de-France. Ce tarif inclut le salaire chargé de l'agent, l'encadrement, les fournitures, les frais de structure et la marge.",
  },
  {
    question: "Pourquoi le tarif horaire facturé est-il plus élevé que le salaire de l'agent ?",
    answer:
      "Le salaire horaire chargé d'un agent (cotisations comprises) tourne autour de 16 à 19 € en 2026, mais le prestataire doit aussi couvrir l'encadrement, les congés et absences, les fournitures, le matériel, les frais de structure et dégager une marge. Le tarif horaire facturé intègre tous ces postes : c'est pourquoi il est mécaniquement supérieur au coût salarial brut.",
  },
  {
    question: "Le tarif horaire varie-t-il selon la région ?",
    answer:
      "Oui. L'Île-de-France et les grandes métropoles affichent des tarifs horaires plus élevés (coût de la vie, tension sur le recrutement, déplacements), souvent 2 à 5 €/h au-dessus de la moyenne nationale. Les zones rurales et certaines régions sont sensiblement moins chères. La nature des locaux pèse cependant davantage que la géographie seule.",
  },
  {
    question: "Le tarif horaire est-il indiqué hors taxes ?",
    answer:
      "Oui, les tarifs horaires communiqués par les entreprises de nettoyage sont quasi systématiquement exprimés hors taxes. La TVA au taux normal de 20 % s'ajoute pour obtenir le prix réellement facturé. Pensez à raisonner sur la même base (HT) lorsque vous comparez plusieurs devis.",
  },
];

const RELATED: Article[] = [
  {
    slug: "nettoyage-bureaux-m2",
    href: "/tarifs/nettoyage-bureaux-m2",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix du nettoyage de bureaux au m² en 2026",
    excerpt:
      "Fourchettes de prix au m² selon la fréquence et la surface, facteurs de prix et exemples chiffrés.",
    authorSlug: "marc-leroy",
    datePublished: "2026-01-15",
    dateModified: "2026-06-08",
    readMinutes: 10,
    badge: { label: "Guide tarifs", tone: "teal" },
  },
  {
    slug: "prix-entreprise-nettoyage",
    href: "/tarifs/prix-entreprise-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Prix d'une entreprise de nettoyage : forfaits et abonnements",
    excerpt:
      "Prix moyen d'une prestation : forfaits, abonnements mensuels et logique de tarification.",
    authorSlug: "marc-leroy",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    readMinutes: READ_MINUTES,
  },
  {
    slug: "comment-comparer-devis-nettoyage",
    href: "/tarifs/comment-comparer-devis-nettoyage",
    silo: "tarifs",
    siloLabel: "Tarifs",
    title: "Comment comparer des devis de nettoyage",
    excerpt:
      "Grille de comparaison et pièges à éviter pour comparer objectivement plusieurs devis.",
    authorSlug: "marc-leroy",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    readMinutes: READ_MINUTES,
  },
];

export default function Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema({
            headline: metadata.title as string,
            description: EXCERPT,
            path: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Tarifs · Tarif horaire"
        title="Tarif horaire du nettoyage en 2026"
        intro="Combien coûte une heure de nettoyage professionnel ? Fourchette du taux horaire facturé, décomposition de ce qu'il couvre vraiment et écarts selon la région et le type de prestation."
        author={author}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        readMinutes={READ_MINUTES}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le tarif horaire facturé par une entreprise de nettoyage en France se situe
          entre <strong>18 et 35 €/h HT</strong>. Le bas de la fourchette concerne l&apos;entretien
          courant de bureaux en province ; le haut, les prestations techniques, médicales ou en
          horaires décalés, et l&apos;Île-de-France. Ce tarif <strong>couvre bien plus que le
          salaire</strong> : encadrement, fournitures, frais de structure et marge.
        </AnswerBox>

        <p>
          Le tarif horaire est la brique de base de tout prix de nettoyage. Que le devis soit
          présenté au m² ou au forfait, il dérive toujours d&apos;un <strong>taux horaire facturé
          multiplié par un temps de présence</strong>. Comprendre ce taux, c&apos;est savoir si un
          prix est crédible ou non.
        </p>

        <InfoCallout title="Lecture des prix">
          Montants indicatifs 2026 pour le marché français, hors taxes. À ajuster selon le site et
          la prestation réelle, qui font l&apos;objet d&apos;un chiffrage après visite.
        </InfoCallout>

        <h2 id="fourchette">Fourchette du tarif horaire en 2026</h2>
        <FactTable
          caption="Tarif horaire facturé selon le type de prestation (HT) — 2026"
          headers={["Type de prestation", "Tarif horaire", "Commentaire"]}
          rows={[
            ["Entretien courant de bureaux", "18 – 24 €/h", "Cadence élevée, prestation standard"],
            ["Commerces / surfaces de vente", "19 – 26 €/h", "Contraintes d'horaires d'ouverture"],
            ["Locaux médicaux", "24 – 35 €/h", "Protocoles d'hygiène renforcés"],
            ["Horaires décalés (nuit, week-end)", "+ 10 à 25 %", "Majorations conventionnelles"],
            ["Remise en état / fin de chantier", "25 – 40 €/h", "Effort physique, matériel spécifique"],
          ]}
        />

        <h2 id="composition">Ce qui compose le tarif horaire</h2>
        <p>
          Le tarif horaire facturé n&apos;est pas le salaire de l&apos;agent. Il agrège plusieurs
          postes que le prestataire doit financer :
        </p>

        <FactTable
          caption="Décomposition indicative d'un tarif horaire facturé (HT) — 2026"
          headers={["Poste", "Part indicative", "Repère"]}
          rows={[
            ["Salaire chargé de l'agent", "55 – 65 %", "≈ 16 – 19 €/h chargés"],
            ["Encadrement, congés, absences", "10 – 15 %", "Chefs d'équipe, remplacements"],
            ["Fournitures et matériel", "5 – 10 %", "Consommables, machines"],
            ["Frais de structure", "8 – 12 %", "Administratif, déplacements"],
            ["Marge", "5 – 12 %", "Rentabilité de l'entreprise"],
          ]}
        />

        <p>
          Le salaire chargé constitue le poste le plus lourd. Pour estimer précisément ce coût de
          revient (salaire, charges, congés, productivité), suivez notre méthode dédiée :{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent de propreté</a>
          . Côté salaires minima, voir la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="ecarts">Écarts selon la région et la prestation</h2>
        <p>
          Deux variables expliquent l&apos;essentiel des écarts de tarif horaire :
        </p>
        <ul>
          <li>
            <strong>La région</strong> : l&apos;Île-de-France et les grandes métropoles se situent
            souvent 2 à 5 €/h au-dessus de la moyenne nationale (coût de la vie, tension de
            recrutement, déplacements).
          </li>
          <li>
            <strong>La technicité</strong> : un nettoyage médical, agroalimentaire ou une remise en
            état exigent des protocoles, du matériel et parfois des qualifications qui tirent le
            tarif vers le haut.
          </li>
          <li>
            <strong>Les horaires</strong> : nuit, dimanche et jours fériés déclenchent des
            majorations de salaire qui se répercutent sur le tarif facturé.
          </li>
        </ul>

        <h2 id="facteurs">Les facteurs qui influencent le prix</h2>
        <ul>
          <li>
            <strong>Le volume horaire mensuel</strong> : plus il est important, plus le prestataire
            peut consentir un tarif unitaire bas.
          </li>
          <li>
            <strong>La complexité du site</strong> : multi-étages, sécurité, accès contraints
            allongent les temps improductifs.
          </li>
          <li>
            <strong>Le niveau d&apos;encadrement et de contrôle qualité</strong> attendu.
          </li>
          <li>
            <strong>La fourniture des consommables</strong>, incluse ou non dans le tarif.
          </li>
        </ul>

        <KeyTakeaways
          items={[
            "Le tarif horaire facturé va de 18 à 35 €/h HT selon la prestation et la région.",
            "Le salaire chargé représente 55 à 65 % du tarif ; le reste couvre encadrement, fournitures, structure et marge.",
            "L'Île-de-France est 2 à 5 €/h plus chère que la moyenne nationale.",
            "Nuit, week-end et locaux médicaux majorent sensiblement le tarif.",
            "Les tarifs sont HT : ajoutez 20 % de TVA pour le coût réel.",
          ]}
        />

        <h2 id="definition">Le taux horaire facturé, en clair</h2>
        <DefinitionBox term="Taux horaire facturé">
          Prix d&apos;une heure de présence d&apos;un agent, facturé au client. Il intègre le
          salaire chargé, l&apos;encadrement, les fournitures, les frais de structure et la marge
          du prestataire. Il se distingue du salaire horaire de l&apos;agent, nettement inférieur,
          et constitue la base de tout chiffrage, qu&apos;il soit présenté au m² ou au forfait.
        </DefinitionBox>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Vérifiez la cohérence d&apos;un tarif
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Estimez votre budget au m² ou décomposez le coût de revient d&apos;un agent.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/tarifs/nettoyage-bureaux-m2" variant="primary">
              Estimer mon budget au m²
            </Button>
            <Button href="/reglementation/grille-salaire-proprete-2026" variant="secondary">
              Voir la grille de salaire 2026
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
