import { Router } from "express";
import rateLimit from "express-rate-limit";
import { submitContact } from "../controllers/contactController.js";
import { contactRules, validateContact } from "../middleware/validateContact.js";

const router = Router();

// Basic abuse protection: 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many messages sent. Please try again later." },
});

router.post("/", contactLimiter, contactRules, validateContact, submitContact);

export default router;
