import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Alpha2Omega handles personal information submitted through this website and in the course of business.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <div className="container legal-grid">
        <aside className="legal-aside">
          <p className="eyebrow">
            <span aria-hidden="true">//</span>Legal
          </p>
          <h1>Privacy notice</h1>
          <p>Last updated 22 October 2026</p>
        </aside>

        <div className="legal-prose">
          <h2>Who we are</h2>
          <p>
            {site.legalName} is a UK AI automation consultancy. This notice
            explains what personal information we collect through this website
            and in the course of business, why we collect it, and what rights
            you have. For any privacy question, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What we collect</h2>
          <p>When you send an enquiry through the contact form, we collect:</p>
          <ul>
            <li>your name and organisation;</li>
            <li>your work email address and, if you provide it, your phone number;</li>
            <li>the area you are interested in and the message you write;</li>
            <li>your confirmation that we may reply to you.</li>
          </ul>
          <p>
            Our hosting provider also processes standard server logs — such as
            IP address, browser type, requested page and time of request — to
            serve the site securely and diagnose faults.
          </p>

          <h2>Why we use it</h2>
          <p>
            We use enquiry information to respond to you, discuss a potential
            engagement, provide services and keep appropriate business records.
            We use server logs to operate and secure the site.
          </p>
          <p>
            Our lawful bases are our legitimate interests in responding to
            business enquiries and running our business, your consent where you
            give it (for example, the reply confirmation), and compliance with
            legal obligations where they apply. You can withdraw consent at any
            time.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This site does not set advertising, tracking or third-party
            analytics cookies. Hosting infrastructure may use strictly necessary
            technology to deliver pages securely. If we add analytics, we will
            update this notice and, where required, ask for consent first.
          </p>

          <h2>Who we share it with</h2>
          <p>
            We do not sell personal information. We may share it with service
            providers that host the site, deliver email or support our customer
            relationship, under contracts that require appropriate security and
            confidentiality. We may also disclose information where the law
            requires it.
          </p>
          <p>
            Client work is delivered on UK-resident infrastructure, with EU
            (Dublin) deployments for Irish clients, unless a client asks for a
            different arrangement. Where information is transferred
            internationally, we use appropriate safeguards.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiry records for as long as needed to respond, maintain
            the business relationship and meet legal or accounting obligations.
            When they are no longer needed, we delete or anonymise them.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK data protection law you can ask for access to your personal
            information, correction of inaccurate information, erasure,
            restriction of processing, portability, or object to processing
            based on legitimate interests. You can also withdraw consent at any
            time.
          </p>
          <p>
            To exercise a right, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. If you are not
            satisfied with our response, you can complain to the Information
            Commissioner&apos;s Office (ICO) at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
              ico.org.uk
            </a>
            .
          </p>

          <h2>Security</h2>
          <p>
            We use access controls, encryption in transit and UK or EU hosting
            for client data. No system is completely secure, but we design for
            least privilege and review our arrangements as the service evolves.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this notice as the site or our services change. The
            date at the top shows the latest version. This notice should be read
            alongside our{" "}
            <Link href="/accessibility">accessibility statement</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
