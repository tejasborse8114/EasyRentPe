"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/content";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface-elevated">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-base font-semibold text-ink">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? "px-5 pb-5" : "hidden"}
            >
              <p className="text-sm leading-relaxed text-ink-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
