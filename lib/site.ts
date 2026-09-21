export const SITE_NAME = "Easy RentPe";
export const SITE_TAGLINE = "Modern operations for hostels and PGs.";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.easyrentpe.hostel_management_app";
// TODO: replace with the live App Store listing URL once published.
export const APP_STORE_URL = "https://play.google.com/store/apps/details?id=com.easyrentpe.hostel_management_app";

export const WHATSAPP_NUMBER = "919175232737";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Easy RentPe, I'd like to know more about your platform."
)}`;

export const SUPPORT_EMAIL = "support@easyrentpe.com";
export const SUPPORT_PHONE_DISPLAY = "+91 91752 32737";
export const SUPPORT_PHONE_TEL = "+919175232737";

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/hostel-owners", label: "Hostel Owners" },
  { href: "/pg-owners", label: "PG Owners" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
];

export const FOOTER_COLUMNS: {
  heading: string;
  links: NavLink[];
}[] = [
  {
    heading: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/how-it-works", label: "How It Works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Resources",
    links: [{ href: "/faq", label: "FAQ" }],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
];
