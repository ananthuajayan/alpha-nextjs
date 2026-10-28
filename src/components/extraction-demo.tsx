export function ExtractionDemo() {
  return (
    <div
      className="demo-wrap"
      role="img"
      aria-label="Illustration of an extraction review screen. A scanned delivery docket is read by the system. Purchase order number, delivery date and supplier are extracted with high confidence. A handwritten reference number is flagged for human review. Sample data."
    >
      <div className="demo-sheet" aria-hidden="true" />
      <div className="demo" aria-hidden="true">
        <div className="demo-bar">
          <span className="demo-live">
            <i />
            Live review
          </span>
          <span>Batch 04 / 128</span>
        </div>

        <div className="demo-body">
          <div className="demo-doc">
            <div className="demo-doc-head">
              <span>Delivery docket</span>
              <span>PO-4821</span>
            </div>
            <div className="demo-doc-lines">
              <i style={{ width: "34%" }} />
              <i style={{ width: "78%" }} />
              <i style={{ width: "64%" }} />
              <div className="demo-doc-gap" />
              <i style={{ width: "42%" }} />
              <i style={{ width: "86%" }} />
              <i style={{ width: "70%" }} />
              <i style={{ width: "52%" }} />
              <div className="demo-doc-gap" />
              <i style={{ width: "28%" }} />
              <i style={{ width: "74%" }} />
              <i style={{ width: "58%" }} />
            </div>
            <span className="demo-hl demo-hl--a" />
            <span className="demo-hl demo-hl--b" />
            <span className="demo-hl demo-hl--c" />
            <span className="demo-scan" />
            <p className="demo-doc-stamp">SCANNED / 300 DPI</p>
          </div>

          <div className="demo-fields">
            <p className="demo-fields-title">Extracted fields</p>

            <div className="demo-field">
              <span className="demo-field-key">Purchase order</span>
              <span className="demo-field-value">PO-2026-4821</span>
              <span className="demo-chip demo-chip--high">98.6%</span>
            </div>
            <div className="demo-field">
              <span className="demo-field-key">Delivery date</span>
              <span className="demo-field-value">12 Mar 2026</span>
              <span className="demo-chip demo-chip--high">99.1%</span>
            </div>
            <div className="demo-field demo-field--flag">
              <span className="demo-field-key">Handwritten ref.</span>
              <span className="demo-field-value">GRN 88417</span>
              <span className="demo-chip demo-chip--review">Review</span>
            </div>
            <div className="demo-field">
              <span className="demo-field-key">Supplier</span>
              <span className="demo-field-value">Northgate Supplies</span>
              <span className="demo-chip demo-chip--high">97.4%</span>
            </div>

            <div className="demo-flag-note">
              <span className="demo-flag-dot" />
              One field sent to a person. Nothing is guessed.
            </div>
          </div>
        </div>

        <div className="demo-foot">
          <span>Output format</span>
          <span className="demo-foot-value">Client&apos;s existing import file, unchanged</span>
          <span className="demo-foot-status">Ready</span>
        </div>
      </div>

      <div className="demo-float demo-float--a" aria-hidden="true">
        <strong>98.3%</strong>
        <span>straight through</span>
      </div>
      <div className="demo-float demo-float--b" aria-hidden="true">
        <strong>1.7%</strong>
        <span>to human review</span>
      </div>

      <p className="demo-caption">Illustration with sample data.</p>
    </div>
  );
}
