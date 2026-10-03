import { motion } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { coreValues } from "../../data/about";

export default function CoreValues() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="The principles behind every engagement"
          description="These aren't posters on a wall — they're how we scope projects, staff teams, and decide what to say no to."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className="relative p-7 rounded-2xl bg-gradient-to-br from-royal-50/70 to-white border border-royal-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-royal-100/60 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center mb-5 shadow-glow">
                  <Icon name={v.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-950 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
