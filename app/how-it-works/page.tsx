import type { Metadata } from "next";
import StepsList from "@/components/StepsList";
import CTASection from "@/components/CTASection";
import { HOW_IT_WORKS_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From sign-up to scaling with managers — see how Easy RentPe gets your hostel or PG up and running.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Onboarding</p>
            <h1 className="gradient-text mt-3 text-4xl font-bold sm:text-5xl">
              Get up and running in a few simple steps
            </h1>
            <p className="mt-4 text-lg text-ink-muted">
              From adding your first property to scaling with a team of managers.
            </p>
          </div>

          <div className="mt-16">
            <StepsList steps={HOW_IT_WORKS_STEPS} />
          </div>
        </div>
      </section>

      <CTASection
        heading="See it set up in real time"
        subheading="We'll walk you through onboarding your first property, live."
        ctaLabel="Book a Free Demo"
      />
    </>
  );
}
