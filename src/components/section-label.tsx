import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true">//</span>
      {children}
    </p>
  );
}
