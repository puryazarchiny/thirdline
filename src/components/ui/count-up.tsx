"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { useEffect, useRef, useState } from "react";

// src
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type CountUpProps = {
  end: number;
};

// #############################################################################
// # Components
// #############################################################################

export default function CountUp({ end }: CountUpProps) {
  const DURATION = 1500;

  // ################################
  // # States
  // ################################

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // ################################
  // # Refs
  // ################################

  const countRef = useRef<HTMLParagraphElement>(null);

  // ################################
  // # Effects
  // ################################

  // Scroll Trigger
  useEffect(() => {
    const count = countRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.1, // 10% visible
      },
    );

    if (count) {
      observer.observe(count);
    }

    return () => {
      if (count) {
        observer.unobserve(count);
      }
    };
  }, [hasStarted]);

  // Count-Up
  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    let animationFrame: number;
    const increment = end / (DURATION / 16); // 60fps (~16ms per frame)

    const updateCounter = () => {
      start += increment;

      if (start < end) {
        setCount(Math.floor(start));
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
        cancelAnimationFrame(animationFrame);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, hasStarted]);

  // ################################
  // # JSX
  // ################################

  return (
    <p
      ref={countRef}
      className={cn(
        "w-20 text-center font-mono text-4xl",
        "lg:w-auto lg:text-6xl",
      )}
    >
      +{count}
    </p>
  );
}
