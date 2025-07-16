// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { Image as IMG } from "lucide-react";

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type PictureProps = {
  className?: string;
};

// #############################################################################
// # Components
// #############################################################################

export default function Picture({ className }: PictureProps) {
  return (
    <section className="py-section">
      <Container>
        <div
          className={cn(
            "bg-body-lighter flex h-80 items-center justify-center rounded-lg",
            "lg:h-[448px]",
            className,
          )}
        >
          <IMG size={64} />
        </div>
      </Container>
    </section>
  );
}
