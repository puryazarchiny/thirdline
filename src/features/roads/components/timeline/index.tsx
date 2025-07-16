"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { useEffect, useRef } from "react";

// src
import Container from "@/components/layout/container";
import A from "@/components/ui/a";
import { TIMELINE as DATA } from "@/features/roads/data";
import { cn } from "@/utils";

import Circle from "./circle";
import Description from "./description";
import Progress from "./progress";
import Title from "./title";

// #############################################################################
// # Components
// #############################################################################

export default function Timeline() {
  // ################################
  // # Refs
  // ################################

  const timelineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // ################################
  // # Effects
  // ################################

  useEffect(() => {
    const timeline = timelineRef.current;
    const progressBar = progressBarRef.current;

    if (!timeline || !progressBar) return;

    const handleScroll = () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = timeline.offsetHeight;

      // Calculate progress based on timeline position
      const startOffset = windowHeight * 0.5; // Start when timeline center hits middle of screen
      const scrolled = startOffset - rect.top;
      const totalScrollDistance = timelineHeight + startOffset;

      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));

      // Apply progress to the progress bar
      progressBar.style.transform = `translateY(${-100 + progress * 100}%)`;
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ################################
  // # JSX
  // ################################

  return (
    <section className="py-section">
      <Container>
        <div ref={timelineRef} className="relative">
          <Progress ref={progressBarRef} />

          <ul className={cn("flex flex-col gap-32 pt-32 pr-6", "lg:gap-64")}>
            {DATA.map(
              ({ number, title, subTitle, description, href, text }, index) => (
                <li
                  key={index}
                  className={cn(
                    "timeline-item grid grid-cols-1 gap-y-2",
                    "lg:grid-cols-2 lg:gap-x-64 lg:gap-y-0",
                  )}
                >
                  <Circle />

                  <Title number={number} title={title} subTitle={subTitle} />

                  <div className="flex flex-col items-start gap-8">
                    <Description description={description} />

                    <A href={href}>{text}</A>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}
