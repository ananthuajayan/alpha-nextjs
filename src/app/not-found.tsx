import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <SectionLabel>404 / Not found</SectionLabel>
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <h1>That page has moved on.</h1>
        <p>
          The address may be out of date, or the page may have been renamed. The
          case studies and services are a good place to pick up the thread.
        </p>
        <div className="not-found-actions">
          <Link className="btn btn--accent" href="/">
            Back to home
            <ArrowRight size={15} />
          </Link>
          <Link className="text-link" href="/case-studies">
            Browse case studies
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
