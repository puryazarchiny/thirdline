// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { Image as IMG } from "lucide-react";

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Images() {
  const createImages = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className={cn(
          "bg-body-lighter flex h-80 items-center justify-center rounded-lg",
          "sm:h-96",
          "lg:h-[512px]",
        )}
      >
        <IMG size={64} />
      </div>
    ));
  };

  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-8">
          <div
            className={cn(
              "grid grid-cols-1 gap-8",
              "sm:grid-cols-2",
              "lg:grid-cols-[3fr_2fr]",
            )}
          >
            {createImages(2)}
          </div>

          <div
            className={cn(
              "grid grid-cols-1 gap-8",
              "sm:grid-cols-2",
              "lg:grid-cols-3",
            )}
          >
            {createImages(3)}
          </div>
        </div>
      </Container>
    </section>
  );
}
