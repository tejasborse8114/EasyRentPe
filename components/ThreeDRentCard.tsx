"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import {
  QrCode,
  ShieldCheck,
  Zap,
  Repeat,
  Sparkles,
  Wifi,
  CheckCircle,
} from "lucide-react";

export default function ThreeDRentCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D physics tilt springs
  const springConfig = { damping: 20, stiffness: 240, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const rect = cardRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;

      rotateX.set(-yPct * 26);
      rotateY.set(xPct * 26);
    },
    [rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <div className="relative mx-auto w-full max-w-sm py-4 [perspective:1200px]">
      {/* 3D Action Hint */}
      <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 font-semibold text-[#A78BFA]">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          Interactive 3D Holographic Pass
        </span>
        <button
          type="button"
          onClick={() => setIsFlipped((prev) => !prev)}
          className="flex items-center gap-1 rounded-lg border border-violet-500/30 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-amber-300 transition-all hover:bg-violet-950/40 hover:text-white"
        >
          <Repeat className="h-3 w-3" />
          {isFlipped ? "Flip to Front" : "Flip to UPI QR"}
        </button>
      </div>

      {/* 3D Flipping Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="relative h-64 w-full cursor-pointer select-none [perspective:1200px]"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{
            rotateX,
            rotateY: isFlipped ? 180 : rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full w-full rounded-3xl transition-shadow duration-300 will-change-transform [transform-style:preserve-3d]"
        >
          {/* ================= FRONT SIDE ================= */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-violet-500/40 bg-gradient-to-br from-[#1E1238] via-[#120A24] to-[#080410] p-6 shadow-[0_20px_50px_-10px_rgba(139,92,246,0.4)] backdrop-blur-2xl"
          >
            {/* Holographic Sheen Effect */}
            <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform opacity-60" />

            {/* Top Bar: Brand + Chip */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Micro Golden EMV Chip */}
                <div className="h-8 w-10 rounded-md border border-amber-300/60 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-amber-800/40" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-amber-800/40" />
                </div>
                <Wifi className="h-4 w-4 rotate-90 text-amber-300" />
              </div>
              <div className="text-right">
                <span className="text-xs font-black tracking-tight text-white">
                  Easy<span className="text-violet-400">Rent</span><span className="text-amber-400">Pe</span>
                </span>
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                  Verified Resident
                </p>
              </div>
            </div>

            {/* Middle: Resident Identity */}
            <div className="relative mt-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Resident Name</p>
              <h4 className="text-base font-extrabold text-white tracking-wide">Aarav Patel</h4>
              <div className="mt-1 flex items-center gap-2 text-xs text-amber-300">
                <span className="font-semibold">Room 204 • Bed A</span>
                <span className="h-1 w-1 rounded-full bg-amber-400" />
                <span className="text-slate-300">Elite Co-Living</span>
              </div>
            </div>

            {/* Bottom Bar: Rent Details */}
            <div className="relative flex items-end justify-between border-t border-violet-500/30 pt-3">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-slate-400">Monthly Rent</p>
                <p className="text-lg font-black text-white">₹ 8,500<span className="text-xs font-medium text-slate-400">/mo</span></p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                <ShieldCheck className="h-3 w-3" />
                <span>Rent Paid</span>
              </div>
            </div>
          </div>

          {/* ================= BACK SIDE (UPI QR CODE) ================= */}
          <div
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-br from-[#1A1005] via-[#120B03] to-[#080501] p-6 shadow-[0_20px_50px_-10px_rgba(245,158,11,0.4)] backdrop-blur-2xl"
          >
            {/* Magnetic Stripe Bar */}
            <div className="absolute inset-x-0 top-4 h-9 bg-black/80" />

            <div className="relative mt-12 flex items-center justify-between gap-4">
              {/* High Contrast White QR Tile */}
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-xl border border-white">
                <QrCode className="h-full w-full text-slate-950" />
                {/* Violet Scanning Beam */}
                <div className="pointer-events-none absolute inset-x-1 h-0.5 animate-pulse-glow bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
              </div>

              {/* UPI Instructions */}
              <div>
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[9px] font-bold text-amber-300 border border-amber-500/40">
                  Instant UPI Scan
                </span>
                <p className="mt-1.5 text-xs font-bold text-white">owner@upi</p>
                <p className="mt-0.5 text-[10px] text-slate-400 leading-tight">
                  Scan via GPay, PhonePe, or Paytm. 100% direct settlement.
                </p>
              </div>
            </div>

            {/* Bottom Bar: Owner verification stamp */}
            <div className="relative flex items-center justify-between border-t border-amber-500/30 pt-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle className="h-3 w-3" /> Auto Receipt Generated
              </span>
              <span className="font-mono text-amber-300">#ERP-2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
