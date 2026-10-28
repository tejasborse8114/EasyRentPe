import type { Metadata } from "next";
import StepsList from "@/components/StepsList";
import CTASection from "@/components/CTASection";
import { HOW_IT_WORKS_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From sign-up to scaling with managers — see how Easy RentPe gets your hostel or PG up and running.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Easy RentPe",
    description:
      "From sign-up to scaling with managers — see how Easy RentPe gets your hostel or PG up and running.",
    url: "/how-it-works",
  },
  twitter: {
    title: "How It Works | Easy RentPe",
    description:
      "From sign-up to scaling with managers — see how Easy RentPe gets your hostel or PG up and running.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859] mb-3">
              Onboarding
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545]">
              Get up and running in a few simple steps
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-500">
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
