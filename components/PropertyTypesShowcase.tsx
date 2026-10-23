import type { PropertyType } from "@/lib/content";
import PropertyTypeCard from "@/components/PropertyTypeCard";

// Icon-based cards stand in for real property photos — swap in real photography when available.
export default function PropertyTypesShowcase({ types }: { types: PropertyType[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {types.map(({ icon: Icon, title, description }, index) => (
        <PropertyTypeCard
          key={title}
          icon={<Icon className="h-7 w-7 text-primary" aria-hidden="true" />}
          title={title}
          description={description}
          index={index}
        />
      ))}
    </div>
  );
}
