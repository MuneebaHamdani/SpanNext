import Hero from "../../components/sections/Hero";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import ServiceShowcase from "../../components/showcase/ServiceShowcase";
import Technologies from "../../components/sections/Technologies";
import ProcessTimeline from "../../components/sections/ProcessTimeline";
import IndustriesServed from "../../components/sections/IndustriesServed";
import Statistics from "../../components/sections/Statistics";
import Testimonials from "../../components/sections/Testimonials";
import FAQAccordion from "../../components/sections/FAQAccordion";
import CTA from "../../components/sections/CTA";
import { erpServices } from "../../data/services";

const erpFaqs = [
  {
    q: "Which ERP platforms do you implement?",
    a: "We work across SAP S/4HANA, Oracle Fusion Cloud, NetSuite, and Odoo — as well as vendor-neutral cloud ERP evaluations for teams that haven't picked a platform yet.",
  },
  {
    q: "Can you integrate our ERP with our existing CRM and ecommerce systems?",
    a: "Yes, real-time integration between ERP, CRM, and ecommerce platforms is one of our most common engagements — we build middleware that survives platform upgrades on either side.",
  },
  {
    q: "How do you handle ERP data migration without disrupting operations?",
    a: "We use staged cutovers with parallel-run validation, so the old and new systems are compared side by side before go-live, with a tested rollback plan in case anything needs to be reversed.",
  },
  {
    q: "Do you support multi-entity and multi-currency configurations?",
    a: "Yes — consolidated financial reporting across subsidiaries, currencies, and jurisdictions is a core part of most ERP finance implementations we run.",
  },
  {
    q: "How long does a typical ERP implementation take?",
    a: "A focused module implementation (like payroll or procurement) typically runs 8-14 weeks; a full-scale ERP rollout across finance, supply chain, and manufacturing usually runs 6-12 months depending on scope and entity count.",
  },
];

export default function ERPDevelopment() {
  return (
    <>
      <Hero
        eyebrow="ERP Development"
        title="ERP systems that run the business,"
        highlight="not fight it"
        description="Finance, supply chain, manufacturing, and HR — implemented, integrated, and reported on by engineers who've done this at enterprise scale before."
        floatingIcons={["Factory", "Wallet", "Warehouse", "Database"]}
        stats={[
          { value: "18", label: "ERP Services" },
          { value: "6+", label: "Platforms Supported" },
          { value: "99.9%", label: "Migration Success" },
          { value: "4.9/5", label: "Client Rating" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "ERP Development" }]} />
      </div>

      <ServiceShowcase
        services={erpServices}
        eyebrow="ERP Capabilities"
        title="18 ERP services, one senior team"
        description="Hover to preview each module. Click through for the full breakdown — features, benefits, technologies, and use cases."
      />

      <Technologies />
      <ProcessTimeline />
      <IndustriesServed />
      <Statistics />
      <Testimonials />
      <FAQAccordion items={erpFaqs} />
      <CTA
        title="Ready to fix your ERP, once and for all?"
        description="Tell us what's broken — a module, an integration, a migration — and we'll tell you honestly what it takes to get it right."
        primaryLabel="Start an ERP Project"
      />
    </>
  );
}
