import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { faqs } from "../../data/services";

export default function FAQAccordion({ items = faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-royal-50/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Can't find what you're looking for? Reach out and we'll get back to you within one business day."
        />

        <div className="mt-14 flex flex-col gap-4">
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className={`rounded-2xl border bg-white overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-royal-300 shadow-premium" : "border-slate-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-950 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isOpen ? "bg-royal-gradient text-white" : "bg-royal-50 text-royal-600"
                    }`}
                  >
                    <Icon name="Plus" className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
