"use client";

import { useMemo, useState } from "react";
import { caseStudies } from "@/content/case-studies";
import { sectorFilters } from "@/content/site";
import { CaseCard } from "@/components/case-card";

type FilterKey = (typeof sectorFilters)[number]["key"];

export function CaseFilter() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? caseStudies
        : caseStudies.filter((study) => study.sectorKey === active),
    [active],
  );

  return (
    <div className="case-filter">
      <div className="filter-bar" role="group" aria-label="Filter case studies by sector">
        {sectorFilters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className="filter-btn"
            aria-pressed={active === filter.key}
            onClick={() => setActive(filter.key)}
          >
            {filter.label}
            <span className="filter-count">
              {filter.key === "all"
                ? caseStudies.length
                : caseStudies.filter((study) => study.sectorKey === filter.key)
                    .length}
            </span>
          </button>
        ))}
      </div>

      <p className="filter-status" role="status" aria-live="polite">
        Showing {filtered.length}{" "}
        {filtered.length === 1 ? "case study" : "case studies"}
      </p>

      <div className="case-grid case-grid--index">
        {filtered.map((study, index) => (
          <div
            className="case-filter-item"
            key={study.slug}
            style={{ animationDelay: `${index * 45}ms` }}
          >
            <CaseCard
              study={study}
              index={caseStudies.indexOf(study)}
              featured={active === "all" && study.order === 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
