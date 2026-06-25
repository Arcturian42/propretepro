import { SITE } from "./site";
import { AUTHORS, ARTICLES } from "./content";

/**
 * Générateurs de données structurées Schema.org.
 * Sortie en JSON-LD, à injecter via le composant <SchemaMarkup />.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/apple-icon`,
    description: SITE.description,
    slogan: SITE.tagline,
    foundingDate: String(SITE.foundingYear),
    areaServed: { "@type": "Country", name: "France" },
    knowsAbout: [
      "Convention collective propreté IDCC 3043",
      "Grille de salaire et classification des agents de propreté",
      "URSSAF et coût du travail dans le nettoyage",
      "Tarifs et prix du nettoyage en France",
      "Rentabilité et coût de revient des prestations de propreté",
    ],
    sameAs: [
      "https://www.linkedin.com/company/propretepro",
      "https://twitter.com/propretepro",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: SITE.email,
      areaServed: "FR",
      availableLanguage: "French",
    },
  };
}

/**
 * ItemList — expose une liste ordonnée d'entités (piliers, ressources) pour
 * aider les moteurs IA à cartographier la structure du site et à le citer.
 */
export function itemListSchema(args: {
  name: string;
  items: { name: string; href: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: args.name,
    itemListElement: args.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${SITE.url}${it.href}`,
      ...(it.description ? { description: it.description } : {}),
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "fr-FR",
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/recherche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

type Author = { name: string; jobTitle?: string; url?: string };

/**
 * Normalise un champ `title` Next.js (string ou { absolute }) en chaîne lisible.
 * Tolère le cas où une page passe `metadata.title` (devenu un objet) en `headline`.
 */
function toTitleString(value: unknown): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "absolute" in value) {
    return String((value as { absolute?: unknown }).absolute ?? "");
  }
  return "";
}

export function articleSchema(args: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author: Author;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    // headline propre, sans le suffixe « | PropretéPro » ajouté aux <title> (recommandation Google ≤110 car.)
    headline: toTitleString(args.headline).replace(/\s*\|\s*Propreté\s*Pro\s*$/, "").slice(0, 110),
    description: args.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}${args.path}` },
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    inLanguage: "fr-FR",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    ...(() => {
      const section = ARTICLES.find((a) => a.href === args.path)?.siloLabel;
      return section ? { articleSection: section } : {};
    })(),
    image: (() => {
      if (args.image) return `${SITE.url}${args.image}`;
      const art = ARTICLES.find((a) => a.href === args.path);
      return art ? `${SITE.url}/covers/${art.slug}.webp` : `${SITE.url}/opengraph-image`;
    })(),
    // Speakable : marque la réponse directe et le titre pour les assistants vocaux / IA (AEO).
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".geo-answer"],
    },
    author: {
      "@type": "Person",
      name: args.author.name,
      ...(args.author.jobTitle ? { jobTitle: args.author.jobTitle } : {}),
      ...(args.author.url ? { url: args.author.url } : { url: authorUrlByName(args.author.name) }),
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/apple-icon` },
    },
  };
}

/** Résout l'URL de la page auteur à partir du nom affiché (E-E-A-T). */
function authorUrlByName(name: string): string | undefined {
  const entry = Object.values(AUTHORS).find((a) => a.name === name);
  return entry ? `${SITE.url}/auteurs/${entry.slug}` : undefined;
}

export function personSchema(args: {
  slug: string;
  name: string;
  jobTitle: string;
  description: string;
  knowsAbout?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/auteurs/${args.slug}#person`,
    name: args.name,
    url: `${SITE.url}/auteurs/${args.slug}`,
    jobTitle: args.jobTitle,
    description: args.description,
    ...(args.knowsAbout ? { knowsAbout: args.knowsAbout } : {}),
    worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

export function howToSchema(args: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    inLanguage: "fr-FR",
    step: args.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.href}`,
    })),
  };
}

export function softwareReviewSchema(args: {
  name: string;
  description: string;
  ratingValue: number;
  bestRating?: number;
  path: string;
  offersPrice?: string;
  priceCurrency?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: args.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      ...(args.offersPrice
        ? {
            offers: {
              "@type": "Offer",
              price: args.offersPrice,
              priceCurrency: args.priceCurrency ?? "EUR",
            },
          }
        : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: args.ratingValue,
      bestRating: args.bestRating ?? 10,
      worstRating: 1,
    },
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

export function localBusinessSchema(args: {
  city: string;
  region: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}${args.path}`,
    name: `Entreprises de nettoyage à ${args.city}`,
    description: args.description,
    areaServed: { "@type": "City", name: args.city },
    address: { "@type": "PostalAddress", addressLocality: args.city, addressRegion: args.region, addressCountry: "FR" },
  };
}
