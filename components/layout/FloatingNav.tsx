"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MAIN_NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = MAIN_NAV;

/**
 * Navigation unique du site — pilule "Strong Liquid Glass" flottante (fixed),
 * identique sur TOUTES les pages. État actif selon la route, ouverture mobile.
 */
export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-[22px] z-50 flex justify-center px-4 sm:top-[30px]">
      <nav
        aria-label="Navigation principale"
        className={cn(
          "glass-nav pointer-events-auto flex w-fit items-center gap-2 rounded-[16px] py-2 pl-3 pr-2 transition-shadow duration-300 sm:gap-3 sm:pl-5",
          scrolled && "shadow-[0_24px_70px_rgba(15,23,42,0.14)]",
        )}
      >
        <Logo />

        <div className="mx-1 hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-[10px] px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-[#0084FF]/10 text-[#0a5cb0]"
                    : "text-night-800 hover:bg-white/40 hover:text-night-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#newsletter"
          className="glass-cta cta-sheen hidden h-10 items-center gap-2 rounded-[12px] px-4 text-sm font-medium text-white sm:inline-flex"
        >
          Recevoir la veille
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white">
            <ArrowUpRight className="h-3 w-3 text-[#0084FF]" aria-hidden="true" />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-[12px] text-night-800 transition-colors hover:bg-white/40 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-nav pointer-events-auto absolute top-[62px] w-[min(92vw,360px)] rounded-[16px] p-2 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "block rounded-[10px] px-4 py-3 text-sm font-medium",
                isActive(item.href) ? "bg-[#0084FF]/10 text-[#0a5cb0]" : "text-night-800 hover:bg-white/40",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            className="glass-cta mt-1 flex h-11 items-center justify-center gap-2 rounded-[12px] px-4 text-sm font-medium text-white"
          >
            Recevoir la veille
          </Link>
        </div>
      )}
    </div>
  );
}
