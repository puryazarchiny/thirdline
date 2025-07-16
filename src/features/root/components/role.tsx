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
            <span className="text-fluid-30-48">نقش استودیو در پروژه</span>

            <span className="bg-primary-500 absolute -top-2 right-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full" />
          </h3>

          <div className="flex flex-col gap-2">
            {DATA.map((paragraph, index) => (
              <p key={index} className="text-text-dark text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
