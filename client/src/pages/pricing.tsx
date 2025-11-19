import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { pricingPackages } from "@shared/pricing-data";

const faqs = [
  {
    question: "What's included in the free consultation?",
    answer: "Our free 30-minute consultation includes a discussion of your project requirements, technology recommendations, timeline estimation, and a no-obligation quote. It's a great way to explore your options without any commitment.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A basic website typically takes 4-6 weeks, while custom software projects can range from 2-6 months. We'll provide a detailed timeline during your consultation.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for most projects. Typically, we require 50% upfront and 50% upon completion, but we're happy to discuss payment terms that work for your budget.",
  },
  {
    question: "What happens after the project is completed?",
    answer: "All our packages include post-launch support ranging from 3-12 months depending on your package. We also offer ongoing maintenance plans to ensure your solution stays up-to-date and secure.",
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Absolutely! Many clients start with a basic package and expand as their business grows. We'll design your solution with scalability in mind, making future upgrades seamless.",
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, we collaborate with teams worldwide. We use modern communication and project management tools to keep distributed stakeholders aligned.",
  },
];

export default function Pricing() {
  const { toast } = useToast();
  const [generatingFor, setGeneratingFor] = useState<string | null>(null);

  const shareLinkMutation = useMutation({
    mutationFn: async (packageId: string) => {
      const response: any = await apiRequest("POST", "/api/pricing/share", { packageId });
      return response;
    },
    onSuccess: (data: any, packageId) => {
      const pkg = pricingPackages.find((p) => p.id === packageId);
      navigator.clipboard.writeText(data.link.url);
      toast({
        title: "Link copied!",
        description: `Shareable link for "${pkg?.name}" copied to clipboard`,
      });
      setGeneratingFor(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to generate shareable link. Please try again.",
        variant: "destructive",
      });
      setGeneratingFor(null);
    },
  });

  const handleSharePackage = (packageId: string) => {
    setGeneratingFor(packageId);
    shareLinkMutation.mutate(packageId);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6" data-testid="text-pricing-title">
              Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
              Choose the package that fits your needs. All prices include expert development, quality assurance, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative ${
                  pkg.featured
                    ? "border-primary shadow-lg scale-105"
                    : ""
                }`}
                data-testid={`card-package-${pkg.id}`}
              >
                {pkg.featured && (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                    data-testid="badge-popular"
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span data-testid={`text-package-name-${pkg.id}`}>{pkg.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleSharePackage(pkg.id)}
                      disabled={generatingFor === pkg.id}
                      data-testid={`button-share-${pkg.id}`}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription data-testid={`text-package-description-${pkg.id}`}>
                    {pkg.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold" data-testid={`text-package-price-${pkg.id}`}>
                      {pkg.price}
                    </span>
                    {pkg.price !== "Free" && pkg.price !== "Custom Quote" && pkg.price !== "Variable" && (
                      <span className="text-muted-foreground ml-2">one-time</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                        data-testid={`text-feature-${pkg.id}-${index}`}
                      >
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.featured ? "default" : "outline"}
                    data-testid={`button-get-started-${pkg.id}`}
                  >
                    {pkg.price === "Free" ? "Book Now" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-center mb-8" data-testid="text-faq-title">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger data-testid={`button-faq-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Not sure which package is right for you?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Schedule a free consultation and we'll help you choose the perfect solution for your needs.
                </p>
                <Button
                  size="lg"
                  className="bg-background text-foreground border border-border hover:bg-background/90"
                  data-testid="button-cta-consultation"
                >
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
