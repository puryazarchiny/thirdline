// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type TitleProps = {
  title: string;
  description: string;
};

// #############################################################################
// # Components
// #############################################################################

export default function Title({ title, description }: TitleProps) {
  return (
    <header className="py-section">
      <Container>
        <hgroup
          className={cn(
            "flex flex-col gap-4",
            "lg:flex-row lg:items-center lg:justify-between",
          )}
        >
          <h2 className="text-fluid-36-60">{title}</h2>

          <p className="text-text-darker max-w-96 shrink-0">{description}</p>
        </hgroup>
      </Container>
    </header>
  );
}
