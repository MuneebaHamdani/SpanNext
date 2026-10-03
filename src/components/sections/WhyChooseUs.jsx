import { motion } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";

const reasons = [
  { icon: "Gauge", title: "Speed without shortcuts", desc: "Two-week sprints and continuous delivery, without cutting corners on code quality." },
  { icon: "ShieldCheck", title: "Security by default", desc: "Encryption, access control, and audit trails built in from the first commit." },
  { icon: "Users2", title: "Senior engineers only", desc: "Every project staffed by engineers with 6+ years of production experience." },
  { icon: "LineChart", title: "Metrics-driven delivery", desc: "We track outcomes, not just tickets closed — and report on both." },
  { icon: "Infinity", title: "Built to scale", desc: "Architecture reviewed for 10x growth, not just today's traffic." },
  { icon: "HeartHandshake", title: "Long-term partnership", desc: "Most clients stay with us well past the first launch." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Enterprise delivery, without the enterprise bloat"
          description="We keep teams lean and senior so decisions move fast without sacrificing rigor."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className="relative p-7 rounded-2xl bg-gradient-to-br from-royal-50/70 to-white border border-royal-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-royal-100/60 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center mb-5 shadow-glow">
                  <Icon name={r.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-950 mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
