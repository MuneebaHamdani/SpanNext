import Icon from "./Icon";

/**
 * Pagination
 * ----------------------------------------------------------------------------
 * Generic reusable pagination control used on Blog and Portfolio grids.
 *
 *   <Pagination page={page} totalPages={totalPages} onChange={setPage} />
 */
export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 mt-12 sm:mt-16"
    >
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-royal-50 hover:border-royal-300 transition-colors disabled:opacity-40 disabled:pointer-events-none"
      >
        <Icon name="ChevronLeft" className="w-4 h-4" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
          className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
            p === page
              ? "bg-royal-gradient text-white shadow-glow"
              : "text-slate-600 border border-slate-200 hover:bg-royal-50 hover:border-royal-300"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-royal-50 hover:border-royal-300 transition-colors disabled:opacity-40 disabled:pointer-events-none"
      >
        <Icon name="ChevronRight" className="w-4 h-4" />
      </button>
    </nav>
  );
}
