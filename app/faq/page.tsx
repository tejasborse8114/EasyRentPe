import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { FAQ_ITEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Easy RentPe — pricing, payments, security, and multi-property management.",
};

export default function FAQPage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">FAQ</p>
            <h1 className="gradient-text mt-3 text-4xl font-bold sm:text-5xl">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Still have questions?"
        subheading="Our team is happy to walk you through anything not covered here."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
