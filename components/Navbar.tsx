"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/site";
import { SITE_NAME } from "@/lib/site";
import StoreBadges from "@/components/StoreBadges";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const mainHeaderLinks = [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main">
        {/* Brand Identity with Circular Logo Badge (rounded-full) */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          {/* Circular Logo Badge */}
          <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200 overflow-hidden">
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
            <span className="text-2xl font-black tracking-tight leading-none">
              <span className="text-[#0B2545]">Easy</span>
              <span className="text-[#0055D4]">Rent</span>
              <span className="text-[#00A859]">Pe</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {mainHeaderLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-sm font-semibold transition-colors hover:text-[#0B2545] ${
                    active ? "text-[#0B2545] font-bold" : "text-slate-600"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-[#00A859]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary rounded-lg px-5 py-2.5 text-sm">
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:text-[#0B2545] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0B2545]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center rounded-lg py-2.5 text-sm"
              >
                Book a Demo
              </Link>
            </li>
            <li className="pt-4 border-t border-slate-200 mt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Download Mobile App
              </p>
              <StoreBadges />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
