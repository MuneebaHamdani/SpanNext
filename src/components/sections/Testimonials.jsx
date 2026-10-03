import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/services";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by teams who can't afford to guess"
          description="A few words from the operators and technical leaders we've partnered with."
        />

        <div className="relative mt-14">
          <div className="relative rounded-3xl bg-gradient-to-br from-royal-50 to-white border border-royal-100 shadow-premium p-8 sm:p-14 overflow-hidden">
            <Icon
              name="Quote"
              className="absolute top-6 right-8 w-16 h-16 text-royal-100"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://picsum.photos/seed/${t.avatarSeed}/80/80`}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div>
                    <div className="font-semibold text-slate-950">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-royal-50 hover:border-royal-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" className="w-5 h-5 text-slate-600" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-royal-600" : "w-2 bg-royal-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-royal-50 hover:border-royal-300 transition-colors"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
