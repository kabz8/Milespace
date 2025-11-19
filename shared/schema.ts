import { z } from "zod";

// Projects Schema
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  client: z.string(),
  category: z.enum(["web", "software", "mobile", "ecommerce", "saas"]),
  description: z.string(),
  imageUrl: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean(),
});

export const insertProjectSchema = projectSchema.omit({ id: true });

export type Project = z.infer<typeof projectSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Pricing Packages Schema
export const pricingPackageSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.string(), // "Free", "$2,500", "Custom Quote"
  features: z.array(z.string()),
  featured: z.boolean(),
  category: z.enum(["consultation", "website", "software", "additional"]),
});

export type PricingPackage = z.infer<typeof pricingPackageSchema>;

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceInterest: z.enum(["consultation", "website", "software", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const contactSubmissionSchema = contactFormSchema.extend({
  id: z.string(),
  submittedAt: z.string(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

// Shareable Pricing Link Schema
export const shareablePricingLinkSchema = z.object({
  id: z.string(),
  packageId: z.string(),
  createdAt: z.string(),
  viewCount: z.number(),
});

export const createShareableLinkSchema = z.object({
  packageId: z.string(),
});

export type ShareablePricingLink = z.infer<typeof shareablePricingLinkSchema>;
export type CreateShareableLink = z.infer<typeof createShareableLinkSchema>;
