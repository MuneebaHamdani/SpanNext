import { useEffect, useMemo, useState } from "react";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import Tabs from "../components/common/Tabs";
import SearchBar from "../components/common/SearchBar";
import Accordion from "../components/common/Accordion";
import Icon from "../components/common/Icon";
import Button from "../components/common/Button";
import CTA from "../components/sections/CTA";
import { faqCategories, faqPageItems } from "../data/faqPage";

export default function FAQ() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "FAQ — SpanNext";
  }, []);

  const filtered = useMemo(() => {
    return faqPageItems.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesQuery =
        !query.trim() ||
        item.question.toLowerCase().includes(query.toLowerCase()) ||
        item.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <Hero
        eyebrow="FAQ"
        title="Answers before you"
        highlight="even have to ask"
        description="Common questions about how we work, what we build with, pricing structure, and ongoing support — organized by topic."
        floatingIcons={["HelpCircle", "MessageCircleQuestion", "Search", "CheckCircle2"]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
      </div>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Everything you're probably wondering"
            description="Search or filter by topic. Can't find your answer? Reach out directly and we'll get back to you within a business day."
          />

          <div className="mt-10 flex flex-col items-center gap-5">
            <Tabs
              tabs={faqCategories.map((c) => ({ id: c.id, label: c.label }))}
              active={category}
              onChange={setCategory}
              className="flex justify-center"
            />
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search questions..."
              className="w-full sm:max-w-md"
            />
          </div>

          <div className="mt-12">
            {filtered.length > 0 ? (
              <Accordion items={filtered} defaultOpenId={filtered[0]?.id} />
            ) : (
              <div className="text-center py-16">
                <Icon
                  name="SearchX"
                  className="w-10 h-10 text-royal-200 mx-auto mb-4"
                />
                <p className="text-slate-500 mb-6">
                  No questions match that search yet. Try a different keyword.
                </p>
                <Button
                  variant="secondary"
                  fullWidthMobile={false}
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA
        title="Still have a question?"
        description="Send us a message and a member of our team will get back to you within one business day."
        primaryLabel="Contact Us"
      />
    </>
  );
}
