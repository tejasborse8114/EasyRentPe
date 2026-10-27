"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import {
  BedDouble,
  Wallet,
  Smartphone,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Physics spring for 3D stage rotation
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(12, springConfig);
  const rotateY = useSpring(-14, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;

      // Base isometric tilt is rotateX: 12, rotateY: -14
      rotateX.set(12 - yPct * 20);
      rotateY.set(-14 + xPct * 24);
    },
    [rotateX, rotateY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    scale.set(1.03);
  }, [scale]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(12);
    rotateY.set(-14);
    scale.set(1);
  }, [rotateX, rotateY, scale]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-lg cursor-pointer select-none py-6 [perspective:1400px]"
    >
      {/* Background glow orb that responds to hover */}
      <div
        className={`glow-orb -inset-10 transition-opacity duration-700 bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/10 ${
          isHovered ? "opacity-90 scale-105" : "opacity-60"
        }`}
        aria-hidden="true"
      />

      {/* 3D Isometric Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative transition-shadow duration-500 will-change-transform"
      >
        {/* Layer 0: Base Glass Owner Dashboard Window (translateZ: 0px) */}
        <div
          style={{ transform: "translateZ(0px)" }}
          className="relative rounded-3xl border border-white/15 bg-surface-elevated/90 p-6 shadow-2xl backdrop-blur-xl transition-colors duration-300 hover:border-white/25"
        >
          {/* Window Top Bar with macOS-style dots and Property Status */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm" />
              <span className="ml-2 text-xs font-semibold text-ink-muted">
                EasyRentPe Cloud OS
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live Sync
            </div>
          </div>

          {/* Quick Header */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted">
                Property Overview
              </p>
              <h4 className="text-base font-bold text-ink">Elite Co-Living &amp; Hostel</h4>
            </div>
            <span className="text-xs font-medium text-accent">92 Beds Total</span>
          </div>

          {/* Layer 1: Elevated 3D Metric Cards (translateZ: 35px) */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="mt-5 grid grid-cols-2 gap-3.5"
          >
            {/* Occupancy Card */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <BedDouble className="h-4 w-4" />
                </div>
                <span className="flex items-center text-[10px] font-semibold text-emerald-400">
                  <TrendingUp className="mr-0.5 h-3 w-3" /> +8%
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-ink">88%</p>
              <p className="text-xs text-ink-muted">Occupancy (81/92 Beds)</p>
            </div>

            {/* Rent Collected Card */}
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/15 to-accent/5 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <Wallet className="h-4 w-4" />
                </div>
                <span className="flex items-center text-[10px] font-semibold text-emerald-400">
                  94% on time
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-ink">₹5,42,000</p>
              <p className="text-xs text-ink-muted">Collected this month</p>
            </div>
          </div>

          {/* Layer 2: Real-time Rent Collection Progress (translateZ: 25px) */}
          <div
            style={{ transform: "translateZ(25px)" }}
            className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] p-3.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-muted">Monthly Collection Target</span>
              <span className="font-semibold text-ink">86% Achieved</span>
            </div>
            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-primary via-accent to-emerald-400 shadow-glow" />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-ink-muted">
              <span>Auto-reminders sent: 14</span>
              <span className="text-emerald-400 font-medium">0 pending disputes</span>
            </div>
          </div>
        </div>

        {/* Layer 3: Floating 3D Tenant Smartphone (translateZ: 75px) */}
        <div
          style={{
            transform: "translateZ(75px) rotateY(-8deg) rotateX(4deg)",
          }}
          className="absolute -right-4 -bottom-6 hidden w-52 rounded-2xl border border-white/20 bg-gradient-to-b from-surface-elevated/95 via-surface-elevated/90 to-surface/95 p-3.5 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:scale-[1.05] sm:block"
        >
          {/* Phone Dynamic Notch & Speaker */}
          <div className="mx-auto flex h-3.5 w-16 items-center justify-center rounded-full bg-black/60">
            <span className="mr-1 h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1 w-6 rounded-full bg-white/20" />
          </div>

          {/* Tenant App Screen Header */}
          <div className="mt-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Smartphone className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                Tenant App
              </span>
            </div>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
          </div>

          {/* Tenant Rent Card */}
          <div className="mt-3 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/25 to-primary-dark/40 p-2.5 text-white">
            <div className="flex items-center justify-between text-[10px] text-white/80">
              <span>Room 204 • Bed A</span>
              <span className="rounded bg-accent/20 px-1 py-0.5 text-[9px] font-semibold text-accent">
                Due Today
              </span>
            </div>
            <p className="mt-1 text-sm font-extrabold">₹ 7,500</p>
            <button
              type="button"
              className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg bg-accent py-1.5 text-[11px] font-bold text-surface shadow-glow transition-all hover:bg-accent-light"
            >
              <span>Pay via UPI</span>
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* Tenant Notification Chip */}
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 p-2 text-[10px] text-ink-muted">
            <CheckCircle className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
            <span className="leading-tight">WiFi ticket resolved by manager</span>
          </div>
        </div>

        {/* Layer 4: Floating 3D Instant Notification Badge (translateZ: 95px) */}
        <div
          style={{
            transform: "translateZ(95px)",
          }}
          className="absolute -top-4 -left-4 flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-surface/90 px-3.5 py-2 shadow-glow backdrop-blur-xl transition-transform duration-300 hover:scale-105"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-ink">₹12,500 Received</p>
            <p className="text-[9px] text-emerald-400">Verified UPI / Cash</p>
          </div>
        </div>

        {/* Layer 5: Floating 3D KYC Verified Badge (translateZ: 85px) */}
        <div
          style={{
            transform: "translateZ(85px)",
          }}
          className="absolute top-1/2 -left-6 hidden -translate-y-1/2 items-center gap-2 rounded-2xl border border-primary/30 bg-surface/90 px-3 py-2 shadow-glow-primary backdrop-blur-xl sm:flex"
        >
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-semibold text-ink">Tenant ID &amp; KYC Verified</span>
        </div>
      </motion.div>
    </div>
  );
}
