"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import ThreeDBackground from "./ThreeDBackground";

type CTA = {
  label: string;
  href: string;
};

type HeroProps = {
  eyebrow?: ReactNode;
  headline: ReactNode;
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} className="section relative overflow-hidden bg-hero-mesh min-h-[85vh] flex items-center">
      {/* Interactive 3D particle constellation canvas */}
      <ThreeDBackground />

      <motion.div
        style={{ y: orbOneY }}
        className="glow-orb -left-20 -top-20 h-72 w-72 bg-primary/20"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orbTwoY }}
        className="glow-orb -right-24 top-10 h-80 w-80 bg-accent/20"
        aria-hidden="true"
      />
      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {eyebrow && (
            <div>
              {typeof eyebrow === "string" ? <p className="eyebrow">{eyebrow}</p> : eyebrow}
            </div>
          )}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted leading-relaxed">{subheadline}</p>

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

          {belowCta && <div className="mt-8">{belowCta}</div>}
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative will-change-transform"
          >
            <div className="relative">{visual}</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
