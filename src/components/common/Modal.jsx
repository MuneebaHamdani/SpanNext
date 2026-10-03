import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

/**
 * Modal
 * ----------------------------------------------------------------------------
 * Reusable, accessible modal used for project previews (Portfolio), article
 * previews (Blog), and video testimonials (Testimonials).
 *
 *   <Modal open={open} onClose={() => setOpen(false)} title="...">
 *     ...content...
 *   </Modal>
 */
export default function Modal({ open, onClose, title, children, size = "md" }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title || "Dialog"}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full ${sizes[size]} max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-premium-dark`}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 sm:px-8 py-5 border-b border-slate-100 bg-white/90 backdrop-blur-md rounded-t-3xl">
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 truncate">
                {title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-royal-50 text-royal-700 hover:bg-royal-100 transition-colors"
              >
                <Icon name="X" className="w-4 h-4" />
              </button>
            </div>
            <div className="px-6 sm:px-8 py-6 sm:py-8">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
