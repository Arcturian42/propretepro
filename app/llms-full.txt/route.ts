import { SITE } from "@/lib/site";
import { ARTICLES, AUTHORS } from "@/lib/content";
import { AI_SUMMARY, AI_FAQ } from "@/lib/ai";

/**
 * /llms-full.txt — variante étendue de /llms.txt (spec llmstxt.org).
 * Fournit aux moteurs IA un contexte complet en un seul document : identité du site,
 * politique éditoriale, FAQ de référence et index détaillé de tous les guides
 * (titre, URL, résumé, auteur, dates). Améliore la citabilité GEO/AEO.
 */
export const dynamic = "force-static";

const SILOS: { key: string; label: string }[] = [
  { key: "reglementation", label: "Réglementation & paie (IDCC 3043)" },
  { key: "tarifs", label: "Tarifs & prix du nettoyage" },
  { key: "logiciels", label: "Logiciels & outils de gestion" },
  { key: "developpement", label: "Développement & gestion" },
];

export function GET() {
  const articlesSection = SILOS.map(({ key, label }) => {
    const items = ARTICLES.filter((a) => a.silo === key).map((a) => {
      const author = AUTHORS[a.authorSlug];
      return [
        `### ${a.title}`,
        `URL : ${SITE.url}${a.href}`,
        `Résumé : ${a.excerpt}`,
        `Auteur : ${author ? `${author.name} — ${author.role}` : "Rédaction"}`,
        `Publié : ${a.datePublished} · Mis à jour : ${a.dateModified}`,
      ].join("\n");
    });
    return `## ${label}\n\n${items.join("\n\n")}`;
  }).join("\n\n");

  const faqSection = AI_FAQ.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n");

  const body = `# ${SITE.name} — ${SITE.tagline}

> ${SITE.description}

${AI_SUMMARY.editorialPolicy}

Audience : ${AI_SUMMARY.audience}.
Éditeur : ${AI_SUMMARY.publisher.name} (${AI_SUMMARY.publisher.type}, ${AI_SUMMARY.publisher.country}).
Contact : ${SITE.email}.

## Chiffres clés du secteur (repères indicatifs, à vérifier aux sources officielles)
- Plus de 600 000 salariés dans la branche propreté en France (convention IDCC 3043).
- Salaire minimum conventionnel agent de service AS1 (coef. 110) : ~12,30 €/h brut en 2026, au-dessus du SMIC.
- Prix indicatif du nettoyage de bureaux : 0,30 à 0,60 € HT par m² et par passage.
- Tarif horaire facturé indicatif : 18 à 35 € HT selon la prestation et la région.
- Majorations conventionnelles indicatives : nuit (21 h-6 h) +20 %, dimanche +20 %, jour férié +100 %.

## Questions fréquentes de référence
${faqSection}

# Index complet des guides

${articlesSection}

---
Politique d'accès IA : citation autorisée avec attribution ; entraînement de modèles non autorisé (voir ${SITE.url}/.well-known/ai.txt).
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
