// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

import Logo from "./logo";
import NavigationDrawer from "./navigation-drawer";

// #############################################################################
// # Components
// #############################################################################

export default function Header() {
  return (
    <header className={cn("h-16", "sm:h-auto sm:py-12")}>
      <Container>
        <div
          className={cn(
            "bg-body fixed inset-x-0 z-10 flex justify-between px-4 py-6",
            "sm:static sm:p-0",
          )}
        >
          <Logo />

          <NavigationDrawer />
        </div>
      </Container>
    </header>
  );
}
