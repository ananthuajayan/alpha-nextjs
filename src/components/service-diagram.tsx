type DiagramMeta = {
  label: string;
  caption: string;
};

const diagramMeta: Record<string, DiagramMeta> = {
  "data-extraction": {
    label: "Extraction pipeline",
    caption:
      "Confident fields pass straight into the client's import format; uncertain items queue for human verification with the source document attached.",
  },
  "document-intelligence": {
    label: "Extraction pipeline",
    caption:
      "Uncertain fields are never guessed — they queue for a person with the source document attached.",
  },
  "gp-surgeries": {
    label: "Operating system flow",
    caption:
      "AI performs the first pass on patient calls and incoming letters; your practice team makes every decision touching a patient record.",
  },
  "voice-agents": {
    label: "Call flow",
    caption:
      "Callers who need a person are routed to one, with the transcript and context attached.",
  },
  orthodontics: {
    label: "Referral triage pipeline",
    caption:
      "Strict abstain-when-unsure protocol: the specialist clinician always has the final say on the review station.",
  },
  "other-work": {
    label: "Three applied platforms",
    caption:
      "The same proven core across construction, customer support and logistics: confident output flows through, edge cases go to experts.",
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
        sub="client import file"
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

function GpSurgeriesDiagram({ slug }: { slug: string }) {
  return (
    <svg
      className="service-diagram-svg"
      viewBox="0 0 836 240"
      role="img"
      aria-labelledby={`${slug}-dg-title ${slug}-dg-desc`}
    >
      <title id={`${slug}-dg-title`}>GP AI operating system flow</title>
      <desc id={`${slug}-dg-desc`}>
        Incoming patient phone calls and clinical letters are processed in a
        first pass by AI. Calls are triaged into routine vs urgent paths;
        letters receive suggested SNOMED codes and queue assignments. Practice
        staff retain full approval before anything touches clinical records.
      </desc>
      <Defs slug={slug} />
      <Node x={0} y={12} w={156} h={76} step="INBOUND" title="Patient calls" sub="8am rush · routine" />
      <Node x={0} y={120} w={156} h={76} step="INBOUND" title="Clinical letters" sub="hospital post · discharge" />

      <Node x={192} y={12} w={168} h={76} step="AI PASS" title="Sophia voice agent" sub="5-tier urgency triage" variant="accent" />
      <Node x={192} y={120} w={168} h={76} step="AI PASS" title="Letter classifier" sub="SNOMED CT · 11 queues" variant="accent" />

      <Node x={396} y={12} w={172} h={76} step="DECIDE" title="Urgent to staff" sub="immediate handoff" />
      <Node x={396} y={120} w={172} h={76} step="APPROVE" title="Staff batch review" sub="one-click sign-off" />

      <Node x={604} y={66} w={196} h={84} step="FILED" title="Clinical record" sub="EMIS · SystmOne audit trail" variant="dark" />

      <Edge slug={slug} d="M156 50 H192" />
      <Edge slug={slug} d="M156 158 H192" />
      <Edge slug={slug} d="M360 50 H396" />
      <Edge slug={slug} d="M360 158 H396" />
      <Edge slug={slug} d="M568 50 C586 50 586 98 604 102" accent />
      <Edge slug={slug} d="M568 158 C586 158 586 118 604 114" accent />
    </svg>
  );
}

function OrthodonticsDiagram({ slug }: { slug: string }) {
  return (
    <svg
      className="service-diagram-svg"
      viewBox="0 0 836 210"
      role="img"
      aria-labelledby={`${slug}-dg-title ${slug}-dg-desc`}
    >
      <title id={`${slug}-dg-title`}>Orthodontic referral triage pipeline</title>
      <desc id={`${slug}-dg-desc`}>
        Patients capture six guided photos. AI checks image quality, assesses
        IOTN traits, and enforces an abstain gate where unsure. Specialist
        clinicians approve all routing decisions on a dedicated review station.
      </desc>
      <Defs slug={slug} />
      <Node x={0} y={10} w={140} step="01" title="Guided capture" sub="6 mobile photos" />
      <Node x={164} y={10} w={144} step="02" title="Quality check" sub="lighting · blur · angle" />
      <Node x={332} y={10} w={144} step="03" title="IOTN analysis" sub="trait assessment" />
      <Node x={500} y={10} w={144} step="04" title="Abstain gate" sub="signals agree?" variant="accent" />
      <Node x={668} y={10} w={168} step="05" title="Clinician station" sub="specialist sign-off" variant="dark" />

      <Node x={500} y={120} w={144} h={76} step="UNSURE" title="Human review" sub="conflicting signals" />

      <Edge slug={slug} d="M140 52 H164" />
      <Edge slug={slug} d="M308 52 H332" />
      <Edge slug={slug} d="M476 52 H500" />
      <Edge slug={slug} d="M644 52 H668" accent />
      <Edge slug={slug} d="M572 94 V120" accent dashed />
      <Edge slug={slug} d="M644 158 C656 158 656 78 668 68" accent dashed />
    </svg>
  );
}

function OtherWorkDiagram({ slug }: { slug: string }) {
  return (
    <svg
      className="service-diagram-svg"
      viewBox="0 0 816 268"
      role="img"
      aria-labelledby={`${slug}-dg-title ${slug}-dg-desc`}
    >
      <title id={`${slug}-dg-title`}>Applied AI platforms across three sectors</title>
      <desc id={`${slug}-dg-desc`}>
        Architectural drawings turn into NRM2 BoQs with QS sign-off; support
        tickets generate draft replies from verified knowledge for agent
        review; logistics documents and manifests undergo automated compliance
        and offline tracking.
      </desc>
      <Defs slug={slug} />
      <text className="dg-col" x={0} y={12}>
        SECTOR
      </text>
      <text className="dg-col" x={242} y={12}>
        AUTOMATION CORE
      </text>
      <text className="dg-col" x={544} y={12}>
        SUPERVISED OUTCOME
      </text>

      <Node x={0} y={26} w={212} h={64} title="Construction" sub="architectural drawings" />
      <Node x={242} y={26} w={272} h={64} title="BQai measurement & take-off" sub="geometric element parsing" variant="accent" />
      <Node x={544} y={26} w={272} h={64} title="NRM2 Bill of Quantities" sub="QS review & pricing ready" variant="dark" />

      <Node x={0} y={112} w={212} h={64} title="Customer support" sub="repetitive ticket queues" />
      <Node x={242} y={112} w={272} h={64} title="Semantic KB & history retrieval" sub="context-grounded drafting" variant="accent" />
      <Node x={544} y={112} w={272} h={64} title="Agent-approved reply" sub="one-click edit & send" variant="dark" />

      <Node x={0} y={198} w={212} h={64} title="Maritime & logistics" sub="manifests & cargo paperwork" />
      <Node x={242} y={198} w={272} h={64} title="Dangerous goods rule check" sub="IMDG compliance verification" variant="accent" />
      <Node x={544} y={198} w={272} h={64} title="Verified audit & offline sync" sub="depot & quayside operational" variant="dark" />

      <Edge slug={slug} d="M212 58 H242" />
      <Edge slug={slug} d="M514 58 H544" accent />
      <Edge slug={slug} d="M212 144 H242" />
      <Edge slug={slug} d="M514 144 H544" accent />
      <Edge slug={slug} d="M212 230 H242" />
      <Edge slug={slug} d="M514 230 H544" accent />
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
    case "data-extraction":
    case "document-intelligence":
      return <DocumentDiagram slug={slug} />;
    case "gp-surgeries":
      return <GpSurgeriesDiagram slug={slug} />;
    case "voice-agents":
      return <GpSurgeriesDiagram slug={slug} />;
    case "orthodontics":
      return <OrthodonticsDiagram slug={slug} />;
    case "other-work":
    case "workflow-automation":
      return <OtherWorkDiagram slug={slug} />;
    case "ai-audit":
      return <AuditDiagram slug={slug} />;
    default:
      return null;
  }
}

export function ServiceDiagram({
  slug,
  index,
}: {
  slug: string;
  index: string;
}) {
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
