import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllInnerPages,
  getInnerPage,
  getService,
} from "@/content/services";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  ShieldIcon,
} from "@/components/icons";

type Params = {
  params: Promise<{ slug: string; subslug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const pages = getAllInnerPages();
  return pages.map((page) => ({
    slug: page.parentSlug,
    subslug: page.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, subslug } = await params;
  const innerPage = getInnerPage(slug, subslug);

  if (!innerPage) return { title: "Page not found" };

  return {
    title: `${innerPage.title} — ${innerPage.parentTitle}`,
    description: innerPage.description,
    alternates: { canonical: `/services/${slug}/${subslug}` },
    openGraph: {
      title: `${innerPage.title} — ${innerPage.parentTitle} | ${site.name}`,
      description: innerPage.description,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceInnerPage({ params }: Params) {
  const { slug, subslug } = await params;
  const innerPage = getInnerPage(slug, subslug);
  const parentService = getService(slug);

  if (!innerPage || !parentService) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: innerPage.title,
    description: innerPage.description,
    category: innerPage.sector,
    url: `${site.domain}/services/${slug}/${subslug}`,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: site.legalName,
      url: site.domain,
    },
  };

  const siblingInnerPages =
    parentService.innerPages?.filter((p) => p.slug !== subslug) ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={`${innerPage.parentTitle} / ${innerPage.kicker}`}
        index={parentService.index}
        title={innerPage.title}
        deck={innerPage.headline}
        meta={[
          { label: "Sector", value: innerPage.sector.split("·")[0].trim() },
          { label: "Architecture", value: "UK/EU resident cloud" },
          { label: "Supervision", value: "Human sign-off on exceptions" },
        ]}
      />

      <div className="container service-detail-page">
        <div className="service-back">
          <Link href={`/services/${slug}`}>
            ← Back to {innerPage.parentTitle}
          </Link>
        </div>

        {innerPage.stats && innerPage.stats.length > 0 ? (
          <div
            className="proof-block"
            style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}
          >
            <div className="proof-grid">
              {innerPage.stats.map((stat) => (
                <div className="proof-item" key={stat.label}>
                  <div className="proof-value">{stat.value}</div>
                  <div className="proof-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="service-detail-body service-detail-body--page">
          <div className="service-detail-copy" style={{ gridColumn: "1" }}>
            <div
              style={{
                padding: "24px 28px",
                background: "var(--paper-raised)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                marginBottom: "36px",
              }}
            >
              <span
                className="section-label"
                style={{ marginBottom: "8px", display: "inline-block" }}
              >
                Overview
              </span>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--ink)",
                  margin: "0 0 16px 0",
                  fontWeight: 500,
                }}
              >
                {innerPage.description}
              </p>
              <div
                style={{
                  paddingTop: "14px",
                  borderTop: "1px solid var(--line)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-code)",
                    fontSize: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--muted)",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  Target audience & operations
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                    margin: 0,
                  }}
                >
                  {innerPage.audience}
                </p>
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <span
                className="section-label"
                style={{ marginBottom: "10px", display: "inline-block" }}
              >
                How it works
              </span>
              <h2
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  marginBottom: "24px",
                }}
              >
                Step-by-step process & workflow
              </h2>

              <dl className="journey-list" style={{ marginTop: "16px" }}>
                {innerPage.steps.map((step) => (
                  <div key={step.step}>
                    <dt>{step.step} · {step.title}</dt>
                    <dd>{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {innerPage.proofLink ? (
              <div
                style={{
                  padding: "20px 24px",
                  background: "var(--paper-tint)",
                  border: "1px solid var(--line-strong)",
                  borderRadius: "var(--radius)",
                  marginBottom: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    Measured Case Study
                  </span>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "var(--ink)",
                      margin: "4px 0 0 0",
                    }}
                  >
                    {innerPage.proofLink.text}
                  </p>
                </div>
                <Link
                  href={innerPage.proofLink.href}
                  className="btn btn--accent"
                  style={{ fontSize: "15px", padding: "8px 14px" }}
                >
                  Read case study
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            ) : null}
          </div>

          <aside className="service-detail-side" style={{ gridColumn: "2" }}>
            <div
              className="service-side-block"
              style={{
                background: "var(--paper-raised)",
                border: "1px solid var(--line)",
                padding: "20px",
                borderRadius: "var(--radius)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "14px",
                }}
              >
                <span style={{ color: "var(--accent)", display: "inline-flex" }}>
                  <ShieldIcon size={16} />
                </span>
                <h2 style={{ margin: 0, fontSize: "16px" }}>
                  Governance & Compliance
                </h2>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {innerPage.governance.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                      fontSize: "15px",
                      lineHeight: 1.45,
                      color: "var(--ink-2)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        marginTop: "2px",
                        flexShrink: 0,
                        display: "inline-flex",
                      }}
                    >
                      <CheckIcon size={15} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {siblingInnerPages.length > 0 ? (
              <div className="service-side-block" style={{ marginTop: "24px" }}>
                <h2>Also in {parentService.title}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {siblingInnerPages.map((sibling) => (
                    <Link
                      key={sibling.slug}
                      href={sibling.href}
                      style={{
                        padding: "12px 14px",
                        background: "var(--paper-tint)",
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius)",
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-code)",
                          fontSize: "15px",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--accent)",
                          display: "block",
                        }}
                      >
                        {sibling.kicker}
                      </span>
                      <strong
                        style={{
                          fontSize: "15px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "2px",
                        }}
                      >
                        {sibling.title}
                        <ArrowRight size={12} />
                      </strong>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="service-side-block" style={{ marginTop: "24px" }}>
              <h2>Parent Service</h2>
              <Link
                href={`/services/${slug}`}
                className="text-link"
                style={{ fontSize: "15px" }}
              >
                View all of {parentService.title}
                <ArrowRight size={13} />
              </Link>
            </div>
          </aside>
        </div>

        <nav
          className="case-pagination service-pagination"
          aria-label="Inner page navigation"
        >
          <Link
            className="case-page-link"
            href={`/services/${slug}`}
          >
            <span>← Back to service</span>
            <strong>{parentService.title}</strong>
          </Link>
          <Link className="case-page-link" href="/services">
            <span>All services →</span>
            <strong>Explore all four services</strong>
          </Link>
        </nav>
      </div>

      <CtaBand
        label="Start with an audit"
        title="Test this on your own live data."
        accent="on your own live data."
        body={innerPage.cta}
      />
    </>
  );
}
