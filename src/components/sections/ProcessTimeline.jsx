import { motion } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { processSteps } from "../../data/services";

export default function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-28 bg-royal-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for predictable delivery"
          description="Six stages, repeated on every engagement — so you always know what's next and why."
        />

        <div className="mt-16 relative">
          {/* center line - vertical on mobile, horizontal concept on desktop via alternating cards */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-royal-200 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10 sm:gap-14">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-5 sm:gap-0 sm:w-1/2 ${
                    isEven ? "sm:pr-12 sm:ml-0" : "sm:pl-12 sm:ml-auto sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-6 sm:left-auto sm:top-1 shrink-0 w-4 h-4 rounded-full bg-royal-gradient shadow-glow ring-4 ring-white -translate-x-1/2 sm:translate-x-0"
                    style={isEven ? { right: "-8px" } : { left: "-8px" }}
                  />
                  <div className="pl-12 sm:pl-0 w-full">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-9 h-9 rounded-lg bg-white shadow-sm border border-royal-100 flex items-center justify-center">
                        <Icon name={step.icon} className="w-4 h-4 text-royal-600" />
                      </span>
                      <span className="text-xs font-bold tracking-widest uppercase text-royal-500">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-slate-950 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-sm sm:inline-block">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
