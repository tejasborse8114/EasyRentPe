"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type CTA = {
  label: string;
  href: string;
};

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  visual?: ReactNode;
  belowCta?: ReactNode;
};

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  visual,
  belowCta,
}: HeroProps) {
  return (
    <section className="section relative overflow-hidden bg-hero-mesh">
      <div className="glow-orb -left-20 -top-20 h-72 w-72 bg-primary/20" aria-hidden="true" />
      <div className="glow-orb -right-24 top-10 h-80 w-80 bg-accent/20" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="gradient-text mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{subheadline}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {belowCta && <div className="mt-6">{belowCta}</div>}
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="glow-orb inset-x-8 inset-y-6 bg-primary/10" aria-hidden="true" />
            <div className="relative">{visual}</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
