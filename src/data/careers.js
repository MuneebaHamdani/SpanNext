// ============================================================================
// CAREERS PAGE DATA
// ----------------------------------------------------------------------------
// Benefits, open positions, and hiring process steps for the Careers page.
// ============================================================================

export const careerBenefits = [
  {
    icon: "HeartPulse",
    title: "Health & Wellness",
    desc: "Full medical, dental, and vision coverage from day one, plus an annual wellness stipend.",
  },
  {
    icon: "Globe2",
    title: "Remote-First",
    desc: "Work from anywhere across our supported time zones, with quarterly team meetups in person.",
  },
  {
    icon: "TrendingUp",
    title: "Growth Budget",
    desc: "An annual learning budget for courses, conferences, and certifications you choose.",
  },
  {
    icon: "Palmtree",
    title: "Flexible Time Off",
    desc: "Unlimited PTO with a mandatory two-week minimum, so rest is a norm, not a risk.",
  },
  {
    icon: "PiggyBank",
    title: "Retirement Matching",
    desc: "401(k) matching up to 4%, because long-term thinking should apply to your future too.",
  },
  {
    icon: "Baby",
    title: "Parental Leave",
    desc: "16 weeks of fully paid parental leave for all new parents, regardless of path to parenthood.",
  },
  {
    icon: "Laptop",
    title: "Home Office Setup",
    desc: "A one-time stipend plus annual refresh budget for the equipment that keeps you productive.",
  },
  {
    icon: "Users",
    title: "Senior-Led Teams",
    desc: "Work directly alongside senior engineers on every project — no layers of hand-off between you and the work.",
  },
];

export const openPositions = [
  {
    id: "sr-fullstack-eng",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    level: "Senior",
    posted: "2026-06-20",
    summary:
      "Lead feature delivery across our client engagements, from React front ends to the APIs and data layers behind them.",
    responsibilities: [
      "Own delivery of full-stack features across 1–2 concurrent client engagements",
      "Pair with client engineering teams to design APIs and data models",
      "Review pull requests and mentor mid-level engineers on the team",
      "Participate in architecture reviews for new engagements",
    ],
    requirements: [
      "5+ years building production web applications",
      "Strong React and Node.js experience",
      "Comfort working directly with enterprise client stakeholders",
      "Experience with PostgreSQL or similar relational databases",
    ],
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    department: "AI & Data",
    location: "Remote (Global)",
    type: "Full-time",
    level: "Mid to Senior",
    posted: "2026-06-15",
    summary:
      "Design, train, and ship production ML models for enterprise clients across healthcare, retail, and logistics.",
    responsibilities: [
      "Build and productionize ML models from prototype through MLOps pipeline",
      "Collaborate with client data teams on feature engineering",
      "Set up monitoring for model drift and performance decay",
      "Communicate model behavior and limitations clearly to non-technical stakeholders",
    ],
    requirements: [
      "3+ years shipping ML models to production",
      "Strong Python skills with PyTorch or TensorFlow",
      "Experience with MLOps tooling (MLflow, Airflow, or similar)",
      "Comfort explaining model trade-offs to business stakeholders",
    ],
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    level: "Mid to Senior",
    posted: "2026-06-10",
    summary:
      "Shape enterprise software experiences end to end, from discovery workshops through high-fidelity prototypes.",
    responsibilities: [
      "Lead discovery workshops with client stakeholders to map real workflows",
      "Design end-to-end flows for internal tools and customer-facing platforms",
      "Build and maintain design systems shared across client engagements",
      "Partner closely with engineering through implementation",
    ],
    requirements: [
      "4+ years of product design experience, ideally on B2B or internal tools",
      "Strong portfolio showing workflow-first, not template-first, design thinking",
      "Proficiency with Figma and component-based design systems",
      "Comfortable presenting design rationale directly to client executives",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Mid",
    posted: "2026-06-02",
    summary:
      "Own CI/CD, infrastructure-as-code, and cloud architecture for client platforms running on AWS and Azure.",
    responsibilities: [
      "Design and maintain CI/CD pipelines across multiple client environments",
      "Build infrastructure-as-code with Terraform for new engagements",
      "Support zero-downtime migration and modernization projects",
      "Set up observability and alerting for production systems",
    ],
    requirements: [
      "3+ years in a DevOps or platform engineering role",
      "Hands-on experience with AWS or Azure and Terraform",
      "Kubernetes experience in a production environment",
      "Strong understanding of security best practices for cloud infrastructure",
    ],
  },
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    level: "Senior",
    posted: "2026-05-25",
    summary:
      "Design system architecture for new client engagements and act as technical lead across the project lifecycle.",
    responsibilities: [
      "Translate client requirements into system architecture and technical proposals",
      "Lead technical discovery for new engagements alongside sales",
      "Set technical direction and review key architecture decisions during delivery",
      "Serve as the senior technical point of contact for client stakeholders",
    ],
    requirements: [
      "7+ years of software engineering experience, including architecture ownership",
      "Track record scoping and delivering enterprise software projects",
      "Strong communication skills with both engineers and executives",
      "Breadth across web, data, and cloud infrastructure",
    ],
  },
  {
    id: "qa-engineer",
    title: "QA Automation Engineer",
    department: "Engineering",
    location: "Remote (EU)",
    type: "Full-time",
    level: "Mid",
    posted: "2026-05-18",
    summary:
      "Build automated test suites and quality processes that keep enterprise releases predictable and low-risk.",
    responsibilities: [
      "Build and maintain automated test suites across client codebases",
      "Define QA processes for new engagements, from unit to end-to-end testing",
      "Investigate and triage production incidents alongside engineering",
      "Advocate for testability during architecture and design reviews",
    ],
    requirements: [
      "3+ years in QA automation or software testing",
      "Experience with Playwright, Cypress, or similar frameworks",
      "Comfort reading and writing code, not just test scripts",
      "Strong attention to edge cases and real-world failure modes",
    ],
  },
];

export const hiringProcess = [
  {
    step: 1,
    title: "Application Review",
    desc: "A member of our talent team reviews your application and portfolio, usually within three business days.",
    icon: "FileSearch",
  },
  {
    step: 2,
    title: "Intro Call",
    desc: "A 30-minute conversation about your experience, what you're looking for, and what the role involves.",
    icon: "PhoneCall",
  },
  {
    step: 3,
    title: "Technical Interview",
    desc: "A practical conversation or exercise relevant to the role — no algorithm trivia, real problems from real projects.",
    icon: "Code2",
  },
  {
    step: 4,
    title: "Team & Culture Interview",
    desc: "Meet the team you'd work with directly, and ask us anything about how we actually work day to day.",
    icon: "Users",
  },
  {
    step: 5,
    title: "Offer & Onboarding",
    desc: "We move quickly once there's a mutual fit, with a structured onboarding plan for your first 30 days.",
    icon: "PartyPopper",
  },
];
