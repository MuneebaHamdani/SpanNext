import { motion } from "framer-motion";
import Icon from "../common/Icon";
import { missionVision } from "../../data/about";

export default function MissionVision() {
  const cards = [missionVision.mission, missionVision.vision];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-30" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-royal-gradient flex items-center justify-center mb-6 shadow-glow">
                <Icon name={c.icon} className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                {c.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
