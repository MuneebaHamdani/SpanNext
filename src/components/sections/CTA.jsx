import { motion } from "framer-motion";
import Button from "../common/Button";
import Icon from "../common/Icon";

export default function CTA({
  title = "Ready to build something that actually fits?",
  description = "Tell us about your project and we'll get back to you with a scoped proposal within two business days.",
  primaryLabel = "Start a Project",
  secondaryLabel = "Schedule a Call",
  primaryTo = "/contact",
  secondaryTo = "/contact",
}) {
  return (
    <section className="relative py-20 sm:py-28 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-royal-500/20 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-royal-gradient mx-auto flex items-center justify-center shadow-glow-lg mb-8">
            <Icon name="Rocket" className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" icon="ArrowRight" to={primaryTo}>
              {primaryLabel}
            </Button>
            <Button variant="outline" size="lg" icon="Calendar" to={secondaryTo}>
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
