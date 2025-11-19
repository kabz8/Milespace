import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, ArrowLeft, AlertCircle, Eye } from "lucide-react";
import { pricingPackages } from "@shared/pricing-data";
import { type ShareablePricingLink } from "@shared/schema";

export default function PricingShareDetail() {
  const [, params] = useRoute("/pricing/share/:linkId");
  const linkId = params?.linkId;

  const { data: shareLink, isLoading, error } = useQuery<ShareablePricingLink>({
    queryKey: [`/api/pricing/share/${linkId}`],
    enabled: !!linkId,
  });

  const pkg = shareLink ? pricingPackages.find(p => p.id === shareLink.packageId) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16">
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-10 w-32 mb-8" />
            <Card>
              <CardHeader className="text-center space-y-4">
                <Skeleton className="h-10 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
                <Skeleton className="h-12 w-32 mx-auto" />
              </CardHeader>
              <CardContent className="space-y-6">
                <Skeleton className="h-64 w-full" />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  if (error || !shareLink || !pkg) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Link not found</h1>
          <p className="text-muted-foreground mb-6">
            This shareable pricing link is invalid or has expired.
          </p>
          <Link href="/pricing">
            <Button data-testid="button-back-to-pricing">
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/pricing">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Pricing
            </Button>
          </Link>

          <Card className="border-primary shadow-lg">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                <Eye className="h-4 w-4" />
                <span data-testid="text-view-count">{shareLink.viewCount} views</span>
              </div>
              <CardTitle className="text-3xl mb-2" data-testid="text-package-name">
                {pkg.name}
              </CardTitle>
              <CardDescription className="text-base" data-testid="text-package-description">
                {pkg.description}
              </CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold" data-testid="text-package-price">
                  {pkg.price}
                </span>
                {pkg.price !== "Free" && pkg.price !== "Custom Quote" && pkg.price !== "Variable" && (
                  <span className="text-muted-foreground ml-2">one-time</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`text-feature-${index}`}
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Ready to get started?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us to discuss your project requirements and receive a detailed proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button className="w-full sm:w-auto" data-testid="button-contact">
                      Contact Us
                    </Button>
                  </Link>
                  {pkg.price === "Free" && (
                    <Link href="/contact">
                      <Button variant="outline" className="w-full sm:w-auto" data-testid="button-book-consultation">
                        Book Consultation
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-3">Why Choose Milespace?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Expert team with proven track record
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Transparent pricing and communication
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    On-time delivery guaranteed
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
