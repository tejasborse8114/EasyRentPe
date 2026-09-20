import type { LucideIcon } from "lucide-react";
import {
  UserCheck,
  Wallet,
  BedDouble,
  Receipt,
  Wrench,
  FileSignature,
  Bell,
  Users,
  BarChart3,
  Building2,
  Home,
  DoorOpen,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// The 6 feature highlight cards used on the Home page.
export const HOME_FEATURES: Feature[] = [
  {
    icon: UserCheck,
    title: "Tenant Onboarding & Verification",
    description:
      "OTP-verified registration, Aadhar/ID uploads, digital declarations reviewed and approved by the owner.",
  },
  {
    icon: Wallet,
    title: "Rent & Payment Collection",
    description:
      "Accept rent via UPI, cash, bank transfer, card, or cheque; owners set a default UPI ID so every property is ready to collect instantly.",
  },
  {
    icon: BedDouble,
    title: "Room & Occupancy Management",
    description:
      "Configure single, double, triple, 4-bed, or dormitory rooms; track occupancy in real time; approve room-change requests from tenants.",
  },
  {
    icon: Receipt,
    title: "Dues, Penalties & Utility Billing",
    description:
      "Auto-track rent, deposits, electricity/water readings, maintenance charges, and late-payment penalties per tenant.",
  },
  {
    icon: Wrench,
    title: "Complaints & Maintenance",
    description:
      "Residents raise complaints with photos, categorized by type (electricity, water, wifi, cleaning, etc.) and priority, tracked to resolution.",
  },
  {
    icon: FileSignature,
    title: "Agreements & Renewals",
    description:
      "Digital rental agreements with lock-in periods, signature capture, and automated renewal reminders.",
  },
];

export type ProblemSolution = {
  problem: string;
  solution: string;
};

export const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    problem: "Still tracking rent in a notebook?",
    solution: "Automated dues & payment tracking",
  },
  {
    problem: "Tenants messaging you on WhatsApp for everything?",
    solution: "In-app complaints, notices & chat",
  },
  {
    problem: "Chasing tenants for agreements and ID proofs?",
    solution: "Digital declarations with OTP-verified onboarding",
  },
  {
    problem: "Manually calculating who owes what?",
    solution: "Real-time dues, penalties & electricity billing",
  },
];

export type Step = {
  title: string;
  description: string;
};

// 4-step summary used on the Home page.
export const HOME_STEPS: Step[] = [
  {
    title: "Set up your property",
    description: "Add rooms, sharing types, and pricing in minutes.",
  },
  {
    title: "Invite tenants",
    description:
      "They register on the app, verify by OTP, and submit their declaration/ID proof for your approval.",
  },
  {
    title: "Run operations",
    description:
      "Collect rent, resolve complaints, track dues, and manage renewals from your dashboard.",
  },
  {
    title: "Delegate confidently",
    description:
      "Add managers with permission-based access for specific properties.",
  },
];

// Detailed 5-step walkthrough used on the How It Works page.
export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: "Sign up & add your property",
    description: "Enter property details, rooms, and sharing types.",
  },
  {
    title: "Invite your tenants",
    description:
      "Tenants download the app, register, verify their email via OTP, and submit their declaration for your approval.",
  },
  {
    title: "Configure payments",
    description:
      "Add your UPI ID/QR so tenants can pay rent instantly; choose which other methods (cash, bank transfer, card, cheque) you accept.",
  },
  {
    title: "Run day-to-day operations",
    description:
      "Track dues, resolve complaints, manage room requests, and review agreement renewals — all from one dashboard.",
  },
  {
    title: "Scale with managers",
    description:
      "As you grow, add managers with permission-controlled access to specific properties.",
  },
];

