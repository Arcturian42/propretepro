import type { MetadataRoute } from "next";
import { SITE, MAIN_NAV } from "@/lib/site";
import { ARTICLES, AUTHORS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const usedAuthors = new Set(ARTICLES.map((a) => a.authorSlug));

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "daily", priority: 1 },
    ...MAIN_NAV.map((n) => ({
      url: `${SITE.url}${n.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${SITE.url}/logiciels`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE.url}/auteurs`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${SITE.url}/a-propos`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE.url}/mentions-legales`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${SITE.url}/confidentialite`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE.url}${a.href}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly",
    priority: 0.9,
    // Image sitemap : aide l'indexation des couvertures dans Google Images.
    images: [`${SITE.url}/covers/${a.slug}.webp`],
  }));

  const authorPages: MetadataRoute.Sitemap = Object.keys(AUTHORS)
    .filter((slug) => usedAuthors.has(slug))
    .map((slug) => ({
      url: `${SITE.url}/auteurs/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    }));

  return [...staticPages, ...articlePages, ...authorPages];
}
