// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

import Description from "./description";
import Details from "./details";
import Links from "./links";
import Title from "./title";

// #############################################################################
// # Components
// #############################################################################

export default function About() {
  return (
    <section className="py-section">
      <Container>
        <div className={cn("flex flex-col gap-8", "lg:flex-row lg:gap-16")}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Title />

              <Description />
            </div>

            <Links />
          </div>

          <Details />
        </div>
      </Container>
    </section>
  );
}
