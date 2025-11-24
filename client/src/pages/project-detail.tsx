import { Link, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowUpRight, Clock, Globe2, Loader2 } from "lucide-react";
import { type Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getFallbackProject } from "@/data/projects";

const WEBSITE_FALLBACK = "https://milespace.co";

export default function ProjectDetail() {
  const [, params] = useRoute("/work/:projectId");
  const projectId = params?.projectId;

  const { data: project, isLoading, error } = useQuery<Project>({
    queryKey: [`/api/projects/${projectId}`],
    enabled: Boolean(projectId),
  });

  const fallbackProject = getFallbackProject(projectId);
  const resolvedProject = project ?? fallbackProject;

  if (isLoading && !resolvedProject) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (!resolvedProject) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-4">
            <h1 className="text-2xl font-semibold">Project not found</h1>
            <p className="text-muted-foreground">
              We couldn't find that case study. Please pick another project from the library.
            </p>
            <Link href="/work">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const websiteUrl = resolvedProject.website || WEBSITE_FALLBACK;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col gap-6">
          <Link href="/work">
            <Button variant="ghost" className="w-fit">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Button>
          </Link>
          <div className="space-y-4">
            <Badge className="capitalize">{resolvedProject.category}</Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold">
              {resolvedProject.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {resolvedProject.description}
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-primary" />
                {resolvedProject.client}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Delivered in under 12 weeks
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={websiteUrl} target="_blank" rel="noreferrer" data-testid="project-website-link">
                  Visit product
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Link href="/contact">
                <Button variant="outline">Discuss similar build</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-border bg-card p-1">
          <div className="relative rounded-[28px] overflow-hidden bg-muted min-h-[320px] flex items-center justify-center">
            <Loader2 className="h-10 w-10 text-muted-foreground animate-spin" />
            <img
              src={resolvedProject.imageUrl}
              alt={resolvedProject.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
          </div>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
              <p className="text-muted-foreground">
                Built with a lean, senior squad across design, engineering, and product.
                We focused on scalability, security, and seamless handoff to the client's in-house team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {resolvedProject.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

