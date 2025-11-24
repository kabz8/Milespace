import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Layers,
  Sparkles,
  Users2,
} from "lucide-react";
import { serviceById, type ServiceOffering } from "@shared/services";

type ServiceDetailProps = {
  params: {
    serviceId: string;
  };
};

function EmptyState() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <Card className="max-w-md text-center space-y-6 p-10">
        <div className="space-y-3">
          <Badge variant="secondary">
            Service
          </Badge>
          <h1 className="text-2xl font-semibold">We couldn&apos;t find that service</h1>
          <p className="text-muted-foreground">
            The service you are looking for no longer exists or has moved. Explore other offerings instead.
          </p>
        </div>
        <Link href="/services">
          <Button className="gap-2 w-full">
            Back to services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  const service: ServiceOffering | undefined = serviceById[params.serviceId];

  if (!service) {
    return <EmptyState />;
  }

  const related = service.relatedIds
    .map((id) => serviceById[id])
    .filter(Boolean) as ServiceOffering[];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-card py-12 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <Button variant="ghost" size="sm" className="mb-6 gap-2 pl-0 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Button>
          </Link>
          <Badge variant="outline" className="mb-4">
            Service detail
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-4">{service.name}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">{service.description}</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-muted-foreground">Kick-off to launch</CardTitle>
                <CardDescription className="text-2xl font-semibold text-foreground">{service.typicalTimeline}</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-muted-foreground">Engagement start</CardTitle>
                <CardDescription className="text-2xl font-semibold text-foreground">{service.startPrice}</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-muted-foreground">Booking note</CardTitle>
                <CardDescription className="text-base text-foreground">{service.bookingNote}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[3fr,2fr]">
          <Card className="p-8 space-y-8">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-3">What&apos;s included</p>
              <h2 className="text-3xl font-semibold mb-4">Deliverables & outcomes</h2>
              <p className="text-muted-foreground">
                Every engagement is staffed with a product lead, senior engineers, UX, and QA. Here is the tangible work you receive.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm text-muted-foreground font-semibold mb-3">Deliverables</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-semibold mb-3">Measured outcomes</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-3">Preferred stack</p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-muted text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-primary/5 border-dashed border-primary/30 flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Ready to turn this on?</p>
              <h3 className="text-2xl font-semibold mb-3">Book or ask for more context</h3>
              <p className="text-sm text-muted-foreground">
                We reserve two build slots per month. Share your context and we&apos;ll confirm a kickoff date within 24 hours.
              </p>
            </div>
            <div className="space-y-3">
              <Link href={`/contact?service=${service.id}`}>
                <Button className="w-full gap-2">
                  Book this service
                  <Calendar className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/contact?service=${service.id}`}>
                <Button variant="outline" className="w-full gap-2">
                  Ask a specific question
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Typical response time: under 24 hours
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Clients guided</p>
              <h2 className="text-3xl font-semibold">Who trusts this service</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              We work hands-on with industry leaders and scale-ups. Below are recent clients who used this exact service.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {service.clients.map((client) => (
              <Card key={client.name} className="p-6 space-y-5 hover-elevate transition-all">
                <div className="flex flex-col gap-1">
                  <Badge variant="secondary" className="w-fit text-xs font-medium">
                    {client.industry}
                  </Badge>
                  <h3 className="text-2xl font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.project}</p>
                </div>
                <p className="text-muted-foreground">{client.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {client.results.map((result) => (
                    <li key={result} className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground pt-2 border-t border-border/60">
                  {client.metrics.map((metric) => (
                    <div key={`${client.name}-${metric.label}`}>
                      <p className="text-xs font-semibold">{metric.label}</p>
                      <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                      {metric.helper && <p className="text-xs">{metric.helper}</p>}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Project breakdowns</p>
              <h2 className="text-3xl font-semibold">Recent work from this service</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              We treat every engagement like a case study in the making. Dive into the workstreams, stack, and impact.
            </p>
          </div>
          <div className="grid gap-8">
            {service.projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-elevate transition-all">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 space-y-5">
                    <div className="flex flex-col gap-1">
                      <Badge variant="outline" className="w-fit text-xs font-medium">
                        {project.client}
                      </Badge>
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.duration}</p>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Key deliverables</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {project.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex gap-2">
                            <Layers className="h-4 w-4 text-primary mt-0.5" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Impact</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {project.impact.map((impactItem) => (
                          <li key={impactItem} className="flex gap-2">
                            <Sparkles className="h-4 w-4 text-primary mt-0.5" />
                            <span>{impactItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={`${project.id}-${tech}`} variant="secondary" className="bg-muted text-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="relative min-h-[320px]">
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-card border-t border-border/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Related services</p>
                <h2 className="text-3xl font-semibold">Often booked together</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Pair this engagement with adjacent services to extend capability and keep a single accountable squad.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((relatedService) => (
                <Card key={relatedService.id} className="p-6 flex flex-col gap-4">
                  <div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {relatedService.typicalTimeline}
                    </Badge>
                    <h3 className="text-2xl font-semibold mt-2">{relatedService.name}</h3>
                    <p className="text-muted-foreground">{relatedService.tagline}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {relatedService.outcomes.slice(0, 3).map((outcome) => (
                      <li key={`${relatedService.id}-${outcome}`} className="flex gap-2">
                        <Users2 className="h-4 w-4 text-primary mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {relatedService.stack.slice(0, 4).map((tech) => (
                      <Badge key={`${relatedService.id}-${tech}`} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/services/${relatedService.id}`}>
                    <Button variant="ghost" className="justify-start gap-2 px-0">
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

