import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";

export default function ServicesGrid({
  services,
  eyebrow = "What We Build",
  title = "Full-spectrum services, one team",
  description = "From strategy to production support, every capability below is delivered by the same senior engineering team.",
}) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 9) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-slate-100 p-6 sm:p-7 hover:border-royal-200 hover:shadow-premium transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-royal-50 group-hover:bg-royal-gradient flex items-center justify-center transition-colors duration-300 mb-5">
                <Icon
                  name={service.icon}
                  className="w-6 h-6 text-royal-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-slate-950 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {service.shortDesc}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 group-hover:gap-2.5 transition-all"
              >
                Learn more
                <Icon name="ArrowRight" className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
