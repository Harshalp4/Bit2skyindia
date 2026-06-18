import {
  Code2, Globe, Smartphone, Cloud, BrainCircuit, HeartPulse,
  FileStack, Layers, Workflow, Database, ShieldCheck, Boxes,
  Factory, Truck, Building2, ShoppingBag, GraduationCap, Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  overview: string;
  benefits: string[];
  features: string[];
  stack: string[];
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-software-development",
    icon: Code2,
    title: "Custom Software Development",
    short: "Bespoke platforms engineered around your exact workflows, not the other way around.",
    overview:
      "We design and build custom software that fits your business like a glove — replacing brittle spreadsheets, legacy systems and disconnected tools with a single, scalable platform engineered for performance and longevity.",
    benefits: [
      "Eliminate manual, error-prone processes with purpose-built automation",
      "Own your IP and roadmap instead of renting a generic SaaS",
      "Scale confidently with architecture built for 10x growth",
      "Faster time-to-value with iterative, milestone-driven delivery",
    ],
    features: [
      "Domain-driven design & modular monolith / microservices",
      "Role-based access, audit trails and enterprise security",
      "Third-party & legacy system integrations",
      "Automated testing, CI/CD and observability baked in",
    ],
    stack: [".NET", "ASP.NET Core", "ABP.io", "Angular", "React", "SQL Server", "Azure"],
    keywords: ["Custom Software Development", "Enterprise Software Development", "Software Development Company in Mumbai"],
  },
  {
    slug: "web-application-development",
    icon: Globe,
    title: "Web Application Development",
    short: "High-performance, secure web apps that feel instant and scale globally.",
    overview:
      "From customer portals to complex internal platforms, we build modern web applications with server-side rendering, blazing performance and accessibility at their core.",
    benefits: [
      "Sub-second load times that improve conversion and SEO",
      "Responsive, accessible interfaces across every device",
      "Secure, compliant data handling by default",
      "Maintainable codebases your team can extend",
    ],
    features: [
      "Next.js / Angular front-ends with SSR & edge caching",
      "Design systems for consistent, on-brand UI",
      "Real-time features with WebSockets / SignalR",
      "Analytics, A/B testing and conversion instrumentation",
    ],
    stack: ["Next.js", "Angular", "React", "ASP.NET Core", "PostgreSQL", "Azure"],
    keywords: ["Web Application Development", "Enterprise Web Apps"],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile Application Development",
    short: "Native-grade iOS & Android apps from a single, efficient codebase.",
    overview:
      "We ship cross-platform mobile apps that feel native, work offline and integrate cleanly with your backend — built to delight users and pass app-store review the first time.",
    benefits: [
      "One codebase, two platforms — lower cost, faster releases",
      "Offline-first reliability for field and clinical teams",
      "Push notifications, biometrics and device integrations",
      "Smooth 60fps experiences users actually keep",
    ],
    features: [
      "Flutter, React Native & .NET MAUI",
      "Secure auth, offline sync & background jobs",
      "App Store / Play Store submission & CI pipelines",
      "Crash reporting and in-app analytics",
    ],
    stack: ["Flutter", "React Native", ".NET MAUI", "Azure", "SQL Server"],
    keywords: ["Mobile App Development", "Cross-platform Apps"],
  },
  {
    slug: "cloud-azure-solutions",
    icon: Cloud,
    title: "Cloud & Azure Solutions",
    short: "Architect, migrate and optimize on Microsoft Azure with confidence.",
    overview:
      "We help enterprises move to the cloud and run leaner there — designing resilient Azure architectures, automating infrastructure and cutting cloud spend without compromising reliability.",
    benefits: [
      "Lower TCO with right-sized, automated infrastructure",
      "High availability and disaster recovery by design",
      "Security and compliance aligned to enterprise standards",
      "Faster deployments with infrastructure-as-code",
    ],
    features: [
      "Azure landing zones & well-architected reviews",
      "Containerization with AKS & serverless functions",
      "CI/CD with Azure DevOps / GitHub Actions",
      "Cost governance, monitoring and alerting",
    ],
    stack: ["Azure", "AKS", "Azure DevOps", "Bicep/Terraform", "Microservices"],
    keywords: ["Azure Cloud Solutions", "Cloud Migration", "Azure Consulting"],
  },
  {
    slug: "ai-automation-solutions",
    icon: BrainCircuit,
    title: "AI & Automation",
    short: "Put AI to work — automating documentation, decisions and busywork.",
    overview:
      "We build practical AI solutions on Azure OpenAI and Document Intelligence: copilots, document understanding and workflow automation that remove hours of manual effort every day.",
    benefits: [
      "Automate repetitive, high-volume knowledge work",
      "Reduce errors and turnaround time dramatically",
      "Unlock insights trapped in documents and data",
      "Augment teams without growing headcount",
    ],
    features: [
      "LLM copilots & retrieval-augmented generation (RAG)",
      "Document understanding with AI Document Intelligence",
      "Intelligent workflow & approval automation",
      "Responsible-AI guardrails and human-in-the-loop",
    ],
    stack: ["Azure OpenAI", "AI Document Intelligence", ".NET", "Python", "Vector DB"],
    keywords: ["AI Development Company", "AI Automation Solutions"],
  },
  {
    slug: "healthcare-software-development",
    icon: HeartPulse,
    title: "Healthcare Solutions",
    short: "Compliant, clinician-friendly healthcare platforms that scale.",
    overview:
      "We build healthcare technology — EHR, eMAR, clinical documentation and patient platforms — designed for compliance, interoperability and the realities of clinical workflows.",
    benefits: [
      "Reduce documentation burden on clinical staff",
      "Improve patient safety with structured workflows",
      "Interoperate via HL7 / FHIR standards",
      "Security and privacy aligned to healthcare regulations",
    ],
    features: [
      "EHR / eMAR / clinical documentation modules",
      "HL7 & FHIR interoperability",
      "Role-based access and full audit trails",
      "AI-assisted clinical note generation",
    ],
    stack: [".NET", "ABP.io", "Azure", "SQL Server", "Azure OpenAI", "Flutter"],
    keywords: ["Healthcare Software Development", "EHR Development", "Clinical Software"],
  },
  {
    slug: "document-management-systems",
    icon: FileStack,
    title: "DMS Solutions",
    short: "Turn document chaos into a secure, searchable, automated repository.",
    overview:
      "Our Document Management Systems digitize, classify and route your documents with OCR, approvals and granular access control — making the right information findable and auditable.",
    benefits: [
      "Find any document in seconds with full-text search",
      "Automate approvals and routing end-to-end",
      "Strengthen compliance with versioning and audit logs",
      "Cut storage costs and paper dependency",
    ],
    features: [
      "OCR & intelligent document classification",
      "Configurable approval workflows",
      "Granular permissions & version history",
      "Secure repository with retention policies",
    ],
    stack: [".NET", "Azure", "AI Document Intelligence", "SQL Server", "Angular"],
    keywords: ["Document Management System", "Enterprise DMS"],
  },
  {
    slug: "saas-product-development",
    icon: Layers,
    title: "SaaS Development",
    short: "From idea to multi-tenant SaaS — built to ship, scale and sell.",
    overview:
      "We partner with founders and enterprises to build production-grade, multi-tenant SaaS products — handling architecture, billing, security and the path to your first thousand customers.",
    benefits: [
      "Multi-tenant architecture that scales economically",
      "Faster GTM with a focused, well-built MVP",
      "Subscription billing and usage metering built in",
      "Security and reliability investors expect",
    ],
    features: [
      "Multi-tenant data isolation & RBAC",
      "Billing (Stripe / Razorpay) & metering",
      "Self-serve onboarding & admin consoles",
      "Observability, SLAs and zero-downtime deploys",
    ],
    stack: ["Next.js", ".NET", "ABP.io", "PostgreSQL", "Azure", "Stripe"],
    keywords: ["SaaS Development Company", "Multi-tenant SaaS"],
  },
];

