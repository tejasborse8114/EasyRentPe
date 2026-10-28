"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Users,
  BedDouble,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import ThreeDTiltCard from "./ThreeDTiltCard";

interface Property3D {
  id: string;
  name: string;
  category: string;
  beds: number;
  occupancy: number;
  avgRent: string;
  amenities: string[];
  accentColor: string;
}

const PROPERTIES_3D: Property3D[] = [
  {
    id: "coliving",
    name: "Apex Luxury Co-Living",
    category: "Modern Working Professionals",
    beds: 120,
    occupancy: 96,
    avgRent: "₹12,500/mo",
    amenities: ["Attached Bathrooms", "High-speed WiFi", "Housekeeping", "Biometric Entry"],
    accentColor: "#8B5CF6",
  },
  {
    id: "hostel",
    name: "Campus Edge Student Hostel",
    category: "College & University Students",
    beds: 180,
    occupancy: 92,
    avgRent: "₹7,800/mo",
    amenities: ["3-Tier Sharing", "Mess & Meals", "Study Lounge", "24/7 Security"],
    accentColor: "#F59E0B",
  },
  {
    id: "executive",
    name: "Grand Residency Executive PG",
    category: "Single & Double Rooms",
    beds: 65,
    occupancy: 98,
    avgRent: "₹14,000/mo",
    amenities: ["Air Conditioned", "Power Backup", "Gym Access", "Desk Support"],
    accentColor: "#10B981",
  },
];

export default function ThreeDPropertyShowcase() {
  const [selectedProperty, setSelectedProperty] = useState<Property3D>(PROPERTIES_3D[0]);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-y border-violet-900/30 bg-[#06040A]">
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A78BFA]">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Multi-Property Operating System</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Scale from 20 beds to <span className="gradient-text">2,000+ beds</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Whether you run a single student hostel or a multi-city co-living network, manage all your properties, managers, and tenants with full 3D spatial clarity.
          </p>

          {/* 3D Property Switcher Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {PROPERTIES_3D.map((prop) => {
              const isSelected = selectedProperty.id === prop.id;
              return (
                <button
                  key={prop.id}
                  type="button"
                  onClick={() => setSelectedProperty(prop)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] text-white shadow-glow scale-105"
                      : "border border-violet-900/40 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  <span>{prop.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Property Stage Card */}
        <div className="mt-12 sm:mt-16 mx-auto max-w-4xl">
          <ThreeDTiltCard maxTilt={10} scale={1.02}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProperty.id}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-[#120B24] via-[#0E0A1A] to-[#06040A] p-6 sm:p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  {/* Left Column: Property Metrics & Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-bold text-[#A78BFA] border border-violet-500/30">
                        {selectedProperty.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-300">
                        <TrendingUp className="h-4 w-4 text-amber-400" />
                        {selectedProperty.occupancy}% Occupancy
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProperty.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Configured with instant UPI collection, contactless OTP check-ins, automated utility metering, and manager roles.
                      </p>
                    </div>

                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-violet-900/40 bg-white/5 p-3 text-center">
                        <BedDouble className="mx-auto h-5 w-5 text-[#A78BFA]" />
                        <p className="mt-1 text-lg font-black text-white">{selectedProperty.beds}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-semibold">Total Beds</p>
                      </div>

                      <div className="rounded-2xl border border-violet-900/40 bg-white/5 p-3 text-center">
                        <Users className="mx-auto h-5 w-5 text-amber-400" />
                        <p className="mt-1 text-lg font-black text-white">
                          {Math.round((selectedProperty.beds * selectedProperty.occupancy) / 100)}
                        </p>
                        <p className="text-[10px] text-slate-400 uppercase font-semibold">Tenants</p>
                      </div>

                      <div className="rounded-2xl border border-violet-900/40 bg-white/5 p-3 text-center">
                        <ShieldCheck className="mx-auto h-5 w-5 text-emerald-400" />
                        <p className="mt-1 text-lg font-black text-white">0%</p>
                        <p className="text-[10px] text-slate-400 uppercase font-semibold">Disputes</p>
                      </div>
                    </div>

                    {/* Amenities Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedProperty.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="rounded-lg border border-violet-800/40 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                        >
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: 3D Holographic Rent Card Widget */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center">
                    <div
                      style={{ transform: "translateZ(35px)" }}
                      className="w-full rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-violet-500/10 to-transparent p-6 text-center shadow-lg"
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Average Property Rate
                      </p>
                      <p className="mt-2 text-3xl sm:text-4xl font-black text-white">
                        {selectedProperty.avgRent}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        ₹25/bed flat platform fee. No setup fee.
                      </p>

                      <div className="mt-6">
                        <a
                          href="/contact"
                          className="btn-primary w-full text-center text-xs sm:text-sm font-bold"
                        >
                          Request Walkthrough for This Property
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </ThreeDTiltCard>
        </div>
      </div>
    </section>
  );
}
