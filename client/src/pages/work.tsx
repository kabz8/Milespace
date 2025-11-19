import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { type Project } from "@shared/schema";
import ecommerceProject from "@assets/generated_images/E-commerce_website_project_mockup_7f163293.png";
import bankingProject from "@assets/generated_images/Mobile_banking_app_mockup_b9f02438.png";
import restaurantProject from "@assets/generated_images/Restaurant_booking_web_app_50b92408.png";
import realEstateProject from "@assets/generated_images/Real_estate_platform_mockup_5ec03453.png";
import healthcareProject from "@assets/generated_images/Healthcare_portal_interface_6be89b4e.png";
import educationProject from "@assets/generated_images/Education_platform_LMS_a2ab168f.png";

type ProjectCategory = "all" | "web" | "software" | "mobile" | "ecommerce" | "saas";

const projectImages: Record<string, string> = {
  "ecommerce": ecommerceProject,
  "mobile": bankingProject,
  "web": restaurantProject,
  "saas": healthcareProject,
  "software": educationProject,
};

const fallbackProjects: Project[] = [
  {
    id: "fallback-marketplace",
    title: "Marketplace Revamp",
    client: "Zuri Marketplace",
    category: "ecommerce",
    description: "Multi-merchant marketplace with escrow payments, vendor onboarding, and cloud-native search.",
    imageUrl: "/assets/ecommerce.png",
    tags: ["Next.js", "Postgres", "Stripe"],
    featured: true,
  },
  {
    id: "fallback-mobile-wallet",
    title: "Digital Wallet Suite",
    client: "PayWave Africa",
    category: "mobile",
    description: "React Native wallet with biometric login, instant P2P transfers, and savings goals.",
    imageUrl: "/assets/mobile.png",
    tags: ["React Native", "GraphQL"],
    featured: true,
  },
  {
    id: "fallback-health",
    title: "Telehealth Platform",
    client: "AfyaWell Clinics",
    category: "saas",
    description: "HIPAA-inspired telemedicine, triage chat, and EHR integrations built for regional clinics.",
    imageUrl: "/assets/health.png",
    tags: ["Vue", "Supabase"],
    featured: true,
  },
  {
    id: "fallback-education",
    title: "LMS Modernization",
    client: "EduSmart",
    category: "software",
    description: "Learning platform with adaptive content, cohort reporting, and live class tooling.",
    imageUrl: "/assets/education.png",
    tags: ["React", "NestJS"],
    featured: true,
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const projectSource: Project[] =
    projects && projects.length > 0 ? projects : fallbackProjects;

  const categories = [
    { value: "all" as ProjectCategory, label: "All Projects" },
    { value: "web" as ProjectCategory, label: "Web" },
    { value: "software" as ProjectCategory, label: "Software" },
    { value: "mobile" as ProjectCategory, label: "Mobile" },
    { value: "ecommerce" as ProjectCategory, label: "E-Commerce" },
    { value: "saas" as ProjectCategory, label: "SaaS" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectSource
      : projectSource.filter((p) => p.category === selectedCategory);

  const showErrorBanner = Boolean(error);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6" data-testid="text-work-title">
              Our Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-work-subtitle">
              Showcasing successful projects that have transformed businesses across continents
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                data-testid={`button-filter-${category.value}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {showErrorBanner && (
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              Live project feed is temporarily unavailable, so we're showcasing recent case studies instead.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <>
                {[1, 2, 3, 4, 5, 6].map((i) => (
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
            ) : filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover-elevate active-elevate-2 group cursor-pointer transition-all duration-300"
                  data-testid={`card-project-${project.id}`}
                >
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
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-tag-${project.id}-${index}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
