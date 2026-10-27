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
  const rotateX = useSpring(8, springConfig);
  const rotateY = useSpring(-8, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;

      // Gentle interactive 3D tilt
      rotateX.set(8 - yPct * 14);
      rotateY.set(-8 + xPct * 16);
    },
    [rotateX, rotateY]
  );

  const handleMouseEnter = useCallback(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsHovered(true);
    scale.set(1.02);
  }, [scale]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(8);
    rotateY.set(-8);
    scale.set(1);
  }, [rotateX, rotateY, scale]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-lg cursor-pointer select-none py-4 [perspective:1400px]"
    >
      {/* Background glow orb that responds to hover */}
      <div
        className={`glow-orb -inset-10 transition-opacity duration-700 bg-gradient-to-tr from-accent/25 via-primary/20 to-accent/10 ${
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
          className="relative rounded-3xl border border-white/15 bg-surface-elevated/95 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl transition-colors duration-300 hover:border-white/25"
        >
          {/* Window Top Bar with macOS-style dots and Property Status */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500/80 shadow-sm" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80 shadow-sm" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80 shadow-sm" />
              <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-xs font-semibold text-ink-muted">
                EasyRentPe Cloud OS
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live Sync
            </div>
          </div>

          {/* Quick Header */}
          <div className="mt-3 sm:mt-3.5 flex items-center justify-between">
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-ink-muted">
                Property Overview
              </p>
              <h4 className="text-sm sm:text-base font-bold text-ink">Elite Co-Living &amp; Hostel</h4>
            </div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-primary-light">
              92 Beds Total
            </span>
          </div>

          {/* Layer 1: Elevated 3D Metric Cards (translateZ: 30px) - completely unobstructed */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-4"
          >
            {/* Rent Collected Card - on the left for hero priority and 100% obstruction-free visibility */}
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-3 sm:p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <Wallet className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-400">
                  94% On Time
                </span>
              </div>
              <p className="mt-2 sm:mt-2.5 text-xl sm:text-2xl lg:text-3xl font-black text-ink whitespace-nowrap tracking-tight">₹5,42,000</p>
              <p className="text-[10px] sm:text-xs text-ink-muted mt-0.5 whitespace-nowrap">Collected this month</p>
            </div>

            {/* Occupancy Card - on the right */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-3 sm:p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                  <BedDouble className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="flex items-center text-[9px] sm:text-[10px] font-bold text-emerald-400">
                  <TrendingUp className="mr-0.5 h-3 w-3" /> +8%
                </span>
              </div>
              <p className="mt-2 sm:mt-2.5 text-xl sm:text-2xl lg:text-3xl font-black text-ink">88%</p>
              <p className="text-[10px] sm:text-xs text-ink-muted mt-0.5">Occupancy (81/92 Beds)</p>
            </div>
          </div>

          {/* Layer 2: Bottom Section - Target progress bar on left + 3D Tenant Smartphone on right */}
          <div className="mt-3 sm:mt-4 flex items-end justify-between gap-3 sm:gap-4">
            {/* Real-time Rent Collection Target (translateZ: 20px) */}
            <div
              style={{ transform: "translateZ(20px)" }}
              className="flex-1 rounded-xl border border-white/5 bg-white/[0.03] p-2.5 sm:p-3"
            >
              <div className="flex items-center justify-between text-[11px] sm:text-xs">
                <span className="text-ink-muted font-medium">Monthly Target</span>
                <span className="font-bold text-accent">86% Achieved</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-glow" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-ink-muted">
                <span>Auto-notices: 14</span>
                <span className="text-emerald-400 font-medium">0 disputes</span>
              </div>
            </div>

            {/* Layer 3: Floating 3D Tenant Smartphone (translateZ: 70px) - neatly aligned in bottom row */}
            <div className="hidden sm:block w-44 shrink-0 relative">
              <div
                style={{
                  transform: "translateZ(70px) rotateY(-6deg) rotateX(2deg)",
                }}
                className="w-44 rounded-2xl border border-white/20 bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#040711] p-3 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:scale-[1.04]"
              >
                {/* Phone Dynamic Notch & Speaker */}
                <div className="mx-auto flex h-2.5 w-12 items-center justify-center rounded-full bg-black/70">
                  <span className="mr-1 h-1 w-1 rounded-full bg-white/40" />
                  <span className="h-0.5 w-4 rounded-full bg-white/20" />
                </div>

                {/* Tenant App Screen Header */}
                <div className="mt-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="h-3 w-3 text-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                      Tenant App
                    </span>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Tenant Rent Card */}
                <div className="mt-2 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/20 to-primary/20 p-2 text-white">
                  <div className="flex items-center justify-between text-[9px] text-white/80">
                    <span>Room 204 • Bed A</span>
                    <span className="rounded bg-accent/20 px-1 py-0.5 text-[8px] font-bold text-accent">
                      Due Today
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-black">₹ 7,500</p>
                  <div className="mt-1.5 flex w-full items-center justify-center gap-1 rounded-lg bg-accent py-1 text-[10px] font-bold text-surface shadow-glow">
                    <span>Pay via UPI / Cash</span>
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </div>
                </div>

                {/* Tenant Notification Chip */}
                <div className="mt-1.5 flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 p-1.5 text-[9px] text-ink-muted">
                  <CheckCircle className="h-3 w-3 shrink-0 text-emerald-400" />
                  <span className="leading-tight text-[9px]">WiFi ticket resolved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 4: Floating 3D Instant Notification Badge (translateZ: 85px) - placed cleanly at top right */}
        <div
          style={{
            transform: "translateZ(85px)",
          }}
          className="absolute -top-4 right-2 sm:right-6 flex items-center gap-2 sm:gap-2.5 rounded-2xl border border-emerald-500/30 bg-surface-elevated/95 px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-glow backdrop-blur-xl transition-transform duration-300 hover:scale-105"
        >
          <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </div>
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold text-ink">₹12,500 Received</p>
            <p className="text-[8px] sm:text-[9px] text-emerald-400">Verified UPI / Cash</p>
          </div>
        </div>

        {/* Layer 5: Floating 3D KYC Verified Badge (translateZ: 75px) - placed cleanly at bottom left */}
        <div
          style={{
            transform: "translateZ(75px)",
          }}
          className="absolute -bottom-3 left-4 hidden items-center gap-2 rounded-2xl border border-primary/30 bg-surface-elevated/95 px-3 py-1.5 shadow-glow-primary backdrop-blur-xl sm:flex"
        >
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-semibold text-ink">Tenant ID &amp; KYC Verified</span>
        </div>
      </motion.div>
    </div>
  );
}
