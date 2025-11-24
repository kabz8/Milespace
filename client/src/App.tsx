import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";

import Home from "@/pages/home";
import Work from "@/pages/work";
import About from "@/pages/about";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import Contact from "@/pages/contact";
import Pricing from "@/pages/pricing";
import PricingDetail from "@/pages/pricing-detail";
import PricingShareDetail from "@/pages/pricing-share-detail";
import ProjectDetail from "@/pages/project-detail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/work/:projectId" component={ProjectDetail} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/:serviceId" component={ServiceDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/pricing/share/:linkId" component={PricingShareDetail} />
          <Route path="/pricing/:packageId" component={PricingDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <FloatingContact />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
