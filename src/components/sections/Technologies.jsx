import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { coreTechnologies } from "../../data/services";

export default function Technologies() {
  const loopItems = [...coreTechnologies, ...coreTechnologies];

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Toolkit"
          title="Modern technologies, chosen deliberately"
          description="No trend-chasing — each tool below earns its place through fit for the problem, not hype."
        />
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {loopItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 px-8 py-5 mx-2 rounded-2xl border border-slate-100 bg-white shadow-sm shrink-0"
            >
              <div className="w-9 h-9 rounded-lg bg-royal-50 flex items-center justify-center">
                <Icon name={tech.icon} className="w-5 h-5 text-royal-600" />
              </div>
              <span className="font-medium text-slate-700 whitespace-nowrap text-sm sm:text-base">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
