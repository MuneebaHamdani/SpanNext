import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import Card from "../components/common/Card";
import Tabs from "../components/common/Tabs";
import Modal from "../components/common/Modal";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import { img } from "../utils/image";
import { portfolioCategories, portfolioProjects } from "../data/portfolio";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.title = "Portfolio — SpanNext";
  }, []);

  const featured = portfolioProjects.filter((p) => p.featured);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Hero
        eyebrow="Our Work"
        title="Projects that moved the numbers"
        highlight="that actually mattered"
        description="A selection of AI, CRM, ERP, and web platforms we've designed and shipped for enterprise and mid-market teams — with the real, measurable outcomes behind each one."
        floatingIcons={["LayoutGrid", "Sparkles", "TrendingUp", "Code2"]}
        stats={[
          { value: "240+", label: "Projects Delivered" },
          { value: "85+", label: "Enterprise Clients" },
          { value: "6", label: "Countries Served" },
          { value: "4.9/5", label: "Avg. Client Rating" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Portfolio" }]} />
      </div>

      {/* Featured Projects */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Projects"
            title="A closer look at recent flagship builds"
            description="Three engagements that show the range of problems we solve — from AI automation to CRMs built around a real workflow."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6 sm:gap-8">
            {featured.map((project) => (
              <Card key={project.slug} padding="none" className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img(project.image, 700, 525)}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white/90 text-royal-700">
                    {project.industry}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-2xl font-bold text-white font-display">
                      {project.metric.value}
                    </div>
                    <div className="text-xs text-slate-200">{project.metric.label}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-950 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-royal-50 text-royal-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:text-royal-800 transition-colors"
                  >
                    View Details
                    <Icon name="ArrowUpRight" className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + Gallery */}
      <section className="py-16 sm:py-24 bg-royal-50/40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Full Gallery"
            title="Browse by capability"
            description="Filter the full portfolio by the type of platform we built."
          />

          <div className="mt-10 flex justify-center">
            <Tabs
              tabs={portfolioCategories.map((c) => ({ id: c.id, label: c.label }))}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <motion.div
            layout
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card padding="none" className="overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={img(project.image, 600, 450)}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-2"
                        >
                          <Icon name="Eye" className="w-4 h-4" />
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="text-xs font-semibold text-royal-600 uppercase tracking-wide mb-1.5">
                        {project.industry} · {project.year}
                      </span>
                      <h3 className="font-bold text-slate-950 leading-snug mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
                        {project.summary}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 mt-12">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </section>

      <Testimonials />

      <CTA
        title="Have a project like these in mind?"
        description="Tell us where you're starting from and we'll map out how we'd approach it."
      />

      {/* Project detail modal */}
      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title}
        size="lg"
      >
        {activeProject && (
          <div>
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {activeProject.gallery.map((seed, i) => (
                <div key={seed} className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src={img(seed, 400, 300)}
                    alt={`${activeProject.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 mb-5">
              <span className="flex items-center gap-1.5">
                <Icon name="Building2" className="w-4 h-4" /> {activeProject.client}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Layers" className="w-4 h-4" /> {activeProject.industry}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Calendar" className="w-4 h-4" /> {activeProject.year}
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed mb-5">{activeProject.summary}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-royal-50 text-royal-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="rounded-2xl bg-royal-50/60 border border-royal-100 p-5 flex items-center gap-4 mb-6">
              <div className="text-2xl font-bold text-royal-700 font-display">
                {activeProject.metric.value}
              </div>
              <div className="text-sm text-slate-600">{activeProject.metric.label}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {activeProject.caseStudySlug ? (
                <Button to="/case-studies" fullWidthMobile={false} icon="ArrowRight">
                  Read the Full Case Study
                </Button>
              ) : (
                <Button to="/contact" fullWidthMobile={false} icon="ArrowRight">
                  Discuss a Similar Project
                </Button>
              )}
              <Button
                variant="secondary"
                fullWidthMobile={false}
                onClick={() => setActiveProject(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
