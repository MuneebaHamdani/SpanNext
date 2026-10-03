// ============================================================================
// BLOG PAGE DATA
// ----------------------------------------------------------------------------
// Posts, categories, and featured flags for the Blog page.
// ============================================================================

export const blogCategories = [
  { id: "all", label: "All Posts" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product & Design" },
  { id: "industry", label: "Industry Insights" },
];

export const blogPosts = [
  {
    slug: "ai-roadmap-without-hype",
    title: "Building an AI roadmap without the hype cycle",
    category: "ai",
    author: "Elena Marsh",
    authorRole: "Head of AI Strategy",
    authorSeed: "elena-marsh",
    date: "2026-06-18",
    readTime: "7 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV1cmFsJTIwbmV0d29yayUyMGFpfGVufDB8fDB8fHww",
    excerpt:
      "Most AI roadmaps fail because they start with the model instead of the metric. Here's the sequencing we use with enterprise clients.",
    content:
      "Most AI initiatives don't fail because the model underperforms — they fail because nobody agreed on what success looked like before the project started. In our engagements, we begin every roadmap with a single question: what business metric, specifically, is this supposed to move? From there we rank candidate use cases by three factors — expected business value, data readiness, and technical feasibility — and sequence delivery so the first win funds the next. Teams that skip this step tend to ship an impressive demo that never makes it past a pilot, because nobody budgeted for the unglamorous work of data cleanup, monitoring, and change management that turns a model into a product. The roadmap should read less like a science project and more like a staged rollout plan, with a 90-day, 6-month, and 12-month horizon, each with its own decision point about whether to continue, pivot, or stop.",
    featured: true,
    tags: ["AI Strategy", "Roadmapping"],
  },
  {
    slug: "zero-downtime-erp-migrations",
    title: "What zero-downtime ERP migrations actually require",
    category: "engineering",
    author: "Marcus Chen",
    authorRole: "Principal Engineer",
    authorSeed: "marcus-chen",
    date: "2026-06-05",
    readTime: "9 min read",
    image:
      "https://media.istockphoto.com/id/1468421499/vector/business-infographic-presentation-display-screen.jpg?s=612x612&w=0&k=20&c=JfyOnWzJdFAUWeYp7LsCAN_SfU9k805SLiCRgrbyPTg=",
    excerpt:
      "Zero downtime isn't a feature you bolt on at the end. It's a constraint that shapes the entire migration plan from day one.",
    content:
      "Teams often ask for a 'zero-downtime migration' the same way they'd ask for a dark theme — as an add-on request near the end of planning. It doesn't work that way. Zero downtime is a constraint that has to shape the migration architecture from the start: it determines whether you can migrate in one cutover or need a parallel-run period, how you reconcile data between two live systems, and what your rollback plan looks like if reconciliation turns up a discrepancy at 2am. The core technique we rely on is running old and new systems side by side, with an automated reconciliation job comparing every record nightly, for long enough that the team trusts the new system before the old one is retired. It's slower than a single cutover weekend, but it's the only approach that holds up when a discrepancy actually appears — and one always does.",
    featured: true,
    tags: ["ERP", "Migrations", "Architecture"],
  },
  {
    slug: "recommendation-engines-retail",
    title: "Why generic recommendation engines underperform in retail",
    category: "ai",
    author: "Priya Fontaine",
    authorRole: "Senior ML Engineer",
    authorSeed: "priya-fontaine",
    date: "2026-05-22",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt:
      "Third-party recommendation plugins are trained on aggregate data. Your catalog, and your customers, are not aggregate.",
    content:
      "A common pattern we see: a retailer installs a third-party 'customers also bought' plugin, sees flat click-through rates for a year, and assumes recommendations just don't work for their category. The real issue is usually that the plugin was trained on aggregate behavior across thousands of unrelated stores, not on the retailer's own catalog, seasonality, or customer base. A model trained on first-party data — actual browsing sessions, actual purchase sequences, actual inventory levels — captures patterns a generic model never will, like which products in your specific catalog tend to be bought together in the same session. The other piece retailers underestimate is merchandising control. A pure ML recommendation can surface a technically correct but commercially useless suggestion, like recommending an item that's about to go out of stock. Building an override layer that lets merchandising teams boost seasonal or promotional items, without needing to retrain the whole model, is often what turns a technically sound system into one the business actually trusts.",
    featured: true,
    tags: ["Machine Learning", "Retail", "Personalization"],
  },
  {
    slug: "designing-dispatch-first-crm",
    title: "Designing CRMs around the job, not the org chart",
    category: "product",
    author: "Daniel Osei",
    authorRole: "Product Lead",
    authorSeed: "daniel-osei-blog",
    date: "2026-05-10",
    readTime: "5 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHntBco3dTeGIbp5H2Qgps4PPKQwATQHZK_bnTe170dg&s=10",
    excerpt:
      "The best custom CRMs are shaped around the actual job to be done, not a generic contact-and-deal template.",
    content:
      "Most CRMs, out of the box, are shaped around a sales team's pipeline: contacts, deals, stages. That works well if your team's job actually is sales. It works poorly if your team's job is dispatching trucks, triaging support tickets, or coordinating field technicians, because none of those workflows map cleanly onto 'deal stages.' The design work that actually matters happens before a single screen is built — sitting with the team doing the job and mapping the decisions they make minute to minute. A dispatcher doesn't think in terms of 'opportunity stage.' They think in terms of which driver is closest, which load is time-sensitive, and what the customer needs to hear right now. When the software mirrors that mental model instead of a generic sales template, adoption stops being a fight, because the tool finally matches how people already think about their job.",
    featured: false,
    tags: ["Product Design", "CRM"],
  },
  {
    slug: "cloud-modernization-without-rewrite",
    title: "Cloud modernization without a full rewrite",
    category: "engineering",
    author: "Marcus Chen",
    authorRole: "Principal Engineer",
    authorSeed: "marcus-chen",
    date: "2026-04-28",
    readTime: "8 min read",
    image: "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt:
      "A full rewrite is rarely the right first move. Here's how we peel monoliths apart one service at a time.",
    content:
      "When a client says their monolith is 'holding them back,' the instinct is often to propose a full rewrite. In practice, a full rewrite is one of the riskiest paths available — it freezes feature development for months or years while the team rebuilds functionality that already works, and it frequently underestimates business logic buried in edge cases nobody documented. The approach that actually reduces risk is the strangler pattern: identify the highest-friction piece of the monolith, usually the part changing most often or scaling worst, and extract just that piece into a standalone service behind the existing interface. Ship it, validate it under real load, then move to the next piece. It's slower to describe in a slide deck, but it means the system stays shippable and revenue-generating throughout the migration, instead of betting the business on a rewrite finishing on schedule.",
    featured: false,
    tags: ["Cloud", "DevOps", "Architecture"],
  },
  {
    slug: "compliance-by-design-healthcare-software",
    title: "Compliance by design in healthcare software",
    category: "industry",
    author: "Sarah Whitfield",
    authorRole: "Healthcare Practice Lead",
    authorSeed: "sarah-whitfield-blog",
    date: "2026-04-14",
    readTime: "6 min read",
    image: "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt:
      "Retrofitting HIPAA compliance after launch is expensive and slow. Building it in from day one rarely is.",
    content:
      "Teams building their first piece of healthcare software often treat compliance as a review gate at the end — something legal signs off on right before launch. That approach almost always triggers a rebuild, because access controls, audit logging, and data residency decisions touch the core architecture, not just a checklist item. Building compliance in from day one means the audit trail is a first-class part of the data model from the first migration, not something bolted on later. It means access control decisions are made at the schema level, not just the API layer. And it means every third-party integration is vetted for its own compliance posture before it's wired in, not after a security review flags it. None of this adds meaningful time to a well-run project — it only feels expensive when it's retrofitted after the fact.",
    featured: false,
    tags: ["Healthcare", "Compliance", "HIPAA"],
  },
  {
    slug: "measuring-engineering-team-health",
    title: "The metrics that actually predict engineering team health",
    category: "engineering",
    author: "Elena Marsh",
    authorRole: "Head of AI Strategy",
    authorSeed: "elena-marsh",
    date: "2026-03-30",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt:
      "Velocity charts tell you almost nothing. These are the signals we actually watch on client engagements.",
    content:
      "Story point velocity is one of the least useful signals for understanding whether an engineering team is actually healthy, because it's trivial to inflate and says nothing about the quality of what shipped. The signals we watch instead: how often a change requires a follow-up hotfix within 48 hours, how long a pull request sits waiting for review, and whether the same handful of people are the only ones who understand the trickiest parts of the codebase. That last one, sometimes called the bus factor, is quietly one of the most predictive risk signals on any project — a system with excellent test coverage but only one person who understands it is more fragile than a messier system three people can safely change.",
    featured: false,
    tags: ["Engineering Culture", "Team Health"],
  },
  {
    slug: "generative-ai-brand-consistency",
    title: "Keeping generative AI on-brand at scale",
    category: "ai",
    author: "Priya Fontaine",
    authorRole: "Senior ML Engineer",
    authorSeed: "priya-fontaine",
    date: "2026-03-12",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt:
      "Generic prompts produce generic copy. Grounding generation in your own approved content is what keeps it on-brand.",
    content:
      "The fastest way to get generic, off-brand output from a generative AI system is to prompt a general-purpose model with nothing but a topic and hope tone comes through in the wording of the prompt. It doesn't scale, and it doesn't hold up across hundreds of pieces of content. What works reliably is retrieval-augmented generation grounded in a library of previously approved copy, style guides, and product data — so every generation is pulling from material that's already been reviewed and signed off, rather than the model's general training data. Add a human-in-the-loop review step for anything customer-facing, and the system becomes a velocity multiplier for a brand team instead of a liability they have to double-check line by line.",
    featured: false,
    tags: ["Generative AI", "Branding"],
  },
];

export const getBlogPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
