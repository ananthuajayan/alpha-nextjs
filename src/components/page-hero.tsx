import type { ReactNode } from "react";
import { SectionLabel } from "@/components/section-label";
export { HomeHero } from "@/components/home-hero";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  deck: ReactNode;
  meta?: { label: string; value: string }[];
  index?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  deck,
  meta,
  index = "α",
  children,
}: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="container">
        <SectionLabel>{eyebrow}</SectionLabel>
        <div className="page-hero-main">
          <h1>{title}</h1>
          <div className="page-hero-side">
            <p className="page-hero-deck">{deck}</p>
            {meta?.length ? (
              <dl className="page-hero-meta">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
