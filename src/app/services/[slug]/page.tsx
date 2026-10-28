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
    title: service.title,
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
        eyebrow={`Services / ${service.index}`}
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

        <div className="service-detail-body service-detail-body--page">
          <ServiceDiagram slug={service.slug} index={service.index} />

          <div className="service-detail-copy">
            {service.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
              <p className="service-note">{service.trustNote}</p>
            ) : null}
          </aside>
        </div>

        <nav
          className="case-pagination service-pagination"
          aria-label="Services"
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