export type Product = {
  slug: string;
  name: string;
  icon: LucideIcon;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  heroPrompt: string;
  screenshotPrompt: string;
  featurePrompt: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "bit2ehr",
    name: "Bit2EHR",
    icon: HeartPulse,
    category: "Healthcare",
    tagline: "A modern, modular electronic health record platform.",
    description:
      "Bit2EHR unifies patient records, scheduling, medication tracking and analytics in one clinician-friendly platform — reducing administrative load while improving care quality.",
    features: ["Unified patient records", "Appointments & scheduling", "Medication tracking", "Clinical analytics & reporting", "Role-based access & audit"],
    heroPrompt:
      "Modern healthcare software dashboard displayed on a large monitor, patient records, medication tracking, appointments, analytics charts, clean medical UI, blue healthcare theme, enterprise-grade design, ultra realistic SaaS dashboard, premium healthcare technology branding, 4K.",
    screenshotPrompt:
      "Close-up product screenshot of an EHR patient timeline view, vitals charts, medication list, lab results, clean white medical UI with blue accents, realistic SaaS interface, 4K.",
    featurePrompt:
      "Isometric illustration of connected healthcare records, patient profile cards, secure data flow, blue and sky-blue palette, premium enterprise tech style.",
  },
  {
    slug: "emar",
    name: "eMAR",
    icon: ShieldCheck,
    category: "Healthcare",
    tagline: "Electronic medication administration, error-free.",
    description:
      "eMAR gives nursing teams a tablet-first medication administration record with schedule timelines, alerts and full traceability — closing the loop on the five rights of medication safety.",
    features: ["Medication schedule timeline", "Tablet-first nurse interface", "Administration alerts", "PRN & controlled-substance handling", "Complete audit trail"],
    heroPrompt:
      "Medication administration dashboard, nurse tablet interface, medication schedule timeline, healthcare workflow automation, clinical environment, premium UI design, modern healthcare software, ultra realistic product mockup, 4K.",
    screenshotPrompt:
      "Tablet screenshot of an eMAR medication round, time-based medication list with check-off states, patient header, calm clinical UI, blue theme, realistic mockup, 4K.",
    featurePrompt:
      "Illustration of a medication safety loop, clock timeline, checkmarks, pill icons, nurse with tablet, blue healthcare palette, premium flat-3D style.",
  },
  {
    slug: "document-management-system",
    name: "Document Management System",
    icon: FileStack,
    category: "Enterprise",
    tagline: "Every document, secure, searchable and automated.",
    description:
      "A secure enterprise repository with OCR, intelligent classification, approval workflows and granular permissions — turning document sprawl into governed, findable knowledge.",
    features: ["OCR & document processing", "Approval workflows", "Full-text search", "Version control & retention", "Granular permissions"],
    heroPrompt:
      "Enterprise document management platform dashboard, document workflows, OCR processing, digital approvals, search functionality, secure file repository, modern SaaS interface, premium business software visualization, 4K.",
    screenshotPrompt:
      "Product screenshot of a document repository grid with folders, OCR status badges, approval workflow panel, search bar, clean enterprise UI, blue accents, 4K.",
    featurePrompt:
      "Isometric illustration of documents flowing through OCR, classification and approval stages into a secure vault, blue palette, premium enterprise style.",
  },
  {
    slug: "authoring-studio",
    name: "Authoring Studio",
    icon: Boxes,
    category: "Low-code",
    tagline: "Build forms, workflows and apps without writing code.",
    description:
      "A drag-and-drop, low-code studio for building dynamic forms, workflows and internal apps with JSON-driven configuration — empowering teams to ship business tools in days.",
    features: ["Drag-and-drop form builder", "Visual workflow designer", "JSON configuration", "Reusable components", "One-click publish"],
    heroPrompt:
      "Drag and drop form builder platform, low-code application builder, dynamic forms, workflow designer, JSON configuration interface, modern SaaS dashboard, premium product screenshot, 4K.",
    screenshotPrompt:
      "Screenshot of a low-code builder canvas with a form on the left, component palette, properties panel on the right, workflow nodes, clean modern UI, blue theme, 4K.",
    featurePrompt:
      "Illustration of drag-and-drop building blocks assembling into an app and a workflow graph, blue and sky-blue palette, premium 3D-flat style.",
  },
  {
    slug: "ai-soap-note-generator",
    name: "AI SOAP Note Generator",
    icon: BrainCircuit,
    category: "Healthcare AI",
    tagline: "From conversation to clinical note in seconds.",
    description:
      "An AI documentation assistant that transcribes the clinical encounter and drafts structured SOAP notes for review — giving clinicians their time back without sacrificing accuracy.",
    features: ["Voice transcription", "Structured SOAP generation", "Clinician review & edit", "EHR-ready export", "Specialty templates"],
    heroPrompt:
      "AI-powered medical documentation assistant, voice transcription interface, SOAP note generation, AI healthcare dashboard, doctor workstation, futuristic healthcare AI platform, premium SaaS UI, 4K.",
    screenshotPrompt:
      "Product screenshot of an AI scribe: live transcript on the left, generated SOAP note (Subjective, Objective, Assessment, Plan) on the right with edit controls, clean medical AI UI, 4K.",
    featurePrompt:
      "Illustration of a voice waveform transforming into a structured clinical document with AI sparkles, blue and sky palette, premium futuristic healthcare style.",
  },
  {
    slug: "workflow-automation-platform",
    name: "Workflow Automation Platform",
    icon: Workflow,
    category: "Enterprise",
    tagline: "Map, automate and monitor any business process.",
    description:
      "A no-friction automation platform for approval chains, notifications and process orchestration — giving operations leaders one control center for how work moves.",
    features: ["Visual process mapping", "Approval chains", "Smart notifications", "SLA monitoring", "Integrations & webhooks"],
    heroPrompt:
      "Business workflow automation dashboard, approval chains, process mapping, notifications, enterprise operations center, modern SaaS workflow interface, premium software visualization, 4K.",
    screenshotPrompt:
      "Screenshot of a workflow automation board with a node-based process diagram, approval status lanes, notification panel, analytics widgets, clean enterprise UI, blue theme, 4K.",
    featurePrompt:
      "Isometric illustration of an automated approval pipeline with nodes, arrows, notification bells and dashboards, blue palette, premium enterprise style.",
  },
  {
    slug: "mobile-app-solutions",
    name: "Mobile App Solutions",
    icon: Smartphone,
    category: "Mobile",
    tagline: "A suite of field-ready enterprise mobile apps.",
    description:
      "Purpose-built mobile apps for healthcare, logistics, field service and AI assistance — offline-capable, secure and integrated with your core systems.",
    features: ["Offline-first sync", "Healthcare & logistics apps", "Field service tooling", "AI assistant app", "Secure enterprise auth"],
    heroPrompt:
      "Collection of enterprise mobile apps displayed on modern smartphones, healthcare app, logistics app, service app, AI assistant app, premium UI design, realistic device mockups, 4K.",
    screenshotPrompt:
      "Three smartphones side by side showing a healthcare app, a logistics tracking app and an AI assistant app, premium UI, realistic device mockups, blue theme, 4K.",
    featurePrompt:
      "Illustration of multiple smartphones with app cards floating around them, sync icons, offline cloud, blue and sky palette, premium device-mockup style.",
  },
];

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  blurb: string;
  solutions: string[];
};

