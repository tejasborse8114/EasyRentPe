import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import DemoForm from "@/components/DemoForm";
import { SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Request a Demo",
  description:
    "Tell us about your property and we'll set up a personalized Easy RentPe walkthrough.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact / Request a Demo | Easy RentPe",
    description:
      "Tell us about your property and we'll set up a personalized Easy RentPe walkthrough.",
    url: "/contact",
  },
  twitter: {
    title: "Contact / Request a Demo | Easy RentPe",
    description:
      "Tell us about your property and we'll set up a personalized Easy RentPe walkthrough.",
  },
};

export default function ContactPage() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859] mb-3">
            Request a demo
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545]">
            See Easy RentPe in Action
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Tell us about your property and we&apos;ll set up a personalized walkthrough.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-4">
          <a href={`tel:${SUPPORT_PHONE_TEL}`} className="btn-secondary flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#00A859]" aria-hidden="true" />
            <span>Call: {SUPPORT_PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-secondary flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#00A859]" aria-hidden="true" />
            <span>Email: {SUPPORT_EMAIL}</span>
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
