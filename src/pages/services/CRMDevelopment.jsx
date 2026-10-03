import Hero from "../../components/sections/Hero";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import ServiceShowcase from "../../components/showcase/ServiceShowcase";
import Technologies from "../../components/sections/Technologies";
import ProcessTimeline from "../../components/sections/ProcessTimeline";
import Statistics from "../../components/sections/Statistics";
import Testimonials from "../../components/sections/Testimonials";
import FAQAccordion from "../../components/sections/FAQAccordion";
import CTA from "../../components/sections/CTA";
import { crmServices } from "../../data/services";

const crmFaqs = [
  {
    q: "Do you work with our existing CRM platform?",
    a: "Yes — we implement, customize, and integrate Salesforce, HubSpot, Zoho, and Microsoft Dynamics 365, as well as building fully custom CRMs when off-the-shelf platforms don't fit.",
  },
  {
    q: "Can you migrate our data without downtime?",
    a: "We use staged migrations with sandbox validation before cutover, and always build a rollback plan so a migration issue never means lost data or extended downtime.",
  },
  {
    q: "How do you handle CRM and marketing automation integration?",
    a: "We build bi-directional sync between your CRM and marketing platforms so lead status, campaign engagement, and deal data stay consistent across every system.",
  },
  {
    q: "Is mobile access included in a CRM implementation?",
    a: "We can build native or cross-platform mobile apps with offline mode for field sales and service teams as part of any CRM engagement.",
  },
  {
    q: "What does a typical CRM engagement cost?",
    a: "It depends heavily on scope — a Zoho or HubSpot implementation for a growing team is a different investment than an enterprise Dynamics 365 rollout. We'll scope and quote after an initial discovery call.",
  },
];

export default function CRMDevelopment() {
  return (
    <>
      <Hero
        eyebrow="CRM Development"
        title="CRM systems people"
        highlight="actually use"
        description="Custom builds, Salesforce, HubSpot, Zoho, and Dynamics 365 — implemented around your real sales process, not a generic template."
        floatingIcons={["LayoutDashboard", "Cloud", "TrendingUp", "Headset"]}
        stats={[
          { value: "14", label: "CRM Services" },
          { value: "120+", label: "CRM Rollouts" },
          { value: "6M+", label: "Records Migrated" },
          { value: "4.9/5", label: "Client Rating" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "CRM Development" }]} />
      </div>

      <ServiceShowcase
        services={crmServices}
        eyebrow="CRM Capabilities"
        title="14 CRM services, fully integrated"
        description="Hover to preview each service. Click through for the full breakdown — features, benefits, technologies, and use cases."
      />

      <Technologies />
      <ProcessTimeline />
      <Statistics />
      <Testimonials />
      <FAQAccordion items={crmFaqs} />
      <CTA
        title="Ready for a CRM that fits your process?"
        description="Whether it's a new implementation, a migration, or fixing a CRM nobody trusts anymore — let's talk through it."
        primaryLabel="Start a CRM Project"
      />
    </>
  );
}