export const INDUSTRIES: Industry[] = [
  { slug: "healthcare", icon: HeartPulse, name: "Healthcare", blurb: "EHR, eMAR, clinical documentation and AI scribing built for compliance and care.", solutions: ["EHR & eMAR platforms", "AI clinical documentation", "Patient engagement apps", "HL7/FHIR interoperability"] },
  { slug: "manufacturing", icon: Factory, name: "Manufacturing", blurb: "Digitize the shop floor with MES, quality and maintenance platforms.", solutions: ["Production tracking", "Quality management", "Predictive maintenance", "Inventory & supply chain"] },
  { slug: "logistics", icon: Truck, name: "Logistics", blurb: "Real-time visibility across fleets, warehouses and last-mile delivery.", solutions: ["Fleet & route optimization", "Warehouse management", "Driver mobile apps", "Delivery tracking"] },
  { slug: "corporate", icon: Building2, name: "Corporate", blurb: "Enterprise platforms, intranets and automation for large organizations.", solutions: ["Enterprise portals", "Workflow automation", "Document management", "Internal tooling"] },
  { slug: "retail", icon: ShoppingBag, name: "Retail", blurb: "Unified commerce, loyalty and inventory across every channel.", solutions: ["E-commerce platforms", "Inventory sync", "Loyalty & CRM", "Analytics dashboards"] },
  { slug: "education", icon: GraduationCap, name: "Education", blurb: "Learning platforms, admissions and campus operations, modernized.", solutions: ["LMS platforms", "Admissions & ERP", "Student mobile apps", "Assessment tools"] },
  { slug: "service-industry", icon: Wrench, name: "Service Industry", blurb: "Scheduling, field service and customer platforms that scale.", solutions: ["Booking & scheduling", "Field service apps", "Customer portals", "Billing automation"] },
];

