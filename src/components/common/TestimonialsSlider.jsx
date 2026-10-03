import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon from "./Icon";
import { img } from "../../utils/image";

/**
 * TestimonialsSlider
 * ----------------------------------------------------------------------------
 * Reusable Swiper.js carousel of client review cards. Used on the
 * Testimonials page. Independent from components/sections/Testimonials.jsx
 * (the single-quote fade slider used elsewhere on the site) so that page
 * keeps its existing look untouched.
 *
 *   <TestimonialsSlider items={reviews} />
 */
export default function TestimonialsSlider({ items = [] }) {
  return (
    <div className="testimonials-slider relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        navigation={{
          nextEl: ".testimonials-slider-next",
          prevEl: ".testimonials-slider-prev",
        }}
        pagination={{ clickable: true, el: ".testimonials-slider-pagination" }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.15 },
          1024: { slidesPerView: 2, spaceBetween: 28 },
        }}
        className="!pb-14"
      >
        {items.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="h-full rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-premium hover:border-royal-200 transition-all duration-300 p-7 sm:p-8 flex flex-col">
              <Icon name="Quote" className="w-8 h-8 text-royal-200 mb-4" />
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className={`w-4 h-4 ${
                      i < (t.rating || 5) ? "text-royal-500 fill-royal-500" : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
                <img
                  src={img(t.avatarSeed, 80, 80)}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <div className="font-semibold text-slate-950 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          className="testimonials-slider-prev w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-royal-50 hover:border-royal-300 transition-colors"
          aria-label="Previous testimonials"
        >
          <Icon name="ChevronLeft" className="w-5 h-5 text-slate-600" />
        </button>
        <div className="testimonials-slider-pagination !static !w-auto flex items-center gap-2" />
        <button
          className="testimonials-slider-next w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-royal-50 hover:border-royal-300 transition-colors"
          aria-label="Next testimonials"
        >
          <Icon name="ChevronRight" className="w-5 h-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}
