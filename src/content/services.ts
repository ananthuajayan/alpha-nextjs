export type InnerPage = {
  slug: string;
  parentSlug: string;
  parentTitle: string;
  title: string;
  headline: string;
  kicker: string;
  description: string;
  audience: string;
  sector: string;
  stats?: { value: string; label: string }[];
  steps: { step: string; title: string; description: string }[];
  governance: string[];
  proofLink?: { text: string; href: string };
  cta: string;
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  outcome: string;
  summary: string;
  eyebrow?: string;
  headline?: string;
  body: string[];
  useCases: string[];
  trustNote?: string;
  deliverable?: string[];
  metrics?: { value: string; label: string }[];
  deliveryModels?: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
  }[];
  innerPages?: {
    slug: string;
    href: string;
    title: string;
    kicker: string;
    description: string;
  }[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "data-extraction",
    index: "01",
    title: "Data extraction",
    outcome:
      "Turn paper, scans and legacy archives into checked, structured data in your client's format.",
    summary:
      "AI document data capture for scanning bureaux, data-entry firms and records companies. Checked data under your own brand, with people reviewing anything uncertain.",
    eyebrow: "For scanning bureaux, records companies and back offices",
    headline: "The AI layer behind your scanning.",
    body: [
      "Most bureaux are caught between two difficult choices: enterprise document software that is expensive to license, staff and maintain, or raw cloud OCR that returns unstructured text with no review step and zero accuracy guarantees.",
      "We deliver document extraction as a managed service or self-hosted pipeline. Confident fields pass straight through into your client's existing import format; uncertain items queue for human verification. You stop manual keying, keep the client relationship, and publish verified accuracy.",
      "Every engagement begins by measuring accuracy on a sample batch of your real documents against your own ground truth, so you know exactly what is automated and what reaches a person before you commit.",
    ],
    metrics: [
      {
        value: "97.9%",
        label: "Accuracy on PO numbers across 4,177 real documents",
      },
      {
        value: "96.3%",
        label: "Accuracy on handwritten goods-received numbers",
      },
      {
        value: "98.3%",
        label: "Straight-through processing rate (only 1.7% to human review)",
      },
      {
        value: "~20,000",
        label: "Documents per day processed at bureau platform scale",
      },
    ],
    useCases: [
      "Scanning bureaux & data-entry operations",
      "Proof-of-delivery dockets, GRNs & invoices",
      "NHS medical records digitisation & indexing",
      "Archive reindexing batch by batch",
      "Pre-scan archive box audits (BoxScan)",
    ],
    deliverable: [
      "Client-ready structured data in your existing CSV, JSON or XML format",
      "Field-level confidence scoring with automated verification pass",
      "Dedicated human review portal for low-confidence exceptions",
      "Complete audit trail per document, field, and operator action",
    ],
    deliveryModels: [
      {
        title: "Managed Service",
        subtitle: "We run it for you",
        description:
          "You send scans to us over SFTP. We run extraction on our platform and return checked data in your client's import format. No software to buy or install.",
        points: [
          "Zero software to buy, configure or maintain",
          "Human review handled by our team or yours",
          "Elastic capacity that scales up and down with your contracts",
        ],
      },
      {
        title: "Your Own System",
        subtitle: "You own and run it",
        description:
          "We set up a pipeline you run yourselves, configured to your documents, infrastructure, and downstream systems.",
        points: [
          "You own the system, configuration, and documentation",
          "Runs on your infrastructure or a UK/EU cloud of your choice",
          "Comprehensive staff training and ongoing monthly tuning",
        ],
      },
    ],
    innerPages: [
      {
        slug: "docbox",
        href: "/services/data-extraction/docbox",
        title: "DocBox Scanner",
        kicker: "Document Intelligence Platform",
        description:
          "Production-scale AI document extraction with confidence scoring, human curation portal, and direct client file export.",
      },
      {
        slug: "boxscan",
        href: "/services/data-extraction/boxscan",
        title: "BoxScan",
        kicker: "Pre-Scan Archive Box Audit",
        description:
          "Catalogue and barcode archive boxes, apply retention rules, and only pay to scan what your retention schedule says has to live.",
      },
    ],
    trustNote:
      "White-label by design. Your brand on the service and the output. Processing in London (UK) or Dublin (EU). NDAs as standard, and client data is never used to train external models.",
    cta: "Send us a sample batch of your documents. We will run it against your ground truth and show you the measured accuracy and human review rate before you decide.",
  },
  {
    slug: "gp-surgeries",
    index: "02",
    title: "GP AI operating system",
    outcome:
      "Every patient call answered and incoming letters sorted — your clinical staff stay in charge.",
    summary:
      "One AI system for your patient line and letter tray. Every call answered with clinical urgency triage, and every letter sorted and SNOMED-coded for staff sign-off.",
    eyebrow: "For practice managers and GP partners",
    headline: "The AI operating system for your practice.",
    body: [
      "GP surgeries face an intense 8am rush on the phone lines and mountains of incoming hospital post that take hours of manual reading and coding. Our system acts as an intelligent first-pass layer between incoming communications and your clinical system.",
      "Our patient-line voice agent, Sophia, answers every call, applies a structured five-tier clinical urgency framework, and files a summary directly to the patient record. Routine requests reach the right queue; anything urgent or unclear transfers immediately to reception staff.",
      "Inbound letters and discharge summaries are read, matched to one of 11 workflow queues, and assigned suggested SNOMED CT codes. Staff approve or amend in quick batches — nothing reaches a patient record until a person has signed it off.",
    ],
    metrics: [
      {
        value: "£60k/yr",
        label: "Reception time freed across a three-site NHS GP group",
      },
      {
        value: "2 hires",
        label: "Planned receptionist hires avoided through call deflection",
      },
      {
        value: "£30k/yr",
        label: "Projected annual administrative saving per practice from letter sorting",
      },
      {
        value: "11 queues",
        label: "Clinical letter workflow queues handled automatically",
      },
    ],
    useCases: [
      "8am peak patient call answering & queue reduction",
      "Structured five-tier clinical urgency triage",
      "Repeat prescription & test result query routing",
      "Hospital & outpatient letter classification",
      "SNOMED CT coding suggestion & EMIS/SystmOne record filing",
    ],
    deliverable: [
      "AI voice agent (Sophia) configured to your practice opening hours and triage rules",
      "Automated clinical letter classification into your existing 11 workflow queues",
      "Staff approval interface with source document preview and one-click filing",
      "Full NHS governance pack: DTAC, DCB0129, DSPT, DPIA, and audit logs",
    ],
    deliveryModels: [
      {
        title: "Module 1: The Patient Line",
        subtitle: "Voice Agent (Sophia)",
        description:
          "Picks up every call with natural British English, understands patient requests, performs urgency triage, and files summaries to the patient record.",
        points: [
          "Zero engaged tone at 8am opening time",
          "Urgent or unclear calls handed to staff straight away",
          "Every call logged, recorded, and summarised for clinical audit",
        ],
      },
      {
        title: "Module 2: The Letter Tray",
        subtitle: "Clinical Letter Sorting & Coding",
        description:
          "Reads incoming clinical letters, assigns SNOMED CT codes, and queues them into 11 categories for rapid batch sign-off.",
        points: [
          "Letters sorted before practice doors open",
          "Staff approve suggestions in batches instead of keying from scratch",
          "Nothing touches a record without human sign-off",
        ],
      },
    ],
    innerPages: [
      {
        slug: "voice-agents",
        href: "/services/gp-surgeries/voice-agents",
        title: "AI Voice Agents",
        kicker: "Healthcare & Housing Voice Agents",
        description:
          "Natural-language phone agents that answer, triage and route calls around the clock, with clear escalation to a person.",
      },
    ],
    trustNote:
      "Built for NHS assurance from day one. DTAC evidence pack, DCB0129 clinical risk management with your CSO, DSPT standards, DPIA with your DPO, and UK cloud hosting.",
    cta: "Book a consultation with our healthcare delivery team. We will review your call and letter volumes and demonstrate the measured savings.",
  },
  {
    slug: "orthodontics",
    index: "03",
    title: "Orthodontics",
    outcome:
      "Triage referrals before the waiting room with clinician-supervised photo analysis.",
    summary:
      "Patients take six guided photos on their phone. The system assesses IOTN-relevant features and suggests a queue — with a specialist clinician signing off every outcome.",
    eyebrow: "For NHS and mixed orthodontic practices",
    headline: "Triage referrals before the waiting room.",
    body: [
      "Every orthodontic referral currently gets a face-to-face appointment, including the many patients whose clinical photographs clearly show they qualify (or do not qualify) for NHS treatment under IOTN guidelines. Those appointments take clinic time and make waiting lists longer for everyone.",
      "Orthopic guides patients through standardised six-photo capture on their smartphone, validating lighting, framing and blur in real time. Independent AI models evaluate physical traits relevant to the Index of Orthodontic Treatment Need (IOTN).",
      "Under our strict 'abstain when unsure' principle, the system only suggests a queue when independent models agree. Conflicting signals defer to human review. A specialist clinician confirms or changes every decision on the dedicated review station.",
    ],
    metrics: [
      {
        value: "700+",
        label: "Patient capture sessions completed in clinical validation",
      },
      {
        value: "6 photos",
        label: "Standardised guided patient capture (front, left, right, upper, lower, bite)",
      },
      {
        value: "100%",
        label: "Clinician sign-off on every routing recommendation",
      },
      {
        value: "IOTN",
        label: "Trait evaluation aligned to NHS orthodontic indices",
      },
    ],
    useCases: [
      "NHS orthodontic referral triage",
      "Pre-assessment clinic waiting list reduction",
      "Mobile guided patient photographic capture",
      "IOTN trait pre-screening & feature evaluation",
      "Specialist clinician review station decision support",
    ],
    deliverable: [
      "Guided patient mobile capture web application with real-time photo quality feedback",
      "Multi-model trait evaluation scoring dental alignment against IOTN criteria",
      "Clinician review workstation displaying 6 photos, signals, and suggested routing",
      "Regulatory & safety compliance: UKCA pathway, DCB0129, DTAC, DSPT, and DPIA",
    ],
    trustNote:
      "Decision support, not diagnosis. A clinician signs off every outcome on the review station. In active clinical validation with an NHS orthodontic practice; UKCA pathway in progress.",
    cta: "Join our orthodontic validation programme. Register interest to evaluate Orthopic on your practice referral flow.",
  },
  {
    slug: "other-work",
    index: "04",
    title: "Other work",
    outcome:
      "Applied automation platforms for construction, customer support and maritime logistics.",
    summary:
      "Our extraction and automation core applied to NRM2 Bills of Quantities from architectural drawings, knowledge-grounded support ticket deflection, and logistics document compliance.",
    eyebrow: "Applied AI platforms",
    headline: "Our platform also runs in three other places.",
    body: [
      "Our document intelligence and automation core was built for demanding, regulated environments. The same architecture applies wherever work is repetitive, document-heavy, or high stakes: confident output flows through, while edge cases route to subject matter experts.",
      "In construction, BQai transforms architectural drawing sets into NRM2-compliant Bills of Quantities in days rather than weeks. In customer operations, our support deflection engine drafts replies grounded in your knowledge base and ticket history. In logistics, we automate dangerous goods checks and provide offline pallet tracking.",
    ],
    metrics: [
      {
        value: "Weeks → Days",
        label: "Turnaround for NRM2 Bills of Quantities from drawings",
      },
      {
        value: "7 → 5",
        label: "Agents needed on a support helpdesk queue with draft assistance",
      },
      {
        value: "17,500+",
        label: "Historical tickets indexed for precise answer retrieval",
      },
      {
        value: "100% Offline",
        label: "Asset tracking capability for quayside and depot operations",
      },
    ],
    useCases: [
      "Architectural drawing measurement & NRM2 BoQ generation (BQai)",
      "Support ticket deflection & knowledge base retrieval",
      "Dangerous goods compliance document verification",
      "Offline-first pallet & asset tracking in warehouses",
      "Tender document comparison & schedule extraction",
    ],
    deliverable: [
      "NRM2-compliant Bills of Quantities ready for QS review and estimating",
      "Real-time helpdesk integration (Zoho, Zendesk) with agent approval interface",
      "Dangerous goods documentation cross-checking and IMDG rule validation",
      "Offline-capable mobile and depot applications with local data sync",
    ],
    innerPages: [
      {
        slug: "bqai",
        href: "/services/other-work/bqai",
        title: "BQai",
        kicker: "Construction AI",
        description:
          "Automated NRM2 Bills of Quantities directly from architectural drawing sets, cutting estimating cycles from weeks to days.",
      },
      {
        slug: "deflect",
        href: "/services/other-work/deflect",
        title: "Support Ticket Deflection",
        kicker: "Support Operations AI",
        description:
          "Draft support replies grounded in your knowledge base and ticket history, with agent review before sending.",
      },
    ],
    trustNote:
      "Domain specialists remain in the loop at every step — quantity surveyors review BoQs, agents review ticket drafts, and compliance officers review manifests.",
    cta: "Have a document-heavy or repetitive process outside these sectors? An AI Audit will establish feasibility, accuracy, and ROI on your own data.",
  },
];

