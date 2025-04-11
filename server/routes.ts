import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp
      const contact = {
        ...contactData,
        createdAt: new Date().toISOString(),
      };
      
      await storage.insertContact(contact);
      
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });

  // Serve resume download
  app.get("/api/resume", (req, res) => {
    const resumePath = "./attached_assets/shubhResume.pdf";
    res.download(resumePath, "Shubham_Chhatre_Resume.pdf", (err) => {
      if (err) {
        console.error("Resume download error:", err);
        res.status(500).json({ message: "Failed to download resume. Please try again later." });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
