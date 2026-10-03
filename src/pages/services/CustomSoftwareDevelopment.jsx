import Hero from "../../components/sections/Hero";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import ServiceShowcase from "../../components/showcase/ServiceShowcase";
import Technologies from "../../components/sections/Technologies";
import ProcessTimeline from "../../components/sections/ProcessTimeline";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Statistics from "../../components/sections/Statistics";
import Testimonials from "../../components/sections/Testimonials";
import FAQAccordion from "../../components/sections/FAQAccordion";
import CTA from "../../components/sections/CTA";
import { customSoftwareServices } from "../../data/services";

const customSoftwareFaqs = [
  {
    q: "Do you build the whole product or just parts of it?",
    a: "Both — we take on full end-to-end builds from architecture through launch, and we also embed with existing engineering teams for specific modules like a new API layer or a mobile app.",
  },
  {
    q: "How do you decide between a monolith and microservices?",
    a: "We size the architecture to your actual team and traffic, not to what's trendy. Early-stage products usually start as a well-structured monolith; we only recommend microservices once team or scale genuinely justifies the added operational complexity.",
  },
  {
    q: "Who owns the code and infrastructure after launch?",
    a: "You do, entirely. There's no vendor lock-in — you get the full codebase, infrastructure-as-code, and documentation needed for your team to run it independently.",
  },
  {
    q: "Can you modernize an existing system instead of rebuilding it?",
    a: "Yes, and we usually recommend it. Incremental modernization using patterns like the strangler fig approach is almost always lower-risk than a full rewrite, and we'll tell you honestly when a rebuild really is the better option.",
  },
  {
    q: "What does a typical custom software engagement look like?",
    a: "Discovery and architecture first, then two-week sprints with working software delivered continuously. Most focused products launch an MVP in 10-14 weeks, with iteration continuing based on real usage after that.",
  },
];

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <Hero
        eyebrow="Custom Software Development"
        title="Software built around your business,"
        highlight="not a template"
        description="Web, mobile, desktop, and cloud-native applications — architected for your actual scale, owned entirely by you, and built by engineers who stay through launch."
        floatingIcons={["Globe", "Smartphone", "Boxes", "CloudCog"]}
        stats={[
          { value: "14", label: "Software Services" },
          { value: "150+", label: "Products Shipped" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "4.9/5", label: "Client Rating" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Custom Software Development" }]} />
      </div>

      <ServiceShowcase
        services={customSoftwareServices}
        eyebrow="Software Capabilities"
        title="13 software services, one senior team"
        description="Hover to preview each service. Click through for the full breakdown — features, benefits, technologies, and use cases."
      />

      <Technologies />
      <ProcessTimeline />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQAccordion items={customSoftwareFaqs} />
      <CTA
        title="Have a product that needs building?"
        description="Tell us what you're trying to ship — we'll tell you honestly what it takes, and what a realistic timeline looks like."
        primaryLabel="Start a Software Project"
      />
    </>
  );
}
