import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import StoreBadges from "@/components/StoreBadges";
import {
  FOOTER_COLUMNS,
  SITE_NAME,
  SITE_TAGLINE,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
} from "@/lib/site";

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-surface-elevated/90 backdrop-blur-xl">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2">
          {/* Circular Logo Badge */}
          <Link href="/" className="flex items-center gap-3.5 transition-transform hover:scale-105">
            <div className="relative flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-glow ring-2 ring-white/30 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt={`${SITE_NAME} logo`}
                width={56}
                height={56}
                className="h-full w-full rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight leading-none">
                <span className="text-white">Easy</span>
                <span className="text-[#0055D4]">Rent</span>
                <span className="text-[#00A859]">Pe</span>
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-ink-muted/80">
                Hostel Management Made Easy
              </span>
            </div>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-muted leading-relaxed">{SITE_TAGLINE}</p>

          <div className="mt-5 space-y-2">
            <a
              href={`tel:${SUPPORT_PHONE_TEL}`}
              className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {SUPPORT_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {SUPPORT_EMAIL}
            </a>
          </div>

          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/15 hover:text-accent hover:shadow-glow"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Get the mobile app
            </p>
            <StoreBadges className="mt-3" />
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading}>
            <h3 className="text-sm font-bold text-ink">{column.heading}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-sm text-ink-muted sm:flex-row">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs">{SITE_TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
