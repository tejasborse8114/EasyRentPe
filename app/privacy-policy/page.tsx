import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Easy RentPe collects, uses, and protects data for owners, managers, and tenants.",
};

const LAST_UPDATED = "September 21, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="gradient-text text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink-muted">Last updated: {LAST_UPDATED}</p>
        <p className="mt-6 text-ink-muted">
          Easy RentPe (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides a single
          app and owner dashboard used by property owners, managers, and tenants to run
          hostel and PG operations. This policy explains what information we collect,
          how we use it, and the choices you have.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">1. Information We Collect</h2>
        <p className="mt-3 text-ink-muted">
          We collect information directly from you and automatically as you use the app
          and dashboard:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            <strong className="text-ink">Account details:</strong> name, phone number,
            email address, and role (owner, manager, or tenant).
          </li>
          <li>
            <strong className="text-ink">Tenant declaration &amp; ID proof:</strong>{" "}
            government ID documents, occupation, emergency contact, and (where
            applicable) student enrollment, course, semester, and guardian details
            submitted during OTP-verified onboarding.
          </li>
          <li>
            <strong className="text-ink">Property &amp; occupancy data:</strong> room
            configuration, sharing type, occupancy status, and room-change requests.
          </li>
          <li>
            <strong className="text-ink">Payment &amp; billing data:</strong> rent and
            dues history, payment method used (UPI, cash, bank transfer, card, cheque),
            UPI ID/QR configuration, and per-bed subscription billing details. We do not
            store full card or bank account credentials — these are handled by our
            payment gateway partners.
          </li>
          <li>
            <strong className="text-ink">Complaints &amp; communications:</strong>{" "}
            complaint descriptions, category, priority, photo attachments, and status
            history.
          </li>
          <li>
            <strong className="text-ink">Agreements:</strong> digital rental agreement
            details, lock-in period, and signature/renewal records.
          </li>
          <li>
            <strong className="text-ink">Usage data:</strong> device information, app
            interactions, and notification preferences, used to operate and improve the
            service.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-ink">2. How We Use Your Information</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
          <li>To verify identity via OTP and review tenant onboarding declarations.</li>
          <li>
            To operate core features: rent and dues tracking, utility billing, complaint
            resolution, room management, and agreement renewals.
          </li>
          <li>To calculate and bill owners for per-bed subscription usage.</li>
          <li>
            To send notifications such as rent reminders, dues, complaint updates, room
            decisions, and agreement expiry alerts.
          </li>
          <li>To enforce role-based access for owners, managers, and tenants.</li>
          <li>To maintain the security, integrity, and reliability of the platform.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-ink">
          3. Sharing of Information
        </h2>
        <p className="mt-3 text-ink-muted">
          We do not sell your personal information. We share data only:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            With the property owner/manager responsible for the property you are
            registered to, so they can manage tenancy, dues, and complaints.
          </li>
          <li>
            With payment gateway and OTP/SMS providers strictly to process payments and
            verify identity.
          </li>
          <li>With service providers who help us host, secure, and operate the platform.</li>
          <li>When required to comply with applicable law, legal process, or to protect rights and safety.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-ink">4. Data Retention</h2>
        <p className="mt-3 text-ink-muted">
          We retain tenant, owner, and manager data for as long as the related account or
          property remains active, and for a reasonable period afterward to meet legal,
          accounting, and dispute-resolution requirements (such as agreement and payment
          history).
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">5. Data Security</h2>
        <p className="mt-3 text-ink-muted">
          Access to tenant, owner, and manager data is role-based. Registration is
          OTP-verified, ID documents and declarations are stored securely, and payments
          are verified before being marked as received. We use industry-standard
          safeguards to protect data against unauthorized access, alteration, or loss.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">6. Your Rights &amp; Choices</h2>
        <p className="mt-3 text-ink-muted">
          You may request access to, correction of, or deletion of your personal
          information, subject to our legal and operational retention needs (for example,
          active tenancy or unresolved dues). Tenants can manage notification preferences
          from within the app. To make a request, contact us using the details below.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">7. Children&apos;s Privacy</h2>
        <p className="mt-3 text-ink-muted">
          Easy RentPe is intended for use by adults managing or residing in hostel/PG
          properties. Where student residents are minors, registration and ID
          verification must be completed with the involvement of a parent, guardian, or
          the property owner.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">8. Changes to This Policy</h2>
        <p className="mt-3 text-ink-muted">
          We may update this policy from time to time. Material changes will be
          communicated in-app or by email, and the &quot;Last updated&quot; date above
          will reflect the most recent revision.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">9. Contact Us</h2>
        <p className="mt-3 text-ink-muted">
          Questions about this Privacy Policy can be sent to us via the{" "}
          <a href="/contact" className="font-medium text-primary underline">
            Contact page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
