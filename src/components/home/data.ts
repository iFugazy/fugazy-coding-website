/* Content for the editorial homepage. Ported from the Claude Design project's
   shared-data.jsx (only the parts the page actually renders). */

export const contact = {
  email: "darren@fugazycoding.com",
  phone: "(470) 887-7940",
  studio: "Remote-first · NA & EU",
};

export type Service = {
  n: string;
  title: string;
  body: string;
  tags: string[];
};

export const services: Service[] = [
  {
    n: "01",
    title: "BIM Modeling & Consulting",
    body: "High-LOD Revit and IFC models, clash detection, and federated coordination — plus the workflow advice to keep your whole team modeling to one standard.",
    tags: ["Revit", "IFC", "Navisworks", "LOD 400"],
  },
  {
    n: "02",
    title: "AI Integration",
    body: "Applied AI for AEC: automated quantity takeoffs, drawing classification, generative layout exploration, and copilots that sit inside the tools your team already uses.",
    tags: ["ML pipelines", "Computer vision", "LLM copilots"],
  },
  {
    n: "03",
    title: "Custom Plugin Development",
    body: "Bespoke add-ins for Revit, Rhino/Grasshopper, AutoCAD, Navisworks, etc. that automate the repetitive work and encode your firm's standards into one click. If it has plugin support, we can develop for it.",
    tags: ["Revit API", "C#", "Grasshopper", "Dynamo"],
  },
  {
    n: "04",
    title: "General Software Development",
    body: "Web platforms, data dashboards, and cloud services around your model data — built to integrate with the rest of your stack and scale with your practice.",
    tags: ["Web apps", "APIs", "Cloud", "Dashboards"],
  },
];

export type CaseStudy = {
  tag: string;
  title: string;
  blurb: string;
  metric: string;
  metricLabel: string;
};

export const cases: CaseStudy[] = [
  {
    tag: "AI · Estimation",
    title: "Automated takeoff engine",
    blurb:
      "A vision pipeline that reads marked-up PDFs and Revit models to produce quantity takeoffs in minutes instead of days.",
    metric: "92%",
    metricLabel: "less manual takeoff time",
  },
  {
    tag: "Plugin · Revit",
    title: "Automatic dimensioning engine",
    blurb:
      "Automatically places and aligns dimension strings across plans, sections, and details — turning hours of manual drafting into a single pass.",
    metric: "85%",
    metricLabel: "less manual dimensioning",
  },
  {
    tag: "Product · Glazing",
    title: "Glazr",
    blurb:
      "A glazing-industry estimating and coordination tool that unifies takeoffs, pricing, and shop-drawing coordination into one connected workflow.",
    metric: "5×",
    metricLabel: "faster estimate turnaround",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What BIM platforms do you work in?",
    a: "Primarily Revit and the wider Autodesk stack (Navisworks, AutoCAD, Forma), plus Rhino/Grasshopper and IFC-based open workflows. If your team standardizes on something else, we'll meet you there.",
  },
  {
    q: "Do you work with our existing standards and templates?",
    a: "Yes. We start by learning how your firm models and documents, then encode those standards into our deliverables and any tooling we build — so the output looks like it came from your office, not ours.",
  },
  {
    q: "How do AI projects typically start?",
    a: "With a short discovery sprint. We map a repetitive, high-volume workflow, prototype against your real data, and only scale to production once the value is proven.",
  },
  {
    q: "Can you augment our in-house team?",
    a: "Absolutely — we work as an embedded extension of your VDC or software team, or as a fully independent delivery partner. Whatever fits the project.",
  },
  {
    q: "What does an engagement cost?",
    a: "Plugin and software work is usually fixed-scope or sprint-based; modeling and consulting can be project or retainer based. Book a call and we'll give you a clear quote after understanding the scope.",
  },
];

export type Logo = { src: string; alt: string; h: number };

export const logos: Logo[] = [
  {
    src: "/logos/AWI-Advanced-Window-Installation.png",
    alt: "Advanced Window, Inc.",
    h: 44,
  },
  { src: "/logos/full-logo.svg", alt: "Client logo", h: 34 },
  { src: "/logos/bvglazing-logo.svg", alt: "BV Glazing", h: 22 },
];
