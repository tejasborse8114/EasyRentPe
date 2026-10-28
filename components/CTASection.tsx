"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StoreBadges from "@/components/StoreBadges";

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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-[#0B2545] px-6 py-14 text-center shadow-xl sm:px-12"
        >
          <h2 className="relative text-2xl font-black text-white sm:text-4xl">{heading}</h2>
          {subheading && (
            <p className="relative mx-auto mt-3 max-w-xl text-slate-200 text-sm sm:text-base">{subheading}</p>
          )}
          <div className="relative mt-8 flex flex-col items-center gap-6">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A859] hover:bg-[#008A48] text-white px-8 py-3.5 text-base font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="flex flex-col items-center gap-2.5 pt-4 border-t border-white/15 max-w-sm w-full">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Or download directly for iOS &amp; Android
              </span>
              <StoreBadges />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
