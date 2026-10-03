import { motion } from "framer-motion";
import Icon from "../common/Icon";
import { industryDetails } from "../../data/industries";

export default function IndustryDetailGrid() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:gap-14">
          {industryDetails.map((industry, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={industry.slug}
                id={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 rounded-3xl border border-royal-100 bg-gradient-to-br from-royal-50/50 to-white overflow-hidden"
              >
                <div
                  className={`grid lg:grid-cols-[auto,1fr] gap-8 p-7 sm:p-10 items-start ${
                    isEven ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  <div className={isEven ? "" : "lg:[direction:ltr]"}>
                    <div className="w-16 h-16 rounded-2xl bg-royal-gradient flex items-center justify-center shadow-glow mb-5">
                      <Icon name={industry.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div className="lg:w-64">
                      <div className="text-3xl font-bold font-display text-royal-600">
                        {industry.stat.value}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {industry.stat.label}
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:[direction:ltr]"}>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-7 max-w-2xl">
                      {industry.summary}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-950 uppercase tracking-wide mb-3">
                          <Icon name="AlertCircle" className="w-4 h-4 text-royal-500" />
                          Challenges
                        </h4>
                        <ul className="space-y-2.5">
                          {industry.challenges.map((c) => (
                            <li
                              key={c}
                              className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-royal-300 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-950 uppercase tracking-wide mb-3">
                          <Icon name="CheckCircle2" className="w-4 h-4 text-royal-500" />
                          Our Solutions
                        </h4>
                        <ul className="space-y-2.5">
                          {industry.solutions.map((s) => (
                            <li
                              key={s}
                              className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-royal-500 shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
