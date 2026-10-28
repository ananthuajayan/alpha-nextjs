export type Service = {
  slug: string;
  index: string;
  title: string;
  outcome: string;
  summary: string;
  body: string[];
  useCases: string[];
  trustNote?: string;
  deliverable?: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "document-intelligence",
    index: "01",
    title: "Document Intelligence & Data Extraction",
    outcome: "Clean, structured data from documents that were built for people, not machines.",
    summary:
      "Turn scanned documents, handwritten forms and legacy archives into clean, structured data.",
    body: [
      "We extract, validate and route documents at up to 20,000 per day, with human-review queues for anything the AI isn't sure about. Priced per page or as a deployed system — you only pay for pages we actually extract from.",
      "The pipeline reads the document, validates its own output with a second model, self-corrects where it can, and sends anything uncertain to a person. Results are returned in the format your downstream systems already expect, so nothing else has to change.",
    ],
    useCases: [
      "Medical records digitisation",
      "Proof-of-delivery dockets",
      "Lab reports",
      "Archive reindexing",
      "Box-level retention audits",
    ],
    trustNote:
      "The human-review branch is the trust message. Nothing is guessed — uncertain fields are flagged with the source document alongside them for a person to approve.",
    cta: "The AI Audit tests extraction on a sample of your real documents and reports measured accuracy before you commit to a build.",
  },
  {
    slug: "voice-agents",
    index: "02",
    title: "AI Voice Agents",
    outcome: "Every call answered, triaged and written back into your systems of record.",
    summary:
      "Phone agents that answer every call, triage requests and write everything back into your systems of record.",
    body: [
      "Built for environments where a missed or mishandled call matters — GP reception, customer service, compliance-sensitive sales. The agent answers, triages against your rules, and records the outcome directly in the system your team already uses.",
      "Callers who need a person are routed to one. Everything else is captured cleanly, with a transcript and an audit trail.",
    ],
    useCases: [
      "NHS GP reception and triage",
      "Appointment handling",
      "Out-of-hours cover",
      "Multilingual call handling",
    ],
    trustNote:
      "Calls that need judgement go to a person, with the transcript and context attached.",
    cta: "The AI Audit can test call handling on a sample of your real calls, so you see the quality before you commit.",
  },
  {
    slug: "workflow-automation",
    index: "03",
    title: "Workflow & Back-Office Automation",
    outcome: "The work between your systems stops being somebody's full-time job.",
    summary:
      "We automate the processes that sit between your systems — letters, repeat tickets, call quality, field operations.",
    body: [
      "We classify and file inbound letters, deflect repeat support tickets with answers drawn from your own knowledge base, and score and coach recorded sales calls. Humans stay in the loop where judgement is needed.",
      "The aim is not a new tool for your team to learn. It is work that arrives finished, or arrives with a clear decision for someone to make.",
    ],
    useCases: [
      "Clinical letter classification and filing",
      "Support ticket deflection",
      "Call scoring and coaching",
      "Field-operations apps",
    ],
    trustNote:
      "Humans stay in the loop where judgement is needed — the automation handles the repetition, not the decision.",
    cta: "The AI Audit maps the process that costs you most, tests it on real work, and reports what it would take to automate.",
  },
  {
    slug: "ai-audit",
    index: "04",
    title: "AI Audit & Strategy",
    outcome: "A build-ready catalogue of what to automate first, and what it is worth.",
    summary:
      "A structured, fixed-fee audit of your operations that produces a build-ready catalogue of automation opportunities.",
    body: [
      "Each opportunity comes with an ROI estimate and a delivery plan. It is how every engagement starts — and it is valuable even if you never build with us.",
      "We map your processes, test extraction or automation on a sample of your real data, and tell you plainly where AI will help and where it will not.",
    ],
    useCases: [
      "Process mapping",
      "Data-readiness assessment",
      "ROI modelling",
      "Delivery planning",
    ],
    deliverable: [
      "Prioritised automation catalogue",
      "Data-readiness assessment",
      "Compliance considerations",
      "Cost model",
    ],
    trustNote:
      "You own the catalogue and can take it to any delivery partner — including us.",
    cta: "Start with the audit. You leave with a prioritised catalogue, ROI estimates and a delivery plan — whether you build with us or not.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getAdjacentServices(slug: string) {
  const index = services.findIndex((service) => service.slug === slug);

  return {
    previous: index > 0 ? services[index - 1] : null,
    next: index >= 0 && index < services.length - 1 ? services[index + 1] : null,
  };
}

export const otherWork = [
  {
    title: "AI orthodontic photo screening",
    sector: "NHS orthodontic practice",
    body: "Screening and referral triage from clinical photographs, with a clinician reviewing every recommendation.",
  },
  {
    title: "Automated bill-of-quantities production",
    sector: "Construction",
    body: "Turning drawing sets and schedules into structured quantities for estimating teams.",
  },
  {
    title: "Archive audit and retention triage",
    sector: "Records management",
    body: "Box-level review of what is held, what must be kept, and what can safely leave the estate.",
  },
];
