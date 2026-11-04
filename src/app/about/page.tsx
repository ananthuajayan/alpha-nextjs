import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alpha2Omega is a UK AI automation consultancy built for industries where getting it wrong isn't an option — NHS organisations, financial services, document management, construction and logistics.",
  alternates: { canonical: "/about" },
};

const differences = [
  {
    index: "01",
    title: "Relationship-led, not pitch-led.",
    body: "We are the opposite of a big consultancy: a senior team you deal with directly, reasonable costs, and engagements designed to run for years, not quarters. No pitch theatre, no layer of account managers.",
  },
  {
    index: "02",
    title: "Engineers who ship.",
    body: "Our team covers AI engineering, infrastructure, integration, front-end and testing. We build production systems — with monitoring, review queues and accuracy reporting — not prototypes that die after the demo.",
  },
  {
    index: "03",
    title: "Evidence before commitment.",
    body: "Every claim on this site comes from measured results on real client data. We would rather show you a 97% accuracy figure from your own documents than a slide about transformation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Alpha2Omega"
        index="05"
        title={
          <>
            Built for industries where getting it wrong is <em>not an option.</em>
          </>
        }
        deck="Alpha2Omega is a UK AI automation consultancy working where data residency, auditability and human oversight are requirements, not nice-to-haves."
        meta={[
          { label: "Based", value: "United Kingdom" },
          { label: "Serving", value: "UK and Ireland" },
          { label: "Data", value: "UK or EU resident" },
        ]}
      />

      <section className="relative py-16 md:py-24" aria-labelledby="about-intro">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 lg:gap-24 items-start">
            <h2 id="about-intro" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.045em] text-ink">
              A senior team, <em>not a pyramid.</em>
            </h2>
            <div className="max-w-[48ch] space-y-4 text-base leading-[1.68] text-ink-2">
              <p>
                We work with NHS organisations, financial services firms,
                document management bureaux, construction and logistics
                businesses. These are sectors where a missed letter, a
                mis-keyed reference or an unexplained decision has real
                consequences.
              </p>
              <p>
                That shapes everything: the work we take on, the accuracy we
                report, the review steps we build in, and the fact that we stay
                to run the systems we deploy. Alpha to Omega — from the first
                audit to live operation.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/how-we-work">
                See how an engagement runs
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-3 mt-8 border-t border-line divide-y md:divide-y-0 md:divide-x divide-line">
            <div className="py-4 md:py-4 md:px-4 first:pl-0 last:pr-0">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-muted-2">Team shape</dt>
              <dd className="mt-1.5 text-[15px] font-medium leading-[1.5] text-ink">
                AI, infrastructure and integration engineers, led by a director
                with a data science and AI leadership background
              </dd>
            </div>
            <div className="py-4 md:py-4 md:px-4 first:pl-0 last:pr-0">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-muted-2">Track record</dt>
              <dd className="mt-1.5 text-[15px] font-medium leading-[1.5] text-ink">
                AI leadership across maritime safety, telecoms procurement and
                financial services
              </dd>
            </div>
            <div className="py-4 md:py-4 md:px-4 first:pl-0 last:pr-0">
              <dt className="font-mono text-xs sm:text-[13px] tracking-[0.05em] uppercase text-muted-2">Delivery stance</dt>
              <dd className="mt-1.5 text-[15px] font-medium leading-[1.5] text-ink">
                Build on real client data, measure accuracy, then run what we
                build
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-paper-tint" aria-labelledby="difference-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>How we are different</SectionLabel>
              <h2 id="difference-heading" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Three things that change <em>the work.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                We are not trying to be the biggest consultancy in the room. We
                are trying to be the one that is still there when the system is
                live and the volumes have doubled.
              </p>
            </div>
          </div>

          <div className="border-t border-ink divide-y divide-line">
            {differences.map((item) => (
              <article className="grid grid-cols-1 md:grid-cols-[56px_0.8fr_1.2fr] gap-4 md:gap-8 lg:gap-14 py-6.5" key={item.index}>
                <span className="font-mono text-[15px] tracking-[0.1em] text-accent pt-1">{item.index}</span>
                <h3 className="text-lg sm:text-xl font-semibold leading-[1.16] tracking-[-0.03em] text-ink">{item.title}</h3>
                <p className="max-w-[54ch] text-[15px] leading-[1.65] text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24" aria-labelledby="team-heading">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-24 items-start">
            <div>
              <SectionLabel>Who is behind it</SectionLabel>
              <h2 id="team-heading" className="max-w-[14ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.045em] text-ink">
                Founded by an engineer. <em>Run by engineers.</em>
              </h2>
            </div>
            <div className="max-w-[48ch] space-y-3.5 text-[15px] leading-[1.68] text-ink-2">
              <p>
                Alpha2Omega is founded and led by a director with a background
                in data science and AI leadership across maritime safety,
                telecoms procurement and financial services. The team is made up
                of dedicated AI, infrastructure and integration engineers.
              </p>
              <p>
                We are deliberately small and senior. The person who scopes your
                audit is the person who can explain the accuracy report, the
                review queue and the integration. That is the point.
              </p>
              <p>
                We do not publish client names without written consent, and we
                do not use client logos as decoration. References are given
                privately, under NDA, when a prospect needs to know who we are.
              </p>
            </div>
          </div>

          <div className="relative p-6 sm:p-10 lg:p-12 mt-14 bg-forest text-paper rounded-brand overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_0.94fr] gap-10 lg:gap-20 items-start">
              <div>
                <SectionLabel>Where we stand</SectionLabel>
                <h2 className="max-w-[14ch] mt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-none tracking-[-0.045em] text-white [&>em]:text-mint">
                  UK data residency is a <em>design decision.</em>
                </h2>
                <p className="max-w-[47ch] mt-5 text-[15px] leading-[1.65] text-white/70">
                  Not a footnote. Our default deployment is UK-resident cloud
                  infrastructure in the London region, with Dublin for Irish
                  clients. Where data cannot leave your estate, we deploy
                  self-hosted models instead.
                </p>
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
                  <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">NHS</dt>
                  <dd className="text-[15px] leading-[1.5] text-white/80">Security questionnaires completed as part of delivery</dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[92px_1fr] gap-5 py-4">
                  <dt className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-mint">Estate</dt>
                  <dd className="text-[15px] leading-[1.5] text-white/80">Self-hosted models where data cannot leave</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-line" aria-labelledby="about-close">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end">
            <div>
              <SectionLabel>The short version</SectionLabel>
              <h2 id="about-close" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Serious systems. <em>Plain English.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1 space-y-4">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                If you want a partner who will tell you where AI will help, show
                you the numbers on your own data, and stay to run the thing —
                start with an audit.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/contact">
                Talk to a senior member of the team
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Find out what AI can actually do for your business."
        accent="your business."
        body="Our AI Audit maps your processes, identifies the highest-ROI automations, and hands you a build-ready catalogue — whether you build with us or not."
      />
    </>
  );
}
