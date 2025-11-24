import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  LineChart,
  Rocket,
  Shield,
  Workflow,
  Users,
  CheckCircle,
  Cpu,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";
import { serviceOfferings } from "@shared/services";

const clientSpotlights = serviceOfferings
  .map((service) => {
    const client = service.clients[0];
    if (!client) return null;
    return {
      serviceId: service.id,
      serviceName: service.name,
      client,
    };
  })
  .filter(Boolean) as {
    serviceId: string;
    serviceName: string;
    client: (typeof serviceOfferings)[number]["clients"][number];
  }[];

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
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">What we deliver — in detail</h2>
              <p className="text-lg text-muted-foreground">
                Pick the craft you need and see exactly what is included. Every service comes with embedded product leadership,
                proactive QA, and documentation you can hand over to internal teams.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span>ISO-aligned security practices</span>
            </div>
          </div>

          <div className="space-y-8">
            {serviceOfferings.map((service) => (
              <Card key={service.id} className="p-8 hover-elevate active-elevate-2 transition-all">
                <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
                      <span>{service.typicalTimeline}</span>
                      <span>Starts {service.startPrice}</span>
                    </div>
                    <h3 className="font-display text-3xl font-semibold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-3">Best for</p>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                          {service.bestFor.slice(0, 3).map((item) => (
                            <li key={item} className="flex gap-2">
                              <LineChart className="h-4 w-4 text-primary mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-3">Included deliverables</p>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                          {service.deliverables.slice(0, 3).map((item) => (
                            <li key={item} className="flex gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Measured outcomes</p>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {service.outcomes.slice(0, 4).map((outcome) => (
                          <li key={outcome} className="flex gap-2">
                            <LineChart className="h-4 w-4 text-primary mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link href={`/services/${service.id}`}>
                        <Button className="w-full" variant="default">
                          View service detail
                        </Button>
                      </Link>
                      <Link href={`/contact?service=${service.id}`}>
                        <Button variant="outline" className="w-full border-dashed">
                          Book this service
                        </Button>
                      </Link>
                      <p className="text-xs text-muted-foreground">{service.bookingNote}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold mb-4">Client proof from each craft</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every service has live references. Here is a snapshot of the teams we’ve guided recently and what changed for them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientSpotlights.map(({ serviceId, serviceName, client }) => (
              <Card key={`${serviceId}-${client.name}`} className="p-6 flex flex-col gap-4 hover-elevate transition-all">
                <div className="space-y-1">
                  <Badge variant="outline" className="text-xs font-medium">
                    {serviceName}
                  </Badge>
                  <h3 className="text-xl font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.industry}</p>
                </div>
                <p className="text-sm text-muted-foreground flex-1">{client.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {client.results.slice(0, 2).map((result) => (
                    <li key={result} className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/60">
                  <span>{client.project}</span>
                  <Link href={`/services/${serviceId}`}>
                    <Button variant="ghost" className="h-auto px-0 text-primary text-xs">
                      View full detail
                    </Button>
                  </Link>
                </div>
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
                <CardTitle className="mb-3 text-primary font-semibold">{step.title}</CardTitle>
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
              <span className="text-sm font-semibold text-muted-foreground">Industries</span>
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
              <span className="text-sm font-semibold opacity-80">Partnership</span>
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

