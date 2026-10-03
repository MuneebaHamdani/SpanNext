// ============================================================================
// ACCOUNTING & COMPLIANCE PAGE DATA
// ----------------------------------------------------------------------------
// Copy for the standalone Accounting & Compliance service page (Dubai & Saudi
// SME finance/tax offering). Update the WhatsApp number below to the real
// business line before going live.
// ============================================================================

// Real business WhatsApp number (international format, no leading +, no
// spaces/brackets/dashes).
export const whatsappNumber = "+971588772525";
export const whatsappMessage =
  "Hi! I'd like to book my free 15-minute Accounting, Tax & Books Health Check.";
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const accountingServices = [
  { label: "Bookkeeping", icon: "BookOpen" },
  { label: "VAT", icon: "Receipt" },
  { label: "Corporate Tax", icon: "Landmark" },
  { label: "Payroll", icon: "Users" },
  { label: "Financial Reporting", icon: "FileBarChart" },
];
