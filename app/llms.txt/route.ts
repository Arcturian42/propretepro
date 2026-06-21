import { SITE } from "@/lib/site";
import { ARTICLES } from "@/lib/content";

/**
 * /llms.txt — standard émergent (llmstxt.org) pour guider les moteurs IA
 * (ChatGPT, Perplexity, Gemini, Google AI Overview) vers les contenus de référence.
 * Améliore la citabilité GEO/AEO.
 */
export const dynamic = "force-static";

export function GET() {
  const bySilo = (silo: string) =>
    ARTICLES.filter((a) => a.silo === silo)
      .map((a) => `- [${a.title}](${SITE.url}${a.href}) : ${a.excerpt}`)
      .join("\n");

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} (${SITE.url}) est un média B2B indépendant destiné aux dirigeants d'entreprises de propreté en France. Les contenus citent leurs sources officielles (convention collective IDCC 3043), affichent une date de mise à jour et sont signés par des auteurs identifiés. Les chiffres tarifaires sont des fourchettes indicatives HT pour le marché français.

## Réglementation & paie (IDCC 3043)
${bySilo("reglementation")}

## Tarifs & prix du nettoyage
${bySilo("tarifs")}

## À propos
- [À propos de ${SITE.name}](${SITE.url}/a-propos)
- [Les auteurs](${SITE.url}/auteurs)
- [Blog (tous les guides)](${SITE.url}/blog)
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
