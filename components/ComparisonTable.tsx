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
      className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-card"
    >
      <div className="grid grid-cols-2 divide-x divide-slate-200 border-b border-slate-200 bg-slate-50/80">
        <p className="px-3.5 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-500">The old way</p>
        <p className="px-3.5 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm font-bold text-primary">With Easy RentPe</p>
      </div>
      <div className="divide-y divide-slate-100">
        {rows.map((row) => (
          <div key={row.problem} className="grid grid-cols-2 divide-x divide-slate-100 hover:bg-slate-50/50 transition-colors">
            <div className="flex items-start gap-1.5 sm:gap-2 px-3 py-3 sm:px-5 sm:py-4">
              <X className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-slate-400" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{row.problem}</p>
            </div>
            <div className="flex items-start gap-1.5 sm:gap-2 px-3 py-3 sm:px-5 sm:py-4">
              <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">{row.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
