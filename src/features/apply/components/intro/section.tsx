// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { Image as IMG } from "lucide-react";

// src
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type SectionProps = {
  title: string;
  description: string[];
  textDirection: "left" | "right";
  imageDirection: "left" | "right";
};

// #############################################################################
// # Components
// #############################################################################

export default function Section({
  title,
  description,
  textDirection,
  imageDirection,
}: SectionProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-y-16",
        "lg:grid-cols-2 lg:gap-x-16",
        "xl:gap-x-0",
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          textDirection === "left" && "lg:order-last",
        )}
      >
        {/* ################################ */}
        {/* # Title                          */}
        {/* ################################ */}

        <h3 className="relative">
          <span className="text-fluid-30-48">{title}</span>

          <span className="bg-primary-500 absolute -top-2 right-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full" />
        </h3>

        {/* ################################ */}
        {/* # Description                    */}
        {/* ################################ */}

        <div className="text-text-dark flex flex-col gap-2 text-justify">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* ################################ */}
      {/* # Image                          */}
      {/* ################################ */}

      <div
        className={cn(
          "bg-body-lighter flex h-80 w-full max-w-[448px] items-center justify-center justify-self-center rounded-lg",
          "lg:h-96",
          imageDirection === "left"
            ? "lg:justify-self-end"
            : "lg:justify-self-start",
        )}
      >
        <IMG size={64} />
      </div>
    </div>
  );
}
