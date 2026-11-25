import { body, validationResult } from "express-validator";

export const contactRules = [
  body("name").trim().notEmpty().withMessage("Name is required.").isLength({ max: 100 }),
  body("email").trim().notEmpty().withMessage("Email is required.").isEmail().withMessage("Enter a valid email address.").normalizeEmail(),
  body("subject").trim().notEmpty().withMessage("Subject is required.").isLength({ max: 150 }),
  body("message").trim().notEmpty().withMessage("Message is required.").isLength({ min: 10, max: 2000 }).withMessage("Message should be between 10 and 2000 characters."),
];

export function validateContact(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Please check the highlighted fields.", errors: errors.array() });
  }
  next();
}
