import { motion } from "framer-motion";
import Icon from "../common/Icon";
import SectionHeading from "../common/SectionHeading";
import { offices } from "../../data/contact";

export default function OfficeCards() {
  return (
    <section id="offices" className="py-20 sm:py-28 bg-royal-50/40">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Offices"
          title="Find us in New York & Dubai"
          description="Our headquarters in Lower Manhattan, plus our Dubai office on Sheikh Zayed Road — one senior-only engineering standard."
        />

        <div className="mt-16 grid grid-cols-1 max-w-5xl mx-auto gap-6">
          {offices.map((office, i) => {
            const hasDetails =
              (office.access && office.access.length > 0) ||
              (office.building && office.building.length > 0);

            return (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`relative bg-white border border-royal-100 rounded-2xl hover:shadow-premium transition-all duration-300 ${
                  hasDetails
                    ? "grid sm:grid-cols-2 gap-8 p-6 sm:p-10"
                    : "p-6 sm:p-7"
                }`}
              >
                {office.isHQ && (
                  <span className="absolute -top-3 left-6 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-royal-gradient text-white shadow-glow">
                    HQ
                  </span>
                )}

                <div className={`flex flex-col ${hasDetails ? "" : "max-w-md"}`}>
                  <div className={`w-12 h-12 rounded-xl bg-royal-gradient flex items-center justify-center shadow-glow ${hasDetails ? "mb-5" : "mb-4"}`}>
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-950">
                    {office.city}
                  </h3>
                  <p className={`text-sm text-royal-600 font-medium ${hasDetails ? "mb-4" : "mb-3"}`}>{office.country}</p>

                  <ul className={`flex flex-col text-sm text-slate-600 ${hasDetails ? "gap-3 mt-auto" : "gap-2.5"}`}>
                    <li className="flex items-start gap-2.5">
                      <Icon name="Building2" className="w-4 h-4 text-royal-400 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Icon name="Phone" className="w-4 h-4 text-royal-400 shrink-0" />
                      <span>{office.phone}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Icon name="Mail" className="w-4 h-4 text-royal-400 shrink-0" />
                      {office.emailHref ? (
                        <a href={office.emailHref} className="break-all hover:text-royal-600 transition-colors">
                          {office.email}
                        </a>
                      ) : (
                        <span className="break-all">{office.email}</span>
                      )}
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon name="Clock" className="w-4 h-4 text-royal-400 shrink-0 mt-0.5" />
                      <span>{office.hours}</span>
                    </li>
                  </ul>
                </div>

                {hasDetails && (
                  <div className="flex flex-col gap-6 sm:border-l sm:border-royal-100 sm:pl-8">
                    {office.access && office.access.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-royal-600 mb-3">
                          <Icon name="Navigation" className="w-4 h-4" />
                          Access
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm text-slate-600">
                          {office.access.map((line) => (
                            <li key={line} className="flex items-start gap-2.5">
                              <Icon name="ArrowRight" className="w-3.5 h-3.5 text-royal-400 shrink-0 mt-1" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {office.building && office.building.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-royal-600 mb-3">
                          <Icon name="Building2" className="w-4 h-4" />
                          Building
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm text-slate-600">
                          {office.building.map((line) => (
                            <li key={line} className="flex items-start gap-2.5">
                              <Icon name="ArrowRight" className="w-3.5 h-3.5 text-royal-400 shrink-0 mt-1" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
