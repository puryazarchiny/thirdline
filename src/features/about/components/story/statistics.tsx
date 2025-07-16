// #############################################################################
// # Imports
// #############################################################################

// src
import CountUp from "@/components/ui/count-up";
import { STORY as DATA } from "@/features/about/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Statistics() {
  return (
    <ul className={cn("flex justify-center", "lg:flex-col")}>
      {DATA[1].map(({ count, text }, index) => (
        <li key={index} className={cn("flex items-center", "lg:flex-col")}>
          <div className="flex flex-col items-center">
            {/* ################################ */}
            {/* # Count                          */}
            {/* ################################ */}

            <CountUp end={count} />

            {/* ################################ */}
            {/* # Text (viewport < 1024)         */}
            {/* ################################ */}

            <p
              className={cn(
                "text-fluid-12-20 flex flex-col text-center",
                "lg:hidden",
              )}
            >
              <span className="text-text-darker">{text[1]}</span>

              <span className="text-text-darker">{text[2]}</span>
            </p>

            {/* ################################ */}
            {/* # Text (viewport >= 1024)        */}
            {/* ################################ */}

            <p
              className={cn(
                "hidden",
                "text-text-darker lg:block lg:text-center lg:text-xl",
              )}
            >
              {text[0]}
            </p>
          </div>

          {/* ################################ */}
          {/* # Divider                        */}
          {/* ################################ */}

          {index != DATA[1].length - 1 && (
            <div
              className={cn(
                "bg-divider-dark mx-4 h-2/3 w-0.5",
                "lg:mx-0 lg:my-8 lg:h-0.5 lg:w-2/3",
              )}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
