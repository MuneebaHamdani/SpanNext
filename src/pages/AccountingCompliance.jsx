import { useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../components/common/Icon";
import Button from "../components/common/Button";
import GradientBlobs from "../components/common/GradientBlobs";
import {
  accountingServices,
  whatsappLink,
} from "../data/accountingCompliance";

export default function AccountingCompliance() {
  useEffect(() => {
    document.title = "Accounting & Compliance — SpanNext";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
        <GradientBlobs variant="dark" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/10 text-royal-200 border border-white/20 backdrop-blur-md mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-royal-400 animate-pulse" />
            Accounting & Compliance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto"
          >
            Finance, Accounting & Tax Compliance for{" "}
            <span className="text-gradient bg-gradient-to-r from-royal-400 via-royal-300 to-white">
              Dubai and Saudi SMEs
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3"
          >
            {accountingServices.map((service, i) => (
              <span key={service.label} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
                  <Icon name={service.icon} className="w-4 h-4 text-royal-300" />
                  {service.label}
                </span>
                {i < accountingServices.length - 1 && (
                  <span className="text-slate-500" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15]"
          >
            Know where your business stands financially.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            We help SMEs keep their books clean and stay on top of VAT and
            Corporate Tax without hiring a full-time accountant.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-royal-gradient mx-auto flex items-center justify-center shadow-glow mb-8">
              <Icon name="ClipboardCheck" className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.1] mb-10">
              Free 15-minute Accounting, Tax & Books Health Check
            </h2>
            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon="MessageCircle"
            >
              WhatsApp Us
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
