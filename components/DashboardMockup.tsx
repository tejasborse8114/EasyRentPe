"use client";

import { motion } from "framer-motion";
import { BedDouble, Wallet, Bell, Smartphone } from "lucide-react";

// Placeholder illustration standing in for real dashboard + tenant app screenshots.
export default function DashboardMockup() {
  return (
    <div className="relative mx-auto flex max-w-md items-center justify-center gap-4">
      <div
        className="glow-orb -inset-6 animate-pulse-glow bg-gradient-to-br from-primary/20 via-accent/10 to-transparent"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full rounded-2xl border border-white/10 bg-surface-elevated p-5 shadow-glow-primary transition-transform duration-300 hover:scale-[1.02]"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Owner Dashboard
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-xl bg-primary/10 p-3"
          >
            <BedDouble className="h-5 w-5 text-primary" aria-hidden="true" />
            <p className="mt-2 text-lg font-bold text-primary">86%</p>
            <p className="text-xs text-ink-muted">Occupancy</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-xl bg-accent/10 p-3"
          >
            <Wallet className="h-5 w-5 text-accent" aria-hidden="true" />
            <p className="mt-2 text-lg font-bold text-primary">₹4.2L</p>
            <p className="text-xs text-ink-muted">Rent collected</p>
          </motion.div>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
          <div className="h-2 w-3/4 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative hidden w-40 shrink-0 animate-float-delayed rounded-2xl border border-white/10 bg-gradient-to-br from-primary to-primary-dark p-4 text-white shadow-glow transition-transform duration-300 hover:scale-[1.03] sm:block"
      >
        <Smartphone className="h-5 w-5 text-white/80" aria-hidden="true" />
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/70">
          Tenant App
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-3 flex items-center gap-2 rounded-lg bg-white/10 p-2"
        >
          <Bell className="h-4 w-4 text-accent" aria-hidden="true" />
          <p className="text-[11px] leading-tight">Rent due in 3 days</p>
        </motion.div>
        <div className="mt-2 h-16 rounded-lg bg-white/10" />
      </motion.div>
    </div>
  );
}

