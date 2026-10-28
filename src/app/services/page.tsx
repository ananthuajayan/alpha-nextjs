import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight, ArrowUpRight, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Document intelligence, AI voice agents, workflow automation and a fixed-fee AI Audit — built and run for regulated industries.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        index="02"
        title={
          <>
            Four ways we take work <em>off your team.</em>
          </>
        }
        deck="Each service is framed by the business problem it removes, not the technology underneath. We start with an audit, prove it on your data, then run it in production."
        meta={[
          { label: "Engagement", value: "Always starts with an audit" },
          { label: "Delivery", value: "Rapid Deploy or Custom Build" },
          { label: "Data", value: "UK or EU resident" },
        ]}
      />

      <section className="section" aria-labelledby="service-index-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>Service index</SectionLabel>
              <h2 id="service-index-heading">
                Start with the problem, <em>not the technology.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                Each service is a production system, not a pilot. Choose the
                closest fit below, or start with the audit and let the evidence
                decide.
              </p>
              <Link className="text-link" href="/how-we-work">
                How we deliver
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="service-index-grid">
            {services.map((service) => (
              <Link
                className="service-index-card"
                href={`/services/${service.slug}`}
                id={service.slug}
                key={service.slug}
                data-reveal
              >
                <span className="service-index-card-top">
                  <span className="service-index-card-index">
                    {service.index}
                  </span>
                  <span>Service</span>
                </span>
                <h3>{service.title}</h3>
                <p className="service-index-card-outcome">{service.outcome}</p>
                <p className="service-index-card-summary">{service.summary}</p>
                <span className="service-index-card-link">
                  Explore service
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="model-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>Two delivery models</SectionLabel>
              <h2 id="model-heading">
                The right shape depends on <em>the work.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                Most clients start with a proven pipeline configured to their
                documents. Larger groups with complex integrations usually need
                a bespoke build.
              </p>
              <Link className="text-link" href="/how-we-work#models">
                Compare delivery models
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="model-grid">
            <article className="model-card">
              <p className="model-card-label">Rapid Deploy</p>
              <h2>Proven platforms, configured to you.</h2>
              <p>
                Our existing platforms configured to your documents and
                workflows. Built for getting to production in weeks.
              </p>
              <dl className="model-rows">
                <div className="model-row">
                  <dt>Commercial model</dt>
                  <dd>Per-page or per-call pricing with a monthly minimum</dd>
                </div>
                <div className="model-row">
                  <dt>Examples</dt>
                  <dd>
                    Extraction as a service, voice reception, ticket deflection
                  </dd>
                </div>
              </dl>
            </article>

            <article className="model-card">
              <p className="model-card-label">Custom Build</p>
              <h2>Bespoke systems, built around your operation.</h2>
              <p>
                Bespoke systems designed around your workflow, systems of record
                and approval process.
              </p>
              <dl className="model-rows">
                <div className="model-row">
                  <dt>Commercial model</dt>
                  <dd>
                    Fixed-scope build plus support. Indicative £20k–£60k for
                    extraction systems.
                  </dd>
                </div>
                <div className="model-row">
                  <dt>Examples</dt>
                  <dd>
                    Triage platforms, portals, multi-system integrations,
                    offline field apps
                  </dd>
                </div>
              </dl>
            </article>
          </div>

          <dl className="journey-list">
            <div>
              <dt>Start</dt>
              <dd>
                Every route begins with a fixed-fee AI Audit. You leave with a
                prioritised catalogue and ROI estimates, whether you build with
                us or not.
              </dd>
            </div>
            <div>
              <dt>Prove</dt>
              <dd>
                We build the highest-value item on your own data and report
                measured accuracy against ground truth.
              </dd>
            </div>
            <div>
              <dt>Run</dt>
              <dd>
                We deploy, integrate and run the service — monitoring, human
                review, accuracy reporting and continuous improvement.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="service-cta">
        <div className="container">
          <div className="about-lede">
            <h2 id="service-cta">
              Not sure which service fits <em>the problem?</em>
            </h2>
            <div className="about-lede-body">
              <p>
                That is what the audit is for. Tell us what is slow, repetitive
                or expensive. We will map it, test it on a sample of your real
                data, and tell you plainly where AI will help — and where it
                will not.
              </p>
              <Link className="text-link" href="/contact">
                Book an AI Audit
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="trust-band" style={{ marginTop: "44px" }}>
            {site.trust.map((item) => (
              <div className="trust-item" key={item}>
                <CheckIcon size={14} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with the work that is slowing everything else down."
        accent="slowing everything else down."
        body="A fixed-fee AI Audit maps your processes, tests the highest-value opportunity on your real data, and hands you a build-ready catalogue with ROI estimates."
      />
    </>
  );
}
