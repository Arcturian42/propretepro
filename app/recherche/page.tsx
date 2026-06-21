import Link from "next/link";
import { Search } from "lucide-react";
import { ARTICLES } from "@/lib/content";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Recherche",
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.siloLabel.toLowerCase().includes(query),
      )
    : [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Badge tone="teal">Recherche</Badge>
      <h1 className="section-heading mt-3 text-3xl">
        {query ? `Résultats pour « ${q} »` : "Rechercher sur PropretéPro"}
      </h1>
      <div className="mt-6 max-w-xl">
        <SearchBar size="hero" />
      </div>

      {query && (
        <p className="mt-6 text-sm text-muted-ink">
          {results.length} résultat{results.length > 1 ? "s" : ""} trouvé
          {results.length > 1 ? "s" : ""}.
        </p>
      )}

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((a) => (
            <ArticleCard key={a.href} article={a} />
          ))}
        </div>
      ) : (
        query && (
          <div className="mt-10 rounded-2xl border border-line bg-white p-10 text-center">
            <Search className="mx-auto h-8 w-8 text-muted-ink" />
            <p className="mt-3 font-medium text-night-900">Aucun résultat pour cette recherche</p>
            <p className="mt-1 text-sm text-muted-ink">
              Essayez « grille salaire », « convention IDCC 3043 », « prix au m² » ou{" "}
              <Link href="/" className="text-emerald-deep hover:underline">
                revenez à l&apos;accueil
              </Link>
              .
            </p>
          </div>
        )
      )}
    </div>
  );
}
