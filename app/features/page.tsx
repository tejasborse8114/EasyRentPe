import type { Metadata } from "next";
import { Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import { FEATURE_CATEGORIES, FEATURE_CATEGORY_ICONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the full Easy RentPe feature set: tenant onboarding, rooms & properties, payments, dues & utilities, complaints, agreements, team permissions, notifications, and reporting.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features | Easy RentPe",
    description:
      "Explore the full Easy RentPe feature set: tenant onboarding, rooms & properties, payments, dues & utilities, complaints, agreements, team permissions, notifications, and reporting.",
    url: "/features",
  },
  twitter: {
    title: "Features | Easy RentPe",
    description:
      "Explore the full Easy RentPe feature set: tenant onboarding, rooms & properties, payments, dues & utilities, complaints, agreements, team permissions, notifications, and reporting.",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859] mb-3">
              Full feature breakdown
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545]">
              Everything you need to run a hostel or PG
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-500">
              One platform covering every part of day-to-day operations — from onboarding
              tenants to collecting rent and resolving complaints.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {FEATURE_CATEGORIES.map((category, index) => {
              const Icon = FEATURE_CATEGORY_ICONS[index];
              return (
                <div key={category.heading} className="card h-full border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F7F0] text-[#00A859]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h2 className="text-lg font-bold text-[#0B2545]">{category.heading}</h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00A859] font-bold" aria-hidden="true" />
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
