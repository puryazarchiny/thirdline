// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import A from "@/components/ui/a";

import Content from "./content";
import Typewriter from "./typewriter";

// #############################################################################
// # Components
// #############################################################################

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="flex h-full flex-col items-start gap-8">
          <Typewriter />

          <Content />

          <A href="/members">با اهالی اندیشه آشنا شوید</A>
        </div>
      </Container>
    </section>
  );
}
