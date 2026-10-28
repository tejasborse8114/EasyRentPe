import StoreBadges from "@/components/StoreBadges";
import { Smartphone, ShieldCheck, IndianRupee, Bell, MessageSquare, UserCheck } from "lucide-react";

export default function ConceptMobileAppSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-[#EBF7F2] border border-[#CDEEDF] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column: Overlapping Mobile Mockups */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative flex items-center justify-center gap-4 sm:gap-6">
                
                {/* Phone 1: Owner / Tenant Overview */}
                <div className="w-52 sm:w-60 rounded-3xl border-4 border-slate-900 bg-white p-3 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  {/* Notch */}
                  <div className="mx-auto h-3 w-16 rounded-full bg-slate-900 mb-3" />
                  
                  {/* Screen Content */}
                  <div className="space-y-3">
                    <div className="rounded-xl bg-[#0B2545] p-3 text-white">
                      <p className="text-[10px] uppercase font-bold text-slate-300">EasyRentPe</p>
                      <h4 className="text-sm font-bold mt-0.5">Welcome Back</h4>
                      <p className="text-[10px] text-slate-300">Manage your PG all in one place</p>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 p-2 text-slate-800 font-semibold">
                        <IndianRupee className="h-3.5 w-3.5 text-[#00A859]" />
                        <span>Pay Rent via UPI</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 p-2 text-slate-800 font-semibold">
                        <MessageSquare className="h-3.5 w-3.5 text-[#00A859]" />
                        <span>Raise Complaint</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 p-2 text-slate-800 font-semibold">
                        <Bell className="h-3.5 w-3.5 text-[#00A859]" />
                        <span>View Notices</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 p-2 text-slate-800 font-semibold">
                        <UserCheck className="h-3.5 w-3.5 text-[#00A859]" />
                        <span>Profile &amp; KYC</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2: Room & Quick Actions */}
                <div className="hidden sm:block w-52 sm:w-60 rounded-3xl border-4 border-slate-900 bg-white p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {/* Notch */}
                  <div className="mx-auto h-3 w-16 rounded-full bg-slate-900 mb-3" />
                  
                  <div className="space-y-3">
                    <div className="border-b border-slate-100 pb-2">
                      <p className="text-xs font-bold text-[#0B2545]">EasyRentPe</p>
                      <p className="text-[10px] text-slate-500">Sunrise PG • Room 101</p>
                    </div>

                    <div className="rounded-xl bg-[#E6F7F0] p-3 text-left">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#00A859]">
                        <span>Rent Due: ₹8,500</span>
                        <span className="rounded bg-white px-1.5 py-0.5 text-[9px] shadow-sm">Active</span>
                      </div>
                      <p className="text-[10px] text-slate-600 mt-1">Single Occupancy</p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Quick Actions
                      </p>
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-semibold text-slate-700">
                        <div className="rounded-lg bg-slate-50 border border-slate-100 p-2">
                          <IndianRupee className="mx-auto h-3.5 w-3.5 text-[#00A859]" />
                          <span className="mt-1 block">Rent</span>
                        </div>
                        <div className="rounded-lg bg-slate-50 border border-slate-100 p-2">
                          <MessageSquare className="mx-auto h-3.5 w-3.5 text-[#00A859]" />
                          <span className="mt-1 block">Complaint</span>
                        </div>
                        <div className="rounded-lg bg-slate-50 border border-slate-100 p-2">
                          <Bell className="mx-auto h-3.5 w-3.5 text-[#00A859]" />
                          <span className="mt-1 block">Notices</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Download info and Store badges */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center rounded-full bg-white px-3.5 py-1 text-xs font-bold text-[#00A859] shadow-sm">
                Mobile Apps
              </div>
              <h2 className="text-3xl font-extrabold text-[#0B2545] sm:text-4xl lg:text-5xl">
                Get the EasyRentPe App
              </h2>
              <p className="text-base text-slate-600 sm:text-lg leading-relaxed">
                Manage your PG, pay rent, raise complaints and more — right from your phone. Available on Android and iOS.
              </p>

              <div className="pt-2">
                <StoreBadges />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
