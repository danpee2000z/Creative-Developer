import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          message: validationError.toString(),
          errors: result.error.flatten().fieldErrors 
        });
      }

      const message = await storage.createContactMessage(result.data);
      
      // In a production environment, you would send an email notification here
      // For now, we just store the message and return success
      console.log(`New contact message from ${message.name} (${message.email}): ${message.subject}`);
      
      return res.status(201).json({ 
        message: "Thank you for your message! I'll get back to you soon.",
        id: message.id 
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });

  return httpServer;
}
