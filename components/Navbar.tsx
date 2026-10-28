"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/site";
import { SITE_NAME } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-xs">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main">
        {/* Brand Identity with Circular Logo Badge (rounded-full) */}
        <Link
          href="/"
          className="flex items-center gap-3.5 transition-transform hover:scale-105"
          onClick={() => setOpen(false)}
        >
          {/* Circular Logo Badge */}
          <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-md ring-1 ring-slate-200/80 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt={`${SITE_NAME} logo`}
              width={64}
              height={64}
              className="h-full w-full rounded-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
              <span className="text-[#0F172A]">Easy</span>
              <span className="text-[#0055D4]">Rent</span>
              <span className="text-[#00A859]">Pe</span>
            </span>
            <span className="mt-1 hidden text-[9px] font-bold uppercase tracking-widest text-slate-500 sm:block">
              Hostel Management Made Easy
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-ink ${
                    active ? "text-primary font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,85,212,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Book a Free Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:text-slate-900 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/98 shadow-xl backdrop-blur-xl lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Book a Free Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
