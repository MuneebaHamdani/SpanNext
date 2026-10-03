import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-royal-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.to ? (
              <Link
                to={item.to}
                className="hover:text-royal-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-950 font-medium">{item.label}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
