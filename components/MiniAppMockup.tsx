"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Row = {
  icon: ReactNode;
  label: string;
};

// Generic phone-shaped placeholder used to illustrate a feature without a real app screenshot.
export default function MiniAppMockup({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="relative mx-auto w-full max-w-xs animate-float">
      <div
        className="glow-orb -inset-4 animate-pulse-glow bg-gradient-to-br from-primary/15 via-accent/10 to-transparent"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-2xl border border-white/10 bg-surface-elevated p-5 shadow-glow-primary transition-transform duration-300 hover:scale-[1.02]"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{title}</p>
        <div className="mt-4 space-y-3">
          {rows.map(({ icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 rounded-xl bg-primary/10 p-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                {icon}
              </div>
              <p className="text-sm font-medium text-ink">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


