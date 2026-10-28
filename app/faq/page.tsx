import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { FAQ_ITEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Easy RentPe — pricing, payments, security, and multi-property management.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Easy RentPe",
    description:
      "Answers to common questions about Easy RentPe — pricing, payments, security, and multi-property management.",
    url: "/faq",
  },
  twitter: {
    title: "FAQ | Easy RentPe",
    description:
      "Answers to common questions about Easy RentPe — pricing, payments, security, and multi-property management.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859] mb-3">FAQ</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] mt-2">
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
