import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/classification-echelon-agent-proprete";
const author = AUTHORS["claire-vidal"];
const datePublished = "2026-02-15";
const dateModified = "2026-06-10";
const readMinutes = 12;

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Classification et échelons", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "filieres", label: "Les filières de classement" },
  { id: "agents", label: "Échelons des agents (AS)" },
  { id: "maitrise", label: "Maîtrise (MP) et cadres" },
  { id: "criteres", label: "Critères de classement" },
  { id: "methode", label: "Comment classer un agent" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Classification et échelons de l'agent de propreté (AS, MP, cadres)",
  description:
    "Classifications et échelons dans la propreté : filières AS1 à ATQS, MP1 à MP5 et cadres, critères de classement, grille de coefficients et méthode pour classer correctement un agent de nettoyage.",
  path: PATH,
  type: "article",
  publishedTime: datePublished,
  modifiedTime: dateModified,
  authors: [author.name],
  keywords: [
    "classification agent de propreté",
    "échelon AS1 AS2 AS3",
    "coefficient propreté",
    "ATQS propreté",
    "classification maîtrise propreté",
  ],
});

const FAQ = [
  {
    question: "Quels sont les échelons des agents de propreté ?",
    answer:
      "La filière des agents de service comprend les échelons AS1, AS2 et AS3, puis l'agent très qualifié de service (ATQS). Ils correspondent à des coefficients croissants (de 110 à 140 environ) traduisant une autonomie et une technicité de plus en plus importantes dans les tâches de nettoyage.",
  },
  {
    question: "Quelle différence entre AS1, AS2 et AS3 ?",
    answer:
      "AS1 correspond à des tâches simples de nettoyage exécutées selon des consignes précises. AS2 implique une plus grande autonomie et la maîtrise de plusieurs techniques ou matériels. AS3 suppose une polyvalence confirmée, l'usage de techniques spécialisées et une autonomie d'organisation sur le chantier. Le classement dépend des tâches réellement exercées, pas de l'ancienneté seule.",
  },
  {
    question: "Sur quoi repose la classification d'un agent ?",
    answer:
      "La classification repose sur des critères objectifs : nature et complexité des tâches, autonomie dans l'organisation du travail, technicité et matériels utilisés, responsabilités exercées (encadrement, relation client). C'est le contenu réel du poste qui détermine l'échelon et le coefficient, lesquels doivent figurer au contrat et au bulletin de paie.",
  },
  {
    question: "Peut-on déclasser un agent de propreté ?",
    answer:
      "Non, pas unilatéralement. La classification correspond à des fonctions réellement exercées ; la modifier à la baisse constitue une modification du contrat de travail qui requiert l'accord du salarié. Une rétrogradation imposée sans motif valable peut être contestée devant le conseil de prud'hommes.",
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
            description:
              "Classifications et échelons dans la propreté : filières AS, MP et cadres, critères de classement, grille de coefficients et méthode pour classer un agent.",
            path: PATH,
            datePublished,
            dateModified,
            author: { name: author.name, jobTitle: author.role },
          }),
          faqSchema(FAQ),
          breadcrumbSchema(CRUMBS),
        ]}
      />

      <ArticleLayout
        crumbs={CRUMBS}
        kicker="Réglementation · Classification"
        title="Classification et échelons de l'agent de propreté"
        intro="Filières AS, MP et cadres, critères de classement et grille de coefficients : comment déterminer l'échelon exact d'un agent de nettoyage et sécuriser sa classification."
        author={author}
        datePublished={datePublished}
        dateModified={dateModified}
        readMinutes={readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Dans la propreté (IDCC 3043), la <strong>classification</strong> repose sur trois filières :
          les <strong>agents de service</strong> (AS1, AS2, AS3, puis ATQS), la{" "}
          <strong>maîtrise</strong> (MP1 à MP5) et les <strong>cadres</strong>. Chaque échelon
          correspond à un <strong>coefficient</strong> qui détermine le salaire minimum. Le classement
          dépend des <strong>tâches réellement exercées</strong>, de l&apos;autonomie et des
          responsabilités, et non du seul intitulé du poste ni de l&apos;ancienneté.
        </AnswerBox>

        <p>
          Bien classer un salarié n&apos;est pas un détail administratif : c&apos;est ce qui détermine
          son salaire minimum, ses droits et la conformité de la paie. Un classement erroné expose
          l&apos;employeur à des rappels de salaire, et le salarié à une rémunération inférieure à ses
          droits. Ce guide détaille la grille de classement et la méthode pour positionner correctement
          chaque agent.
        </p>

        <DefinitionBox term="Coefficient hiérarchique">
          Valeur numérique attribuée à chaque échelon de la grille de classification. Le coefficient
          traduit le niveau de qualification, d&apos;autonomie et de responsabilité du poste, et sert
          de base au calcul du salaire minimum conventionnel correspondant.
        </DefinitionBox>

        <h2 id="filieres">Les filières de classement</h2>
        <p>
          La grille distingue les opérateurs d&apos;exécution (<strong>agents de service, AS</strong>),
          l&apos;encadrement de proximité et les techniciens (<strong>maîtrise, MP</strong>), puis les{" "}
          <strong>cadres</strong>. À chaque filière correspond une suite d&apos;échelons et de
          coefficients croissants.
        </p>

        <h2 id="agents">Échelons des agents de service (AS)</h2>
        <FactTable
          caption="Échelons et coefficients de la filière Agents de service (indicatifs)"
          headers={["Échelon", "Coefficient", "Profil type", "Autonomie"]}
          rows={[
            ["AS1", 110, "Tâches simples selon consignes précises", "Faible"],
            ["AS2", 120, "Plusieurs techniques et matériels maîtrisés", "Modérée"],
            ["AS3", 130, "Polyvalence et techniques spécialisées", "Confirmée"],
            ["ATQS", 140, "Agent très qualifié, expertise technique", "Élevée"],
          ]}
        />

        <h2 id="maitrise">Maîtrise (MP) et cadres</h2>
        <FactTable
          caption="Échelons et coefficients de la maîtrise (MP) et des cadres (indicatifs)"
          headers={["Niveau", "Coefficient", "Profil type"]}
          rows={[
            ["MP1", 150, "Chef d'équipe, encadrement de proximité"],
            ["MP2", 170, "Encadrement renforcé, technicité"],
            ["MP3", 190, "Responsable de secteur ou de site"],
            ["MP4", 215, "Coordination multi-sites"],
            ["MP5", 240, "Maîtrise supérieure, expertise"],
            ["Cadre CE1", 300, "Responsable d'exploitation"],
            ["Cadre CE2", 350, "Direction de comptes / d'agence"],
          ]}
        />
        <InfoCallout title="Coefficients indicatifs">
          Les valeurs ci-dessus illustrent la logique de progression. Les coefficients exacts et leur
          libellé figurent dans la grille de classification de la convention collective et peuvent être
          précisés par avenant. Référez-vous toujours au texte en vigueur.
        </InfoCallout>

        <h2 id="criteres">Critères de classement</h2>
        <p>
          Le classement s&apos;appuie sur des critères objectifs qu&apos;il faut examiner ensemble :
        </p>
        <ul>
          <li>
            <strong>Nature et complexité des tâches</strong> : du nettoyage courant aux techniques
            spécialisées (remise en état, bionettoyage, traitement de sols).
          </li>
          <li>
            <strong>Autonomie</strong> : capacité à organiser son travail sans supervision constante.
          </li>
          <li>
            <strong>Technicité et matériels</strong> : usage de machines, produits et protocoles
            spécifiques.
          </li>
          <li>
            <strong>Responsabilités</strong> : encadrement d&apos;une équipe, relation avec le client,
            gestion d&apos;un site.
          </li>
        </ul>
        <KeyTakeaways
          items={[
            "Trois filières structurent la grille : agents (AS), maîtrise (MP) et cadres.",
            "Le coefficient découle de l'échelon et fixe le salaire minimum conventionnel.",
            "C'est le contenu réel du poste, pas l'intitulé ni l'ancienneté, qui détermine le classement.",
            "Un déclassement unilatéral est interdit : modifier la classification suppose l'accord du salarié.",
          ]}
        />

        <h2 id="methode">Comment classer un agent, étape par étape</h2>
        <p>
          Pour fiabiliser un classement, procédez méthodiquement :
        </p>
        <ul>
          <li>Décrire précisément les tâches réellement effectuées sur le chantier.</li>
          <li>Évaluer l&apos;autonomie, la technicité et les responsabilités à l&apos;aune des critères ci-dessus.</li>
          <li>Identifier l&apos;échelon correspondant (AS, MP ou cadre) puis le coefficient associé.</li>
          <li>
            Vérifier le salaire minimum via la{" "}
            <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a> et
            l&apos;inscrire au contrat et au bulletin de paie.
          </li>
        </ul>
        <p>
          En cas de reprise d&apos;un marché, la classification du salarié transféré est maintenue : ce
          point est encadré par l&apos;
          <a href="/reglementation/transfert-personnel-annexe-7-proprete">annexe 7</a> de la convention
          collective. Pour le cadre conventionnel d&apos;ensemble, voir notre{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            guide de la convention collective IDCC 3043
          </a>
          .
        </p>

        <h2 id="erreurs">Erreurs fréquentes</h2>
        <p>
          Les pièges les plus courants sont de classer un agent selon son seul intitulé de poste, de
          confondre ancienneté et qualification, de maintenir un échelon AS1 alors que les missions ont
          évolué vers de la polyvalence, ou d&apos;oublier de revoir la classification après une montée
          en compétence. Un agent qui exerce durablement des tâches relevant d&apos;un échelon supérieur
          peut légitimement réclamer la classification correspondante.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Classement fait ? Vérifiez le salaire minimum
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            À chaque coefficient correspond un taux horaire minimum à respecter.
          </p>
          <div className="mt-4">
            <Button href="/reglementation/grille-salaire-proprete-2026" variant="primary">
              Ouvrir la grille de salaire 2026
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
