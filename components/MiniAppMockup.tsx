"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ThreeDTiltCard from "./ThreeDTiltCard";

type Row = {
  icon: ReactNode;
  label: string;
};

export default function MiniAppMockup({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="relative mx-auto w-full max-w-xs animate-float">
      <div
        className="glow-orb -inset-4 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent"
        aria-hidden="true"
      />
      <ThreeDTiltCard maxTilt={15} scale={1.03}>
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-card-hover backdrop-blur-xl"
        >
          {/* Mockup screen header pill */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className="flex items-center justify-between border-b border-slate-100 pb-3"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</p>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
          </div>

          <div style={{ transform: "translateZ(30px)" }} className="mt-4 space-y-3">
            {rows.map(({ icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                style={{ transform: `translateZ(${20 + index * 8}px)` }}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md hover:scale-[1.02]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-primary shadow-sm">
                  {icon}
                </div>
                <p className="text-sm font-semibold text-slate-800">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ThreeDTiltCard>
    </div>
  );
}
