import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignment} gap-4 max-w-3xl ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full w-fit ${
            light
              ? "bg-white/10 text-royal-200 border border-white/20"
              : "bg-royal-100 text-royal-700 border border-royal-200"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-royal-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
