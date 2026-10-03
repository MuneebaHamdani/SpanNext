// ============================================================================
// FAQ PAGE DATA
// ----------------------------------------------------------------------------
// A larger, categorized FAQ set for the dedicated FAQ page. Separate from
// the shorter `faqs` array in data/services.js used inline on other pages.
// ============================================================================

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "engagement", label: "Working Together" },
  { id: "technical", label: "Technical" },
  { id: "pricing", label: "Pricing & Contracts" },
  { id: "support", label: "Support" },
];

export const faqPageItems = [
  {
    id: "faq-1",
    category: "engagement",
    icon: "Calendar",
    question: "How long does a typical engagement take?",
    answer:
      "Most projects run 8 to 16 weeks from discovery to launch, depending on scope. We deliver in two-week sprints so you see working software early, not just at the end.",
  },
  {
    id: "faq-2",
    category: "engagement",
    icon: "Users",
    question: "Who will we actually be working with?",
    answer:
      "A dedicated team of senior engineers, a product lead, and a solutions architect who stays through launch and into the support phase. We don't rotate you through a bench of unfamiliar staff mid-project.",
  },
  {
    id: "faq-3",
    category: "engagement",
    icon: "MessageSquare",
    question: "How do you handle communication during a project?",
    answer:
      "Weekly demos, a shared Slack channel, and a live project board you have full access to. You'll always know what shipped this week and what's coming next.",
  },
  {
    id: "faq-4",
    category: "technical",
    icon: "Plug",
    question: "Do you work with our existing tech stack?",
    answer:
      "Yes. We integrate with your current CRM, ERP, and data infrastructure rather than requiring a rip-and-replace. Our architecture teams start every engagement with an audit of what you already run.",
  },
  {
    id: "faq-5",
    category: "technical",
    icon: "ShieldCheck",
    question: "How do you handle data privacy and compliance?",
    answer:
      "Every engagement includes a governance review covering data residency, access control, and relevant regulation such as HIPAA, GDPR, or SOC 2, depending on your industry.",
  },
  {
    id: "faq-6",
    category: "technical",
    icon: "Cloud",
    question: "Which cloud providers do you support?",
    answer:
      "We build primarily on AWS and Azure, with GCP support for clients who are already standardized on it. Infrastructure is typically managed as code via Terraform for repeatability.",
  },
  {
    id: "faq-7",
    category: "technical",
    icon: "GitBranch",
    question: "Who owns the code and infrastructure after launch?",
    answer:
      "You do, fully. All code, infrastructure configuration, and documentation are handed over under your ownership, with no vendor lock-in to our tooling.",
  },
  {
    id: "faq-8",
    category: "pricing",
    icon: "Receipt",
    question: "Do you offer fixed-price or time-and-materials contracts?",
    answer:
      "Both. Well-defined projects work well as fixed-price; open-ended platform builds are typically time-and-materials with a capped monthly budget so costs stay predictable.",
  },
  {
    id: "faq-9",
    category: "pricing",
    icon: "Calculator",
    question: "How is a project scoped and estimated?",
    answer:
      "We run a short paid discovery phase to map requirements and technical constraints before quoting a fixed price or estimated range, so the number you receive reflects real scope, not a guess.",
  },
  {
    id: "faq-10",
    category: "pricing",
    icon: "FileText",
    question: "What's included in the proposal you send?",
    answer:
      "A scoped breakdown of deliverables, a sprint-by-sprint timeline, team composition, and total cost — no vague line items or hidden change-order fees.",
  },
  {
    id: "faq-11",
    category: "support",
    icon: "LifeBuoy",
    question: "Can you support us after launch?",
    answer:
      "Yes, ongoing support and iteration is part of nearly every engagement. We monitor real usage data after launch and continue improving based on what we see, not a fixed backlog written months earlier.",
  },
  {
    id: "faq-12",
    category: "support",
    icon: "AlarmClock",
    question: "What are your support response times?",
    answer:
      "Standard support plans include next-business-day response for non-critical issues and same-day response for production-impacting incidents, with optional 24/7 coverage for mission-critical systems.",
  },
  {
    id: "faq-13",
    category: "support",
    icon: "RefreshCcw",
    question: "What happens if we want to change scope mid-project?",
    answer:
      "We review the change against the current sprint plan and give you a clear cost and timeline impact before anything is added — no surprise invoices at the end of the engagement.",
  },
];
