import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  IndianRupee,
  BedDouble,
  Users,
  CheckCircle,
  Clock,
  ChevronDown,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export default function ConceptHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center rounded-full bg-[#E6F7F0] px-3.5 py-1 text-xs font-bold text-[#00A859]">
              Smart Hostel &amp; PG Management
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B2545] leading-[1.12]">
              Manage your PG.
              <br />
              <span className="text-[#00A859]">Simplify your life.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
              Manage tenants, collect rent, track expenses and resolve complaints — all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="btn-primary rounded-xl px-7 py-3.5 text-base font-bold shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/features"
                className="btn-secondary rounded-xl px-6 py-3.5 text-base font-semibold border-slate-300 text-[#0B2545]"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* Right Column: Realistic Laptop & Mobile Mockup */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            <div className="relative w-full max-w-2xl">
              
              {/* Laptop Frame */}
              <div className="relative rounded-2xl border border-slate-300 bg-slate-900 p-2 sm:p-2.5 shadow-2xl">
                {/* Webcam Notch */}
                <div className="mx-auto mb-1.5 flex h-1.5 w-1.5 items-center justify-center rounded-full bg-slate-700" />
                
                {/* Screen Canvas */}
                <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs">
                  
                  {/* Laptop OS / App Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-[#00A859]" />
                      <span className="font-bold text-[#0B2545] text-xs">EasyRentPe</span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      <span>Sunrise PG</span>
                      <ChevronDown className="h-3 w-3 text-slate-400" />
                    </div>
                  </div>

                  {/* Laptop Dashboard Interior */}
                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-[#0B2545]">Dashboard</h3>
                      <span className="text-[10px] text-slate-400 font-medium">Updated just now</span>
                    </div>

                    {/* 3 Metric Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {/* Total Occupancy */}
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm">
                        <p className="text-[10px] text-slate-500 font-semibold">Total Occupancy</p>
                        <div className="mt-1 flex items-baseline gap-1.5">
                          <span className="text-sm sm:text-base font-black text-[#0B2545]">18</span>
                          <span className="text-[10px] text-slate-400">/ 20</span>
                        </div>
                        <span className="mt-1 inline-block rounded-full bg-[#E6F7F0] px-1.5 py-0.2 text-[9px] font-bold text-[#00A859]">
                          90%
                        </span>
                      </div>

                      {/* Rent Collected */}
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm">
                        <p className="text-[10px] text-slate-500 font-semibold">Rent Collected</p>
                        <p className="mt-1 text-sm sm:text-base font-black text-[#00A859]">₹ 1,24,000</p>
                        <p className="text-[9px] text-slate-400">This month</p>
                      </div>

                      {/* Pending Dues */}
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm">
                        <p className="text-[10px] text-slate-500 font-semibold">Pending Dues</p>
                        <p className="mt-1 text-sm sm:text-base font-black text-rose-600">₹ 18,000</p>
                        <p className="text-[9px] text-slate-400">3 tenants</p>
                      </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {/* Room Status Donut */}
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm">
                        <p className="text-[10px] font-bold text-[#0B2545] mb-2">Room Status</p>
                        <div className="flex items-center gap-3">
                          {/* Mini visual donut */}
                          <div className="relative h-12 w-12 rounded-full border-4 border-[#00A859] border-t-slate-200 flex items-center justify-center">
                            <span className="text-[9px] font-black text-[#0B2545]">90%</span>
                          </div>
                          <div className="text-[9px] space-y-0.5 text-slate-600">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00A859]" />
                              <span>Occupied: 18</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                              <span>Vacant: 2</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Revenue Overview Bars */}
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm">
                        <p className="text-[10px] font-bold text-[#0B2545] mb-2">Revenue Overview</p>
                        <div className="flex items-end justify-between h-10 gap-1 px-1">
                          {[
                            { month: "Jan", h: "45%" },
                            { month: "Feb", h: "60%" },
                            { month: "Mar", h: "55%" },
                            { month: "Apr", h: "75%" },
                            { month: "May", h: "85%" },
                            { month: "Jun", h: "100%" },
                          ].map((b) => (
                            <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                style={{ height: b.h }}
                                className="w-full rounded-t bg-[#0B2545]/80 hover:bg-[#00A859] transition-colors"
                              />
                              <span className="text-[8px] text-slate-400">{b.month}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm">
                      <p className="text-[10px] font-bold text-[#0B2545] mb-2">Recent Activities</p>
                      <div className="space-y-1.5 text-[9px]">
                        <div className="flex items-center justify-between border-b border-slate-50 pb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00A859]" />
                            <span className="font-semibold text-slate-700">Rahul Sharma paid rent</span>
                          </div>
                          <span className="rounded bg-[#E6F7F0] px-1.5 py-0.2 font-bold text-[#00A859]">Paid</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                            <span className="font-semibold text-slate-700">Water leakage complaint</span>
                          </div>
                          <span className="rounded bg-amber-50 px-1.5 py-0.2 font-bold text-amber-600">Pending</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="mx-auto h-2.5 w-3/4 rounded-b-xl bg-slate-400 shadow-md" />

              {/* Overlapping Realistic Phone Mockup on Right */}
              <div className="hidden sm:block absolute -right-6 bottom-2 w-48 rounded-3xl border-4 border-slate-900 bg-white p-2.5 shadow-2xl">
                {/* Notch */}
                <div className="mx-auto mb-2 h-2.5 w-12 rounded-full bg-slate-900" />
                
                {/* Mobile screen */}
                <div className="space-y-2 text-[10px]">
                  <div>
                    <h5 className="font-extrabold text-[#0B2545]">Hello, Rahul</h5>
                    <p className="text-[8px] text-slate-400">Welcome to Sunrise PG</p>
                  </div>

                  <div className="rounded-lg bg-slate-50 border border-slate-100 p-2">
                    <p className="text-[8px] text-slate-400">Your Room</p>
                    <p className="font-bold text-[#0B2545]">Room 101 • Single</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between rounded-lg bg-[#0B2545] p-1.5 text-white font-bold text-[9px]">
                      <span>Pay Rent</span>
                      <IndianRupee className="h-3 w-3" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-100 p-1.5 text-slate-700 font-semibold text-[8px]">
                      <span>Raise Complaint</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-100 p-1.5 text-slate-700 font-semibold text-[8px]">
                      <span>View Notices</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
