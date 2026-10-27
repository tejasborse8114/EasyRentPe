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
  Clock,
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
    <section className="relative overflow-hidden bg-surface py-14 sm:py-20 lg:py-24">
      {/* Background radial ambient lights */}
      <div className="glow-orb -left-40 top-1/3 h-96 w-96 bg-primary/15" aria-hidden="true" />
      <div className="glow-orb -right-40 bottom-1/4 h-96 w-96 bg-accent/15" aria-hidden="true" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Modern Property Infrastructure</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Engineered for modern <span className="gradient-text">co-living &amp; hostels</span>
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
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
                className="card h-full flex flex-col justify-between border-white/10 bg-surface-elevated/85 p-4 sm:p-8 backdrop-blur-xl shadow-glow"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                        <Banknote className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-ink">UPI &amp; Cash Rent Collection</h3>
                        <p className="text-xs text-ink-muted">Default Property UPI ID + Cash Logging</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 rounded-lg bg-surface p-1 text-xs self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setActivePaymentMode("upi")}
                        className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold transition-all ${
                          activePaymentMode === "upi"
                            ? "bg-accent text-surface shadow-sm"
                            : "text-ink-muted hover:text-ink"
                        }`}
                      >
                        <QrCode className="h-3.5 w-3.5" />
                        UPI Payment
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePaymentMode("cash")}
                        className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold transition-all ${
                          activePaymentMode === "cash"
                            ? "bg-primary text-white shadow-sm"
                            : "text-ink-muted hover:text-ink"
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
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 text-center">
                      <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-xl bg-white p-2 shadow-glow">
                        <QrCode className="h-32 w-32 text-black" />
                        {/* Scanning Laser Beam Line */}
                        <div className="pointer-events-none absolute inset-x-2 h-0.5 animate-pulse-glow bg-accent shadow-[0_0_14px_#10B981]" />
                      </div>
                      <p className="mt-3 text-xs font-semibold text-accent">
                        Property UPI ID: owner@upi
                      </p>
                      <p className="text-[11px] text-ink-muted">Tenants pay via GPay, PhonePe, Paytm or Cash</p>
                    </div>

                    {/* Live Stream of Transactions */}
                    <div className="flex flex-col justify-between space-y-2.5">
                      <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-ink">Rahul Sharma</span>
                          <span className="text-emerald-400 font-bold">+ ₹8,500</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-ink-muted">
                          <span>Room 101 • GPay UPI</span>
                          <span className="text-emerald-400 font-medium">Owner Verified ✓</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-ink">Ananya Joshi</span>
                          <span className="text-primary-light font-bold">+ ₹9,000</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-ink-muted">
                          <span>Room 203 • Cash Handover</span>
                          <span className="text-primary-light font-medium">Cash Receipt Issued ✓</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-accent/20 bg-accent/10 p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-accent">Total Month Collection</span>
                          <span className="font-extrabold text-white">₹ 42,500</span>
                        </div>
                        <p className="mt-1 text-[10px] text-ink-muted">Direct to owner • Zero third-party escrow delay</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-ink-muted border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>0% platform gateway cut</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Owner verifies every payment before marking paid</span>
                  </div>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>

          {/* Bento Card 2: Interactive Smart Bed Matrix (5 cols) */}
          <div className="lg:col-span-5">
            <ThreeDTiltCard maxTilt={10} scale={1.01} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="card h-full flex flex-col justify-between border-white/10 bg-surface-elevated/85 p-6 sm:p-8 backdrop-blur-xl shadow-glow-primary"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                        <BedDouble className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-ink">Smart Room Matrix</h3>
                        <p className="text-xs text-ink-muted">Real-time room &amp; occupancy status</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                      83% Full
                    </span>
                  </div>

                  {/* Bed Selector Chips */}
                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-wider text-ink-muted mb-2.5">
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
                                ? "border-accent bg-accent/15 shadow-glow"
                                : bed.status === "occupied"
                                ? "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                                : bed.status === "due"
                                ? "border-amber-500/30 bg-amber-500/10"
                                : "border-emerald-500/30 bg-emerald-500/10"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-ink">{bed.id}</span>
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  bed.status === "occupied"
                                    ? "bg-primary"
                                    : bed.status === "due"
                                    ? "bg-amber-400 animate-ping"
                                    : "bg-emerald-400"
                                }`}
                              />
                            </div>
                            <p className="mt-1 text-[10px] text-ink-muted capitalize">{bed.status}</p>
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
                      className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3.5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-ink">
                            Bed {selectedBed.id} • Room {selectedBed.room}
                          </p>
                          <p className="text-[11px] text-ink-muted">
                            {selectedBed.tenant ? `Tenant: ${selectedBed.tenant}` : "Ready for check-in"}
                          </p>
                        </div>
                        <span className="text-sm font-extrabold text-accent">{selectedBed.rent}/mo</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-ink-muted border-t border-white/10 pt-3">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Vacant
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary" /> Occupied
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
                className="card h-full flex flex-col justify-between border-white/10 bg-surface-elevated/85 p-6 sm:p-8 backdrop-blur-xl shadow-glow"
              >
                <div>
                  <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <BellRing className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink">In-App Notices &amp; Alerts</h3>
                      <p className="text-xs text-ink-muted">Direct push alerts inside resident app</p>
                    </div>
                  </div>

                  {/* In-App Notification Feed */}
                  <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs">
                    {/* In-App Due Notification */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-accent flex items-center gap-1">
                          <BellRing className="h-3.5 w-3.5" /> Rent Reminder
                        </span>
                        <span className="text-[10px] text-ink-muted">Due in 2 days</span>
                      </div>
                      <p className="mt-1 text-[11px] text-ink">
                        Room 204 • ₹7,500 due. Pay via UPI or Cash at reception.
                      </p>
                    </div>

                    {/* In-App Payment Log Confirmation */}
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-emerald-400 flex items-center gap-1">
                          <CheckCircle className="h-3.5 w-3.5" /> Payment Received
                        </span>
                        <span className="text-[10px] text-emerald-400">Verified</span>
                      </div>
                      <p className="mt-1 text-[11px] text-ink">
                        ₹7,500 recorded via UPI. Digital rent receipt #EP-8821 generated.
                      </p>
                    </div>

                    {/* Complaint Status */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-primary-light">Maintenance Ticket</span>
                        <span className="text-emerald-400 text-[10px]">Resolved</span>
                      </div>
                      <p className="mt-1 text-[11px] text-ink-muted">
                        WiFi speed issue in 2nd floor router resolved by manager.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
                  <Zap className="h-4 w-4 text-accent" />
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
                className="card h-full flex flex-col justify-between border-white/10 bg-surface-elevated/85 p-4 sm:p-8 backdrop-blur-xl shadow-glow-primary"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-ink">Digital Tenant Onboarding &amp; KYC</h3>
                        <p className="text-xs text-ink-muted">OTP registration &amp; digital ID verification</p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-light">
                      Paperless Move-in
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center">
                      <Smartphone className="mx-auto h-6 w-6 text-accent" />
                      <h4 className="mt-2 text-xs font-bold text-ink">OTP Verification</h4>
                      <p className="mt-1 text-[11px] text-ink-muted">Instant OTP registration for tenants</p>
                      <span className="mt-2 inline-block rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400">
                        Verified OTP
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center">
                      <FileCheck className="mx-auto h-6 w-6 text-primary" />
                      <h4 className="mt-2 text-xs font-bold text-ink">Govt ID Upload</h4>
                      <p className="mt-1 text-[11px] text-ink-muted">ID proofs &amp; college / work ID cards</p>
                      <span className="mt-2 inline-block rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-semibold text-primary-light">
                        Document Vault
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center">
                      <UserCheck className="mx-auto h-6 w-6 text-amber-400" />
                      <h4 className="mt-2 text-xs font-bold text-ink">Owner Review</h4>
                      <p className="mt-1 text-[11px] text-ink-muted">Review &amp; approve before bed assignment</p>
                      <span className="mt-2 inline-block rounded bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-semibold text-amber-400">
                        1-Click Approval
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs text-ink-muted">
                  <span>Digital records &amp; declarations safely stored in your owner portal</span>
                  <span className="font-semibold text-accent">Bank-grade 256-bit AES encryption</span>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
