// ============================================================================
// PORTFOLIO PAGE DATA
// ----------------------------------------------------------------------------
// Projects, categories, and gallery content for the Portfolio page.
// Each project links to a related case study via `caseStudySlug` where one
// exists, so "View Case Study" can deep-link from a project card.
// ============================================================================

export const portfolioCategories = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI & ML" },
  { id: "crm", label: "CRM" },
  { id: "erp", label: "ERP" },
  { id: "web", label: "Web Platforms" },
  { id: "cloud", label: "Cloud & DevOps" },
];

export const portfolioProjects = [
  {
    slug: "meridian-claims-ai",
    title: "Meridian Health — Claims Automation Engine",
    client: "Meridian Health",
    category: "ai",
    industry: "Healthcare",
    year: "2025",
    image: "https://images.unsplash.com/photo-1488998527040-85054a85150e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvciUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    gallery: [
      "https://media.istockphoto.com/id/1477430518/photo/medical-cybersecurity-tablet-and-hands-of-doctor-surgeon-or-nurse-with-virtual-hologram-for.jpg?s=612x612&w=0&k=20&c=wkGGrzBNMl_WC2lmRqTtj3jmuJPD5-F0FhbZjk6ccCc=",
      "https://media.istockphoto.com/id/1396801868/photo/a-young-african-american-doctor-works-on-hud-or-graphic-display-in-front-of-her.jpg?s=612x612&w=0&k=20&c=lojYiNJS6OpH24mOa1Xhat3-RFnvoilRBdepCPNq1sE=",
      "https://media.istockphoto.com/id/1474723816/photo/doctor-using-computer-document-management-system-online-documentation-database-process.jpg?s=612x612&w=0&k=20&c=O1sqOTVudWbPyUlv5ySiASxIltE_5RZ_to4w7pb4Csw=",
    ],
    summary:
      "An AI-driven claims triage system that reads incoming documents, flags exceptions, and routes clean claims straight to auto-approval.",
    tags: ["Machine Learning", "OCR", "HIPAA Compliance"],
    metric: { value: "58%", label: "Faster claims processing" },
    caseStudySlug: "meridian-claims-ai",
    featured: true,
  },
  {
    slug: "northbridge-dispatch-crm",
    title: "Northbridge Logistics — Dispatch CRM",
    client: "Northbridge Logistics",
    category: "crm",
    industry: "Logistics",
    year: "2025",
    image: "https://media.istockphoto.com/id/2204441701/photo/person-interacts-with-a-digital-sales-dashboard-displaying-various-performance-metrics-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=tQtiSXGF_aCXEckEhA1cbXkmgS_uo4tGp4Ji5eF_MYc=",
    gallery: [
      "https://media.istockphoto.com/id/2168215145/photo/businessman-using-kpi-dashboard-management-data-system-kpi-connected-in-database-for-follow.webp?a=1&b=1&s=612x612&w=0&k=20&c=FikYooqOMAtcfTLF1EvlHvbd_M74EsirP8vkZjmZ06Q=",
      "https://media.istockphoto.com/id/1389143817/photo/erp-software.webp?a=1&b=1&s=612x612&w=0&k=20&c=5ST9EMUAAeKUv9jfUhyow67RBk-jKMs7MHtUrywjKUE=",
      "https://media.istockphoto.com/id/2228288326/photo/data-system-kpi-and-metrics-connected-in-database-for-follow-earnings-operations-and-sales.jpg?s=612x612&w=0&k=20&c=Oa4iJl7pio_SISpbvTQ_2gjiKm7mIaVfU9la6ejChR4=",
    ],
    summary:
      "A custom CRM built around how dispatchers actually plan routes, with live driver status and automated customer updates.",
    tags: ["Custom CRM", "Real-time", "Fleet Ops"],
    metric: { value: "3.2x", label: "Faster dispatch cycles" },
    caseStudySlug: "northbridge-dispatch-crm",
    featured: true,
  },
  {
    slug: "fernwood-recommendation-engine",
    title: "Fernwood Retail — Recommendation Engine",
    client: "Fernwood Retail",
    category: "ai",
    industry: "Retail",
    year: "2024",
    image: "https://media.istockphoto.com/id/2203911891/photo/optimization-of-procurement-or-purchasing-product-order-and-service-solution-crm-customer.webp?a=1&b=1&s=612x612&w=0&k=20&c=vXea3-9kmV-rMirhAsS-22hcUV6A7KAYIKqydDoHym4=",
    gallery: [
      "https://media.istockphoto.com/id/1335050732/photo/businessman-using-a-computer-to-document-management-concept-online-documentation-database-and.jpg?s=612x612&w=0&k=20&c=5zAzuOclaBXMudc56RisW9yNyGxLt3wO8Xh2wtShmo0=",
      "https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=6TM9NgCCXC2f3Nm7Rmjm1QS0rL8Lv6OvnDOomKxcBn8=",
    ],
    summary:
      "A product recommendation engine trained on purchase history and browsing behavior, deployed across web and email.",
    tags: ["Recommendation Systems", "Personalization"],
    metric: { value: "+24%", label: "Average order value" },
    caseStudySlug: "fernwood-recommendation-engine",
    featured: true,
  },
  {
    slug: "alderman-erp-migration",
    title: "Alderman Financial — Legacy ERP Migration",
    client: "Alderman Financial",
    category: "erp",
    industry: "Financial Services",
    year: "2024",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jaWFsJTIwc29mdHdhcmVlc3xlbnwwfHwwfHx8MA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1630464373688-fb6a37ce89ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jaWFsJTIwc2VydmljZXMlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1735469157670-1212e570eadc?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670213989516-449ccda46fdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jaWFsJTIwc2VydmljZXMlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    summary:
      "A staged, zero-downtime migration of twelve years of CRM and financial data into a unified ERP platform.",
    tags: ["ERP", "Data Migration", "SOC 2"],
    metric: { value: "0hrs", label: "Downtime during cutover" },
    caseStudySlug: "alderman-erp-migration",
    featured: false,
  },
  {
    slug: "brightpath-learning-platform",
    title: "BrightPath — Adaptive Learning Platform",
    client: "BrightPath Education",
    category: "web",
    industry: "EdTech",
    year: "2024",
    image: "https://images.unsplash.com/photo-1667984436026-99b165e3672b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhcm5pbmclMjBzb2Z0d2FyZXN8ZW58MHx8MHx8fDA%3D",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1726666269043-fb16e54646d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVhcm5pbmclMjBzb2Z0d2FyZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1707904633074-20fb8f8f865a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlYXJuaW5nJTIwc29mdHdhcmVzfGVufDB8fDB8fHww",
    ],
    summary:
      "A web platform that adapts lesson pacing to each student's progress, built for classrooms of 30+ students.",
    tags: ["Web App", "Adaptive Learning", "Accessibility"],
    metric: { value: "92%", label: "Weekly active students" },
    caseStudySlug: null,
    featured: false,
  },
  {
    slug: "vantage-cloud-modernization",
    title: "Vantage Manufacturing — Cloud Modernization",
    client: "Vantage Manufacturing",
    category: "cloud",
    industry: "Manufacturing",
    year: "2023",
    image: "https://plus.unsplash.com/premium_photo-1685086785223-485f800ce410?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QVdTJTIwc29mdHdhcmVzfGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBtb25pdG9yaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1722080826167-4ea87368cbc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnVmZWN0dXJpbmclMjBzb2Z0d2FyZXN8ZW58MHx8MHx8fDA%3D",
    ],
    summary:
      "Re-platforming a monolithic on-prem system into containerized microservices on AWS, cutting infrastructure spend.",
    tags: ["Cloud Migration", "Kubernetes", "DevOps"],
    metric: { value: "41%", label: "Lower infrastructure cost" },
    caseStudySlug: null,
    featured: false,
  },
  {
    slug: "solace-patient-portal",
    title: "Solace Clinics — Patient Self-Service Portal",
    client: "Solace Clinics",
    category: "web",
    industry: "Healthcare",
    year: "2023",
    image: "https://media.istockphoto.com/id/2219183305/photo/doctor-photo-with-hand-icon-medical-technology-doctor-using-ai-technology-to-diagnose-care.webp?a=1&b=1&s=612x612&w=0&k=20&c=SRe5ENncxP4NKgcFb_OcuzB1sIRSWbNsJg4y7Hu9IUw=",
    gallery: [
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aGNhcmUlMjBzb2Z0d2FyZXN8ZW58MHx8MHx8fDA%3D",
      "https://media.istockphoto.com/id/2205617501/photo/health-engineer-working-at-a-3d-printing-laboratory.webp?a=1&b=1&s=612x612&w=0&k=20&c=8j4rxcJR2ZGEhomHFKCY8J3WbYDG1Ml_9wddG9Pn0W8=",
    ],
    summary:
      "A patient portal for scheduling, billing, and secure messaging, integrated with the clinic's existing EHR.",
    tags: ["Web App", "EHR Integration", "HIPAA"],
    metric: { value: "-63%", label: "Front-desk call volume" },
    caseStudySlug: null,
    featured: false,
  },
  {
    slug: "harborline-inventory-erp",
    title: "Harborline Foods — Inventory ERP",
    client: "Harborline Foods",
    category: "erp",
    industry: "Food & Beverage",
    year: "2023",
    image: "https://images.unsplash.com/photo-1728044849280-10a1a75cff83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGJldmVyYWdlJTIwc29mdHdhcmVzJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1661721891141-ea7af51f735e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RVJQJTIwc29mdHdhcmVzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEVSUCUyMHNvZnR3YXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    summary:
      "A perishables-aware inventory and procurement system that cut spoilage across twelve distribution centers.",
    tags: ["ERP", "Supply Chain", "Forecasting"],
    metric: { value: "-31%", label: "Inventory spoilage" },
    caseStudySlug: null,
    featured: false,
  },
  {
    slug: "cinderline-support-crm",
    title: "Cinderline Apparel — Support CRM",
    client: "Cinderline Apparel",
    category: "crm",
    industry: "E-commerce",
    year: "2023",
    image: "https://media.istockphoto.com/id/2260809247/photo/digital-marketers-optimize-e-commerce-performance-using-online-shopping-cart-systems-seo.webp?a=1&b=1&s=612x612&w=0&k=20&c=mMAtrBuFk3XtiaKnGAZ7HX8xRa4FSc-AKW6OnZOuDUI=",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlJTIwRVJQJTIwc29mdHdhcmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1763872038252-e6c4e0a11067?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVjb21tZXJjZSUyMEVSUCUyMHNvZnR3YXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    summary:
      "A lightweight CRM unifying support tickets, order history, and returns into a single agent view.",
    tags: ["Custom CRM", "Customer Support"],
    metric: { value: "-45%", label: "Average resolution time" },
    caseStudySlug: null,
    featured: false,
  },
];

export const getPortfolioProjectBySlug = (slug) =>
  portfolioProjects.find((p) => p.slug === slug);
