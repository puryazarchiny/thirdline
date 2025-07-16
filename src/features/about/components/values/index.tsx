// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";

import CardsBASE from "./cards-base";
import CardsLG from "./cards-lg";
import Title from "./title";

// #############################################################################
// # Components
// #############################################################################

export default function Values() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-8">
          <Title />

          <CardsBASE />

          <CardsLG />
        </div>
      </Container>
    </section>
  );
}
