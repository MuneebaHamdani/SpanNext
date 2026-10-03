import { motion } from "framer-motion";

/**
 * Loader
 * ----------------------------------------------------------------------------
 * Reusable loading indicator. `variant="spinner"` for inline/button loading
 * states, `variant="skeleton"` for content placeholders (e.g. while
 * portfolio/blog data is "loading" during category filtering).
 *
 *   <Loader />
 *   <Loader variant="skeleton" className="h-48 rounded-2xl" />
 */
export default function Loader({ variant = "spinner", size = "md", className = "" }) {
  if (variant === "skeleton") {
    return (
      <div
        className={`relative overflow-hidden rounded-xl bg-royal-50 ${className}`}
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.12), transparent)",
          }}
          animate={{ translateX: ["-100%", "100%"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-[3px]",
  };

  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block rounded-full border-royal-200 border-t-royal-600 animate-spin ${sizes[size]} ${className}`}
    />
  );
}
