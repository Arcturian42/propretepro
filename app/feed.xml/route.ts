import { SITE } from "@/lib/site";
import { ARTICLES, AUTHORS } from "@/lib/content";

/**
 * /feed.xml — flux RSS 2.0 du média PropretéPro.
 * Signal de fraîcheur pour le SEO/GEO et canal de distribution (lecteurs RSS,
 * agrégateurs, moteurs IA). Régénéré à la build à partir de la couche contenu.
 */
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = [...ARTICLES]
    .sort((a, b) => +new Date(b.dateModified) - +new Date(a.dateModified))
    .map((a) => {
      const url = `${SITE.url}${a.href}`;
      const author = AUTHORS[a.authorSlug];
      const pubDate = new Date(a.datePublished).toUTCString();
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <category>${escapeXml(a.siloLabel)}</category>
      ${author ? `<dc:creator>${escapeXml(author.name)}</dc:creator>` : ""}
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const lastBuildDate = new Date(
    Math.max(...ARTICLES.map((a) => +new Date(a.dateModified))),
  ).toUTCString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${SITE.name} — ${SITE.tagline}`)}</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>${SITE.language}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
