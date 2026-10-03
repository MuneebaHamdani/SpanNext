import { motion } from "framer-motion";
import CountUp from "../common/CountUp";
import { stats } from "../../data/services";

export default function Statistics() {
  return (
    <section className="relative py-20 sm:py-24 bg-royal-gradient overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl sm:text-5xl font-bold font-display">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm sm:text-base text-royal-100 mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
