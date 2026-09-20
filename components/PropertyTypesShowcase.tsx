import type { PropertyType } from "@/lib/content";

// Icon-based cards stand in for real property photos — swap in real photography when available.
export default function PropertyTypesShowcase({ types }: { types: PropertyType[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {types.map(({ icon: Icon, title, description }) => (
        <div key={title} className="card flex h-full flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
            <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-xs text-ink-muted">{description}</p>
        </div>
      ))}
    </div>
  );
}
