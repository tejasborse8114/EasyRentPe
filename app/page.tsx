import type { Metadata } from "next";
import ConceptHero from "@/components/ConceptHero";
import TrustStrip from "@/components/TrustStrip";
import ConceptFeatureCards from "@/components/ConceptFeatureCards";
import ConceptHowItWorks from "@/components/ConceptHowItWorks";
import ConceptMobileAppSection from "@/components/ConceptMobileAppSection";

export const metadata: Metadata = {
  title: "Easy RentPe — Manage your PG. Simplify your life.",
  description:
    "Manage tenants, collect rent, track expenses and resolve complaints — all in one place with Easy RentPe.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Easy RentPe — Manage your PG. Simplify your life.",
    description:
      "Manage tenants, collect rent, track expenses and resolve complaints — all in one place with Easy RentPe.",
    url: "/",
  },
  twitter: {
    title: "Easy RentPe — Manage your PG. Simplify your life.",
    description:
      "Manage tenants, collect rent, track expenses and resolve complaints — all in one place with Easy RentPe.",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero: Manage your PG. Simplify your life. with Dashboard & Mobile Preview */}
      <ConceptHero />

      {/* 2. Trust strip: Security, time savings, mobile access and support */}
      <TrustStrip />

      {/* 3. Feature cards: Tenant management, rent tracking, complaints and expense reports */}
      <ConceptFeatureCards />

      {/* 4. How it works: Add property, onboard tenants and manage operations */}
      <ConceptHowItWorks />

      {/* 5. Mobile app section: Dedicated Google Play and Apple App Store download buttons */}
      <ConceptMobileAppSection />
    </main>
  );
}
