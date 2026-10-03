import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { Suspense, lazy, useRef } from "react";
import Icon from "../common/Icon";
import Button from "../common/Button";
import GradientBlobs from "../common/GradientBlobs";

const HeroAbstractVisual = lazy(() => import("../common/HeroAbstractVisual"));

export default function Hero({
  eyebrow,
  title,
  highlight,
  description,
  stats,
  primaryCta = { label: "Start a Project", icon: "ArrowRight", to: "/contact" },
  secondaryCta = { label: "View Case Studies", icon: "PlayCircle", to: "/case-studies" },
  floatingIcons = ["Sparkles", "BrainCircuit", "Cloud", "ScanEye"],
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-slate-950 pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <GradientBlobs variant="dark" />
      <Suspense fallback={null}>
        <HeroAbstractVisual className="opacity-90" />
      </Suspense>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        {floatingIcons.map((name, i) => (
          <motion.div
            key={name}
            className="absolute text-royal-400/30"
            style={{
              top: `${15 + i * 18}%`,
              left: i % 2 === 0 ? `${8 + i * 4}%` : undefined,
              right: i % 2 !== 0 ? `${8 + i * 3}%` : undefined,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            <Icon name={name} className="w-10 h-10 lg:w-14 lg:h-14" strokeWidth={1.2} />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/10 text-royal-200 border border-white/20 backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-royal-400 animate-pulse" />
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
        >
          {title}{" "}
          {highlight && (
            <span className="text-gradient bg-gradient-to-r from-royal-400 via-royal-300 to-white">
              {highlight}
            </span>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" icon={primaryCta.icon} to={primaryCta.to}>
            {primaryCta.label}
          </Button>
          <Button variant="outline" size="lg" icon={secondaryCta.icon} to={secondaryCta.to}>
            {secondaryCta.label}
          </Button>
        </motion.div>

        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
