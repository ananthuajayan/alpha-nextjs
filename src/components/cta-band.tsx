import Link from "next/link";
import { ArrowUpRight, CheckIcon } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

type CtaBandProps = {
  label?: string;
  title?: string;
  accent?: string;
  body?: string;
  note?: string;
};

export function CtaBand({
  label = "Start here",
  title = "Find out what AI can actually do for your business.",
  accent = "your business.",
  body = "Our AI Audit maps your processes, identifies the highest-ROI automations, and hands you a build-ready catalogue — whether you build with us or not.",
  note = "Fixed fee. Real data. No obligation to build.",
}: CtaBandProps) {
  const titleWithoutAccent = accent
    ? title.replace(accent, "").trimEnd()
    : title;

  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container">
        <SectionLabel>{label}</SectionLabel>
        <div className="cta-band-grid">
          <h2 id="cta-heading" data-reveal>
            {titleWithoutAccent}{" "}
            {accent ? <em>{accent}</em> : null}
          </h2>
          <div className="cta-band-side" data-reveal>
            <p>{body}</p>
            <Link className="btn btn--accent btn--lg" href="/contact">
              Book an AI Audit
              <ArrowUpRight size={15} />
            </Link>
            <p className="cta-band-note">
              <CheckIcon size={14} />
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
