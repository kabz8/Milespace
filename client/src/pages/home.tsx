import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Code, Smartphone, Lightbulb, CheckCircle, AlertCircle } from "lucide-react";
import { type Project } from "@shared/schema";
import heroImage from "@assets/generated_images/Hero_workspace_tech_scene_81addf33.png";
import ecommerceProject from "@assets/generated_images/E-commerce_website_project_mockup_7f163293.png";
import bankingProject from "@assets/generated_images/Mobile_banking_app_mockup_b9f02438.png";
import restaurantProject from "@assets/generated_images/Restaurant_booking_web_app_50b92408.png";

const projectImages: Record<string, string> = {
  "ecommerce": ecommerceProject,
  "mobile": bankingProject,
  "web": restaurantProject,
};

export default function Home() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const featuredProjects = projects?.filter(p => p.featured).slice(0, 3) || [];

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Software Development",
      description: "Enterprise-grade software solutions tailored to your business needs and workflows.",
    },
    {
      icon: Lightbulb,
      title: "Consulting Services",
      description: "Strategic technology consulting to help you make informed decisions about your digital transformation.",
    },
  ];

  const benefits = [
    "Expert team with proven track record",
    "Cutting-edge technology stack",
    "Transparent pricing and communication",
    "On-time delivery guaranteed",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern workspace"
            className="w-full h-full object-cover"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" data-testid="text-hero-title">
            Transform Your Vision Into Reality
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            Premium software development agency delivering exceptional digital solutions that drive business growth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                data-testid="button-view-work"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground border border-primary-border"
                data-testid="button-hero-consultation"
              >
                Free Consultation
              </Button>
            </Link>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
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
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <p className="text-muted-foreground">Failed to load projects. Please try again later.</p>
              </div>
            ) : featuredProjects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No featured projects available.</p>
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
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
