import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { CleaningMachine } from "@/components/sections/CleaningMachine";

/** Cartes « filière » (trust row, verre dépoli). */
const TRUST = [
  "Entreprises de nettoyage",
  "Facility managers",
  "Fournisseurs",
  "Recruteurs",
  "Donneurs d'ordre",
];

/**
 * Hero "High-Fidelity Liquid Glass" — média B2B de la propreté.
 * Fond blanc, glow bleu + mint, double colonne, autolaveuse autoportée réaliste à droite.
 */
export function LiquidGlassHero() {
  return (
    <section className="relative -mt-[84px] overflow-hidden bg-white antialiased">
      {/* Glow dégradé en haut à gauche (bleu + mint, ellipses floutées) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -left-40 -top-40 h-[520px] w-[720px] rounded-full opacity-60 blur-[120px]"
          style={{ background: "radial-gradient(circle, #60B1FF, transparent 70%)" }}
        />
        <div
          className="absolute left-[8%] -top-24 h-[420px] w-[520px] rounded-full opacity-55 blur-[110px]"
          style={{ background: "radial-gradient(circle, #319AFF, transparent 70%)" }}
        />
        <div
          className="absolute left-[24%] top-[6%] h-[320px] w-[420px] rounded-full opacity-45 blur-[110px]"
          style={{ background: "radial-gradient(circle, #B7F8E4, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-12 pt-[120px] sm:px-8 lg:px-12 lg:pb-16 lg:pt-[140px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-4">
          {/* Colonne gauche — contenu */}
          <div className="max-w-[680px]">
            {/* Badge */}
            <div
              className="animate-blur-in inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] px-4 py-2"
              style={{
                background: "rgba(255,255,255,0.45)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                boxShadow: "inset 0px 4px 4px rgba(255,255,255,0.35)",
              }}
            >
              <ShieldCheck className="h-4 w-4 text-[#0084FF]" aria-hidden="true" />
              <span className="text-sm font-medium tracking-[-0.3px] text-night-800">
                Le média métier des entreprises de nettoyage
              </span>
            </div>

            {/* Headline Fustat (blur-in ligne par ligne) + mot en dégradé */}
            <h1 className="font-fustat mt-6 font-bold text-[38px] leading-[1.05] tracking-[-2px] sm:text-[48px] lg:text-[75px]" style={{ color: "#0B1220" }}>
              <span className="animate-blur-in block" style={{ animationDelay: "0.05s" }}>
                Le média des pros
              </span>
              <span className="animate-blur-in block" style={{ animationDelay: "0.15s" }}>
                de la <span className="text-glass-blue">propreté</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="animate-blur-in mt-6 max-w-[620px] text-[18px] leading-[1.55] tracking-[-0.5px]"
              style={{ color: "rgba(15,23,42,0.72)", animationDelay: "0.25s" }}
            >
              PropretéPro est le média des pros de la propreté : actualités, guides réglementaires
              (IDCC 3043), prix du nettoyage et ressources pratiques pour les entreprises de
              nettoyage en France.
            </p>

            {/* CTA */}
            <div className="animate-blur-in mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.32s" }}>
              <Link
                href="/blog"
                className="glass-cta cta-sheen inline-flex h-[56px] items-center gap-3 rounded-[16px] pl-6 pr-3 text-base font-medium text-white"
              >
                Découvrir le média
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
                  <ArrowUpRight className="h-4 w-4 text-[#0084FF]" aria-hidden="true" />
                </span>
              </Link>
              <Link
                href="/reglementation/grille-salaire-proprete-2026"
                className="glass-soft inline-flex h-[56px] items-center rounded-[16px] px-6 text-base font-medium"
                style={{ color: "#0B1220" }}
              >
                Voir les ressources
              </Link>
            </div>
          </div>

          {/* Colonne droite — autolaveuse réaliste */}
          <div className="relative h-[340px] sm:h-[480px] lg:h-[580px] lg:translate-x-6">
            <CleaningMachine />
          </div>
        </div>

        {/* Trust row — cartes verre */}
        <div className="mt-14 lg:mt-20">
          <p className="text-center text-sm font-medium uppercase tracking-[2px] text-night-400">
            Pensé pour structurer la filière propreté
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            {TRUST.map((label) => (
              <div
                key={label}
                className="rounded-[18px] border border-black/[0.06] px-5 py-3.5 text-sm font-medium text-night-800 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                style={{ background: "rgba(255,255,255,0.48)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transition douce bleu → émeraude vers les sections suivantes */}
      <div
        className="pointer-events-none h-24 w-full"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0), #f8fafc 70%)" }}
      />
    </section>
  );
}
