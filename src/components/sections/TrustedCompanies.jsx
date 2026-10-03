import Icon from "../common/Icon";

const companies = [
  { name: "Meridian Health", icon: "HeartPulse" },
  { name: "Vantage Capital", icon: "Landmark" },
  { name: "Coastline Retail", icon: "ShoppingBag" },
  { name: "Ferro Manufacturing", icon: "Factory" },
  { name: "Northline Logistics", icon: "Truck" },
  { name: "Harborview Realty", icon: "Building" },
  { name: "Brightpath Education", icon: "GraduationCap" },
  { name: "Aurelia Hotels", icon: "Hotel" },
];

export default function TrustedCompanies() {
  const track = [...companies, ...companies];

  return (
    <section
      className="py-14 sm:py-16 bg-white border-b border-slate-100"
      aria-label="Trusted by leading companies"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-400 mb-8">
          Trusted by teams at forward-thinking companies
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {track.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex items-center gap-2.5 mx-6 sm:mx-10 shrink-0 text-slate-400 grayscale hover:grayscale-0 hover:text-royal-600 transition-all duration-300"
            >
              <Icon name={c.icon} className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              <span className="font-display font-semibold text-sm sm:text-base whitespace-nowrap">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
