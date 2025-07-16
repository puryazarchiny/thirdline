// #############################################################################
// # Imports
// #############################################################################

// src
import { STORY as DATA } from "@/features/about/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Description() {
  return (
    <div className={cn("flex flex-col gap-2", "lg:w-3/4")}>
      {DATA[0].map((paragraph, index) => (
        <p key={index} className="text-text-dark text-justify">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
