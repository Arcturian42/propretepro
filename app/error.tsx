"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Error boundary de segment (App Router). S'affiche si une page lève une erreur
 * au rendu. Doit être un Client Component et exposer `reset` pour réessayer.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook de journalisation (Sentry, etc.) à brancher ici si besoin.
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span className="font-mono text-sm font-semibold uppercase tracking-widest text-emerald-deep">
        Une erreur est survenue
      </span>
      <h1 className="section-heading mt-4 text-3xl sm:text-4xl">
        Quelque chose s&apos;est mal passé
      </h1>
      <p className="mt-4 max-w-xl text-muted-ink">
        Un incident technique a interrompu l&apos;affichage de cette page. Vous pouvez réessayer ou
        revenir à l&apos;accueil.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-night-900 px-5 font-medium text-white transition-transform hover:scale-[1.02] cursor-pointer"
        >
          Réessayer
        </button>
        <Button href="/" variant="secondary">
          Retour à l&apos;accueil
        </Button>
      </div>
    </section>
  );
}
