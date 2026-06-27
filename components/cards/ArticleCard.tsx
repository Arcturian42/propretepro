import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/lib/content";
import { AUTHORS } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { formatDateFr } from "@/lib/utils";

/** Carte d'article : montée légère au hover, tag de silo, méta auteur/date. */
const FALLBACK_AUTHOR = { name: "La rédaction PropretéPro" };

export function ArticleCard({ article }: { article: Article }) {
  const author = AUTHORS[article.authorSlug] ?? FALLBACK_AUTHOR;
  const slug = article.href.split("/").filter(Boolean).pop();
  return (
    <Link
      href={article.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-pp/40 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
    >
      {/* Vignette de couverture */}
      <div className="relative aspect-[1200/630] w-full overflow-hidden bg-night-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/covers/${slug}.webp`}
          alt={`Illustration : ${article.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          {article.badge && <Badge tone={article.badge.tone}>{article.badge.label}</Badge>}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge tone="neutral">{article.siloLabel}</Badge>

        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-night-900">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-ink">{article.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-night-800">{author.name}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-ink">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {article.readMinutes} min · {formatDateFr(article.dateModified)}
          </p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-night-50 text-night-700 transition-all duration-300 group-hover:bg-emerald-pp group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
        </div>
      </div>
    </Link>
  );
}
