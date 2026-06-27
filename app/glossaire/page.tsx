import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema, definedTermSetSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";

const PATH = "/glossaire";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Glossaire", href: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Glossaire de la propreté : tous les termes du nettoyage professionnel",
  description:
    "Définitions claires des termes clés de la propreté et du nettoyage professionnel : IDCC 3043, annexe 7, coefficient, CCTP, autolaveuse, bionettoyage, remise en état…",
  path: PATH,
  keywords: [
    "glossaire propreté",
    "vocabulaire nettoyage professionnel",
    "définition annexe 7 propreté",
    "IDCC 3043 définition",
    "termes propreté",
  ],
});

type Term = {
  term: string;
  definition: string;
  /** Lien interne vers le guide de référence (maillage). */
  link?: { href: string; label: string };
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const TERMS: Term[] = [
  {
    term: "Agent de service (AS)",
    definition:
      "Salarié chargé des opérations de nettoyage courant (dépoussiérage, lavage des sols, vidage). Dans la classification de la branche propreté, les agents de service vont de l'échelon AS1 à AS3, puis ATQS pour les plus qualifiés.",
    link: { href: "/reglementation/classification-echelon-agent-proprete", label: "Classification et échelons" },
  },
  {
    term: "Annexe 7",
    definition:
      "Disposition de la convention collective propreté qui organise la reprise du personnel lors d'un changement de prestataire sur un marché. L'entreprise entrante reprend les salariés affectés au site qui remplissent les conditions d'ancienneté et de présence, à leurs conditions acquises.",
    link: { href: "/reglementation/transfert-personnel-annexe-7-proprete", label: "Transfert de personnel (Annexe 7)" },
  },
  {
    term: "Arrêté d'extension",
    definition:
      "Décision ministérielle qui rend un accord ou un avenant de branche (par exemple un avenant salaires) obligatoire pour toutes les entreprises du secteur, et non seulement pour les signataires. Un minimum conventionnel n'est pleinement opposable qu'une fois étendu.",
  },
  {
    term: "ATQS (Agent Très Qualifié de Service)",
    definition:
      "Échelon supérieur de la filière des agents de service, correspondant à des tâches techniques (machines, surfaces spécifiques, autonomie élevée) et à un coefficient plus élevé que les échelons AS1 à AS3.",
    link: { href: "/reglementation/classification-echelon-agent-proprete", label: "Classification et échelons" },
  },
  {
    term: "Autolaveuse",
    definition:
      "Machine qui lave et sèche un sol en un seul passage en combinant brossage, distribution de solution détergente et aspiration. Adaptée aux grandes surfaces lisses (entrepôts, halls, grandes surfaces commerciales).",
  },
  {
    term: "Avenant salaires",
    definition:
      "Texte négocié par la branche qui revalorise la grille des salaires minima conventionnels, en général une à deux fois par an. C'est le dernier avenant étendu qui fixe le taux horaire minimum opposable à la date de paie.",
    link: { href: "/reglementation/grille-salaire-proprete-2026", label: "Grille de salaire 2026" },
  },
  {
    term: "Bionettoyage",
    definition:
      "Procédé de nettoyage destiné à réduire la contamination microbiologique d'une surface, combinant nettoyage et désinfection selon un protocole précis. Pratiqué en milieu de soins (hôpitaux, cliniques, EHPAD) et en agroalimentaire.",
    link: { href: "/tarifs/prix-nettoyage-medical-cabinet", label: "Prix du nettoyage médical" },
  },
  {
    term: "Cahier des charges (CCTP)",
    definition:
      "Document qui décrit précisément les prestations attendues : périmètre, fréquences, niveaux de qualité, horaires et indicateurs de contrôle. Dans les marchés, on parle de CCTP (cahier des clauses techniques particulières).",
    link: { href: "/developpement/cahier-des-charges-nettoyage", label: "Rédiger un cahier des charges" },
  },
  {
    term: "Classification",
    definition:
      "Système qui rattache chaque salarié à un échelon et un coefficient en fonction des tâches réellement exercées, de l'autonomie et des responsabilités. La classification détermine le salaire minimum conventionnel applicable.",
    link: { href: "/reglementation/classification-echelon-agent-proprete", label: "Classification et échelons" },
  },
  {
    term: "Coefficient hiérarchique",
    definition:
      "Valeur numérique attribuée à chaque échelon de classification (110, 120, 130…). Il traduit le niveau de qualification et sert de base au calcul du salaire minimum conventionnel correspondant.",
    link: { href: "/reglementation/grille-salaire-proprete-2026", label: "Grille de salaire 2026" },
  },
  {
    term: "Convention collective (IDCC 3043)",
    definition:
      "Convention collective nationale des entreprises de propreté et services associés. Elle encadre les classifications, les salaires minima, les primes, les congés, la prévoyance et le transfert de personnel pour les entreprises de nettoyage en France.",
    link: { href: "/reglementation/convention-collective-proprete-idcc-3043", label: "Le guide de la convention IDCC 3043" },
  },
  {
    term: "Coût de revient",
    definition:
      "Coût horaire réel d'un agent une fois intégrés le salaire brut, les charges patronales, les congés, l'absentéisme et la productivité. C'est la base de chiffrage indispensable pour fixer un prix de vente avec marge.",
    link: { href: "/tarifs/cout-revient-agent-proprete", label: "Calculer le coût de revient" },
  },
  {
    term: "Décapage",
    definition:
      "Opération de remise en état consistant à retirer les anciennes couches de protection (émulsion, cire) et les salissures incrustées d'un sol, généralement avant une nouvelle métallisation.",
    link: { href: "/tarifs/prix-remise-en-etat-nettoyage", label: "Prix d'une remise en état" },
  },
  {
    term: "DC1 / DC2",
    definition:
      "Formulaires de candidature aux marchés publics : le DC1 est la lettre de candidature, le DC2 la déclaration du candidat (capacités, références). Ils accompagnent l'offre et le mémoire technique.",
    link: { href: "/developpement/repondre-appel-offres-nettoyage", label: "Répondre à un appel d'offres" },
  },
  {
    term: "Désinfection",
    definition:
      "Action visant à éliminer ou inactiver les micro-organismes présents sur une surface à l'aide d'un produit désinfectant. Distincte du simple nettoyage, qui retire les salissures visibles sans garantir la réduction microbiologique.",
  },
  {
    term: "Détergent",
    definition:
      "Produit nettoyant qui décolle et met en suspension les salissures pour permettre leur élimination. Caractérisé par son pH (acide, neutre ou alcalin) selon le type de salissure à traiter.",
  },
  {
    term: "Entretien courant",
    definition:
      "Prestation de nettoyage régulière et récurrente (quotidienne, hebdomadaire) visant à maintenir la propreté d'un site, par opposition aux interventions exceptionnelles comme la remise en état.",
  },
  {
    term: "EPI (équipement de protection individuelle)",
    definition:
      "Équipements destinés à protéger l'agent des risques liés à son activité : gants, chaussures antidérapantes, blouse, protections en cas de produits agressifs ou de travail en hauteur. Leur fourniture relève de l'employeur.",
  },
  {
    term: "FEP (Fédération des Entreprises de Propreté)",
    definition:
      "Organisation professionnelle représentative de la branche propreté en France. Elle publie des données sectorielles et participe à la négociation de la convention collective.",
  },
  {
    term: "Fiche de données de sécurité (FDS)",
    definition:
      "Document obligatoire fourni avec chaque produit chimique professionnel, détaillant sa composition, ses dangers et les précautions d'emploi, de stockage et de premiers secours.",
  },
  {
    term: "Heures complémentaires",
    definition:
      "Heures effectuées par un salarié à temps partiel au-delà de la durée prévue à son contrat, dans la limite d'un plafond et avec une majoration. À distinguer des heures supplémentaires, propres au temps plein.",
    link: { href: "/reglementation/temps-partiel-proprete", label: "Temps partiel dans la propreté" },
  },
  {
    term: "Heures supplémentaires",
    definition:
      "Heures effectuées au-delà de la durée légale du travail par un salarié à temps plein, majorées (en principe +25 % puis +50 %) et soumises à un contingent annuel.",
    link: { href: "/reglementation/heures-supplementaires-proprete", label: "Heures supplémentaires propreté" },
  },
  {
    term: "IDCC",
    definition:
      "Identifiant de convention collective : numéro unique attribué à chaque convention. Celui de la propreté est l'IDCC 3043 (entreprises de propreté et services associés).",
    link: { href: "/reglementation/convention-collective-proprete-idcc-3043", label: "Convention collective IDCC 3043" },
  },
  {
    term: "Marché public",
    definition:
      "Contrat conclu par une personne publique (collectivité, établissement) pour répondre à ses besoins, soumis à des règles de mise en concurrence et de publicité selon des seuils de procédure.",
    link: { href: "/developpement/repondre-appel-offres-nettoyage", label: "Répondre à un appel d'offres" },
  },
  {
    term: "Mémoire technique",
    definition:
      "Document remis avec une offre d'appel d'offres, exposant la méthodologie, l'organisation, les moyens humains et matériels et la démarche qualité du candidat. Souvent décisif dans la note technique.",
    link: { href: "/developpement/repondre-appel-offres-nettoyage", label: "Répondre à un appel d'offres" },
  },
  {
    term: "Métallisation (émulsion)",
    definition:
      "Application d'un film protecteur (émulsion) sur un sol après décapage, pour le protéger et faciliter son entretien. Opération typique d'une remise en état de sols plastiques ou pierreux.",
    link: { href: "/tarifs/prix-remise-en-etat-nettoyage", label: "Prix d'une remise en état" },
  },
  {
    term: "Minimum conventionnel",
    definition:
      "Salaire plancher fixé par la convention collective pour chaque coefficient. L'employeur doit toujours verser le plus favorable entre ce minimum et le SMIC, qui reste un plancher d'ordre public.",
    link: { href: "/reglementation/grille-salaire-proprete-2026", label: "Grille de salaire 2026" },
  },
  {
    term: "Monobrosse",
    definition:
      "Machine à plateau rotatif unique servant à décaper, lustrer, shampouiner une moquette ou laver un sol selon le disque utilisé. Plus polyvalente que l'autolaveuse mais sans aspiration intégrée.",
  },
  {
    term: "Multiservices / Facility management",
    definition:
      "Modèle dans lequel un prestataire regroupe plusieurs services (propreté, accueil, espaces verts, maintenance) pour un même client. Le facility management désigne le pilotage global de ces services support.",
  },
  {
    term: "Prime d'ancienneté",
    definition:
      "Complément de salaire calculé par paliers, en pourcentage du minimum conventionnel de l'échelon, et croissant avec l'ancienneté du salarié dans la branche.",
    link: { href: "/reglementation/prime-anciennete-proprete", label: "Prime d'ancienneté propreté" },
  },
  {
    term: "Productivité (cadence)",
    definition:
      "Surface nettoyée par heure (m²/h) selon le type de local, le matériel et le niveau de finition. Paramètre clé du chiffrage : une cadence mal estimée fausse le prix de vente.",
    link: { href: "/tarifs/cout-revient-agent-proprete", label: "Coût de revient et productivité" },
  },
  {
    term: "RC Pro (responsabilité civile professionnelle)",
    definition:
      "Assurance couvrant les dommages causés à un tiers dans le cadre de l'activité (casse, dégât des eaux, accident). Souvent exigée comme pièce dans les appels d'offres de nettoyage.",
  },
  {
    term: "Remise en état",
    definition:
      "Nettoyage approfondi et ponctuel (décapage, métallisation, grand nettoyage) destiné à restaurer un niveau de propreté élevé, par opposition à l'entretien courant récurrent.",
    link: { href: "/tarifs/prix-remise-en-etat-nettoyage", label: "Prix d'une remise en état" },
  },
  {
    term: "SMIC",
    definition:
      "Salaire minimum interprofessionnel de croissance : plancher légal d'ordre public en dessous duquel aucun salaire ne peut descendre, même si un minimum conventionnel non revalorisé lui est inférieur.",
    link: { href: "/reglementation/grille-salaire-proprete-2026", label: "Grille de salaire 2026" },
  },
  {
    term: "Sous-traitance",
    definition:
      "Recours par une entreprise à une autre pour exécuter tout ou partie d'une prestation. En propreté, la sous-traitance déclenche des règles spécifiques de TVA (autoliquidation) et de responsabilité.",
    link: { href: "/developpement/tva-nettoyage", label: "TVA et autoliquidation" },
  },
  {
    term: "TVA (autoliquidation)",
    definition:
      "Mécanisme par lequel, dans certains cas de sous-traitance, c'est le donneur d'ordre — et non le sous-traitant — qui déclare et acquitte la TVA. Le sous-traitant facture alors hors taxe avec une mention spécifique.",
    link: { href: "/developpement/tva-nettoyage", label: "TVA dans le nettoyage" },
  },
  {
    term: "Vacation",
    definition:
      "Période d'intervention planifiée d'un agent sur un ou plusieurs sites. La gestion des vacations (horaires décalés, multi-sites, temps de trajet) est un enjeu central d'organisation et de paie.",
  },
  {
    term: "Vitrerie",
    definition:
      "Nettoyage des surfaces vitrées (vitres, baies, façades). Facturée au m² ou à la vacation, elle implique des contraintes de sécurité dès qu'il y a travail en hauteur.",
    link: { href: "/tarifs/prix-nettoyage-vitres", label: "Prix du nettoyage de vitres" },
  },
];

export default function GlossairePage() {
  const sorted = [...TERMS].sort((a, b) => a.term.localeCompare(b.term, "fr"));
  const groups = sorted.reduce<Record<string, Term[]>>((acc, t) => {
    const letter = t.term[0].toUpperCase();
    (acc[letter] ??= []).push(t);
    return acc;
  }, {});
  const letters = Object.keys(groups).sort((a, b) => a.localeCompare(b, "fr"));

  return (
    <>
      <SchemaMarkup
        schema={[
          breadcrumbSchema(CRUMBS),
          definedTermSetSchema({
            name: "Glossaire de la propreté et du nettoyage professionnel",
            description:
              "Définitions des termes clés du secteur de la propreté en France : réglementation (IDCC 3043, annexe 7), classifications, tarifs, matériel et procédés.",
            path: PATH,
            terms: sorted.map((t) => ({ term: t.term, definition: t.definition, slug: slugify(t.term) })),
          }),
        ]}
      />

      <div className="relative overflow-hidden border-b border-line bg-surface">
        <div
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(94,234,212,0.35), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">
          <Breadcrumb crumbs={CRUMBS} />
          <div className="mt-6">
            <Badge tone="teal">Ressource</Badge>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-night-900 sm:text-[2.5rem]">
            Glossaire de la propreté
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-ink">
            Les définitions de référence des termes du nettoyage professionnel : réglementation,
            classifications, tarifs, matériel et procédés. {sorted.length} termes expliqués clairement,
            avec un lien vers le guide détaillé quand il existe.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Navigation alphabétique */}
        <nav aria-label="Index alphabétique" className="flex flex-wrap gap-2">
          {letters.map((l) => (
            <a
              key={l}
              href={`#lettre-${l}`}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-white text-sm font-medium text-night-800 transition-colors hover:border-teal-pp hover:text-teal-pp"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-12">
          {letters.map((l) => (
            <section key={l} id={`lettre-${l}`} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-semibold text-emerald-deep">{l}</h2>
              <dl className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
                {groups[l].map((t) => {
                  const id = slugify(t.term);
                  return (
                    <div key={id} id={id} className="scroll-mt-24 px-5 py-5">
                      <dt className="font-semibold text-night-900">{t.term}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-ink">
                        {t.definition}
                        {t.link && (
                          <>
                            {" "}
                            <Link
                              href={t.link.href}
                              className="font-medium text-emerald-deep hover:underline"
                            >
                              → {t.link.label}
                            </Link>
                          </>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Un terme manque ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Parcourez nos guides complets par thématique, ou écrivez-nous pour suggérer une définition.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/reglementation" className="text-emerald-deep hover:underline">Réglementation</Link>
            <Link href="/tarifs" className="text-emerald-deep hover:underline">Tarifs</Link>
            <Link href="/developpement" className="text-emerald-deep hover:underline">Développement</Link>
            <Link href="/entreprise-de-nettoyage" className="text-emerald-deep hover:underline">Guide entreprise de nettoyage</Link>
          </div>
        </div>
      </div>
    </>
  );
}
