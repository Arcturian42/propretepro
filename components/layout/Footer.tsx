import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { SITE, FOOTER_NAV } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-night-900 text-night-100">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(49,154,255,0.5), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-night-200">
              {SITE.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Nous écrire"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-night-100 transition-colors hover:border-teal-pp hover:text-teal-pp"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/propretepro"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-night-100 transition-colors hover:border-teal-pp hover:text-teal-pp"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/propretepro"
                aria-label="Twitter / X"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-night-100 transition-colors hover:border-teal-pp hover:text-teal-pp"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-night-200 transition-colors hover:text-teal-pp"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-night-200 sm:flex-row sm:items-center">
          <p>
            © {SITE.foundingYear} {SITE.name}. {SITE.tagline}.
          </p>
          <nav aria-label="Liens légaux" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/a-propos" className="hover:text-teal-pp">À propos</Link>
            <Link href="/auteurs" className="hover:text-teal-pp">Auteurs</Link>
            <Link href="/mentions-legales" className="hover:text-teal-pp">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-teal-pp">Confidentialité</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
