import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

/**
 * Accordion
 * ----------------------------------------------------------------------------
 * Generic reusable accordion, independent of the FAQ-specific content used
 * in components/sections/FAQAccordion.jsx. Accepts any list of
 * { question, answer } style items and an optional icon per item.
 *
 *   <Accordion items={[{ id: "1", question: "...", answer: "..." }]} />
 */
export default function Accordion({ items = [], defaultOpenId = null, className = "" }) {
  const [openId, setOpenId] = useState(defaultOpenId);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            layout
            className={`rounded-2xl border bg-white overflow-hidden transition-colors duration-300 ${
              isOpen ? "border-royal-300 shadow-premium" : "border-slate-100"
            }`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                {item.icon && (
                  <span className="shrink-0 w-9 h-9 rounded-xl bg-royal-50 flex items-center justify-center">
                    <Icon name={item.icon} className="w-4 h-4 text-royal-600" />
                  </span>
                )}
                <span className="font-semibold text-slate-950 text-sm sm:text-base">
                  {item.question}
                </span>
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
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
