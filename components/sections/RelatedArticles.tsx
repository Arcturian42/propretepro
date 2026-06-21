import { ArticleCard } from "@/components/cards/ArticleCard";
import type { Article } from "@/lib/content";

/** Bloc « Articles liés » pour le maillage interne (SEO en silo). */
export function RelatedArticles({ articles, title = "À lire aussi" }: { articles: Article[]; title?: string }) {
  if (articles.length === 0) return null;
  return (
    <section aria-labelledby="related-title">
      <h2 id="related-title" className="font-display text-2xl font-semibold text-night-900">
        {title}
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((a) => (
          <ArticleCard key={a.href} article={a} />
        ))}
      </div>
    </section>
  );
}
