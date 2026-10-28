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

      <section className="section" aria-label="Contact form">
        <div className="container contact-grid">
          <ContactForm />

          <aside className="contact-side">
            <div className="contact-block">
              <h2>What happens next.</h2>
              <ol className="next-steps">
                <li>
                  <span className="step-index">01</span>
                  <div>
                    <strong>We read it properly.</strong>
                    <p>
                      Not a bot, not a qualification script. A senior member of
                      the team picks up the enquiry.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-index">02</span>
                  <div>
                    <strong>We suggest the right first step.</strong>
                    <p>
                      Usually a fixed-fee AI Audit. Sometimes a smaller proof of
                      concept on one process.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-index">03</span>
                  <div>
                    <strong>No obligation to build.</strong>
                    <p>
                      The audit is useful on its own. If we are not the right
                      fit, we will say so.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="contact-direct">
              <p>Direct contact</p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a className="contact-direct-phone" href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>
              <address className="contact-direct-address">
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.city}, {site.address.region}{" "}
                {site.address.postcode}
              </address>
              <p className="contact-direct-note">
                References are available privately under NDA. Client names are
                never published.
              </p>
            </div>

            <ul className="contact-trust">
              <li>
                <ShieldIcon size={15} />
                UK or EU-resident data processing
              </li>
              <li>
                <ShieldIcon size={15} />
                NHS security questionnaire experience
              </li>
              <li>
                <CheckIcon size={15} />
                DPIAs and infosec packs as standard
              </li>
              <li>
                <CheckIcon size={15} />
                Human review built into every pipeline
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="contact-faq">
        <div className="container faq-grid">
          <div className="faq-side">
            <SectionLabel>Before you write</SectionLabel>
            <h2 id="contact-faq">
              A few plain <em>answers.</em>
            </h2>
            <p>
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
