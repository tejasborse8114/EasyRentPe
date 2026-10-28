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
    <section className="section relative overflow-hidden bg-white">
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859] mb-3">
            {eyebrow}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545]">{headline}</h1>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">{body}</p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {bullets.map((bullet, index) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.32) }}
              className="card flex items-center gap-3 border border-slate-200/90 bg-white shadow-sm hover:border-slate-300 p-4 rounded-xl"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E6F7F0] text-[#00A859]">
                <Check className="h-4 w-4 shrink-0 font-bold" aria-hidden="true" />
              </div>
              <span className="text-sm font-bold text-[#0B2545]">{bullet}</span>
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
