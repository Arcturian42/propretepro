"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, ScrollText, Building2, FileCheck, Clock } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";

const FLOATING = [
  { icon: ScrollText, label: "Grille salaire 2026", value: "IDCC 3043", href: "/reglementation/grille-salaire-proprete-2026", pos: "left-0 top-6", delay: 0 },
  { icon: FileCheck, label: "Convention collective", value: "IDCC 3043", href: "/reglementation/convention-collective-proprete-idcc-3043", pos: "right-0 top-0", delay: 0.6 },
  { icon: Building2, label: "Tarif bureaux", value: "dès 0,30 €/m²", href: "/tarifs/nettoyage-bureaux-m2", pos: "left-4 bottom-0", delay: 1.2 },
  { icon: Clock, label: "Tarif horaire", value: "18 à 35 €/h", href: "/tarifs/tarif-horaire-nettoyage", pos: "right-2 bottom-8", delay: 0.9 },
];

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[-10%] h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-[90px] animate-drift-slow"
          style={{ background: "radial-gradient(circle at 50% 40%, rgba(94,234,212,0.30), rgba(34,211,238,0.12) 45%, transparent 70%)" }}
        />
        <div
          className="absolute left-[8%] top-[30%] h-72 w-72 rounded-full opacity-50 blur-3xl animate-drift"
          style={{ background: "radial-gradient(circle, rgba(10,132,255,0.25), transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy — animé en CSS (rendu visible côté serveur, sans dépendre du JS) */}
          <div className="max-w-2xl">
            <span className="rise inline-flex items-center gap-2 rounded-full border border-emerald-pp/20 bg-emerald-pp/5 px-3.5 py-1.5 text-xs font-semibold text-emerald-deep">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-pp" aria-hidden="true" />
              Pour les dirigeants d&apos;entreprises de propreté
            </span>

            <h1
              className="rise mt-5 font-display text-4xl font-semibold leading-[1.08] text-night-900 sm:text-5xl lg:text-[3.4rem]"
              style={{ animationDelay: "0.05s" }}
            >
              Pilotez la rentabilité de votre{" "}
              <span className="text-gradient">entreprise de propreté</span>
            </h1>

            <p
              className="rise mt-5 text-lg leading-relaxed text-muted-ink"
              style={{ animationDelay: "0.12s" }}
            >
              Réglementation et paie (IDCC 3043), tarifs justes et prix du nettoyage : les repères
              chiffrés et sourcés pour décider vite et défendre vos marges.
            </p>

            <div className="rise mt-7" style={{ animationDelay: "0.2s" }}>
              <SearchBar size="hero" />
              <p className="mt-3 text-sm text-muted-ink">
                Populaire :{" "}
                <Link href="/reglementation/grille-salaire-proprete-2026" className="text-emerald-deep hover:underline">
                  grille de salaire 2026
                </Link>
                ,{" "}
                <Link href="/tarifs/nettoyage-bureaux-m2" className="text-emerald-deep hover:underline">
                  prix au m²
                </Link>
                ,{" "}
                <Link href="/reglementation/convention-collective-proprete-idcc-3043" className="text-emerald-deep hover:underline">
                  convention IDCC 3043
                </Link>
              </p>
            </div>

            <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.28s" }}>
              <Link
                href="#newsletter"
                className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-6 font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Recevoir la veille propreté
              </Link>
              <Link
                href="/reglementation/grille-salaire-proprete-2026"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-white px-6 font-medium text-night-900 transition-colors hover:border-teal-pp"
              >
                Voir la grille de salaire 2026
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: floating glass cards */}
          <div className="relative hidden h-[420px] lg:block" aria-hidden="true">
            <div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] opacity-90"
              style={{ background: "var(--gradient-night)", boxShadow: "0 40px 120px rgba(7,28,47,0.35)" }}
            />
            {FLOATING.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + card.delay * 0.3 }}
                  className={`absolute ${card.pos} animate-float`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <Link
                    href={card.href}
                    tabIndex={-1}
                    className="glass pointer-events-auto flex w-52 items-center gap-3 rounded-2xl px-4 py-3.5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cta text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-night-900">{card.label}</span>
                      <span className="block font-mono text-xs text-emerald-deep">{card.value}</span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="rise mt-14 grid grid-cols-2 gap-4 border-t border-line pt-8 sm:grid-cols-4"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { k: "IDCC 3043", v: "réglementation à jour" },
            { k: "Paie & tarifs", v: "expliqués en clair" },
            { k: "Sources citées", v: "et dates de MAJ" },
            { k: "100 % FR", v: "marché propreté" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-2xl font-semibold text-night-900">{s.k}</p>
              <p className="text-sm text-muted-ink">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
