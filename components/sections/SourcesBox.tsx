import { ExternalLink } from "lucide-react";

export type Source = {
  label: string;
  href: string;
  publisher: string;
};

/**
 * Bloc « Sources officielles » : liens sortants vers des sources faisant autorité.
 * Renforce la confiance (E-E-A-T) et la citabilité GEO — les moteurs IA privilégient
 * les contenus qui référencent des sources externes vérifiables.
 */
export function SourcesBox({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <aside className="not-prose my-8 rounded-2xl border border-line bg-surface-2 p-6">
      <h2 className="font-display text-lg font-semibold text-night-900">Sources officielles</h2>
      <p className="mt-1 text-sm text-muted-ink">
        Vérifiez toujours le texte applicable à la date de paie auprès des sources de référence.
      </p>
      <ul className="mt-4 space-y-2">
        {sources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group inline-flex items-baseline gap-1.5 font-medium text-emerald-deep hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5 shrink-0 translate-y-0.5" aria-hidden="true" />
              <span>
                {s.label}
                <span className="ml-1 text-xs font-normal text-muted-ink">— {s.publisher}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
