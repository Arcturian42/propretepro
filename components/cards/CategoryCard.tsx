import Link from "next/link";
import { ArrowRight, ScrollText, Calculator, LayoutGrid, FileText, Gauge, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  ScrollText,
  Calculator,
  LayoutGrid,
  FileText,
  Gauge,
  MapPin,
};

const ACCENTS: Record<string, string> = {
  emerald: "from-emerald-pp/15 to-emerald-pp/0 text-emerald-deep",
  teal: "from-teal-pp/15 to-teal-pp/0 text-emerald-deep",
  cyan: "from-cyan-pp/15 to-cyan-pp/0 text-night-700",
};

type CategoryCardProps = {
  label: string;
  href: string;
  icon: string;
  summary: string;
  accent?: string;
  className?: string;
};

/** Carte de catégorie (silo) pour le bento de la homepage. */
export function CategoryCard(props: CategoryCardProps) {
  const { label, href, icon, summary, accent = "emerald", className } = props;
  const Icon = ICONS[icon] ?? ScrollText;
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-pp/40 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]",
        className,
      )}
    >
      <div
        className={cn(
          "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br",
          ACCENTS[accent] ?? ACCENTS.emerald,
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-night-900">{label}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-ink">{summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-deep">
        Explorer le silo
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
