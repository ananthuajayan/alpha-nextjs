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
import { CtaBand } from "@/components/cta-band";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  ShieldIcon,
} from "@/components/icons";

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

  const leadParagraph = service.body[0];
  const supportingParagraphs = service.body.slice(1);

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
        {/* Navigation Toolbar */}
        <div className="service-detail-header-bar">
          <Link href="/services" className="service-back-btn">
            <ArrowLeft size={16} />
            <span>All Services</span>
          </Link>
          <div className="service-status-pill">
            <span className="service-status-dot" />
            <span>Service {service.index} of 04 &bull; Production Ready</span>
          </div>
        </div>

        {/* Verified Impact & Performance Benchmarks */}
        {service.metrics && service.metrics.length > 0 ? (
          <section className="service-proof-strip" aria-label="Performance benchmarks">
            <div className="service-proof-strip-top">
              <span className="service-proof-strip-kicker">
                Verified Production Benchmarks
              </span>
              <span className="service-proof-strip-sub">
                Audited against customer ground-truth datasets
              </span>
            </div>
            <div className="service-proof-strip-grid">
              {service.metrics.map((metric) => (
                <div className="service-proof-card" key={metric.label}>
                  <div className="service-proof-card-val">{metric.value}</div>
                  <div className="service-proof-card-lbl">{metric.label}</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Core Content Grid */}
        <div className="service-detail-body--page">
          <main className="service-detail-main">
            {/* Overview & Core Solution */}
            <section className="service-overview-section">
              <span className="service-section-tag">
                Core Solution & Architecture
              </span>
              {service.headline ? (
                <h2 className="service-overview-title">
                  {service.headline}
                </h2>
              ) : null}

              {leadParagraph ? (
                <div className="service-lead-card">
                  <p>{leadParagraph}</p>
                </div>
              ) : null}

              {supportingParagraphs.length > 0 ? (
                <div className="service-body-paragraphs">
                  {supportingParagraphs.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              ) : null}
            </section>

            {/* Specialized Modules */}
            {service.innerPages && service.innerPages.length > 0 ? (
              <section className="service-modules-section">
                <span className="service-section-tag">
                  Specialised Modules
                </span>
                <h3 className="service-block-heading">
                  Inner platforms available under this service
                </h3>
                <p className="service-block-sub">
                  Modular tools designed to operate standalone or plugged directly into your existing infrastructure.
                </p>
                <div className="service-modules-grid">
                  {service.innerPages.map((inner) => (
                    <Link
                      key={inner.slug}
                      href={inner.href}
                      className="service-module-card"
                    >
                      <div>
                        <div className="service-module-card-top">
                          <span className="service-module-kicker">
                            {inner.kicker}
                          </span>
                          <span className="service-module-arrow">
                            <ArrowUpRight size={18} />
                          </span>
                        </div>
                        <h4 className="service-module-title">
                          {inner.title}
                        </h4>
                        <p className="service-module-desc">
                          {inner.description}
                        </p>
                      </div>
                      <div className="service-module-foot">
                        <span>Explore platform capabilities</span>
                        <ArrowRight size={16} />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Production Deliverables */}
            {service.deliverable && service.deliverable.length > 0 ? (
              <section className="service-deliverables-section">
                <span className="service-section-tag">
                  Production Deliverables
                </span>
                <h3 className="service-block-heading">
                  What we deliver & deploy
                </h3>
                <p className="service-block-sub">
                  Everything included in this solution from initial validation through to live operational rollout.
                </p>
                <div className="service-deliverables-grid">
                  {service.deliverable.map((item, idx) => (
                    <div key={item} className="service-deliverable-card">
                      <div className="service-deliverable-card-top">
                        <span className="service-deliverable-card-num">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="service-deliverable-card-icon">
                          <CheckIcon size={16} />
                        </span>
                      </div>
                      <p className="service-deliverable-card-text">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Delivery Shapes & Models */}
            {service.deliveryModels && service.deliveryModels.length > 0 ? (
              <section className="service-deploy-section">
                <span className="service-section-tag">
                  Operational Architecture
                </span>
                <h3 className="service-block-heading">
                  Delivery shapes & deployment models
                </h3>
                <p className="service-block-sub">
                  Flexible deployment patterns tailored to your security requirements, hosting preferences, and governance.
                </p>
                <div className="service-deploy-grid">
                  {service.deliveryModels.map((model) => (
                    <article className="service-deploy-card" key={model.title}>
                      <span className="service-deploy-badge">
                        {model.subtitle}
                      </span>
                      <h4 className="service-deploy-title">
                        {model.title}
                      </h4>
                      <p className="service-deploy-desc">
                        {model.description}
                      </p>
                      <ul className="service-deploy-list">
                        {model.points.map((point) => (
                          <li key={point} className="service-deploy-item">
                            <span className="service-deploy-icon">
                              <CheckIcon size={16} />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </main>

          {/* Sticky Sidebar Intelligence Dock */}
          <aside className="service-sidebar-dock">
            {/* Where It Fits */}
            <div className="service-side-panel">
              <div className="service-side-panel-header">
                <h3>Where It Fits</h3>
                <span className="service-side-panel-badge">{service.useCases.length} Workflows</span>
              </div>
              <ul className="service-fit-list">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="service-fit-item">
                    <span className="service-fit-bullet" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>


            {/* Governance & Trust */}
            {service.trustNote ? (
              <div className="service-trust-box">
                <div className="service-trust-box-head">
                  <span className="service-trust-box-icon">
                    <ShieldIcon size={18} />
                  </span>
                  <h3>Governance & Trust</h3>
                </div>
                <p className="service-trust-note">
                  {service.trustNote}
                </p>
                <div className="service-trust-tags">
                  <span className="service-trust-tag">UK & EU Resident</span>
                  <span className="service-trust-tag">Zero Model Training</span>
                  <span className="service-trust-tag">Audit Logs</span>
                </div>
              </div>
            ) : null}

            {/* Direct Consultation / Audit Card */}
            <div className="service-side-action-card">
              <h4 className="service-side-action-title">
                Ready to evaluate on your data?
              </h4>
              <p className="service-side-action-desc">
                We test accuracy against your own ground-truth data before any rollout.
              </p>
              <Link href="/contact" className="service-side-action-btn">
                <span>Book an AI Audit</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Previous / Next Service Pagination */}
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
