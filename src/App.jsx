import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/layout/PageTransition";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollProgress from "./components/common/ScrollProgress";

// Top-level pages (placeholders — replace freely, see README)
import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import AccountingCompliance from "./pages/AccountingCompliance";
import NotFound from "./pages/NotFound";

// Services — real, fully built pages (carried over as-is from the services module)
import ServicesOverview from "./pages/ServicesOverview";
import AIMachineLearning from "./pages/services/AIMachineLearning";
import CRMDevelopment from "./pages/services/CRMDevelopment";
import ERPDevelopment from "./pages/services/ERPDevelopment";
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";
import AdditionalCoreServices from "./pages/services/AdditionalCoreServices";
import ServiceDetail from "./pages/services/ServiceDetail";

/**
 * ROUTE CONFIGURATION
 * ----------------------------------------------------------------------------
 * Every route the Navbar links to is registered here, once.
 *
 * Services pages (imported from ./pages/services) are the real, finished
 * implementations carried over from the services module - leave them as-is.
 * Every other page below is still a PagePlaceholder - replace the contents
 * of that page's own file when it's ready, without touching this file.
 *
 * Adding a brand-new page: create the page file, import it above, add a
 * <Route> below, and add the matching entry to src/data/navigation.js.
 */
export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />

            {/* Services - real pages */}
            <Route path="/services" element={<PageTransition><ServicesOverview /></PageTransition>} />
            <Route path="/services/ai-machine-learning" element={<PageTransition><AIMachineLearning /></PageTransition>} />
            <Route path="/services/crm-development" element={<PageTransition><CRMDevelopment /></PageTransition>} />
            <Route path="/services/erp-development" element={<PageTransition><ERPDevelopment /></PageTransition>} />
            <Route path="/services/custom-software-development" element={<PageTransition><CustomSoftwareDevelopment /></PageTransition>} />
            <Route path="/services/additional-core-services" element={<PageTransition><AdditionalCoreServices /></PageTransition>} />
            <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />

            <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
            <Route path="/accounting-compliance" element={<PageTransition><AccountingCompliance /></PageTransition>} />

            {/* 404 - always keep last */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
