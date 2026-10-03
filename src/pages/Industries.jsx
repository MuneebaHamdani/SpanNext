import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import IndustryQuickNav from "../components/sections/IndustryQuickNav";
import IndustryDetailGrid from "../components/sections/IndustryDetailGrid";
import Statistics from "../components/sections/Statistics";
import CTA from "../components/sections/CTA";

export default function Industries() {
  useEffect(() => {
    document.title = "Industries We Serve — SpanNext";
  }, []);

  return (
    <>
      <Hero
        eyebrow="Industries We Serve"
        title="Domain expertise that goes"
        highlight="beyond generic software"
        description="We've shipped production systems across regulated and high-stakes industries — healthcare, finance, retail, and more — each with its own compliance demands and operational realities."
        floatingIcons={["HeartPulse", "Landmark", "Factory", "Truck"]}
        stats={[
          { value: "8", label: "Core Industries" },
          { value: "240+", label: "Projects Delivered" },
          { value: "6", label: "Countries Served" },
          { value: "12+", label: "Years of Delivery" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Industries" }]} />
      </div>

      <IndustryQuickNav />
      <IndustryDetailGrid />
      <Statistics />
      <CTA
        title="Don't see your industry listed?"
        description="We've worked across dozens of verticals beyond these eight — tell us about your business and we'll show you what's possible."
        primaryLabel="Discuss Your Project"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
