"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Bloc newsletter en glassmorphism sur fond gradient bleu nuit → émeraude. */
export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!EMAIL_RE.test(email.trim())) {
      setError("Merci de saisir une adresse e-mail valide.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "newsletter" }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setError("Une erreur est survenue. Réessayez dans un instant.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="newsletter" className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12"
        style={{ background: "var(--gradient-night)" }}
      >
        <div
          className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 animate-drift rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(49,154,255,0.6), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-mint-pp">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            La veille propreté, une fois par semaine
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
            Gardez une longueur d&apos;avance sur la réglementation
          </h2>
          <p className="mt-3 text-base leading-relaxed text-night-100">
            Grilles de salaire, échéances URSSAF, nouveaux outils et bonnes pratiques :
            l&apos;essentiel pour piloter votre activité de propreté, sans le bruit.
          </p>

          {done ? (
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-pp/20 px-5 py-3 font-medium text-mint-pp">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              Inscription confirmée — à très vite dans votre boîte mail.
            </p>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Votre adresse e-mail professionnelle
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom@entreprise.fr"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "newsletter-error" : undefined}
                className="h-12 flex-1 rounded-full border border-white/20 bg-white/95 px-5 text-night-900 placeholder:text-muted-ink/70 focus:outline-none focus:ring-4 focus:ring-teal-pp/40"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-6 font-medium text-white transition-transform duration-200 hover:scale-[1.03] cursor-pointer disabled:opacity-60"
              >
                {loading ? "Envoi…" : "S'inscrire"}
                {!loading && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
              </button>
            </form>
          )}
          {error && !done && (
            <p id="newsletter-error" role="alert" className="mt-3 text-sm font-medium text-mint-pp">
              {error}
            </p>
          )}
          <p className="mt-4 text-xs text-night-200">
            Gratuit. Désinscription en un clic. Aucune revente de données.
          </p>
        </div>
      </div>
    </section>
  );
}
