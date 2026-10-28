"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/lib/content";

export default function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 sm:max-w-2xl">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`card flex h-full flex-col border bg-white p-7 shadow-sm transition-all rounded-2xl ${
            plan.highlighted
              ? "border-2 border-[#00A859] shadow-md ring-2 ring-[#00A859]/20"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          {plan.highlighted && (
            <span className="mb-3 inline-block w-fit rounded-full bg-[#E6F7F0] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#00A859]">
              Most popular
            </span>
          )}
          <h3 className="text-xl font-extrabold text-[#0B2545]">{plan.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{plan.bestFor}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {plan.included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00A859] font-bold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={plan.highlighted ? "btn-primary mt-8 w-full text-center" : "btn-secondary mt-8 w-full text-center"}
          >
            Talk to Sales
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
