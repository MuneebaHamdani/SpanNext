import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../components/common/Icon";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";
import GradientBlobs from "../../components/common/GradientBlobs";
import CTA from "../../components/sections/CTA";
import { getServiceBySlug, allServices, categoryMeta } from "../../data/services";
import { serviceImg } from "../../utils/image";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const category = categoryMeta[service.category]?.label ?? "Services";
  const categoryPath = categoryMeta[service.category]?.path ?? "/";
  const siblings = allServices
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
        <GradientBlobs variant="dark" />
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-slate-300 [&_a:hover]:text-royal-300 [&_span]:text-white mb-10">
            <Breadcrumbs
              items={[
                { label: category, to: categoryPath },
                { label: service.title },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/10 text-royal-200 border border-white/20 mb-6">
                <Icon name={service.icon} className="w-4 h-4" />
                {category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" icon="ArrowRight">
                  Get a Proposal
                </Button>
                <Button variant="outline" size="lg" icon="ArrowLeft" as="a">
                  <Link to={categoryPath} className="contents">
                    Back to {category}
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-premium-dark ring-1 ring-white/10">
                <img
                  src={serviceImg(service, 900, 700)}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-dark rounded-2xl p-5 shadow-premium-dark w-52">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-royal-gradient flex items-center justify-center">
                    <Icon name={service.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {service.technologies.length}+ Tools
                    </div>
                    <div className="text-xs text-slate-400">Integrated stack</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title={`What's included with ${service.title}`}
            description="Every engagement is scoped around these core capabilities, then tailored to your specific requirements."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl border border-slate-100 hover:border-royal-200 hover:shadow-premium transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-4">
                  <Icon name="Check" className="w-5 h-5 text-royal-600" />
                </div>
                <h3 className="font-display font-semibold text-slate-950 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-royal-50/40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                align="left"
                eyebrow="Benefits"
                title="Why it matters to your business"
                description={`The measurable upside teams see after adopting ${service.title.toLowerCase()}.`}
              />
            </motion.div>
            <div className="flex flex-col gap-4">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-royal-100 shadow-sm"
                >
                  <div className="shrink-0 w-9 h-9 rounded-full bg-royal-gradient flex items-center justify-center">
                    <Icon name="TrendingUp" className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-950 text-sm mb-1">
                      {b.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technologies"
            title="The stack behind this service"
            description="Chosen for fit, reliability, and long-term maintainability — not novelty."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 hover:border-royal-300 hover:shadow-premium transition-all duration-300 bg-white"
              >
                <span className="w-2 h-2 rounded-full bg-royal-500" />
                <span className="font-medium text-slate-800">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-30" aria-hidden="true" />
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            light
            eyebrow="Use Cases"
            title="Where this creates real value"
            description="A sample of the problems this service is most often brought in to solve."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-royal-500/20 flex items-center justify-center text-royal-300 font-bold font-display">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5">{u.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{u.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related Services"
            title={`More from ${category}`}
            description="Explore adjacent capabilities frequently paired with this service."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {siblings.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-100 hover:border-royal-200 hover:shadow-premium transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={serviceImg(s, 500, 300)}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-950 mb-1">{s.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-3">{s.shortDesc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 group-hover:gap-2.5 transition-all">
                      Explore
                      <Icon name="ArrowRight" className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to talk through your ${service.title} project?`}
        description="We'll scope the problem, recommend an approach, and give you a realistic timeline — no pressure, no jargon."
      />
    </>
  );
}
