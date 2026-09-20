import type { Metadata } from "next";
import PersonaHero from "@/components/PersonaHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "For PG Owners",
  description:
    "Easy RentPe helps PG owners manage agreements and lock-in periods, collect rent via UPI, track utility dues fairly, and keep residents happy.",
};

const BULLETS = [
  "Digital agreements & renewals",
  "UPI-first rent collection",
  "Utility billing accuracy",
  "Resident-facing app experience",
  "Penalty & rule enforcement",
];

export default function PgOwnersPage() {
  return (
    <>
      <PersonaHero
        eyebrow="For PG Owners"
        headline="Give Your PG Residents a Home, Not a Headache"
        body="PG residents expect a more personal, service-driven experience. Easy RentPe helps you manage agreements and lock-in periods, collect rent via UPI without chasing anyone, track electricity/utility dues fairly, and keep residents happy with a dedicated app for complaints, notices, and payments."
        bullets={BULLETS}
        ctaLabel="See a PG Owner Demo"
      />

      <CTASection
        heading="See how Easy RentPe supports your PG residents"
        subheading="Give residents a modern experience while you stay in control."
        ctaLabel="See a PG Owner Demo"
      />
    </>
  );
}
