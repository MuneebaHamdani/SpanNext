// ============================================================================
// CASE STUDIES PAGE DATA
// ----------------------------------------------------------------------------
// Each case study follows Challenge / Solution / Results so the page can
// render any entry through the same template.
// ============================================================================

export const caseStudies = [
  {
    slug: "meridian-claims-ai",
    client: "Meridian Health",
    industry: "Healthcare",
    year: "2025",
    image: "https://images.unsplash.com/photo-1488998527040-85054a85150e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvciUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    title: "Cutting claims processing time in half with AI triage",
    excerpt:
      "Meridian's claims team was drowning in manual document review. An AI triage layer now routes 70% of claims straight to auto-approval.",
    challenge:
      "Meridian Health's claims team processed over 40,000 claims a month by hand, cross-checking documents against policy rules in three separate systems. Backlogs regularly stretched past two weeks, and compliance reviewers flagged errors introduced by rushed manual entry.",
    solution:
      "We built a document-understanding pipeline that reads incoming claims, extracts structured data, and checks it against policy rules in real time. Clean claims route straight to auto-approval; exceptions are flagged with the specific rule that failed, so reviewers start with context instead of a blank form.",
    solutionPoints: [
      "OCR and entity extraction tuned to insurance claim formats",
      "Rule engine mirroring Meridian's existing policy logic",
      "Human-in-the-loop review queue for flagged exceptions",
      "Full audit trail for HIPAA and internal compliance review",
    ],
    results: [
      { value: "58%", label: "Faster claims processing" },
      { value: "70%", label: "Claims auto-approved" },
      { value: "-82%", label: "Manual entry errors" },
      { value: "3 wks", label: "Time to first production rollout" },
    ],
    quote: {
      text: "The AI automation they built cut our claims processing time by more than half. The team understood our compliance constraints from day one.",
      name: "Sarah Whitfield",
      role: "VP of Operations, Meridian Health",
      avatarSeed: "sarah-whitfield",
    },
    technologies: ["Python", "PyTorch", "AWS Textract", "PostgreSQL"],
  },
  {
    slug: "northbridge-dispatch-crm",
    client: "Northbridge Logistics",
    industry: "Logistics",
    year: "2025",
    image: "https://media.istockphoto.com/id/2204441701/photo/person-interacts-with-a-digital-sales-dashboard-displaying-various-performance-metrics-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=tQtiSXGF_aCXEckEhA1cbXkmgS_uo4tGp4Ji5eF_MYc=",
    title: "A dispatch CRM built around how dispatchers actually work",
    excerpt:
      "Off-the-shelf CRMs didn't match Northbridge's dispatch workflow. A custom build meant dispatchers stopped fighting the software.",
    challenge:
      "Northbridge's dispatch team relied on a generic CRM bolted onto spreadsheets and phone calls. Drivers' real-time status lived in a separate fleet tracking tool, so dispatchers toggled between three screens to answer one customer question.",
    solution:
      "We designed a dispatch-first CRM that surfaces live driver location, ETA, and load status on the same screen as the customer record. Automated SMS updates fire the moment a shipment status changes, cutting outbound calls dramatically.",
    solutionPoints: [
      "Unified view combining CRM records with live fleet telemetry",
      "Rule-based auto-dispatch suggestions ranked by proximity and capacity",
      "Automated customer SMS and email status updates",
      "Role-based views for dispatchers, drivers, and account managers",
    ],
    results: [
      { value: "3.2x", label: "Faster dispatch cycles" },
      { value: "-47%", label: "Inbound status-check calls" },
      { value: "99.4%", label: "On-time delivery notifications" },
      { value: "100%", label: "Dispatcher adoption in week one" },
    ],
    quote: {
      text: "Our custom CRM finally matches how our dispatch team actually works. Adoption was immediate because we weren't fighting the software.",
      name: "Daniel Osei",
      role: "CTO, Northbridge Logistics",
      avatarSeed: "daniel-osei",
    },
    technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
  },
  {
    slug: "fernwood-recommendation-engine",
    client: "Fernwood Retail",
    industry: "Retail",
    year: "2024",
    image: "https://media.istockphoto.com/id/2203911891/photo/optimization-of-procurement-or-purchasing-product-order-and-service-solution-crm-customer.webp?a=1&b=1&s=612x612&w=0&k=20&c=vXea3-9kmV-rMirhAsS-22hcUV6A7KAYIKqydDoHym4=",
    title: "A recommendation engine that paid for itself in one quarter",
    excerpt:
      "Fernwood's generic 'customers also bought' widget converted poorly. A model trained on their own data changed that fast.",
    challenge:
      "Fernwood's existing recommendation widget used a third-party plugin trained on aggregate retail data, not their own catalog or customer behavior. Click-through rates were flat and merchandising had no way to influence what appeared.",
    solution:
      "We trained a recommendation model directly on Fernwood's purchase history, browsing sessions, and inventory levels, with a merchandising override layer so category managers can promote seasonal stock without retraining the model.",
    solutionPoints: [
      "Collaborative filtering model trained on first-party behavioral data",
      "Real-time inventory awareness to avoid recommending out-of-stock items",
      "Merchandising override rules for seasonal and promotional pushes",
      "A/B testing framework to measure lift against the previous widget",
    ],
    results: [
      { value: "+24%", label: "Average order value" },
      { value: "+31%", label: "Recommendation click-through" },
      { value: "1 qtr", label: "Time to positive ROI" },
      { value: "+18%", label: "Repeat purchase rate" },
    ],
    quote: {
      text: "The recommendation engine paid for itself within the first quarter. Average order value is up double digits since launch.",
      name: "Priya Raman",
      role: "Head of Growth, Fernwood Retail",
      avatarSeed: "priya-raman",
    },
    technologies: ["Python", "TensorFlow", "Redis", "BigQuery"],
  },
  {
    slug: "alderman-erp-migration",
    client: "Alderman Financial",
    industry: "Financial Services",
    year: "2024",
    image: "https://plus.unsplash.com/premium_photo-1664478157873-50d4963c1d11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaWFsJTIwc29mdHdhcmVlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Migrating twelve years of financial data with zero downtime",
    excerpt:
      "A staged migration plan meant Alderman's finance team never lost a single working day during a full ERP cutover.",
    challenge:
      "Alderman Financial needed to retire a legacy CRM and finance system holding twelve years of client and transaction history, but a full-year audit cycle meant they couldn't tolerate any downtime or data loss during the switch.",
    solution:
      "We built a parallel-run migration strategy: new and old systems operated side by side for eight weeks, with automated reconciliation checks confirming every record matched before the legacy system was retired.",
    solutionPoints: [
      "Field-by-field data mapping audit before any migration began",
      "Parallel-run period with automated reconciliation reporting",
      "Staged cutover by business unit rather than a single flip",
      "Rollback plan tested twice before the production cutover",
    ],
    results: [
      { value: "0hrs", label: "Downtime during cutover" },
      { value: "100%", label: "Records reconciled pre-launch" },
      { value: "12 yrs", label: "Of historical data migrated" },
      { value: "8 wks", label: "Parallel-run validation period" },
    ],
    quote: {
      text: "Migrating twelve years of CRM data sounded terrifying. Their staged migration plan meant we had zero downtime during cutover.",
      name: "Marcus Lindqvist",
      role: "Director of IT, Alderman Financial",
      avatarSeed: "marcus-lindqvist",
    },
    technologies: ["SAP", ".NET", "SQL Server", "Azure Data Factory"],
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((c) => c.slug === slug);
