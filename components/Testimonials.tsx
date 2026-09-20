import { Building2 } from "lucide-react";

const PLACEHOLDER_LOGOS = ["Property Group A", "City Hostels", "PG Nest", "Urban Stays"];

// Placeholder social proof strip until real customer testimonials/logos are available.
export default function Testimonials() {
  return (
    <section className="section border-y border-black/5 bg-white">
      <div className="container-page text-center">
        <p className="text-sm font-medium text-ink-muted">
          Trusted by hostel and PG owners managing properties across the city.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PLACEHOLDER_LOGOS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-black/10 px-4 py-6 text-ink-muted"
            >
              <Building2 className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
