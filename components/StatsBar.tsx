import type { Stat } from "@/lib/content";

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface-elevated shadow-card sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
      {stats.map((stat) => (
        <div key={stat.label} className="px-6 py-6 text-center">
          <p className="gradient-text text-2xl font-bold">{stat.value}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
