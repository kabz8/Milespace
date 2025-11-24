export const serviceIds = [
  "web-engineering",
  "product-platforms",
  "mobile-experiences",
  "data-automation",
  "experience-strategy",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceInterestEnum = ["consultation", ...serviceIds, "other"] as const;

export type ServiceInterest = (typeof serviceInterestEnum)[number];

export type ServiceMetric = {
  label: string;
  value: string;
  helper?: string;
};

export type ServiceClient = {
  name: string;
  industry: string;
  project: string;
  summary: string;
  results: string[];
  metrics: ServiceMetric[];
};

export type ServiceProject = {
  id: string;
  title: string;
  client: string;
  description: string;
  deliverables: string[];
  stack: string[];
  duration: string;
  impact: string[];
  image: string;
};

export type ServiceOffering = {
  id: ServiceId;
  name: string;
  tagline: string;
  description: string;
  bestFor: string[];
  outcomes: string[];
  deliverables: string[];
  stack: string[];
  startPrice: string;
  typicalTimeline: string;
  bookingNote: string;
  clients: ServiceClient[];
  projects: ServiceProject[];
  relatedIds: ServiceId[];
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "web-engineering",
    name: "Web Engineering & Experience Platforms",
    tagline: "High-performing websites, portals, and content systems for global launches.",
    description:
      "We design and ship conversion-grade websites, documentation hubs, and partner portals that stay fast under peak traffic while giving marketing teams the control they need.",
    bestFor: [
      "Product & marketing teams planning regional launches",
      "Organizations consolidating multiple legacy CMS instances",
      "Brands that need multilingual, SEO-ready experiences",
    ],
    outcomes: [
      "Sub-second page loads measured on mid-tier devices",
      "Editorial workflows tailored to your approval chains",
      "Analytics, experimentation, and localization baked in",
      "Accessibility and compliance from day one",
    ],
    deliverables: [
      "Technical architecture & infrastructure blueprint",
      "Component library + design tokens for reuse",
      "CMS configuration, content migrations, and QA",
      "Launch playbook with observability baselines",
    ],
    stack: ["Next.js", "Vite", "Sanity / Strapi", "Cloudflare Pages", "Akamai CDN", "Playwright"],
    startPrice: "KES 380,000",
    typicalTimeline: "6–10 weeks",
    bookingNote: "Includes a discovery sprint and a shared backlog inside Linear.",
    clients: [
      {
        name: "Halo Fintech",
        industry: "Digital Banking",
        project: "Global marketing platform",
        summary:
          "Consolidated six regional microsites into a single multi-market experience with localized compliance flows.",
        results: [
          "37% lift in demo requests within the first quarter",
          "Reduced editorial publishing time from 3 days to 4 hours",
        ],
        metrics: [
          { label: "Markets shipped", value: "5" },
          { label: "Time to launch", value: "11 weeks" },
        ],
      },
      {
        name: "Tamu Travel",
        industry: "Hospitality",
        project: "Destination commerce site",
        summary:
          "Rebuilt booking funnels with live inventory, curated content, and loyalty integrations for 9 partner resorts.",
        results: [
          "4.6× faster landing pages on mobile",
          "Increased average order value by 18%",
        ],
        metrics: [
          { label: "Conversion rate", value: "+22%" },
          { label: "Support tickets", value: "-35%", helper: "content automation" },
        ],
      },
    ],
    projects: [
      {
        id: "halo-experience-suite",
        title: "Halo Fintech Experience Suite",
        client: "Halo Fintech",
        description:
          "A modular marketing system serving localized product narratives, product documentation, and gated partner onboarding.",
        deliverables: [
          "Next.js edge-rendered experience with fallback SSR",
          "Sanity content studio with custom governance roles",
          "Design system tokens for marketing + product parity",
          "Redshift + GA4 instrumentation for every flow",
        ],
        stack: ["Next.js", "Sanity", "Akamai Edge", "TypeScript", "Playwright"],
        duration: "11 weeks",
        impact: [
          "37% growth in qualified pipeline",
          "Editorial workflow shrunk from 12 to 2 steps",
        ],
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "tamu-commerce",
        title: "Tamu Travel Destination Commerce",
        client: "Tamu Travel",
        description:
          "Story-driven travel storefront with live availability, upsells, and loyalty personalization integrated into the booking journey.",
        deliverables: [
          "Composable CMS with GraphQL delivery APIs",
          "Payments + PMS integration workflow",
          "Multi-brand component kit and localization pipeline",
        ],
        stack: ["Remix", "Contentful", "Stripe", "AWS Lambda"],
        duration: "8 weeks",
        impact: [
          "18% higher basket sizes",
          "Customer support load reduced by 35%",
        ],
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    relatedIds: ["product-platforms", "experience-strategy"],
  },
  {
    id: "product-platforms",
    name: "Product Platforms & SaaS Delivery",
    tagline: "Dedicated squads for complex SaaS, marketplaces, and enterprise portals.",
    description:
      "From product strategy to release management, we assemble cross-functional pods that design, build, and scale revenue-generating platforms.",
    bestFor: [
      "Founders validating or rebuilding core platforms",
      "Enterprise teams bridging roadmap and engineering gaps",
      "Organizations expanding into new revenue streams",
    ],
    outcomes: [
      "Market-ready MVPs with telemetry and release notes",
      "Scalable API layers with observability baked in",
      "Design systems suited for continuous delivery",
      "Playbooks for onboarding internal teams post-launch",
    ],
    deliverables: [
      "Product vision sprint & prioritised roadmap",
      "Service blueprints and technical architecture",
      "Secure CI/CD pipelines with staging gates",
      "Runbooks, handover, and leadership enablement",
    ],
    stack: ["React", "Node.js", "NestJS", "PostgreSQL", "Supabase", "AWS", "Grafana"],
    startPrice: "KES 620,000",
    typicalTimeline: "12–16 weeks",
    bookingNote: "Comes with embedded product lead and QA engineer.",
    clients: [
      {
        name: "Kopa Supply Cloud",
        industry: "Logistics",
        project: "Inventory financing platform",
        summary:
          "Built a lending decision engine with merchant dashboards, automated underwriting, and settlement workflows.",
        results: [
          "Approved 2.3× more merchants without increasing risk team headcount",
          "Cut loan decision time from 5 days to under 6 hours",
        ],
        metrics: [
          { label: "Active merchants", value: "4,800+" },
          { label: "Default rate", value: "<1.2%" },
        ],
      },
      {
        name: "Novo Health Net",
        industry: "Healthcare",
        project: "Provider collaboration suite",
        summary:
          "Delivered HIPAA-inspired collaboration, referral routing, and analytics for 600+ clinics across three countries.",
        results: [
          "Referral leakage reduced by 41%",
          "Realtime clinical handoffs documented inside the platform",
        ],
        metrics: [
          { label: "Clinics onboarded", value: "624" },
          { label: "Time to pilot", value: "14 weeks" },
        ],
      },
    ],
    projects: [
      {
        id: "kopa-ops",
        title: "Kopa Merchant Ops Platform",
        client: "Kopa Supply Cloud",
        description:
          "Merchant onboarding, underwriting, and capital disbursement orchestrated through a modular workflow engine.",
        deliverables: [
          "Role-aware dashboards and task queues",
          "Risk scoring microservice connected to credit bureaus",
          "Document AI pipeline for KNBS compliance",
        ],
        stack: ["React", "NestJS", "PostgreSQL", "Temporal"],
        duration: "16 weeks",
        impact: [
          "6h underwriting turnaround",
          "Automated 78% of manual reviews",
        ],
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "novo-link",
        title: "Novo Health Collaboration Suite",
        client: "Novo Health Net",
        description:
          "Referral routing, shared care plans, and analytics enabling specialists to collaborate with rural clinics.",
        deliverables: [
          "FHIR-compliant API and audit logging",
          "React component library for clinician tooling",
          "Grafana dashboards for leadership teams",
        ],
        stack: ["React", "Node.js", "AWS ECS", "Postgres", "Grafana"],
        duration: "15 weeks",
        impact: [
          "41% drop in referral leakage",
          "Insights delivered weekly to leadership",
        ],
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    relatedIds: ["data-automation", "experience-strategy"],
  },
  {
    id: "mobile-experiences",
    name: "Mobile & Cross-Device Experiences",
    tagline: "Device-native experiences with shared codebases and delightful UX.",
    description:
      "We craft mobile, tablet, and desktop apps that marry performance with security—covering offline states, real-time sync, and distribution pipelines.",
    bestFor: [
      "Teams needing iOS + Android parity without double builds",
      "Consumer & field apps that must work offline",
      "Brands extending desktop tools to tablets or kiosks",
    ],
    outcomes: [
      "App store-ready builds with observability and crash reporting",
      "Offline-first data layer with smart conflict resolution",
      "Biometric auth, secure storage, and SOC2-friendly audit trails",
      "CI/CD pipelines for TestFlight, Play Store, and private distribution",
    ],
    deliverables: [
      "Journey maps + UX prototypes validated with users",
      "Design system tuned for multiple breakpoints",
      "Release orchestration playbooks and training",
      "SRE-ready runbooks for push notifications and in-app messaging",
    ],
    stack: ["React Native", "Expo", "Swift", "Kotlin", "GraphQL", "Azure AD B2C"],
    startPrice: "KES 540,000",
    typicalTimeline: "10–14 weeks",
    bookingNote: "Includes device lab testing across low-to-mid tier hardware.",
    clients: [
      {
        name: "Mbele Energy",
        industry: "Utilities",
        project: "Field service companion app",
        summary:
          "Empowered technicians to inspect assets offline, sync media, and receive guided workflows no matter the signal strength.",
        results: [
          "Average visit time reduced by 28 minutes",
          "Compliance photos uploaded within 5 minutes of reconnection",
        ],
        metrics: [
          { label: "Technicians onboarded", value: "310" },
          { label: "Offline screens", value: "22" },
        ],
      },
      {
        name: "PayBeam",
        industry: "Fintech",
        project: "Consumer super-app",
        summary:
          "Delivered a wallet, bill pay, and savings experience with biometric sign-in, push notifications, and contextual onboarding.",
        results: [
          "45% weekly active users within 60 days",
          "NPS climbed from 21 to 54",
        ],
        metrics: [
          { label: "Crash-free sessions", value: "99.6%" },
          { label: "Release cadence", value: "Bi-weekly" },
        ],
      },
    ],
    projects: [
      {
        id: "mbele-field",
        title: "Mbele Field Companion",
        client: "Mbele Energy",
        description:
          "Offline-ready inspections, asset tagging, and supervisor escalations integrated with their legacy SAP backend.",
        deliverables: [
          "React Native app with background sync queue",
          "Role-based workflows and guided checklists",
          "Media compression + upload workers",
        ],
        stack: ["React Native", "SQLite", "GraphQL", "Azure Functions"],
        duration: "12 weeks",
        impact: [
          "28 minutes saved per visit",
          "Incident backlog cleared within 2 sprints",
        ],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "paybeam-app",
        title: "PayBeam Consumer Super-App",
        client: "PayBeam",
        description:
          "Wallet, bill pay, merchant rewards, and savings goals launched simultaneously across iOS, Android, and desktop PWA.",
        deliverables: [
          "Unified design system for mobile + desktop",
          "Bank-grade auth with device binding",
          "Lifecycle messaging & analytics instrumentation",
        ],
        stack: ["Expo", "TypeScript", "Firebase", "Segment"],
        duration: "14 weeks",
        impact: [
          "45% WAU retention",
          "NPS 54 after rollout",
        ],
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    relatedIds: ["web-engineering", "data-automation"],
  },
  {
    id: "data-automation",
    name: "Data, AI & Automation",
    tagline: "Insights, AI copilots, and workflow automation that teams actually adopt.",
    description:
      "We design decision-ready data stacks, lightweight ML models, and automation layers that plug into the tools your teams already trust.",
    bestFor: [
      "Ops teams drowning in spreadsheets and manual status updates",
      "Leaders needing near-real-time profitability and cohort reports",
      "Organizations piloting AI copilots with governance guardrails",
    ],
    outcomes: [
      "Real-time dashboards mapped to business KPIs",
      "Data contracts and observability around every pipeline",
      "AI copilots grounded on your documentation and support data",
      "Automation that kicks off workflows in Slack, Teams, or email",
    ],
    deliverables: [
      "Current-state audit & data readiness scorecard",
      "Modern data stack blueprint with security patterns",
      "Implementation of ingestion, modeling, and reverse ETL",
      "Training sessions + runbooks for business teams",
    ],
    stack: ["dbt", "Snowflake", "BigQuery", "Airbyte", "Power BI", "OpenAI", "LangChain"],
    startPrice: "KES 450,000",
    typicalTimeline: "8–12 weeks",
    bookingNote: "Analytics engagements include a data stewardship playbook.",
    clients: [
      {
        name: "SendSwift Logistics",
        industry: "Logistics",
        project: "Revenue command center",
        summary:
          "Unified shipping, fleet, and finance data into a single trustable dashboard with automated executive digests.",
        results: [
          "Reconciliations dropped from 4 days to 2 hours",
          "Leadership receives anomaly alerts 30 minutes after detection",
        ],
        metrics: [
          { label: "Data sources unified", value: "14" },
          { label: "Alerts automated", value: "32 scenarios" },
        ],
      },
      {
        name: "Clara Schools",
        industry: "Education",
        project: "AI admissions copilot",
        summary:
          "Built an LLM-powered assistant that triages inquiries, drafts responses, and suggests scholarships using first-party data.",
        results: [
          "Admissions response time improved by 63%",
          "Students receive consistent, policy-compliant guidance",
        ],
        metrics: [
          { label: "Automated replies", value: "68%" },
          { label: "Model retraining cadence", value: "Monthly" },
        ],
      },
    ],
    projects: [
      {
        id: "sendswift-command",
        title: "SendSwift Revenue Command Center",
        client: "SendSwift Logistics",
        description:
          "Streaming data platform with dbt models, KPI governance, and executive-ready dashboards plus Slack digests.",
        deliverables: [
          "Airbyte pipelines pulling from 14 SaaS sources",
          "dbt metrics layer & automated data contracts",
          "Power BI + Mode dashboards with drill-downs",
        ],
        stack: ["Snowflake", "dbt", "Airbyte", "Power BI"],
        duration: "10 weeks",
        impact: [
          "Reconciliations cut to 2 hours",
          "C-suite anomaly alerts every morning",
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "clara-copilot",
        title: "Clara Admissions Copilot",
        client: "Clara Schools",
        description:
          "Retrieval-augmented assistant drafting emails, updating CRM records, and surfacing policy-compliant offers.",
        deliverables: [
          "Vectorised knowledge base with guardrails",
          "Human-in-the-loop approval console",
          "Usage analytics + prompt performance monitoring",
        ],
        stack: ["LangChain", "OpenAI GPT-4o", "Postgres", "Supabase Functions"],
        duration: "9 weeks",
        impact: [
          "63% faster applicant responses",
          "68% of replies automated safely",
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    relatedIds: ["product-platforms", "mobile-experiences"],
  },
  {
    id: "experience-strategy",
    name: "Experience Strategy & Enablement",
    tagline: "Research, roadmaps, and playbooks that align stakeholders before code ships.",
    description:
      "We run intensive discovery, service design, and capability enablement so that when build starts, everyone knows what success means.",
    bestFor: [
      "Leaders seeking clarity before a major digital investment",
      "Teams inheriting complex vendor or legacy systems",
      "Organizations standardizing delivery rituals and KPIs",
    ],
    outcomes: [
      "Evidence-backed strategy docs ready for exec sign-off",
      "Service blueprints covering people, tools, and policy",
      "Capability uplift plans including hiring + governance",
      "Pilot backlogs scoped and prioritized with dependencies",
    ],
    deliverables: [
      "Stakeholder interviews & customer research synthesis",
      "Journey maps, service blueprints, and KPI ladders",
      "Capability gap analysis + operating model recommendations",
      "Pilot backlog with sizing, sequencing, and budget ranges",
    ],
    stack: ["Miro", "Figma", "Notion", "Linear", "Airtable"],
    startPrice: "KES 210,000",
    typicalTimeline: "4–6 weeks",
    bookingNote: "Includes executive readouts and workshop facilitation.",
    clients: [
      {
        name: "Delta Pensions",
        industry: "Financial Services",
        project: "Omnichannel service blueprint",
        summary:
          "Mapped customer and agent journeys across mobile, USSD, and branch to align on a 24-month modernization roadmap.",
        results: [
          "Secured board approval for phased investment",
          "Established product council rituals used to date",
        ],
        metrics: [
          { label: "Workshops facilitated", value: "7" },
          { label: "Roadmap horizon", value: "24 months" },
        ],
      },
      {
        name: "Lumen Agro",
        industry: "Agriculture",
        project: "Digital capability uplift",
        summary:
          "Designed an internal product academy, hiring plan, and vendor governance model to unify eight disparate systems.",
        results: [
          "Reduced vendor overlaps saving $220k annually",
          "Coaching plan accelerated two PM promotions",
        ],
        metrics: [
          { label: "Teams coached", value: "5" },
          { label: "Artifacts delivered", value: "26" },
        ],
      },
    ],
    projects: [
      {
        id: "delta-roadmap",
        title: "Delta Pensions Omnichannel Blueprint",
        client: "Delta Pensions",
        description:
          "End-to-end research, service blueprinting, and executive storytelling that sequenced the next 24 months of delivery.",
        deliverables: [
          "Journey maps for 4 customer archetypes",
          "Operating model & capability scorecards",
          "Prioritised backlog with investment bands",
        ],
        stack: ["Miro", "Notion", "Figma"],
        duration: "6 weeks",
        impact: [
          "Roadmap approved unanimously",
          "Budget released in one board cycle",
        ],
        image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "lumen-enable",
        title: "Lumen Agro Capability Enablement",
        client: "Lumen Agro",
        description:
          "Designed product governance, talent pathways, and vendor scorecards to modernize agricultural marketplaces.",
        deliverables: [
          "Capability maturity model",
          "Hiring plan + internal product academy",
          "Vendor RFP toolkit and scorecards",
        ],
        stack: ["Notion", "Airtable", "Linear"],
        duration: "5 weeks",
        impact: [
          "$220k vendor savings",
          "Two teams shipping rituals lifted",
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    relatedIds: ["web-engineering", "product-platforms"],
  },
];

export const serviceInterestOptions = [
  { value: "consultation", label: "Free Consultation" },
  ...serviceOfferings.map((service) => ({
    value: service.id,
    label: service.name,
  })),
  { value: "other", label: "Other / Partnership" },
] as const;

export const serviceById: Record<string, ServiceOffering> = Object.fromEntries(
  serviceOfferings.map((service) => [service.id, service]),
);

