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
    <footer className="relative border-t border-white/10 bg-surface-elevated">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary">
            <Image src="/images/logo.png" alt={`${SITE_NAME} logo`} width={40} height={40} className="h-10 w-10 rounded-xl" />
            {SITE_NAME}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">{SITE_TAGLINE}</p>

          <div className="mt-5 space-y-2">
            <a
              href={`tel:${SUPPORT_PHONE_TEL}`}
              className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {SUPPORT_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {SUPPORT_EMAIL}
            </a>
          </div>

          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-glow-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Get the app
            </p>
            <StoreBadges className="mt-3" />
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading}>
            <h3 className="text-sm font-semibold text-ink">{column.heading}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-primary"
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
          <p>{SITE_TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
