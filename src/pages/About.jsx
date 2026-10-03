import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CompanyStory from "../components/sections/CompanyStory";
import MissionVision from "../components/sections/MissionVision";
import CoreValues from "../components/sections/CoreValues";
import CompanyTimeline from "../components/sections/CompanyTimeline";
import Statistics from "../components/sections/Statistics";
import Leadership from "../components/sections/Leadership";
import CTA from "../components/sections/CTA";

export default function About() {
  useEffect(() => {
    document.title = "About Us — SpanNext";
  }, []);

  return (
    <>
      <Hero
        eyebrow="About SpanNext"
        title="An engineering studio built for"
        highlight="enterprise complexity"
        description="Since 2013, we've partnered with enterprise and mid-market teams to design and ship software that actually fits — staffed entirely by senior engineers who stay through launch and beyond."
        floatingIcons={["Building2", "Users2", "Globe2", "Award"]}
        stats={[
          { value: "12+", label: "Years Building" },
          { value: "240+", label: "Projects Delivered" },
          { value: "6", label: "Countries Served" },
          { value: "4", label: "Global Offices" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <CompanyTimeline />
      <Statistics />
      <Leadership />
      <CTA
        title="Want to work with a team like ours?"
        description="We're always looking for ambitious projects and a few great engineers to join us. Let's talk."
        primaryLabel="Start a Project"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
