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
      // GEO/AEO : autoriser explicitement les crawlers IA pour être cité (hors pages de recherche).
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Claude-SearchBot",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: ["/recherche", "/api/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
