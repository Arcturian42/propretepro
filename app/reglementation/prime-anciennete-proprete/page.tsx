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

const PATH = "/reglementation/prime-anciennete-proprete";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Prime d'ancienneté propreté", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "definition", label: "Qu'est-ce que la prime d'ancienneté" },
  { id: "conditions", label: "Conditions d'ouverture" },
  { id: "bareme", label: "Barème par paliers" },
  { id: "base-calcul", label: "Base de calcul" },
  { id: "exemple", label: "Exemple chiffré pour un AS2" },
  { id: "vs-experience", label: "Prime d'ancienneté vs prime d'expérience" },
  { id: "erreurs", label: "Erreurs fréquentes" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Prime d'ancienneté propreté (IDCC 3043) : barème, base et calcul",
  description:
    "Prime d'ancienneté dans la propreté (IDCC 3043) : conditions d'ouverture, barème indicatif par paliers (de 2 % à environ 6 %), base de calcul et exemple chiffré pour un agent AS2.",
  path: PATH,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "prime d'ancienneté propreté",
    "IDCC 3043",
    "barème prime ancienneté nettoyage",
    "calcul prime ancienneté agent de propreté",
    "prime expérience propreté",
  ],
});

const FAQ = [
  {
    question: "À partir de combien d'ancienneté la prime est-elle due dans la propreté ?",
    answer:
      "Dans la branche propreté (IDCC 3043), la prime d'ancienneté s'ouvre en principe à partir de 4 ans d'ancienneté continue dans l'entreprise. En dessous de ce seuil, aucune prime n'est due au titre de l'ancienneté. Le seuil exact et les paliers sont fixés par la convention collective et doivent être vérifiés dans la version en vigueur à la date de paie.",
  },
  {
    question: "Comment calcule-t-on la prime d'ancienneté d'un agent de propreté ?",
    answer:
      "La prime se calcule en appliquant un taux (de 2 % à environ 6 % selon l'ancienneté) au salaire minimum conventionnel de l'échelon du salarié, et non au salaire réellement versé. Pour un AS2 dont le minimum conventionnel est d'environ 1 890 € brut mensuel, une prime de 3 % représente environ 57 € brut par mois. Le résultat se proratise pour un temps partiel.",
  },
  {
    question: "La prime d'ancienneté est-elle calculée sur le salaire réel ou sur le minimum conventionnel ?",
    answer:
      "Elle se calcule sur le salaire minimum conventionnel de l'échelon (le minimum hiérarchique de la grille), pas sur le salaire réel ni sur les primes. Un salarié payé au-dessus du minimum perçoit donc la même prime d'ancienneté qu'un collègue de même échelon payé au minimum, dès lors qu'ils ont la même ancienneté.",
  },
  {
    question: "Quelle est la différence entre prime d'ancienneté et prime d'expérience ?",
    answer:
      "La prime d'ancienneté récompense la durée de présence dans l'entreprise et progresse par paliers d'ancienneté. La prime d'expérience, lorsqu'elle existe, valorise le savoir-faire et la maîtrise acquise sur un poste ou un type de chantier, indépendamment de la seule durée. Ce sont deux compléments distincts qui peuvent se cumuler ; il faut vérifier les dispositions conventionnelles ou d'entreprise applicables.",
  },
  {
    question: "La prime d'ancienneté augmente-t-elle quand la grille est revalorisée ?",
    answer:
      "Oui. Comme elle est assise sur le salaire minimum conventionnel de l'échelon, toute revalorisation de la grille par avenant salaires augmente mécaniquement le montant de la prime d'ancienneté. De même, un changement d'échelon (par exemple un passage d'AS1 à AS2) recalcule la prime sur la nouvelle base. C'est une source d'erreur fréquente lorsque la prime n'est pas mise à jour.",
  },
  {
    question: "La prime d'ancienneté est-elle proratisée pour un temps partiel ?",
    answer:
      "Oui. Pour un salarié à temps partiel, la prime d'ancienneté se proratise en fonction de la durée du travail. Un agent à mi-temps relevant d'un palier de 3 % percevra une prime correspondant à 3 % du minimum conventionnel proratisé à son temps de travail, soit environ la moitié de la prime d'un temps plein de même échelon et même ancienneté.",
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
        kicker="Réglementation · Paie"
        title="Prime d'ancienneté propreté (IDCC 3043)"
        intro="Conditions d'ouverture, barème indicatif par paliers, base de calcul et exemple chiffré pour appliquer correctement la prime d'ancienneté dans la branche propreté."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          Dans la propreté (IDCC 3043), la <strong>prime d&apos;ancienneté</strong> s&apos;ouvre en
          principe à partir de <strong>4 ans</strong> d&apos;ancienneté et progresse par paliers, d&apos;environ{" "}
          <strong>2 %</strong> à <strong>~6 %</strong> à 15 ans et plus. Elle se calcule sur le{" "}
          <strong>salaire minimum conventionnel de l&apos;échelon</strong>, pas sur le salaire réel. Pour un
          AS2 à ~1 890 € brut, 3 % représentent environ <strong>57 € par mois</strong>.
        </AnswerBox>

        <p>
          La prime d&apos;ancienneté est l&apos;un des compléments de rémunération les plus structurants
          dans la branche propreté, où la fidélisation des agents est un enjeu permanent face à un fort
          turnover. Pour un dirigeant, c&apos;est aussi une ligne de coût qui progresse avec l&apos;âge de
          l&apos;effectif et qu&apos;il faut intégrer dans le{" "}
          <a href="/tarifs/cout-revient-agent-proprete">coût de revient d&apos;un agent</a>. Cette page
          détaille les conditions, le barème par paliers et la méthode de calcul.
        </p>

        <InfoCallout title="Avertissement">
          Les taux et seuils présentés ci-dessous sont des ordres de grandeur fournis à titre informatif.
          Le barème opposable est celui de la convention collective et de ses avenants en vigueur à la date
          de paie, à vérifier au Journal officiel ou auprès de votre organisation professionnelle.
        </InfoCallout>

        <h2 id="definition">Qu&apos;est-ce que la prime d&apos;ancienneté</h2>
        <p>
          La prime d&apos;ancienneté est un complément de salaire versé en contrepartie de la durée de
          présence du salarié dans l&apos;entreprise. Elle n&apos;est pas prévue par le Code du travail :
          c&apos;est la <strong>convention collective</strong> de la propreté qui l&apos;institue, en fixe
          les conditions et le barème. Elle s&apos;ajoute au salaire de base et figure sur une ligne
          distincte du bulletin de paie. Elle est soumise à cotisations comme un élément de salaire ordinaire
          et entre dans l&apos;assiette de calcul des cotisations sociales déclarées à l&apos;
          <a href="/reglementation/urssaf-cotisations-proprete">URSSAF</a>.
        </p>

        <DefinitionBox term="Prime d'ancienneté">
          Complément de rémunération conventionnel, exprimé en pourcentage du salaire minimum hiérarchique
          de l&apos;échelon, dont le taux augmente par paliers en fonction du nombre d&apos;années
          d&apos;ancienneté continue du salarié dans l&apos;entreprise.
        </DefinitionBox>

        <h2 id="conditions">Conditions d&apos;ouverture du droit</h2>
        <p>
          Trois conditions principales déterminent l&apos;ouverture du droit à la prime d&apos;ancienneté.
        </p>
        <ul>
          <li>
            <strong>Une ancienneté minimale.</strong> Le droit s&apos;ouvre à partir d&apos;un premier seuil,
            en principe <strong>4 ans</strong> d&apos;ancienneté. En dessous, aucune prime n&apos;est due au
            titre de l&apos;ancienneté.
          </li>
          <li>
            <strong>Une ancienneté continue dans l&apos;entreprise.</strong> Le décompte court à partir de
            l&apos;entrée dans l&apos;entreprise. Certaines périodes (suspension du contrat, congés assimilés
            à du travail effectif) sont prises en compte selon les règles conventionnelles.
          </li>
          <li>
            <strong>La reprise d&apos;ancienneté en cas de transfert.</strong> Lors d&apos;un changement de
            prestataire au titre de l&apos;
            <a href="/reglementation/transfert-personnel-annexe-7-proprete">annexe 7</a>, l&apos;ancienneté
            acquise est en principe reprise par l&apos;entreprise entrante, ce qui maintient le droit à la
            prime et son palier.
          </li>
        </ul>
        <p>
          La détermination de la date d&apos;effet de chaque palier est essentielle : la prime ou le passage
          au palier supérieur doit être déclenché au mois où le seuil d&apos;ancienneté est atteint, sans
          attendre la fin de l&apos;année.
        </p>

        <h2 id="bareme">Barème indicatif par paliers</h2>
        <p>
          La prime progresse par paliers d&apos;ancienneté, chaque palier correspondant à un taux appliqué
          au salaire minimum conventionnel de l&apos;échelon. À titre indicatif, le barème s&apos;articule de
          la manière suivante :
        </p>
        <FactTable
          caption="Paliers indicatifs de prime d'ancienneté (% du minimum conventionnel de l'échelon)"
          headers={["Ancienneté atteinte", "Taux indicatif", "Lecture"]}
          rows={[
            ["Moins de 4 ans", "0 %", "Pas de prime d'ancienneté"],
            ["4 ans", "2 %", "Ouverture du droit"],
            ["6 ans", "3 %", "Palier intermédiaire"],
            ["8 ans", "4 %", "Palier intermédiaire"],
            ["10 ans", "5 %", "Palier intermédiaire"],
            ["15 ans et +", "≈ 6 %", "Plafond indicatif"],
          ]}
        />
        <p>
          Ces valeurs sont des repères. Le nombre de paliers, les seuils et le taux plafond exacts sont fixés
          par la{" "}
          <a href="/reglementation/convention-collective-proprete-idcc-3043">
            convention collective IDCC 3043
          </a>{" "}
          ; ils peuvent différer de ce tableau et doivent être contrôlés dans la version en vigueur.
        </p>

        <KeyTakeaways
          items={[
            "La prime d'ancienneté s'ouvre en principe à 4 ans d'ancienneté et progresse par paliers jusqu'à un plafond d'environ 6 % à 15 ans et plus.",
            "Elle se calcule sur le salaire minimum conventionnel de l'échelon, pas sur le salaire réel ni sur les autres primes.",
            "Toute revalorisation de la grille ou tout changement d'échelon recalcule mécaniquement le montant de la prime.",
            "Pour un temps partiel, la prime se proratise en fonction de la durée du travail.",
            "La prime d'ancienneté (durée de présence) est distincte de la prime d'expérience (savoir-faire) et peut se cumuler avec elle.",
            "Oublier de déclencher un palier ou de recalculer la prime après une hausse de grille expose à un rappel de salaire sur trois ans.",
          ]}
        />

        <h2 id="base-calcul">Base de calcul</h2>
        <p>
          Le point le plus important — et la source d&apos;erreur la plus fréquente — concerne l&apos;assiette
          de la prime. La prime d&apos;ancienneté se calcule sur le{" "}
          <strong>salaire minimum conventionnel de l&apos;échelon</strong> du salarié, c&apos;est-à-dire le
          minimum hiérarchique de la grille correspondant à son coefficient, et non :
        </p>
        <ul>
          <li>ni sur le salaire de base réellement versé (qui peut être supérieur au minimum) ;</li>
          <li>ni sur le salaire brut total incluant les autres primes et majorations ;</li>
          <li>ni sur le salaire net.</li>
        </ul>
        <p>
          Concrètement, on identifie l&apos;échelon (et donc le coefficient) du salarié dans la{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">grille de classification</a>, on
          lit le minimum conventionnel correspondant dans la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire 2026</a>, puis on applique
          le taux du palier d&apos;ancienneté à ce minimum. Pour un temps partiel, le résultat est proratisé
          au prorata de la durée du travail.
        </p>

        <h2 id="exemple">Exemple chiffré pour un agent AS2</h2>
        <p>
          Prenons le cas d&apos;un agent de service échelon <strong>AS2 (coefficient 120)</strong>, dont le
          salaire minimum conventionnel s&apos;établit autour de <strong>1 890 € brut mensuel</strong> à temps
          plein (151,67 h). Selon son ancienneté, la prime d&apos;ancienneté se chiffre ainsi :
        </p>
        <FactTable
          caption="Prime d'ancienneté mensuelle indicative pour un AS2 (base ≈ 1 890 € brut)"
          headers={["Ancienneté", "Taux indicatif", "Calcul", "Prime mensuelle brute"]}
          rows={[
            ["4 ans", "2 %", "2 % × 1 890 €", "≈ 37,80 €"],
            ["6 ans", "3 %", "3 % × 1 890 €", "≈ 56,70 €"],
            ["8 ans", "4 %", "4 % × 1 890 €", "≈ 75,60 €"],
            ["10 ans", "5 %", "5 % × 1 890 €", "≈ 94,50 €"],
            ["15 ans et +", "≈ 6 %", "6 % × 1 890 €", "≈ 113,40 €"],
          ]}
        />
        <p>
          Pour ce même agent à <strong>mi-temps</strong> (75,83 h), la base proratisée serait d&apos;environ
          945 € : une prime de 3 % représenterait alors près de <strong>28,35 €</strong> par mois, soit la
          moitié du montant temps plein. Sur l&apos;année, une prime de 56,70 €/mois représente près de{" "}
          <strong>680 € de coût salarial brut</strong>, auquel s&apos;ajoutent les charges patronales — un
          paramètre à intégrer dans le coût chargé qui sert de base au tarif facturé.
        </p>

        <InfoCallout title="Bon à savoir">
          Lorsque la grille est revalorisée par un avenant salaires, le minimum conventionnel de l&apos;échelon
          augmente, et la prime d&apos;ancienneté — calculée en pourcentage de ce minimum — augmente
          automatiquement. Le logiciel de paie doit répercuter cette hausse, sous peine de geler la prime à
          une base périmée.
        </InfoCallout>

        <h2 id="vs-experience">Prime d&apos;ancienneté et prime d&apos;expérience : ne pas confondre</h2>
        <p>
          La branche propreté connaît plusieurs compléments de rémunération qu&apos;il ne faut pas
          confondre. La <strong>prime d&apos;ancienneté</strong> récompense la seule durée de présence dans
          l&apos;entreprise et progresse par paliers d&apos;ancienneté. La{" "}
          <strong>prime d&apos;expérience</strong>, lorsqu&apos;elle est prévue, valorise quant à elle le
          savoir-faire et la maîtrise acquise sur un poste, un type de site ou une technicité particulière,
          indépendamment de la seule durée passée dans l&apos;entreprise.
        </p>
        <FactTable
          caption="Prime d'ancienneté vs prime d'expérience (synthèse)"
          headers={["Critère", "Prime d'ancienneté", "Prime d'expérience"]}
          rows={[
            ["Ce qu'elle valorise", "Durée de présence", "Savoir-faire / maîtrise du poste"],
            ["Progression", "Par paliers d'ancienneté", "Selon les dispositions applicables"],
            ["Base de calcul", "Minimum conventionnel de l'échelon", "Selon l'accord applicable"],
            ["Cumul", "Oui, avec la prime d'expérience", "Oui, avec la prime d'ancienneté"],
          ]}
        />
        <p>
          Les deux primes peuvent se cumuler dès lors que les conditions de chacune sont remplies. Il convient
          de vérifier dans la convention collective et les éventuels accords d&apos;entreprise quelles primes
          s&apos;appliquent réellement, car les intitulés et modalités peuvent varier d&apos;une structure à
          l&apos;autre.
        </p>

        <h2 id="erreurs">Erreurs fréquentes à éviter</h2>
        <ul>
          <li>
            <strong>Calculer la prime sur le salaire réel.</strong> L&apos;assiette est le minimum
            conventionnel de l&apos;échelon, pas le salaire effectivement versé ni le brut total.
          </li>
          <li>
            <strong>Geler la prime après une revalorisation de grille.</strong> La prime doit suivre la hausse
            du minimum conventionnel ; un oubli crée un sous-paiement.
          </li>
          <li>
            <strong>Ne pas recalculer après un changement d&apos;échelon.</strong> Un passage d&apos;AS1 à AS2
            modifie la base de la prime.
          </li>
          <li>
            <strong>Déclencher le palier en retard.</strong> Le passage au palier supérieur doit intervenir au
            mois où le seuil d&apos;ancienneté est atteint.
          </li>
          <li>
            <strong>Perdre l&apos;ancienneté lors d&apos;un transfert.</strong> En cas de reprise au titre de
            l&apos;annexe 7, l&apos;ancienneté et donc le palier de prime doivent être maintenus.
          </li>
        </ul>

        <SourcesBox sources={SOURCES.remuneration} />

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Intégrez la prime d&apos;ancienneté à vos coûts
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Calculez le coût horaire chargé réel d&apos;un agent, primes comprises, pour fixer vos prix avec
            marge.
          </p>
          <div className="mt-4">
            <Button href="/tarifs/cout-revient-agent-proprete" variant="primary">
              Voir le coût de revient d&apos;un agent
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
