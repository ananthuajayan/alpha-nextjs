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
    "Data extraction, GP AI operating system, Orthodontic referral triage, and applied automation platforms — built and run for regulated industries.",
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

      <section className="relative py-16 md:py-24" aria-labelledby="service-index-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>Service index</SectionLabel>
              <h2 id="service-index-heading" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Start with the problem, <em>not the technology.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1 space-y-4">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                Each service is a production system, not a pilot. Choose the
                closest fit below, or start with the audit and let the evidence
                decide.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/how-we-work">
                How we deliver
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ink divide-y md:divide-y-0 divide-line">
            {services.map((service) => (
              <Link
                className="group flex flex-col p-6 sm:p-7.5 border-b border-line hover:bg-paper-tint transition md:odd:border-r"
                href={`/services/${service.slug}`}
                id={service.slug}
                key={service.slug}
                data-reveal
              >
                <span className="flex items-center justify-between gap-3 font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-muted">
                  <span className="text-accent font-semibold">
                    {service.index}
                  </span>
                  <span>Service</span>
                </span>
                <h3 className="max-w-[22ch] mt-6 text-xl sm:text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink group-hover:text-accent transition">{service.title}</h3>
                <p className="max-w-[40ch] mt-3 text-base sm:text-lg leading-snug text-ink-2">{service.outcome}</p>
                <p className="max-w-[46ch] mt-3 text-[15px] leading-[1.6] text-muted">{service.summary}</p>
                <span className="inline-flex items-center gap-2 mt-auto pt-6 font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-ink-2 group-hover:text-accent transition">
                  Explore service
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16  bg-paper-tint" aria-labelledby="model-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-center mb-10 lg:mb-14">
            <div>
              <SectionLabel>Two delivery models</SectionLabel>
              <h2 id="model-heading" className="max-w-[18ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                The right shape depends on <em>the work.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1 space-y-4">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                Most clients start with a proven pipeline configured to their
                documents. Larger groups with complex integrations usually need
                a bespoke build.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/how-we-work#models">
                Compare delivery models
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ink divide-y md:divide-y-0 md:divide-x divide-line">
            <article className="py-6.5 md:py-6.5 md:px-8 first:pl-0 last:pr-0">
              <p className="flex items-center gap-2 font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-accent before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent">Rapid Deploy</p>
              <h2 className="mt-3.5 text-xl sm:text-2xl font-semibold tracking-[-0.035em] text-ink">Proven platforms, configured to you.</h2>
              <p className="max-w-[38ch] mt-2 text-[15px] leading-[1.55] text-muted">
                Our existing platforms configured to your documents and
                workflows. Built for getting to production in weeks.
              </p>
              <dl className="mt-6 divide-y divide-line">
                <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-5 py-3.5 border-t border-line">
                  <dt className="font-mono text-xs sm:text-[13px] leading-[1.5] tracking-[0.05em] uppercase text-muted-2">Commercial model</dt>
                  <dd className="text-[15px] font-medium leading-[1.5] text-ink">Per-page or per-call pricing with a monthly minimum</dd>
                </div>
                <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-5 py-3.5 border-t border-line">
                  <dt className="font-mono text-xs sm:text-[13px] leading-[1.5] tracking-[0.05em] uppercase text-muted-2">Examples</dt>
                  <dd className="text-[15px] font-medium leading-[1.5] text-ink">
                    Extraction as a service, voice reception, ticket deflection
                  </dd>
                </div>
              </dl>
            </article>

            <article className="py-6.5 md:py-6.5 md:px-8 first:pl-0 last:pr-0">
              <p className="flex items-center gap-2 font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-accent before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent">Custom Build</p>
              <h2 className="mt-3.5 text-xl sm:text-2xl font-semibold tracking-[-0.035em] text-ink">Bespoke systems, built around your operation.</h2>
              <p className="max-w-[38ch] mt-2 text-[15px] leading-[1.55] text-muted">
                Bespoke systems designed around your workflow, systems of record
                and approval process.
              </p>
              <dl className="mt-6 divide-y divide-line">
                <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-5 py-3.5 border-t border-line">
                  <dt className="font-mono text-xs sm:text-[13px] leading-[1.5] tracking-[0.05em] uppercase text-muted-2">Commercial model</dt>
                  <dd className="text-[15px] font-medium leading-[1.5] text-ink">
                    Fixed-scope build plus support. Indicative £20k–£60k for
                    extraction systems.
                  </dd>
                </div>
                <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-5 py-3.5 border-t border-line">
                  <dt className="font-mono text-xs sm:text-[13px] leading-[1.5] tracking-[0.05em] uppercase text-muted-2">Examples</dt>
                  <dd className="text-[15px] font-medium leading-[1.5] text-ink">
                    Triage platforms, portals, multi-system integrations,
                    offline field apps
                  </dd>
                </div>
              </dl>
            </article>
          </div>

          <dl className="mt-9 border-t border-line-strong divide-y divide-line">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(130px,240px)_1fr] gap-6 py-4.5 items-baseline">
              <dt className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.05em] uppercase text-accent">Start</dt>
              <dd className="max-w-[62ch] text-[15px] leading-[1.6] text-ink-2 m-0">
                Every route begins with a fixed-fee AI Audit. You leave with a
                prioritised catalogue and ROI estimates, whether you build with
                us or not.
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[minmax(130px,240px)_1fr] gap-6 py-4.5 items-baseline">
              <dt className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.05em] uppercase text-accent">Prove</dt>
              <dd className="max-w-[62ch] text-[15px] leading-[1.6] text-ink-2 m-0">
                We build the highest-value item on your own data and report
                measured accuracy against ground truth.
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[minmax(130px,240px)_1fr] gap-6 py-4.5 items-baseline">
              <dt className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.05em] uppercase text-accent">Run</dt>
              <dd className="max-w-[62ch] text-[15px] leading-[1.6] text-ink-2 m-0">
                We deploy, integrate and run the service — monitoring, human
                review, accuracy reporting and continuous improvement.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="relative py-16 md:py-24" aria-labelledby="service-cta">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 lg:gap-24 items-start">
            <h2 id="service-cta" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.045em] text-ink">
              Not sure which service fits <em>the problem?</em>
            </h2>
            <div className="max-w-[48ch] space-y-4 text-base leading-[1.68] text-ink-2">
              <p>
                That is what the audit is for. Tell us what is slow, repetitive
                or expensive. We will map it, test it on a sample of your real
                data, and tell you plainly where AI will help — and where it
                will not.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/contact">
                Book an AI Audit
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-line-strong border-b border-line mt-11 divide-y sm:divide-y-0 sm:divide-x divide-line">
            {site.trust.map((item) => (
              <div className="flex items-center gap-2.5 p-4.5 font-mono text-xs sm:text-[13px] leading-[1.6] tracking-[0.06em] uppercase text-ink-2 [&>svg]:text-accent [&>svg]:shrink-0" key={item}>
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
        titleClassName="!max-w-[22ch]"
      />
    </>
  );
}
