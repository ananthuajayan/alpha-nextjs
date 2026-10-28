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

      <header className="case-hero">
        <div className="container">
          <div className="case-hero-top">
            <span className="case-sector">{study.sector}</span>
            <span
              className="case-status"
              data-evaluation={study.evaluation ? "true" : "false"}
            >
              {study.status}
            </span>
          </div>

          <h1>
            {study.headline} <em>{study.headlineAccent}</em>
          </h1>
          <p className="case-hero-summary">{study.summary}</p>

          <div className="case-hero-meta">
            <span>{study.residency} data residency</span>
            <span>Anonymised to a sector description</span>
            <span>References available on request</span>
          </div>

          <dl className="case-metrics" aria-label="Key results">
            {study.metrics.map((metric) => (
              <div className="case-metric" key={metric.label}>
                <dt className="case-metric-value">{metric.value}</dt>
                <dd className="case-metric-label">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="container">
        <div className="case-body">
          <aside className="case-aside">
            <dl className="facts">
              <div>
                <dt>Client profile</dt>
                <dd>{study.profile}</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>{study.sector}</dd>
              </div>
              <div>
                <dt>Data residency</dt>
                <dd>{study.residency}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{study.status}</dd>
              </div>
              <div>
                <dt>Headline result</dt>
                <dd>
                  {study.bigMetric.value} — {study.bigMetric.label}
                </dd>
              </div>
            </dl>

            <p className="case-aside-note">
              <ShieldIcon size={14} />
              No client names, place names, staff names or vendor names appear
              in this study. References are available privately under NDA.
            </p>
          </aside>

          <article className="case-prose">
            <section className="case-section">
              <SectionLabel>01 / The challenge</SectionLabel>
              <h2>What was slowing the team down.</h2>
              {study.challenge.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <div className="case-quote">
              <p className="case-quote-value">{study.quote.value}</p>
              <p className="case-quote-label">{study.quote.label}</p>
            </div>

            <section className="case-section">
              <SectionLabel>02 / What we built</SectionLabel>
              <h2>The system, in plain English.</h2>
              {study.built.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="case-section">
              <SectionLabel>03 / Results</SectionLabel>
              <h2>What changed, and by how much.</h2>
              <ul>
                {study.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </section>

            <section className="case-section">
              <SectionLabel>04 / Technology notes</SectionLabel>
              <h2>Capability, not brand names.</h2>
              <ul className="tech-list">
                {study.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="case-references">
                <ShieldIcon size={14} />
                Screenshots are rebuilt with sample data. References available
                on request.
              </p>
            </section>
          </article>
        </div>

        <nav className="case-pagination" aria-label="Case studies">
          {previous ? (
            <Link
              className="case-page-link"
              href={`/case-studies/${previous.slug}`}
            >
              <span>← Previous study</span>
              <strong>{previous.cardTitle}</strong>
            </Link>
          ) : (
            <Link className="case-page-link" href="/case-studies">
              <span>← All case studies</span>
              <strong>Six systems, measured</strong>
            </Link>
          )}

          {next ? (
            <Link className="case-page-link" href={`/case-studies/${next.slug}`}>
              <span>Next study →</span>
              <strong>{next.cardTitle}</strong>
            </Link>
          ) : (
            <Link className="case-page-link" href="/contact">
              <span>Start your own →</span>
              <strong>Book an AI Audit</strong>
            </Link>
          )}
        </nav>

        <div style={{ paddingTop: "32px" }}>
          <Link className="text-link" href="/case-studies">
            All case studies
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "clamp(56px, 7vw, 84px)" }}>
        <CtaBand
          title="Your numbers will be different. Let's find out what they are."
          accent="what they are."
          body="The AI Audit puts a sample of your real work through the pipeline and reports measured accuracy, throughput and cost — before you commit to a build."
        />
      </div>
    </>
  );
}
