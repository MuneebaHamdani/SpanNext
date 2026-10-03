import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../common/Icon";
import Button from "../common/Button";
import { contactSubjects } from "../../data/contact";

const initialForm = {
  name: "",
  email: "",
  company: "",
  subject: contactSubjects[0],
  service: "", // New service field
  message: "",
};

// Services list
const services = [
  "AI Automation",
  "AI Receptionist",
  "Appointments Scheduling",
  "Cloud Migrations",
  "DevOps",
  "DevSecOps",
  "Web Modernization",
  "AI and Machine Learning",
  "CRM Development",
  "ERP Development",
  "Custom Software Development",
  "Additional Core Services",
];

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/spannextofficial@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company,
            subject: form.subject,
            service: form.service, // Include service in submission
            message: form.message,
            _subject: `New Contact Form Submission — ${form.subject}`,
          }),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="py-20 sm:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 mb-5">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.1] mb-6">
              Let's talk about your project
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Fill out the form and a member of our team will follow up
              within one business day with next steps or a few clarifying
              questions.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { city: "New York", phone: "+1 551 366 8853" },
                { city: "Dubai", phone: "+971 58 877 2525" },
              ].map((office) => (
                <div key={office.city} className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold tracking-widest uppercase text-royal-600">
                    {office.city}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-royal-50 flex items-center justify-center shrink-0">
                      <Icon name="Mail" className="w-4 h-4 text-royal-600" />
                    </div>
                    <a
                      href="mailto:Sales@spannext.com"
                      className="text-sm text-slate-600 hover:text-royal-600 transition-colors"
                    >
                      Sales@spannext.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-royal-50 flex items-center justify-center shrink-0">
                      <Icon name="Phone" className="w-4 h-4 text-royal-600" />
                    </div>
                    <span className="text-sm text-slate-600">{office.phone}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-royal-50 flex items-center justify-center shrink-0">
                  <Icon name="Clock" className="w-4 h-4 text-royal-600" />
                </div>
                <span className="text-sm text-slate-600">
                  Mon – Fri, 9:00 AM – 6:00 PM EST
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl border border-royal-100 bg-gradient-to-br from-royal-50/50 to-white p-6 sm:p-10 shadow-premium">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center shadow-glow-lg mb-6">
                      <Icon name="CheckCircle2" className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-950 mb-3">
                      Message sent
                    </h3>
                    <p className="text-slate-600 max-w-sm mb-8">
                      Thanks for reaching out — we'll get back to you within
                      one business day.
                    </p>
                    <Button
                      variant="secondary"
                      icon="RotateCcw"
                      onClick={() => setStatus("idle")}
                      fullWidthMobile={false}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Full Name <span className="text-royal-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors ${
                            errors.name ? "border-red-400" : "border-slate-200"
                          }`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-xs text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Email Address <span className="text-royal-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors ${
                            errors.email ? "border-red-400" : "border-slate-200"
                          }`}
                          placeholder="jane@company.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-xs text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors"
                          placeholder="Company Inc."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors bg-white"
                        >
                          {contactSubjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* New Services Section - Full width dropdown */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Message <span className="text-royal-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors resize-none ${
                          errors.message ? "border-red-400" : "border-slate-200"
                        }`}
                        placeholder="Tell us a bit about your project..."
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500">
                        Something went wrong sending your message. Please try
                        again, or email us directly at
                        spannextofficial@gmail.com.
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={status === "submitting" ? undefined : "Send"}
                      fullWidthMobile={false}
                      className={`mt-2 ${
                        status === "submitting" ? "opacity-70 pointer-events-none" : ""
                      }`}
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}