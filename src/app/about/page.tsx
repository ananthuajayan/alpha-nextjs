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

      <section className="section" aria-labelledby="about-intro">
        <div className="container">
          <div className="about-lede">
            <h2 id="about-intro">
              A senior team, <em>not a pyramid.</em>
            </h2>
            <div className="about-lede-body">
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
              <Link className="text-link" href="/how-we-work">
                See how an engagement runs
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <dl className="about-facts">
            <div className="about-fact">
              <dt>Team shape</dt>
              <dd>
                AI, infrastructure and integration engineers, led by a director
                with a data science and AI leadership background
              </dd>
            </div>
            <div className="about-fact">
              <dt>Track record</dt>
              <dd>
                AI leadership across maritime safety, telecoms procurement and
                financial services
              </dd>
            </div>
            <div className="about-fact">
              <dt>Delivery stance</dt>
              <dd>
                Build on real client data, measure accuracy, then run what we
                build
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="difference-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>How we are different</SectionLabel>
              <h2 id="difference-heading">
                Three things that change <em>the work.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                We are not trying to be the biggest consultancy in the room. We
                are trying to be the one that is still there when the system is
                live and the volumes have doubled.
              </p>
            </div>
          </div>

          <div className="about-diff">
            {differences.map((item) => (
              <article className="about-diff-row" key={item.index}>
                <span className="about-diff-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <div className="about-team">
            <div>
              <SectionLabel>Who is behind it</SectionLabel>
              <h2 id="team-heading">
                Founded by an engineer. <em>Run by engineers.</em>
              </h2>
            </div>
            <div className="about-team-body">
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

          <div className="residency residency--boxed" style={{ marginTop: "56px" }}>
            <div className="residency-grid">
              <div className="residency-copy">
                <SectionLabel>Where we stand</SectionLabel>
                <h2>
                  UK data residency is a <em>design decision.</em>
                </h2>
                <p>
                  Not a footnote. Our default deployment is UK-resident cloud
                  infrastructure in the London region, with Dublin for Irish
                  clients. Where data cannot leave your estate, we deploy
                  self-hosted models instead.
                </p>
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
                  <dt>NHS</dt>
                  <dd>Security questionnaires completed as part of delivery</dd>
                </div>
                <div>
                  <dt>Estate</dt>
                  <dd>Self-hosted models where data cannot leave</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="about-close">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>The short version</SectionLabel>
              <h2 id="about-close">
                Serious systems. <em>Plain English.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                If you want a partner who will tell you where AI will help, show
                you the numbers on your own data, and stay to run the thing —
                start with an audit.
              </p>
              <Link className="text-link" href="/contact">
                Talk to a senior member of the team
                <ArrowUpRight size={15} />
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
