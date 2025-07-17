// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { type Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// src
import { TIMELINE as DATA } from "@/features/about/data";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type SliderProps = {
  activeYear: number;
  onActiveYear: (index: number) => void;
  onSwiperRef: (swiper: SwiperType | null) => void;
};

// #############################################################################
// # Components
// #############################################################################

export default function Slider({
  activeYear,
  onActiveYear,
  onSwiperRef,
}: SliderProps) {
  return (
    <Swiper
      breakpoints={{
        384: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
      onSwiper={onSwiperRef}
      onSlideChange={(swiper) => onActiveYear(swiper.activeIndex)}
    >
      {DATA.map(({ year, details }, index) => (
        <SwiperSlide key={index}>
          <div
            className={cn(
              "border-border flex h-[576px] flex-col justify-between p-4",
              index < 5 && "border-l-2",
              "lg:h-[640px]",
            )}
          >
            {/* ################################ */}
            {/* # Year                           */}
            {/* ################################ */}

            <p
              className={cn(
                "-translate-x-4 translate-y-8 rotate-90 self-start text-5xl",
                index === activeYear && "text-primary-500",
              )}
            >
              {year}
            </p>

            {/* ################################ */}
            {/* # Events                         */}
            {/* ################################ */}

            <ul className="flex flex-col gap-2">
              {details.map(({ month, event }, index) => (
                <li key={index}>
                  <h2 className="font-bold">{month}</h2>

                  <p className="text-text-dark text-sm">{event}</p>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
