export const faqs = [
  {
    question: "What does an AI Audit actually give us?",
    answer:
      "A prioritised catalogue of automation opportunities, each with an ROI estimate and a delivery plan. We map your processes, test extraction or automation on a sample of your real data, and include a data-readiness assessment, compliance considerations and a cost model. It typically takes two to four weeks and is fixed-fee.",
  },
  {
    question: "Do we need clean, digital data before we start?",
    answer:
      "No. Document extraction is often the first step — turning scanned, handwritten or archived material into structured data. The audit is where we find out what your data can support today, and what needs fixing first.",
  },
  {
    question: "How do you handle data residency and NHS security reviews?",
    answer:
      "Your data stays in the UK or EU. Our platforms run on UK-resident cloud infrastructure in the London region, with Dublin deployments for Irish clients. We complete NHS security questionnaires, DPIAs and client infosec reviews as standard, and self-hosted model options are available where data cannot leave your estate.",
  },
  {
    question: "What happens after the proof of concept?",
    answer:
      "You decide, with measured accuracy on your own data in hand. If you go ahead, we deploy, integrate with your systems and run the service under an ongoing agreement — monitoring, human-review workflows, accuracy reporting and continuous improvement.",
  },
  {
    question: "Will this replace our existing systems?",
    answer:
      "Not usually. We integrate with the systems your team already uses. In one bureau, extraction results were returned in the client's exact existing import format, so nothing changed downstream. In a support desk, draft replies appear inside the existing helpdesk.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "The audit is fixed-fee. After that, most work is either usage-based — per page or per call with a monthly minimum — or a fixed-scope build for larger, more integrated systems. We set the model around the work, not the other way round.",
  },
];

export const engagement = [
  {
    index: "01",
    label: "AI Audit",
    meta: "Fixed fee · typically 2–4 weeks",
    title: "We find out what is worth building.",
    body: "We map your processes, test extraction or automation on a sample of your real data, and deliver a prioritised catalogue of opportunities with ROI estimates.",
    deliverable: "Prioritised automation catalogue",
    decision: "You choose the highest-value opportunity.",
  },
  {
    index: "02",
    label: "Proof of concept",
    meta: "On your data · measured against ground truth",
    title: "We prove it on your documents, not a demo set.",
    body: "We build the highest-value item from the catalogue on your own data and report real accuracy numbers — not demo numbers.",
    deliverable: "Measured accuracy report",
    decision: "You decide whether to go to production, with evidence in hand.",
  },
  {
    index: "03",
    label: "Production & retainer",
    meta: "Ongoing · monitored and improved",
    title: "We run it, and keep making it better.",
    body: "We deploy, integrate with your systems, and run the service: monitoring, human-review workflows, accuracy reporting and continuous improvement under an ongoing agreement.",
    deliverable: "A live service, not a handover",
    decision: "Accuracy and throughput reviewed on a regular cadence.",
  },
];

export const deliveryModels = [
  {
    label: "Rapid Deploy",
    tagline: "Our existing platforms, configured to your documents and workflows.",
    rows: [
      {
        label: "Best for",
        value: "Getting to production in weeks",
      },
      {
        label: "Typical commercial model",
        value: "Per-page or per-call usage pricing with a monthly minimum",
      },
      {
        label: "Examples",
        value:
          "Document extraction as a managed service, voice reception, support ticket deflection",
      },
      {
        label: "What changes",
        value:
          "Your documents and rules are configured into a proven pipeline. Minimal integration work.",
      },
    ],
  },
  {
    label: "Custom Build",
    tagline: "Bespoke systems designed around your operation.",
    rows: [
      {
        label: "Best for",
        value: "Larger groups with complex integrations",
      },
      {
        label: "Typical commercial model",
        value:
          "Fixed-scope build (indicative £20k–£60k for extraction systems) plus support",
      },
      {
        label: "Examples",
        value:
          "Triage platforms, bespoke portals, multi-system integrations, offline field apps",
      },
      {
        label: "What changes",
        value:
          "We design around your workflow, your systems of record and your approval process.",
      },
    ],
  },
];
