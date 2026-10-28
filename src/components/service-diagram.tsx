type DiagramMeta = {
  label: string;
  caption: string;
};

const diagramMeta: Record<string, DiagramMeta> = {
  "document-intelligence": {
    label: "Extraction pipeline",
    caption:
      "Uncertain fields are never guessed — they queue for a person with the source document attached.",
  },
  "voice-agents": {
    label: "Call flow",
    caption:
      "Callers who need a person are routed to one, with the transcript and context attached.",
  },
  "workflow-automation": {
    label: "Three recurring jobs",
    caption:
      "One pattern for letters, tickets and calls: classify, act, write back. Humans keep the judgement calls.",
  },
  "ai-audit": {
    label: "Audit path",
    caption:
      "Fixed fee. You own the catalogue and can take it to any delivery partner.",
  },
};

type NodeProps = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  step?: string;
  title: string;
  sub: string;
  variant?: "accent" | "dark";
};

function Node({
  x,
  y,
  w = 148,
  h = 84,
  step,
  title,
  sub,
  variant,
}: NodeProps) {
  const titleY = y + (step ? 41 : 27);
  const subY = y + (step ? 59 : 46);

  return (
    <g className={`dg-node${variant ? ` dg-node--${variant}` : ""}`}>
      <rect x={x} y={y} width={w} height={h} rx="2" />
      {step ? (
        <text className="dg-step" x={x + 14} y={y + 20}>
          {step}
        </text>
      ) : null}
      <text className="dg-title" x={x + 14} y={titleY}>
        {title}
      </text>
      <text className="dg-sub" x={x + 14} y={subY}>
        {sub}
      </text>
    </g>
  );
}

function Defs({ slug }: { slug: string }) {
  return (
    <defs>
      <marker
        id={`dg-arrow-${slug}`}
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="5.5"
        markerHeight="5.5"
        orient="auto"
      >
        <path className="dg-arrow-head" d="M0 0 8 4 0 8Z" />
      </marker>
      <marker
        id={`dg-arrow-accent-${slug}`}
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="5.5"
        markerHeight="5.5"
        orient="auto"
      >
        <path className="dg-arrow-head dg-arrow-head--accent" d="M0 0 8 4 0 8Z" />
      </marker>
    </defs>
  );
}

type EdgeProps = {
  slug: string;
  d: string;
  accent?: boolean;
  dashed?: boolean;
};

function Edge({ slug, d, accent = false, dashed = false }: EdgeProps) {
  return (
    <path
      className={`dg-edge${accent ? " dg-edge--accent" : ""}${
        dashed ? " dg-edge--dashed" : ""
      }`}
      d={d}
      markerEnd={`url(#dg-arrow-${accent ? "accent-" : ""}${slug})`}
    />
  );
}

function DocumentDiagram({ slug }: { slug: string }) {
  return (
    <svg
      className="service-diagram-svg"
      viewBox="0 0 836 234"
      role="img"
      aria-labelledby={`${slug}-dg-title ${slug}-dg-desc`}
    >
      <title id={`${slug}-dg-title`}>Document extraction pipeline</title>
      <desc id={`${slug}-dg-desc`}>
        Documents are read, extracted and checked by a second model. A
        confidence gate sends uncertain fields to human review with the source
        document before clean, structured data is returned.
      </desc>
      <Defs slug={slug} />
      <Node x={0} y={10} step="01" title="Read" sub="scans · photos · PDFs" />
      <Node x={172} y={10} step="02" title="Extract" sub="fields, tables, notes" />
      <Node x={344} y={10} step="03" title="Verify" sub="check + self-correct" />
      <Node
        x={516}
        y={10}
        step="04"
        title="Gate"
        sub="pass or review"
        variant="accent"
      />
      <Node
        x={688}
        y={10}
        step="05"
        title="Output"
        sub="structured data"
        variant="dark"
      />
      <Node
        x={516}
        y={144}
        h={78}
        step="QUEUE"
        title="Human review"
        sub="source doc attached"
      />
      <Edge slug={slug} d="M148 52 H172" />
      <Edge slug={slug} d="M320 52 H344" />
      <Edge slug={slug} d="M492 52 H516" />
      <Edge slug={slug} d="M664 52 H688" accent />
      <Edge slug={slug} d="M590 94 V144" accent dashed />
      <Edge slug={slug} d="M664 183 H762 V94" accent dashed />
    </svg>
  );
}

function VoiceDiagram({ slug }: { slug: string }) {
  return (
    <svg
      className="service-diagram-svg"
      viewBox="0 0 820 208"
      role="img"
      aria-labelledby={`${slug}-dg-title ${slug}-dg-desc`}
    >
      <title id={`${slug}-dg-title`}>AI voice agent call flow</title>
      <desc id={`${slug}-dg-desc`}>
        Every call is answered and triaged against your rules. The agent either
        handles it and logs the outcome, or transfers it to a person with the
        transcript and context. The result is written back to your system of
        record.
      </desc>
      <Defs slug={slug} />
      <Node x={0} y={10} w={148} step="01" title="Call" sub="any hour, any language" />
      <Node x={164} y={10} step="02" title="AI answers" sub="captures intent" />
      <Node x={328} y={10} step="03" title="Triage" sub="against your rules" />
      <Node
        x={500}
        y={6}
        h={78}
        step="ROUTE"
        title="Answered"
        sub="transcript + outcome"
        variant="accent"
      />
      <Node
        x={500}
        y={116}
        h={78}
        step="ESCALATE"
        title="Needs a person"
        sub="transfer + context"
      />
      <Node
        x={672}
        y={48}
        step="LOG"
        title="System of record"
        sub="written back for you"
        variant="dark"
      />
      <Edge slug={slug} d="M148 52 H164" />
      <Edge slug={slug} d="M312 52 H328" />
      <Edge slug={slug} d="M476 52 H488 V45 H500" />
      <Edge slug={slug} d="M476 52 H488 V155 H500" />
      <Edge slug={slug} d="M648 45 H660 V90 H672" />
      <Edge slug={slug} d="M648 155 H660 V90 H672" />
    </svg>
  );
}

