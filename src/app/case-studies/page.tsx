import type { Metadata } from "next";
import Link from "next/link";
import { otherWork } from "@/content/services";
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
      <section
        className="relative pt-0 pb-12 sm:pb-16"
        aria-labelledby="index-heading"
      >
        <div className="container pb-0">
          <h2 id="index-heading" className="sr-only">
            Case study index
          </h2>
          <CaseFilter />
        </div>
      </section>

      <section
        id="other-work"
        className="relative py-16 md:py-24 bg-paper-tint"
        aria-labelledby="other-heading"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-20 items-end mb-10 lg:mb-14">
            <div>
              <SectionLabel>Also in the portfolio</SectionLabel>
              <h2 id="other-heading" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.045em] text-ink">
                Selected other work, <em>in short.</em>
              </h2>
            </div>
            <div className="max-w-[46ch] pb-1">
              <p className="text-[15px] leading-[1.6] text-ink-2">
                Three smaller engagements that show the range. Details are
                available on request — client names stay private.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherWork.map((item, index) => (
              <article
                id={index === 0 ? "orthodontics" : undefined}
                className="relative flex flex-col w-full min-h-[300px] p-5.5 bg-paper-raised border border-line rounded-brand transition hover:-translate-y-1 hover:border-line-strong hover:shadow-card"
                key={item.title}
                data-featured="false"
              >
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-line font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">
                  <span className="text-accent font-medium">{item.sector}</span>
                  <span className="text-muted-2">
                    {String(index + 7).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-6 flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-muted">{item.body}</p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-3 border-t border-line text-xs font-mono tracking-wider uppercase text-muted">
                  <span>Details on request</span>
                  <ShieldIcon size={14} className="text-accent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24" aria-labelledby="case-statement">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 lg:gap-24 items-start">
            <h2 id="case-statement" className="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.045em] text-ink">
              If a number is not measured, <em>it is not on this site.</em>
            </h2>
            <div className="max-w-[48ch] space-y-4 text-base leading-[1.68] text-ink-2">
              <p>
                Every claim here comes from real client work. Where an
                engagement is still a proof of concept, we say so. Where a
                client is not comfortable being described, we leave the study
                out. Where a metric needs sign-off, it waits for sign-off.
              </p>
              <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/about">
                How we work and who we are
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
