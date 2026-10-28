"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

type PersonaPageProps = {
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
};

export default function PersonaHero({
  eyebrow,
  headline,
  body,
  bullets,
  ctaLabel,
}: PersonaPageProps) {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow-orb -left-16 top-0 h-64 w-64 bg-primary/20" aria-hidden="true" />
      <div className="glow-orb -right-16 top-20 h-64 w-64 bg-accent/20" aria-hidden="true" />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="gradient-text mt-3 text-4xl font-bold sm:text-5xl">{headline}</h1>
          <p className="mt-6 text-lg text-slate-300">{body}</p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {bullets.map((bullet, index) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.32) }}
              className="card flex items-center gap-3 border border-white/10 bg-surface-elevated/90 shadow-card hover:border-primary/50 hover:shadow-glow"
            >
              <Check className="h-5 w-5 shrink-0 text-accent font-bold" aria-hidden="true" />
              <span className="text-sm font-semibold text-white">{bullet}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/contact" className="btn-primary">
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
