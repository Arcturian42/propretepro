import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { InstitutionalShell } from "@/components/layout/InstitutionalShell";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FAQSection } from "@/components/sections/FAQSection";
import { SITE } from "@/lib/site";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
];

export const metadata: Metadata = buildMetadata({
  title: "À propos de PropretéPro",
  description:
    "PropretéPro est le média indépendant de la propreté professionnelle en France : réglementation et paie (IDCC 3043), tarifs et prix du nettoyage, et développement commercial pour les dirigeants d'entreprises de propreté.",
  path: "/a-propos",
});

const FAQ = [
  {
    question: "Qui est derrière PropretéPro ?",
    answer:
      "PropretéPro est un média B2B indépendant dédié aux dirigeants d'entreprises de propreté en France. Ses contenus sont rédigés par des spécialistes du secteur — juristes en droit social et consultants en exploitation et achats — dont chaque article indique le nom, la fonction et les dates de publication et de mise à jour.",
  },
  {
    question: "Comment sont rédigés et vérifiés les contenus ?",
    answer:
      "Les guides réglementaires s'appuient sur les textes officiels (convention collective IDCC 3043, Code du travail, URSSAF) et citent leurs sources. Les contenus tarifaires reposent sur des fourchettes indicatives hors taxes observées sur le marché français, et la méthode de calcul est explicitée. Chaque page affiche sa date de mise à jour.",
  },
  {
    question: "Les informations de PropretéPro sont-elles fiables et à jour ?",
    answer:
      "Oui. Les pages réglementaires renvoient aux sources officielles et sont datées ; les repères de prix sont présentés comme des fourchettes indicatives, à confirmer par un devis ou un avenant en vigueur. Pour toute décision engageante (paie, fiscalité), nous invitons à vérifier le texte applicable à la date concernée.",
  },
  {
    question: "PropretéPro est-il indépendant ?",
    answer:
      "Oui. Nos contenus servent la décision du lecteur, pas un annonceur. Lorsqu'un contenu est sponsorisé ou affilié, il est clairement signalé. Nos recommandations restent fondées sur la pertinence pour les dirigeants d'entreprises de propreté.",
  },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "À propos de PropretéPro",
  url: `${SITE.url}/a-propos`,
  inLanguage: "fr-FR",
  mainEntity: organizationSchema(),
};

export default function Page() {
  return (
    <>
      <SchemaMarkup schema={[aboutPageSchema, faqSchema(FAQ), breadcrumbSchema(CRUMBS)]} />
      <InstitutionalShell
        crumbs={CRUMBS}
        title="À propos de PropretéPro"
        intro="Le média indépendant des dirigeants d'entreprises de propreté en France."
      >
        <p>
          PropretéPro a une ambition simple : aider les <strong>dirigeants d&apos;entreprises de
          nettoyage</strong> à <strong>piloter leur rentabilité</strong>. Réglementation et paie,
          tarifs, coût de revient, marges et développement commercial : nous publions
          l&apos;information fiable, chiffrée et actionnable dont un patron de propreté a besoin pour
          décider.
        </p>

        <h2>PropretéPro en bref</h2>
        <p>
          Nous couvrons trois grands univers, organisés en silos pour trouver vite la bonne
          information :
        </p>
        <ul>
          <li>
            <strong><a href="/reglementation">Réglementation &amp; paie</a></strong> : grille de
            salaire, convention collective IDCC 3043, URSSAF, congés, transfert de personnel.
          </li>
          <li>
            <strong><a href="/tarifs">Tarifs &amp; prix</a></strong> : prix au m², tarif horaire,
            forfaits, coût de revient et méthode pour fixer ses prix.
          </li>
          <li>
            <strong><a href="/developpement">Développement &amp; gestion</a></strong> : appels
            d&apos;offres, cahier des charges, contrats et clause de révision de prix.
          </li>
        </ul>

        <h2>Notre mission</h2>
        <p>
          Aider les dirigeants à <strong>décider plus vite et mieux</strong>, sans jargon ni contenu
          de remplissage. Chaque guide vise à transformer un sujet complexe — un avenant salaires, un
          appel d&apos;offres, une clause de révision — en repères clairs et immédiatement
          exploitables.
        </p>

        <h2>Notre méthodologie éditoriale</h2>
        <p>
          La confiance se construit sur la rigueur. Concrètement :
        </p>
        <ul>
          <li>Les contenus réglementaires <strong>citent leurs sources officielles</strong> (Légifrance, URSSAF, BOSS).</li>
          <li>Chaque page affiche une <strong>date de mise à jour</strong> et le nom de son <strong>auteur</strong>.</li>
          <li>Les montants tarifaires sont des <strong>fourchettes indicatives hors taxes</strong> pour le marché français, et la méthode de calcul est explicitée.</li>
          <li>Les contenus sponsorisés ou affiliés sont <strong>clairement signalés</strong>.</li>
        </ul>

        <h2>Nos auteurs</h2>
        <p>
          Nos contenus sont signés par des spécialistes du secteur :{" "}
          <a href="/auteurs/claire-vidal">Claire Vidal</a>, juriste en droit social spécialiste de la
          propreté, et <a href="/auteurs/marc-leroy">Marc Leroy</a>, consultant exploitation et achats.
          Retrouvez l&apos;ensemble de <a href="/auteurs">nos auteurs</a> et leurs domaines
          d&apos;expertise.
        </p>

        <h2>Nous contacter</h2>
        <p>
          Une question, une suggestion, une demande presse ou un partenariat ? Écrivez-nous à{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <FAQSection items={FAQ} title="À propos : questions fréquentes" />
      </InstitutionalShell>
    </>
  );
}
