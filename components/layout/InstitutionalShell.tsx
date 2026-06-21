import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Crumb } from "@/components/ui/Breadcrumb";

/** Gabarit léger partagé par les pages institutionnelles (prose lisible centrée). */
export function InstitutionalShell({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <Breadcrumb crumbs={crumbs} />
      <h1 className="mt-6 font-display text-3xl font-semibold text-night-900 sm:text-4xl">{title}</h1>
      <p className="mt-3 text-lg text-muted-ink">{intro}</p>
      <div className="prose-pp mt-8 space-y-5">{children}</div>
    </div>
  );
}
