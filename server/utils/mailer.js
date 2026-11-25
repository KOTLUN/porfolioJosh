import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (!process.env.EMAIL_HOST) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
  }
  return transporter;
}

export async function sendContactEmail({ name, email, subject, message }) {
  const t = getTransporter();
  if (!t || !process.env.EMAIL_TO) return; // Email not configured — silently skip

  await t.sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
}
