import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

export default function NotFound() {
  return (
    <div className="min-h-[62vh] flex items-center py-16 sm:py-20">
      <div className="container">
        <SectionLabel>404 / Not found</SectionLabel>
        <p className="font-sans text-[clamp(5rem,16vw,12rem)] font-semibold leading-[0.8] text-accent my-4 select-none" aria-hidden="true">
          404
        </p>
        <h1 className="max-w-[16ch] mt-5.5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-none tracking-[-0.045em] text-ink">
          That page has moved on.
        </h1>
        <p className="max-w-[42ch] mt-4 text-[15.5px] leading-[1.6] text-muted">
          The address may be out of date, or the page may have been renamed. The
          case studies and services are a good place to pick up the thread.
        </p>
        <div className="flex flex-wrap items-center gap-5 mt-7">
          <Link className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white font-medium text-sm rounded-brand hover:bg-accent-dark transition" href="/">
            Back to home
            <ArrowRight size={15} />
          </Link>
          <Link className="inline-flex items-center gap-2 pb-0.5 border-b border-line-strong text-ink font-medium text-sm hover:text-accent hover:border-accent transition group" href="/case-studies">
            Browse case studies
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
