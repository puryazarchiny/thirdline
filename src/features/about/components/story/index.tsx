// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

import Description from "./description";
import Title from "./title";
import Statistics from "./statistics";

// #############################################################################
// # Components
// #############################################################################

export default function Story() {
  return (
    <section className="py-section">
      <Container>
        <div className={cn("flex flex-col gap-8", "lg:gap-0")}>
          <Title />

          <div
            className={cn(
              "flex flex-col-reverse gap-8",
              "lg:flex-row lg:items-center lg:gap-64",
            )}
          >
            <Description />

            <Statistics />
          </div>
        </div>
      </Container>
    </section>
  );
}
