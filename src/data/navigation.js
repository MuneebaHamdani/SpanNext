// ============================================================================
// CENTRAL NAVIGATION CONFIG
// ----------------------------------------------------------------------------
// Single source of truth for the Navbar, Mega Menu, Mobile Menu and Routes.
// Add a new page by adding one entry here + one route in AppRoutes.jsx.
// Developers building out individual pages do NOT need to touch this file.
// ============================================================================

export const servicesMegaMenu = [
  {
    label: "AI & Machine Learning",
    path: "/services/ai-machine-learning",
    icon: "BrainCircuit",
    desc: "Intelligent automation & predictive systems",
  },
  {
    label: "CRM Development",
    path: "/services/crm-development",
    icon: "Users",
    desc: "Customer relationship platforms built to scale",
  },
  {
    label: "ERP Development",
    path: "/services/erp-development",
    icon: "Factory",
    desc: "Unified enterprise resource planning suites",
  },
  {
    label: "Custom Software Development",
    path: "/services/custom-software-development",
    icon: "Code2",
    desc: "Tailored software for your exact workflow",
  },
  {
    label: "Additional Core Services",
    path: "/services/additional-core-services",
    icon: "LayoutGrid",
    desc: "Cloud, QA, DevOps and support services",
  },
];

export const resourcesMenu = [
  { label: "Blog", path: "/blog", icon: "Newspaper" },
  { label: "FAQ", path: "/faq", icon: "HelpCircle" },
  { label: "Testimonials", path: "/testimonials", icon: "Quote" },
];

// Top-level primary navigation, rendered left-to-right in the Navbar.
export const primaryNav = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services", megaMenu: servicesMegaMenu },
  { label: "Industries", path: "/industries" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Resources", path: "/blog", dropdown: resourcesMenu },
  // TEMPORARILY HIDDEN — uncomment to re-enable Careers
  // { label: "Careers", path: "/careers" },
];

// Rendered as a distinct call-to-action button on the right side of the Navbar.
export const ctaNav = { label: "Contact Us", path: "/contact" };

// Rendered as a second call-to-action button, styled to match ctaNav, to the left of Contact Us.
export const accountingCtaNav = { label: "Accounting & Compliance", path: "/accounting-compliance" };
