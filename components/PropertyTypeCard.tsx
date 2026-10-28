"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ThreeDTiltCard from "./ThreeDTiltCard";

type PropertyTypeCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
};

export default function PropertyTypeCard({
  icon,
  title,
  description,
  index = 0,
}: PropertyTypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.32) }}
      className="h-full"
    >
      <ThreeDTiltCard maxTilt={14} scale={1.04} className="h-full">
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="card flex h-full flex-col items-center text-center border-slate-200/90 bg-white/95 backdrop-blur-md hover:border-accent/50 hover:shadow-card-hover transition-all"
        >
          <div
            style={{ transform: "translateZ(30px)" }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 via-accent/5 to-transparent border border-accent/20 shadow-sm text-accent"
          >
            {icon}
          </div>
          <h3
            style={{ transform: "translateZ(20px)" }}
            className="mt-4 text-sm font-bold text-ink"
          >
            {title}
          </h3>
          <p
            style={{ transform: "translateZ(12px)" }}
            className="mt-2 text-xs text-ink-muted leading-relaxed"
          >
            {description}
          </p>
        </div>
      </ThreeDTiltCard>
    </motion.div>
  );
}
