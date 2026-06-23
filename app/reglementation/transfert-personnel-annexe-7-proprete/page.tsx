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
import { AUTHORS, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/transfert-personnel-annexe-7-proprete";
const author = AUTHORS["claire-vidal"];
const datePublished = "2026-02-15";
const dateModified = "2026-06-10";
const readMinutes = 11;

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Transfert de personnel (annexe 7)", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "principe", label: "Le principe de l'annexe 7" },
  { id: "conditions", label: "Conditions de transfert" },
  { id: "salaries", label: "Salariés concernés" },
  { id: "obligations", label: "Obligations entrant / sortant" },
  { id: "maintien", label: "Maintien des contrats" },
  { id: "pieges", label: "Points de vigilance" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Transfert de personnel annexe 7 propreté : reprise lors d'un changement de prestataire",
  description:
    "Annexe 7 de la convention collective propreté : conditions de transfert du personnel lors d'un changement de prestataire, salariés concernés, obligations de l'entreprise entrante et sortante, maintien des contrats.",
  path: PATH,
  type: "article",
  publishedTime: datePublished,
  modifiedTime: dateModified,
  authors: [author.name],
  keywords: [
    "annexe 7 propreté",
    "transfert de personnel propreté",
    "reprise du personnel nettoyage",
    "changement de prestataire propreté",
    "garantie d'emploi propreté",
  ],
});

