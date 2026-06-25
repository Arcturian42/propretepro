import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/recherche", "/api/"],
      },
      // GEO/AEO : autoriser explicitement les moteurs IA de recherche/réponse pour être cité
      // (ChatGPT Search, Perplexity, Claude, Gemini, Apple Intelligence…), hors pages de recherche.
      {
        userAgent: [
          "OAI-SearchBot",      // citations ChatGPT Search
          "ChatGPT-User",       // navigation à la demande (ChatGPT)
          "PerplexityBot",      // citations Perplexity
          "Perplexity-User",
          "ClaudeBot",          // citations Claude
          "Claude-Web",
          "Claude-SearchBot",
          "Claude-User",
          "Google-Extended",    // grounding des réponses Gemini / AI Overviews
          "Applebot-Extended",  // Apple Intelligence
          "Amazonbot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: ["/recherche", "/api/"],
      },
      // Cohérence avec /.well-known/ai.txt (« Allow-training: no ») : on bloque les robots
      // d'aspiration destinés UNIQUEMENT à l'entraînement de modèles (aucune valeur de citation).
      {
        userAgent: [
          "GPTBot",          // entraînement OpenAI (≠ OAI-SearchBot, conservé)
          "anthropic-ai",    // entraînement Anthropic (≠ ClaudeBot, conservé)
          "CCBot",           // Common Crawl
          "Bytespider",      // ByteDance
          "Diffbot",
          "Omgilibot",
          "ImagesiftBot",
          "PetalBot",
          "DataForSeoBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
