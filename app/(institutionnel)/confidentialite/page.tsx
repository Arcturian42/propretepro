import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { InstitutionalShell } from "@/components/layout/InstitutionalShell";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de gestion des données personnelles de PropretéPro.",
  path: "/confidentialite",
});

export default function Page() {
  return (
    <InstitutionalShell
      crumbs={[
        { name: "Accueil", href: "/" },
        { name: "Confidentialité", href: "/confidentialite" },
      ]}
      title="Politique de confidentialité"
      intro="Comment nous collectons et protégeons vos données personnelles."
    >
      <h2>Données collectées</h2>
      <p>
        Nous collectons uniquement les données que vous nous transmettez volontairement : adresse
        e-mail lors d&apos;une inscription à la newsletter.
      </p>
      <h2>Finalité</h2>
      <p>
        Ces données servent à vous envoyer nos contenus et ressources. Elles ne sont jamais revendues
        à des tiers.
      </p>
      <h2>Vos droits (RGPD)</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
        suppression de vos données. La désinscription de la newsletter est possible en un clic depuis
        chaque e-mail.
      </p>
      <h2>Cookies</h2>
      <p>
        Le site utilise des cookies de mesure d&apos;audience anonymisés. Vous pouvez paramétrer leur
        utilisation depuis votre navigateur.
      </p>
    </InstitutionalShell>
  );
}
