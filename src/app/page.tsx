import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { engagement, faqs } from "@/content/faqs";
import { SectionLabel } from "@/components/section-label";
import { HomeHero } from "@/components/home-hero";
import { ProofStrip } from "@/components/proof-strip";
import { CaseCard } from "@/components/case-card";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
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
      <HomeHero />

      <div className="container">
        <ProofStrip note="Measured on live client work — each case study shows the detail." />
      </div>

      <section className="relative pt-14 md:pt-20" aria-labelledby="values-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>Why Alpha2Omega</SectionLabel>
              <h2 id="values-heading" className="max-w-[18ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Evidence beats slideware. <em>Every time.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1 space-y-4">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                We are an AI automation consultancy for industries where
                getting it wrong is not an option. That changes how we sell,
                what we build, and how long we stay.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/about">
                About the team
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  border-t border-ink divide-y md:divide-y-0 divide-line">
            {site.values.map((value) => (
              <article
                className="py-6 md:py-6 md:pr-7 p-2 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-r border-line md:last:border-r-0"
                key={value.index}
                data-reveal
                style={{ transitionDelay: `${Number(value.index) * 60}ms` }}
              >
                <span className="font-mono text-[15px] tracking-[0.1em] text-accent">{value.index}</span>
                <h3 className="max-w-[20ch] my-4 text-lg sm:text-xl font-semibold leading-[1.18] tracking-[-0.028em] text-ink">{value.title}</h3>
                <p className="max-w-[36ch] text-[15px] leading-[1.62] text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-line" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2 id="services-heading" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Four ways we take work <em>off your team.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1 space-y-4">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                We start with the work that is slow, repetitive and expensive —
                then build the smallest system that removes it. Every service
                is run by us, not handed over and forgotten.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/services">
                Explore all services
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="border-t border-ink divide-y divide-line">
            {services.map((service) => (
              <Link
                className="group grid grid-cols-[40px_1fr] sm:grid-cols-[48px_minmax(0,1.02fr)_minmax(0,1fr)_40px] gap-3 sm:gap-6 lg:gap-8 items-center py-6 px-2.5 -mx-2.5 rounded-[2px] transition hover:bg-white/60 hover:px-4.5"
                href={`/services/${service.slug}`}
                key={service.slug}
                data-reveal
              >
                <span className="font-mono text-[15px] tracking-[0.08em] text-muted-2">{service.index}</span>
                <span className="text-lg sm:text-xl font-semibold leading-[1.16] tracking-[-0.032em] text-ink group-hover:text-accent transition">{service.title}</span>
                <span className="text-[15px] leading-[1.5] text-muted col-span-2 sm:col-span-1">{service.outcome}</span>
                <span className="hidden sm:grid place-items-center w-9.5 h-9.5 border border-line rounded-full text-ink-2 transition group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:rotate-45" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-16 md:py-24 bg-paper-tint"
        id="results"
        aria-labelledby="results-heading"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-7">
              <SectionLabel>Selected work</SectionLabel>
              <h2 id="results-heading" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Measured on real data. <em>Not a demo.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 max-w-[46ch] pb-1 space-y-4 lg:justify-self-end">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                Three of six case studies. Every client is anonymised to a
                sector description, and references are available on request
                under NDA.
              </p>
              <div>
                <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/case-studies">
                  All six case studies
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {featured.map((study, index) => (
              <div
                data-reveal
                key={study.slug}
                className={`h-full flex flex-col ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <CaseCard
                  study={study}
                  index={caseStudies.indexOf(study)}
                  featured={index === 0}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24" id="process" aria-labelledby="process-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2 id="process-heading" className=" text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Audit. Proof. <em>Production.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1 space-y-4">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                You commit to production only after seeing measured accuracy on
                your own data. Three stages, two clear decision points, no
                leap of faith.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/how-we-work">
                The full engagement path
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink divide-y md:divide-y-0 divide-line">
            {engagement.map((step) => (
              <article
                className="py-6 md:py-6 p-2 md:pr-7 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-r border-line md:last:border-r-0"
                key={step.index}
                data-reveal
                style={{ transitionDelay: `${Number(step.index) * 60}ms` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[15px] tracking-[0.1em] text-accent">{step.index}</span>
                  <span className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-muted">{step.label}</span>
                </div>
                <p className="mt-4.5 font-mono text-xs sm:text-[13px] tracking-[0.06em] uppercase text-muted-2">{step.meta}</p>
                <h3 className="max-w-[18ch] my-3 text-lg sm:text-xl font-semibold leading-[1.14] tracking-[-0.03em] text-ink">{step.title}</h3>
                <p className="max-w-[34ch] text-[15px] leading-[1.6] text-muted">{step.body}</p>
                <p className="flex items-start gap-2 mt-4.5 pt-3 border-t border-line font-mono text-xs sm:text-[13px] tracking-[0.07em] uppercase text-ink-2 [&>svg]:text-accent [&>svg]:shrink-0 [&>svg]:mt-0.5">
                  <CheckIcon size={14} />
                  {step.deliverable}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-forest text-paper overflow-hidden" aria-labelledby="residency-heading">
        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-[1fr_0.94fr] gap-10 lg:gap-24 items-start">
          <div>
            <SectionLabel>Data residency</SectionLabel>
            <h2 id="residency-heading" className="max-w-[14ch] mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-white [&>em]:text-mint">
              Your data stays in the <em>UK or EU.</em>
            </h2>
            <p className="max-w-[47ch] mt-5 text-[15px] leading-[1.65] text-white/70">
              Our platforms run on UK-resident cloud infrastructure in the
              London region, with Dublin deployments for Irish clients. We
              complete NHS security questionnaires, DPIAs and client infosec
              reviews as standard.
            </p>
            <Link className="inline-flex items-center gap-2 mt-6.5 pb-0.5 border-b border-white/40 font-medium text-[15px] text-paper hover:text-mint hover:border-mint transition group" href="/how-we-work#residency">
              Read the residency promise
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <dl className="border-t border-white/25 divide-y divide-white/15">
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">UK</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">London region cloud infrastructure for UK clients</dd>
            </div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">EU</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">Dublin deployments for Irish and EU clients</dd>
            </div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">Review</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">NHS security questionnaires, DPIAs and infosec packs</dd>
            </div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">Estate</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">Self-hosted model options where data cannot leave</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="relative py-16 md:py-24" id="questions" aria-labelledby="faq-heading">
        <div className="container grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+36px)]">
            <SectionLabel>Questions</SectionLabel>
            <h2 id="faq-heading" className="max-w-[12ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink mt-3">
              Plain answers, <em>before you ask.</em>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-muted">
              If yours is not here, email{" "}
              <a className="text-accent underline underline-offset-2 hover:text-accent-dark transition" href={`mailto:${site.email}`}>{site.email}</a>. A senior member
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
