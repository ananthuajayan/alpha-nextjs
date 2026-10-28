import { site } from "@/content/site";

export function ProofStrip({ note }: { note?: string }) {
  return (
    <div className="proof-block">
      <dl className="proof-grid" aria-label="Measured results">
        {site.proof.map((item, index) => (
          <div
            className="proof-item"
            key={item.label}
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <dt className="proof-value">{item.value}</dt>
            <dd className="proof-label">{item.label}</dd>
          </div>
        ))}
      </dl>
      {note ? <p className="proof-note">{note}</p> : null}
    </div>
  );
}