export const TECHNOLOGIES = [
  { group: "Backend", icon: Code2, items: [".NET", "ASP.NET Core", "ABP.io", "Microservices"] },
  { group: "Frontend", icon: Globe, items: ["Angular", "React", "Next.js"] },
  { group: "Mobile", icon: Smartphone, items: ["Flutter", "React Native", ".NET MAUI"] },
  { group: "Cloud", icon: Cloud, items: ["Azure", "AKS", "Azure DevOps"] },
  { group: "AI", icon: BrainCircuit, items: ["Azure OpenAI", "AI Document Intelligence"] },
  { group: "Database", icon: Database, items: ["SQL Server", "PostgreSQL", "MongoDB"] },
] as const;

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: { metric: string; label: string }[];
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "healthcare-automation",
    title: "Healthcare Automation for a Multi-Site Care Provider",
    industry: "Healthcare",
    summary: "Replaced paper medication rounds with a digital eMAR across multiple facilities.",
    challenge: "Nursing teams across several facilities relied on paper medication records, leading to transcription errors, missed doses and hours of administrative overhead with no central visibility.",
    solution: "We deployed a tablet-first eMAR with schedule timelines, real-time alerts and full audit trails, integrated with the provider's existing patient records and rolled out facility by facility.",
    impact: [{ metric: "98%", label: "on-time medication administration" }, { metric: "-70%", label: "documentation time per round" }, { metric: "100%", label: "auditable administration trail" }],
    stack: [".NET", "Flutter", "Azure", "SQL Server"],
  },
  {
    slug: "enterprise-dms",
    title: "Enterprise DMS for a Regulated Financial Firm",
    industry: "Corporate",
    summary: "Unified millions of documents into a governed, searchable repository.",
    challenge: "Critical documents were scattered across shared drives and email, making audits painful and compliance risky, with no version control or access governance.",
    solution: "We built a centralized DMS with OCR, intelligent classification, configurable approval workflows and granular permissions, migrating legacy archives into a secure, retention-aware repository.",
    impact: [{ metric: "10x", label: "faster document retrieval" }, { metric: "-60%", label: "audit preparation time" }, { metric: "1M+", label: "documents governed" }],
    stack: [".NET", "Azure", "AI Document Intelligence", "Angular"],
  },
  {
    slug: "ai-documentation",
    title: "AI Clinical Documentation for an Outpatient Network",
    industry: "Healthcare AI",
    summary: "Cut clinician documentation time with an AI SOAP-note scribe.",
    challenge: "Clinicians spent hours after each shift writing notes, driving burnout and reducing patient throughput.",
    solution: "We delivered an AI scribe that transcribes encounters and drafts structured SOAP notes for clinician review, exporting directly into the EHR with specialty-specific templates.",
    impact: [{ metric: "-2 hrs", label: "documentation per clinician per day" }, { metric: "92%", label: "draft acceptance rate" }, { metric: "+18%", label: "patient throughput" }],
    stack: ["Azure OpenAI", ".NET", "AI Document Intelligence"],
  },
  {
    slug: "mobile-workforce-app",
    title: "Mobile Workforce App for a Logistics Operator",
    industry: "Logistics",
    summary: "Gave drivers an offline-first app for routes, proof-of-delivery and tracking.",
    challenge: "Drivers used paper manifests and phone calls, leaving dispatch blind to real-time status and customers without delivery visibility.",
    solution: "We built an offline-first driver app with route optimization, digital proof-of-delivery and live tracking, paired with a dispatch dashboard for real-time operations.",
    impact: [{ metric: "+22%", label: "deliveries per driver per day" }, { metric: "-35%", label: "failed delivery attempts" }, { metric: "Real-time", label: "fleet visibility" }],
    stack: ["React Native", ".NET", "Azure", "PostgreSQL"],
  },
  {
    slug: "saas-platform",
    title: "Multi-Tenant SaaS Launch for a B2B Startup",
    industry: "SaaS",
    summary: "Took a founder's idea to a production, billable SaaS in months.",
    challenge: "A founder had strong domain expertise but no engineering team, and needed a secure, multi-tenant SaaS with billing to reach early customers.",
    solution: "We designed a multi-tenant architecture with RBAC, self-serve onboarding and subscription billing, shipping an MVP and iterating to product-market fit with the founder.",
    impact: [{ metric: "4 mo", label: "idea to first paying customer" }, { metric: "99.9%", label: "uptime SLA" }, { metric: "0", label: "tenant data incidents" }],
    stack: ["Next.js", ".NET", "ABP.io", "Azure", "Stripe"],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: string[];
};

