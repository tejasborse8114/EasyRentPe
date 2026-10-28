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
        className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200/80 overflow-hidden rounded-3xl border border-slate-200 shadow-card"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ transform: "translateZ(20px)" }}
            className="bg-white px-3 py-5 sm:px-6 sm:py-6 text-center hover:bg-slate-50/60 transition-colors"
          >
            <p className="gradient-text text-2xl sm:text-3xl font-extrabold tracking-tight">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </ThreeDTiltCard>
  );
}
