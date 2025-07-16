"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { Image as IMG } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

// src
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Gallery() {
  return (
    <section className="py-section">
      <Swiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          384: {
            slidesPerView: 1.5,
          },
          512: {
            slidesPerView: 1.75,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          896: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3.25,
          },
          1280: {
            slidesPerView: 3.75,
          },
          1536: {
            slidesPerView: 4.75,
          },
        }}
        loop
        modules={[Autoplay]}
        spaceBetween={32}
        speed={3000}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                "bg-body-lighter flex h-80 items-center justify-center rounded-lg",
                "sm:h-96",
                "lg:h-[448px]",
              )}
            >
              <IMG size={64} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
