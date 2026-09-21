import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import DemoForm from "@/components/DemoForm";
import { SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Request a Demo",
  description:
    "Tell us about your property and we'll set up a personalized Easy RentPe walkthrough.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Request a demo</p>
          <h1 className="gradient-text mt-3 text-4xl font-bold sm:text-5xl">
            See Easy RentPe in Action
          </h1>
          <p className="mt-4 text-lg text-ink-muted">
            Tell us about your property and we&apos;ll set up a personalized walkthrough.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-4">
          <a href={`tel:${SUPPORT_PHONE_TEL}`} className="btn-secondary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SUPPORT_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-secondary">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {SUPPORT_EMAIL}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            WhatsApp Us
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
