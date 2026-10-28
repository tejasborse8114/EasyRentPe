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
          className="card flex h-full flex-col items-center text-center border-white/10 bg-surface-elevated/80 backdrop-blur-md hover:border-accent/50 hover:shadow-glow transition-all"
        >
          <div
            style={{ transform: "translateZ(30px)" }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 via-accent/10 to-transparent border border-accent/30 shadow-md text-[#10B981]"
          >
            {icon}
          </div>
          <h3
            style={{ transform: "translateZ(20px)" }}
            className="mt-4 text-sm font-bold text-white"
          >
            {title}
          </h3>
          <p
            style={{ transform: "translateZ(12px)" }}
            className="mt-2 text-xs text-slate-400 leading-relaxed"
          >
            {description}
          </p>
        </div>
      </ThreeDTiltCard>
    </motion.div>
  );
}
