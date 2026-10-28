import { ShieldCheck, Zap, Smartphone, Headphones } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Your data is always safe with us",
  },
  {
    icon: Zap,
    title: "Save Time",
    desc: "Automate daily operations",
  },
  {
    icon: Smartphone,
    title: "Access Anywhere",
    desc: "Web and mobile apps",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "We're here when you need us",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/60 py-8">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F0] text-[#00A859]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B2545]">{title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
