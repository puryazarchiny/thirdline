"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { useState } from "react";
import { type Swiper as SwiperType } from "swiper";

// src
import Container from "@/components/layout/container";

import Nav from "./nav";
import Slider from "./slider";

// #############################################################################
// # Components
// #############################################################################

export default function Timeline() {
  const [activeYear, setActiveYear] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const handleActiveYear = (index: number) => {
    setActiveYear(index);
  };

  const handleSwiperRef = (swiper: SwiperType | null) => {
    setSwiperRef(swiper);
  };

  const handleYearClick = (index: number) => {
    setActiveYear(index);
    swiperRef?.slideTo(index);
  };

  return (
    <section className="py-section bg-body-light">
      <Container>
        <div className="flex flex-col gap-4">
          <Nav activeYear={activeYear} onYearClick={handleYearClick} />

          <Slider
            activeYear={activeYear}
            onActiveYear={handleActiveYear}
            onSwiperRef={handleSwiperRef}
          />
        </div>
      </Container>
    </section>
  );
}
