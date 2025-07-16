// #############################################################################
// # Imports
// #############################################################################

// src
import { DETAILS as DATA } from "@/features/root/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Details() {
  return (
    <ul className={cn("flex flex-col gap-8", "lg:shrink-0 lg:gap-0")}>
      {DATA.map(({ q, a }, index) => (
        <li
          key={index}
          className={cn(
            "border-border-dark border-r-2 pr-4",
            "lg:flex lg:flex-col lg:border-none lg:pr-0",
          )}
        >
          {/* ################################ */}
          {/* # Details                        */}
          {/* ################################ */}

          <div className="flex flex-col gap-2">
            <p className="text-xl">{q}</p>

            <p className="text-text-darker">{a}</p>
          </div>

          {/* ################################ */}
          {/* # Divider                        */}
          {/* ################################ */}

          {index != DATA.length - 1 && (
            <div
              className={cn(
                "hidden",
                "lg:bg-divider-dark lg:my-8 lg:block lg:h-0.5 lg:w-2/3",
              )}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
