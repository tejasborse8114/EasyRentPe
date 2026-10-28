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
        className={`glow-orb -inset-10 transition-opacity duration-700 bg-gradient-to-tr from-primary/30 via-accent/20 to-violet-800/10 ${
          isHovered ? "opacity-90 scale-105" : "opacity-50"
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
          className="relative rounded-3xl border border-violet-900/40 bg-[#0B0816]/95 p-4 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-colors duration-300 hover:border-violet-700/50"
        >
          {/* Window Top Bar with macOS-style dots and Property Status */}
          <div className="flex items-center justify-between border-b border-violet-900/30 pb-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500 shadow-sm" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-400 shadow-sm" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500 shadow-sm" />
              <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-xs font-semibold text-slate-400">
                EasyRentPe Cloud OS
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-amber-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              Live Sync
            </div>
          </div>

          {/* Quick Header */}
          <div className="mt-3 sm:mt-3.5 flex items-center justify-between">
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                Property Overview
              </p>
              <h4 className="text-sm sm:text-base font-bold text-white">Elite Co-Living &amp; Hostel</h4>
            </div>
            <span className="rounded-full bg-violet-500/15 border border-violet-500/30 px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-[#A78BFA]">
              92 Beds Total
            </span>
          </div>

          {/* Layer 1: Elevated 3D Metric Cards (translateZ: 30px) */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-4"
          >
            {/* Rent Collected Card - Left Priority */}
            <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/60 via-purple-950/30 to-transparent p-3 sm:p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-violet-500/20 text-[#A78BFA]">
                  <Wallet className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-amber-300 border border-amber-500/30">
                  94% On Time
                </span>
              </div>
              <p className="mt-2 sm:mt-2.5 text-xl sm:text-2xl lg:text-3xl font-black text-white whitespace-nowrap tracking-tight">₹5,42,000</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 whitespace-nowrap font-medium">Collected this month</p>
            </div>

            {/* Occupancy Card - Right */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/50 via-orange-950/20 to-transparent p-3 sm:p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-amber-500/20 text-[#FBBF24]">
                  <BedDouble className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="flex items-center text-[9px] sm:text-[10px] font-bold text-amber-300">
                  <TrendingUp className="mr-0.5 h-3 w-3" /> +8%
                </span>
              </div>
              <p className="mt-2 sm:mt-2.5 text-xl sm:text-2xl lg:text-3xl font-black text-white">88%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">Occupancy (81/92 Beds)</p>
            </div>
          </div>

          {/* Layer 2: Bottom Section - Target progress bar on left + 3D Tenant Smartphone on right */}
          <div className="mt-3 sm:mt-4 flex items-end justify-between gap-3 sm:gap-4">
            {/* Real-time Rent Collection Target (translateZ: 20px) */}
            <div
              style={{ transform: "translateZ(20px)" }}
              className="flex-1 rounded-xl border border-violet-900/30 bg-white/5 p-2.5 sm:p-3"
            >
              <div className="flex items-center justify-between text-[11px] sm:text-xs">
                <span className="text-slate-300 font-medium">Monthly Target</span>
                <span className="font-bold text-[#A78BFA]">86% Achieved</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#F59E0B] shadow-sm" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                <span>Auto-notices: 14</span>
                <span className="text-amber-300 font-semibold">0 disputes</span>
              </div>
            </div>

            {/* Layer 3: Floating 3D Tenant Smartphone (translateZ: 70px) */}
            <div className="hidden sm:block w-44 shrink-0 relative">
              <div
                style={{
                  transform: "translateZ(70px) rotateY(-6deg) rotateX(2deg)",
                }}
                className="w-44 rounded-2xl border border-violet-800/40 bg-gradient-to-b from-[#140E26] via-[#0D091A] to-[#05030A] p-3 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:scale-[1.04]"
              >
                {/* Phone Dynamic Notch */}
                <div className="mx-auto flex h-2.5 w-12 items-center justify-center rounded-full bg-black/80">
                  <span className="mr-1 h-1 w-1 rounded-full bg-white/40" />
                  <span className="h-0.5 w-4 rounded-full bg-white/20" />
                </div>

                {/* Tenant App Screen Header */}
                <div className="mt-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="h-3 w-3 text-violet-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                      Tenant App
                    </span>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                </div>

                {/* Tenant Rent Card */}
                <div className="mt-2 rounded-xl border border-amber-500/30 bg-gradient-to-br from-violet-500/20 to-amber-500/20 p-2 text-white">
                  <div className="flex items-center justify-between text-[9px] text-white/80">
                    <span>Room 204 • Bed A</span>
                    <span className="rounded bg-amber-500/30 px-1 py-0.5 text-[8px] font-bold text-amber-300">
                      Due Today
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-black">₹ 7,500</p>
                  <div className="mt-1.5 flex w-full items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] py-1 text-[10px] font-bold text-white shadow-sm">
                    <span>Pay via UPI / Cash</span>
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </div>
                </div>

                {/* Tenant Notification Chip */}
                <div className="mt-1.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-1.5 text-[9px] text-slate-300">
                  <CheckCircle className="h-3 w-3 shrink-0 text-amber-400" />
                  <span className="leading-tight text-[9px]">WiFi ticket resolved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 4: Floating 3D Instant Notification Badge (translateZ: 85px) */}
        <div
          style={{
            transform: "translateZ(85px) rotateZ(2deg)",
          }}
          className="pointer-events-none absolute -top-5 -right-3 hidden sm:flex items-center gap-2.5 rounded-2xl border border-violet-500/40 bg-[#0E0A18]/95 px-3.5 py-2.5 shadow-glow backdrop-blur-xl"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/20 text-[#A78BFA]">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
              <p className="text-[11px] font-bold text-white">UPI Verified</p>
            </div>
            <p className="text-[10px] text-amber-300 font-semibold">+₹8,500 deposited</p>
          </div>
        </div>

        {/* Layer 5: Fast Digital Check-in floating pill (translateZ: 65px) */}
        <div
          style={{
            transform: "translateZ(65px) rotateZ(-3deg)",
          }}
          className="pointer-events-none absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 rounded-2xl border border-amber-500/40 bg-[#0E0A18]/95 px-3 py-2 shadow-glow-accent backdrop-blur-xl"
        >
          <Zap className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-[10px] font-bold text-white">Govt ID &amp; OTP Approved</span>
        </div>
      </motion.div>
    </div>
  );
}
