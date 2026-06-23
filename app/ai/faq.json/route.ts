import { AI_FAQ } from "@/lib/ai";
import { SITE } from "@/lib/site";

/**
 * /ai/faq.json — questions/réponses de référence pour les moteurs IA
 * (standard émergent geo-checklist.dev). Facilite la citation de réponses directes.
 */
export const dynamic = "force-static";

export function GET() {
  const body = {
    name: SITE.name,
    url: SITE.url,
    faqs: AI_FAQ,
  };
  return new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
