// ============================================================================
// TESTIMONIALS PAGE DATA
// ----------------------------------------------------------------------------
// Client reviews, video testimonials, and success-story metrics for the
// dedicated Testimonials page. Extends (does not replace) the shorter
// `testimonials` array in data/services.js used elsewhere on the site.
// ============================================================================

export const clientReviews = [
  {
    id: "review-1",
    name: "Sarah Whitfield",
    role: "VP of Operations, Meridian Health",
    avatarSeed: "sarah-whitfield",
    rating: 5,
    quote:
      "The AI automation they built cut our claims processing time by more than half. The team understood our compliance constraints from day one, which made every conversation with our legal team painless.",
  },
  {
    id: "review-2",
    name: "Daniel Osei",
    role: "CTO, Northbridge Logistics",
    avatarSeed: "daniel-osei",
    rating: 5,
    quote:
      "Our custom CRM finally matches how our dispatch team actually works. Adoption was immediate because we weren't fighting the software for the first time in years.",
  },
  {
    id: "review-3",
    name: "Priya Raman",
    role: "Head of Growth, Fernwood Retail",
    avatarSeed: "priya-raman",
    rating: 5,
    quote:
      "The recommendation engine paid for itself within the first quarter. Average order value is up double digits since launch, and the merchandising team can finally tune it themselves.",
  },
  {
    id: "review-4",
    name: "Marcus Lindqvist",
    role: "Director of IT, Alderman Financial",
    avatarSeed: "marcus-lindqvist",
    rating: 5,
    quote:
      "Migrating twelve years of CRM data sounded terrifying. Their staged migration plan meant we had zero downtime during cutover, and the reconciliation reporting caught issues we didn't know existed.",
  },
  {
    id: "review-5",
    name: "Renata Alves",
    role: "COO, BrightPath Education",
    avatarSeed: "renata-alves",
    rating: 5,
    quote:
      "They designed our adaptive learning platform around actual classroom workflows, not a generic LMS template. Teacher adoption was the highest of any tool we've rolled out.",
  },
  {
    id: "review-6",
    name: "James Whitcombe",
    role: "VP Engineering, Vantage Manufacturing",
    avatarSeed: "james-whitcombe",
    rating: 4,
    quote:
      "The cloud modernization project cut our infrastructure spend significantly without a single week of feature freeze. The strangler-pattern approach was exactly the right call for a system our size.",
  },
  {
    id: "review-7",
    name: "Amara Okafor",
    role: "Director of Digital, Solace Clinics",
    avatarSeed: "amara-okafor",
    rating: 5,
    quote:
      "Our patient portal cut front-desk call volume dramatically in the first two months. Patients tell us it's the easiest healthcare scheduling tool they've used.",
  },
  {
    id: "review-8",
    name: "Tobias Reinholt",
    role: "Head of Supply Chain, Harborline Foods",
    avatarSeed: "tobias-reinholt",
    rating: 5,
    quote:
      "Inventory spoilage dropped noticeably within the first two quarters after launch. The forecasting model understood our perishables constraints better than our old system ever did.",
  },
];

export const videoTestimonials = [
  {
    id: "video-1",
    name: "Sarah Whitfield",
    role: "VP of Operations, Meridian Health",
    company: "Meridian Health",
    avatarSeed: "sarah-whitfield",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMHNvZnR3YXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    duration: "2:14",
    summary:
      "Sarah walks through how the claims automation engine changed her team's day-to-day workload and compliance posture.",
  },
  {
    id: "video-2",
    name: "Daniel Osei",
    role: "CTO, Northbridge Logistics",
    company: "Northbridge Logistics",
    avatarSeed: "daniel-osei",
    thumbnail:
      "https://media.istockphoto.com/id/2236081465/photo/female-business-leader-utilizing-crm-software.webp?a=1&b=1&s=612x612&w=0&k=20&c=P0vcuyQaX4dsDOSu8L8I1n5WNhbbnZliC3wE8Fi8gbM=",
    duration: "3:02",
    summary:
      "Daniel discusses why a custom-built CRM outperformed every off-the-shelf option his team evaluated.",
  },
  {
    id: "video-3",
    name: "Priya Raman",
    role: "Head of Growth, Fernwood Retail",
    company: "Fernwood Retail",
    avatarSeed: "priya-raman",
    thumbnail:
      "https://images.unsplash.com/photo-1669023414171-56f0740e34cd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1:48",
    summary:
      "Priya breaks down the revenue impact of the recommendation engine in Fernwood's first two quarters post-launch.",
  },
];

export const successStories = [
  {
    id: "story-1",
    client: "Meridian Health",
    industry: "Healthcare",
    image:
      "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    headline: "58% faster claims processing, zero compliance surprises",
    metric: { value: "58%", label: "Faster claims processing" },
    caseStudySlug: "meridian-claims-ai",
  },
  {
    id: "story-2",
    client: "Northbridge Logistics",
    industry: "Logistics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "3.2x faster dispatch cycles with a CRM built for the job",
    metric: { value: "3.2x", label: "Faster dispatch cycles" },
    caseStudySlug: "northbridge-dispatch-crm",
  },
  {
    id: "story-3",
    client: "Fernwood Retail",
    industry: "Retail",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "A recommendation engine that paid for itself in one quarter",
    metric: { value: "+24%", label: "Average order value" },
    caseStudySlug: "fernwood-recommendation-engine",
  },
  {
    id: "story-4",
    client: "Alderman Financial",
    industry: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Twelve years of data migrated with zero downtime",
    metric: { value: "0hrs", label: "Downtime during cutover" },
    caseStudySlug: "alderman-erp-migration",
  },
];
