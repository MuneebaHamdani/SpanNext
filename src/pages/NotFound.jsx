import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import GradientBlobs from "../components/common/GradientBlobs";

const helpfulLinks = [
  { label: "Home", to: "/", icon: "Home" },
  { label: "Services", to: "/services", icon: "Layers" },
  { label: "Portfolio", to: "/portfolio", icon: "LayoutGrid" },
  { label: "Contact Us", to: "/contact", icon: "Mail" },
];

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Page Not Found — SpanNext";
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center py-20">
      <GradientBlobs />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative inline-flex items-center justify-center mb-8">
            <span className="text-[7rem] sm:text-[9rem] font-extrabold font-display leading-none bg-royal-gradient bg-clip-text text-transparent">
              404
            </span>
            <motion.span
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-6 sm:-right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-premium flex items-center justify-center"
            >
              <Icon name="SearchX" className="w-6 h-6 sm:w-8 sm:h-8 text-royal-500" />
            </motion.span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 mb-3">
            This page took a wrong turn
          </h1>
          <p className="text-slate-600 max-w-md mx-auto mb-10 leading-relaxed">
            The page you're looking for doesn't exist, may have moved, or the
            link might be out of date. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Button to="/" icon="Home" fullWidthMobile={false}>
              Back to Home
            </Button>
            <Button variant="outline" to="/contact" icon="MessageCircle" fullWidthMobile={false}>
              Contact Support
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto">
            {helpfulLinks.map((link) => (
              <motion.button
                key={link.to}
                whileHover={{ y: -3 }}
                onClick={() => navigate(link.to)}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-premium hover:border-royal-200 transition-all duration-300 py-5 px-3"
              >
                <span className="w-9 h-9 rounded-xl bg-royal-50 flex items-center justify-center">
                  <Icon name={link.icon} className="w-4 h-4 text-royal-600" />
                </span>
                <span className="text-xs font-medium text-slate-700">{link.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
