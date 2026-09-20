import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Building2 className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent">
          404 error
        </p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
          This page has moved out
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          We couldn&apos;t find the page you&apos;re looking for. It may have been moved or no
          longer exists.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
