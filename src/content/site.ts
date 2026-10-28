export const site = {
  name: "Alpha2Omega",
  legalName: "Alpha2Omega.ai",
  domain: "https://alpha2omega.ai",
  email: "hello@alpha2omega.ai",
  description:
    "Alpha2Omega builds and runs AI automation for healthcare, financial services and document-heavy businesses — document extraction, voice agents and workflow automation, delivered on UK-resident infrastructure.",
  shortDescription:
    "AI automation for regulated industries. Built in the UK, proven in production.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case studies" },
    { href: "/how-we-work", label: "How we work" },
    { href: "/contact", label: "Contact" },
  ],
  cta: { href: "/contact", label: "Book an AI Audit" },
  proof: [
    {
      value: "98%+",
      label: "Extraction accuracy on live production documents",
    },
    {
      value: "20,000",
      label: "Documents processed per day at platform capacity",
    },
    {
      value: "£60k",
      label: "A year of reception time freed at one NHS client",
    },
    {
      value: "100%",
      label: "UK or EU-resident data processing",
    },
  ],
  values: [
    {
      index: "01",
      title: "We build what works, not what demos well.",
      body: "Every engagement starts with a paid audit and a working proof of concept on your own data. You see real accuracy numbers before you commit.",
    },
    {
      index: "02",
      title: "Regulated-industry grade.",
      body: "NHS security questionnaires, GDPR data-residency architectures, DPIAs and infosec packs are part of our normal delivery, not an afterthought.",
    },
    {
      index: "03",
      title: "A partner, not a project.",
      body: "We run the systems we build — monitored, supported and improved on an ongoing retainer, at a cost that makes sense for mid-sized firms.",
    },
  ],
  trust: [
    "UK-resident infrastructure",
    "NHS security questionnaire experience",
    "GDPR and DPIA delivery",
    "ISO-style infosec documentation on request",
  ],
} as const;

export const sectorFilters = [
  { key: "all", label: "All work" },
  { key: "healthcare", label: "Healthcare" },
  { key: "document-management", label: "Document management" },
  { key: "technology", label: "Technology" },
  { key: "logistics", label: "Logistics" },
  { key: "sales", label: "Sales" },
] as const;
