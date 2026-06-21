import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { AUTHORS, ARTICLES } from "@/lib/content";

const CRUMBS = [
  { name: "Accueil", href: "/" },
  { name: "Auteurs", href: "/auteurs" },
];

export const metadata: Metadata = buildMetadata({
  title: "Les auteurs de PropretéPro",
  description:
    "Les experts qui rédigent PropretéPro : juriste en droit social et consultant en exploitation et achats de la propreté. Des contenus signés, sourcés et datés.",
  path: "/auteurs",
});

export default function AuthorsIndex() {
  const used = new Set(ARTICLES.map((a) => a.authorSlug));
  const authors = Object.values(AUTHORS).filter((a) => used.has(a.slug));

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema(CRUMBS)} />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb crumbs={CRUMBS} />
        <div className="mt-6 max-w-2xl">
          <Badge tone="emerald">E-E-A-T</Badge>
          <h1 className="mt-4 font-display text-3xl font-semibold text-night-900 sm:text-4xl">
            Les experts derrière PropretéPro
          </h1>
          <p className="mt-3 text-lg text-muted-ink">
            Nos contenus sont signés par des spécialistes du secteur. Chaque article indique son
            auteur, sa date de publication et sa date de mise à jour.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {authors.map((author) => {
            const count = ARTICLES.filter((a) => a.authorSlug === author.slug).length;
            const initials = author.name
              .split(" ")
              .map((p) => p[0])
              .join("");
            return (
              <Link
                key={author.slug}
                href={`/auteurs/${author.slug}`}
                className="group flex gap-4 rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-pp/40 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-night-grad font-display text-xl font-semibold text-white">
                  {initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-display text-lg font-semibold text-night-900">{author.name}</p>
                    <BadgeCheck className="h-4 w-4 text-teal-pp" aria-label="Auteur vérifié" />
                  </div>
                  <p className="text-sm font-medium text-emerald-deep">{author.role}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-ink">{author.bio}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-deep">
                    {count} article{count > 1 ? "s" : ""}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
