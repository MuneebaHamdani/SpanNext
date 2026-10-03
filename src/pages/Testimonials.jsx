import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import Card from "../components/common/Card";
import Icon from "../components/common/Icon";
import TestimonialsSlider from "../components/common/TestimonialsSlider";
import CTA from "../components/sections/CTA";
import { img } from "../utils/image";
import { clientReviews, videoTestimonials, successStories } from "../data/testimonialsPage";

export default function Testimonials() {
  useEffect(() => {
    document.title = "Testimonials — SpanNext";
  }, []);

  return (
    <>
      <Hero
        eyebrow="Client Voices"
        title="Trusted by teams who"
        highlight="can't afford to guess"
        description="Real feedback from the operators, technical leaders, and executives we've partnered with — in their own words."
        floatingIcons={["Quote", "Star", "Users", "Heart"]}
        stats={[
          { value: "4.9/5", label: "Avg. Client Rating" },
          { value: "85+", label: "Enterprise Clients" },
          { value: "96%", label: "Client Retention" },
          { value: "240+", label: "Projects Delivered" },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Testimonials" }]} />
      </div>

      {/* Client Reviews */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Reviews"
            title="What it's like to work with us"
            description="Swipe through reviews from operators and technical leaders across healthcare, logistics, retail, and financial services."
          />

          <div className="mt-14">
            <TestimonialsSlider items={clientReviews} />
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 sm:py-24 bg-royal-50/40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Testimonials"
            title="Hear it directly from our clients"
            description="A closer look at the people behind each engagement, from kickoff to measurable results."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videoTestimonials.map((testimonial, i) => (
              <Card key={testimonial.id} padding="none" className="overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                    src={img(testimonial.thumbnail, 600, 750)}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/5" />
                  <Icon
                    name="Quote"
                    className="absolute top-5 left-5 w-8 h-8 text-white/60"
                    strokeWidth={1.5}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-sm text-slate-100 leading-relaxed mb-5">
                      {testimonial.summary}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={img(testimonial.avatarSeed, 64, 64)}
                        alt={testimonial.name}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white/80 shadow-sm"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-slate-300">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Success Stories"
            title="Results behind the reviews"
            description="Every testimonial above ties back to a measurable outcome. Here's the headline number from each."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, i) => (
              <Card key={story.id} padding="none" className="overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                    src={img(story.image, 500, 500)}
                    alt={story.client}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-2xl font-bold text-white font-display">
                      {story.metric.value}
                    </div>
                    <div className="text-xs text-slate-200 mb-1">{story.metric.label}</div>
                    <div className="text-xs font-semibold text-royal-300 uppercase tracking-wide">
                      {story.client}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to become our next success story?"
        description="Tell us about your project and we'll show you how we'd approach it."
      />
    </>
  );
}
