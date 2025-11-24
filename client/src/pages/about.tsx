import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Award,
  Globe,
  Layers,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import cityscapeImage from "@assets/generated_images/Global_cityscape_aerial_view_5fa70326.png";

const stats = [
  { label: "Digital launches", value: "120+", description: "Web, mobile, and platform builds" },
  { label: "In-house experts", value: "30+", description: "Product, design, engineering, QA" },
  { label: "Avg. NPS", value: "68", description: "Measured after every release" },
  { label: "Ship velocity", value: "2 wks", description: "Typical sprint delivery cadence" },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Quality by default",
    description: "Secure architectures, automated testing, and obsessively polished UI systems.",
  },
  {
    icon: Layers,
    title: "Modular delivery",
    description: "Strategy, design, and build tracks layer together so you can engage where it matters most.",
  },
  {
    icon: Users,
    title: "Embedded teams",
    description: "We operate as an extension of your product org with transparent rituals and documentation.",
  },
  {
    icon: Activity,
    title: "Outcome oriented",
    description: "Every sprint is tied to a measurable business objective, not just tickets closed.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Milespace launches",
    description: "Started as a boutique studio building marketing sites and MVPs for high-growth startups.",
  },
  {
    year: "2021",
    title: "Product practice expands",
    description: "Introduced full product strategy, research, and design systems for enterprise clients.",
  },
  {
    year: "2023",
    title: "Global delivery hubs",
    description: "Scaled to serve teams across Africa, Europe, and North America with remote-first squads.",
  },
  {
    year: "Today",
    title: "Mission control for software",
    description: "Dedicated crews that plan, build, and optimise mission-critical platforms end-to-end.",
  },
];

const capabilities = [
  "End-to-end product leadership",
  "Web & mobile engineering",
  "AI-assisted workflows",
  "Secure cloud infrastructure",
  "CX research & UX writing",
  "Performance optimisation & SRE",
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-primary via-[#0f2a45] to-black text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-white/10 text-white border-white/20 font-semibold">
              About Milespace
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight" data-testid="text-about-title">
              We help ambitious companies ship world-class software with confidence.
            </h1>
            <p className="text-primary-foreground/80">
              From concept to continuous delivery, our remote-native studio blends strategy, design, and engineering to accelerate digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary">
                <a href="mailto:hello@milespace.co.ke">Partner with us</a>
              </Button>
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                <a href="#culture">Explore our culture</a>
              </Button>
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden border border-white/20 shadow-2xl">
            <img src={cityscapeImage} alt="Global cityscape" className="w-full h-full object-cover" data-testid="img-about-hero" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
              <p className="text-sm font-semibold mt-2 text-foreground/80">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card" id="culture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-semibold">Our origin story</h2>
            <p className="text-muted-foreground">
              We started as a tiny collective crafting high-impact marketing experiences. Today, we launch commerce platforms, fintech super-apps, and AI-enabled back-office tooling for global teams.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Design + engineering in sync</p>
                  <p className="text-sm text-muted-foreground">Every squad pairs product, design, and engineering leads from day one, ensuring zero handoff friction.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Remote-first, globally aligned</p>
                  <p className="text-sm text-muted-foreground">We operate across time zones with overlapping hours, async rituals, and crystal-clear documentation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <Card key={principle.title} className="p-6">
                <principle.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold">Milestones</h2>
            <p className="text-muted-foreground">Highlights from our journey building Milespace.</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="grid md:grid-cols-4 gap-6 items-start">
                <div className="text-primary font-semibold text-lg">{milestone.year}</div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold">What we bring</h2>
            <p className="text-muted-foreground">An integrated crew covering every layer of modern product development.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {capabilities.map((capability) => (
              <Badge key={capability} variant="secondary" className="px-4 py-2">
                {capability}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Globe className="h-10 w-10 mx-auto" />
          <h2 className="font-display text-4xl font-semibold">Globally connected</h2>
          <p className="text-primary-foreground/80">
            We partner with clients across Africa, Europe, the Middle East, and North America—bringing local insight and international best practices to every engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["Nairobi", "London", "Dubai", "Berlin", "Remote hubs"].map((location) => (
              <span key={location} className="rounded-full border border-white/30 px-4 py-1">
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
