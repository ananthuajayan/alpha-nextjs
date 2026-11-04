import type { Metadata } from "next";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { CheckIcon, ShieldIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Alpha2Omega about an AI Audit, document extraction, voice agents or workflow automation. No gated content, no sales sequence — a senior member of the team replies.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        index="06"
        title={
          <>
            Tell us what is slowing <em>your team down.</em>
          </>
        }
        deck="A senior member of the team reads every enquiry. Tell us about the volume, the systems, the document types or the process you would most like to disappear."
        meta={[
          { label: "First step", value: "A short, direct conversation" },
          { label: "Audit", value: "Fixed fee, typically 2–4 weeks" },
          { label: "No gated content", value: "No sales sequence" },
        ]}
      />

      <section className="relative py-16 md:py-24" aria-label="Contact form">
        <div className="container grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-20 items-start">
          <ContactForm />

          <aside className="flex flex-col gap-7.5">
            <div>
              <h2 className="max-w-[18ch] text-xl sm:text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
                What happens next.
              </h2>
              <ol className="mt-5 border-t border-ink divide-y divide-line">
                <li className="grid grid-cols-[34px_1fr] gap-3 py-3.5">
                  <span className="font-mono text-[15px] tracking-[0.08em] text-accent pt-0.5">01</span>
                  <div>
                    <strong className="block text-[15px] font-medium tracking-[-0.015em] text-ink">We read it properly.</strong>
                    <p className="mt-1 text-[15px] leading-[1.5] text-muted">
                      Not a bot, not a qualification script. A senior member of
                      the team picks up the enquiry.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-[34px_1fr] gap-3 py-3.5">
                  <span className="font-mono text-[15px] tracking-[0.08em] text-accent pt-0.5">02</span>
                  <div>
                    <strong className="block text-[15px] font-medium tracking-[-0.015em] text-ink">We suggest the right first step.</strong>
                    <p className="mt-1 text-[15px] leading-[1.5] text-muted">
                      Usually a fixed-fee AI Audit. Sometimes a smaller proof of
                      concept on one process.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-[34px_1fr] gap-3 py-3.5">
                  <span className="font-mono text-[15px] tracking-[0.08em] text-accent pt-0.5">03</span>
                  <div>
                    <strong className="block text-[15px] font-medium tracking-[-0.015em] text-ink">No obligation to build.</strong>
                    <p className="mt-1 text-[15px] leading-[1.5] text-muted">
                      The audit is useful on its own. If we are not the right
                      fit, we will say so.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="p-5.5 bg-forest text-paper rounded-brand">
              <p className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">Direct contact</p>
              <a className="inline-block mt-2 text-lg sm:text-xl font-medium leading-tight tracking-[-0.03em] text-paper border-b border-white/35 hover:text-mint hover:border-mint transition" href={`mailto:${site.email}`}>{site.email}</a>
              <a className="block w-fit mt-1.5 font-mono text-[15px] tracking-[0.02em] text-mint hover:text-paper transition" href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>
              <address className="mt-3.5 not-italic text-[15px] leading-[1.6] text-white/70">
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.city}, {site.address.region}{" "}
                {site.address.postcode}
              </address>
              <p className="mt-3.5 text-[15px] leading-[1.55] text-white/60">
                References are available privately under NDA. Client names are
                never published.
              </p>
            </div>

            <ul className="pt-4.5 border-t border-line flex flex-col gap-2.5">
              <li className="flex items-center gap-2.5 text-[15px] text-ink-2 [&>svg]:text-accent [&>svg]:shrink-0">
                <ShieldIcon size={15} />
                UK or EU-resident data processing
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-ink-2 [&>svg]:text-accent [&>svg]:shrink-0">
                <ShieldIcon size={15} />
                NHS security questionnaire experience
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-ink-2 [&>svg]:text-accent [&>svg]:shrink-0">
                <CheckIcon size={15} />
                DPIAs and infosec packs as standard
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-ink-2 [&>svg]:text-accent [&>svg]:shrink-0">
                <CheckIcon size={15} />
                Human review built into every pipeline
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-line" aria-labelledby="contact-faq">
        <div className="container grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+36px)]">
            <SectionLabel>Before you write</SectionLabel>
            <h2 id="contact-faq" className="max-w-[12ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink mt-3">
              A few plain <em>answers.</em>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-muted">
              If your question is not here, put it in the form. We will answer
              it directly.
            </p>
          </div>
          <FaqList items={[faqs[0], faqs[1], faqs[2], faqs[4]]} />
        </div>
      </section>
    </>
  );
}
