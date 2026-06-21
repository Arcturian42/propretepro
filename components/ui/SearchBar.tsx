"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Barre de recherche avec micro-interaction au focus.
 * `size="hero"` pour la version centrale de la home.
 */
export function SearchBar({
  size = "compact",
  className,
}: {
  size?: "compact" | "hero";
  className?: string;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    if (q) router.push(`/recherche?q=${encodeURIComponent(q)}`);
  }

  const hero = size === "hero";

  return (
    <form
      role="search"
      onSubmit={submit}
      className={cn(
        "group relative flex items-center transition-all duration-300",
        hero ? "w-full" : "w-full max-w-xs",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full items-center rounded-full border bg-white/90 transition-all duration-300",
          hero ? "h-14 pl-5 pr-2 shadow-[0_12px_40px_rgba(15,23,42,0.10)]" : "h-10 pl-4 pr-1.5",
          focused ? "border-teal-pp ring-4 ring-teal-pp/15" : "border-line",
        )}
      >
        <Search
          className={cn("shrink-0 text-muted-ink", hero ? "h-5 w-5" : "h-4 w-4")}
          aria-hidden="true"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={hero ? "Grille de salaire, convention IDCC 3043, tarif au m²…" : "Rechercher…"}
          aria-label="Rechercher sur PropretéPro"
          className={cn(
            "w-full border-0 bg-transparent text-night-900 placeholder:text-muted-ink/70 focus:outline-none",
            hero ? "px-4 text-base" : "px-2.5 text-sm",
          )}
        />
        {hero && (
          <button
            type="submit"
            className="btn-primary inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
          >
            Rechercher
          </button>
        )}
      </div>
    </form>
  );
}
