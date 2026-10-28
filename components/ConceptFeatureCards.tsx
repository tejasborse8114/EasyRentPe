import Link from "next/link";
import { Users, IndianRupee, MessageSquare, FileText, ArrowRight } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Tenant Management",
    desc: "Keep tenant records organized and always up to date.",
    href: "/features",
  },
  {
    icon: IndianRupee,
    title: "Rent Tracking",
    desc: "Collect rent online and track dues in real-time.",
    href: "/features",
  },
  {
    icon: MessageSquare,
    title: "Complaints",
    desc: "Resolve tenant issues faster and keep everyone informed.",
    href: "/features",
  },
  {
    icon: FileText,
    title: "Expense Report",
    desc: "Track and manage property expenses with ease.",
    href: "/features",
  },
];

export default function ConceptFeatureCards() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-left sm:text-left mb-12">
          <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859] mb-3">
            Powerful Features
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
            Everything you need to manage your PG
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Simple tools to keep your property running smoothly and efficiently.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#00A859]/40 hover:shadow-md"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F7F0] text-[#00A859] transition-colors group-hover:bg-[#00A859] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0B2545]">{title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>

              <div className="mt-8 flex items-center text-sm font-semibold text-[#00A859] group-hover:text-[#008A48]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F7F0] text-[#00A859] transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
