// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Title() {
  return (
    <header className="py-section">
      <Container>
        <h2
          className={cn(
            "hidden",
            "sm:text-fluid-36-60 sm:flex sm:flex-col sm:gap-4 sm:text-center",
          )}
        >
          <span>روایت شکل‌گیری اندیشه؛</span>

          <span>نه یک شروع، بلکه یک تصمیم</span>
        </h2>

        <h2 className={cn("text-fluid-36-60 text-center", "sm:hidden")}>
          روایت شکل‌گیری اندیشه؛ نه یک شروع، بلکه یک تصمیم
        </h2>
      </Container>
    </header>
  );
}
