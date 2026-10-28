"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref?: string;
};

export default function CTASection({
  heading,
  subheading,
  ctaLabel,
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/80 via-indigo-950 to-[#07090E] border border-blue-500/30 px-6 py-14 text-center shadow-glow sm:px-12"
        >
          <div className="glow-orb -left-16 -top-16 h-56 w-56 bg-accent/25" aria-hidden="true" />
          <div className="glow-orb -bottom-16 -right-16 h-56 w-56 bg-primary/25 animate-float-delayed" aria-hidden="true" />
          <h2 className="relative text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="relative mx-auto mt-3 max-w-xl text-slate-300">{subheading}</p>
          )}
          <div className="relative mt-8">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
