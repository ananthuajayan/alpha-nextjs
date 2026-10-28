import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import { ArrowUpRight } from "@/components/icons";

export function CaseCard({
  study,
  index,
  featured = false,
}: {
  study: CaseStudy;
  index: number;
  featured?: boolean;
}) {
  return (
    <Link
      className="case-card"
      data-featured={featured ? "true" : "false"}
      href={`/case-studies/${study.slug}`}
    >
      <div className="case-card-top">
        <span className="case-card-sector">{study.sector}</span>
        <span className="case-card-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="case-card-metric">{study.bigMetric.value}</div>
      <p className="case-card-metric-label">{study.bigMetric.label}</p>

      <div className="case-card-copy">
        <h3>{study.cardTitle}</h3>
        <p>{study.summary}</p>
      </div>

      <div className="case-card-foot">
        <span>Read case study</span>
        <span className="case-card-arrow">
          <ArrowUpRight size={15} />
        </span>
      </div>

      {study.evaluation ? (
        <span className="case-card-badge">Proof of concept</span>
      ) : null}
    </Link>
  );
}
