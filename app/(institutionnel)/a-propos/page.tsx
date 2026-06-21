import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { InstitutionalShell } from "@/components/layout/InstitutionalShell";

export const metadata: Metadata = buildMetadata({
  title: "À propos de PropretéPro",
  description:
    "PropretéPro est le média indépendant de la propreté professionnelle en France : réglementation et paie (IDCC 3043), tarifs et prix du nettoyage pour les dirigeants d'entreprises de propreté.",
  path: "/a-propos",
});

export default function Page() {
  return (
    <InstitutionalShell
      crumbs={[
        { name: "Accueil", href: "/" },
        { name: "À propos", href: "/a-propos" },
      ]}
      title="À propos de PropretéPro"
      intro="Le média des dirigeants d'entreprises de propreté en France."
    >
      <p>
        PropretéPro a une ambition simple : aider les <strong>dirigeants d&apos;entreprises de
        nettoyage</strong> à <strong>piloter leur rentabilité</strong>. Réglementation et paie, tarifs,
        coût de revient et marges : nous publions l&apos;information fiable, chiffrée et actionnable dont
        un patron de propreté a besoin pour décider.
      </p>
      <h2>Notre mission</h2>
      <p>
        Nous publions des guides réglementaires sourcés (convention collective IDCC 3043, grille de
        salaire, URSSAF), des analyses de tarifs et de prix du nettoyage. L&apos;objectif :
        vous aider à <strong>décider plus vite et mieux</strong>, sans jargon ni contenu de remplissage.
      </p>
      <h2>Notre indépendance</h2>
      <p>
        Nos contenus réglementaires citent systématiquement leurs sources officielles et affichent leur
        date de mise à jour. Lorsqu&apos;un contenu est sponsorisé ou affilié, il est clairement signalé.
      </p>
      <h2>Nos contributeurs</h2>
      <p>
        Nos contenus sont rédigés par des spécialistes du secteur : juristes en droit social et
        consultants en exploitation et achats de la propreté. Chaque article indique son auteur, sa
        date de publication et sa date de mise à jour.
      </p>
    </InstitutionalShell>
  );
}
