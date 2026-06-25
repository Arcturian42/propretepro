import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PILLARS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page introuvable (404)",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span className="font-mono text-sm font-semibold uppercase tracking-widest text-emerald-deep">
        Erreur 404
      </span>
      <h1 className="section-heading mt-4 text-3xl sm:text-4xl">
        Cette page n&apos;existe pas (ou plus)
      </h1>
      <p className="mt-4 max-w-xl text-muted-ink">
        Le lien est peut-être obsolète ou mal orthographié. Reprenez le fil par l&apos;un de nos
        grands silos, ou revenez à l&apos;accueil.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/" variant="primary">
          Retour à l&apos;accueil
        </Button>
        <Button href="/blog" variant="secondary">
          Voir tous les guides
        </Button>
      </div>

      <nav className="mt-12 grid w-full gap-3 sm:grid-cols-3" aria-label="Silos principaux">
        {PILLARS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="rounded-2xl border border-line bg-white px-5 py-4 text-left transition-all duration-200 hover:border-teal-pp/40 hover:shadow-md"
          >
            <span className="block font-display font-semibold text-night-900">{p.label}</span>
            <span className="mt-1 block text-sm text-muted-ink">{p.summary}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
