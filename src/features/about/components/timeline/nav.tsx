// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

// src
import { TIMELINE as DATA } from "@/features/about/data";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type NavProps = {
  activeYear: number;
  onYearClick: (index: number) => void;
};

// #############################################################################
// # Components
// #############################################################################

export default function Nav({ activeYear, onYearClick }: NavProps) {
  return (
    <nav className="border-border-dark flex justify-between border-b-2 pb-4">
      {/* ################################ */}
      {/* # Years                          */}
      {/* ################################ */}

      <ul className="flex gap-4">
        {DATA.map(({ year }, index) => (
          <li key={index}>
            <button
              type="button"
              className={cn(
                "cursor-pointer border-b-2 pb-2",
                index === activeYear
                  ? "text-primary-500 border-border"
                  : "text-text-darker hover:text-text border-transparent",
              )}
              onClick={() => onYearClick(index)}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>

      {/* ################################ */}
      {/* # Navigation Buttons             */}
      {/* ################################ */}

      <div className="flex gap-4">
        <button
          type="button"
          disabled={activeYear === 0}
          className="prev hover:text-hover disabled:text-text-darker cursor-pointer"
        >
          <CircleChevronLeft />
        </button>

        <button
          type="button"
          disabled={activeYear === 4}
          className="next hover:text-hover disabled:text-text-darker cursor-pointer"
        >
          <CircleChevronRight />
        </button>
      </div>
    </nav>
  );
}
