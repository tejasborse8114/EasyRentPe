"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/lib/content";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface-elevated shadow-card sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="px-6 py-6 text-center"
        >
          <p className="gradient-text text-2xl font-bold">
            <AnimatedCounter value={stat.value} />
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-muted">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