export const BLOG_CATEGORIES = [
  "Software Development", "AI", "Healthcare Technology", "Cloud", "Digital Transformation", "Mobile Apps",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  { slug: "custom-vs-off-the-shelf-software", title: "Custom Software vs Off-the-Shelf: How to Decide", category: "Software Development", excerpt: "A practical framework for choosing between building custom software and buying a SaaS product.", readTime: "7 min", date: "2026-05-28", body: ["Choosing between custom software and off-the-shelf products is one of the highest-leverage decisions a business makes. The right answer depends on how core the process is to your competitive advantage.", "If a workflow is generic — payroll, email — buy it. If it encodes how you uniquely win, build it. This article walks through a scoring framework across differentiation, integration depth, total cost of ownership and speed-to-value.", "We close with a hybrid approach many enterprises adopt: buy commodity capabilities, build the differentiated core, and integrate the two through a clean API layer."] },
  { slug: "enterprise-software-development-guide", title: "The Enterprise Software Development Guide for 2026", category: "Software Development", excerpt: "Architecture, security and delivery practices that separate enterprise-grade software from prototypes.", readTime: "9 min", date: "2026-05-20", body: ["Enterprise software lives or dies on non-functional requirements: security, scalability, observability and maintainability. This guide covers the practices we use to ship software that survives a decade.", "We cover domain-driven design, modular architecture, automated testing, CI/CD and how to plan for compliance from day one."] },
  { slug: "azure-cloud-migration-checklist", title: "An Azure Cloud Migration Checklist for Enterprises", category: "Cloud", excerpt: "A step-by-step checklist to migrate to Azure without surprises on cost or reliability.", readTime: "8 min", date: "2026-05-14", body: ["Cloud migration fails when it's treated as a lift-and-shift instead of a re-architecture opportunity. This checklist covers assessment, landing zones, security baselines and cost governance.", "We share how a well-architected review up front prevents the runaway cloud bills that plague rushed migrations."] },
  { slug: "ai-automation-roi", title: "Where AI Automation Actually Delivers ROI", category: "AI", excerpt: "The use cases where AI automation pays for itself fastest — and the ones to avoid.", readTime: "6 min", date: "2026-05-08", body: ["AI delivers the clearest ROI on high-volume, repetitive knowledge work: document understanding, classification and drafting. This article maps use cases to expected payback periods.", "We also cover the guardrails — human-in-the-loop review, evaluation and monitoring — that keep AI reliable in production."] },
  { slug: "healthcare-software-compliance", title: "Building Healthcare Software That Stays Compliant", category: "Healthcare Technology", excerpt: "How to design EHR and clinical software for compliance, interoperability and clinician trust.", readTime: "8 min", date: "2026-04-30", body: ["Healthcare software has a higher bar: patient safety, privacy and interoperability are non-negotiable. We cover designing for HL7/FHIR, audit trails and role-based access from the start.", "Compliance is easier when it's architectural, not bolted on. We share patterns that make audits routine."] },
  { slug: "ai-soap-notes-clinician-time", title: "How AI SOAP Notes Give Clinicians Their Time Back", category: "Healthcare Technology", excerpt: "Inside the technology that turns a clinical conversation into a structured note.", readTime: "6 min", date: "2026-04-22", body: ["Documentation burden is a leading driver of clinician burnout. AI scribes can draft structured SOAP notes from the encounter, leaving clinicians to review rather than write.", "We explain the transcription, structuring and review loop, and why human oversight remains essential."] },
  { slug: "document-management-system-benefits", title: "7 Ways a Document Management System Pays for Itself", category: "Digital Transformation", excerpt: "From audit readiness to faster retrieval, the measurable benefits of a modern DMS.", readTime: "5 min", date: "2026-04-15", body: ["A modern DMS turns document chaos into governed, searchable knowledge. We quantify the benefits: retrieval speed, audit readiness, compliance and storage savings.", "We also cover how OCR and intelligent classification remove the manual filing that kills adoption."] },
  { slug: "digital-transformation-roadmap", title: "A Pragmatic Digital Transformation Roadmap", category: "Digital Transformation", excerpt: "How to sequence a transformation so each phase funds the next.", readTime: "7 min", date: "2026-04-08", body: ["Digital transformation fails when it's a big-bang program. We advocate a phased roadmap where early wins fund later, riskier bets.", "This article covers prioritization, change management and measuring outcomes that matter to the board."] },
  { slug: "flutter-vs-react-native", title: "Flutter vs React Native vs .NET MAUI in 2026", category: "Mobile Apps", excerpt: "Choosing the right cross-platform framework for your enterprise mobile app.", readTime: "8 min", date: "2026-04-01", body: ["The cross-platform debate has matured. We compare Flutter, React Native and .NET MAUI across performance, ecosystem, talent availability and enterprise fit.", "Our recommendation depends on your existing stack and team — we give a decision matrix."] },
  { slug: "offline-first-mobile-apps", title: "Designing Offline-First Mobile Apps for the Field", category: "Mobile Apps", excerpt: "Patterns for apps that must work where connectivity doesn't.", readTime: "6 min", date: "2026-03-25", body: ["Field and clinical teams can't depend on connectivity. Offline-first design — local storage, sync and conflict resolution — is essential, not optional.", "We share the sync patterns we use to keep data consistent across devices and servers."] },
  { slug: "microservices-when-to-use", title: "Microservices: When They Help and When They Hurt", category: "Software Development", excerpt: "A sober look at when microservices are worth the operational cost.", readTime: "7 min", date: "2026-03-18", body: ["Microservices solve organizational and scaling problems, but introduce real operational complexity. We help you decide when a modular monolith is the smarter choice.", "We cover the team, scale and deployment signals that justify the move."] },
  { slug: "saas-multi-tenancy-patterns", title: "Multi-Tenancy Patterns for SaaS Founders", category: "Software Development", excerpt: "Database-per-tenant vs shared schema — and how to choose.", readTime: "8 min", date: "2026-03-11", body: ["Multi-tenancy is the architectural heart of any SaaS. We compare isolation models across cost, security and operational complexity.", "We share how to design for tenant isolation without over-engineering your MVP."] },
  { slug: "azure-openai-enterprise", title: "Deploying Azure OpenAI Safely in the Enterprise", category: "AI", excerpt: "Guardrails, governance and architecture for production LLM applications.", readTime: "9 min", date: "2026-03-04", body: ["Azure OpenAI brings enterprise controls to generative AI. We cover network isolation, data handling, prompt governance and evaluation.", "Production AI needs monitoring and human oversight — we share the architecture we deploy."] },
  { slug: "rag-document-intelligence", title: "RAG + Document Intelligence: Answers From Your Documents", category: "AI", excerpt: "How retrieval-augmented generation turns document archives into answers.", readTime: "7 min", date: "2026-02-25", body: ["RAG grounds LLM answers in your own documents, reducing hallucination and surfacing institutional knowledge. We pair it with AI Document Intelligence for structured extraction.", "We cover chunking, embeddings, retrieval quality and evaluation."] },
  { slug: "ehr-interoperability-fhir", title: "EHR Interoperability with HL7 and FHIR", category: "Healthcare Technology", excerpt: "Why FHIR is the foundation of modern healthcare integration.", readTime: "7 min", date: "2026-02-18", body: ["Interoperability is the difference between a useful EHR and a data silo. We explain HL7 v2, FHIR resources and integration patterns.", "We share how we design healthcare platforms to exchange data cleanly with the broader ecosystem."] },
  { slug: "cloud-cost-optimization", title: "Cloud Cost Optimization Without Sacrificing Reliability", category: "Cloud", excerpt: "Practical levers to cut Azure spend while keeping SLAs intact.", readTime: "6 min", date: "2026-02-11", body: ["Cloud bills creep up quietly. We cover right-sizing, autoscaling, reserved capacity and architectural changes that cut spend without risking reliability.", "Cost governance is a continuous practice — we share the dashboards and alerts we set up."] },
  { slug: "devops-ci-cd-best-practices", title: "CI/CD Best Practices for Reliable Releases", category: "Cloud", excerpt: "How to ship frequently and safely with modern delivery pipelines.", readTime: "7 min", date: "2026-02-04", body: ["Frequent, reliable releases come from disciplined CI/CD. We cover automated testing, environment parity, blue-green and canary deployments.", "We share how observability closes the loop so issues are caught before users notice."] },
  { slug: "low-code-vs-custom", title: "Low-Code vs Custom Development: A Balanced View", category: "Digital Transformation", excerpt: "When low-code accelerates delivery — and when it becomes technical debt.", readTime: "6 min", date: "2026-01-28", body: ["Low-code platforms accelerate internal tooling, but can become a ceiling for complex products. We help you find the right boundary.", "Our Authoring Studio blends the two — visual building with the escape hatch of code."] },
  { slug: "ux-for-enterprise-software", title: "Why Enterprise Software Deserves Great UX", category: "Software Development", excerpt: "Good UX isn't a consumer luxury — it drives enterprise adoption and ROI.", readTime: "6 min", date: "2026-01-21", body: ["Enterprise software is often tolerated, not loved — and adoption suffers. We argue that UX is an ROI lever: better UX means faster onboarding and fewer errors.", "We share the design-system approach we use to keep complex software usable."] },
  { slug: "choosing-software-development-partner", title: "How to Choose a Software Development Partner", category: "Digital Transformation", excerpt: "The questions that separate a reliable engineering partner from a risky vendor.", readTime: "7 min", date: "2026-01-14", body: ["Choosing a development partner is choosing a multi-year relationship. We share the questions to ask about architecture, communication, security and delivery track record.", "Red flags, green flags and how to structure a low-risk first engagement."] },
];

