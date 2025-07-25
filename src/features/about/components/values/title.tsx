// #############################################################################
// # Imports
// #############################################################################

// src
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Title() {
  return (
    <h3 className={cn("relative", "lg:flex lg:items-center lg:gap-4")}>
      {/* ################################ */}
      {/* # title                          */}
      {/* ################################ */}

      <span className="text-fluid-30-48 shrink-0">Thirdline Studio Values</span>

      {/* ################################ */}
      {/* # Line (viewport < 1024)         */}
      {/* ################################ */}

      <span
        className={cn(
          "bg-primary-500 absolute -top-2 left-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full",
          "lg:hidden",
        )}
      />

      {/* ################################ */}
      {/* # Line (viewport >= 1024)        */}
      {/* ################################ */}

      <span
        className={cn(
          "hidden",
          "lg:bg-primary-500 lg:block lg:h-1 lg:w-full lg:rounded-full",
        )}
      />
    </h3>
  );
}
