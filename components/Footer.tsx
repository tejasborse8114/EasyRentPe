import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import StoreBadges from "@/components/StoreBadges";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
  FOOTER_COLUMNS,
} from "@/lib/site";

const SOCIAL_LINKS = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/90 bg-white py-10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand with Circular Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:opacity-90">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-sm ring-1 ring-slate-200 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt={`${SITE_NAME} logo`}
              width={36}
              height={36}
              className="h-full w-full rounded-full object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-tight leading-none">
            <span className="text-[#0B2545]">Easy</span>
            <span className="text-[#0055D4]">Rent</span>
            <span className="text-[#00A859]">Pe</span>
          </span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-semibold text-slate-600">
          <Link href="/features" className="hover:text-[#0B2545] transition-colors">
            Features
          </Link>
          <Link href="/how-it-works" className="hover:text-[#0B2545] transition-colors">
            How It Works
          </Link>
          <Link href="/pricing" className="hover:text-[#0B2545] transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-[#0B2545] transition-colors">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-xs text-slate-400 hover:text-slate-600">
            Privacy
          </Link>
          <Link href="/terms-of-service" className="text-xs text-slate-400 hover:text-slate-600">
            Terms
          </Link>
        </nav>

        {/* Right Copyright Notice */}
        <p className="text-xs text-slate-500 font-medium">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
