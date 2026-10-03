import { motion } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { timeline } from "../../data/about";

export default function CompanyTimeline() {
  return (
    <section className="py-20 sm:py-28 bg-royal-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Journey"
          title="More than a decade of building"
          description="From a two-person office to a global engineering studio — the milestones that shaped how we work today."
        />

        <div className="mt-16 relative">
          <div
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-royal-200 sm:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-10 sm:gap-14">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                  className={`relative flex items-start sm:items-center gap-6 sm:gap-0 pl-16 sm:pl-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div
                    className="absolute left-6 sm:left-1/2 top-0 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-10 h-10 rounded-full bg-royal-gradient flex items-center justify-center shadow-glow z-10"
                    aria-hidden="true"
                  >
                    <Icon name={item.icon} className="w-5 h-5 text-white" />
                  </div>

                  <div className={`sm:w-1/2 ${isEven ? "sm:pr-14 sm:text-right" : "sm:pl-14"}`}>
                    <div className="p-6 rounded-2xl bg-white border border-royal-100 shadow-sm hover:shadow-premium transition-shadow duration-300">
                      <span className="inline-block text-sm font-bold text-royal-600 font-display mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-display font-semibold text-lg text-slate-950 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