export const innerPagesData: Record<string, InnerPage> = {
  "data-extraction/boxscan": {
    slug: "boxscan",
    parentSlug: "data-extraction",
    parentTitle: "Data extraction",
    title: "BoxScan",
    headline: "Audit the archive before you scan it.",
    kicker: "Archive Box Audit Before You Scan",
    description:
      "Capture, catalogue and barcode archive boxes, apply retention rules, and only pay to digitise what must legally be kept. Phase 0 of any digitisation programme.",
    audience:
      "Records bureaux, commercial storage operators, NHS trusts, and organisations with rooms full of legacy document boxes. BoxScan is Phase 0: the step that stops you spending money scanning paper you were allowed to destroy.",
    sector: "Document management & records",
    stats: [
      {
        value: "Phase 0",
        label: "Audit archive boxes before scanning begins",
      },
      {
        value: "Retention rules",
        label: "Applied box by box with auditable justification",
      },
      {
        value: "Cost savings",
        label: "Only pay to digitise paper you are legally required to keep",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Capture",
        description:
          "A purpose-built mobile capture workflow photographs each box, with camera, barcode scanner and physical labelling built in.",
      },
      {
        step: "02",
        title: "Catalogue",
        description:
          "Box contents, dates, department owners, and metadata are indexed, linked to unique barcodes, and recorded in a central database.",
      },
      {
        step: "03",
        title: "Apply retention rules",
        description:
          "Your organisation's statutory retention schedule is applied systematically box by box, accounting for creation and expiry dates.",
      },
      {
        step: "04",
        title: "Decide",
        description:
          "Each box is classified to digitise, retain in physical storage, or securely destroy, with complete reasoning logged for governance.",
      },
    ],
    governance: [
      "Complete audit trail for each box classification decision",
      "Retention rules defined by your legal and compliance teams",
      "UK or EU cloud hosting agreed per engagement",
      "Direct integration with DocBox Scanner for approved boxes",
    ],
    proofLink: {
      text: "Archive audit and retention triage case study",
      href: "/case-studies#other-work",
    },
    cta: "Speak to our records team about auditing your archive before committing to a digitisation programme.",
  },
  "data-extraction/docbox": {
    slug: "docbox",
    parentSlug: "data-extraction",
    parentTitle: "Data extraction",
    title: "DocBox Scanner",
    headline: "Scanned archives into structured data.",
    kicker: "AI Document Data Extraction",
    description:
      "Turn scanned archives into structured, searchable data with confidence scoring, human curation for uncertain items, UK or EU hosting, and up to ~20,000 documents a day.",
    audience:
      "Bureaux, records management businesses, and NHS digitisation teams keying data from scanned documents by hand. If your team manually extracts fields, DocBox takes that work off them.",
    sector: "Document management & records · NHS & healthcare",
    stats: [
      {
        value: "~20,000",
        label: "Documents a day through the platform at bureau scale",
      },
      {
        value: "97.9%",
        label: "Accuracy on purchase order numbers in a ground-truth trial",
      },
      {
        value: "1.7%",
        label: "Of a 7,055-document batch flagged for human review",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Ingest",
        description:
          "Scanned batches arrive securely over SFTP or direct API integration from your capture scanners or existing post-room feed.",
      },
      {
        step: "02",
        title: "Extract",
        description:
          "AI extracts required fields (typed text, handwriting, tables, and reference numbers) and assigns a confidence score to each.",
      },
      {
        step: "03",
        title: "Review",
        description:
          "Low-confidence fields route automatically to a curation portal where staff confirm or correct with the source document in view.",
      },
      {
        step: "04",
        title: "Export",
        description:
          "Checked data is returned in your client's existing import format (CSV, JSON, XML), so downstream systems require no changes.",
      },
    ],
    governance: [
      "UK-resident cloud infrastructure (London) or EU (Dublin) for Irish clients",
      "Encrypted transfer over SFTP or enterprise API end to end",
      "Accuracy measured against ground truth and reported alongside review rates",
      "Client documents are never used to train external models",
    ],
    proofLink: {
      text: "Read the bureau document extraction case study (98% accuracy)",
      href: "/case-studies/bureau-document-extraction",
    },
    cta: "Send us a sample batch of your real documents. We will test DocBox against your ground truth and share field-by-field accuracy numbers.",
  },
  "gp-surgeries/voice-agents": {
    slug: "voice-agents",
    parentSlug: "gp-surgeries",
    parentTitle: "GP AI operating system",
    title: "AI Voice Agents",
    headline: "Phone lines that answer every call.",
    kicker: "Natural Language Call Handling & Triage",
    description:
      "Natural-language phone agents that answer, triage and route calls around the clock, connected directly to the systems your team already uses.",
    audience:
      "NHS GP practices, healthcare providers, local authorities, and housing compliance operations facing high inbound call volumes and busy morning peaks.",
    sector: "NHS & healthcare · Service & support operations",
    stats: [
      {
        value: "100%",
        label: "Of calls answered immediately — no engaged tones",
      },
      {
        value: "5 tiers",
        label: "Structured clinical urgency triage agreed with practice partners",
      },
      {
        value: "£60k/yr",
        label: "Reception time freed across three surgery sites",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Answer",
        description:
          "Every call is picked up immediately, day or night, in conversational British English with natural voice pacing.",
      },
      {
        step: "02",
        title: "Triage",
        description:
          "A structured script establishes what the caller needs, identifies urgency against agreed clinical rules, and captures details.",
      },
      {
        step: "03",
        title: "Route or escalate",
        description:
          "Routine requests route to the right team with context; anything urgent, unclear or outside the script transfers to a staff member instantly.",
      },
      {
        step: "04",
        title: "Record",
        description:
          "A complete call transcript, audio recording and structured clinical summary are filed directly into your line-of-business or clinical system.",
      },
    ],
    governance: [
      "Clear, fail-safe human escalation paths built into every call flow",
      "Full audio recordings, transcripts and audit logs per call",
      "Configurable scripts and triage boundaries set with your clinicians",
      "UK-hosted cloud voice orchestration platform",
    ],
    proofLink: {
      text: "Read the NHS GP voice reception case study",
      href: "/case-studies/nhs-gp-voice-and-letters",
    },
    cta: "Talk to our team about deploying a voice agent on your patient or customer support lines.",
  },
  "other-work/bqai": {
    slug: "bqai",
    parentSlug: "other-work",
    parentTitle: "Other work",
    title: "BQai",
    headline: "Bills of Quantities, from weeks to days.",
    kicker: "Construction AI",
    description:
      "BQai turns architectural drawings into NRM2-compliant Bills of Quantities, cutting one of pre-construction's most laborious workflows from weeks to days.",
    audience:
      "Quantity surveyors, main contractors, and estimating teams who price building work from drawing sets and spend days manually taking off quantities.",
    sector: "Construction & pre-construction estimating",
    stats: [
      {
        value: "Weeks → Days",
        label: "Turnaround time from drawing set to draft BoQ",
      },
      {
        value: "NRM2",
        label: "Compliant work package structure and measurement rules",
      },
      {
        value: "100%",
        label: "Quantity surveyor review and sign-off before pricing",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Upload drawings",
        description:
          "Upload architectural plans, elevations, sections, and specification documents in PDF or CAD formats.",
      },
      {
        step: "02",
        title: "Measure",
        description:
          "Computer vision and geometric models identify, segment, and measure building elements and dimensions across drawings.",
      },
      {
        step: "03",
        title: "Structure",
        description:
          "Extracted quantities are organised into standardised NRM2 work packages with description items and unit measurements.",
      },
      {
        step: "04",
        title: "Review",
        description:
          "Your quantity surveyors inspect, adjust, and approve the draft BoQ with source drawings linked side by side.",
      },
    ],
    governance: [
      "Rigorous NRM2 measurement standard adherence",
      "Visual trace overlay verifying every measurement against source drawings",
      "Full export to standard estimating spreadsheets and software",
      "Secure project data handling under strict NDA",
    ],
    proofLink: {
      text: "Read the Belfast residential tender case study",
      href: "/case-studies/construction-bills-of-quantities",
    },
    cta: "Send us a sample drawing set. We will generate a sample NRM2 Bill of Quantities so you can compare speed and accuracy against manual take-off.",
  },
  "other-work/deflect": {
    slug: "deflect",
    parentSlug: "other-work",
    parentTitle: "Other work",
    title: "Support Ticket Deflection",
    headline: "Draft answers from your own knowledge.",
    kicker: "Support Operations AI",
    description:
      "AI that drafts replies to support tickets from your knowledge base and resolved-ticket history. Your agents review and edit every draft before it is sent.",
    audience:
      "Busy customer support helpdesks and technical support teams answering the same repetitive questions when answers already exist in resolved tickets or docs.",
    sector: "Customer support & service operations",
    stats: [
      {
        value: "7 → 5",
        label: "Agents needed on one high-volume helpdesk queue",
      },
      {
        value: "17,500+",
        label: "Historical resolved tickets indexed for retrieval",
      },
      {
        value: "1 click",
        label: "Review, edit, and send directly within existing helpdesk",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Sync",
        description:
          "Incoming support tickets sync in real time from your helpdesk (e.g. Zoho Support, Zendesk, Freshdesk).",
      },
      {
        step: "02",
        title: "Retrieve",
        description:
          "Semantic search surfaces relevant answers from your verified documentation, FAQs, and approved past ticket resolutions.",
      },
      {
        step: "03",
        title: "Draft",
        description:
          "A context-aware response is drafted in natural British English matching your company tone and department sender identity.",
      },
      {
        step: "04",
        title: "Review & rate",
        description:
          "A human support agent reads, adjusts where needed, and approves the reply with a single click before delivery.",
      },
      {
        step: "05",
        title: "Improve",
        description:
          "High-quality agent adjustments update the knowledge base, expanding coverage and accuracy on subsequent tickets.",
      },
    ],
    governance: [
      "No automated email is ever sent without agent review and approval",
      "Strict retrieval scoping: only answers from approved documents and tickets",
      "Agent ratings drive continuous model grounding and accuracy",
      "SOC2-compliant and GDPR-compliant data processing",
    ],
    proofLink: {
      text: "Read the support ticket deflection case study (17,500 tickets)",
      href: "/case-studies/support-ticket-deflection",
    },
    cta: "Connect a sample queue from your helpdesk to evaluate draft quality and deflection rates on your own historical tickets.",
  },
};

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAdjacentServices(slug: string) {
  const index = services.findIndex((service) => service.slug === slug);

  return {
    previous: index > 0 ? services[index - 1] : null,
    next:
      index >= 0 && index < services.length - 1 ? services[index + 1] : null,
  };
}

export function getInnerPage(
  parentSlug: string,
  subslug: string
): InnerPage | undefined {
  const key = `${parentSlug}/${subslug}`;
  return innerPagesData[key];
}

export function getAllInnerPages(): InnerPage[] {
  return Object.values(innerPagesData);
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
