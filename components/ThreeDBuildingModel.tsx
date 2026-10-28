"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import {
  Layers,
  Eye,
  RotateCw,
  QrCode,
  ShieldCheck,
  BedDouble,
  Wifi,
  Sparkles,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function ThreeDBuildingModel() {
  const [viewMode, setViewMode] = useState<"orbit" | "explode" | "xray">("orbit");
  const [activeFloor, setActiveFloor] = useState<number | null>(null);
  const [selectedBedInfo, setSelectedBedInfo] = useState<string | null>("Bed 201-A • Aarav Patel (₹8,500/mo • Paid)");
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D physics springs for butter-smooth camera rotation
  const springConfig = { damping: 24, stiffness: 180, mass: 0.6 };
  const rotX = useSpring(22, springConfig);
  const rotY = useSpring(-32, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;

      rotX.set(22 - yPct * 25);
      rotY.set(-32 + xPct * 35);
    },
    [rotX, rotY]
  );

  const resetRotation = () => {
    rotX.set(22);
    rotY.set(-32);
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl py-6 [perspective:1600px]">
      {/* 3D Model Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-900/30 pb-4 mb-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-[#00F59B] shadow-glow">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Interactive 3D Digital Twin</span>
              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-500/40">
                Live 3D Engine
              </span>
            </h3>
            <p className="text-xs text-slate-400">Drag cursor to rotate in real 3D space</p>
          </div>
        </div>

        {/* View mode toggle buttons */}
        <div className="flex items-center gap-1.5 rounded-xl border border-emerald-900/40 bg-white/5 p-1 text-xs">
          <button
            type="button"
            onClick={() => setViewMode("orbit")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
              viewMode === "orbit"
                ? "bg-[#00F59B] text-[#02140D] shadow-glow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <RotateCw className="h-3.5 w-3.5" />
            3D Orbit
          </button>
          <button
            type="button"
            onClick={() => setViewMode("explode")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
              viewMode === "explode"
                ? "bg-[#00D2FF] text-[#02140D] shadow-glow-accent"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Exploded Floors
          </button>
          <button
            type="button"
            onClick={() => setViewMode("xray")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
              viewMode === "xray"
                ? "bg-teal-400 text-[#02140D] shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            X-Ray Scanner
          </button>
        </div>
      </div>

      {/* 3D Viewport Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        className="relative mx-auto h-[480px] sm:h-[560px] w-full cursor-grab select-none overflow-hidden rounded-3xl border border-emerald-900/40 bg-gradient-to-b from-[#07130F] via-[#050C0A] to-[#020504] p-6 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl active:cursor-grabbing"
      >
        {/* Ambient 3D lights and glow orbs inside stage */}
        <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

        {/* 3D Isometric Coordinate Stage */}
        <motion.div
          style={{
            rotateX: rotX,
            rotateY: rotY,
            transformStyle: "preserve-3d",
          }}
          className="relative mx-auto mt-6 sm:mt-10 h-72 w-72 sm:h-80 sm:w-80 transition-transform duration-200 will-change-transform"
        >
          {/* FLOOR 3: Rooftop & Solar Amenities */}
          <motion.div
            animate={{
              y: viewMode === "explode" ? -140 : -55,
              z: viewMode === "explode" ? 60 : 0,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            style={{ transformStyle: "preserve-3d" }}
            onMouseEnter={() => setActiveFloor(3)}
            onMouseLeave={() => setActiveFloor(null)}
            className={`absolute inset-0 rounded-3xl border p-4 transition-all duration-300 ${
              activeFloor === 3
                ? "border-cyan-400 bg-[#091D17]/95 shadow-[0_0_40px_rgba(0,210,255,0.4)]"
                : "border-emerald-500/40 bg-[#071611]/90 shadow-2xl"
            }`}
          >
            {/* Rooftop Solar Panels & High-speed WiFi */}
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-cyan-400" /> Floor 3 • Rooftop &amp; Solar
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                100% Power Active
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border border-emerald-800/40 bg-white/5 p-2 text-center">
                <Wifi className="mx-auto h-4 w-4 text-[#00F59B]" />
                <p className="mt-1 text-[10px] text-white font-semibold">Dual ISP Mesh WiFi</p>
                <p className="text-[9px] text-emerald-400">300 Mbps Live</p>
              </div>
              <div className="rounded-xl border border-emerald-800/40 bg-white/5 p-2 text-center">
                <Zap className="mx-auto h-4 w-4 text-cyan-400" />
                <p className="mt-1 text-[10px] text-white font-semibold">Solar Inverter</p>
                <p className="text-[9px] text-cyan-300">Auto Backup ON</p>
              </div>
            </div>
          </motion.div>

          {/* FLOOR 2: Smart Rooms & Occupancy Grid */}
          <motion.div
            animate={{
              y: viewMode === "explode" ? 0 : 0,
              z: viewMode === "explode" ? 0 : 0,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            style={{ transformStyle: "preserve-3d" }}
            onMouseEnter={() => setActiveFloor(2)}
            onMouseLeave={() => setActiveFloor(null)}
            className={`absolute inset-0 rounded-3xl border p-4 transition-all duration-300 ${
              activeFloor === 2 || viewMode === "xray"
                ? "border-emerald-400 bg-[#0A1A14]/95 shadow-[0_0_40px_rgba(0,245,155,0.4)]"
                : "border-emerald-500/40 bg-[#06140F]/90 shadow-2xl"
            }`}
          >
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span className="text-[11px] font-bold text-[#00F59B] flex items-center gap-1">
                <BedDouble className="h-3.5 w-3.5 text-emerald-400" /> Floor 2 • Smart Rooms (201-206)
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-[#00F59B]">
                16/18 Occupied
              </span>
            </div>

            {/* Interactive 3D Beds inside the room */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { id: "201-A", status: "paid", label: "Aarav (₹8.5k)" },
                { id: "201-B", status: "paid", label: "Vikas (₹8.5k)" },
                { id: "202-A", status: "due", label: "Priya (Due ₹9k)" },
                { id: "202-B", status: "vacant", label: "Vacant Bed" },
                { id: "203-A", status: "paid", label: "Rohan (₹10.5k)" },
                { id: "203-B", status: "paid", label: "Karan (₹10.5k)" },
              ].map((bed) => (
                <button
                  key={bed.id}
                  type="button"
                  onClick={() =>
                    setSelectedBedInfo(
                      `Bed ${bed.id} • ${bed.label} • ${
                        bed.status === "paid" ? "Verified via UPI" : bed.status === "due" ? "Due in 2 days" : "Ready for Instant Move-in"
                      }`
                    )
                  }
                  className={`rounded-xl border p-2 text-center transition-all hover:scale-105 active:scale-95 ${
                    bed.status === "paid"
                      ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-200"
                      : bed.status === "due"
                      ? "border-amber-500/50 bg-amber-950/50 text-amber-200 animate-pulse"
                      : "border-cyan-500/50 bg-cyan-950/40 text-cyan-200"
                  }`}
                >
                  <p className="text-[10px] font-bold">{bed.id}</p>
                  <p className="text-[8px] opacity-80 truncate">{bed.label}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* FLOOR 1: Reception, Digital Desk & UPI Terminal */}
          <motion.div
            animate={{
              y: viewMode === "explode" ? 140 : 55,
              z: viewMode === "explode" ? -60 : 0,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            style={{ transformStyle: "preserve-3d" }}
            onMouseEnter={() => setActiveFloor(1)}
            onMouseLeave={() => setActiveFloor(null)}
            className={`absolute inset-0 rounded-3xl border p-4 transition-all duration-300 ${
              activeFloor === 1
                ? "border-emerald-400 bg-[#091813]/95 shadow-[0_0_40px_rgba(0,245,155,0.4)]"
                : "border-emerald-500/40 bg-[#05100D]/90 shadow-2xl"
            }`}
          >
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span className="text-[11px] font-bold text-emerald-300 flex items-center gap-1">
                <QrCode className="h-3.5 w-3.5 text-emerald-400" /> Floor 1 • Digital Reception &amp; UPI
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                0 Disputes
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-emerald-800/40 bg-white/5 p-2.5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Owner UPI Verification</p>
                  <p className="text-[9px] text-slate-400">Direct-to-bank settlement</p>
                </div>
              </div>
              <span className="text-xs font-black text-cyan-300">₹5.42L</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Live Inspector Bar at bottom of stage */}
        <div className="absolute inset-x-4 bottom-4 flex flex-col sm:flex-row items-center justify-between gap-2 rounded-2xl border border-emerald-900/40 bg-[#030706]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold text-white">{selectedBedInfo || "Click any bed to inspect live rent status"}</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Paid
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Due
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> Vacant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
