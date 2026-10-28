import type { Metadata } from "next";
import Link from "next/link";
import { deliveryModels, engagement, faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Audit, proof of concept, production and retainer. Two delivery models, measured accuracy on your own data, and a UK or EU data residency promise.",
  alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        index="04"
        title={
          <>
            You commit to production only after <em>seeing the numbers.</em>
          </>
        }
        deck="Three stages, two clear decision points. We test on your real data, report measured accuracy, and run what we build. No leap of faith, no demo-set theatre."
        meta={[
          { label: "Audit", value: "Fixed fee, typically 2–4 weeks" },
          { label: "Proof", value: "On your data, against ground truth" },
          { label: "Production", value: "Deploy, integrate, run and improve" },
        ]}
      />

      <section className="section" aria-labelledby="engagement-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>The engagement path</SectionLabel>
              <h2 id="engagement-heading">
                Audit. Proof. <em>Production.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                Most consultancies ask you to trust the demo. We ask you to
                check the accuracy report. The client commits to production
                only after seeing measured results on their own documents or
                calls.
              </p>
            </div>
          </div>

          <div className="engagement-list">
            {engagement.map((step) => (
              <article className="engagement-step" key={step.index}>
                <div className="engagement-number" aria-hidden="true">
                  {step.index}
                </div>

                <div className="engagement-main">
                  <span className="engagement-label">
                    {step.label} · {step.meta}
                  </span>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </div>

                <div className="engagement-side">
                  <dl className="engagement-side-block">
                    <dt>Deliverable</dt>
                    <dd>{step.deliverable}</dd>
                  </dl>
                  <dl className="engagement-side-block">
                    <dt>Decision point</dt>
                    <dd>{step.decision}</dd>
                  </dl>
                  <p className="engagement-decision">
                    <CheckIcon size={13} />
                    {step.index === "03"
                      ? "The retainer is reviewed against measured performance."
                      : "Nothing moves forward without your sign-off."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--tint"
        id="models"
        aria-labelledby="models-heading"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>Two delivery models</SectionLabel>
              <h2 id="models-heading">
                The right shape depends on <em>the work.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                Some problems are solved by configuring a proven pipeline.
                Others need a system built around your operation. We will tell
                you which one you need — including when it is the smaller one.
              </p>
            </div>
          </div>

          <div className="model-grid">
            {deliveryModels.map((model) => (
              <article className="model-card" key={model.label}>
                <p className="model-card-label">{model.label}</p>
                <h2>{model.tagline}</h2>
                <dl className="model-rows">
                  {model.rows.map((row) => (
                    <div className="model-row" key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="residency"
        id="residency"
        aria-labelledby="residency-heading"
      >
        <div className="container residency-grid">
          <div className="residency-copy">
            <SectionLabel>The data residency promise</SectionLabel>
            <h2 id="residency-heading">
              Your data stays in the <em>UK or EU.</em>
            </h2>
            <p>
              Our platforms run on UK-resident cloud infrastructure (London
              region), with EU (Dublin) deployments for Irish clients. We
              complete NHS security questionnaires, DPIAs and client infosec
              reviews as standard, and self-hosted model options are available
              where data cannot leave your estate.
            </p>
            <Link className="text-link text-link--light" href="/contact">
              Ask for the infosec pack
              <ArrowRight size={15} />
            </Link>
          </div>

          <dl className="residency-list">
            <div>
              <dt>UK</dt>
              <dd>London region cloud infrastructure</dd>
            </div>
            <div>
              <dt>EU</dt>
              <dd>Dublin deployments for Irish clients</dd>
            </div>
            <div>
              <dt>Assurance</dt>
              <dd>
                NHS security questionnaires, DPIAs and client infosec reviews
              </dd>
            </div>
            <div>
              <dt>On premise</dt>
              <dd>
                Self-hosted model options where data cannot leave your estate
              </dd>
            </div>
            <div>
              <dt>Documentation</dt>
              <dd>ISO-style infosec documentation available on request</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>Working principles</SectionLabel>
              <h2 id="principles-heading">
                How the relationship <em>actually runs.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                We are the opposite of a big consultancy: a senior team you deal
                with directly, reasonable costs, and engagements designed to run
                for years, not quarters.
              </p>
            </div>
          </div>

          <div className="values-grid">
            <article className="value-item">
              <span className="value-index">01</span>
              <h3>Senior people, directly involved.</h3>
              <p>
                The people who scope the work are the people who build and run
                it. No layer of account managers between you and the engineers.
              </p>
            </article>
            <article className="value-item">
              <span className="value-index">02</span>
              <h3>Human review where it matters.</h3>
              <p>
                Uncertain output goes to your team with the source alongside it.
                Every decision is logged and explainable.
              </p>
            </article>
            <article className="value-item">
              <span className="value-index">03</span>
              <h3>Evidence before commitment.</h3>
              <p>
                Accuracy, throughput and cost are reported on a regular cadence
                once live. If the numbers move, you will know why.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="how-faq-heading">
        <div className="container faq-grid">
          <div className="faq-side">
            <SectionLabel>Practical questions</SectionLabel>
            <h2 id="how-faq-heading">
              The things clients ask <em>before starting.</em>
            </h2>
            <p>
              Still unsure? Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <FaqList items={[faqs[0], faqs[1], faqs[2], faqs[3], faqs[5]]} />
        </div>
      </section>

      <CtaBand
        title="Start with an audit. Leave with a plan."
        accent="a plan."
        body="A fixed-fee, two-to-four-week engagement. You get a prioritised catalogue of automation opportunities, each with an ROI estimate and a delivery plan."
      />
    </>
  );
}
