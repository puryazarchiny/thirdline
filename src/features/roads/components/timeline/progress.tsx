// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { RefObject } from "react";

// src
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type ProgressProps = {
  ref: RefObject<HTMLDivElement | null>;
};

// #############################################################################
// # Components
// #############################################################################

export default function Progress({ ref }: ProgressProps) {
  return (
    <div
      className={cn(
        "absolute right-0 h-full w-1 translate-x-1/2 overflow-hidden bg-neutral-50",
        "lg:right-auto lg:left-1/2 lg:-translate-x-1/2",
      )}
    >
      <div ref={ref} className="bg-primary-500 h-full" />
    </div>
  );
}
