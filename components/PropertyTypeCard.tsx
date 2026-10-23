"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.32) }}
      className="card flex h-full flex-col items-center text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
        {icon}
      </div>
      <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-xs text-ink-muted">{description}</p>
    </motion.div>
  );
}
