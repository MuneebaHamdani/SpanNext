import { motion } from "framer-motion";
import Icon from "../common/Icon";
import { industryDetails } from "../../data/industries";

export default function IndustryQuickNav() {
  return (
    <section className="py-6 bg-white/90 border-y border-royal-100 sticky top-16 sm:top-20 z-30 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {industryDetails.map((industry, i) => (
            <motion.a
              key={industry.slug}
              href={`#${industry.slug}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-royal-200 text-sm font-medium text-slate-700 hover:bg-royal-500 hover:text-white hover:border-royal-500 transition-colors duration-200"
            >
              <Icon name={industry.icon} className="w-4 h-4" />
              {industry.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
