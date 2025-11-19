import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle,
  AlertCircle,
  Code,
  Globe,
  Lightbulb,
  Quote,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { type Project } from "@shared/schema";
import ecommerceProject from "@assets/generated_images/E-commerce_website_project_mockup_7f163293.png";
import bankingProject from "@assets/generated_images/Mobile_banking_app_mockup_b9f02438.png";
import restaurantProject from "@assets/generated_images/Restaurant_booking_web_app_50b92408.png";

const projectImages: Record<string, string> = {
  "ecommerce": ecommerceProject,
  "mobile": bankingProject,
  "web": restaurantProject,
};

const fallbackProjects: Project[] = [
  {
    id: "fallback-ecommerce",
    title: "E-Commerce Platform",
    client: "RetailCo Global",
    category: "ecommerce",
    description: "Full-stack commerce solution with seamless checkout and inventory control tailored for high-growth retailers.",
    imageUrl: "/assets/ecommerce.png",
    tags: ["React", "Node.js", "Stripe"],
    featured: true,
  },
  {
    id: "fallback-mobile",
    title: "Mobile Banking Suite",
    client: "FinanceHub Africa",
    category: "mobile",
    description: "Secure mobile banking experience with biometric auth, realtime transfers, and proactive fraud monitoring.",
    imageUrl: "/assets/mobile.png",
    tags: ["React Native", "Firebase"],
    featured: true,
  },
  {
    id: "fallback-restaurant",
    title: "Restaurant Booking System",
    client: "DineEasy Group",
    category: "web",
    description: "Reservation, table management, and guest analytics platform powering restaurant groups across major cities.",
    imageUrl: "/assets/restaurant.png",
    tags: ["Vue", "Postgres"],
    featured: true,
  },
];

