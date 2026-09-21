import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/lib/content";

export default function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`card flex h-full flex-col ${
            plan.highlighted ? "scale-[1.02] border-2 border-accent shadow-glow" : ""
          }`}
        >
          {plan.highlighted && (
            <span className="mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Most popular
            </span>
          )}
          <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
          <p className="mt-1 text-sm text-ink-muted">{plan.bestFor}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {plan.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={plan.highlighted ? "btn-primary mt-8 w-full" : "btn-secondary mt-8 w-full"}
          >
            Talk to Sales
          </Link>
        </div>
      ))}
    </div>
  );
}
