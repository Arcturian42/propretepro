import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Crumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import type { Article } from "@/lib/content";
import { SITE } from "@/lib/site";

type SiloHubProps = {
  crumbs: Crumb[];
  kicker: string;
  title: string;
  intro: string;
  articles: Article[];
  children?: ReactNode;
};

/**
 * Gabarit de page pilier / index de silo : en-tête éditorial,
 * grille d'articles du silo, et zone libre (children) pour contenu spécifique.
 */
export function SiloHub(props: SiloHubProps) {
  const { crumbs, kicker, title, intro, articles, children } = props;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description: intro,
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}${a.href}`,
      name: a.title,
    })),
  };

  return (
    <div>
      <SchemaMarkup schema={itemList} />
      <div className="relative overflow-hidden border-b border-line bg-surface">
        <div
          className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(94,234,212,0.35), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <Breadcrumb crumbs={crumbs} />
          <div className="mt-6 max-w-3xl">
            <Badge tone="emerald">{kicker}</Badge>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-night-900 sm:text-[2.75rem]">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-ink">{intro}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {children}
        {articles.length > 0 && (
          <>
            <Reveal>
              <h2 className="section-heading text-2xl sm:text-3xl">Guides &amp; ressources du silo</h2>
            </Reveal>
            <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <StaggerItem key={a.href} className="h-full">
                  <ArticleCard article={a} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </>
        )}
      </div>
    </div>
  );
}