export type FeatureCategory = {
  heading: string;
  items: string[];
};

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    heading: "Tenant & Onboarding",
    items: [
      "Email OTP-verified tenant registration",
      "Digital declaration submission (ID proof, occupation, emergency contact)",
      "Owner/admin review and approval workflow",
      "Student profile support (enrollment, course, semester, guardian details)",
    ],
  },
  {
    heading: "Rooms & Properties",
    items: [
      "Support for hostel and PG property types",
      "Room configuration: 1/2/3/4-bed and dormitory sharing",
      "Real-time occupancy tracking",
      "Room booking/change request workflow with approval",
      "Multi-property support for owners with multiple locations",
    ],
  },
  {
    heading: "Payments & Rent",
    items: [
      "Multiple payment methods: UPI, cash",
      "Per-property UPI ID configuration",
      "OTP-verified cash payment confirmation",
      "Online payments via integrated payment gateway",
      "Owner-side payment verification before marking as received",
    ],
  },
  {
    heading: "Dues, Penalties & Utilities",
    items: [
      "Configurable due types: rent, deposit, electricity/water, maintenance, late fee, damage, cleaning charge",
      "Electricity meter reading history for accurate utility billing",
      "Penalty tracking (late payment, damage, rule violations) with amounts and status",
    ],
  },
  {
    heading: "Complaints & Maintenance",
    items: [
      "Category-based complaint submission with photo attachments",
      "Priority levels (low/medium/high/urgent)",
      "Status workflow: pending → in progress → resolved/rejected",
      "Full history and admin tracking",
    ],
  },
  {
    heading: "Agreements & Renewals",
    items: [
      "Digital rental agreements with lock-in period tracking",
      "Signature capture for renewals",
      "Automated renewal and expiry reminders",
    ],
  },
  {
    heading: "Team & Permissions",
    items: [
      "Manager role with granular, per-property permissions (dashboard, tenants, payments, complaints, etc.)",
      "Owners can assign specific properties to specific managers",
    ],
  },
  {
    heading: "Notifications",
    items: [
      "Push notifications for rent reminders, dues, complaint updates, room decisions, and agreement expiry",
      "In-app notification center with read/unread status",
    ],
  },
  {
    heading: "Reporting & Analytics",
    items: [
      "Owner dashboard with occupancy, revenue, and complaint stats",
      "Manager dashboard scoped to assigned properties",
    ],
  },
];

export const FEATURE_CATEGORY_ICONS: LucideIcon[] = [
  UserCheck,
  BedDouble,
  Wallet,
  Receipt,
  Wrench,
  FileSignature,
  Users,
  Bell,
  BarChart3,
];

export type PricingPlan = {
  name: string;
  bestFor: string;
  included: string[];
  highlighted?: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    bestFor: "Single property, up to 30 beds",
    included: ["Core tenant, room, rent & complaint management"],
  },
  {
    name: "Growth",
    bestFor: "Multi-property owners",
    included: [
      "Everything in Starter",
      "Manager roles & permissions",
      "Multi-property dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    bestFor: "Large hostel/PG chains",
    included: [
      "Everything in Growth",
      "Priority support",
      "Custom onboarding",
    ],
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is this only for hostels, or does it work for PGs too?",
    answer:
      "Both — Easy RentPe supports both hostel and PG property types with sharing options from single occupancy to dormitory.",
  },
  {
    question: "How does rent collection work?",
    answer:
      "Tenants can pay via UPI (using your configured UPI ID/QR), cash with OTP confirmation, bank transfer, card, or cheque — all tracked and verified from your dashboard.",
  },
  {
    question: "Can I manage more than one property?",
    answer:
      "Yes, owners can manage multiple properties and assign managers to specific ones with custom permissions.",
  },
  {
    question: "How is Easy RentPe priced?",
    answer:
      "A monthly fee calculated per bed.",
  },
  {
    question: "Do tenants need to install an app?",
    answer:
      "Yes, tenants use a dedicated mobile app to register, pay rent, raise complaints, and receive notifications.",
  },
  {
    question: "What happens if my subscription payment is late?",
    answer:
      "Owners are notified ahead of the billing cycle; accounts may be deactivated after a configurable grace period if payment remains overdue.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Tenant registration is OTP-verified, documents are securely uploaded, and access is role-based (owner, manager, tenant).",
  },
];

export type PropertyType = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const PROPERTY_TYPES: PropertyType[] = [
  {
    icon: Building2,
    title: "Hostels",
    description: "High-turnover properties with shared rooms and constant move-ins.",
  },
  {
    icon: Home,
    title: "PGs",
    description: "Paying-guest accommodation with a more personal, service-driven experience.",
  },
  {
    icon: BedDouble,
    title: "Shared Rooms",
    description: "2, 3, and 4-bed sharing configured and billed per bed.",
  },
  {
    icon: DoorOpen,
    title: "Dormitories",
    description: "Large shared dormitory-style rooms with real-time bed tracking.",
  },
];

export type Stat = {
  label: string;
  value: string;
};

// Starter placeholder values — replace with real usage numbers as they become available.
export const STATS: Stat[] = [
  { label: "Properties", value: "50+" },
  { label: "Rooms", value: "300+" },
  { label: "Tenants", value: "500+" },
  { label: "Rent Collected", value: "₹10L+" },
];
