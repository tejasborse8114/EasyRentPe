import type { Metadata } from "next";
import { Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import { FEATURE_CATEGORIES, FEATURE_CATEGORY_ICONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the full Easy RentPe feature set: tenant onboarding, rooms & properties, payments, dues & utilities, complaints, agreements, team permissions, notifications, and reporting.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Full feature breakdown</p>
            <h1 className="gradient-text mt-3 text-4xl font-bold sm:text-5xl">
              Everything you need to run a hostel or PG
            </h1>
            <p className="mt-4 text-lg text-ink-muted">
              One platform covering every part of day-to-day operations — from onboarding
              tenants to collecting rent and resolving complaints.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {FEATURE_CATEGORIES.map((category, index) => {
              const Icon = FEATURE_CATEGORY_ICONS[index];
              return (
                <div key={category.heading} className="card h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h2 className="text-lg font-semibold text-ink">{category.heading}</h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="See every feature in action"
        subheading="Book a walkthrough tailored to your property and workflow."
        ctaLabel="Book a Free Demo"
      />
    </>
  );
}