export default function Home() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const projectSource: Project[] =
    projects && projects.length > 0 ? projects : fallbackProjects;
  const featuredProjects =
    projectSource.filter((p) => p.featured).slice(0, 3) || [];
  const hasProjects = (projects?.length ?? 0) > 0;
  const showSkeletons = isLoading && !hasProjects;
  const isUsingFallback = !hasProjects && projectSource === fallbackProjects;

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Marketing and product sites engineered with blazing performance, accessibility, and localized storytelling.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native-feel mobile + desktop apps with secure authentication, offline-first flows, and OTA updates.",
    },
    {
      icon: Lightbulb,
      title: "Consulting Services",
      description: "Strategic technology consulting to help you make informed decisions about your digital transformation.",
    },
    {
      icon: Sparkles,
      title: "Product Enablement",
      description: "Research, UI systems, and data insights that keep your internal teams shipping confidently.",
    },
  ];

  const benefits = [
    "Expert team with proven track record",
    "Cutting-edge technology stack",
    "Transparent pricing and communication",
    "On-time delivery guaranteed",
  ];

  const testimonials = [
    {
      quote:
        "Milespace guided us from concept to launch with absolute clarity. Our conversion rates doubled within three months.",
      name: "Grace Kamau",
      role: "Head of Digital, RetailCo Global",
    },
    {
      quote:
        "They feel like an extension of our team—disciplined sprints, proactive communication, and beautiful engineering.",
      name: "Tariq Noor",
      role: "COO, FinanceHub Africa",
    },
    {
      quote:
        "From discovery workshops to rollout, everything was meticulous. The platform is rock solid and easy to maintain.",
      name: "Dr. Sheila Wanjiru",
      role: "Director, AfyaWell Clinics",
    },
  ];

  const heroHighlights = [
    "Custom Apps",
    "Commerce Platforms",
    "Growth Experiments",
  ];

  const stats = [
    {
      icon: Globe,
      value: "120+",
      label: "Launches worldwide",
      detail: "Fintech, retail, health, and media",
    },
    {
      icon: Users,
      value: "30+",
      label: "Cross-functional experts",
      detail: "Product, design, and engineering",
    },
    {
      icon: ShieldCheck,
      value: "99.9%",
      label: "Uptime targets",
      detail: "Backed by automated QA suites",
    },
    {
      icon: Activity,
      value: "4.8/5",
      label: "Client happiness",
      detail: "Measuring NPS each release",
    },
  ];

  const processSteps = [
    {
      title: "1 · Insight",
      description:
        "Rapid research, user interviews, and product strategy to align outcomes.",
      icon: Lightbulb,
    },
    {
      title: "2 · Design",
      description:
        "Experience design, prototyping, and design systems tailored to your brand.",
      icon: Sparkles,
    },
    {
      title: "3 · Build",
      description:
        "Agile sprints, automated testing, and collaborative demos every week.",
      icon: Code,
    },
    {
      title: "4 · Launch & Grow",
      description:
        "Observability, experimentation, and optimisation once your product ships.",
      icon: Activity,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Milespace · Global Studio
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              data-testid="text-hero-title"
            >
              Design, build, and scale modern software with a senior product team.
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-xl"
              data-testid="text-hero-subtitle"
            >
              We craft high-performing web and app experiences using a simple palette:
              confident navy, crisp white, and purposeful black. Every engagement pairs
              strategy, design, engineering, and ongoing optimisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-hero-consultation"
                >
                  Start a project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5"
                  data-testid="button-view-work"
                >
                  View our work
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              {heroHighlights.map((highlight) => (
                <div key={highlight}>
                  <p className="text-2xl font-semibold text-foreground mb-1">•</p>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-border bg-card shadow-lg p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.4em]">
                  Delivery snapshot
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Live
                </span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">Active initiatives</p>
                  <p className="text-4xl font-display text-foreground">08</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-2">
                      Avg. sprint velocity
                    </p>
                    <p className="text-2xl font-semibold text-primary">34 pts</p>
                  </div>
                  <div className="rounded-2xl border border-border p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-2">
                      Launch cadence
                    </p>
                    <p className="text-2xl font-semibold text-primary">2 wks</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-border p-4 space-y-3">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    Current industries
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {["Fintech", "Healthcare", "Hospitality", "AI tooling"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 flex flex-col gap-3"
            >
              <stat.icon className="h-6 w-6" />
              <div className="text-4xl font-display font-bold">{stat.value}</div>
              <p className="text-sm uppercase tracking-widest text-white/80">
                {stat.label}
              </p>
              <p className="text-sm text-white/80">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4" data-testid="text-featured-title">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest work and see how we've helped businesses achieve their digital goals
            </p>
          </div>

          {isUsingFallback && (
            <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              Showing sample projects while we reconnect to the live portfolio.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showSkeletons ? (
              <>
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="aspect-[4/3] w-full" />
                    <CardContent className="p-6 space-y-3">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-16 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : featuredProjects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No featured projects available right now.</p>
              </div>
            ) : (
              featuredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover-elevate active-elevate-2 group cursor-pointer transition-all duration-300" data-testid={`card-project-${project.id}`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={projectImages[project.category] || ecommerceProject}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-testid={`img-project-${project.id}`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 capitalize" data-testid={`badge-category-${project.id}`}>
                      {project.category}
                    </Badge>
                    <h3 className="font-semibold text-xl mb-2" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Client: {project.client}
                    </p>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/work">
              <Button variant="outline" size="lg" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions covering research, design, engineering, QA, and launch support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-service-${index}`}>
                <service.icon className="h-12 w-12 text-primary mb-4" data-testid={`icon-service-${index}`} />
                <h3 className="font-semibold text-xl mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teams worldwide trust Milespace to deliver mission-critical software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 flex flex-col gap-6 hover-elevate active-elevate-2 transition-all">
                <Quote className="h-8 w-8 text-primary" />
                <p className="text-lg text-foreground flex-1">“{testimonial.quote}”</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
              How we partner with you
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent phases, measurable milestones, and a team that feels in-house from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm hover-elevate active-elevate-2 transition-all"
              >
                <step.icon className="h-8 w-8 text-primary mb-4" />
                <p className="font-display text-lg font-semibold mb-2">
                  {step.title}
                </p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6" data-testid="text-cta-title">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss your project and explore how we can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                data-testid="button-view-pricing"
              >
                View Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground border border-border hover:bg-background/90"
                data-testid="button-cta-consultation"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm" data-testid={`text-benefit-${index}`}>
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
