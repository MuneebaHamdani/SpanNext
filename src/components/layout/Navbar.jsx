import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, ctaNav, accountingCtaNav } from "../../data/navigation";
import MegaMenu from "./MegaMenu";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // label of open desktop menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Sticky shadow/background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isGroupActive = (item) => {
    const subItems = item.megaMenu || item.dropdown;
    if (!subItems) return location.pathname === item.path;
    return subItems.some((s) => location.pathname === s.path);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-nav border-b border-slate-100"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group shrink-0">
            <img
              src="/images/logo.png"
              alt="SpanNext"
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {primaryNav.map((item) => {
              const subItems = item.megaMenu || item.dropdown;
              const active = isGroupActive(item);
              const isCaseStudies = item.label === "Case Studies";

              if (subItems) {
                const isOpen = openMenu === item.label;
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu((prev) => (prev === item.label ? null : item.label))
                      }
                      className={`flex items-center gap-1.5 rounded-lg px-4 py-2 whitespace-nowrap leading-none transition-colors ${
                        isCaseStudies
                          ? "text-base font-medium tracking-tight"
                          : "text-sm font-medium tracking-normal"
                      } ${
                        active
                          ? "text-royal-600 bg-royal-50"
                          : "text-slate-600 hover:text-royal-600 hover:bg-royal-50/60"
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen &&
                        (item.megaMenu ? (
                          <MegaMenu items={item.megaMenu} />
                        ) : (
                          <DropdownMenu items={item.dropdown} />
                        ))}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 whitespace-nowrap leading-none transition-colors ${
                      isCaseStudies
                        ? "text-base font-medium tracking-tight"
                        : "text-sm font-medium tracking-normal"
                    } ${
                      isActive
                        ? "text-royal-600 bg-royal-50"
                        : "text-slate-600 hover:text-royal-600 hover:bg-royal-50/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <NavLink
              to={accountingCtaNav.path}
              className="hidden lg:inline-flex items-center rounded-lg bg-royal-gradient px-5 py-2.5 text-base font-semibold leading-none tracking-tight text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              {accountingCtaNav.label}
            </NavLink>
            <NavLink
              to={ctaNav.path}
              className="hidden lg:inline-flex items-center rounded-lg bg-royal-gradient px-5 py-2.5 text-base font-semibold leading-none tracking-tight text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              {ctaNav.label}
            </NavLink>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-50"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
