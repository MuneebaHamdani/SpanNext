import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Tabs
 * ----------------------------------------------------------------------------
 * Generic reusable tab control with an animated active-pill indicator.
 * Used on Case Studies (Challenge / Solution / Results) and Blog (categories).
 *
 *   <Tabs
 *     tabs={[{ id: "all", label: "All" }, { id: "web", label: "Web" }]}
 *     active={active}
 *     onChange={setActive}
 *   />
 */
export default function Tabs({
  tabs = [],
  active,
  onChange,
  className = "",
  activeTextClassName = "text-white",
  layoutId = "tabs-active-pill",
}) {
  const [internalActive, setInternalActive] = useState(tabs[0]?.id);
  const current = active ?? internalActive;

  const handleClick = (id) => {
    setInternalActive(id);
    onChange?.(id);
  };

  return (
    <div
      role="tablist"
      className={`inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-royal-50/70 border border-royal-100 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = current === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleClick(tab.id)}
            className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-300 ${
              isActive ? activeTextClassName : "text-royal-700 hover:text-royal-900"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 bg-royal-gradient rounded-xl shadow-glow"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
