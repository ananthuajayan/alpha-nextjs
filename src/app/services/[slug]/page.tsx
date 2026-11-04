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

      <div className="container py-8 sm:py-12">
        {/* Navigation Toolbar */}
        <div className="flex items-center justify-between gap-4 py-5 mb-8 border-b border-line">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition">
            <ArrowLeft size={16} />
            <span>All Services</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-tint border border-line rounded-full text-xs font-mono tracking-wide text-ink-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Service {service.index} of 04 &bull; Production Ready</span>
          </div>
        </div>

        {/* Verified Impact & Performance Benchmarks */}
        {service.metrics && service.metrics.length > 0 ? (
          <section className="p-6 sm:p-8 mb-12 bg-paper-tint border border-line rounded-brand" aria-label="Performance benchmarks">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-line">
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase text-accent font-semibold">
                Verified Production Benchmarks
              </span>
              <span className="text-xs sm:text-sm text-muted">
                Audited against customer ground-truth datasets
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.metrics.map((metric) => (
                <div className="p-4 bg-paper border border-line rounded-brand shadow-sm" key={metric.label}>
                  <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{metric.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-muted leading-snug">{metric.label}</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-14 items-start">
          <main className="space-y-12 sm:space-y-16">
            {/* Overview & Core Solution */}
            <section>
              <span className="inline-block mb-3 font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase text-accent font-medium">
                Core Solution & Architecture
              </span>
              {service.headline ? (
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-4">
                  {service.headline}
                </h2>
              ) : null}

              {leadParagraph ? (
                <div className="p-5 sm:p-6 mb-6 bg-accent-soft border-l-2 border-accent text-base sm:text-lg leading-relaxed text-ink font-medium rounded-r-brand">
                  <p>{leadParagraph}</p>
                </div>
              ) : null}

              {supportingParagraphs.length > 0 ? (
                <div className="space-y-4 text-[15.5px] leading-relaxed text-ink-2">
                  {supportingParagraphs.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              ) : null}
            </section>

            {/* Specialized Modules */}
            {service.innerPages && service.innerPages.length > 0 ? (
              <section>
                <span className="inline-block mb-3 font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase text-accent font-medium">
                  Specialised Modules
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-2">
                  Inner platforms available under this service
                </h3>
                <p className="text-sm text-muted mb-6">
                  Modular tools designed to operate standalone or plugged directly into your existing infrastructure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.innerPages.map((inner) => (
                    <Link
                      key={inner.slug}
                      href={inner.href}
                      className="group flex flex-col justify-between p-5 bg-paper border border-line rounded-brand hover:border-accent hover:shadow-card transition"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-xs tracking-wider uppercase text-accent">
                            {inner.kicker}
                          </span>
                          <span className="text-ink group-hover:text-accent transition">
                            <ArrowUpRight size={18} />
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-ink group-hover:text-accent transition">
                          {inner.title}
                        </h4>
                        <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                          {inner.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-line text-xs font-mono uppercase text-muted group-hover:text-accent transition">
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
              <section>
                <span className="inline-block mb-3 font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase text-accent font-medium">
                  Production Deliverables
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-2">
                  What we deliver & deploy
                </h3>
                <p className="text-sm text-muted mb-6">
                  Everything included in this solution from initial validation through to live operational rollout.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
                  {service.deliverable.map((item, idx) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-paper-tint border border-line rounded-brand">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-xs text-accent font-semibold">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-accent">
                          <CheckIcon size={16} />
                        </span>
                      </div>
                      <p className="text-sm text-ink-2 font-medium leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Delivery Shapes & Models */}
            {service.deliveryModels && service.deliveryModels.length > 0 ? (
              <section>
                <span className="inline-block mb-3 font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase text-accent font-medium">
                  Operational Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-2">
                  Delivery shapes & deployment models
                </h3>
                <p className="text-sm text-muted mb-6">
                  Flexible deployment patterns tailored to your security requirements, hosting preferences, and governance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  {service.deliveryModels.map((model) => (
                    <article className="p-5 bg-paper border border-line rounded-brand" key={model.title}>
                      <span className="inline-block px-2.5 py-0.5 mb-2 bg-paper-tint border border-line rounded text-[11px] font-mono tracking-wider uppercase text-muted">
                        {model.subtitle}
                      </span>
                      <h4 className="text-base font-semibold text-ink">
                        {model.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-muted">
                        {model.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {model.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-ink-2 [&>span:first-child]:text-accent [&>span:first-child]:shrink-0 [&>span:first-child]:mt-0.5">
                            <span>
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
          <aside className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--header-h)+24px)]">
            {/* Where It Fits */}
            <div className="p-5 bg-paper-tint border border-line rounded-brand">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-line">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Where It Fits</h3>
                <span className="font-mono text-xs text-accent">{service.useCases.length} Workflows</span>
              </div>
              <ul className="space-y-2.5">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-2 text-xs sm:text-sm text-ink-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance & Trust */}
            {service.trustNote ? (
              <div className="p-5 bg-forest text-paper rounded-brand">
                <div className="flex items-center gap-2.5 mb-3 text-mint font-semibold text-sm">
                  <span className="text-mint">
                    <ShieldIcon size={18} />
                  </span>
                  <h3>Governance & Trust</h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-white/80 mb-4">
                  {service.trustNote}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white/10 rounded text-[11px] font-mono text-mint">UK & EU Resident</span>
                  <span className="px-2 py-0.5 bg-white/10 rounded text-[11px] font-mono text-mint">Zero Model Training</span>
                  <span className="px-2 py-0.5 bg-white/10 rounded text-[11px] font-mono text-mint">Audit Logs</span>
                </div>
              </div>
            ) : null}

            {/* Direct Consultation / Audit Card */}
            <div className="p-5 bg-accent text-white rounded-brand">
              <h4 className="text-base font-semibold leading-snug text-white">
                Ready to evaluate on your data?
              </h4>
              <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                We test accuracy against your own ground-truth data before any rollout.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-between w-full mt-4 px-4 py-2.5 bg-white text-ink font-medium text-xs rounded-brand hover:bg-paper-tint transition">
                <span>Book an AI Audit</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Previous / Next Service Pagination */}
        <nav
          className="grid grid-cols-2 border-t border-ink divide-x divide-line mt-14"
          aria-label="Services navigation"
        >
          {previous ? (
            <Link
              className="flex flex-col gap-2 py-6 pr-6 hover:text-accent transition"
              href={`/services/${previous.slug}`}
            >
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">← Previous service</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">{previous.title}</strong>
            </Link>
          ) : (
            <Link className="flex flex-col gap-2 py-6 pr-6 hover:text-accent transition" href="/services">
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">← All services</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">Four ways we take work off your team</strong>
            </Link>
          )}

          {next ? (
            <Link className="flex flex-col gap-2 py-6 pl-6 text-right items-end hover:text-accent transition" href={`/services/${next.slug}`}>
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">Next service →</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">{next.title}</strong>
            </Link>
          ) : (
            <Link className="flex flex-col gap-2 py-6 pl-6 text-right items-end hover:text-accent transition" href="/contact">
              <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">Start here →</span>
              <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">Book an AI Audit</strong>
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
