import type { Express } from "express";
import { storage } from "./storage";
import {
  contactFormSchema,
  createShareableLinkSchema,
} from "@shared/schema";
import { z } from "zod";

export function registerRoutes(app: Express): void {
  // Projects API
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const project = await storage.getProjectById(id);
      
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      console.error("Error fetching project:", error);
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  // Contact Form API
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        submissionId: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: "Validation failed",
          details: error.errors,
        });
      }
      
      console.error("Error submitting contact form:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  // Shareable Pricing Links API
  app.post("/api/pricing/share", async (req, res) => {
    try {
      const validatedData = createShareableLinkSchema.parse(req.body);
      const link = await storage.createShareableLink(validatedData);
      
      const shareUrl = `${req.protocol}://${req.get("host")}/pricing/share/${link.id}`;
      
      res.status(201).json({
        success: true,
        link: {
          id: link.id,
          packageId: link.packageId,
          url: shareUrl,
          createdAt: link.createdAt,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: "Validation failed",
          details: error.errors,
        });
      }
      
      console.error("Error creating shareable link:", error);
      res.status(500).json({ error: "Failed to create shareable link" });
    }
  });

  app.get("/api/pricing/share/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const link = await storage.getShareableLink(id);
      
      if (!link) {
        return res.status(404).json({ error: "Shareable link not found" });
      }
      
      await storage.incrementLinkView(id);
      
      res.json(link);
    } catch (error) {
      console.error("Error fetching shareable link:", error);
      res.status(500).json({ error: "Failed to fetch shareable link" });
    }
  });
}
