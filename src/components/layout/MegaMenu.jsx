import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Users,
  Factory,
  Code2,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

const icons = {
  BrainCircuit,
  Users,
  Factory,
  Code2,
  LayoutGrid,
};

export default function MegaMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[92vw] max-w-3xl"
    >
      <div className="rounded-2xl border border-slate-100 bg-white shadow-premium overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-3">
          {items.map((item) => {
            const Icon = icons[item.icon] || Code2;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-start gap-3 rounded-xl p-3 transition-colors ${
                    isActive
                      ? "bg-royal-50"
                      : "hover:bg-slate-50"
                  }`
                }
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-royal-gradient text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1 text-sm font-semibold text-slate-950">
                    {item.label}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-royal-600" />
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500 leading-snug">
                    {item.desc}
                  </span>
                </span>
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-5 py-3">
          <span className="text-xs text-slate-500">
            Explore every service we offer
          </span>
          <NavLink
            to="/services"
            className="text-xs font-semibold text-royal-600 hover:text-royal-700 inline-flex items-center gap-1"
          >
            View all services <ArrowRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}
