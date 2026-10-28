import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { engagement, faqs } from "@/content/faqs";
import { SectionLabel } from "@/components/section-label";
import { ExtractionDemo } from "@/components/extraction-demo";
import { ProofStrip } from "@/components/proof-strip";
import { CaseCard } from "@/components/case-card";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  ShieldIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "AI automation for regulated industries",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = caseStudies.filter((study) => study.featured).slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <SectionLabel>UK AI automation for regulated industries</SectionLabel>
            </div>
            <h1 className="hero-title">
              We turn your slowest{" "}
              <span className="nowrap">back-office</span> work into{" "}
              <em>same-day work.</em>
            </h1>
            <p className="hero-deck">
              Alpha2Omega builds and runs AI automation for healthcare,
              financial services and document-heavy businesses — document
              extraction, voice agents and workflow automation, delivered on
              UK-resident infrastructure.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--accent btn--lg" href="/contact">
                Book an AI Audit
                <ArrowUpRight size={15} />
              </Link>
              <a className="text-link" href="#results">
                See the results
                <ArrowRight size={15} />
              </a>
            </div>
            <ul className="hero-trust" aria-label="At a glance">
              <li>
                <ShieldIcon size={15} />
                UK or EU data residency
              </li>
              <li>
                <CheckIcon size={15} />
                Human review built in
              </li>
              <li>
                <CheckIcon size={15} />
                NHS security experience
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <ExtractionDemo />
          </div>
        </div>

        <div className="container">
          <ProofStrip note="Measured on live client work — each case study shows the detail." />
        </div>
      </section>

      <section className="section section--values" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>Why Alpha2Omega</SectionLabel>
              <h2 id="values-heading">
                Evidence beats slideware. <em>Every time.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                We are an AI automation consultancy for industries where
                getting it wrong is not an option. That changes how we sell,
                what we build, and how long we stay.
              </p>
              <Link className="text-link" href="/about">
                About the team
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="values-grid">
            {site.values.map((value) => (
              <article
                className="value-item"
                key={value.index}
                data-reveal
                style={{ transitionDelay: `${Number(value.index) * 60}ms` }}
              >
                <span className="value-index">{value.index}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--line" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2 id="services-heading">
                Four ways we take work <em>off your team.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                We start with the work that is slow, repetitive and expensive —
                then build the smallest system that removes it. Every service
                is run by us, not handed over and forgotten.
              </p>
              <Link className="text-link" href="/services">
                Explore all services
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <Link
                className="service-row"
                href={`/services/${service.slug}`}
                key={service.slug}
                data-reveal
              >
                <span className="service-index">{service.index}</span>
                <span className="service-title">{service.title}</span>
                <span className="service-outcome">{service.outcome}</span>
                <span className="service-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--tint"
        id="results"
        aria-labelledby="results-heading"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 id="results-heading">
                Measured on real data. <em>Not a demo.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                Three of six case studies. Every client is anonymised to a
                sector description, and references are available on request
                under NDA.
              </p>
              <Link className="text-link" href="/case-studies">
                All six case studies
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="case-grid case-grid--home">
            {featured.map((study, index) => (
              <div
                data-reveal
                key={study.slug}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <CaseCard
                  study={study}
                  index={caseStudies.indexOf(study)}
                  featured={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2 id="process-heading">
                Audit. Proof. <em>Production.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                You commit to production only after seeing measured accuracy on
                your own data. Three stages, two clear decision points, no
                leap of faith.
              </p>
              <Link className="text-link" href="/how-we-work">
                The full engagement path
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="process-strip">
            {engagement.map((step) => (
              <article
                className="process-step"
                key={step.index}
                data-reveal
                style={{ transitionDelay: `${Number(step.index) * 60}ms` }}
              >
                <div className="process-step-top">
                  <span className="process-index">{step.index}</span>
                  <span className="process-label">{step.label}</span>
                </div>
                <p className="process-meta">{step.meta}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <p className="process-deliverable">
                  <CheckIcon size={14} />
                  {step.deliverable}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="residency" aria-labelledby="residency-heading">
        <div className="container residency-grid">
          <div className="residency-copy">
            <SectionLabel>Data residency</SectionLabel>
            <h2 id="residency-heading">
              Your data stays in the <em>UK or EU.</em>
            </h2>
            <p>
              Our platforms run on UK-resident cloud infrastructure in the
              London region, with Dublin deployments for Irish clients. We
              complete NHS security questionnaires, DPIAs and client infosec
              reviews as standard.
            </p>
            <Link className="text-link text-link--light" href="/how-we-work#residency">
              Read the residency promise
              <ArrowRight size={15} />
            </Link>
          </div>

          <dl className="residency-list">
            <div>
              <dt>UK</dt>
              <dd>London region cloud infrastructure for UK clients</dd>
            </div>
            <div>
              <dt>EU</dt>
              <dd>Dublin deployments for Irish and EU clients</dd>
            </div>
            <div>
              <dt>Review</dt>
              <dd>NHS security questionnaires, DPIAs and infosec packs</dd>
            </div>
            <div>
              <dt>Estate</dt>
              <dd>Self-hosted model options where data cannot leave</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" id="questions" aria-labelledby="faq-heading">
        <div className="container faq-grid">
          <div className="faq-side">
            <SectionLabel>Questions</SectionLabel>
            <h2 id="faq-heading">
              Plain answers, <em>before you ask.</em>
            </h2>
            <p>
              If yours is not here, email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. A senior member
              of the team replies.
            </p>
          </div>
          <FaqList items={faqs.slice(0, 5)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
