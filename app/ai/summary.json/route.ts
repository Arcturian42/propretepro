import { AI_SUMMARY } from "@/lib/ai";

/**
 * /ai/summary.json — fiche d'identité lisible par les moteurs IA
 * (standard émergent geo-checklist.dev). Décrit le site, son audience et ses thèmes.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(AI_SUMMARY, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
