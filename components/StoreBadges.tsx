import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/site";

// Recognizable Google Play "tri-triangle" mark, drawn inline so no external asset/network fetch is required.
function GooglePlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M4.4 2.6c-.4.3-.6.8-.6 1.5v15.8c0 .7.2 1.2.6 1.5l.1.1L13.6 12v-.2L4.5 2.5l-.1.1z" fill="#00D2FF" />
      <path d="M16.7 15.1l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-.1-.1z" fill="#FFCE00" />
      <path d="M16.8 15l-3.2-3.2L4.4 21.4c.4.4.9.4 1.6.1L16.8 15z" fill="#FC3E52" />
      <path d="M16.8 8.9L6 2.5c-.7-.4-1.2-.3-1.6.1l9.2 9.2 3.2-3.2z" fill="#00F076" />
    </svg>
  );
}

// Simplified Apple silhouette, used only to link out to the official App Store listing.
function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.5c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.5zM14.2 5.6c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5.9.1 1.9-.5 2.5-1.2z" />
    </svg>
  );
}

type StoreBadgeProps = {
  href: string;
  glyph: React.ReactNode;
  eyebrow: string;
  storeName: string;
};

function StoreBadge({ href, glyph, eyebrow, storeName }: StoreBadgeProps) {
  const isPlaceholder = href === "#";

  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      aria-label={`${eyebrow} ${storeName}`}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black px-4 py-2.5 text-white shadow-card transition-colors hover:bg-black/80"
    >
      {glyph}
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-white/70">{eyebrow}</span>
        <span className="text-sm font-semibold">{storeName}</span>
      </span>
    </a>
  );
}

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreBadge
        href={PLAY_STORE_URL}
        glyph={<GooglePlayGlyph />}
        eyebrow="Get it on"
        storeName="Google Play"
      />
      <StoreBadge
        href={APP_STORE_URL}
        glyph={<AppleGlyph />}
        eyebrow="Download on the"
        storeName="App Store"
      />
    </div>
  );
}
