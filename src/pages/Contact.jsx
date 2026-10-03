import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ContactForm from "../components/sections/ContactForm";
import OfficeCards from "../components/sections/OfficeCards";
import FAQAccordion from "../components/sections/FAQAccordion";
import { contactFaqs } from "../data/contact";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us — SpanNext";
  }, []);

  return (
    <>
      <Hero
        eyebrow="Contact Us"
        title="Let's build something"
        highlight="worth shipping"
        description="Whether you have a scoped project or just an idea you're testing, our team responds within one business day with real next steps."
        floatingIcons={["MessageSquare", "Mail", "Phone", "Calendar"]}
        primaryCta={{ label: "Send a Message", icon: "Send", to: "#contact-form" }}
        secondaryCta={{ label: "View Offices", icon: "MapPin", to: "#offices" }}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <ContactForm />
      <OfficeCards />
      <FAQAccordion items={contactFaqs} />
    </>
  );
}
