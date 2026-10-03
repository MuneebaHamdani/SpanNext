import Icon from "./Icon";

/**
 * SearchBar
 * ----------------------------------------------------------------------------
 * Generic reusable search input with a leading icon and a clear button.
 * Used on Blog and FAQ pages.
 *
 *   <SearchBar value={query} onChange={setQuery} placeholder="Search articles..." />
 */
export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <Icon
        name="Search"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white pl-11 pr-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:bg-royal-50 hover:text-royal-600 transition-colors"
        >
          <Icon name="X" className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
