import type { Metadata } from "next";
import PersonaHero from "@/components/PersonaHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "For Hostel Owners",
  description:
    "Easy RentPe is built for hostels with high tenant turnover, shared rooms, and constant move-ins/outs — fast onboarding, flexible sharing, and real-time occupancy.",
};

const BULLETS = [
  "Fast onboarding",
  "Flexible sharing types",
  "Occupancy at a glance",
  "Complaint resolution",
  "Rent & dues automation",
];

export default function HostelOwnersPage() {
  return (
    <>
      <PersonaHero
        eyebrow="For Hostel Owners"
        headline="Built for Hostels That Never Stop Moving"
        body="Hostels deal with high tenant turnover, shared rooms, and constant move-ins/outs. Easy RentPe gives you: fast tenant onboarding with OTP verification, flexible room sharing (2/3/4-bed, dormitory), real-time occupancy so you always know which beds are free, and a complaints system so maintenance issues don't pile up."
        bullets={BULLETS}
        ctaLabel="See a Hostel Owner Demo"
      />

      <CTASection
        heading="See how Easy RentPe keeps up with your hostel"
        subheading="From same-day check-ins to shared-room billing, we've got it covered."
        ctaLabel="See a Hostel Owner Demo"
      />
    </>
  );
}
