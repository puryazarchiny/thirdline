// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { ROLE as DATA } from "@/features/root/data";

// #############################################################################
// # Components
// #############################################################################

export default function Role() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-4">
          <h3 className="relative">
            <span className="text-fluid-30-48">
              The role of the studio in the project
            </span>

            <span className="bg-primary-500 absolute -top-2 left-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full" />
          </h3>

          <div className="flex flex-col gap-2">
            {DATA.map((paragraph, index) => (
              <p key={index} className="text-text-dark">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
