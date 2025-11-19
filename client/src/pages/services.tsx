import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Globe,
  Layers,
  LineChart,
  Rocket,
  Shield,
  Smartphone,
  Workflow,
  Users,
  CheckCircle,
  Cpu,
  MonitorSmartphone,
} from "lucide-react";

const serviceAreas = [
  {
    icon: Code,
    title: "Web Engineering",
    description: "Conversion-focused marketing sites, enterprise intranets, and performant PWAs that scale with your traffic.",
    highlights: ["Next.js / Vite experts", "CMS integrations", "Accessibility-first"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile and desktop applications with delightful UX, real-time features, and secure authentication.",
    highlights: ["React Native & Swift", "Offline-first patterns", "App Store readiness"],
  },
  {
    icon: Layers,
    title: "Systems & Integrations",
    description: "Robust APIs, workflow automation, and third-party integrations that keep your business operations flowing.",
    highlights: ["Scalable architectures", "Payments & ERP", "Telemetry & alerts"],
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description: "Dashboards, reporting pipelines, and insight layers that help your team make confident decisions.",
    highlights: ["BI dashboards", "Custom ETL", "Predictive reporting"],
  },
];

const deliveryProcess = [
  {
    title: "01 · Discover",
    description: "Deep-dive workshops to clarify objectives, map stakeholders, and define measurable outcomes.",
  },
  {
    title: "02 · Design",
    description: "Experience design, technical architecture, and backlog grooming to align your team and ours.",
  },
  {
    title: "03 · Build",
    description: "Iterative sprints with weekly demos, automated testing, and transparent documentation.",
  },
  {
    title: "04 · Launch & Grow",
    description: "Deployment, training, analytics setup, and optional retainers for continuous optimisation.",
  },
];

const industries = [
  "Fintech & Banking",
  "E-commerce & Retail",
  "Healthcare & Wellness",
  "Education & LMS",
  "Hospitality & Travel",
  "Public Sector & NGOs",
];

const guarantees = [
  "Dedicated product lead embedded with your team",
  "Clear milestones and KES-denominated budgets",
  "Security-first coding standards",
  "Post-launch support with SLAs",
];

const appBundles = [
  {
    icon: MonitorSmartphone,
    title: "Launch Pack",
    price: "KES 280,000 · 4-6 weeks",
    description: "MVP-ready marketing site or lightweight web app including analytics, CMS, and QA handover.",
    items: ["UX wireframes", "Vite/Next foundation", "Headless CMS", "QA + training"],
  },
  {
    icon: Smartphone,
    title: "App Momentum",
    price: "KES 520,000 · 8-10 weeks",
    description: "iOS, Android, and desktop app built with shared codebase, biometric auth, and push notifications.",
    items: ["React Native or Tauri", "Secure auth + storage", "CI/CD pipelines", "Beta launch support"],
  },
  {
    icon: Cpu,
    title: "Scale Platform",
    price: "Custom · 12+ weeks",
    description: "End-to-end product squads shipping complex SaaS or marketplace platforms with data, billing, and automation.",
    items: ["Product strategy sprint", "Microservice-ready APIs", "Observability stack", "Dedicated PM & QA"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_45%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            End-to-end delivery
          </Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 max-w-3xl">
            Services built for ambitious global brands
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-10">
            From strategy to scale, we craft digital products that are fast, resilient, and tailored to diverse markets worldwide. Every engagement includes research, design, engineering, QA, and enablement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90" data-testid="button-services-cta">
                Plan a project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                See our work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6">What we deliver</h2>
              <p className="text-lg text-muted-foreground">
                Each engagement is staffed with senior engineers, designers, and delivery leads. You get transparent communication, secure infrastructure, and rapid feedback loops.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span>ISO-aligned security practices</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((service) => (
              <Card key={service.title} className="h-full hover-elevate active-elevate-2 transition-all">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  {service.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="bg-muted text-foreground">
                      {highlight}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold mb-4">
              App Development Bundles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pick a launch track that matches your roadmap. Every bundle can expand into a managed product squad as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appBundles.map((bundle) => (
              <Card key={bundle.title} className="p-8 flex flex-col gap-6 hover-elevate active-elevate-2 transition-all">
                <bundle.icon className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="text-2xl mb-2">{bundle.title}</CardTitle>
                  <p className="text-primary font-semibold">{bundle.price}</p>
                </div>
                <CardDescription className="text-base">{bundle.description}</CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {bundle.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold mb-4">Delivery process</h2>
            <p className="text-lg text-muted-foreground">
              A proven framework that keeps projects predictable and collaborative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {deliveryProcess.map((step) => (
              <Card key={step.title} className="p-6 border-dashed">
                <CardTitle className="mb-3 text-primary font-semibold tracking-wide">{step.title}</CardTitle>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Industries</span>
            </div>
            <h3 className="font-display text-3xl font-semibold mb-6">
              Built for global markets
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="h-6 w-6" />
              <span className="text-sm uppercase tracking-[0.2em] opacity-80">Partnership</span>
            </div>
            <h3 className="font-display text-3xl font-semibold mb-6">
              What working with Milespace feels like
            </h3>
            <ul className="space-y-4">
              {guarantees.map((guarantee) => (
                <li key={guarantee} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{guarantee}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Rocket className="h-12 w-12 mx-auto" />
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Launch your next big initiative with confidence
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Tell us where you want to go—we’ll map the technology, team, and investment to get you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                View pricing in KES
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-background text-foreground border border-border hover:bg-background/90">
                Book a discovery call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

