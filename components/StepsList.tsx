"use client";

import { motion } from "framer-motion";
import type { Step } from "@/lib/content";

export default function StepsList({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.03, y: -4 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32) }}
          className="card relative h-full border border-slate-200 bg-white shadow-card hover:shadow-card-hover"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md shadow-primary/20">
            {index + 1}
          </span>
          <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}
