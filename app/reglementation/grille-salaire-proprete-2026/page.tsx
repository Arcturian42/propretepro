import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout, PullQuote } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/grille-salaire-proprete-2026";
const COVER = "/covers/grille-salaire-proprete-2026.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Grille de salaire 2026", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "grille", label: "Grille de salaire 2026" },
  { id: "agents", label: "Agents de service (AS)" },
  { id: "maitrise", label: "Maîtrise & cadres" },
  { id: "lire-coefficient", label: "Lire un coefficient" },
  { id: "facteurs", label: "Primes et majorations" },
  { id: "exemple-calcul", label: "Exemple de calcul" },
  { id: "erreurs-paie", label: "Erreurs de paie fréquentes" },
  { id: "application", label: "Comment l'appliquer" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Grille de salaire propreté 2026 (IDCC 3043)",
  description:
    "Grille de salaire 2026 de la convention collective propreté (IDCC 3043) : taux horaires minima par échelon et coefficient pour les agents, la maîtrise et les cadres. Tableau à jour.",
  path: PATH,
    image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "grille salaire propreté 2026",
    "IDCC 3043",
    "taux horaire agent de propreté",
    "salaire minimum propreté",
    "coefficient propreté",
  ],
});

const FAQ = [
  {
    question: "Quel est le salaire minimum d'un agent de propreté en 2026 ?",
    answer:
      "En 2026, le taux horaire minimum conventionnel d'un agent de service échelon AS1 (coefficient 110) s'établit autour de 12,30 €/h brut, soit légèrement au-dessus du SMIC. Le montant exact dépend de l'avenant salaires en vigueur à la date de paie ; il convient de vérifier le dernier avenant publié au Journal officiel.",
  },
  {
    question: "La grille de salaire propreté est-elle obligatoire ?",
    answer:
      "Oui. Les minima de la convention collective IDCC 3043 sont d'application obligatoire pour toutes les entreprises relevant de la branche propreté. Un salaire inférieur au minimum conventionnel correspondant à la classification du salarié est illégal et expose l'employeur à des rappels de salaire.",
  },
  {
    question: "À quelle fréquence la grille est-elle revalorisée ?",
    answer:
      "La grille est généralement revalorisée une à deux fois par an par avenant salaires, en fonction des négociations de branche et de l'évolution du SMIC. Une revalorisation intervient le plus souvent en début d'année, parfois complétée en cours d'année.",
  },
  {
    question: "Comment trouver le coefficient d'un salarié ?",
    answer:
      "Le coefficient découle de la classification (échelon AS1 à AS3 pour les agents, MP1 à MP5 pour la maîtrise, cadres ensuite). Il dépend des tâches réellement exercées, de l'autonomie et des responsabilités, et doit figurer sur le bulletin de paie et le contrat de travail.",
  },
  {
    question: "Comment est calculée la prime d'ancienneté dans la propreté ?",
    answer:
      "La prime d'ancienneté de la branche propreté se calcule par paliers, en pourcentage du salaire minimum conventionnel de l'échelon du salarié. Elle démarre généralement à 2 % après 4 ans d'ancienneté, puis progresse (par exemple 3 % après 6 ans, 4 % après 8 ans, jusqu'à un plafond autour de 6 % après 15 ans). Le taux exact et les seuils sont fixés par la convention collective : pour un AS2 à 1 890 € brut mensuel, 3 % représentent environ 57 € de prime par mois.",
  },
  {
    question: "Le SMIC s'applique-t-il si le minimum conventionnel est plus bas ?",
    answer:
      "Oui. Le SMIC est un plancher d'ordre public : aucun salaire ne peut lui être inférieur, même si un minimum conventionnel est resté en deçà après une hausse du SMIC. En pratique, lorsque le SMIC dépasse un minimum de grille non encore revalorisé, c'est le SMIC qui s'applique en attendant le prochain avenant salaires. L'employeur doit verser le plus favorable des deux : SMIC ou minimum conventionnel.",
  },
  {
    question: "Que risque l'employeur en cas de sous-paiement d'un salarié ?",
    answer:
      "Le salarié peut réclamer un rappel de salaire sur les trois années écoulées (prescription triennale), majoré des congés payés afférents et, le cas échéant, d'intérêts. L'employeur s'expose aussi à un redressement URSSAF sur les cotisations correspondantes et, en cas de minimum conventionnel non respecté, à une qualification de travail dissimulé dans les situations les plus graves. Les sous-classements répétés peuvent également motiver une prise d'acte de la rupture aux torts de l'employeur.",
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
    image: COVER,
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
        kicker="Réglementation · Paie"
        title="Grille de salaire propreté 2026 (IDCC 3043)"
        intro="Les taux horaires minima applicables en 2026 dans la branche propreté, par échelon et coefficient, pour les agents de service, la maîtrise et les cadres."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          En 2026, le <strong>salaire minimum conventionnel</strong> dans la propreté (IDCC 3043)
          démarre à environ <strong>12,30 €/h brut</strong> pour un agent de service échelon AS1
          (coefficient 110). Les taux progressent ensuite par échelon et coefficient jusqu&apos;aux
          cadres. Ces minima sont <strong>obligatoires</strong> et révisés par avenant salaires, en
          principe en début d&apos;année.
        </AnswerBox>

        <p>
          La branche de la propreté emploie plus de 600 000 salariés en France. La rémunération y est
          encadrée par la <strong>convention collective nationale des entreprises de propreté</strong>{" "}
          (IDCC 3043), qui fixe des salaires minima hiérarchiques par classification. Cette page
          synthétise la grille applicable en 2026 et explique comment l&apos;appliquer correctement.
        </p>

        <InfoCallout title="Avertissement">
          Les montants ci-dessous sont des ordres de grandeur fournis à titre informatif. Le taux
          opposable est celui du dernier avenant salaires étendu, à vérifier au Journal officiel ou
          auprès de votre organisation professionnelle avant établissement de la paie.
        </InfoCallout>

        <PullQuote cite="Convention collective nationale des entreprises de propreté (IDCC 3043)">
          Aucun salarié de la branche ne peut être rémunéré en dessous du minimum conventionnel
          correspondant à sa classification : c&apos;est un plancher d&apos;ordre public.
        </PullQuote>

        <h2 id="grille">Grille de salaire 2026 par classification</h2>
        <p>
          La classification distingue trois grandes filières : les <strong>agents de service</strong>{" "}
          (filière AS), la <strong>maîtrise</strong> (filière MP) et les <strong>cadres</strong>.
          Chaque échelon correspond à un coefficient et à un taux horaire minimum.
        </p>

        <h3 id="agents">Agents de service (AS)</h3>
        <FactTable
          caption="Taux horaires minima indicatifs 2026 — filière Agents de service"
          headers={["Échelon", "Coefficient", "Taux horaire brut", "Mensuel brut (151,67 h)"]}
          rows={[
            ["AS1", 110, "12,30 €", "1 866 €"],
            ["AS2", 120, "12,46 €", "1 890 €"],
            ["AS3", 130, "12,68 €", "1 923 €"],
            ["ATQS", 140, "12,95 €", "1 964 €"],
          ]}
        />

        <h3 id="maitrise">Maîtrise et cadres</h3>
        <FactTable
          caption="Taux horaires minima indicatifs 2026 — Maîtrise (MP) et cadres"
          headers={["Niveau", "Coefficient", "Taux horaire brut", "Mensuel brut (151,67 h)"]}
          rows={[
            ["MP1", 150, "13,25 €", "2 010 €"],
            ["MP2", 170, "13,90 €", "2 108 €"],
            ["MP3", 190, "14,75 €", "2 237 €"],
            ["Cadre CE1", 300, "18,40 €", "2 791 €"],
            ["Cadre CE2", 350, "20,10 €", "3 049 €"],
          ]}
        />

        <KeyTakeaways
          items={[
            "Le minimum agent AS1 (coef. 110) sert de plancher : aucun salarié de la branche ne peut être payé en dessous de son minimum conventionnel.",
            "Le coefficient dépend des tâches réellement exercées, pas seulement de l'intitulé du poste — un sous-classement ouvre droit à un rappel de salaire.",
            "Le SMIC reste un plancher absolu : on applique toujours le plus favorable entre SMIC et minimum conventionnel.",
            "Un avenant salaires révise la grille en général une à deux fois par an — toujours vérifier la dernière version étendue.",
            "Au-delà du taux horaire, la prime d'ancienneté (par paliers), les primes (expérience, transport, salissure) et les majorations nuit/dimanche/férié s'ajoutent au salaire de base.",
            "Un sous-paiement expose l'employeur à un rappel sur trois ans, à un redressement URSSAF et, dans les cas graves, à une qualification de travail dissimulé.",
          ]}
        />

        <h2 id="lire-coefficient">Comment lire et appliquer un coefficient</h2>
        <p>
          Le coefficient est la clé de voûte de la paie dans la propreté : c&apos;est lui, et non
          l&apos;intitulé du poste, qui détermine le salaire minimum opposable. La démarche se fait en
          quatre temps.
        </p>
        <ol>
          <li>
            <strong>Décrire les tâches réellement exercées.</strong> Un agent qui ne fait que du
            nettoyage courant (vidage, dépoussiérage, lavage de sols) relève en principe d&apos;un
            premier échelon. Dès qu&apos;il manie des machines, encadre, ou intervient sur des
            surfaces spécifiques (vitrerie en hauteur, remise en état), la qualification monte.
          </li>
          <li>
            <strong>Rattacher ces tâches à un échelon.</strong> La{" "}
            <a href="/reglementation/classification-echelon-agent-proprete">
              classification par échelon (AS1, AS2, AS3, ATQS…)
            </a>{" "}
            décrit pour chaque niveau l&apos;autonomie, la technicité et les responsabilités attendues.
          </li>
          <li>
            <strong>Lire le coefficient associé à l&apos;échelon.</strong> Chaque échelon porte un
            coefficient (110, 120, 130…). Ce coefficient renvoie à une ligne précise de la grille.
          </li>
          <li>
            <strong>Lire le taux horaire minimum de cette ligne</strong> dans l&apos;avenant salaires
            en vigueur, et le comparer au taux réellement versé.
          </li>
        </ol>
        <p>
          <strong>Exemple concret.</strong> Marie réalise depuis deux ans le nettoyage d&apos;un
          ensemble de bureaux, utilise une autolaveuse et forme ponctuellement les nouveaux arrivants.
          Ces fonctions correspondent à un échelon AS2 (coefficient 120), et non AS1. Si son contrat la
          paie au taux AS1 (12,30 €/h) alors qu&apos;elle exerce des tâches d&apos;AS2 (12,46 €/h),
          l&apos;écart de 0,16 €/h représente, sur 151,67 h mensuelles, environ{" "}
          <strong>24 € brut de manque par mois</strong> — soit près de 290 € sur l&apos;année, hors
          incidence sur les primes calculées en pourcentage. C&apos;est typiquement le genre de
          sous-classement qui ouvre droit à un rappel de salaire.
        </p>

        <DefinitionBox term="Coefficient hiérarchique">
          Valeur numérique attribuée à chaque échelon de classification. Elle traduit le niveau de
          qualification, d&apos;autonomie et de responsabilité du poste, et sert de base au calcul du
          salaire minimum conventionnel correspondant.
        </DefinitionBox>

        <h2 id="facteurs">Primes et majorations</h2>
        <p>
          Le taux horaire de base n&apos;est qu&apos;une partie de la rémunération. Trois familles de
          compléments viennent s&apos;y ajouter : les primes liées au parcours du salarié,
          celles liées aux conditions de travail, et les majorations légales ou conventionnelles
          pour horaires atypiques.
        </p>

        <h3>Prime d&apos;ancienneté : un calcul par paliers</h3>
        <p>
          La prime d&apos;ancienneté récompense la fidélité à la branche. Elle s&apos;exprime en
          pourcentage du salaire minimum conventionnel de l&apos;échelon du salarié et progresse par
          paliers. À titre indicatif, le barème s&apos;articule ainsi :
        </p>
        <FactTable
          caption="Paliers indicatifs de prime d'ancienneté (% du minimum conventionnel)"
          headers={["Ancienneté", "Taux indicatif", "Prime mensuelle pour un AS2 (1 890 € brut)"]}
          rows={[
            ["4 ans", "2 %", "≈ 38 €"],
            ["6 ans", "3 %", "≈ 57 €"],
            ["8 ans", "4 %", "≈ 76 €"],
            ["10 ans", "5 %", "≈ 95 €"],
            ["15 ans et +", "6 %", "≈ 113 €"],
          ]}
        />
        <p>
          Les seuils et taux exacts figurent dans la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective IDCC 3043
          </a>{" "}
          ; ils doivent être vérifiés à la date de paie. La prime suit le minimum de l&apos;échelon :
          un changement de classification ou une revalorisation de la grille recalcule mécaniquement
          son montant.
        </p>

        <h3>Primes liées aux conditions de travail</h3>
        <ul>
          <li>
            <strong>Prime d&apos;expérience</strong> : complément distinct de l&apos;ancienneté,
            valorisant la maîtrise acquise sur certains postes.
          </li>
          <li>
            <strong>Prime de transport / déplacement</strong> entre deux chantiers au cours d&apos;une
            même vacation, lorsque les temps de trajet inter-sites le justifient.
          </li>
          <li>
            <strong>Prime de salissure ou d&apos;outillage</strong> selon les sujétions du poste
            (produits agressifs, équipements personnels).
          </li>
          <li>
            <strong>Prime de tri sélectif, de panier ou d&apos;habillage</strong> selon les usages et
            accords d&apos;entreprise.
          </li>
        </ul>

        <h3>Majorations pour horaires atypiques</h3>
        <p>
          Le travail de nuit, du dimanche et des jours fériés est fréquent dans la propreté
          (interventions avant ou après l&apos;activité des sites). Ces heures sont majorées :
        </p>
        <FactTable
          caption="Majorations indicatives pour horaires atypiques"
          headers={["Situation", "Majoration indicative", "Sur un taux de base de 12,46 €/h"]}
          rows={[
            ["Heures de nuit (21 h – 6 h)", "+ 20 %", "≈ 14,95 €/h"],
            ["Travail du dimanche", "+ 20 %", "≈ 14,95 €/h"],
            ["Jour férié travaillé", "+ 100 %", "≈ 24,92 €/h"],
            ["Heures supplémentaires (8 premières)", "+ 25 %", "≈ 15,58 €/h"],
            ["Heures supplémentaires (au-delà)", "+ 50 %", "≈ 18,69 €/h"],
          ]}
        />
        <p>
          Ces taux sont des repères : la convention de branche, les accords d&apos;entreprise ou le
          contrat peuvent prévoir des majorations plus favorables. Le calcul du{" "}
          <a href="/reglementation/urssaf-cotisations-proprete">coût chargé réel</a> doit intégrer ces
          majorations dès qu&apos;une part significative des heures est réalisée en horaires atypiques.
        </p>

        <h2 id="exemple-calcul">Exemple de calcul d&apos;un salaire mensuel</h2>
        <p>
          Prenons le cas d&apos;un agent <strong>AS2 (coefficient 120)</strong>, 6 ans
          d&apos;ancienneté, travaillant à temps plein, avec quelques heures de nuit. Le calcul du brut
          mensuel se décompose ainsi :
        </p>
        <FactTable
          caption="Décomposition d'un bulletin AS2 (exemple indicatif)"
          headers={["Élément", "Base", "Montant brut"]}
          rows={[
            ["Salaire de base", "151,67 h × 12,46 €", "1 890,00 €"],
            ["Prime d'ancienneté (6 ans)", "3 % de 1 890 €", "56,70 €"],
            ["Majoration nuit", "10 h × 12,46 € × 20 %", "24,92 €"],
            ["Prime de transport (forfait)", "Indicatif", "20,00 €"],
            ["Total brut mensuel", "—", "≈ 1 991,62 €"],
          ]}
        />
        <p>
          Sur ce brut, l&apos;employeur applique les cotisations salariales (de l&apos;ordre de 22 %)
          pour obtenir le net, et ajoute les cotisations patronales pour calculer le coût total. Pour
          un dirigeant, c&apos;est ce <strong>coût chargé</strong> — et non le seul taux horaire de
          grille — qui doit servir de base au{" "}
          <a href="/tarifs/tarif-horaire-nettoyage">tarif horaire facturé</a> afin de préserver la
          marge.
        </p>

        <h2 id="erreurs-paie">Erreurs de paie fréquentes dans la propreté</h2>
        <p>
          Le secteur cumule plusieurs facteurs de risque : forte rotation, multi-sites, horaires
          décalés, reprises de personnel. Les erreurs les plus courantes sont les suivantes.
        </p>
        <ul>
          <li>
            <strong>Sous-classement.</strong> Maintenir un agent en AS1 alors qu&apos;il exerce des
            tâches d&apos;AS2 ou d&apos;ATQS. C&apos;est l&apos;erreur la plus fréquente et la plus
            coûteuse en rappel.
          </li>
          <li>
            <strong>Oubli ou gel de la prime d&apos;ancienneté.</strong> La prime n&apos;est pas
            recalculée après un changement d&apos;échelon ou après une revalorisation de la grille,
            ou le palier d&apos;ancienneté n&apos;est pas déclenché à la bonne date.
          </li>
          <li>
            <strong>Mauvais taux de majoration.</strong> Heures de nuit ou de dimanche payées au taux
            normal, jours fériés non majorés, ou heures supplémentaires non décomptées sur la bonne
            assiette.
          </li>
          <li>
            <strong>Minimum conventionnel sous le SMIC.</strong> Appliquer un taux de grille devenu
            inférieur au SMIC après une hausse de ce dernier, sans verser le plus favorable.
          </li>
          <li>
            <strong>Reprise de personnel mal gérée.</strong> Lors d&apos;un changement de prestataire
            au titre de l&apos;
            <a href="/reglementation/transfert-personnel-annexe-7-proprete">annexe 7</a>, ne pas
            reprendre l&apos;ancienneté, la classification et les éléments de rémunération acquis du
            salarié transféré.
          </li>
          <li>
            <strong>Proratisation erronée du temps partiel</strong> ou décompte d&apos;heures
            complémentaires incorrect, très répandu sur les contrats courts multi-sites.
          </li>
        </ul>
        <InfoCallout title="Bonne pratique">
          Un contrôle croisé annuel entre la classification réelle, le dernier avenant salaires et les
          paliers d&apos;ancienneté permet de détecter la plupart de ces écarts avant qu&apos;ils ne se
          transforment en contentieux.
        </InfoCallout>

        <h2 id="application">Comment appliquer la grille correctement</h2>
        <p>
          Pour sécuriser votre paie, la démarche est la suivante :
        </p>
        <ul>
          <li>Identifier la classification réelle de chaque salarié (échelon + coefficient).</li>
          <li>Vérifier le taux minimum de l&apos;avenant salaires en vigueur à la date de paie.</li>
          <li>Comparer le salaire de base versé au minimum conventionnel applicable.</li>
          <li>Ajouter les primes et majorations dues, puis contrôler le bulletin.</li>
        </ul>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Besoin d&apos;un outil pour fiabiliser vos coûts ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Calculez le coût horaire chargé réel d&apos;un agent pour fixer vos prix avec marge.
          </p>
          <div className="mt-4">
            <Button href="/tarifs/nettoyage-bureaux-m2" variant="primary">
              Voir les prix du nettoyage de bureaux
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
