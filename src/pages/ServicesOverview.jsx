import Hero from "../components/sections/Hero";
import CompanyIntro from "../components/sections/CompanyIntro";
import ServiceShowcase from "../components/showcase/ServiceShowcase";
import ServiceLines from "../components/sections/ServiceLines";
import ServicesGrid from "../components/sections/ServicesGrid";
import IndustriesServed from "../components/sections/IndustriesServed";
import Technologies from "../components/sections/Technologies";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Statistics from "../components/sections/Statistics";
import Testimonials from "../components/sections/Testimonials";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTA from "../components/sections/CTA";
import { allServices } from "../data/services";

const featuredSlugs = [
  "generative-ai",
  "custom-crm",
  "sap",
  "web-applications",
  "cybersecurity",
  "devops",
];

const gridSlugs = [
  "ai-chatbots",
  "computer-vision",
  "salesforce",
  "sales-automation",
  "finance",
  "erp-integration",
  "saas-platforms",
  "microservices",
  "cloud-computing",
];

export default function ServicesOverview() {
  const featured = featuredSlugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter(Boolean);

  const gridServices = gridSlugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Hero
        eyebrow="Enterprise Services"
        title="Software that fits your business,"
        highlight="not the other way around"
        description="AI, ERP, custom software, and CRM platforms designed, built, and supported by senior engineers — no templated solutions, no vendor lock-in."
        stats={[
          { value: "240+", label: "Projects Delivered" },
          { value: "85+", label: "Enterprise Clients" },
          { value: "6", label: "Countries Served" },
          { value: "4.9/5", label: "Avg. Client Rating" },
        ]}
      />
      <CompanyIntro />
      <ServiceLines />
      <ServiceShowcase
        services={featured}
        eyebrow="Featured Capabilities"
        title="A closer look at what we build"
        description="Hover to preview a service, click through for the full breakdown — features, technologies, and real use cases."
      />
      <ServicesGrid
        services={gridServices}
        eyebrow="Across Every Practice"
        title="87 services, one engineering team"
        description="AI, CRM, ERP, custom software, and core services — browse the full catalog on the dedicated pages above."
      />
      <IndustriesServed />
      <Technologies />
      <ProcessTimeline />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQAccordion />
      <CTA />
    </>
  );
}
