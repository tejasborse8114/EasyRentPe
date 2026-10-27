"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/85 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-extrabold text-ink transition-transform hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt={`${SITE_NAME} logo`}
            width={38}
            height={38}
            className="h-9 w-9 rounded-xl shadow-glow"
            priority
          />
          <span className="tracking-tight">
            Easy<span className="text-accent">RentPe</span>
          </span>
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
                    active ? "text-accent font-semibold" : "text-ink-muted"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent shadow-[0_0_8px_#10B981]"
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
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink-muted hover:text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6 text-ink" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-surface/95 backdrop-blur-xl lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-white/5 hover:text-accent"
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
