import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, CheckCircle, Code, Lightbulb, Quote, Smartphone, Sparkles } from "lucide-react";
import { type Project } from "@shared/schema";
import ecommerceProject from "@assets/generated_images/E-commerce_website_project_mockup_7f163293.png";
import bankingProject from "@assets/generated_images/Mobile_banking_app_mockup_b9f02438.png";
import restaurantProject from "@assets/generated_images/Restaurant_booking_web_app_50b92408.png";

const projectImages: Record<string, string> = {
  ecommerce: ecommerceProject,
  mobile: bankingProject,
  web: restaurantProject,
};

const fallbackProjects: Project[] = [
  {
    id: "fallback-ecommerce",
    title: "E-Commerce Platform",
    client: "RetailCo Global",
    category: "ecommerce",
    description:
      "Full-stack commerce solution with seamless checkout and inventory control tailored for high-growth retailers.",
    imageUrl: "/assets/ecommerce.png",
    tags: ["React", "Node.js", "Stripe"],
    featured: true,
  },
  {
    id: "fallback-mobile",
    title: "Mobile Banking Suite",
    client: "FinanceHub Africa",
    category: "mobile",
    description:
      "Secure mobile banking experience with biometric auth, realtime transfers, and proactive fraud monitoring.",
    imageUrl: "/assets/mobile.png",
    tags: ["React Native", "Firebase"],
    featured: true,
  },
  {
    id: "fallback-restaurant",
    title: "Restaurant Booking System",
    client: "DineEasy Group",
    category: "web",
    description:
      "Reservation, table management, and guest analytics platform powering restaurant groups across major cities.",
    imageUrl: "/assets/restaurant.png",
    tags: ["Vue", "Postgres"],
    featured: true,
  },
];

const heroStats = [
  { label: "Launches", value: "120+" },
  { label: "Experts", value: "30+" },
  { label: "Avg. NPS", value: "68" },
  { label: "Sprint cadence", value: "2 wks" },
];

const serviceTracks = [
  {
    title: "Website Sprint",
    description: "5–15 page marketing and product sites engineered for speed and SEO.",
    icon: Code,
    bullets: ["Responsive UI systems", "Headless CMS integration", "Conversion-focused UX"],
  },
  {
    title: "App Momentum",
    description: "Cross-platform apps with secure authentication, offline states, and OTA updates.",
    icon: Smartphone,
    bullets: ["Shared React Native stack", "Realtime experiences", "App store readiness"],
  },
  {
    title: "Product Enablement",
    description: "Embedded pods to accelerate experimentation and internal tooling.",
    icon: Sparkles,
    bullets: ["Discovery & research", "Design systems", "Analytics & experimentation"],
  },
];

const processPhases = [
  { title: "1 · Discover", copy: "Workshops, user interviews, and opportunity mapping." },
  { title: "2 · Design", copy: "Experience strategy, prototyping, and design system production." },
  { title: "3 · Build", copy: "Sprint-based delivery with automated QA and transparent demos." },
  { title: "4 · Launch & Grow", copy: "Enablement, observability, and optimisation after release." },
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

export default function Home() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const projectSource: Project[] = projects && projects.length > 0 ? projects : fallbackProjects;
  const featuredProjects = projectSource.filter((p) => p.featured).slice(0, 3) || [];
  const hasProjects = (projects?.length ?? 0) > 0;
  const showSkeletons = isLoading && !hasProjects;
  const isUsingFallback = !hasProjects && projectSource === fallbackProjects;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold text-primary">
              Milespace • Product Studio
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              data-testid="text-hero-title"
            >
              We design, ship, and scale digital products with a confident navy palette.
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-2xl"
              data-testid="text-hero-subtitle"
            >
              Strategy, UI/UX, and engineering under one roof—so every release feels intentional, on-brand, and ready for growth.
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
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5"
                >
                  View pricing
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {heroStats.map((stat) => (
                <Card key={stat.label} className="p-4 text-left shadow-sm">
                  <div className="text-3xl font-display text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[32px] border border-border bg-primary text-primary-foreground p-8 space-y-4 shadow-lg">
              <p className="text-sm font-semibold opacity-80">Live snapshot</p>
              <h3 className="text-4xl font-display">08 active builds</h3>
              <p className="opacity-80">Commerce, fintech, and SaaS platforms shipping with our embedded squads right now.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-semibold opacity-80">Velocity</p>
                  <p className="text-2xl font-semibold">34 pts</p>
                </div>
                <div>
                  <p className="text-xs font-semibold opacity-80">Launch cadence</p>
                  <p className="text-2xl font-semibold">2 weeks</p>
                </div>
              </div>
            </div>
            <Card className="rounded-[32px] p-8 space-y-4">
              <p className="text-sm font-semibold">Active industries</p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {["Fintech", "Healthcare", "Hospitality", "AI tooling"].map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="font-display text-4xl font-semibold">What we build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focused tracks that cover every layer of shipping modern products.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceTracks.map((track) => (
              <Card key={track.title} className="p-6 flex flex-col gap-4">
                <track.icon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-xl">{track.title}</h3>
                  <p className="text-sm text-muted-foreground">{track.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
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
            <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
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

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions covering research, design, engineering, QA, and launch support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {serviceTracks.map((track, index) => (
              <Card key={track.title} className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-service-${index}`}>
                <track.icon className="h-12 w-12 text-primary mb-4" data-testid={`icon-service-${index}`} />
                <h3 className="font-semibold text-xl mb-3" data-testid={`text-service-title-${index}`}>
                  {track.title}
                </h3>
                <p className="text-muted-foreground mb-4">{track.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
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

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="font-display text-4xl font-semibold">How we deliver</h2>
            <p className="text-muted-foreground">Transparent rituals that keep stakeholders aligned.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {processPhases.map((phase) => (
              <Card key={phase.title} className="p-6 space-y-2">
                <h3 className="font-semibold">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-4xl font-semibold">Ready to build?</h2>
          <p className="text-primary-foreground/90">
            Tell us where you want to take your product—we’ll map the team, technology, and timeline to get you there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book a call
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                Browse case studies
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {["Expert engineers", "Design systems", "Transparent pricing", "On-time delivery"].map((item) => (
              <div key={item} className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-5 w-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
