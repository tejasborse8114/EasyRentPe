import { X, Check } from "lucide-react";
import type { ProblemSolution } from "@/lib/content";

export default function ComparisonTable({ rows }: { rows: ProblemSolution[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card">
      <div className="grid grid-cols-2 divide-x divide-black/5 border-b border-black/5 bg-primary/5">
        <p className="px-5 py-4 text-sm font-semibold text-ink-muted">The old way</p>
        <p className="px-5 py-4 text-sm font-semibold text-primary">With Easy RentPe</p>
      </div>
      <div className="divide-y divide-black/5">
        {rows.map((row) => (
          <div key={row.problem} className="grid grid-cols-2 divide-x divide-black/5">
            <div className="flex items-start gap-2 px-5 py-4">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
              <p className="text-sm text-ink-muted">{row.problem}</p>
            </div>
            <div className="flex items-start gap-2 px-5 py-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{row.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
