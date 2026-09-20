import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wallet, QrCode, ShieldCheck, FileText, UserCheck } from "lucide-react";
import Hero from "@/components/Hero";
import DashboardMockup from "@/components/DashboardMockup";
import FeatureGrid from "@/components/FeatureGrid";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import MiniAppMockup from "@/components/MiniAppMockup";
import ComparisonTable from "@/components/ComparisonTable";
import PropertyTypesShowcase from "@/components/PropertyTypesShowcase";
import StatsBar from "@/components/StatsBar";
import StepsList from "@/components/StepsList";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import StoreBadges from "@/components/StoreBadges";
import {
  HOME_FEATURES,
  HOME_STEPS,
  PROBLEM_SOLUTIONS,
  FEATURE_CATEGORIES,
  PROPERTY_TYPES,
  STATS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Easy RentPe — The Complete Operating System for Hostels & PGs",
  description:
    "Manage tenants, rooms, rent collection, complaints, and agreements — all in one place, with a branded tenant app for residents.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Made Hostel Management Easy"
        headline="The Complete Operating System for Hostels & PGs"
        subheadline="Manage tenants, rooms, rent collection, complaints, and agreements — all in one place. Give your residents a modern app experience while you run everything from a single owner dashboard."
        primaryCta={{ label: "Book a Free Demo", href: "/contact" }}
        secondaryCta={{ label: "See How It Works", href: "/how-it-works" }}
        visual={<DashboardMockup />}
        belowCta={<StoreBadges />}
      />

      <section className="pb-16">
        <div className="container-page space-y-10">
          <PropertyTypesShowcase types={PROPERTY_TYPES} />
          <StatsBar stats={STATS} />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Sound familiar?</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              From daily chaos to a single dashboard
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <ComparisonTable rows={PROBLEM_SOLUTIONS} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Everything you need</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Feature highlights
            </h2>
          </div>
          <div className="mt-12">
            <FeatureGrid features={HOME_FEATURES} />
          </div>

          <div className="mt-20 space-y-20">
            <FeatureSpotlight
              eyebrow="Rent & Payment Collection"
              title="Get paid on time, every time"
              description="Every property is ready to collect rent instantly — tenants pay however suits them, and every payment is verified before it's marked received."
              bullets={FEATURE_CATEGORIES.find((c) => c.heading === "Payments & Rent")!.items}
              visual={
                <MiniAppMockup
                  title="Rent Collection"
                  rows={[
                    { icon: Wallet, label: "UPI, cash" },
                    { icon: QrCode, label: "Default UPI ID per property" },
                    { icon: ShieldCheck, label: "Owner verification before marking paid" },
                  ]}
                />
              }
            />

            <FeatureSpotlight
              eyebrow="Tenant Onboarding & Verification"
              title="Contactless, paperless move-ins"
              description="Replace paper forms and photocopies with OTP-verified registration and digital declarations your team can review in minutes."
              bullets={FEATURE_CATEGORIES.find((c) => c.heading === "Tenant & Onboarding")!.items}
              reverse
              visual={
                <MiniAppMockup
                  title="Tenant Onboarding"
                  rows={[
                    { icon: ShieldCheck, label: "OTP-verified registration" },
                    { icon: FileText, label: "ID proof & declaration upload" },
                    { icon: UserCheck, label: "Owner review & approval" },
                  ]}
                />
              }
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Getting started</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">How it works</h2>
          </div>
          <div className="mt-12">
            <StepsList steps={HOME_STEPS} />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section">
        <div className="container-page">
          <div className="card mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <p className="eyebrow">Pricing</p>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Simple, per-bed pricing. No flat platform fees.
            </h2>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to stop chasing rent and start running your hostel like a business?"
        ctaLabel="Book a Free Demo"
      />
    </>
  );
}
