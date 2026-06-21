import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import type { Author } from "@/lib/content";
import { formatDateFr } from "@/lib/utils";

/** Encadré auteur E-E-A-T : nom, rôle, mini-bio + dates de publication/mise à jour. */
export function AuthorBox({
  author,
  datePublished,
  dateModified,
}: {
  author: Author;
  datePublished: string;
  dateModified: string;
}) {
  const initials = author.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-start">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-night-grad font-display text-lg font-semibold text-white">
        {initials}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <Link
            href={`/auteurs/${author.slug}`}
            className="font-semibold text-night-900 transition-colors hover:text-emerald-deep"
          >
            {author.name}
          </Link>
          <BadgeCheck className="h-4 w-4 text-teal-pp" aria-label="Auteur vérifié" />
        </div>
        <p className="text-sm font-medium text-emerald-deep">{author.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-ink">{author.bio}</p>
        <p className="mt-3 text-xs text-muted-ink">
          Publié le {formatDateFr(datePublished)} · Mis à jour le {formatDateFr(dateModified)}
        </p>
      </div>
    </div>
  );
}
