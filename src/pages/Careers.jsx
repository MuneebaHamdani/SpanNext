import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import Card from "../components/common/Card";
import Tabs from "../components/common/Tabs";
import SearchBar from "../components/common/SearchBar";
import Modal from "../components/common/Modal";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import { useToast } from "../components/common/Toast";
import CTA from "../components/sections/CTA";
import { careerBenefits, openPositions, hiringProcess } from "../data/careers";

const departmentTabs = [
  { id: "all", label: "All Departments" },
  { id: "Engineering", label: "Engineering" },
  { id: "AI & Data", label: "AI & Data" },
  { id: "Design", label: "Design" },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });

function ApplyForm({ position, onSubmitted }) {
  const [form, setForm] = useState({ name: "", email: "", linkedin: "", note: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmitted(form);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          error={errors.name}
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@email.com"
          error={errors.email}
          required
        />
      </div>
      <Input
        label="LinkedIn or Portfolio URL"
        name="linkedin"
        value={form.linkedin}
        onChange={handleChange}
        placeholder="https://linkedin.com/in/janedoe"
      />
      <Input
        as="textarea"
        label="Why this role?"
        name="note"
        rows={4}
        value={form.note}
        onChange={handleChange}
        placeholder="Tell us briefly why this role is a fit..."
      />
      <Button
        type="submit"
        icon={submitting ? undefined : "Send"}
        fullWidthMobile={false}
        className={submitting ? "opacity-70 pointer-events-none" : ""}
      >
        {submitting ? "Submitting..." : `Apply for ${position.title}`}
      </Button>
      <p className="text-xs text-slate-400">
        This form is a frontend demo and does not send data to a server.
      </p>
    </form>
  );
}

export default function Careers() {
  const [department, setDepartment] = useState("all");
  const [query, setQuery] = useState("");
  const [applyingTo, setApplyingTo] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    document.title = "Careers — SpanNext";
  }, []);

  const filteredPositions = useMemo(() => {
    return openPositions.filter((p) => {
      const matchesDept = department === "all" || p.department === department;
      const matchesQuery =
        !query.trim() || p.title.toLowerCase().includes(query.toLowerCase());
      return matchesDept && matchesQuery;
    });
  }, [department, query]);

  const closeModal = () => {
    setApplyingTo(null);
    setSubmitted(false);
  };

  const handleSubmitted = () => {
    setSubmitted(true);
    showToast({
      title: "Application received",
      description: "We'll follow up by email within three business days.",
      variant: "success",
    });
  };

  return (
    <>
      <Hero
        eyebrow="Careers"
        title="Build enterprise software"
        highlight="with senior engineers who stay"
        description="We're a remote-first team of engineers, designers, and strategists who work directly with clients — no bench, no hand-offs, no busywork."
        floatingIcons={["Briefcase", "Users", "Globe2", "Rocket"]}
        primaryCta={{ label: "View Open Roles", icon: "ArrowRight", to: "#open-positions" }}
        secondaryCta={{ label: "Our Hiring Process", icon: "ListChecks", to: "#hiring-process" }}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Careers" }]} />
      </div>

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why SpanNext"
            title="Benefits that support how you actually work"
            description="We built our benefits around the realities of remote, senior-level engineering work — not a generic perks checklist."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {careerBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-premium hover:-translate-y-1 hover:border-royal-200 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-4">
                  <Icon name={b.icon} className="w-5 h-5 text-royal-600" />
                </div>
                <h3 className="font-semibold text-slate-950 mb-1.5">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 sm:py-24 bg-royal-50/40 scroll-mt-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open Positions"
            title="Find your next role"
            description="Every role is remote-first, works directly with clients, and includes full benefits from day one."
          />

          <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <Tabs tabs={departmentTabs} active={department} onChange={setDepartment} />
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search roles..."
              className="w-full lg:w-72"
            />
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {filteredPositions.map((position) => (
              <Card
                key={position.id}
                padding="md"
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold text-slate-950">{position.title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-royal-100 text-royal-700">
                      {position.level}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Building2" className="w-3.5 h-3.5" /> {position.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="MapPin" className="w-3.5 h-3.5" /> {position.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Clock" className="w-3.5 h-3.5" /> {position.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Calendar" className="w-3.5 h-3.5" /> Posted{" "}
                      {formatDate(position.posted)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {position.summary}
                  </p>
                </div>
                <Button
                  fullWidthMobile={false}
                  icon="ArrowRight"
                  onClick={() => setApplyingTo(position)}
                  className="shrink-0"
                >
                  Apply Now
                </Button>
              </Card>
            ))}

            {filteredPositions.length === 0 && (
              <p className="text-center text-slate-500 py-10">
                No open roles match that search right now. Check back soon or reach out directly.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section id="hiring-process" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hiring Process"
            title="What to expect, step by step"
            description="Transparent, fast, and focused on real conversations rather than trick questions."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4">
            {hiringProcess.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-royal-gradient flex items-center justify-center shadow-glow mb-4">
                  <Icon name={step.icon} className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-royal-500 tracking-widest mb-1.5">
                  STEP {step.step}
                </span>
                <h3 className="font-semibold text-slate-950 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                {i < hiringProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-royal-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Don't see the right role listed?"
        description="We're always open to meeting strong engineers and designers. Send us a note and we'll keep you in mind."
        primaryLabel="Get In Touch"
      />

      <Modal
        open={!!applyingTo}
        onClose={closeModal}
        title={submitted ? "Application Sent" : applyingTo?.title}
        size="md"
      >
        {applyingTo && !submitted && (
          <ApplyForm position={applyingTo} onSubmitted={handleSubmitted} />
        )}
        {applyingTo && submitted && (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center shadow-glow-lg mb-6">
              <Icon name="CheckCircle2" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-950 mb-2">
              Thanks for applying
            </h3>
            <p className="text-slate-600 max-w-sm mb-8">
              We've received your application for {applyingTo.title}. Our talent team
              reviews every application and follows up within three business days.
            </p>
            <Button variant="secondary" fullWidthMobile={false} onClick={closeModal}>
              Close
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}
