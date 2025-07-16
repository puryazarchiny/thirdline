// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import Post from "@/components/ui/post";
import { cn } from "@/utils";

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

          <ul
            className={cn(
              "grid grid-cols-1 gap-8",
              "sm:grid-cols-2 sm:gap-4",
              "lg:grid-cols-3",
              "xl:gap-8",
            )}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>
                <Post />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
