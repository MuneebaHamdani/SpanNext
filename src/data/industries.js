// ============================================================================
// INDUSTRIES PAGE DATA
// ----------------------------------------------------------------------------
// Detailed content for the Industries page — one entry per vertical, each
// with the challenges we solve, the solutions we typically deliver, and a
// representative stat. Icons reference lucide-react names via <Icon />.
// ============================================================================

export const industryDetails = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    summary:
      "HIPAA-aware platforms for providers, payers, and health-tech companies — from patient portals to clinical data pipelines.",
    challenges: [
      "Fragmented patient data across legacy systems",
      "Strict compliance and audit requirements",
      "Slow, manual claims and scheduling workflows",
    ],
    solutions: [
      "Interoperable EHR integrations (HL7 / FHIR)",
      "HIPAA-aligned data architecture",
      "Automated claims and scheduling systems",
    ],
    stat: { value: "40%", label: "faster claims processing" },
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "Landmark",
    summary:
      "Secure, compliant platforms for banks, fintechs, and asset managers — built to handle real regulatory scrutiny.",
    challenges: [
      "Regulatory compliance across jurisdictions",
      "Legacy core banking integrations",
      "Real-time fraud and risk detection",
    ],
    solutions: [
      "SOC 2 aligned, encrypted-by-default systems",
      "Modern APIs over legacy core banking platforms",
      "ML-based fraud detection and monitoring",
    ],
    stat: { value: "99.98%", label: "platform uptime" },
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    summary:
      "Learning platforms and administrative systems for institutions and edtech companies serving thousands of students.",
    challenges: [
      "Disconnected LMS and student information systems",
      "Scaling for peak enrollment periods",
      "Accessibility compliance (WCAG)",
    ],
    solutions: [
      "Unified LMS and SIS integrations",
      "Auto-scaling cloud infrastructure",
      "WCAG 2.1 AA compliant interfaces",
    ],
    stat: { value: "60K+", label: "students supported" },
  },
  {
    slug: "retail",
    name: "Retail & Ecommerce",
    icon: "ShoppingBag",
    summary:
      "Storefronts, inventory systems, and personalization engines built to convert and to survive Black Friday traffic.",
    challenges: [
      "Inventory sync across online and physical stores",
      "Personalization at scale",
      "Traffic spikes during peak sales events",
    ],
    solutions: [
      "Real-time omnichannel inventory sync",
      "ML-driven personalization and recommendations",
      "Elastic infrastructure for demand spikes",
    ],
    stat: { value: "3.2x", label: "avg. conversion lift" },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    summary:
      "ERP, IoT, and supply-chain systems that connect the factory floor to the front office.",
    challenges: [
      "Disconnected shop-floor and ERP data",
      "Predictive maintenance gaps",
      "Multi-site supply chain visibility",
    ],
    solutions: [
      "IoT sensor integration with ERP systems",
      "Predictive maintenance models",
      "Centralized supply chain dashboards",
    ],
    stat: { value: "25%", label: "less unplanned downtime" },
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    summary:
      "Route optimization, fleet tracking, and warehouse systems built for razor-thin margins and tight delivery windows.",
    challenges: [
      "Inefficient route planning",
      "Limited real-time shipment visibility",
      "Manual warehouse operations",
    ],
    solutions: [
      "AI-powered route optimization",
      "Real-time GPS fleet tracking",
      "Warehouse management automation",
    ],
    stat: { value: "18%", label: "lower fuel cost" },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building",
    summary:
      "Property management, listing, and CRM platforms for brokerages, property managers, and proptech startups.",
    challenges: [
      "Fragmented listing and CRM data",
      "Manual lease and document workflows",
      "Limited market analytics",
    ],
    solutions: [
      "Unified listing and CRM platforms",
      "Digital lease and document automation",
      "Market analytics dashboards",
    ],
    stat: { value: "50%", label: "faster lease turnaround" },
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "Hotel",
    summary:
      "Booking engines, property management systems, and guest experience platforms for hotels and hospitality groups.",
    challenges: [
      "Disconnected booking channels",
      "Manual guest service workflows",
      "Dynamic pricing complexity",
    ],
    solutions: [
      "Unified channel-manager integrations",
      "Automated guest service and messaging",
      "Dynamic, demand-based pricing engines",
    ],
    stat: { value: "30%", label: "higher direct bookings" },
  },
];
