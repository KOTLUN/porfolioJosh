import ContactMessage from "../models/ContactMessage.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendContactEmail } from "../utils/mailer.js";

// POST /api/contact
export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Persist if a database is configured
  try {
    await ContactMessage.create({ name, email, subject, message });
  } catch (err) {
    // Don't fail the whole request just because persistence isn't configured
    console.warn("Could not save contact message:", err.message);
  }

  // Forward via email if SMTP credentials are configured
  try {
    await sendContactEmail({ name, email, subject, message });
  } catch (err) {
    console.warn("Could not send contact email:", err.message);
  }

  res.status(201).json({ message: "Message sent successfully. I'll get back to you soon." });
});
