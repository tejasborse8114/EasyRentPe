import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Easy RentPe app and owner dashboard, including per-bed subscription billing.",
};

const LAST_UPDATED = "September 21, 2026";

export default function TermsOfServicePage() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="gradient-text text-4xl font-bold">Terms of Service</h1>
        <p className="mt-3 text-sm text-ink-muted">Last updated: {LAST_UPDATED}</p>
        <p className="mt-6 text-ink-muted">
          These Terms of Service (&quot;Terms&quot;) govern access to and use of the Easy
          RentPe app and owner dashboard (the &quot;Service&quot;) by owners, managers,
          and tenants. By creating an account or using the Service, you agree to these
          Terms.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">1. The Service</h2>
        <p className="mt-3 text-ink-muted">
          Easy RentPe is a single app used by both property owners/managers and tenants
          to manage tenant onboarding, rooms and occupancy, rent and dues collection,
          utility billing, complaints, and digital rental agreements from one dashboard.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">2. Accounts &amp; Roles</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            <strong className="text-ink">Owners</strong> create and manage properties,
            rooms, pricing, and can invite managers and tenants.
          </li>
          <li>
            <strong className="text-ink">Managers</strong> are granted access by an
            owner, scoped to specific properties and permissions (dashboard, tenants,
            payments, complaints, etc.).
          </li>
          <li>
            <strong className="text-ink">Tenants</strong> register with OTP-verified
            details, submit declarations and ID proof for owner approval, and use the app
            to pay rent, raise complaints, and receive notifications.
          </li>
        </ul>
        <p className="mt-3 text-ink-muted">
          You are responsible for the accuracy of information you submit and for keeping
          your account credentials secure.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">
          3. Subscription &amp; Billing (Owners)
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            The Service is billed to owners on a monthly subscription fee calculated{" "}
            <strong className="text-ink">per bed</strong> — calculated automatically each
            billing cycle with no manual invoicing.
          </li>
          <li>There are no setup fees and no long-term lock-in on any plan.</li>
          <li>
            Owners are notified ahead of each billing cycle. If a subscription payment is
            not received, the account may be suspended or deactivated after a
            configurable grace period.
          </li>
          <li>
            Plan features (Starter, Growth, Enterprise) are as described on the{" "}
            <a href="/pricing" className="font-medium text-primary underline">
              Pricing page
            </a>{" "}
            at the time of subscription and may be updated with reasonable notice.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-ink">4. Rent &amp; Tenant Payments</h2>
        <p className="mt-3 text-ink-muted">
          Rent, deposits, utility charges, and penalties owed by tenants are set by the
          property owner, not Easy RentPe. Payments can be made via UPI, cash (with OTP
          confirmation), bank transfer, card, or cheque, and are verified by the owner or
          manager before being marked as received. Easy RentPe is a platform that
          facilitates tracking and collection and is not a party to the tenancy agreement
          between owner and tenant.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">5. Acceptable Use</h2>
        <p className="mt-3 text-ink-muted">You agree not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
          <li>Submit false identity documents, declarations, or payment confirmations.</li>
          <li>Use the Service to harass, defraud, or discriminate against any user.</li>
          <li>Attempt to access data or properties you are not authorized to manage or reside in.</li>
          <li>Reverse engineer, resell, or misuse the Service outside its intended purpose.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-ink">6. Data &amp; Content Ownership</h2>
        <p className="mt-3 text-ink-muted">
          Owners and tenants retain ownership of the property, tenant, and agreement data
          they submit. Easy RentPe may use aggregated, de-identified data to improve the
          Service. Our use of personal data is described in the{" "}
          <a href="/privacy-policy" className="font-medium text-primary underline">
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">7. Suspension &amp; Termination</h2>
        <p className="mt-3 text-ink-muted">
          We may suspend or terminate access for breach of these Terms, non-payment of
          subscription fees beyond the applicable grace period, or misuse of the Service.
          Owners and tenants may stop using the Service at any time; outstanding dues and
          subscription fees remain payable.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">
          8. Disclaimers &amp; Limitation of Liability
        </h2>
        <p className="mt-3 text-ink-muted">
          The Service is provided &quot;as is&quot;. Easy RentPe is not responsible for
          disputes between owners and tenants arising from tenancy terms, rent amounts,
          or property conditions. To the maximum extent permitted by law, Easy RentPe&apos;s
          liability for any claim relating to the Service is limited to the subscription
          fees paid by the relevant owner in the three months preceding the claim.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">9. Changes to These Terms</h2>
        <p className="mt-3 text-ink-muted">
          We may update these Terms from time to time. Continued use of the Service after
          changes take effect constitutes acceptance of the updated Terms.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">10. Governing Law</h2>
        <p className="mt-3 text-ink-muted">
          These Terms are governed by the laws of India, without regard to conflict of
          law principles, and any disputes will be subject to the exclusive jurisdiction
          of the courts located where Easy RentPe is registered to do business.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">11. Contact Us</h2>
        <p className="mt-3 text-ink-muted">
          Questions about these Terms can be sent to us via the{" "}
          <a href="/contact" className="font-medium text-primary underline">
            Contact page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
