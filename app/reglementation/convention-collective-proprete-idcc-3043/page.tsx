import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { AnswerBox, KeyTakeaways, DefinitionBox, FactTable, InfoCallout } from "@/components/sections/GeoBlocks";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { AUTHORS, getArticle, ARTICLES } from "@/lib/content";

const PATH = "/reglementation/convention-collective-proprete-idcc-3043";
const COVER = "/covers/convention-collective-proprete-idcc-3043.webp";
const article = getArticle(PATH)!;
const author = AUTHORS[article.authorSlug];

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Réglementation", href: "/reglementation" },
  { name: "Convention collective IDCC 3043", href: PATH },
];

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "champ", label: "Champ d'application" },
  { id: "classifications", label: "Classifications" },
  { id: "essai", label: "Période d'essai et préavis" },
  { id: "primes", label: "Primes et indemnités" },
  { id: "conges", label: "Congés, fériés et absences" },
  { id: "prevoyance", label: "Prévoyance et mutuelle" },
  { id: "maladie", label: "Maladie et maintien de salaire" },
  { id: "annexe7", label: "Transfert de personnel (annexe 7)" },
  { id: "rupture", label: "Rupture du contrat" },
  { id: "faq", label: "Questions fréquentes" },
];

export const metadata: Metadata = buildMetadata({
  title: "Convention collective propreté IDCC 3043 : le guide complet 2026",
  description:
    "Champ d'application, classifications AS/MP/cadres, période d'essai, primes, congés, prévoyance et rupture : tout comprendre de la convention collective des entreprises de propreté (IDCC 3043).",
  path: PATH,
    image: COVER,
  type: "article",
  publishedTime: article.datePublished,
  modifiedTime: article.dateModified,
  authors: [author.name],
  keywords: [
    "convention collective propreté",
    "IDCC 3043",
    "convention collective nettoyage",
    "classification propreté",
    "prévoyance propreté",
  ],
});

