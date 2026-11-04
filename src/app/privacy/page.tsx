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
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-8 md:gap-14 lg:gap-20 items-start">
        <aside className="static md:sticky md:top-[calc(var(--header-h)+32px)] pb-5 md:pb-0 border-b border-line md:border-b-0">
          <p className="flex items-center gap-2 font-mono text-xs sm:text-[13px] font-medium tracking-[0.08em] uppercase text-accent mb-2.5">
            <span aria-hidden="true">//</span>Legal
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-ink">
            Privacy notice
          </h1>
          <p className="mt-2.5 font-mono text-xs sm:text-[13px] tracking-[0.07em] uppercase text-muted">
            Last updated 22 October 2026
          </p>
        </aside>

        <div className="max-w-[66ch] text-ink-2">
          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Who we are
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            {site.legalName} is a UK AI automation consultancy. This notice
            explains what personal information we collect through this website
            and in the course of business, why we collect it, and what rights
            you have. For any privacy question, email{" "}
            <a className="text-accent underline underline-offset-2 hover:text-accent-dark transition" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            What we collect
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">When you send an enquiry through the contact form, we collect:</p>
          <ul className="mt-2.5 space-y-2.5">
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              your name and organisation;
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              your work email address and, if you provide it, your phone number;
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              the area you are interested in and the message you write;
            </li>
            <li className="relative pl-4.5 text-[15px] leading-[1.68] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:bg-accent">
              your confirmation that we may reply to you.
            </li>
          </ul>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            Our hosting provider also processes standard server logs — such as
            IP address, browser type, requested page and time of request — to
            serve the site securely and diagnose faults.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Why we use it
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            We use enquiry information to respond to you, discuss a potential
            engagement, provide services and keep appropriate business records.
            We use server logs to operate and secure the site.
          </p>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            Our lawful bases are our legitimate interests in responding to
            business enquiries and running our business, your consent where you
            give it (for example, the reply confirmation), and compliance with
            legal obligations where they apply. You can withdraw consent at any
            time.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Cookies and analytics
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            This site does not set advertising, tracking or third-party
            analytics cookies. Hosting infrastructure may use strictly necessary
            technology to deliver pages securely. If we add analytics, we will
            update this notice and, where required, ask for consent first.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Who we share it with
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            We do not sell personal information. We may share it with service
            providers that host the site, deliver email or support our customer
            relationship, under contracts that require appropriate security and
            confidentiality. We may also disclose information where the law
            requires it.
          </p>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            Client work is delivered on UK-resident infrastructure, with EU
            (Dublin) deployments for Irish clients, unless a client asks for a
            different arrangement. Where information is transferred
            internationally, we use appropriate safeguards.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            How long we keep it
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            We keep enquiry records for as long as needed to respond, maintain
            the business relationship and meet legal or accounting obligations.
            When they are no longer needed, we delete or anonymise them.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Your rights
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            Under UK data protection law you can ask for access to your personal
            information, correction of inaccurate information, erasure,
            restriction of processing, portability, or object to processing
            based on legitimate interests. You can also withdraw consent at any
            time.
          </p>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            To exercise a right, email{" "}
            <a className="text-accent underline underline-offset-2 hover:text-accent-dark transition" href={`mailto:${site.email}`}>{site.email}</a>. If you are not
            satisfied with our response, you can complain to the Information
            Commissioner&apos;s Office (ICO) at{" "}
            <a className="text-accent underline underline-offset-2 hover:text-accent-dark transition" href="https://ico.org.uk" target="_blank" rel="noreferrer">
              ico.org.uk
            </a>
            .
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Security
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            We use access controls, encryption in transit and UK or EU hosting
            for client data. No system is completely secure, but we design for
            least privilege and review our arrangements as the service evolves.
          </p>

          <h2 className="mt-8.5 first:mt-0 text-lg sm:text-xl font-semibold tracking-[-0.025em] text-ink">
            Changes
          </h2>
          <p className="mt-3 text-[15px] leading-[1.68] text-ink-2">
            We may update this notice as the site or our services change. The
            date at the top shows the latest version. This notice should be read
            alongside our{" "}
            <Link className="text-accent underline underline-offset-2 hover:text-accent-dark transition" href="/accessibility">accessibility statement</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
