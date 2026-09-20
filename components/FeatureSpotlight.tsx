"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Check, ArrowRight } from "lucide-react";

type FeatureSpotlightProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
};

export default function FeatureSpotlight({
  eyebrow,
  title,
  description,
  bullets,
  visual,
  reverse = false,
}: FeatureSpotlightProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={reverse ? "lg:order-2" : undefined}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{title}</h3>
        <p className="mt-4 text-ink-muted">{description}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-ink">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-secondary mt-8">
          Book a Free Demo
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={reverse ? "lg:order-1" : undefined}
      >
        {visual}
      </motion.div>
    </div>
  );
}
