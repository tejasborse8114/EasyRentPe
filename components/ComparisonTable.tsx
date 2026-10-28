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
      className="overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/90 shadow-2xl"
    >
      <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 bg-white/5">
        <p className="px-3.5 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-400">The old way</p>
        <p className="px-3.5 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm font-bold text-[#3B82F6]">With Easy RentPe</p>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div key={row.problem} className="grid grid-cols-2 divide-x divide-white/10 hover:bg-white/[0.02] transition-colors">
            <div className="flex items-start gap-1.5 sm:gap-2 px-3 py-3 sm:px-5 sm:py-4">
              <X className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{row.problem}</p>
            </div>
            <div className="flex items-start gap-1.5 sm:gap-2 px-3 py-3 sm:px-5 sm:py-4">
              <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-emerald-400" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">{row.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
