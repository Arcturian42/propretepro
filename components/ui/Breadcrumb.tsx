import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href: string };

/** Fil d'Ariane visuel (le Schema.org BreadcrumbList est injecté séparément). */
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-ink">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-night-800">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-emerald-deep">
                  {c.name}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-muted-ink/60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
