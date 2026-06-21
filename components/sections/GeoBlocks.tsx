import type { ReactNode } from "react";
import { Sparkles, BookOpen, ListChecks, Info } from "lucide-react";

/**
 * Blocs extractibles optimisés GEO/AEO.
 * Conçus pour être facilement repris par ChatGPT, Perplexity, Gemini et Google AI Overview :
 * réponse courte, structure claire, sémantique forte.
 */

/** Réponse directe dans les 100 premiers mots — la première chose lue par un LLM. */
export function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="geo-answer rounded-2xl border-l-4 border-emerald-pp bg-emerald-pp/5 p-5">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-deep">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        En bref
      </p>
      <div className="mt-2 text-[1.05rem] leading-relaxed text-night-900">{children}</div>
    </div>
  );
}

/** Bloc « À retenir » : liste de points clés extractibles. */
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <p className="flex items-center gap-2 font-display text-lg font-semibold text-night-900">
        <ListChecks className="h-5 w-5 text-teal-pp" aria-hidden="true" />
        À retenir
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-night-800">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-pp" aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Bloc « Définition » : terme + explication simple. */
export function DefinitionBox({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-night-900 p-6 text-night-100">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-mint-pp">
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        Définition
      </p>
      <p className="mt-2 font-display text-lg font-semibold text-white">{term}</p>
      <div className="mt-2 text-sm leading-relaxed text-night-100">{children}</div>
    </div>
  );
}

/** Citation éditoriale mise en avant (pull-quote) pour aérer les contenus longs. */
export function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <figure className="not-prose my-8 border-l-4 border-emerald-pp pl-6">
      <blockquote className="font-display text-xl font-medium leading-snug text-night-900 sm:text-2xl">
        « {children} »
      </blockquote>
      {cite && <figcaption className="mt-2 text-sm text-muted-ink">— {cite}</figcaption>}
    </figure>
  );
}

/** Encadré d'information neutre. */
export function InfoCallout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-cyan-pp/25 bg-cyan-pp/5 p-5">
      <p className="flex items-center gap-2 text-sm font-semibold text-night-800">
        <Info className="h-4 w-4 text-cyan-pp" aria-hidden="true" />
        {title ?? "Bon à savoir"}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-night-700">{children}</div>
    </div>
  );
}

/** Tableau factuel responsive avec en-tête lisible. */
export function FactTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          {caption && (
            <caption className="bg-surface-2 px-4 py-3 text-left font-medium text-night-800">
              {caption}
            </caption>
          )}
          <thead>
            <tr className="bg-night-900 text-left text-white">
              {headers.map((h) => (
                <th key={h} scope="col" className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-line transition-colors hover:bg-surface-2">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 ${j === 0 ? "font-medium text-night-900" : "text-night-700"} ${
                      typeof cell === "number" ? "tabular-nums" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
