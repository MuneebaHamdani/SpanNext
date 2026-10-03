import { motion } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { industries } from "../../data/services";

export default function IndustriesServed() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-30" aria-hidden="true" />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Industries Served"
          title="Domain expertise that matters"
          description="We've shipped production systems across regulated and high-stakes industries — not just generic SaaS."
          light
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -4, borderColor: "rgba(96,165,250,0.5)" }}
              className="flex flex-col items-center justify-center gap-3 text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-royal-500/20 flex items-center justify-center">
                <Icon name={industry.icon} className="w-6 h-6 text-royal-300" />
              </div>
              <span className="text-sm font-medium text-slate-200">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
