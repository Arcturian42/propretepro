"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type FaqItem = { question: string; answer: string };

/** FAQ accordéon optimisée IA (le Schema.org FAQPage est injecté séparément). */
export function FAQSection({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
      <div className="mb-6 flex items-center gap-2">
        <HelpCircle className="h-5 w-5 text-teal-pp" aria-hidden="true" />
        <h2 id="faq-title" className="font-display text-2xl font-semibold text-night-900">
          {title}
        </h2>
      </div>
      <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {items.map((it, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
              >
                <span className="font-medium text-night-900">{it.question}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-night-50 text-night-700">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-label={it.question}
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-night-700">{it.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
