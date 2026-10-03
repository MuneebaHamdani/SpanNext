import { motion } from "framer-motion";

/**
 * Card
 * ----------------------------------------------------------------------------
 * Generic, reusable content card used across Portfolio, Blog, Careers, and
 * Case Studies. Keeps consistent border radius, shadow, and hover-lift
 * treatment so every card on the site feels like part of one system.
 *
 *   <Card hover className="p-6">...</Card>
 *   <Card as="article" padding="none">...</Card>
 */
export default function Card({
  children,
  className = "",
  padding = "md",
  hover = true,
  as = "div",
  ...rest
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6 sm:p-7",
    lg: "p-8 sm:p-10",
  };

  const Tag = motion[as] || motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl bg-white border border-slate-100 shadow-sm ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium hover:border-royal-200"
          : ""
      } ${paddings[padding]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
