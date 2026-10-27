"use client";

import React from "react";

interface MarqueeTickerProps {
  items?: string[];
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
}

const DEFAULT_ITEMS = [
  "UPI & CASH RENT COLLECTION",
  "DIGITAL TENANT ONBOARDING",
  "IN-APP NOTICES & RENT ALERTS",
  "REAL-TIME BED OCCUPANCY",
  "OWNER PAYMENT VERIFICATION",
  "ZERO PLATFORM COMMISSION",
  "5-STAR RESIDENT APP EXPERIENCE",
];

export default function MarqueeTicker({
  items = DEFAULT_ITEMS,
  speed = "normal",
  reverse = false,
}: MarqueeTickerProps) {
  const durationClass =
    speed === "fast" ? "duration-[18s]" : speed === "slow" ? "duration-[45s]" : "duration-[30s]";

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-surface-elevated/60 py-4 backdrop-blur-md select-none">
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

      <div
        className={`flex w-max gap-8 animate-marquee ${durationClass} ${
          reverse ? "direction-reverse" : ""
        } hover:[animation-play-state:paused]`}
      >
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span
              className={`text-sm sm:text-base font-extrabold uppercase tracking-widest ${
                i % 2 === 0
                  ? "gradient-text"
                  : "text-ink/80"
              }`}
            >
              {text}
            </span>
            <span className="text-accent text-sm animate-spin-slow">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
