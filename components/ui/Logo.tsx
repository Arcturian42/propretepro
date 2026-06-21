import Link from "next/link";
import { SITE } from "@/lib/site";

/** Logo wordmark PropretéPro — picto sparkle émeraude + nom. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${SITE.name} — accueil`}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-cta shadow-[0_6px_18px_rgba(10,132,255,0.35)] transition-transform duration-300 group-hover:scale-105">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2.5l1.9 5.1 5.1 1.9-5.1 1.9L12 16.5l-1.9-5.1L5 9.5l5.1-1.9L12 2.5z"
            fill="white"
          />
          <circle cx="18.5" cy="17.5" r="2.2" fill="white" opacity="0.85" />
        </svg>
      </span>
      <span
        className={`font-display text-lg font-semibold tracking-tight ${
          light ? "text-white" : "text-night-900"
        }`}
      >
        Propreté<span className="text-emerald-pp">Pro</span>
      </span>
    </Link>
  );
}
