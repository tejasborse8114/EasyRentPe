"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import type { ProblemSolution } from "@/lib/content";

export default function ComparisonTable({ rows }: { rows: ProblemSolution[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-card"
    >
      <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 bg-primary/10">
        <p className="px-5 py-4 text-sm font-semibold text-ink-muted">The old way</p>
        <p className="px-5 py-4 text-sm font-semibold text-primary">With Easy RentPe</p>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div key={row.problem} className="grid grid-cols-2 divide-x divide-white/10">
            <div className="flex items-start gap-2 px-5 py-4">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
              <p className="text-sm text-ink-muted">{row.problem}</p>
            </div>
            <div className="flex items-start gap-2 px-5 py-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{row.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
