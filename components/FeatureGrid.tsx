import type { Feature } from "@/lib/content";
import FeatureCard from "@/components/FeatureCard";

type FeatureGridProps = {
  features: Feature[];
  columns?: 2 | 3;
};

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols =
    columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <FeatureCard
            key={feature.title}
            icon={<Icon className="h-5 w-5 text-primary" aria-hidden="true" />}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        );
      })}
    </div>
  );
}
