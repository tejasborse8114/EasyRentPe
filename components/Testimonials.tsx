"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const PLACEHOLDER_LOGOS = ["Property Group A", "City Hostels", "PG Nest", "Urban Stays"];

// Placeholder social proof strip until real customer testimonials/logos are available.
export default function Testimonials() {
  return (
    <section className="section border-y border-white/10 bg-surface-elevated">
      <div className="container-page text-center">
        <p className="text-sm font-medium text-ink-muted">
          Trusted by hostel and PG owners managing properties across the city.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PLACEHOLDER_LOGOS.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 px-4 py-6 text-ink-muted"
            >
              <Building2 className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
