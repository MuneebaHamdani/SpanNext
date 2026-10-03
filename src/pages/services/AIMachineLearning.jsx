import Hero from "../../components/sections/Hero";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import ServiceShowcase from "../../components/showcase/ServiceShowcase";
import Technologies from "../../components/sections/Technologies";
import ProcessTimeline from "../../components/sections/ProcessTimeline";
import Statistics from "../../components/sections/Statistics";
import Testimonials from "../../components/sections/Testimonials";
import FAQAccordion from "../../components/sections/FAQAccordion";
import CTA from "../../components/sections/CTA";
import { aiServices } from "../../data/services";

const aiFaqs = [
  {
    q: "Which AI model providers do you work with?",
    a: "We're provider-agnostic — OpenAI, Anthropic's Claude, open-source models via Hugging Face, and cloud-native options like AWS Bedrock and Azure AI, chosen based on your latency, cost, and data residency needs.",
  },
  {
    q: "How do you handle hallucinations in generative AI features?",
    a: "We ground outputs with retrieval-augmented generation, add confidence thresholds, and build human-in-the-loop review for anything customer-facing or high-stakes.",
  },
  {
    q: "Can you fine-tune a model on our proprietary data?",
    a: "Yes. We handle dataset curation, parameter-efficient fine-tuning, and evaluation, and you retain full ownership of the resulting weights.",
  },
  {
    q: "Do you support on-premise or private cloud AI deployment?",
    a: "Yes, for clients with strict data residency or compliance requirements, we deploy models within your own VPC or private cloud rather than relying solely on third-party APIs.",
  },
  {
    q: "How long does a typical AI project take?",
    a: "A focused proof of concept typically takes 4-6 weeks; full production deployment with MLOps pipelines usually runs 10-16 weeks depending on scope.",
  },
];

export default function AIMachineLearning() {
  return (
    <>
      <Hero
        eyebrow="AI & Machine Learning"
        title="AI that ships,"
        highlight="not just demos"
        description="Strategy, custom models, generative AI, computer vision, and everything in between — built to production standards from day one."
        floatingIcons={["BrainCircuit", "Sparkles", "ScanEye", "Bot"]}
        stats={[
          { value: "19", label: "AI Services" },
          { value: "60+", label: "Models Deployed" },
          { value: "98%", label: "Uptime SLA" },
          { value: "4.9/5", label: "Client Rating" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "AI & Machine Learning" }]} />
      </div>

      <ServiceShowcase
        services={aiServices}
        eyebrow="AI & ML Capabilities"
        title="17 AI services, one senior team"
        description="Hover to preview each service. Click through for the full breakdown — features, benefits, technologies, and use cases."
      />

      <Technologies />
      <ProcessTimeline />
      <Statistics />
      <Testimonials />
      <FAQAccordion items={aiFaqs} />
      <CTA
        title="Have an AI use case in mind?"
        description="Tell us what you're trying to solve — we'll tell you honestly whether AI is the right tool, and what it would take to ship it."
        primaryLabel="Start an AI Project"
      />
    </>
  );
}
