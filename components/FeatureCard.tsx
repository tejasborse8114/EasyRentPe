"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ThreeDTiltCard from "./ThreeDTiltCard";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
};

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
      className="h-full"
    >
      <ThreeDTiltCard maxTilt={12} scale={1.03} className="h-full">
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="card h-full flex flex-col justify-between border-white/10 bg-surface-elevated/80 backdrop-blur-md hover:border-primary/50 hover:shadow-glow transition-all"
        >
          <div>
            <div
              style={{ transform: "translateZ(32px)" }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent border border-primary/30 shadow-md text-[#3B82F6]"
            >
              {icon}
            </div>
            <h3
              style={{ transform: "translateZ(22px)" }}
              className="mt-4 text-lg font-bold text-white"
            >
              {title}
            </h3>
            <p
              style={{ transform: "translateZ(14px)" }}
              className="mt-2 text-sm text-slate-400 leading-relaxed"
            >
              {description}
            </p>
          </div>
        </div>
      </ThreeDTiltCard>
    </motion.div>
  );
}
