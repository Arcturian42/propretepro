import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Mail,
  FileText,
} from "lucide-react";
import { LiquidGlassHero } from "@/components/sections/LiquidGlassHero";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PILLARS } from "@/lib/site";
import { ARTICLES, POPULAR_RESOURCES } from "@/lib/content";

const WHY = [
  {
    icon: Scale,
    title: "Neutre et indépendant",
    text: "Une information sans parti pris commercial : nos contenus servent votre décision, pas un annonceur.",
  },
  {
    icon: ShieldCheck,
    title: "Sourcé et à jour",
    text: "Chaque page réglementaire cite ses sources officielles et affiche sa date de mise à jour.",
  },
  {
    icon: Sparkles,
    title: "Actionnable",
    text: "Des repères chiffrés, des tableaux clairs et des fourchettes de prix pour décider et fixer vos prix vite.",
  },
  {
    icon: TrendingUp,
    title: "Pensé pour les pros",
    text: "Dirigeants, exploitation, achats, syndics : un contenu de décision, pas du remplissage.",
  },
];

export default function HomePage() {
  const urgent = ARTICLES.filter((a) => a.urgent);
  const latest = [...ARTICLES]
    .sort((a, b) => +new Date(b.dateModified) - +new Date(a.dateModified))
    .slice(0, 6);

  return (
    <>
      <LiquidGlassHero />

      {/* Pillars / bento */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge tone="teal">Les grands piliers</Badge>
          <h2 className="section-heading mt-4 text-3xl sm:text-4xl">
            Tout le savoir-faire propreté, organisé en silos
          </h2>
          <p className="mt-3 text-muted-ink">
            Deux univers experts pour trouver, comprendre et appliquer la bonne information au bon
            moment.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <StaggerItem key={p.href} className="h-full">
              <CategoryCard
                label={p.label}
                href={p.href}
                icon={p.icon}
                summary={p.summary}
                accent={p.accent}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Urgent / à la une */}
      {urgent.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge tone="amber">À la une · échéances</Badge>
              <h2 className="section-heading mt-3 text-2xl sm:text-3xl">Ce qu&apos;il ne faut pas rater</h2>
            </div>
            <Link href="/reglementation" className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-deep hover:underline">
              Toute la réglementation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {urgent.map((a) => (
              <StaggerItem key={a.href} className="h-full">
                <ArticleCard article={a} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      )}

      {/* Dual CTA: lead magnet + calculator */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="gradient-border h-full p-8">
              <div className="flex items-center gap-2">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-pp/10 text-emerald-deep">
                  <FileText className="h-5 w-5" />
                </span>
                <Badge tone="emerald">Guide pilier</Badge>
              </div>
              <h3 className="section-heading mt-4 text-2xl">Grille de salaire 2026 (IDCC 3043)</h3>
              <p className="mt-2 text-muted-ink">
                Tous les taux horaires minima par échelon et coefficient, à jour 2026. La référence
                pour fiabiliser votre paie et vos coûts.
              </p>
              <Link
                href="/reglementation/grille-salaire-proprete-2026"
                className="btn-primary mt-6 inline-flex h-11 items-center gap-2 rounded-full px-5 font-medium text-white transition-transform hover:scale-[1.02]"
              >
                <ArrowRight className="h-4 w-4" /> Consulter la grille 2026
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div
              className="relative h-full overflow-hidden rounded-[var(--radius-card)] p-8 text-white"
              style={{ background: "var(--gradient-night)" }}
            >
              <div
                className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(49,154,255,0.6), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-mint-pp">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-mint-pp">
                    Newsletter
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  La veille propreté, chaque semaine
                </h3>
                <p className="mt-2 text-night-100">
                  Réglementation, grilles de salaire, échéances et bonnes pratiques de gestion :
                  l&apos;essentiel pour piloter, sans le bruit.
                </p>
                <Link
                  href="#newsletter"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-medium text-night-900 transition-transform hover:scale-[1.02]"
                >
                  S&apos;abonner gratuitement <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Latest guides */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="cyan">Derniers guides</Badge>
            <h2 className="section-heading mt-3 text-2xl sm:text-3xl">Les publications récentes</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-deep hover:underline">
            Voir le blog <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => (
            <StaggerItem key={a.href} className="h-full">
              <ArticleCard article={a} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Why PropretéPro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-line bg-white p-8 sm:p-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="emerald">Pourquoi PropretéPro</Badge>
            <h2 className="section-heading mt-4 text-3xl sm:text-4xl">
              La référence fiable du secteur, sans le bruit
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.title}>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-night-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-ink">{w.text}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Popular resources */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <Badge tone="teal">Ressources populaires</Badge>
          <h2 className="section-heading mt-3 text-2xl sm:text-3xl">Les plus consultées cette semaine</h2>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_RESOURCES.map((r) => (
            <StaggerItem key={r.href}>
              <Link
                href={r.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white px-5 py-4 transition-all duration-200 hover:border-teal-pp/40 hover:shadow-md"
              >
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-deep">
                    {r.kind}
                  </span>
                  <span className="mt-0.5 block truncate font-medium text-night-900">{r.label}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-ink transition-transform group-hover:translate-x-1 group-hover:text-emerald-deep" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <NewsletterCTA />
      <div className="h-16" />
    </>
  );
}
