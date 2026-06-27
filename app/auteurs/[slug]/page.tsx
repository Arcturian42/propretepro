import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { AUTHORS, ARTICLES } from "@/lib/content";

/** Auteurs disposant d'au moins un article publié. */
function publishedAuthorSlugs(): string[] {
  const used = new Set(ARTICLES.map((a) => a.authorSlug));
  return Object.keys(AUTHORS).filter((slug) => used.has(slug));
}

export function generateStaticParams() {
  return publishedAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) return {};
  return buildMetadata({
    title: `${author.name} — ${author.role}`,
    description: `${author.name}, ${author.role} chez PropretéPro. ${author.bio}`,
    path: `/auteurs/${slug}`,
  });
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author || !publishedAuthorSlugs().includes(slug)) notFound();

  const articles = ARTICLES.filter((a) => a.authorSlug === slug).sort(
    (a, b) => +new Date(b.dateModified) - +new Date(a.dateModified),
  );

  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Auteurs", href: "/auteurs" },
    { name: author.name, href: `/auteurs/${slug}` },
  ];

  const initials = author.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <>
      <SchemaMarkup
        schema={[
          personSchema({
            slug: author.slug,
            name: author.name,
            jobTitle: author.role,
            description: author.bio,
            knowsAbout: author.expertise,
            image: author.avatar,
            sameAs: author.sameAs,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <div className="relative overflow-hidden border-b border-line bg-surface">
        <div
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(94,234,212,0.35), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">
          <Breadcrumb crumbs={crumbs} />
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={`Photo de ${author.name}, ${author.role}`}
                width={80}
                height={80}
                priority
                className="h-20 w-20 shrink-0 rounded-2xl object-cover"
              />
            ) : (
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-night-grad font-display text-2xl font-semibold text-white">
                {initials}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-3xl font-semibold text-night-900">{author.name}</h1>
                <BadgeCheck className="h-5 w-5 text-teal-pp" aria-label="Auteur vérifié" />
              </div>
              <p className="mt-1 font-medium text-emerald-deep">{author.role}</p>
            </div>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-muted-ink">{author.bio}</p>
          {author.expertise && (
            <div className="mt-5 flex flex-wrap gap-2">
              {author.expertise.map((topic) => (
                <Badge key={topic} tone="neutral">
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="section-heading text-2xl sm:text-3xl">
          {articles.length} article{articles.length > 1 ? "s" : ""} de {author.name}
        </h2>
        <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
