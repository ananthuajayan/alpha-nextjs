import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAdjacentServices,
  getService,
  services,
} from "@/content/services";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { ServiceDiagram } from "@/components/service-diagram";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight, ArrowUpRight, CheckIcon, ShieldIcon } from "@/components/icons";

type Params = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return { title: "Service not found" };

  return {
    title: `${service.title} — Services`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${site.name}`,
      description: service.outcome,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const { previous, next } = getAdjacentServices(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: `${site.domain}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.domain,
    },
    areaServed: ["United Kingdom", "European Union"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={service.eyebrow ? `${service.eyebrow} / ${service.index}` : `Services / ${service.index}`}
        index={service.index}
        title={service.title}
        deck={service.outcome}
        meta={[
          { label: "Engagement", value: "Starts with a fixed-fee AI Audit" },
          { label: "Delivery", value: "Rapid Deploy or Custom Build" },
          { label: "Data", value: "UK or EU resident" },
        ]}
      />

      <div className="container service-detail-page">
        <div className="service-back">
          <Link href="/services">← All services</Link>
        </div>

        {service.metrics && service.metrics.length > 0 ? (
          <div className="proof-block" style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}>
            <div className="proof-grid">
              {service.metrics.map((metric) => (
                <div className="proof-item" key={metric.label}>
                  <div className="proof-value">{metric.value}</div>
                  <div className="proof-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="service-detail-body service-detail-body--page">
          <ServiceDiagram slug={service.slug} index={service.index} />

          <div className="service-detail-copy">
            {service.headline ? (
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: 1.25, marginBottom: "20px" }}>
                {service.headline}
              </h2>
            ) : null}
            {service.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {service.innerPages && service.innerPages.length > 0 ? (
              <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
                <span className="section-label" style={{ marginBottom: "12px", display: "inline-block" }}>
                  Inner platforms & modules
                </span>
                <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
                  Specialised modules available under this service
                </h3>
                <div style={{ display: "grid", gap: "16px" }}>
                  {service.innerPages.map((inner) => (
                    <Link
                      key={inner.slug}
                      href={inner.href}
                      style={{
                        display: "block",
                        padding: "20px 22px",
                        background: "var(--paper-raised)",
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius)",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "border-color 0.2s, transform 0.2s",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <span style={{ fontFamily: "var(--font-code)", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)" }}>
                          {inner.kicker}
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--accent)", fontWeight: 500 }}>
                          Explore module <ArrowRight size={13} />
                        </span>
                      </div>
                      <h4 style={{ fontSize: "17px", fontWeight: 600, color: "var(--ink)", margin: "0 0 6px 0" }}>
                        {inner.title}
                      </h4>
                      <p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--muted)", margin: 0 }}>
                        {inner.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {service.deliveryModels && service.deliveryModels.length > 0 ? (
              <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
                <span className="section-label" style={{ marginBottom: "12px", display: "inline-block" }}>
                  How it deploys
                </span>
                <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>
                  Delivery shapes & operational models
                </h3>
                <div className="model-grid" style={{ marginTop: 0 }}>
                  {service.deliveryModels.map((model) => (
                    <article className="model-card" key={model.title}>
                      <p className="model-card-label">{model.subtitle}</p>
                      <h4 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>
                        {model.title}
                      </h4>
                      <p style={{ fontSize: "13px", lineHeight: 1.5, marginBottom: "16px" }}>
                        {model.description}
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {model.points.map((point) => (
                          <li key={point} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "12.5px", color: "var(--ink-2)" }}>
                            <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0, display: "inline-flex" }}>
                              <CheckIcon size={14} />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="service-detail-side">
            <div className="service-side-block">
              <h2>Where it fits</h2>
              <ul className="use-case-list">
                {service.useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </div>

            {service.deliverable ? (
              <div className="service-side-block">
                <h2>What you get</h2>
                <ul className="service-deliverable">
                  {service.deliverable.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {service.trustNote ? (
              <div className="service-side-block" style={{ background: "var(--paper-tint)", border: "1px solid var(--line)", padding: "16px", borderRadius: "var(--radius)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--accent)", display: "inline-flex" }}>
                    <ShieldIcon size={14} />
                  </span>
                  <span style={{ fontFamily: "var(--font-code)", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                    Governance & Trust
                  </span>
                </div>
                <p className="service-note" style={{ margin: 0, border: "none", padding: 0 }}>
                  {service.trustNote}
                </p>
              </div>
            ) : null}
          </aside>
        </div>

        <nav
          className="case-pagination service-pagination"
          aria-label="Services navigation"
        >
          {previous ? (
            <Link
              className="case-page-link"
              href={`/services/${previous.slug}`}
            >
              <span>← Previous service</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : (
            <Link className="case-page-link" href="/services">
              <span>← All services</span>
              <strong>Four ways we take work off your team</strong>
            </Link>
          )}

          {next ? (
            <Link className="case-page-link" href={`/services/${next.slug}`}>
              <span>Next service →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <Link className="case-page-link" href="/contact">
              <span>Start here →</span>
              <strong>Book an AI Audit</strong>
            </Link>
          )}
        </nav>
      </div>

      <CtaBand
        label="Start with an audit"
        title="See what this would look like on your data."
        accent="on your data."
        body={service.cta}
      />
    </>
  );
}
