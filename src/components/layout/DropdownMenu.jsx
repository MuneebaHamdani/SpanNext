import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper, HelpCircle, Quote, Circle } from "lucide-react";

const icons = { Newspaper, HelpCircle, Quote };

export default function DropdownMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 top-full mt-3 w-56"
    >
      <div className="rounded-xl border border-slate-100 bg-white shadow-premium p-2">
        {items.map((item) => {
          const Icon = icons[item.icon] || Circle;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-royal-50 text-royal-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-royal-600"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </motion.div>
  );
}
