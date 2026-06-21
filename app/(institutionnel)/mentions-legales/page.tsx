import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { InstitutionalShell } from "@/components/layout/InstitutionalShell";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site PropretéPro.com.",
  path: "/mentions-legales",
});

export default function Page() {
  return (
    <InstitutionalShell
      crumbs={[
        { name: "Accueil", href: "/" },
        { name: "Mentions légales", href: "/mentions-legales" },
      ]}
      title="Mentions légales"
      intro="Informations légales relatives au site PropretéPro.com."
    >
      <h2>Éditeur</h2>
      <p>
        Le site {SITE.name} ({SITE.domain}) est édité par PropretéPro. Contact :{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par un prestataire d&apos;hébergement cloud. Les coordonnées complètes de
        l&apos;hébergeur sont disponibles sur demande.
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus (textes, tableaux, éléments graphiques) est protégé
        par le droit de la propriété intellectuelle. Toute reproduction sans autorisation est
        interdite. Les marques et logiciels cités appartiennent à leurs détenteurs respectifs.
      </p>
      <h2>Responsabilité</h2>
      <p>
        Les informations réglementaires et tarifaires sont fournies à titre indicatif. Elles ne
        constituent pas un conseil juridique ou comptable personnalisé. {SITE.name} ne saurait être
        tenu responsable d&apos;une décision prise sur la seule base de ces contenus.
      </p>
    </InstitutionalShell>
  );
}
