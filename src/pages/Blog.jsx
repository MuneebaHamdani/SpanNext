import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import Card from "../components/common/Card";
import Tabs from "../components/common/Tabs";
import SearchBar from "../components/common/SearchBar";
import Pagination from "../components/common/Pagination";
import Modal from "../components/common/Modal";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import CTA from "../components/sections/CTA";
import { img } from "../utils/image";
import { blogCategories, blogPosts } from "../data/blog";

const POSTS_PER_PAGE = 6;

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function Blog() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    document.title = "Blog — SpanNext";
  }, []);

  const featured = blogPosts.filter((p) => p.featured);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesQuery =
        !query.trim() ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handleCategoryChange = (id) => {
    setCategory(id);
    setPage(1);
  };

  const handleQueryChange = (val) => {
    setQuery(val);
    setPage(1);
  };

  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Ideas from the engineers"
        highlight="actually shipping the work"
        description="Notes on AI strategy, engineering practice, and product design from the team building enterprise software every day."
        floatingIcons={["Newspaper", "PenLine", "Lightbulb", "BookOpen"]}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Blog" }]} />
      </div>

      {/* Featured Posts */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Posts"
            title="Start here"
            description="Our most-read pieces on strategy, architecture, and the trade-offs behind real engagements."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6 sm:gap-8">
            {featured.map((post, i) => (
              <Card
                key={post.slug}
                padding="none"
                className="overflow-hidden flex flex-col cursor-pointer"
                onClick={() => setActivePost(post)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                    src={img(post.image, 700, 440)}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white/90 text-royal-700">
                    {blogCategories.find((c) => c.id === post.category)?.label}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-slate-950 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + Search + Recent Blogs */}
      <section className="py-16 sm:py-24 bg-royal-50/40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recent Posts"
            title="Browse every article"
            description="Filter by topic or search for something specific."
          />

          <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <Tabs
              tabs={blogCategories.map((c) => ({ id: c.id, label: c.label }))}
              active={category}
              onChange={handleCategoryChange}
            />
            <SearchBar
              value={query}
              onChange={handleQueryChange}
              placeholder="Search articles..."
              className="w-full lg:w-72"
            />
          </div>

          {paginated.length > 0 ? (
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginated.map((post, i) => (
                <Card
                  key={post.slug}
                  padding="none"
                  className="overflow-hidden flex flex-col cursor-pointer"
                  onClick={() => setActivePost(post)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                      src={img(post.image, 600, 375)}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs font-semibold text-royal-600 uppercase tracking-wide mb-2">
                      {blogCategories.find((c) => c.id === post.category)?.label}
                    </span>
                    <h3 className="font-bold text-slate-950 leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 mt-4 border-t border-slate-100">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 mt-16">
              No articles match your search yet. Try a different keyword or category.
            </p>
          )}

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </section>

      <CTA
        title="Want ideas like these applied to your team?"
        description="Tell us what you're building and we'll show you how we'd approach it."
      />

      <Modal
        open={!!activePost}
        onClose={() => setActivePost(null)}
        title={activePost?.title}
        size="lg"
      >
        {activePost && (
          <div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
              <img
                src={img(activePost.image, 900, 506)}
                alt={activePost.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 mb-6">
              <span className="flex items-center gap-1.5">
                <Icon name="User" className="w-4 h-4" /> {activePost.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Calendar" className="w-4 h-4" /> {formatDate(activePost.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Clock" className="w-4 h-4" /> {activePost.readTime}
              </span>
            </div>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {activePost.content}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {activePost.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-royal-50 text-royal-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button
                variant="secondary"
                fullWidthMobile={false}
                onClick={() => setActivePost(null)}
              >
                Close Article
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
