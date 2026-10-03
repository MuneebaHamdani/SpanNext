import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import { leadership } from "../../data/about";

export default function Leadership() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="The team steering the ship"
          description="Senior operators and engineers who've led delivery at scale before joining SpanNext."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className="group relative rounded-2xl border border-slate-100 hover:border-royal-200 hover:shadow-premium transition-all duration-300 overflow-hidden bg-white"
            >
              <div className="p-6 pt-8">
                <div className="w-11 h-11 rounded-full bg-royal-50 flex items-center justify-center mb-4 group-hover:bg-royal-100 transition-colors">
                  <FaLinkedinIn className="w-4 h-4 text-royal-600" />
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                  className="inline-flex items-center gap-1.5 font-display font-semibold text-lg text-slate-950 hover:text-royal-600 transition-colors"
                >
                  {person.name}
                </a>
                <p className="text-sm font-medium text-royal-600 mb-3">{person.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