const FAQ = [
  {
    question: "Quelle est la convention collective des entreprises de nettoyage ?",
    answer:
      "Les entreprises de nettoyage relèvent de la convention collective nationale des entreprises de propreté et services associés, identifiée par l'IDCC 3043 (anciennement IDCC 1810, code brochure 3173). Elle s'applique à l'ensemble des salariés dont l'activité principale de l'employeur est le nettoyage de locaux.",
  },
  {
    question: "La convention collective propreté est-elle obligatoire ?",
    answer:
      "Oui. Étendue par arrêté ministériel, la convention IDCC 3043 s'impose à toutes les entreprises dont l'activité principale relève de la propreté, qu'elles soient adhérentes ou non d'une organisation patronale signataire. Son non-respect expose l'employeur à des rappels de salaire et à des sanctions prud'homales.",
  },
  {
    question: "Comment connaître sa classification dans la propreté ?",
    answer:
      "La classification dépend des tâches réellement exercées, du niveau d'autonomie et des responsabilités, et non du seul intitulé du poste. Elle se traduit par un échelon (AS1 à ATQS pour les agents, MP1 à MP5 pour la maîtrise) et un coefficient, qui doivent figurer sur le contrat de travail et le bulletin de paie.",
  },
  {
    question: "Quelle est la durée de la période d'essai dans la propreté ?",
    answer:
      "Pour un CDI, la période d'essai est généralement d'un mois pour les agents de service et employés, deux mois pour la maîtrise (agents techniques) et trois mois pour les cadres, renouvelable une fois dans les conditions prévues par la convention. Pour un CDD, elle se calcule à raison d'un jour par semaine, plafonnée selon la durée du contrat.",
  },
  {
    question: "Quelle est la différence entre l'IDCC 3043 et l'IDCC 3173 ?",
    answer:
      "Il n'y a pas deux conventions distinctes : il s'agit de la même convention collective des entreprises de propreté. 3173 est en réalité le numéro de brochure du Journal officiel (la publication papier), tandis que 3043 est l'IDCC actuel, qui a remplacé l'ancien IDCC 1810. C'est le numéro IDCC 3043 qui doit obligatoirement figurer sur le bulletin de paie.",
  },
  {
    question: "La convention propreté prévoit-elle une prime d'ancienneté ?",
    answer:
      "La branche ne prévoit pas une « prime d'ancienneté » classique mais une prime d'expérience, qui majore le salaire de base par paliers en fonction des années passées dans la profession. Son taux progresse à intervalles réguliers d'ancienneté. Les modalités exactes figurent dans les avenants salariaux et sur la grille de salaire en vigueur.",
  },
  {
    question: "Quelle mutuelle est obligatoire dans la propreté ?",
    answer:
      "Toute entreprise de propreté doit proposer une complémentaire santé collective au moins équivalente au socle conventionnel de branche, financée pour partie par l'employeur, ainsi qu'un régime de prévoyance couvrant incapacité, invalidité et décès. L'entreprise peut choisir son organisme assureur dès lors que les garanties respectent le niveau minimal défini par la branche.",
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
        kicker="Réglementation · Convention collective"
        title="Convention collective propreté IDCC 3043 : le guide complet"
        intro="Champ d'application, classifications, période d'essai, primes, congés, prévoyance et rupture : l'essentiel de la convention collective nationale des entreprises de propreté, pour les employeurs comme pour les salariés."
        author={author}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        readMinutes={article.readMinutes}
        toc={TOC}
        image={COVER}
      >
        <h2 id="en-bref">En bref</h2>
        <AnswerBox>
          La <strong>convention collective nationale des entreprises de propreté</strong> (IDCC 3043,
          ex-1810) encadre la relation de travail dans le secteur du nettoyage en France : elle fixe
          les <strong>classifications</strong>, les salaires minima, la période d&apos;essai, les
          primes, les congés, la prévoyance et les règles de rupture. Étendue, elle est{" "}
          <strong>obligatoire</strong> pour toutes les entreprises dont l&apos;activité principale est
          la propreté, et complète le Code du travail.
        </AnswerBox>

        <p>
          La branche de la propreté compte plus de 14 000 entreprises et environ 600 000 salariés en
          France. Pour structurer un secteur où dominent les très petites entreprises et le temps
          partiel, les partenaires sociaux ont bâti une convention collective dense, régulièrement
          mise à jour par avenants. Ce guide en présente les piliers, du champ d&apos;application
          jusqu&apos;à la rupture du contrat.
        </p>

        <DefinitionBox term="IDCC 3043">
          L&apos;IDCC (Identifiant De Convention Collective) 3043 désigne la convention collective
          nationale des entreprises de propreté et services associés. Elle a remplacé l&apos;ancien
          IDCC 1810 et correspond à la brochure n° 3173 du Journal officiel. C&apos;est ce numéro qui
          doit figurer sur le bulletin de paie des salariés de la branche.
        </DefinitionBox>

        <h2 id="champ">Champ d&apos;application</h2>
        <p>
          La convention s&apos;applique aux entreprises dont l&apos;<strong>activité principale</strong>{" "}
          est le nettoyage de locaux (bureaux, immeubles, industries, commerces, établissements de
          santé) ainsi qu&apos;aux services associés (vitrerie, remise en état, gestion de déchets,
          hygiène sanitaire, désinfection). C&apos;est l&apos;<strong>activité réelle</strong>, et non
          le code APE/NAF, qui détermine l&apos;assujettissement, même si le code{" "}
          <strong>81.21Z</strong> (nettoyage courant des bâtiments) ou <strong>81.22Z</strong>{" "}
          (autres activités de nettoyage des bâtiments et nettoyage industriel) constitue un indice
          fort. D&apos;autres codes peuvent y être rattachés selon les prestations, comme le 81.29A
          (désinfection, désinsectisation) ou le 81.29B (autres services de nettoyage).
        </p>
        <p>
          Concrètement, sont concernés aussi bien les agents intervenant sur des sites tertiaires
          (immeubles de bureaux, plateaux open space, parties communes de copropriétés) que ceux
          affectés au nettoyage industriel, hospitalier, agroalimentaire ou aux remises en état après
          travaux. Pour replacer ces prestations dans leur contexte tarifaire, vous pouvez consulter
          notre référentiel de{" "}
          <a href="/tarifs/nettoyage-bureaux-m2">prix de nettoyage de bureaux au m²</a>. La
          convention s&apos;applique à <strong>tous les salariés</strong> de l&apos;entreprise relevant
          de la propreté, y compris le personnel administratif et d&apos;encadrement, et non aux seuls
          agents de terrain.
        </p>
        <InfoCallout title="Activité principale, pas accessoire">
          Une entreprise dont le nettoyage n&apos;est qu&apos;une activité accessoire (par exemple un
          syndic ou un industriel employant ses propres agents) ne relève pas automatiquement de
          l&apos;IDCC 3043. Le critère est celui de l&apos;activité dominante de l&apos;employeur. En
          cas de pluriactivité, c&apos;est l&apos;activité qui occupe le plus grand nombre de salariés
          qui sert de référence pour rattacher l&apos;entreprise à la branche.
        </InfoCallout>

        <h2 id="classifications">Classifications : agents, maîtrise et cadres</h2>
        <p>
          La grille de classification distingue trois filières. Les <strong>agents de service</strong>{" "}
          (AS) regroupent les opérateurs d&apos;exécution. La <strong>maîtrise et les techniciens</strong>{" "}
          (MP) encadrent ou exercent des fonctions techniques. Les <strong>cadres</strong> assument des
          responsabilités d&apos;organisation et de gestion. Chaque échelon correspond à un coefficient
          servant de base aux minima salariaux.
        </p>
        <FactTable
          caption="Aperçu des classifications de la convention collective propreté (IDCC 3043)"
          headers={["Filière", "Échelons", "Profil", "Coefficients indicatifs"]}
          rows={[
            ["Agents de service (AS)", "AS1 à AS3, ATQS", "Exécution de tâches de nettoyage, autonomie croissante", "110 à 140"],
            ["Maîtrise / techniciens (MP)", "MP1 à MP5", "Encadrement de proximité, fonctions techniques", "150 à 240"],
            ["Cadres", "CE1 à CE4", "Direction d'exploitation, gestion de comptes", "300 et plus"],
          ]}
        />
        <p>
          Le détail des coefficients et des critères de classement est abordé dans notre guide dédié à
          la{" "}
          <a href="/reglementation/classification-echelon-agent-proprete">
            classification et aux échelons des agents de propreté
          </a>
          . Pour les taux horaires associés, consultez la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
        </p>

        <h2 id="essai">Période d&apos;essai et préavis</h2>
        <p>
          La période d&apos;essai permet à chaque partie de tester la relation de travail. Sa durée
          varie selon la catégorie professionnelle et peut, sous conditions, être renouvelée une fois.
        </p>
        <FactTable
          caption="Durées indicatives de période d'essai en CDI (IDCC 3043)"
          headers={["Catégorie", "Durée initiale", "Renouvellement possible"]}
          rows={[
            ["Agents de service / employés", "1 mois", "1 mois"],
            ["Maîtrise / agents techniques", "2 mois", "2 mois"],
            ["Cadres", "3 mois", "3 mois"],
          ]}
        />
        <InfoCallout title="Vérifier la rédaction du contrat">
          Le renouvellement n&apos;est possible que s&apos;il est expressément prévu par le contrat de
          travail ou la lettre d&apos;engagement, et accepté par le salarié. À défaut, la période
          d&apos;essai ne peut être prolongée.
        </InfoCallout>
        <p>
          Une fois la période d&apos;essai passée, toute rupture suppose le respect d&apos;un{" "}
          <strong>préavis</strong>, dont la durée dépend de la catégorie professionnelle, de
          l&apos;ancienneté et de l&apos;auteur de la rupture (démission ou licenciement). Le tableau
          ci-dessous synthétise les ordres de grandeur les plus courants ; l&apos;ancienneté peut
          allonger ces durées, en particulier pour les employés.
        </p>
        <FactTable
          caption="Préavis indicatifs selon la catégorie (hors faute grave, IDCC 3043)"
          headers={["Catégorie", "Préavis démission", "Préavis licenciement"]}
          rows={[
            ["Agents de service / employés", "1 semaine à 1 mois", "1 à 2 mois selon ancienneté"],
            ["Maîtrise / agents techniques", "1 mois", "2 mois"],
            ["Cadres", "3 mois", "3 mois"],
          ]}
        />
        <p>
          Ces durées s&apos;entendent sauf dispense accordée par l&apos;employeur, faute grave ou
          lourde, ou accord entre les parties. Le décompte du préavis et de l&apos;ancienneté a un
          impact direct sur l&apos;indemnité de licenciement et sur le solde de tout compte.
        </p>

        <h2 id="primes">Primes et indemnités</h2>
        <p>
          Au-delà du salaire de base, la convention prévoit plusieurs compléments de rémunération
          fréquents dans le secteur :
        </p>
        <ul>
          <li>
            <strong>Prime d&apos;expérience</strong> : majoration progressive du salaire selon
            l&apos;ancienneté acquise dans la branche.
          </li>
          <li>
            <strong>Indemnité de transport</strong> : prise en charge des déplacements entre sites
            selon les conditions conventionnelles.
          </li>
          <li>
            <strong>Majorations</strong> pour travail de nuit, du dimanche et des jours fériés,
            courantes compte tenu des horaires décalés.
          </li>
          <li>
            <strong>Indemnité de salissure ou d&apos;équipement</strong> selon les sujétions du poste.
          </li>
        </ul>
        <p>
          Ces compléments s&apos;ajoutent au salaire minimum conventionnel correspondant au
          coefficient du salarié. Pour vérifier le montant brut applicable à chaque échelon, reportez
          vous à la{" "}
          <a href="/reglementation/grille-salaire-proprete-2026">grille de salaire propreté 2026</a>.
          Côté employeur, ces primes ont une incidence sur l&apos;assiette des charges : notre guide
          des{" "}
          <a href="/reglementation/urssaf-cotisations-proprete">cotisations URSSAF de la propreté</a>{" "}
          détaille leur traitement social.
        </p>

        <h2 id="conges">Congés, jours fériés et absences</h2>
        <p>
          Les salariés bénéficient des <strong>congés payés légaux</strong> (2,5 jours ouvrables par
          mois travaillé, soit 30 jours ouvrables pour une année complète) ainsi que, le cas échéant,
          de <strong>jours supplémentaires liés à l&apos;ancienneté</strong> dans l&apos;entreprise ou
          la branche. La convention encadre par ailleurs le régime des <strong>jours fériés</strong> :
          dans un secteur où les interventions du dimanche et des jours fériés sont fréquentes, le
          travail effectué ces jours-là ouvre droit à des majorations spécifiques.
        </p>
        <p>
          Des <strong>autorisations d&apos;absence rémunérées</strong> sont prévues pour les
          principaux événements familiaux, sans condition d&apos;ancienneté pour la plupart
          d&apos;entre eux. Le tableau suivant donne des ordres de grandeur indicatifs, à vérifier au
          regard de l&apos;avenant applicable et du Code du travail, qui fixe des planchers.
        </p>
        <FactTable
          caption="Jours d'absence indicatifs pour événements familiaux (IDCC 3043)"
          headers={["Événement", "Durée indicative"]}
          rows={[
            ["Mariage / PACS du salarié", "4 jours"],
            ["Mariage d'un enfant", "1 jour"],
            ["Naissance ou adoption", "3 jours"],
            ["Décès du conjoint ou d'un enfant", "3 à 5 jours"],
            ["Décès d'un parent (père, mère)", "3 jours"],
            ["Annonce du handicap d'un enfant", "2 jours"],
          ]}
        />
        <p>
          Certaines entreprises ou accords locaux prévoient en complément une{" "}
          <strong>prime de fin d&apos;année</strong> ou un treizième mois, mais celle-ci ne constitue
          pas une obligation générale de la convention de branche : elle dépend d&apos;un usage, du
          contrat de travail ou d&apos;un accord d&apos;entreprise.
        </p>

        <h2 id="prevoyance">Prévoyance et mutuelle de branche</h2>
        <p>
          La branche impose un régime de <strong>prévoyance</strong> couvrant les risques lourds
          (incapacité de travail, invalidité, décès) ainsi qu&apos;une{" "}
          <strong>complémentaire santé</strong> collective obligatoire, financée pour partie par
          l&apos;employeur. Ces garanties sont structurées au niveau de la branche afin de protéger une
          population souvent à temps partiel et exposée aux accidents du travail et aux troubles
          musculo-squelettiques.
        </p>
        <p>
          À titre indicatif, la cotisation de prévoyance se situe couramment autour de quelques
          dixièmes de pour-cent à 1 % du salaire brut, répartie entre employeur et salarié, tandis que
          la complémentaire santé obéit à un socle minimal de garanties (hospitalisation, soins
          courants, optique, dentaire) financé au moins à 50 % par l&apos;employeur. En cas de rupture
          du contrat ouvrant droit au chômage, le salarié conserve le bénéfice de ces garanties au
          titre de la <strong>portabilité</strong>, gratuitement, pendant une durée pouvant aller
          jusqu&apos;à douze mois.
        </p>
        <InfoCallout title="Chiffres indicatifs">
          Les taux et durées cités dans ce guide sont fournis à titre indicatif et peuvent évoluer par
          avenant ou selon l&apos;organisme assureur retenu. Vérifiez toujours la version consolidée de
          la convention et l&apos;avenant en vigueur avant d&apos;établir un contrat ou un bulletin de
          paie.
        </InfoCallout>

        <h2 id="maladie">Maladie, maintien de salaire et carence</h2>
        <p>
          En cas d&apos;arrêt de travail pour maladie ou accident, le salarié perçoit d&apos;abord les{" "}
          <strong>indemnités journalières de la Sécurité sociale</strong>, soumises à un délai de
          carence de trois jours. Sous condition d&apos;<strong>ancienneté minimale</strong> dans
          l&apos;entreprise, la convention et le Code du travail organisent un{" "}
          <strong>maintien de salaire</strong> complémentaire à la charge de l&apos;employeur, qui
          porte la rémunération à un pourcentage du salaire pendant un nombre de jours croissant avec
          l&apos;ancienneté.
        </p>
        <p>
          Ce maintien intervient après un éventuel délai de carence conventionnel, et son montant ainsi
          que sa durée dépendent de l&apos;ancienneté acquise. Au-delà de la période de maintien à la
          charge de l&apos;employeur, le régime de prévoyance de branche prend le relais pour les
          arrêts longs (incapacité prolongée, invalidité), évitant une rupture brutale de revenus pour
          le salarié.
        </p>

        <h2 id="annexe7">Lien avec le transfert de personnel (annexe 7)</h2>
        <p>
          La propreté présente une particularité forte : la perte ou le gain d&apos;un marché entraîne
          fréquemment le <strong>transfert des agents</strong> affectés au site concerné vers
          l&apos;entreprise entrante. C&apos;est l&apos;objet de l&apos;<strong>annexe 7</strong> de la
          convention, qui organise la reprise du personnel, le maintien de l&apos;ancienneté et des
          conditions de rémunération sous certaines conditions (présence sur le marché, type de
          contrat, durée d&apos;affectation). C&apos;est un sujet à part entière, traité en détail dans
          notre guide dédié au{" "}
          <a href="/reglementation/transfert-personnel-annexe-7-proprete">
            transfert de personnel (annexe 7)
          </a>
          .
        </p>
        <KeyTakeaways
          items={[
            "L'IDCC 3043 s'applique dès lors que la propreté est l'activité principale de l'employeur (codes NAF 81.21Z / 81.22Z typiques).",
            "Trois filières structurent les emplois : agents de service (AS), maîtrise (MP) et cadres.",
            "La période d'essai va d'un mois (agents) à trois mois (cadres), renouvelable une fois si le contrat le prévoit, avant des préavis variables selon l'ancienneté.",
            "Congés payés légaux, autorisations d'absence pour événements familiaux et majorations dimanche/jours fériés sont encadrés par la convention.",
            "Prévoyance et complémentaire santé de branche sont obligatoires, en partie financées par l'employeur, et portables après la rupture du contrat.",
            "Le maintien de salaire en cas de maladie dépend de l'ancienneté, et l'annexe 7 régit la reprise du personnel lors d'un changement de prestataire.",
          ]}
        />

        <h2 id="rupture">Rupture du contrat</h2>
        <p>
          La convention précise les durées de <strong>préavis</strong> de démission et de
          licenciement, variables selon l&apos;ancienneté et la catégorie (voir le tableau plus haut),
          ainsi que les modalités de l&apos;<strong>indemnité de licenciement</strong>, qui repose sur
          l&apos;ancienneté et le salaire de référence. Le solde de tout compte doit intégrer
          l&apos;indemnité compensatrice de congés payés, les éventuelles primes acquises et, le cas
          échéant, l&apos;indemnité de préavis non effectué.
        </p>
        <p>
          Hors démission et licenciement, la rupture peut aussi prendre la forme d&apos;une{" "}
          <strong>rupture conventionnelle</strong> homologuée par l&apos;administration, ou résulter
          d&apos;un départ ou d&apos;une mise à la retraite. Lorsque la rupture découle d&apos;un{" "}
          <strong>changement de prestataire</strong> sur un marché, ce n&apos;est pas un licenciement
          mais un transfert qui s&apos;applique : l&apos;<strong>annexe 7</strong> impose la reprise du
          contrat par l&apos;entreprise entrante, comme détaillé dans la section précédente.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
          <p className="font-display text-lg font-semibold text-night-900">
            Besoin des taux horaires à jour ?
          </p>
          <p className="mt-1 text-sm text-muted-ink">
            Retrouvez les salaires minima par échelon et coefficient applicables cette année.
          </p>
          <div className="mt-4">
            <Button href="/reglementation/grille-salaire-proprete-2026" variant="primary">
              Voir la grille de salaire 2026
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
