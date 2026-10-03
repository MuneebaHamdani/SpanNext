import { motion } from "framer-motion";
import Icon from "../common/Icon";
import { img } from "../../utils/image";

const points = [
  { icon: "Target", title: "Outcome-focused delivery", desc: "Every engagement ties back to a measurable business metric." },
  { icon: "ShieldCheck", title: "Enterprise-grade security", desc: "SOC 2 aligned practices across every project we ship." },
  { icon: "Users", title: "Senior-only teams", desc: "No junior bench time — every engineer has 6+ years experience." },
  { icon: "Zap", title: "Fast, iterative delivery", desc: "Two-week sprints with working software from week one." },
];

export default function CompanyIntro() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src="/images/company-team.png"
                alt="Company Team"
                loading="lazy"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:right-8 glass rounded-2xl shadow-premium p-5 w-56"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-royal-gradient flex items-center justify-center">
                  <Icon name="Award" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-950">12+ yrs</div>
                  <div className="text-xs text-slate-500">Building enterprise software</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 mb-5">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.1] mb-6">
              An engineering studio built for enterprise complexity
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              SpanNext partners with mid-market and enterprise teams to design
              and ship AI, CRM, and product platforms. We don't hand off a deck
              and disappear — our engineers stay through implementation,
              launch, and the iteration that follows.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-3 p-4 rounded-2xl border border-slate-100 hover:border-royal-200 hover:shadow-premium transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center">
                    <Icon name={p.icon} className="w-5 h-5 text-royal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-950 text-sm">{p.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
