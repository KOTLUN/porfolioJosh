import { useState } from "react";
import { Mail, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { PROFILE } from "../data/profile.js";
import { sendContactMessage } from "../services/api.js";
import SectionHeader from "./SectionHeader.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus("sending");
    setServerError("");
    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setServerError(err.message);
    }
  };

  const field = (name, label, type = "text") => (
    <div>
      <label htmlFor={name} className="block text-xs font-medium mb-1.5 text-muted">{label}</label>
      {type === "textarea" ? (
        <textarea id={name} rows={5} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })} />
      ) : (
        <input id={name} type={type} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })} />
      )}
      {errors[name] && (
        <p className="text-xs mt-1.5 flex items-center gap-1 text-red-400">
          <AlertCircle size={12} /> {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-14">
        <div>
          <SectionHeader eyebrow="Contact" title="Let's build something" subtitle="Open to full-time roles, freelance work, and interesting collaborations." />
          <div className="space-y-4">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm">
              <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center shrink-0">
                <Mail size={15} />
              </span>
              {PROFILE.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center shrink-0">
                <MapPin size={15} />
              </span>
              {PROFILE.location}
            </div>
          </div>
          <SocialLinks className="mt-7" />
        </div>

        <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            {field("name", "Name")}
            {field("email", "Email", "email")}
          </div>
          {field("subject", "Subject")}
          {field("message", "Message", "textarea")}
          <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full sm:w-auto justify-center">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-sm flex items-center gap-2 text-green-400">
              <CheckCircle2 size={15} /> Message sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm flex items-center gap-2 text-red-400">
              <AlertCircle size={15} /> {serverError || "Something went wrong. Please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
