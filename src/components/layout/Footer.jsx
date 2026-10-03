import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { allServices, categoryMeta } from "../../data/services";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/spannext/",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: Mail,
    href: "mailto:Sales@spannext.com",
    label: "Email",
    external: false,
  },
];

const featuredServices = [
  "generative-ai",
  "custom-crm",
  "sap",
  "web-applications",
  "cybersecurity",
  "devops",
].map((slug) => allServices.find((s) => s.slug === slug)).filter(Boolean);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-40" aria-hidden="true" />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/images/logo-white.png"
                alt="SpanNext"
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              An enterprise engineering studio building AI, CRM, and product
              platforms for teams that can't afford to ship something generic.
            </p>
            <a
              href="mailto:Sales@spannext.com"
              className="inline-flex items-center gap-2 mt-4 text-sm text-slate-400 hover:text-royal-400 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              Sales@spannext.com
            </a>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: SocialIcon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-royal-500 hover:border-royal-500 transition-colors"
                  aria-label={label}
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-royal-400 transition-colors">Services Overview</Link></li>
              {Object.entries(categoryMeta).map(([key, meta]) => (
                <li key={key}>
                  <Link to={meta.path} className="hover:text-royal-400 transition-colors">
                    {meta.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-royal-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-royal-400 transition-colors">About Us</Link></li>
              {/* TEMPORARILY HIDDEN — uncomment to re-enable Careers */}
              {/* <li><Link to="/careers" className="hover:text-royal-400 transition-colors">Careers</Link></li> */}
              <li><Link to="/case-studies" className="hover:text-royal-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-royal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SpanNext. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-royal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-royal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
