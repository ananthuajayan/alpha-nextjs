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
  ArrowLeft,
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

      <div className="container py-8 sm:py-12">
        <div className="mb-8">
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition"
          >
            <ArrowLeft size={16} />
            Back to {innerPage.parentTitle}
          </Link>
        </div>

        {innerPage.stats && innerPage.stats.length > 0 ? (
          <div className="p-6 sm:p-8 mb-10 lg:mb-12 bg-paper-tint border border-line rounded-brand">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {innerPage.stats.map((stat) => (
                <div className="p-4 bg-paper border border-line rounded-brand shadow-sm" key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{stat.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-muted leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-14 items-start">
          <div className="space-y-10">
            <div className="p-6 sm:p-7 bg-paper-raised border border-line rounded-brand">
              <span className="inline-block mb-2 font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase text-accent font-semibold">
                Overview
              </span>
              <p className="text-[15px] leading-relaxed text-ink font-medium mb-4">
                {innerPage.description}
              </p>
              <div className="pt-3.5 border-t border-line">
                <span className="block mb-1 font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-muted">
                  Target audience & operations
                </span>
                <p className="text-[15px] leading-relaxed text-ink-2">
                  {innerPage.audience}
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block mb-2.5 font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase text-accent font-semibold">
                How it works
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-6">
                Step-by-step process & workflow
              </h2>

              <dl className="mt-4 border-t border-line divide-y divide-line">
                {innerPage.steps.map((step) => (
                  <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 py-4 items-baseline" key={step.step}>
                    <dt className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.05em] uppercase text-accent">
                      {step.step} · {step.title}
                    </dt>
                    <dd className="text-[15px] leading-relaxed text-ink-2 m-0">
                      {step.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {innerPage.proofLink ? (
              <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 bg-paper-tint border border-line-strong rounded-brand">
                <div>
                  <span className="font-mono text-xs sm:text-[13px] tracking-[0.1em] uppercase text-accent font-semibold">
                    Measured Case Study
                  </span>
                  <p className="mt-1 text-[15px] font-medium text-ink">
                    {innerPage.proofLink.text}
                  </p>
                </div>
                <Link
                  href={innerPage.proofLink.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-brand hover:bg-accent-dark transition group"
                >
                  Read case study
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            ) : null}
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--header-h)+24px)]">
            <div className="p-5 bg-paper-raised border border-line rounded-brand">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="text-accent inline-flex">
                  <ShieldIcon size={16} />
                </span>
                <h3 className="m-0 text-base font-semibold text-ink">
                  Governance & Compliance
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {innerPage.governance.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-snug text-ink-2"
                  >
                    <span className="text-accent mt-0.5 shrink-0 inline-flex">
                      <CheckIcon size={15} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {siblingInnerPages.length > 0 ? (
              <div className="p-5 bg-paper-raised border border-line rounded-brand">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                  Also in {parentService.title}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {siblingInnerPages.map((sibling) => (
                    <Link
                      key={sibling.slug}
                      href={sibling.href}
                      className="group block p-3 bg-paper-tint border border-line rounded-brand hover:border-accent transition"
                    >
                      <span className="block font-mono text-xs tracking-wider uppercase text-accent">
                        {sibling.kicker}
                      </span>
                      <strong className="flex items-center justify-between text-sm text-ink group-hover:text-accent transition mt-0.5">
                        {sibling.title}
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </strong>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="p-5 bg-paper-tint border border-line rounded-brand">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">Parent Service</h3>
              <Link
                href={`/services/${slug}`}
                className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong text-sm font-medium text-ink hover:text-accent hover:border-accent transition group"
              >
                View all of {parentService.title}
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </aside>
        </div>

        <nav
          className="grid grid-cols-2 border-t border-ink divide-x divide-line mt-14"
          aria-label="Inner page navigation"
        >
          <Link
            className="flex flex-col gap-2 py-6 pr-6 hover:text-accent transition"
            href={`/services/${slug}`}
          >
            <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">← Back to service</span>
            <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">{parentService.title}</strong>
          </Link>
          <Link className="flex flex-col gap-2 py-6 pl-6 text-right items-end hover:text-accent transition" href="/services">
            <span className="font-mono text-xs sm:text-[13px] tracking-[0.09em] uppercase text-muted">All services →</span>
            <strong className="max-w-[28ch] text-base sm:text-lg font-medium leading-snug tracking-[-0.025em]">Explore all four services</strong>
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
