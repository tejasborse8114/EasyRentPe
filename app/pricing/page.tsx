import type { Metadata } from "next";
import PricingTable from "@/components/PricingTable";
import CTASection from "@/components/CTASection";
import { PRICING_PLANS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent, per-bed pricing for Easy RentPe. Pay only for the beds you manage — no setup fees, no long-term lock-in.",
};

export default function PricingPage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Pricing</p>
            <h1 className="gradient-text mt-3 text-4xl font-bold sm:text-5xl">
              Simple, Transparent, Per-Bed Pricing
            </h1>
            <p className="mt-4 text-lg text-ink-muted">
              Pay only for the beds you manage. No setup fees. No long-term lock-in.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-primary/10 bg-primary/5 p-6 text-center">
            <p className="text-3xl font-bold text-primary">
              ₹25<span className="text-base font-medium text-ink-muted"> / bed / month</span>
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Monthly platform fee calculated per bed, billed monthly to the owner.
            </p>
          </div>

          <div className="mt-16">
            <PricingTable plans={PRICING_PLANS} />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-muted">
            Billing is calculated automatically per bed each cycle — no manual invoicing
            needed.
          </p>
        </div>
      </section>

      <CTASection
        heading="Have questions about your plan?"
        subheading="Talk to our sales team or book a free personalized demo."
        ctaLabel="Talk to Sales"
      />
    </>
  );
}
