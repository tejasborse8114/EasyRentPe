"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  ShieldCheck,
  CheckCircle,
  Smartphone,
  BedDouble,
  FileCheck,
  Zap,
  Sparkles,
  Banknote,
  BellRing,
  UserCheck,
} from "lucide-react";
import ThreeDTiltCard from "./ThreeDTiltCard";

interface Bed {
  id: string;
  room: string;
  status: "occupied" | "vacant" | "due";
  tenant?: string;
  rent: string;
}

const INITIAL_BEDS: Bed[] = [
  { id: "101-A", room: "101", status: "occupied", tenant: "Aarav Patel", rent: "₹8,500" },
  { id: "101-B", room: "101", status: "occupied", tenant: "Vikas Sharma", rent: "₹8,500" },
  { id: "102-A", room: "102", status: "due", tenant: "Priya Nair", rent: "₹9,000" },
  { id: "102-B", room: "102", status: "vacant", rent: "₹9,000" },
  { id: "201-A", room: "201", status: "occupied", tenant: "Rohan Deshmukh", rent: "₹10,500" },
  { id: "201-B", room: "201", status: "vacant", rent: "₹10,500" },
];

export default function InteractiveBentoShowcase() {
  const [selectedBed, setSelectedBed] = useState<Bed>(INITIAL_BEDS[0]);
  const [activePaymentMode, setActivePaymentMode] = useState<"upi" | "cash">("upi");

  return (
    <section className="relative overflow-hidden bg-[#06040A] py-14 sm:py-20 lg:py-24 border-y border-violet-900/30">
      {/* Background ambient radial lights */}
      <div className="glow-orb -left-40 top-1/3 h-96 w-96 bg-violet-600/15" aria-hidden="true" />
      <div className="glow-orb -right-40 bottom-1/4 h-96 w-96 bg-amber-500/12" aria-hidden="true" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A78BFA]">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Modern Property Infrastructure</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Engineered for modern <span className="gradient-text">co-living &amp; hostels</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Streamline rent collection with UPI &amp; Cash tracking, digital tenant check-ins, room management, and maintenance — all from one unified dashboard.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Bento Card 1: UPI & Cash Collection Terminal (7 cols) */}
          <div className="lg:col-span-7">
            <ThreeDTiltCard maxTilt={8} scale={1.01} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="card h-full flex flex-col justify-between border-violet-900/30 bg-[#0E0A18]/90 p-4 sm:p-8 shadow-card backdrop-blur-xl hover:border-primary/50 hover:shadow-glow"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-violet-900/30 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-[#A78BFA]">
                        <Banknote className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">UPI &amp; Cash Rent Collection</h3>
                        <p className="text-xs text-slate-400">Default Property UPI ID + Cash Logging</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 rounded-lg bg-white/5 p-1 text-xs self-start sm:self-auto border border-violet-900/30">
                      <button
                        type="button"
                        onClick={() => setActivePaymentMode("upi")}
                        className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold transition-all ${
                          activePaymentMode === "upi"
                            ? "bg-[#8B5CF6] text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <QrCode className="h-3.5 w-3.5" />
                        UPI Payment
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePaymentMode("cash")}
                        className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-bold transition-all ${
                          activePaymentMode === "cash"
                            ? "bg-[#F59E0B] text-slate-950 shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Banknote className="h-3.5 w-3.5" />
                        Cash at Desk
                      </button>
                    </div>
                  </div>

                  {/* Terminal Visual Body */}
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Dynamic QR Mockup with Laser Scan */}
                    <div className="relative overflow-hidden rounded-2xl border border-violet-900/30 bg-white/5 p-5 text-center">
                      <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-xl bg-white p-2 shadow-lg border border-white/20">
                        <QrCode className="h-32 w-32 text-slate-950" />
                        {/* Scanning Laser Beam Line */}
                        <div className="pointer-events-none absolute inset-x-2 h-0.5 animate-pulse-glow bg-[#A78BFA] shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                      </div>
                      <p className="mt-3 text-xs font-bold text-[#A78BFA]">
                        Property UPI ID: owner@upi
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Tenants scan &amp; pay via any UPI app
                      </p>
                    </div>

                    {/* Live Verification Feed */}
                    <div className="flex flex-col justify-between rounded-2xl border border-violet-900/30 bg-white/5 p-4">
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-300">Live Owner Verification</span>
                          <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                            Auto-matched
                          </span>
                        </div>

                        <div className="mt-4 space-y-2.5">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs">
                            <div className="flex justify-between font-medium text-white">
                              <span>Aarav Patel (Room 101)</span>
                              <span className="text-[#A78BFA] font-bold">₹8,500</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                              <span>UPI Ref: 4091284812</span>
                              <span className="flex items-center text-emerald-400 gap-0.5">
                                <CheckCircle className="h-3 w-3" /> Confirmed
                              </span>
                            </div>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs">
                            <div className="flex justify-between font-medium text-white">
                              <span>Vikas Sharma (Room 101)</span>
                              <span className="text-[#FBBF24] font-bold">₹8,500</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                              <span>Desk Cash Entry (OTP)</span>
                              <span className="flex items-center text-amber-400 gap-0.5">
                                <ShieldCheck className="h-3 w-3" /> Logged
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg bg-violet-500/10 border border-violet-500/30 p-2 text-center text-[11px] font-bold text-[#A78BFA]">
                        ✓ Zero Commission • 100% Direct To Owner
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-violet-900/30 pt-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#FBBF24]" /> Dual payment flexibility
                  </span>
                  <span className="font-semibold text-slate-300">Instant digital rent receipts generated</span>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>

          {/* Bento Card 2: Interactive Room & Bed Matrix (5 cols) */}
          <div className="lg:col-span-5">
            <ThreeDTiltCard maxTilt={8} scale={1.01} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="card h-full flex flex-col justify-between border-violet-900/30 bg-[#0E0A18]/90 p-4 sm:p-8 shadow-card backdrop-blur-xl hover:border-accent/50 hover:shadow-glow-accent"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-violet-900/30 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-[#FBBF24]">
                        <BedDouble className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">Room &amp; Bed Occupancy</h3>
                        <p className="text-xs text-slate-400">Live multi-sharing bed allocation</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-bold text-amber-300 border border-amber-500/30">
                      88% Occupied
                    </span>
                  </div>

                  {/* Bed Matrix Interactive Chips */}
                  <div className="mt-5">
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Click bed to inspect:
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {INITIAL_BEDS.map((bed) => {
                        const isSelected = selectedBed.id === bed.id;
                        return (
                          <button
                            key={bed.id}
                            type="button"
                            onClick={() => setSelectedBed(bed)}
                            className={`rounded-xl border p-2.5 text-left transition-all ${
                              isSelected
                                ? "border-[#8B5CF6] bg-violet-500/25 shadow-glow"
                                : bed.status === "occupied"
                                ? "border-violet-900/40 bg-white/5 hover:bg-white/10 text-white"
                                : bed.status === "due"
                                ? "border-amber-500/40 bg-amber-500/15 text-amber-300"
                                : "border-emerald-500/40 bg-emerald-500/15 text-emerald-300"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">{bed.id}</span>
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  bed.status === "occupied"
                                    ? "bg-[#8B5CF6]"
                                    : bed.status === "due"
                                    ? "bg-amber-400 animate-ping"
                                    : "bg-emerald-400"
                                }`}
                              />
                            </div>
                            <p className="mt-1 text-[10px] text-slate-400 capitalize">{bed.status}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Bed Inspector Pane */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedBed.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 rounded-xl border border-violet-900/30 bg-white/5 p-3.5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white">
                            Bed {selectedBed.id} • Room {selectedBed.room}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {selectedBed.tenant ? `Tenant: ${selectedBed.tenant}` : "Ready for check-in"}
                          </p>
                        </div>
                        <span className="text-sm font-extrabold text-[#FBBF24]">{selectedBed.rent}/mo</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 border-t border-violet-900/30 pt-3">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Vacant
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" /> Occupied
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-400" /> Rent Due
                  </span>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>

          {/* Bento Card 3: In-App Notices & Rent Alerts (5 cols) */}
          <div className="lg:col-span-5">
            <ThreeDTiltCard maxTilt={10} scale={1.01} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="card h-full flex flex-col justify-between border-violet-900/30 bg-[#0E0A18]/90 p-4 sm:p-8 shadow-card backdrop-blur-xl hover:border-primary/50 hover:shadow-glow"
              >
                <div>
                  <div className="flex items-center gap-2.5 border-b border-violet-900/30 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-[#A78BFA]">
                      <BellRing className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">In-App Notices &amp; Alerts</h3>
                      <p className="text-xs text-slate-400">Direct push alerts inside resident app</p>
                    </div>
                  </div>

                  {/* In-App Notification Feed */}
                  <div className="mt-5 space-y-3 rounded-2xl border border-violet-900/30 bg-white/5 p-4 text-xs">
                    {/* In-App Due Notification */}
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 shadow-sm">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-amber-300 flex items-center gap-1">
                          <BellRing className="h-3.5 w-3.5" /> Rent Reminder
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">Due in 2 days</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-300">
                        Room 204 • ₹7,500 due. Pay via UPI or Cash at reception.
                      </p>
                    </div>

                    {/* In-App Payment Log Confirmation */}
                    <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#A78BFA] flex items-center gap-1">
                          <CheckCircle className="h-3.5 w-3.5" /> Payment Received
                        </span>
                        <span className="text-[10px] text-amber-300 font-semibold">Verified</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-300">
                        ₹7,500 recorded via UPI. Digital rent receipt #EP-8821 generated.
                      </p>
                    </div>

                    {/* Complaint Status */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-sm">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#A78BFA]">Maintenance Ticket</span>
                        <span className="text-emerald-400 text-[10px] font-semibold">Resolved</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400">
                        WiFi speed issue in 2nd floor router resolved by manager.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="h-4 w-4 text-[#FBBF24]" />
                  <span>All notices, dues, and complaints handled inside the app</span>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>

          {/* Bento Card 4: Paperless Tenant KYC & Digital Agreements (7 cols) */}
          <div className="lg:col-span-7">
            <ThreeDTiltCard maxTilt={8} scale={1.01} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="card h-full flex flex-col justify-between border-violet-900/30 bg-[#0E0A18]/90 p-4 sm:p-8 shadow-card backdrop-blur-xl hover:border-primary/50 hover:shadow-glow"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-violet-900/30 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-[#FBBF24]">
                        <UserCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">Paperless Tenant Onboarding</h3>
                        <p className="text-xs text-slate-400">OTP registration + Govt ID document upload</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-violet-500/15 border border-violet-500/30 px-2.5 py-0.5 text-xs font-semibold text-[#A78BFA]">
                      100% Digital
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-violet-900/30 bg-white/5 p-3.5 text-center">
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-[#A78BFA]">
                        <Smartphone className="h-4 w-4" />
                      </div>
                      <p className="mt-2 text-xs font-bold text-white">OTP Verification</p>
                      <p className="mt-0.5 text-[10px] text-slate-400">Instant tenant phone authentication</p>
                    </div>

                    <div className="rounded-xl border border-violet-900/30 bg-white/5 p-3.5 text-center">
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20 text-[#FBBF24]">
                        <FileCheck className="h-4 w-4" />
                      </div>
                      <p className="mt-2 text-xs font-bold text-white">ID &amp; KYC Upload</p>
                      <p className="mt-0.5 text-[10px] text-slate-400">Govt ID proofs securely stored in cloud</p>
                    </div>

                    <div className="rounded-xl border border-violet-900/30 bg-white/5 p-3.5 text-center">
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <p className="mt-2 text-xs font-bold text-white">Owner Approval</p>
                      <p className="mt-0.5 text-[10px] text-slate-400">1-click approve before assigning bed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-violet-900/30 pt-4 text-xs text-slate-400">
                  <span>Replaces physical paper forms &amp; lost photocopies completely</span>
                  <span className="font-bold text-amber-300">Secure Cloud KYC</span>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