const FAQ = [
  {
    question: "Qu'est-ce que l'annexe 7 de la convention propreté ?",
    answer:
      "L'annexe 7 de la convention collective des entreprises de propreté (IDCC 3043) organise la reprise du personnel affecté à un marché lorsque celui-ci change de prestataire. Elle impose, sous conditions, à l'entreprise entrante de reprendre les salariés du site, avec maintien de leur contrat de travail, de leur ancienneté et de leur rémunération.",
  },
  {
    question: "Quels salariés sont transférés en cas de changement de prestataire ?",
    answer:
      "Sont concernés les salariés affectés au marché remportant une certaine ancienneté sur le site et un pourcentage minimal de leur temps de travail affecté à ce marché. Les conditions cumulatives (ancienneté sur le site, affectation, absence d'autres marchés rendant le transfert impossible) sont fixées par l'annexe 7 et doivent être appréciées à la date de notification de la perte du marché.",
  },
  {
    question: "Le salarié peut-il refuser le transfert ?",
    answer:
      "Le transfert prévu par l'annexe 7 est de droit lorsque les conditions sont réunies : le contrat se poursuit automatiquement avec l'entreprise entrante. Un salarié qui refuserait de rejoindre le nouveau prestataire s'exposerait à une rupture de son contrat, l'entreprise sortante n'ayant en principe plus de poste à lui proposer sur ce site.",
  },
  {
    question: "L'ancienneté est-elle conservée lors du transfert ?",
    answer:
      "Oui. L'entreprise entrante reprend le contrat de travail dans ses éléments essentiels : ancienneté acquise, qualification, classification et rémunération sont maintenues. Le salarié conserve donc ses droits liés à l'ancienneté (préavis, indemnités, prime d'expérience), comme s'il n'y avait pas eu changement d'employeur.",
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
              "Annexe 7 de la convention collective propreté : conditions de transfert du personnel, salariés concernés, obligations entrante/sortante et maintien des contrats.",
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
        kicker="Réglementation · Transfert de personnel"
        title="Transfert de personnel (annexe 7) dans la propreté"
        intro="Lors d'un changement de prestataire, l'annexe 7 de la convention collective propreté impose la reprise des salariés affectés au marché. Conditions, salariés concernés, obligations de l'entrant et du sortant, et maintien des contrats."
        author={author}
        datePublished={datePublished}
        dateModified={dateModified}
        readMinutes={readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          L&apos;<strong>annexe 7</strong> de la convention collective propreté (IDCC 3043) organise la{" "}
          <strong>reprise du personnel</strong> lorsqu&apos;un marché de nettoyage change de
          prestataire. Sous conditions d&apos;<strong>ancienneté sur le site</strong> et de{" "}
          <strong>pourcentage d&apos;affectation</strong> au marché, l&apos;entreprise entrante doit
          reprendre les salariés concernés en maintenant leur contrat, leur ancienneté et leur
          rémunération. Le transfert est de droit et s&apos;impose aux deux parties.
        </AnswerBox>

        <p>
          La propreté est un secteur où les marchés se gagnent et se perdent au fil des appels
          d&apos;offres. Sans dispositif spécifique, chaque changement de prestataire entraînerait des
          licenciements en cascade. L&apos;annexe 7 organise au contraire une{" "}
          <strong>continuité de l&apos;emploi</strong> : les salariés «&nbsp;suivent&nbsp;» le site
          plutôt que l&apos;employeur. Ce mécanisme conventionnel, propre à la branche, complète la
          garantie d&apos;emploi prévue par le Code du travail.
        </p>

        <DefinitionBox term="Annexe 7 (garantie d'emploi)">
          Disposition conventionnelle de l&apos;IDCC 3043 qui prévoit, lors de la perte d&apos;un
          marché par une entreprise de propreté, le transfert automatique des contrats de travail des
          salariés affectés à ce marché vers l&apos;entreprise qui le reprend, dès lors que des
          conditions d&apos;ancienneté et d&apos;affectation sont remplies.
        </DefinitionBox>

        <h2 id="principe">Le principe de l&apos;annexe 7</h2>
        <p>
          Lorsqu&apos;un client confie son marché à un nouveau prestataire, l&apos;entreprise{" "}
          <strong>sortante</strong> perd le chantier mais l&apos;entreprise <strong>entrante</strong>{" "}
          en hérite avec son personnel. Le contrat de travail se poursuit sans rupture : il y a
          changement d&apos;employeur, pas perte d&apos;emploi. Ce transfert s&apos;opère
          automatiquement dès que les conditions sont réunies, sans qu&apos;il soit nécessaire de
          recueillir un accord individuel préalable.
        </p>

        <h2 id="conditions">Conditions de transfert</h2>
        <p>
          Le transfert n&apos;est pas systématique : il suppose la réunion de plusieurs conditions
          cumulatives, appréciées à la date de notification de la perte du marché.
        </p>
        <FactTable
          caption="Conditions cumulatives de reprise au titre de l'annexe 7 (principes indicatifs)"
          headers={["Critère", "Condition de principe", "Finalité"]}
          rows={[
            ["Ancienneté sur le site", "Présence minimale du salarié sur le marché transféré", "Réserver le transfert aux salariés réellement rattachés au site"],
            ["Affectation au marché", "Part minimale du temps de travail consacrée au marché", "Éviter le transfert de salariés marginalement affectés"],
            ["Nature du contrat", "CDI ou CDD en cours sur le marché concerné", "Identifier les contrats poursuivis"],
            ["Absence d'exclusion", "Salarié non écarté par les cas prévus (ex. cumul de marchés)", "Préserver la cohérence de l'affectation"],
          ]}
        />
        <InfoCallout title="Apprécier au cas par cas">
          Les seuils exacts d&apos;ancienneté et de pourcentage d&apos;affectation, ainsi que les cas
          d&apos;exclusion, sont fixés par le texte de l&apos;annexe 7. Chaque situation doit être
          analysée individuellement à partir des plannings et des contrats, idéalement avec l&apos;appui
          d&apos;un juriste en droit social.
        </InfoCallout>

        <h2 id="salaries">Salariés concernés</h2>
        <p>
          Sont visés les salariés affectés au marché transféré qui remplissent les conditions
          d&apos;ancienneté et d&apos;affectation. Les salariés intervenant sur plusieurs marchés, ceux
          récemment affectés, ou ceux en contrat précaire non rattaché au site, peuvent en être exclus.
          La détermination de la liste des salariés transférables est un point sensible des passations
          de marché.
        </p>

        <h2 id="obligations">Obligations de l&apos;entreprise entrante et sortante</h2>
        <p>
          Le transfert suppose une coopération encadrée entre les deux prestataires :
        </p>
        <ul>
          <li>
            L&apos;entreprise <strong>sortante</strong> doit informer son personnel, établir la liste
            des salariés transférables et transmettre à l&apos;entrante les éléments nécessaires
            (contrats, ancienneté, éléments de paie, soldes de congés).
          </li>
          <li>
            L&apos;entreprise <strong>entrante</strong> doit reprendre les salariés éligibles aux
            mêmes conditions essentielles, poursuivre leur contrat et assumer les droits acquis.
          </li>
          <li>
            Les délais d&apos;information et de transmission des documents sont encadrés afin
            d&apos;assurer une passation sans interruption de salaire.
          </li>
        </ul>
        <KeyTakeaways
          items={[
            "L'annexe 7 fait suivre les salariés au site, pas à l'employeur, lors d'un changement de prestataire.",
            "Le transfert suppose des conditions cumulatives d'ancienneté et de pourcentage d'affectation au marché.",
            "Le contrat est repris dans ses éléments essentiels : ancienneté, classification et rémunération sont maintenues.",
            "Entrante et sortante ont des obligations réciproques d'information et de transmission de documents.",
          ]}
        />

        <h2 id="maintien">Maintien des contrats</h2>
        <p>
          Le salarié transféré conserve son <strong>ancienneté</strong>, sa{" "}
          <strong>classification</strong> et sa <strong>rémunération</strong>. La{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">
            classification et l&apos;échelon
          </a>{" "}
          du salarié ne peuvent donc pas être revus à la baisse à l&apos;occasion du transfert, et son
          niveau de salaire est garanti au regard de la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire en vigueur</a>.
        </p>

        <h2 id="pieges">Points de vigilance</h2>
        <p>
          Plusieurs erreurs reviennent fréquemment dans les passations de marché : liste de salariés
          incomplète ou contestée, éléments de paie transmis tardivement, oubli des soldes de congés et
          des primes d&apos;ancienneté, ou encore mauvaise appréciation du pourcentage d&apos;affectation.
          Pour l&apos;entreprise entrante, ces zones de flou se traduisent en coûts cachés et en
          contentieux. Une vérification rigoureuse de l&apos;éligibilité, dossier par dossier, reste la
          meilleure protection.
        </p>

        <SourcesBox sources={SOURCES.transfert} />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Reprendre un marché ? Anticipez le cadre conventionnel
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Le transfert s&apos;inscrit dans la convention collective IDCC 3043. Revoyez-en les piliers.
          </p>
          <div className="mt-4">
            <Button href="/reglementation/convention-collective-proprete-idcc-3043" variant="primary">
              Lire le guide de la convention collective
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
