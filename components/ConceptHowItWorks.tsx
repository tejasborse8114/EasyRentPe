import { Home, Users, LineChart, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "1",
    icon: Home,
    title: "Add Your Property",
    desc: "Set up your hostel or PG details in a few clicks.",
  },
  {
    step: "2",
    icon: Users,
    title: "Onboard Tenants",
    desc: "Add tenant details and assign rooms easily.",
  },
  {
    step: "3",
    icon: LineChart,
    title: "Manage Everything",
    desc: "Track rent, expenses, complaints and more — from your dashboard.",
  },
];

export default function ConceptHowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="container-page">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-left mb-14">
          <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859] mb-3">
            Get Started in Minutes
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Start managing your PG in just three simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex flex-col items-start bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                {/* Step badge + Arrow indicator */}
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A859] text-sm font-bold text-white shadow-sm">
                    {step.step}
                  </span>
                  {idx < STEPS.length - 1 && (
                    <ArrowRight className="hidden md:block h-5 w-5 text-slate-400" aria-hidden="true" />
                  )}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#0B2545] mb-5">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-bold text-[#0B2545]">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
