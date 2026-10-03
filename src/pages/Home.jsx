import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import TrustedCompanies from "../components/sections/TrustedCompanies";
import CompanyIntro from "../components/sections/CompanyIntro";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import IndustriesServed from "../components/sections/IndustriesServed";
import CTA from "../components/sections/CTA";

export default function Home() {
  useEffect(() => {
    document.title = "SpanNext — Enterprise Software, AI & Digital Engineering";
  }, []);

  return (
    <>
      <Hero
        eyebrow="Enterprise Software Studio"
        title="Software that fits your business,"
        highlight="not the other way around"
        description="SpanNext designs, builds, and supports AI, ERP, CRM, and custom software platforms for enterprise and mid-market teams — with senior engineers who stay through launch and beyond."
        stats={[
          { value: "240+", label: "Projects Delivered" },
          { value: "85+", label: "Enterprise Clients" },
          { value: "6", label: "Countries Served" },
          { value: "4.9/5", label: "Avg. Client Rating" },
        ]}
      />
      <TrustedCompanies />
      <CompanyIntro />
      <WhyChooseUs />
      <IndustriesServed />
      <CTA
        title="Ready to build something that actually fits?"
        description="Tell us about your project and we'll get back to you with a scoped proposal within two business days."
        primaryLabel="Start a Project"
        secondaryLabel="Talk to Our Team"
      />
    </>
  );
}

