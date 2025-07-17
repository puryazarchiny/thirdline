// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { INTRO as DATA } from "@/features/apply/data";

import Section from "./section";

// #############################################################################
// # Components
// #############################################################################

export default function Intro() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-16">
          <Section
            title="Entering a Structure"
            description={DATA[0]}
            textDirection="right"
            imageDirection="left"
          />

          <Section
            title="Our Approach to Accompaniment"
            description={DATA[1]}
            textDirection="left"
            imageDirection="right"
          />
        </div>
      </Container>
    </section>
  );
}