export const PROCESS = [
  { step: "01", title: "Discover", desc: "We immerse in your business, map workflows and define measurable outcomes before a line of code is written." },
  { step: "02", title: "Design", desc: "Architecture, UX and a clear delivery plan — validated with prototypes and stakeholder buy-in." },
  { step: "03", title: "Develop", desc: "Iterative, milestone-driven engineering with automated testing and continuous demos." },
  { step: "04", title: "Deploy", desc: "Secure, automated releases to Azure with observability and zero-downtime rollouts." },
  { step: "05", title: "Optimize", desc: "We measure, learn and improve — evolving the product as your business grows." },
];

export const TRUST = [
  { value: "11+", label: "Years of Experience" },
  { value: "50+", label: "Enterprise Solutions Delivered" },
  { value: "7", label: "Industries Served" },
  { value: "100%", label: "Cloud & AI Focused" },
];

export const WHY_CHOOSE = [
  { title: "Product mindset, not project mindset", them: "Builds to spec, then disappears", us: "Owns outcomes and evolves the product with you" },
  { title: "Enterprise-grade engineering", them: "Prototype-quality code", us: "Security, testing and observability built in" },
  { title: "AI & cloud-native by default", them: "Bolted-on, legacy approaches", us: "Azure & AI woven through the architecture" },
  { title: "Domain depth in healthcare & enterprise", them: "Generalists learning on your time", us: "Proven patterns from real deployments" },
  { title: "Transparent, milestone delivery", them: "Black-box timelines", us: "Continuous demos and clear milestones" },
];
