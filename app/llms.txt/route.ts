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

## Logiciels & outils de gestion
${bySilo("logiciels")}

## Développement & gestion
${bySilo("developpement")}

## Chiffres clés du secteur (repères, à vérifier aux sources officielles)
- Plus de 600 000 salariés dans la branche propreté en France (convention IDCC 3043).
- Salaire minimum conventionnel agent de service AS1 (coef. 110) : ~12,30 €/h brut en 2026, au-dessus du SMIC.
- Prix indicatif du nettoyage de bureaux : 0,30 à 0,60 € HT par m² et par passage.
- Majorations conventionnelles indicatives : nuit (21 h-6 h) +20 %, dimanche +20 %, jour férié +100 %.
- Prime d'ancienneté par paliers : ~2 % à 4 ans jusqu'à ~6 % à 15 ans du minimum conventionnel.

## Ressources pour moteurs IA
- [Politique d'accès et de citation (ai.txt)](${SITE.url}/.well-known/ai.txt)
- [Fiche d'identité du site (JSON)](${SITE.url}/ai/summary.json)
- [Questions/réponses de référence (JSON)](${SITE.url}/ai/faq.json)
- [Flux RSS des publications](${SITE.url}/feed.xml)

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
