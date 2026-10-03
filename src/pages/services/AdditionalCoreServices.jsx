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
import { coreServices } from "../../data/services";

const coreFaqs = [
  {
    q: "Can we engage you for just one service, like DevOps or QA?",
    a: "Yes — every service on this page can be engaged independently. Most clients start with one focused engagement and expand once they see how the team works.",
  },
  {
    q: "Do you work with our existing cloud provider, or do we need to switch?",
    a: "We work across AWS, Azure, and GCP and won't push a migration you don't need. If your current provider fits your workload, we architect and optimize within it.",
  },
  {
    q: "How does staff augmentation differ from a dedicated team?",
    a: "Staff augmentation places individual engineers inside your existing team and processes. A dedicated team is a full, standalone unit — engineers, QA, and a delivery lead — working exclusively on your roadmap with its own cadence.",
  },
  {
    q: "Do you offer ongoing support after a core services engagement ends?",
    a: "Yes, most engagements transition into an ongoing maintenance and support arrangement if you want one, with SLA-backed response times and regular health reviews.",
  },
  {
    q: "How quickly can staff augmentation or a dedicated team start?",
    a: "Typically within one to three weeks, depending on the skill set required — significantly faster than a traditional hiring cycle.",
  },
];

export default function CoreServices() {
  return (
    <>
      <Hero
        eyebrow="Additional Core Services"
        title="The infrastructure and expertise"
        highlight="behind every great product"
        description="Cloud, DevOps, security, design, QA, and staffing — the foundational services that keep everything else running reliably, delivered by senior specialists."
        floatingIcons={["Cloud", "ShieldCheck", "Kubernetes", "Palette"]}
        stats={[
          { value: "22", label: "Core Services" },
          { value: "3", label: "Cloud Platforms" },
          { value: "24/7", label: "Support Coverage" },
          { value: "4.9/5", label: "Client Rating" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Core Services" }]} />
      </div>

      <ServiceShowcase
        services={coreServices}
        eyebrow="Core Capabilities"
        title="22 core services, one senior team"
        description="Hover to preview each service. Click through for the full breakdown — features, benefits, technologies, and use cases."
      />

      <Technologies />
      <ProcessTimeline />
      <IndustriesServed />
      <Statistics />
      <Testimonials />
      <FAQAccordion items={coreFaqs} />
      <CTA
        title="Need a capability your team doesn't have in-house?"
        description="Tell us the gap — cloud, security, QA, or extra hands — and we'll tell you honestly what it takes to close it."
        primaryLabel="Start a Conversation"
      />
    </>
  );
}
