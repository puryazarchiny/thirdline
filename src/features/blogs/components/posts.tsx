// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import Post from "@/components/ui/post";
import { cn } from "@/utils";

import CategoriesBASE from "./categories-base";
import CategoriesLG from "./categories-lg";
import TopPostsBASE from "./top-posts-base";
import TopPostsLG from "./top-posts-lg";

// #############################################################################
// # Components
// #############################################################################

export default function Posts() {
  return (
    <section className="py-section">
      <Container>
        <div
          className={cn(
            "flex flex-col items-center gap-8",
            "lg:flex-row lg:items-start lg:gap-4",
            "xl:gap-8",
          )}
        >
          <CategoriesBASE />

          <TopPostsBASE />

          <aside
            className={cn("hidden", "lg:flex lg:flex-col lg:gap-4", "xl:gap-8")}
          >
            <CategoriesLG />

            <TopPostsLG />
          </aside>

          <ul
            className={cn(
              "grid w-full grid-cols-1 gap-8",
              "sm:grid-cols-2 sm:gap-4",
              "xl:gap-8",
            )}
          >
            {Array.from({ length: 6 }).map((_, index) => (
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
