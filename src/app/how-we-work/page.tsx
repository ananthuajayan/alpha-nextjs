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

      <section className="relative py-16 md:py-24" aria-labelledby="engagement-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>The engagement path</SectionLabel>
              <h2 id="engagement-heading" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Audit. Proof. <em>Production.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                Most consultancies ask you to trust the demo. We ask you to
                check the accuracy report. The client commits to production
                only after seeing measured results on their own documents or
                calls.
              </p>
            </div>
          </div>

          <div className="border-t border-ink divide-y divide-line">
            {engagement.map((step) => (
              <article className="grid grid-cols-1 md:grid-cols-[100px_minmax(0,1fr)] lg:grid-cols-[120px_minmax(0,1fr)_280px] gap-6 lg:gap-14 py-8 lg:py-11" key={step.index}>
                <div className="font-sans text-5xl lg:text-6xl font-semibold leading-none text-accent" aria-hidden="true">
                  {step.index}
                </div>

                <div>
                  <span className="block mb-3 font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-muted">
                    {step.label} · {step.meta}
                  </span>
                  <h2 className="max-w-[22ch] text-2xl sm:text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink">{step.title}</h2>
                  <p className="max-w-[54ch] mt-3.5 text-[15px] leading-[1.65] text-ink-2">{step.body}</p>
                </div>

                <div className="self-start space-y-3">
                  <dl className="py-3.5 border-t border-line first:border-t-0 md:first:border-t">
                    <dt className="font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-muted-2">Deliverable</dt>
                    <dd className="mt-1.5 text-[15px] font-medium leading-[1.5] text-ink">{step.deliverable}</dd>
                  </dl>
                  <dl className="py-3.5 border-t border-line">
                    <dt className="font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-muted-2">Decision point</dt>
                    <dd className="mt-1.5 text-[15px] font-medium leading-[1.5] text-ink">{step.decision}</dd>
                  </dl>
                  <p className="mt-2.5 p-3 border-l-2 border-accent bg-accent-soft text-[15px] leading-[1.5] text-ink-2 flex items-start gap-2 [&>svg]:text-accent [&>svg]:shrink-0 [&>svg]:mt-1">
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
        className="relative py-16 md:py-24 bg-paper-tint"
        id="models"
        aria-labelledby="models-heading"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>Two delivery models</SectionLabel>
              <h2 id="models-heading" className="max-w-[18ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                The right shape depends on <em>the work.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                Some problems are solved by configuring a proven pipeline.
                Others need a system built around your operation. We will tell
                you which one you need — including when it is the smaller one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ink divide-y md:divide-y-0 md:divide-x divide-line">
            {deliveryModels.map((model) => (
              <article className="py-6.5 md:py-6.5 md:px-8 first:pl-0 last:pr-0" key={model.label}>
                <p className="flex items-center gap-2 font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-accent before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent">{model.label}</p>
                <h2 className="mt-3.5 text-xl sm:text-2xl font-semibold tracking-[-0.035em] text-ink">{model.tagline}</h2>
                <dl className="mt-6 divide-y divide-line">
                  {model.rows.map((row) => (
                    <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-5 py-3.5 border-t border-line" key={row.label}>
                      <dt className="font-mono text-xs sm:text-[13px] leading-[1.5] tracking-[0.05em] uppercase text-muted-2">{row.label}</dt>
                      <dd className="text-[15px] font-medium leading-[1.5] text-ink">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-16 md:py-24 bg-forest text-paper overflow-hidden"
        id="residency"
        aria-labelledby="residency-heading"
      >
        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-[1fr_0.94fr] gap-10 lg:gap-24 items-start">
          <div>
            <SectionLabel>The data residency promise</SectionLabel>
            <h2 id="residency-heading" className="max-w-[14ch] mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-white [&>em]:text-mint">
              Your data stays in the <em>UK or EU.</em>
            </h2>
            <p className="max-w-[47ch] mt-5 text-[15px] leading-[1.65] text-white/70">
              Our platforms run on UK-resident cloud infrastructure (London
              region), with EU (Dublin) deployments for Irish clients. We
              complete NHS security questionnaires, DPIAs and client infosec
              reviews as standard, and self-hosted model options are available
              where data cannot leave your estate.
            </p>
            <Link className="inline-flex items-center gap-2 mt-6.5 pb-0.5 border-b border-white/40 font-medium text-[15px] text-paper hover:text-mint hover:border-mint transition group" href="/contact">
              Ask for the infosec pack
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <dl className="border-t border-white/25 divide-y divide-white/15">
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">UK</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">London region cloud infrastructure</dd>
            </div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">EU</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">Dublin deployments for Irish clients</dd>
            </div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">Assurance</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">
                NHS security questionnaires, DPIAs and client infosec reviews
              </dd>
            </div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">On premise</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">
                Self-hosted model options where data cannot leave your estate
              </dd>
            </div>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">Documentation</dt>
              <dd className="text-[15px] leading-[1.5] text-white/80">ISO-style infosec documentation available on request</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="relative py-16 md:py-24" aria-labelledby="principles-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>Working principles</SectionLabel>
              <h2 id="principles-heading" className="max-w-[18ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                How the relationship <em>actually runs.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                We are the opposite of a big consultancy: a senior team you deal
                with directly, reasonable costs, and engagements designed to run
                for years, not quarters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink divide-y md:divide-y-0 divide-line">
            <article className="py-6 md:py-6 p-2 md:pr-7 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-r border-line md:last:border-r-0">
              <span className="font-mono text-[15px] tracking-[0.1em] text-accent">01</span>
              <h3 className="max-w-[20ch] my-4 text-lg sm:text-xl font-semibold leading-[1.18] tracking-[-0.028em] text-ink">Senior people, directly involved.</h3>
              <p className="max-w-[36ch] text-[15px] leading-[1.62] text-muted">
                The people who scope the work are the people who build and run
                it. No layer of account managers between you and the engineers.
              </p>
            </article>
            <article className="py-6 md:py-6 p-2 md:pr-7 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-r border-line md:last:border-r-0">
              <span className="font-mono text-[15px] tracking-[0.1em] text-accent">02</span>
              <h3 className="max-w-[20ch] my-4 text-lg sm:text-xl font-semibold leading-[1.18] tracking-[-0.028em] text-ink">Human review where it matters.</h3>
              <p className="max-w-[36ch] text-[15px] leading-[1.62] text-muted">
                Uncertain output goes to your team with the source alongside it.
                Every decision is logged and explainable.
              </p>
            </article>
            <article className="py-6 md:py-6 p-2  md:pr-7 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-r border-line md:last:border-r-0">
              <span className="font-mono text-[15px] tracking-[0.1em] text-accent">03</span>
              <h3 className="max-w-[20ch] my-4 text-lg sm:text-xl font-semibold leading-[1.18] tracking-[-0.028em] text-ink">Evidence before commitment.</h3>
              <p className="max-w-[36ch] text-[15px] leading-[1.62] text-muted">
                Accuracy, throughput and cost are reported on a regular cadence
                once live. If the numbers move, you will know why.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-line" aria-labelledby="how-faq-heading">
        <div className="container grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+36px)]">
            <SectionLabel>Practical questions</SectionLabel>
            <h2 id="how-faq-heading" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink mt-3">
              The things clients ask <em>before starting.</em>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-muted">
              Still unsure? Email{" "}
              <a className="text-accent underline underline-offset-2 hover:text-accent-dark transition" href={`mailto:${site.email}`}>{site.email}</a>.
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
