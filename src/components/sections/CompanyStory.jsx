import { motion } from "framer-motion";
import Icon from "../common/Icon";
import { img } from "../../utils/image";

export default function CompanyStory() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 mb-5">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.1] mb-6">
              Built by engineers who were tired of watching projects fail
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                SpanNext started in 2013 with a simple observation: most
                enterprise software failed not because of bad technology, but
                because of bloated teams, vague scopes, and vendors who
                disappeared after the contract was signed.
              </p>
              <p>
                We set out to build something different — a studio staffed
                entirely by senior engineers, structured around outcomes
                instead of billable hours, and willing to say no to work that
                wasn't a good fit.
              </p>
              <p>
                Over a decade later, that same discipline shapes every
                engagement, from a focused MVP for an early-stage startup to
                a multi-year platform rebuild for a Fortune 500 client.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src="/images/company-story.png"
                alt="SpanNext founding team at work"
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
              className="absolute -bottom-8 -left-4 sm:left-8 glass rounded-2xl shadow-premium p-5 w-56"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-royal-gradient flex items-center justify-center">
                  <Icon name="Calendar" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-950">Since 2013</div>
                  <div className="text-xs text-slate-500">Senior engineers only</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
