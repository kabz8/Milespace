import { type Project } from "@shared/schema";
import ecommerceProject from "@assets/generated_images/E-commerce_website_project_mockup_7f163293.png";
import bankingProject from "@assets/generated_images/Mobile_banking_app_mockup_b9f02438.png";
import restaurantProject from "@assets/generated_images/Restaurant_booking_web_app_50b92408.png";
import realEstateProject from "@assets/generated_images/Real_estate_platform_mockup_5ec03453.png";
import healthcareProject from "@assets/generated_images/Healthcare_portal_interface_6be89b4e.png";
import educationProject from "@assets/generated_images/Education_platform_LMS_a2ab168f.png";

export type ProjectCategory = "all" | "web" | "software" | "mobile" | "ecommerce" | "saas";

export const projectImages: Record<string, string> = {
  ecommerce: ecommerceProject,
  mobile: bankingProject,
  web: restaurantProject,
  saas: healthcareProject,
  software: educationProject,
  realestate: realEstateProject,
};

export const fallbackProjects: Project[] = [
  {
    id: "fallback-marketplace",
    title: "Marketplace Revamp",
    client: "Zuri Marketplace",
    category: "ecommerce",
    description:
      "Multi-merchant marketplace with escrow payments, vendor onboarding, and cloud-native search.",
    imageUrl: ecommerceProject,
    tags: ["Next.js", "Postgres", "Stripe"],
    featured: true,
    website: "https://example.com/marketplace",
  },
  {
    id: "fallback-mobile-wallet",
    title: "Digital Wallet Suite",
    client: "PayWave Africa",
    category: "mobile",
    description: "React Native wallet with biometric login, instant P2P transfers, and savings goals.",
    imageUrl: bankingProject,
    tags: ["React Native", "GraphQL"],
    featured: true,
    website: "https://example.com/wallet",
  },
  {
    id: "fallback-health",
    title: "Telehealth Platform",
    client: "AfyaWell Clinics",
    category: "saas",
    description:
      "HIPAA-inspired telemedicine, triage chat, and EHR integrations built for regional clinics.",
    imageUrl: healthcareProject,
    tags: ["Vue", "Supabase"],
    featured: true,
    website: "https://example.com/telehealth",
  },
  {
    id: "fallback-education",
    title: "LMS Modernization",
    client: "EduSmart",
    category: "software",
    description: "Learning platform with adaptive content, cohort reporting, and live class tooling.",
    imageUrl: educationProject,
    tags: ["React", "NestJS"],
    featured: true,
    website: "https://example.com/lms",
  },
  {
    id: "fallback-real-estate",
    title: "Property Intelligence Hub",
    client: "TerraSpace Realty",
    category: "web",
    description:
      "Investor dashboards with live valuations, portfolio reporting, and AI-assisted opportunity scouting.",
    imageUrl: realEstateProject,
    tags: ["Remix", "Supabase", "Azure"],
    featured: false,
    website: "https://example.com/realestate",
  },
];

export function getFallbackProject(projectId?: string) {
  if (!projectId) return undefined;
  return fallbackProjects.find((project) => project.id === projectId);
}

