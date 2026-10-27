"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/lib/content";
import AnimatedCounter from "@/components/AnimatedCounter";
import ThreeDTiltCard from "@/components/ThreeDTiltCard";

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <ThreeDTiltCard maxTilt={6} scale={1.01} className="w-full">
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="grid grid-cols-2 divide-y divide-white/10 rounded-3xl border border-white/15 bg-surface-elevated/85 backdrop-blur-xl shadow-glow-primary sm:grid-cols-4 sm:divide-y-0 sm:divide-x"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ transform: "translateZ(20px)" }}
            className="px-6 py-6 text-center"
          >
            <p className="gradient-text text-3xl font-extrabold tracking-tight">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </ThreeDTiltCard>
  );
}
