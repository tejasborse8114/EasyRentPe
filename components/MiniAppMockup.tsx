import type { LucideIcon } from "lucide-react";

type Row = {
  icon: LucideIcon;
  label: string;
};

// Generic phone-shaped placeholder used to illustrate a feature without a real app screenshot.
export default function MiniAppMockup({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div
        className="glow-orb -inset-4 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-black/5 bg-white p-5 shadow-glow-primary">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{title}</p>
        <div className="mt-4 space-y-3">
          {rows.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl bg-primary/5 p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-ink">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
