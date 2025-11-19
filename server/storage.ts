import {
  type Project,
  type InsertProject,
  type ContactSubmission,
  type ContactForm,
  type ShareablePricingLink,
  type CreateShareableLink,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Contact
  createContactSubmission(contact: ContactForm): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Shareable Pricing Links
  createShareableLink(data: CreateShareableLink): Promise<ShareablePricingLink>;
  getShareableLink(id: string): Promise<ShareablePricingLink | undefined>;
  incrementLinkView(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private shareableLinks: Map<string, ShareablePricingLink>;

  constructor() {
    this.projects = new Map();
    this.contactSubmissions = new Map();
    this.shareableLinks = new Map();
    
    this.seedProjects();
  }

  private seedProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "E-Commerce Platform",
        client: "RetailCo Global",
        category: "ecommerce",
        description: "Modern e-commerce solution with seamless checkout, inventory management, and payment integration for a leading international retail brand.",
        imageUrl: "/assets/ecommerce.png",
        tags: ["React", "Node.js", "Stripe", "MongoDB"],
        featured: true,
      },
      {
        title: "Mobile Banking Application",
        client: "FinanceHub Africa",
        category: "mobile",
        description: "Secure mobile banking platform with real-time transactions, account management, and advanced security features.",
        imageUrl: "/assets/banking.png",
        tags: ["React Native", "Firebase", "Security"],
        featured: true,
      },
      {
        title: "Restaurant Booking System",
        client: "DineEasy Group",
        category: "web",
        description: "Streamlined reservation system with table management, menu integration, and customer analytics.",
        imageUrl: "/assets/restaurant.png",
        tags: ["Vue.js", "Express", "PostgreSQL"],
        featured: true,
      },
    ];

    sampleProjects.forEach((project) => this.createProject(project));
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async createContactSubmission(contact: ContactForm): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...contact,
      id,
      submittedAt: new Date().toISOString(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createShareableLink(data: CreateShareableLink): Promise<ShareablePricingLink> {
    const id = randomUUID().substring(0, 8);
    const link: ShareablePricingLink = {
      id,
      packageId: data.packageId,
      createdAt: new Date().toISOString(),
      viewCount: 0,
    };
    this.shareableLinks.set(id, link);
    return link;
  }

  async getShareableLink(id: string): Promise<ShareablePricingLink | undefined> {
    return this.shareableLinks.get(id);
  }

  async incrementLinkView(id: string): Promise<void> {
    const link = this.shareableLinks.get(id);
    if (link) {
      link.viewCount++;
      this.shareableLinks.set(id, link);
    }
  }
}

export const storage = new MemStorage();
