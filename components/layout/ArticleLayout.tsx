import type { ReactNode } from "react";
import Image from "next/image";
import { Clock, RefreshCw } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Crumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import type { TocItem } from "@/components/ui/TableOfContents";
import { AuthorBox } from "@/components/ui/AuthorBox";
import { Badge } from "@/components/ui/Badge";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import type { Author } from "@/lib/content";
import { formatDateFr } from "@/lib/utils";

type ArticleLayoutProps = {
  crumbs: Crumb[];
  kicker: string;
  title: string;
  intro: string;
  author: Author;
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  toc: TocItem[];
  /** Image de couverture (ex. /covers/slug.webp), affichée + utilisée en OG/schema. */
  image?: string;
  children: ReactNode;
};

/**
 * Gabarit de page éditoriale : en-tête E-E-A-T, sommaire ancré en sidebar,
 * corps en colonne lisible (mesure ~70 caractères) et encadré auteur en pied.
 */
export function ArticleLayout(props: ArticleLayoutProps) {
  const { crumbs, kicker, title, intro, author, datePublished, dateModified, readMinutes, toc, image, children } = props;
  // Couverture : prop explicite, sinon dérivée du slug (dernier fil d'Ariane) → /covers/{slug}.webp
  const slug = crumbs[crumbs.length - 1]?.href.split("/").filter(Boolean).pop();
  const cover = image ?? (slug ? `/covers/${slug}.webp` : undefined);

  return (
    <article className="relative">
      <ReadingProgress />
      {/* Header band */}
      <div className="relative overflow-hidden border-b border-line bg-surface">
        <div
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(94,234,212,0.35), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">
          <Breadcrumb crumbs={crumbs} />
          <div className="mt-6">
            <Badge tone="emerald">{kicker}</Badge>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-night-900 sm:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-ink">{intro}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-ink">
            <span className="font-medium text-night-800">Par {author.name}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" /> {readMinutes} min de lecture
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RefreshCw className="h-4 w-4" aria-hidden="true" /> Mis à jour le {formatDateFr(dateModified)}
            </span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {cover && (
        <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
          <Image
            src={cover}
            alt={`Illustration : ${title}`}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="aspect-[1200/630] w-full rounded-2xl border border-line object-cover shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
          />
        </div>
      )}

      {/* Body */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="prose-pp min-w-0 max-w-3xl space-y-6">
            {children}
            <div className="!mt-12">
              <AuthorBox author={author} datePublished={datePublished} dateModified={dateModified} />
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={toc} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
