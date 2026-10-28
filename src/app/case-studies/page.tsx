import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { otherWork } from "@/content/services";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { CaseFilter } from "@/components/case-filter";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight, ShieldIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Six anonymised case studies with measured results: NHS voice reception and letter automation, document extraction at bureau scale, records digitisation, support deflection, offline field operations and multilingual call scoring.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        index="03"
        title={
          <>
            Six systems. Six sets of <em>measured numbers.</em>
          </>
        }
        deck="All real Alpha2Omega work, anonymised to sector descriptions. No client names, no invented figures, no logo wall. References are available on request under NDA."
        meta={[
          { label: "Studies", value: "Six, across five sectors" },
          { label: "Evidence", value: "Measured on client data" },
          { label: "Status", value: "Five in production, one live POC" },
        ]}
      />

      <section className="section" aria-labelledby="index-heading">
        <div className="container" style={{ paddingBottom: "0" }}>
          <h2 id="index-heading" className="sr-only">
            Case study index
          </h2>
          <CaseFilter />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="other-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <SectionLabel>Also in the portfolio</SectionLabel>
              <h2 id="other-heading">
                Selected other work, <em>in short.</em>
              </h2>
            </div>
            <div className="section-head-side">
              <p>
                Three smaller engagements that show the range. Details are
                available on request — client names stay private.
              </p>
            </div>
          </div>

          <div className="case-grid">
            {otherWork.map((item, index) => (
              <article
                className="case-card case-card--other"
                key={item.title}
                data-featured="false"
              >
                <div className="case-card-top">
                  <span className="case-card-sector">{item.sector}</span>
                  <span className="case-card-index">
                    {String(index + 7).padStart(2, "0")}
                  </span>
                </div>
                <div className="case-card-copy" style={{ marginTop: "24px" }}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="case-card-foot">
                  <span>Details on request</span>
                  <ShieldIcon size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="case-statement">
        <div className="container">
          <div className="about-lede">
            <h2 id="case-statement">
              If a number is not measured, <em>it is not on this site.</em>
            </h2>
            <div className="about-lede-body">
              <p>
                Every claim here comes from real client work. Where an
                engagement is still a proof of concept, we say so. Where a
                client is not comfortable being described, we leave the study
                out. Where a metric needs sign-off, it waits for sign-off.
              </p>
              <Link className="text-link" href="/about">
                How we work and who we are
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="See what this would look like on your data."
        accent="on your data."
        body="The AI Audit tests the highest-value process on a sample of your real documents or calls, then reports measured accuracy — before you commit to a build."
      />
    </>
  );
}
