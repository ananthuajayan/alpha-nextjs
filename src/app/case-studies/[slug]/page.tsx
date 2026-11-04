import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getAdjacentStudies,
  getCaseStudy,
} from "@/content/case-studies";
import { SectionLabel } from "@/components/section-label";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight, ShieldIcon } from "@/components/icons";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return { title: "Case study not found" };

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} — ${study.bigMetric.value}`,
      description: study.summary,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const { previous, next } = getAdjacentStudies(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.headline} ${study.headlineAccent}`,
    description: study.summary,
    articleSection: study.sector,
    about: study.title,
    publisher: {
      "@type": "Organization",
      name: "Alpha2Omega.ai",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="py-12 sm:py-16 md:py-20 border-b border-line">
        <div className="container">
          <div className="flex items-center justify-between gap-5 flex-wrap mb-6">
            <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-accent before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent">
              {study.sector}
            </span>
            <span
              className={`px-3 py-1 bg-paper-tint border rounded text-xs font-mono tracking-[0.04em] uppercase ${
                study.evaluation ? "border-accent text-accent" : "border-line text-muted"
              }`}
            >
              {study.status}
            </span>
          </div>

          <h1 className="max-w-[17ch] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-[-0.052em] text-ink [&>em]:underline [&>em]:decoration-accent [&>em]:decoration-1 [&>em]:underline-offset-4">
            {study.headline} <em>{study.headlineAccent}</em>
          </h1>
          <p className="max-w-[60ch] mt-6 text-base sm:text-lg leading-[1.58] text-ink-2">{study.summary}</p>

          <div className="flex flex-wrap gap-x-7 gap-y-2.5 mt-7 font-mono text-xs sm:text-[13px] tracking-[0.04em] uppercase text-muted [&>span]:flex [&>span]:items-center [&>span]:gap-1.5 [&>span::before]:content-[''] [&>span::before]:w-1 [&>span::before]:h-1 [&>span::before]:rounded-full [&>span::before]:bg-mint">
            <span>{study.residency} data residency</span>
            <span>Anonymised to a sector description</span>
            <span>References available on request</span>
          </div>

          <dl className="grid grid-cols-2 md:grid-cols-4 mt-8 md:mt-11 border-t border-line-strong divide-y sm:divide-y-0 sm:divide-x divide-line" aria-label="Key results">
            {study.metrics.map((metric) => (
              <div className="p-4 sm:p-5 first:pl-0 last:pr-0" key={metric.label}>
                <dt className="text-2xl sm:text-3xl font-semibold leading-none tracking-[-0.045em] text-ink">{metric.value}</dt>
                <dd className="max-w-[22ch] mt-2 text-xs sm:text-sm leading-[1.45] text-muted">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[274px_minmax(0,1fr)] gap-10 lg:gap-20 py-12 md:py-20">
          <aside className="self-start lg:sticky lg:top-[calc(var(--header-h)+32px)]">
            <dl className="border-t border-ink divide-y divide-line">
              <div className="py-3">
                <dt className="font-mono text-xs sm:text-[13px] tracking-[0.04em] uppercase text-muted-2">Client profile</dt>
                <dd className="mt-1 text-[15px] font-medium leading-[1.5] text-ink">{study.profile}</dd>
              </div>
              <div className="py-3">
                <dt className="font-mono text-xs sm:text-[13px] tracking-[0.04em] uppercase text-muted-2">Sector</dt>
                <dd className="mt-1 text-[15px] font-medium leading-[1.5] text-ink">{study.sector}</dd>
              </div>
              <div className="py-3">
                <dt className="font-mono text-xs sm:text-[13px] tracking-[0.04em] uppercase text-muted-2">Data residency</dt>
                <dd className="mt-1 text-[15px] font-medium leading-[1.5] text-ink">{study.residency}</dd>
              </div>
              <div className="py-3">
                <dt className="font-mono text-xs sm:text-[13px] tracking-[0.04em] uppercase text-muted-2">Status</dt>
                <dd className="mt-1 text-[15px] font-medium leading-[1.5] text-ink">{study.status}</dd>
              </div>
              <div className="py-3">
                <dt className="font-mono text-xs sm:text-[13px] tracking-[0.04em] uppercase text-muted-2">Headline result</dt>
                <dd className="mt-1 text-[15px] font-medium leading-[1.5] text-ink">
                  {study.bigMetric.value} — {study.bigMetric.label}
                </dd>
              </div>
            </dl>

            <p className="flex gap-2 mt-5 pt-4 border-t border-line font-mono text-xs sm:text-[13px] leading-[1.6] tracking-[0.03em] text-muted [&>svg]:text-accent [&>svg]:shrink-0 [&>svg]:mt-0.5">
              <ShieldIcon size={14} />
              No client names, place names, staff names or vendor names appear
              in this study. References are available privately under NDA.
            </p>
          </aside>

          <article className="max-w-[68ch] divide-y divide-line">
            <section className="py-8 sm:py-11 first:pt-0">
              <SectionLabel>01 / The challenge</SectionLabel>
              <h2 className="max-w-[24ch] text-2xl sm:text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink mt-3">
                What was slowing the team down.
              </h2>
              {study.challenge.map((paragraph) => (
                <p className="mt-4 text-[15.5px] leading-[1.68] text-ink-2" key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <div className="my-8 sm:my-11 p-7 sm:p-10 bg-forest text-paper rounded-brand">
              <p className="text-4xl sm:text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-mint">{study.quote.value}</p>
              <p className="max-w-[34ch] mt-3 font-sans text-lg sm:text-xl leading-snug tracking-[-0.01em] text-white/80">{study.quote.label}</p>
            </div>

            <section className="py-8 sm:py-11">
              <SectionLabel>02 / What we built</SectionLabel>
              <h2 className="max-w-[24ch] text-2xl sm:text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink mt-3">
                The system, in plain English.
              </h2>
              {study.built.map((paragraph) => (
                <p className="mt-4 text-[15.5px] leading-[1.68] text-ink-2" key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="py-8 sm:py-11">
              <SectionLabel>03 / Results</SectionLabel>
              <h2 className="max-w-[24ch] text-2xl sm:text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink mt-3">
                What changed, and by how much.
              </h2>
              <ul className="mt-4.5 space-y-2.5">
                {study.results.map((result) => (
                  <li className="relative pl-4.5 text-[15px] leading-[1.62] text-ink-2 before:content-[''] before:absolute before:left-0 before:top-[0.58em] before:w-1.5 before:h-1.5 before:bg-accent" key={result}>{result}</li>
                ))}
              </ul>
            </section>

            <section className="py-8 sm:py-11 last:pb-0">
              <SectionLabel>04 / Technology notes</SectionLabel>
              <h2 className="max-w-[24ch] text-2xl sm:text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink mt-3">
                Capability, not brand names.
              </h2>
              <ul className="flex flex-wrap gap-2 mt-4.5">
                {study.tech.map((item) => (
                  <li className="px-3 py-1.5 bg-paper-tint border border-line rounded text-xs font-mono tracking-[0.04em] uppercase text-ink-2" key={item}>{item}</li>
                ))}
              </ul>

              <p className="flex items-center gap-2 mt-7 pt-4.5 border-t border-line font-mono text-xs sm:text-[13px] tracking-[0.07em] uppercase text-muted [&>svg]:text-accent [&>svg]:shrink-0">
                <ShieldIcon size={14} />
                Screenshots are rebuilt with sample data. References available
                on request.
              </p>
            </section>
          </article>
        </div>

        <nav className="grid grid-cols-2 border-t border-ink divide-x divide-line" aria-label="Case studies">
          {previous ? (
            <Link
              className="flex flex-col gap-2 py-6 pr-6 hover:text-accent transition"
              href={`/case-studies/${previous.slug}`}
            >
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">← Previous study</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">{previous.cardTitle}</strong>
            </Link>
          ) : (
            <Link className="flex flex-col gap-2 py-6 pr-6 hover:text-accent transition" href="/case-studies">
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">← All case studies</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">Six systems, measured</strong>
            </Link>
          )}

          {next ? (
            <Link className="flex flex-col gap-2 py-6 pl-6 text-right items-end hover:text-accent transition" href={`/case-studies/${next.slug}`}>
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">Next study →</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">{next.cardTitle}</strong>
            </Link>
          ) : (
            <Link className="flex flex-col gap-2 py-6 pl-6 text-right items-end hover:text-accent transition" href="/contact">
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">Start your own →</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">Book an AI Audit</strong>
            </Link>
          )}
        </nav>

        <div className="pt-8">
          <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong font-medium text-[15px] text-ink hover:text-accent hover:border-accent transition group" href="/case-studies">
            All case studies
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="mt-14 sm:mt-20">
        <CtaBand
          title="Your numbers will be different. Let's find out what they are."
          accent="what they are."
          body="The AI Audit puts a sample of your real work through the pipeline and reports measured accuracy, throughput and cost — before you commit to a build."
        />
      </div>
    </>
  );
}
