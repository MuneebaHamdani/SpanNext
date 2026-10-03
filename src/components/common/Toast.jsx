import { createContext, useCallback, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

/**
 * Toast
 * ----------------------------------------------------------------------------
 * Lightweight, reusable toast notification system.
 *
 * Wrap the app once:
 *   <ToastProvider><App /></ToastProvider>
 *
 * Use anywhere:
 *   const { showToast } = useToast();
 *   showToast({ title: "Application sent", description: "...", variant: "success" });
 */
const ToastContext = createContext(null);

const variantMeta = {
  success: { icon: "CheckCircle2", classes: "bg-royal-gradient text-white" },
  error: { icon: "AlertCircle", classes: "bg-slate-950 text-white" },
  info: { icon: "Info", classes: "bg-white text-slate-950 border border-royal-100" },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback(({ title, description, variant = "info", duration = 4000 }) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, title, description, variant }]);
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, duration);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((t) => t.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      <div
        className="fixed bottom-5 right-5 z-[200] flex flex-col gap-3 w-[calc(100%-2.5rem)] sm:w-auto max-w-sm"
        aria-live="polite"
      >
        <AnimatePresence>
          {toasts.map((toast) => {
            const meta = variantMeta[toast.variant] || variantMeta.info;
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-2xl shadow-premium-dark px-5 py-4 flex items-start gap-3 ${meta.classes}`}
                role="status"
              >
                <Icon name={meta.icon} className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  {toast.title && (
                    <p className="text-sm font-semibold leading-snug">{toast.title}</p>
                  )}
                  {toast.description && (
                    <p className="text-xs opacity-80 mt-0.5 leading-snug">
                      {toast.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => dismissToast(toast.id)}
                  aria-label="Dismiss notification"
                  className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Icon name="X" className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}
