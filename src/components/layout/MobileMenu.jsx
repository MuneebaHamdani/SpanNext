import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { primaryNav, ctaNav, accountingCtaNav } from "../../data/navigation";

export default function MobileMenu({ onNavigate }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (label) =>
    setOpenSection((prev) => (prev === label ? null : label));

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
    >
      <nav className="max-h-[75vh] overflow-y-auto px-4 py-4 space-y-1">
        {primaryNav.map((item) => {
          const subItems = item.megaMenu || item.dropdown;
          const isCaseStudies = item.label === "Case Studies";

          if (subItems) {
            const isOpen = openSection === item.label;
            return (
              <div key={item.label} className="rounded-lg">
                <button
                  onClick={() => toggleSection(item.label)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 leading-none text-slate-700 hover:bg-slate-50 ${
                    isCaseStudies
                      ? "text-base font-medium tracking-tight"
                      : "text-sm font-medium tracking-normal"
                  }`}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {subItems.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={onNavigate}
                          className={({ isActive }) =>
                            `block rounded-lg px-3 py-2 text-sm ${
                              isActive
                                ? "text-royal-600 bg-royal-50 font-medium"
                                : "text-slate-500 hover:bg-slate-50"
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              end={item.path === "/"}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 leading-none ${
                  isCaseStudies
                    ? "text-base font-medium tracking-tight"
                    : "text-sm font-medium tracking-normal"
                } ${
                  isActive
                    ? "text-royal-600 bg-royal-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          );
        })}

        <NavLink
          to={accountingCtaNav.path}
          onClick={onNavigate}
          className="mt-3 block rounded-lg bg-royal-gradient px-3 py-3 text-center text-base font-semibold leading-none tracking-tight text-white shadow-glow"
        >
          {accountingCtaNav.label}
        </NavLink>

        <NavLink
          to={ctaNav.path}
          onClick={onNavigate}
          className="mt-3 block rounded-lg bg-royal-gradient px-3 py-3 text-center text-base font-semibold leading-none tracking-tight text-white shadow-glow"
        >
          {ctaNav.label}
        </NavLink>
      </nav>
    </motion.div>
  );
}
