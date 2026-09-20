import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

type PersonaPageProps = {
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
};

export default function PersonaHero({
  eyebrow,
  headline,
  body,
  bullets,
  ctaLabel,
}: PersonaPageProps) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="gradient-text mt-3 text-4xl font-bold sm:text-5xl">{headline}</h1>
          <p className="mt-6 text-lg text-ink-muted">{body}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {bullets.map((bullet) => (
            <div key={bullet} className="card flex items-center gap-3">
              <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-ink">{bullet}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="btn-primary">
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
