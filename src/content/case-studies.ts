export type SectorKey =
  | "healthcare"
  | "document-management"
  | "technology"
  | "logistics"
  | "sales";

export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  order: number;
  sector: string;
  sectorKey: SectorKey;
  title: string;
  cardTitle: string;
  headline: string;
  headlineAccent: string;
  summary: string;
  bigMetric: Metric;
  metrics: Metric[];
  profile: string;
  challenge: string[];
  built: string[];
  results: string[];
  tech: string[];
  residency: string;
  status: string;
  featured?: boolean;
  evaluation?: boolean;
  quote: Metric;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nhs-gp-voice-and-letters",
    order: 1,
    sector: "Healthcare",
    sectorKey: "healthcare",
    title:
      "AI voice reception and letter automation for a multi-site NHS GP practice",
    cardTitle: "Reception that answers every call. Letters that file themselves.",
    headline: "Reception time, returned to",
    headlineAccent: "patient care.",
    summary:
      "An AI voice agent and clinical letter classifier for a three-site NHS GP practice group — integrated with the clinical record, with a person approving every code before it is filed.",
    bigMetric: {
      value: "£60k",
      label: "Of reception time freed a year across three sites",
    },
    metrics: [
      { value: "11", label: "Clinical workflow queues automated" },
      { value: "~£30k", label: "Letter saving per practice, per year" },
      {
        value: "Mid-70s%",
        label: "Clinical coding accuracy, climbing each review cycle",
      },
      { value: "5-tier", label: "Clinical urgency model for call triage" },
    ],
    profile:
      "An NHS GP practice group operating across three sites in England, handling thousands of patient calls and hundreds of inbound clinical letters every week.",
    challenge: [
      "Reception phone lines were overwhelmed at peak times, and every inbound hospital letter had to be read, coded and filed by hand into the clinical system across 11 different workflow queues — slow, repetitive work competing with patient-facing time.",
    ],
    built: [
      "An AI voice agent that answers patient calls, triages requests against a five-tier clinical urgency model, and writes outcomes directly into the practice's clinical system.",
      "Alongside it, a clinical letter classifier that reads each inbound letter, extracts diagnoses and procedures, applies standard clinical codes (SNOMED), and routes the letter to the correct workflow queue — with an approval interface so practice staff review and sign off before anything is filed. Letters needing clinical judgement are automatically routed to a named clinician.",
    ],
    results: [
      "Reception time freed was equivalent to avoiding two new hires — roughly £60,000 a year across the three sites",
      "Letter automation projected to save ~£30,000 per practice per year",
      "Clinical coding accuracy in the mid-70s per cent and climbing with each review cycle, with every code human-approved before filing",
      "Rollout approach: simple letters filed automatically first, complex letters staged in with human review",
    ],
    tech: [
      "Cloud voice orchestration",
      "Medical language models",
      "Three-engine clinical coding pipeline",
      "Deep integration with the practice's clinical records system",
      "Human-in-the-loop approval portal",
    ],
    residency: "UK",
    status: "In production",
    featured: true,
    quote: {
      value: "£60,000",
      label:
        "Reception time freed a year — equivalent to avoiding two new hires across the group.",
    },
  },
  {
    slug: "document-bureau-extraction",
    order: 2,
    sector: "Document management",
    sectorKey: "document-management",
    title:
      "Production document extraction for an Irish document management bureau",
    cardTitle: "98.3% straight through, at bureau scale.",
    headline: "98.3% straight through,",
    headlineAccent: "at bureau scale.",
    summary:
      "How an Irish document management and scanning bureau replaced manual indexing with AI extraction, without changing a single downstream system.",
    bigMetric: {
      value: "98.3%",
      label: "Of a 7,000-document batch passed validation fully automatically",
    },
    metrics: [
      { value: "97.9%", label: "Accuracy on purchase order numbers" },
      { value: "96.3%", label: "Accuracy on handwritten references" },
      { value: "1.7%", label: "Of the batch routed to human review" },
      { value: "20,000", label: "Documents a day platform capacity" },
    ],
    profile:
      "A document management and scanning bureau in Ireland processing ~25,000 scanned images a month for clients including a major public hospital, with five staff spending the equivalent of 3+ full-time roles on manual data entry.",
    challenge: [
      "Every scanned document — including handwritten delivery dockets — had to be keyed by hand into the bureau's database: 18 seconds to a minute per document, with 5–10% needing rework. The bureau wanted to grow volume 15–20% without growing headcount.",
    ],
    built: [
      "An automated extraction pipeline that reads each scanned document (including handwritten reference numbers), extracts the required fields, validates its own output with a second AI model, self-corrects, and routes anything uncertain to a human review queue.",
      "Results are returned in the bureau's exact existing import format, so nothing changed in their downstream systems. Documents move in and out over secure file transfer, and all processing stays inside an EU (Dublin) environment for GDPR compliance.",
    ],
    results: [
      "97.9% accuracy on purchase order numbers and 96.3% on handwritten reference numbers in blind testing against ground truth",
      "On a 7,000-document production batch, 98.3% of documents passed validation fully automatically — only 1.7% routed to human review",
      "Platform capacity of up to 20,000 documents per day, against a previous manual throughput of ~1,200 a month per operator",
      "The client committed to a multi-year production agreement on per-page pricing",
    ],
    tech: [
      "Multi-model extraction with visual self-validation",
      "Handwriting recognition",
      "Human-review routing",
      "SFTP ingestion",
      "EU-resident cloud infrastructure",
      "Per-page commercial model",
    ],
    residency: "EU (Dublin)",
    status: "Multi-year production agreement",
    featured: true,
    quote: {
      value: "98.3%",
      label:
        "Of a 7,000-document production batch passed validation fully automatically. Only 1.7% needed a person.",
    },
  },
  {
    slug: "nhs-records-digitisation",
    order: 3,
    sector: "Healthcare records",
    sectorKey: "healthcare",
    title:
      "NHS medical records digitisation for a records storage company",
    cardTitle: "Same-day records. No temporary data-entry hires.",
    headline: "Same-day records.",
    headlineAccent: "Without the temp hires.",
    summary:
      "A document intelligence platform that indexed scanned medical records at NHS scale, on UK-resident infrastructure, through the trust's ICT security review.",
    bigMetric: {
      value: "£60k",
      label: "Saved in temporary data-entry hiring",
    },
    metrics: [
      { value: "Same day", label: "Records available to the clinical team" },
      { value: "100%", label: "UK-resident processing" },
      { value: "NHS ICT", label: "Security assurance passed" },
      { value: "£60k", label: "Temporary hiring avoided" },
    ],
    profile:
      "A UK document storage and scanning company digitising medical records for NHS organisations.",
    challenge: [
      "Scanned medical records needed to be indexed and made searchable fast enough for clinical teams to rely on, without hiring temporary data-entry staff — and the whole pipeline had to pass NHS ICT security review.",
    ],
    built: [
      "We deployed our document intelligence platform to classify, index and extract key data from scanned medical records, running entirely on UK-resident cloud infrastructure. We completed the NHS trust's ICT security questionnaire process as part of delivery.",
    ],
    results: [
      "Saved approximately £60,000 in temporary data-entry hiring",
      "Records available to the trust by the end of the same day",
      "Passed NHS ICT security assurance with fully UK-resident processing",
    ],
    tech: [
      "Document intelligence platform",
      "UK-region cloud AI services",
      "NHS security questionnaire compliance",
    ],
    residency: "UK",
    status: "In production",
    quote: {
      value: "Same day",
      label:
        "Records available to the trust by the end of the day, with £60,000 in temporary hiring avoided.",
    },
  },
  {
    slug: "support-ticket-deflection",
    order: 4,
    sector: "Technology",
    sectorKey: "technology",
    title: "AI support ticket deflection for an EPOS software provider",
    cardTitle: "Seven agents' workload, handled by five.",
    headline: "Every repeat question,",
    headlineAccent: "answered once.",
    summary:
      "A retrieval pipeline over 17,500 historical tickets that drafts a reply inside the existing helpdesk, with every answer reviewed by a person before it is sent.",
    bigMetric: {
      value: "7 → 5",
      label: "Support agents, with no drop in coverage",
    },
    metrics: [
      { value: "17,500", label: "Historical tickets analysed" },
      { value: "2", label: "Knowledge sources in the retrieval pipeline" },
      { value: "100%", label: "Replies reviewed by a human" },
      { value: "Real time", label: "Draft replies inside the existing helpdesk" },
    ],
    profile:
      "A point-of-sale software and hardware provider whose support desk handles a high volume of repeat technical queries.",
    challenge: [
      "Support agents answered the same questions repeatedly, with answers scattered across a knowledge base and 17,500 historical tickets. Response quality depended on which agent picked up the ticket.",
    ],
    built: [
      "We analysed 17,500 historical support tickets and built a retrieval pipeline over two knowledge sources — the company's indexed knowledge base and its full ticket history.",
      "The system drafts a reply for every inbound ticket inside the client's existing support platform; agents review, edit, rate and send, and good answers are promoted into the knowledge base so the system improves with use.",
    ],
    results: [
      "Support team resourcing reduced from 7 agents to 5",
      "Tickets sync and receive draft replies in real time inside the existing helpdesk — no change to the support team's tools",
      "Every reply reviewed by a human before sending",
    ],
    tech: [
      "Retrieval-augmented generation over dual vector stores",
      "Eight-stage document pipeline",
      "Helpdesk integration",
      "Agent review-and-rate workflow",
    ],
    residency: "UK",
    status: "In production",
    featured: true,
    quote: {
      value: "7 → 5",
      label:
        "Support agents, with every reply still reviewed by a person before it is sent.",
    },
  },
  {
    slug: "offline-field-operations",
    order: 5,
    sector: "Logistics",
    sectorKey: "logistics",
    title: "Offline-first field operations app for a records management company",
    cardTitle: "Pallet tracking that works off the grid.",
    headline: "Warehouse tracking that works",
    headlineAccent: "off the grid.",
    summary:
      "A progressive web app for warehouse staff that captures scans, moves and locations on the device and syncs when connectivity returns — with zero data loss.",
    bigMetric: {
      value: "Zero",
      label: "Data lost through warehouse connectivity dead zones",
    },
    metrics: [
      { value: "Real time", label: "Pallet tracking replacing paper" },
      { value: "Zero", label: "Data loss in connectivity dead zones" },
      { value: "Existing", label: "Devices used — no new hardware" },
      { value: "Phase 2", label: "Camera-based tracking in scoping" },
    ],
    profile:
      "A records management and storage company in Northern Ireland moving thousands of pallets and archive boxes through its warehouses.",
    challenge: [
      "Pallet movements were tracked on paper in warehouse areas with unreliable connectivity, so stock positions lagged reality and searches took too long.",
    ],
    built: [
      "A progressive web app for warehouse staff that works fully offline — scans, moves and locations are captured on the device and sync automatically when connectivity returns.",
      "Phase 2 (in scoping) adds camera-based tracking from the warehouse CCTV estate.",
    ],
    results: [
      "Phase 1 shipped: real-time pallet tracking replacing paper records",
      "Works through warehouse connectivity dead zones with zero data loss",
      "Deployed on staff's existing devices — no new hardware",
    ],
    tech: [
      "Offline-first progressive web app",
      "Background sync",
      "Barcode scanning",
      "Computer-vision extension in scoping",
    ],
    residency: "UK",
    status: "Phase 1 in production",
    quote: {
      value: "Zero",
      label:
        "Data lost through connectivity dead zones, on the devices staff already carry.",
    },
  },
  {
    slug: "sales-call-scoring",
    order: 6,
    sector: "Sales",
    sectorKey: "sales",
    title: "AI call scoring and coaching for an outbound sales agency",
    cardTitle: "Every recorded call scored. Not a sample.",
    headline: "Every call scored.",
    headlineAccent: "Not a sample.",
    summary:
      "A multilingual call intelligence platform that scores 100% of recorded calls against campaign-specific criteria the client edits themselves.",
    bigMetric: {
      value: "100%",
      label: "Of recorded calls scored, versus sampled manual review",
    },
    metrics: [
      { value: "7", label: "Languages transcribed natively" },
      { value: "100%", label: "Of recorded calls scored" },
      { value: "pence", label: "Per-call analysis cost, down from ~£3" },
      { value: "POC", label: "Live evaluation with the client" },
    ],
    profile:
      "An established lead-generation and outbound calling agency running 50–60 client campaigns at a time across UK, European and US markets, in seven languages.",
    challenge: [
      "Call quality review was manual and sampled — managers could listen to only a fraction of recorded calls, and campaign-specific scripts and qualification criteria made generic QA tools useless.",
    ],
    built: [
      "A call intelligence platform that ingests recorded calls per campaign, transcribes them in the agent's native language (German, Italian, French, Spanish, Portuguese, Polish, Hungarian), and scores every call in English against campaign-specific criteria the client edits themselves.",
      "Gatekeeper and short calls are excluded from team scores so metrics stay fair; campaigns are identified automatically from the dialled number.",
    ],
    results: [
      "100% of recorded calls scored, versus sampled manual review",
      "Scoring criteria self-serve editable by the client per campaign",
      "Per-call analysis cost engineered down from ~£3 to pence per call for production",
    ],
    tech: [
      "Multilingual transcription",
      "Campaign-aware scoring models",
      "Self-serve criteria configuration",
      "Telephony-platform ingestion",
    ],
    residency: "UK / EU",
    status: "Proof of concept, in live evaluation",
    evaluation: true,
    quote: {
      value: "100%",
      label:
        "Of recorded calls scored, against campaign-specific criteria the client controls.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAdjacentStudies(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
}
