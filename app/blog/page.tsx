import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ARTICLES } from "@/lib/content";
import { SITE } from "@/lib/site";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Blog", href: "/blog" },
];

export const metadata: Metadata = buildMetadata({
  title: "Le blog PropretéPro : guides, analyses et ressources propreté",
  description:
    "Tous les guides et analyses de PropretéPro : réglementation et paie, tarifs et prix du nettoyage pour les dirigeants d'entreprises de propreté en France.",
  path: "/blog",
});

export default function BlogPage() {
  const articles = [...ARTICLES].sort(
    (a, b) => +new Date(b.dateModified) - +new Date(a.dateModified),
  );

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tous les guides PropretéPro",
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}${a.href}`,
      name: a.title,
    })),
  };

  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema(CRUMBS), itemList]} />
      <div className="relative overflow-hidden border-b border-line bg-surface">
        <div
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(94,234,212,0.35), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <Breadcrumb crumbs={CRUMBS} />
          <div className="mt-6 max-w-3xl">
            <Badge tone="cyan">Le blog</Badge>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-night-900 sm:text-[2.75rem]">
              Guides, analyses et ressources propreté
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-ink">
              Tous nos contenus pour piloter, développer et structurer votre activité de nettoyage,
              classés du plus récent au plus ancien.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <StaggerItem key={a.href} className="h-full">
              <ArticleCard article={a} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </>
  );
}
