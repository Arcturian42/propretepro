import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "emerald" | "teal" | "cyan" | "night" | "amber" | "neutral";

const tones: Record<Tone, string> = {
  emerald: "bg-emerald-pp/10 text-emerald-deep border-emerald-pp/20",
  teal: "bg-teal-pp/10 text-emerald-deep border-teal-pp/25",
  cyan: "bg-cyan-pp/10 text-night-700 border-cyan-pp/25",
  night: "bg-night-900/5 text-night-800 border-night-900/10",
  amber: "bg-amber-400/15 text-amber-700 border-amber-500/25",
  neutral: "bg-surface-2 text-muted-ink border-line",
};

export function Badge({
  children,
  tone = "emerald",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
