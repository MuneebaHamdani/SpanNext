import { motion } from "framer-motion";

/**
 * PagePlaceholder
 * ----------------------------------------------------------------------------
 * Temporary content for every route. Each page file in /src/pages renders
 * this component with its own `title`. When a developer is ready to build
 * out the real page, they replace the contents of THEIR page file only -
 * the Navbar, routing and other pages are never touched.
 *
 * Example (src/pages/Home.jsx):
 *
 *   export default function Home() {
 *     return <PagePlaceholder title="Home Page" />;
 *   }
 *
 * Just delete the PagePlaceholder usage above and build the real page.
 */
export default function PagePlaceholder({ title, subtitle }) {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-xl"
      >
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-royal-600 uppercase mb-4">
          Placeholder
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mb-4">
          {title}
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          {subtitle ||
            "This page is scaffolded and ready for development. Replace this component with the real design."}
        </p>
        <div className="mt-8 h-1 w-16 bg-royal-gradient rounded-full mx-auto" />
      </motion.div>
    </section>
  );
}
