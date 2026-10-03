import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import Card from "../components/common/Card";
import Tabs from "../components/common/Tabs";
import Icon from "../components/common/Icon";
import CTA from "../components/sections/CTA";
import { img } from "../utils/image";
import { caseStudies } from "../data/caseStudies";

const stageTabs = [
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
];

function CaseStudyBlock({ study, index }) {
  const [stage, setStage] = useState("challenge");
  const reversed = index % 2 !== 0;

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/3]">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
            src={img(study.image, 800, 600)}
            alt={study.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white/90 text-royal-700">
              {study.industry}
            </span>
            <span className="text-xs font-medium text-white/90">{study.year}</span>
          </div>
        </div>
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 mb-4">
          {study.client}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 leading-tight mb-4">
          {study.title}
        </h3>

        <Tabs
          tabs={stageTabs}
          active={stage}
          onChange={setStage}
          className="mb-6"
          layoutId={`case-study-tabs-${study.slug}`}
        />

        <div className="min-h-[220px]">
          {stage === "challenge" && (
            <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
          )}

          {stage === "solution" && (
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">{study.solution}</p>
              <ul className="flex flex-col gap-2.5">
                {study.solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Icon
                      name="CheckCircle2"
                      className="w-4 h-4 text-royal-600 mt-0.5 shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {stage === "results" && (
            <div className="grid grid-cols-2 gap-4">
              {study.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl bg-royal-50/70 border border-royal-100 p-4"
                >
                  <div className="text-2xl font-bold text-royal-700 font-display">
                    {r.value}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {study.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-royal-50 to-white border border-royal-100 p-5 flex items-start gap-4">
          <Icon name="Quote" className="w-6 h-6 text-royal-300 shrink-0 mt-1" />
          <div>
            <p className="text-sm text-slate-700 italic leading-relaxed mb-3">
              "{study.quote.text}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={img(study.quote.avatarSeed, 64, 64)}
                alt={study.quote.name}
                loading="lazy"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <div>
                <div className="text-sm font-semibold text-slate-950">
                  {study.quote.name}
                </div>
                <div className="text-xs text-slate-500">{study.quote.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  useEffect(() => {
    document.title = "Case Studies — SpanNext";
  }, []);

  return (
    <>
      <Hero
        eyebrow="Case Studies"
        title="The full story behind"
        highlight="the results we deliver"
        description="A deeper look at the challenges, solutions, and measurable outcomes from four recent enterprise engagements."
        floatingIcons={["FileText", "TrendingUp", "Target", "CheckCircle2"]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Case Studies" }]} />
      </div>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Deep Dives"
            title="Challenge, solution, results"
            description="Every engagement below follows the same structure — what the client was up against, what we built, and what changed because of it."
          />

          <div className="mt-16 flex flex-col gap-20 sm:gap-28">
            {caseStudies.map((study, i) => (
              <Card key={study.slug} hover={false} padding="lg">
                <CaseStudyBlock study={study} index={i} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want results like these on your project?"
        description="Tell us what you're working with and we'll map the path from challenge to measurable outcome."
      />
    </>
  );
}