function WorkflowDiagram({ slug }: { slug: string }) {
  return (
    <svg
      className="service-diagram-svg"
      viewBox="0 0 816 268"
      role="img"
      aria-labelledby={`${slug}-dg-title ${slug}-dg-desc`}
    >
      <title id={`${slug}-dg-title`}>Back-office automation map</title>
      <desc id={`${slug}-dg-desc`}>
        Inbound letters are classified and filed, repeat tickets are deflected
        with answers from your knowledge base, and recorded sales calls are
        scored and coached. Each job writes its result back for the team, with
        humans handling exceptions.
      </desc>
      <Defs slug={slug} />
      <text className="dg-col" x={0} y={12}>
        INPUT
      </text>
      <text className="dg-col" x={242} y={12}>
        AUTOMATION
      </text>
      <text className="dg-col" x={544} y={12}>
        OUTCOME
      </text>

      <Node x={0} y={26} w={212} h={64} title="Inbound letters" sub="scanned, posted, emailed" />
      <Node x={242} y={26} w={272} h={64} title="Classify & file" sub="routed by type and owner" />
      <Node x={544} y={26} w={272} h={64} title="Filed, not touched" sub="no manual sorting" />

      <Node x={0} y={112} w={212} h={64} title="Repeat tickets" sub="the same questions" />
      <Node x={242} y={112} w={272} h={64} title="Deflect with your knowledge base" sub="answers from your own content" />
      <Node x={544} y={112} w={272} h={64} title="Answered instantly" sub="humans take the exceptions" />

      <Node x={0} y={198} w={212} h={64} title="Sales calls" sub="recorded, already stored" />
      <Node x={242} y={198} w={272} h={64} title="Score & coach" sub="every call reviewed against your criteria" />
      <Node x={544} y={198} w={272} h={64} title="Manager sees the gaps" sub="coaching on evidence" />

      <Edge slug={slug} d="M212 58 H242" />
      <Edge slug={slug} d="M514 58 H544" />
      <Edge slug={slug} d="M212 144 H242" />
      <Edge slug={slug} d="M514 144 H544" />
      <Edge slug={slug} d="M212 230 H242" />
      <Edge slug={slug} d="M514 230 H544" />
    </svg>
  );
}

function AuditDiagram({ slug }: { slug: string }) {
  return (
    <svg
      className="service-diagram-svg"
      viewBox="0 0 816 130"
      role="img"
      aria-labelledby={`${slug}-dg-title ${slug}-dg-desc`}
    >
      <title id={`${slug}-dg-title`}>AI audit path</title>
      <desc id={`${slug}-dg-desc`}>
        We map your processes, test the highest-value opportunity on a sample of
        your real data, model the ROI, readiness and compliance position, and
        hand you a prioritised, build-ready catalogue.
      </desc>
      <Defs slug={slug} />
      <Node x={0} y={18} w={192} step="01" title="Map" sub="processes · systems · owners" />
      <Node x={208} y={18} w={192} step="02" title="Test" sub="a sample of your real data" />
      <Node x={416} y={18} w={192} step="03" title="Model" sub="ROI · readiness · compliance" />
      <Node
        x={624}
        y={18}
        w={192}
        step="04"
        title="Catalogue"
        sub="prioritised, build-ready"
        variant="dark"
      />
      <Edge slug={slug} d="M192 60 H208" />
      <Edge slug={slug} d="M400 60 H416" />
      <Edge slug={slug} d="M608 60 H624" />
    </svg>
  );
}

function Diagram({ slug }: { slug: string }) {
  switch (slug) {
    case "document-intelligence":
      return <DocumentDiagram slug={slug} />;
    case "voice-agents":
      return <VoiceDiagram slug={slug} />;
    case "workflow-automation":
      return <WorkflowDiagram slug={slug} />;
    case "ai-audit":
      return <AuditDiagram slug={slug} />;
    default:
      return null;
  }
}

export function ServiceDiagram({ slug, index }: { slug: string; index: string }) {
  const meta = diagramMeta[slug];

  if (!meta) return null;

  return (
    <figure className="service-diagram">
      <div className="service-diagram-head">
        <span>How it works</span>
        <span className="service-diagram-hint" aria-hidden="true">
          Scroll →
        </span>
        <span>
          {index} · {meta.label}
        </span>
      </div>
      <div
        className="service-diagram-scroll"
        tabIndex={0}
        role="group"
        aria-label={`${meta.label} diagram`}
      >
        <Diagram slug={slug} />
      </div>
      <figcaption>{meta.caption}</figcaption>
    </figure>
  );
}
