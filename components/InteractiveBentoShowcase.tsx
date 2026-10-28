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
    <section className="relative overflow-hidden bg-slate-50/70 py-14 sm:py-20 lg:py-24 border-y border-slate-200/70">
      {/* Background soft ambient radial lights */}
      <div className="glow-orb -left-40 top-1/3 h-96 w-96 bg-blue-500/10" aria-hidden="true" />
      <div className="glow-orb -right-40 bottom-1/4 h-96 w-96 bg-emerald-500/10" aria-hidden="true" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0055D4]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Modern Property Infrastructure</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Engineered for modern <span className="gradient-text">co-living &amp; hostels</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
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
                className="card h-full flex flex-col justify-between border-slate-200/90 bg-white p-4 sm:p-8 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0055D4]">
                        <Banknote className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">UPI &amp; Cash Rent Collection</h3>
                        <p className="text-xs text-slate-500">Default Property UPI ID + Cash Logging</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 rounded-lg bg-slate-100 p-1 text-xs self-start sm:self-auto border border-slate-200/60">
                      <button
                        type="button"
                        onClick={() => setActivePaymentMode("upi")}
                        className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold transition-all ${
                          activePaymentMode === "upi"
                            ? "bg-[#0055D4] text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
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
                            ? "bg-[#00A859] text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
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
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
                      <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-slate-200">
                        <QrCode className="h-32 w-32 text-slate-900" />
                        {/* Scanning Laser Beam Line */}
                        <div className="pointer-events-none absolute inset-x-2 h-0.5 animate-pulse-glow bg-[#0055D4] shadow-[0_0_10px_rgba(0,85,212,0.6)]" />
                      </div>
                      <p className="mt-3 text-xs font-bold text-[#0055D4]">
                        Property UPI ID: owner@upi
                      </p>
                      <p className="text-[11px] text-slate-500">Tenants pay via GPay, PhonePe, Paytm or Cash</p>
                    </div>

                    {/* Live Stream of Transactions */}
                    <div className="flex flex-col justify-between space-y-2.5">
                      <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-900">Rahul Sharma</span>
                          <span className="text-emerald-700 font-bold">+ ₹8,500</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Room 101 • GPay UPI</span>
                          <span className="text-emerald-700 font-semibold">Owner Verified ✓</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-900">Ananya Joshi</span>
                          <span className="text-[#0055D4] font-bold">+ ₹9,000</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Room 203 • Cash Handover</span>
                          <span className="text-[#0055D4] font-semibold">Cash Receipt Issued ✓</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#0055D4]">Total Month Collection</span>
                          <span className="font-extrabold text-slate-900">₹ 42,500</span>
                        </div>
                        <p className="mt-1 text-[10px] text-slate-500">Direct to owner • Zero third-party escrow delay</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-200/80 pt-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-[#00A859]" />
                    <span>0% platform gateway cut</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-[#00A859]" />
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
                className="card h-full flex flex-col justify-between border-slate-200/90 bg-white p-4 sm:p-8 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0055D4]">
                        <BedDouble className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Smart Room Matrix</h3>
                        <p className="text-xs text-slate-500">Real-time room &amp; occupancy status</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                      83% Full
                    </span>
                  </div>

                  {/* Bed Selector Chips */}
                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
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
                                ? "border-[#0055D4] bg-blue-50/90 shadow-sm"
                                : bed.status === "occupied"
                                ? "border-slate-200 bg-slate-50/80 hover:bg-slate-100/60"
                                : bed.status === "due"
                                ? "border-amber-200 bg-amber-50/80"
                                : "border-emerald-200 bg-emerald-50/80"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">{bed.id}</span>
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  bed.status === "occupied"
                                    ? "bg-[#0055D4]"
                                    : bed.status === "due"
                                    ? "bg-amber-500 animate-ping"
                                    : "bg-emerald-500"
                                }`}
                              />
                            </div>
                            <p className="mt-1 text-[10px] text-slate-500 capitalize">{bed.status}</p>
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
                      className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            Bed {selectedBed.id} • Room {selectedBed.room}
                          </p>
                          <p className="text-[11px] text-slate-600">
                            {selectedBed.tenant ? `Tenant: ${selectedBed.tenant}` : "Ready for check-in"}
                          </p>
                        </div>
                        <span className="text-sm font-extrabold text-[#0055D4]">{selectedBed.rent}/mo</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/80 pt-3">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Vacant
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#0055D4]" /> Occupied
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-500" /> Rent Due
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
                className="card h-full flex flex-col justify-between border-slate-200/90 bg-white p-4 sm:p-8 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2.5 border-b border-slate-200/80 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0055D4]">
                      <BellRing className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">In-App Notices &amp; Alerts</h3>
                      <p className="text-xs text-slate-500">Direct push alerts inside resident app</p>
                    </div>
                  </div>

                  {/* In-App Notification Feed */}
                  <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-xs">
                    {/* In-App Due Notification */}
                    <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#0055D4] flex items-center gap-1">
                          <BellRing className="h-3.5 w-3.5" /> Rent Reminder
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">Due in 2 days</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-700">
                        Room 204 • ₹7,500 due. Pay via UPI or Cash at reception.
                      </p>
                    </div>

                    {/* In-App Payment Log Confirmation */}
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-emerald-700 flex items-center gap-1">
                          <CheckCircle className="h-3.5 w-3.5" /> Payment Received
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold">Verified</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-700">
                        ₹7,500 recorded via UPI. Digital rent receipt #EP-8821 generated.
                      </p>
                    </div>

                    {/* Complaint Status */}
                    <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#0055D4]">Maintenance Ticket</span>
                        <span className="text-emerald-700 text-[10px] font-semibold">Resolved</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-500">
                        WiFi speed issue in 2nd floor router resolved by manager.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Zap className="h-4 w-4 text-[#0055D4]" />
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
                className="card h-full flex flex-col justify-between border-slate-200/90 bg-white p-4 sm:p-8 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0055D4]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Digital Tenant Onboarding &amp; KYC</h3>
                        <p className="text-xs text-slate-500">OTP registration &amp; digital ID verification</p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0055D4]">
                      Paperless Move-in
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center">
                      <Smartphone className="mx-auto h-6 w-6 text-[#0055D4]" />
                      <h4 className="mt-2 text-xs font-bold text-slate-900">OTP Verification</h4>
                      <p className="mt-1 text-[11px] text-slate-600">Instant OTP registration for tenants</p>
                      <span className="mt-2 inline-block rounded bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                        Verified OTP
                      </span>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center">
                      <FileCheck className="mx-auto h-6 w-6 text-[#00A859]" />
                      <h4 className="mt-2 text-xs font-bold text-slate-900">Govt ID Upload</h4>
                      <p className="mt-1 text-[11px] text-slate-600">ID proofs &amp; college / work ID cards</p>
                      <span className="mt-2 inline-block rounded bg-blue-100 px-2 py-0.5 text-[9px] font-semibold text-[#0055D4]">
                        Document Vault
                      </span>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center">
                      <UserCheck className="mx-auto h-6 w-6 text-amber-600" />
                      <h4 className="mt-2 text-xs font-bold text-slate-900">Owner Review</h4>
                      <p className="mt-1 text-[11px] text-slate-600">Review &amp; approve before bed assignment</p>
                      <span className="mt-2 inline-block rounded bg-amber-100 px-2 py-0.5 text-[9px] font-semibold text-amber-800">
                        1-Click Approval
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-4 text-xs text-slate-500">
                  <span>Digital records &amp; declarations safely stored in your owner portal</span>
                  <span className="font-semibold text-[#0055D4]">Bank-grade 256-bit AES encryption</span>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
