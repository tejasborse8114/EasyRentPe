import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Wallet,
  QrCode,
  ShieldCheck,
  FileText,
  UserCheck,
  Star,
  CheckCircle2,
  Banknote,
} from "lucide-react";
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
import MarqueeTicker from "@/components/MarqueeTicker";
import InteractiveBentoShowcase from "@/components/InteractiveBentoShowcase";
import {
  HOME_FEATURES,
  HOME_STEPS,
  PROBLEM_SOLUTIONS,
  FEATURE_CATEGORIES,
  PROPERTY_TYPES,
  STATS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Easy RentPe — Run Your Hostels & PGs Smarter, Collect Rent 3x Faster",
  description:
    "The all-in-one operating system for hostels & PGs. Collect rent via UPI and Cash, manage digital tenant onboarding, room allocation, and maintenance complaints from a single dashboard.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Easy RentPe — Run Your Hostels & PGs Smarter, Collect Rent 3x Faster",
    description:
      "The all-in-one operating system for hostels & PGs. Collect rent via UPI and Cash, manage digital tenant onboarding, room allocation, and maintenance complaints from a single dashboard.",
    url: "/",
  },
  twitter: {
    title: "Easy RentPe — Run Your Hostels & PGs Smarter, Collect Rent 3x Faster",
    description:
      "The all-in-one operating system for hostels & PGs. Collect rent via UPI and Cash, manage digital tenant onboarding, room allocation, and maintenance complaints from a single dashboard.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-accent uppercase backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span>#1 SMART PG &amp; HOSTEL PLATFORM</span>
          </div>
        }
        headline={
          <>
            Run Your Hostels &amp; PGs Smarter,{" "}
            <span className="gradient-text">Collect Rent 3x Faster</span>
          </>
        }
        subheadline="Collect rent effortlessly via UPI and Cash, verify tenants with OTP & digital ID documents, track room occupancy live, and manage complaints without chaotic phone calls. All from one unified owner dashboard."
        primaryCta={{ label: "Book a Free Demo", href: "/contact" }}
        secondaryCta={{ label: "See How It Works", href: "/how-it-works" }}
        visual={<DashboardMockup />}
        belowCta={
          <div className="space-y-5">
            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-ink-muted">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9/5</span>
                <span>(500+ PG owners)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Zero setup fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Banknote className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>UPI &amp; Cash Collection</span>
              </div>
            </div>

            {/* Store badges */}
            <div className="pt-1">
              <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                Available on Mobile &amp; Web
              </p>
              <StoreBadges />
            </div>
          </div>
        }
      />

      {/* Kinetic marquee ticker */}
      <MarqueeTicker speed="normal" />

      {/* Interactive 3D Bento Grid */}
      <InteractiveBentoShowcase />

      <section className="pb-16 pt-8">
        <div className="container-page space-y-10">
          <PropertyTypesShowcase types={PROPERTY_TYPES} />
          <StatsBar stats={STATS} />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Sound familiar?</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              From daily chaos to a single dashboard
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <ComparisonTable rows={PROBLEM_SOLUTIONS} />
          </div>
        </div>
      </section>

      {/* Reverse Marquee Ticker */}
      <MarqueeTicker
        speed="slow"
        reverse
        items={[
          "DIGITAL TENANT ONBOARDING",
          "UPI & CASH PAYMENT TRACKING",
          "AUTOMATED ELECTRICITY BILLING",
          "IN-APP NOTICES & COMPLAINTS",
          "ROOM OCCUPANCY MATRIX",
          "DIGITAL RENTAL DECLARATIONS",
        ]}
      />

      <section className="section border-y border-white/10 bg-surface-elevated/70">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Everything you need</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
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
              description="Every property is ready to collect rent instantly — tenants pay via UPI or Cash directly, and every payment is verified before it's marked received."
              bullets={FEATURE_CATEGORIES.find((c) => c.heading === "Payments & Rent")!.items}
              visual={
                <MiniAppMockup
                  title="Rent Collection"
                  rows={[
                    { icon: <Wallet className="h-4 w-4 text-accent" aria-hidden="true" />, label: "UPI & Cash payments accepted" },
                    { icon: <QrCode className="h-4 w-4 text-accent" aria-hidden="true" />, label: "Default UPI ID / QR per property" },
                    {
                      icon: <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />,
                      label: "Owner verification before marking paid",
                    },
                  ]}
                />
              }
            />

            <FeatureSpotlight
              eyebrow="Tenant Onboarding & Verification"
              title="Contactless, paperless move-ins"
              description="Replace paper forms and lost photocopies with OTP registration, digital ID uploads, and tenant declarations your team can review in minutes."
              bullets={FEATURE_CATEGORIES.find((c) => c.heading === "Tenant & Onboarding")!.items}
              reverse
              visual={
                <MiniAppMockup
                  title="Tenant Onboarding"
                  rows={[
                    { icon: <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />, label: "OTP-verified registration" },
                    { icon: <FileText className="h-4 w-4 text-accent" aria-hidden="true" />, label: "Govt ID & declaration upload" },
                    { icon: <UserCheck className="h-4 w-4 text-accent" aria-hidden="true" />, label: "Owner review & approval" },
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
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">How it works</h2>
          </div>
          <div className="mt-12">
            <StepsList steps={HOME_STEPS} />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section">
        <div className="container-page">
          <div className="card mx-auto flex max-w-3xl flex-col items-center gap-4 text-center border border-white/10 bg-surface-elevated/90 shadow-card">
            <p className="eyebrow">Pricing</p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
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
