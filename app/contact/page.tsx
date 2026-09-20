import type { Metadata } from "next";
import DemoForm from "@/components/DemoForm";

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

        <div className="mx-auto mt-12 max-w-2xl">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
