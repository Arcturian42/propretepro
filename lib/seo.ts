import type { Metadata } from "next";
import { SITE } from "./site";
import { ARTICLES } from "./content";

type BuildMetaArgs = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  image?: string;
  keywords?: string[];
};

/**
 * Construit un objet Metadata Next.js complet :
 * title/description uniques, canonical, Open Graph, Twitter Cards.
 */
export function buildMetadata(args: BuildMetaArgs): Metadata {
  const {
    title,
    description,
    path,
    type = "website",
    publishedTime,
    modifiedTime,
    authors,
    image,
    keywords,
  } = args;
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  // Image OG : prop explicite, sinon couverture de l'article (/covers/{slug}.webp) si le
  // path correspond à un article, sinon la convention `opengraph-image.tsx` (OG globale).
  const articleCover = ARTICLES.find((a) => a.href === path);
  const resolvedImage = image ?? (articleCover ? `/covers/${articleCover.slug}.webp` : undefined);
  const ogImage = resolvedImage
    ? [{ url: resolvedImage, width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    // `absolute` empêche le template `%s | PropretéPro` du layout de se cumuler
    // au suffixe déjà ajouté ici (évite le doublon « … | PropretéPro | PropretéPro »).
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      ...(ogImage ? { images: ogImage } : {}),
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: SITE.twitter,
      ...(resolvedImage ? { images: [resolvedImage] } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}
