import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { allServices } from "../../data/services";

const lines = [
  {
    to: "/services/ai-machine-learning",
    category: "ai",
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    desc: "Strategy, custom models, generative AI, computer vision, and NLP built to production standards.",
    count: "17 services",
  },
  {
    to: "/services/crm-development",
    category: "crm",
    icon: "LayoutDashboard",
    title: "CRM Development",
    desc: "Custom CRM builds, Salesforce, HubSpot, Dynamics 365, and the automation that ties them together.",
    count: "14 services",
  },
  {
    to: "/services/erp-development",
    category: "erp",
    icon: "Factory",
    title: "ERP Development",
    desc: "Finance, supply chain, manufacturing, and HR — SAP, Oracle, NetSuite, and Odoo implementations.",
    count: "18 services",
  },
  {
    to: "/services/custom-software-development",
    category: "custom-software",
    icon: "Globe",
    title: "Custom Software Development",
    desc: "Web, mobile, desktop, and cloud-native applications architected for your exact workflow.",
    count: "13 services",
  },
  {
    to: "/services/additional-core-services",
    category: "core-services",
    icon: "Cloud",
    title: "Additional Core Services",
    desc: "Cloud, DevOps, security, design, QA, and staffing — the foundation everything else runs on.",
    count: "20 services",
  },
];

// Attach the matching list of services (from that category only) to each card.
const linesWithServices = lines.map((line) => ({
  ...line,
  services: allServices.filter((s) => s.category === line.category),
}));

function ServiceCard({ line, index }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.08 }}
      whileHover={{ y: -6 }}
      className={`relative lg:col-span-1 sm:col-span-1 ${open ? "z-30" : "z-0"}`}
    >
      <Link
        to={line.to}
        className="group relative flex flex-col h-full p-6 rounded-2xl border border-slate-100 hover:border-royal-300 hover:shadow-premium transition-all duration-300 bg-white overflow-hidden"
      >
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-royal-50 group-hover:scale-150 group-hover:bg-royal-100 transition-transform duration-500" />
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center mb-5 shadow-glow">
            <Icon name={line.icon} className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-display font-semibold text-lg text-slate-950 mb-2">
            {line.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            {line.desc}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen((o) => !o);
              }}
              aria-expanded={open}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 rounded-md -ml-2 px-2 py-1 text-xs font-semibold tracking-wide uppercase text-royal-500 hover:bg-royal-50 hover:text-royal-700 transition-colors"
            >
              {line.count}
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-royal-600 group-hover:gap-2 transition-all">
              <Icon name="ArrowRight" className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full mt-2 z-30"
          >
            <div className="rounded-2xl border border-slate-100 bg-white shadow-premium overflow-hidden">
              <ul className="max-h-72 overflow-y-auto p-2">
                {line.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="group/item flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] leading-snug text-slate-600 transition-colors hover:bg-royal-50 hover:text-royal-700"
                    >
                      <Icon
                        name={service.icon}
                        className="h-3.5 w-3.5 shrink-0 text-royal-400 group-hover/item:text-royal-600"
                        strokeWidth={2}
                      />
                      <span className="truncate">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-100 bg-slate-50/60 px-3 py-2">
                <Link
                  to={line.to}
                  onClick={() => setOpen(false)}
                  className="block text-center text-xs font-semibold text-royal-600 hover:text-royal-700"
                >
                  View all {line.services.length} in {line.title} →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiceLines() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse by Service Line"
          title="Five practices, one engineering team"
          description="Every service line below is delivered by the same senior engineers — pick a starting point and explore the full catalog."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {linesWithServices.map((line, i) => (
            <ServiceCard key={line.to} line={line} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
