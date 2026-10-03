import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { serviceImg } from "../../utils/image";

export default function ServiceShowcase({
  services,
  eyebrow = "Explore Our Capabilities",
  title = "Services, built to be explored",
  description = "Hover any service to preview it. Click to see the full breakdown — features, technologies, and real use cases.",
}) {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-20 sm:py-28 bg-royal-50/40 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.button
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              onMouseEnter={() => setActive(service.slug)}
              onMouseLeave={() => setActive(null)}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="group relative text-left rounded-3xl overflow-hidden aspect-[4/5] shadow-premium focus-visible:ring-2 focus-visible:ring-royal-500"
            >
              {/* Base image with zoom on hover */}
              <motion.img
                src={serviceImg(service, 700, 900)}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-royal-400/60 transition-all duration-500" />

              {/* Base gradient (always visible, for legibility) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Icon badge */}
              <motion.div
                className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                animate={
                  active === service.slug
                    ? { rotate: [0, -8, 8, 0], scale: 1.1 }
                    : { rotate: 0, scale: 1 }
                }
                transition={{ duration: 0.5 }}
              >
                <Icon name={service.icon} className="w-6 h-6 text-white" />
              </motion.div>

              {/* Title always visible at base */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-display font-semibold text-xl mb-1">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                  {service.shortDesc}
                </p>
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={false}
                animate={
                  active === service.slug
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-royal-900/95 via-royal-800/80 to-royal-700/20 backdrop-blur-sm"
              >
                <h3 className="text-white font-display font-semibold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-royal-100 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Explore Service
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </span>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
