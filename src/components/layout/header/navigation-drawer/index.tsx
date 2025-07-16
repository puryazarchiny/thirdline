"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { CircleX, Menu } from "lucide-react";
import { useRef } from "react";
import { Drawer } from "vaul";

// src
import { cn } from "@/utils";

import Footer from "./footer";
import Nav from "./nav";

// #############################################################################
// # Components
// #############################################################################

export default function NavigationDrawer() {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleTriggerClick = () => {
    /*
     * WARNING: Blocked aria-hidden on an element because its
     * descendant retained focus. The focus must not be hidden
     * from assistive technology users. Avoid using aria-hidden
     * on a focused element or its ancestor. Consider using the
     * inert attribute instead, which will also prevent focus.
     */
    if (triggerRef.current) {
      triggerRef.current.blur();
    }
  };

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger
        ref={triggerRef}
        className="cursor-pointer"
        onClick={handleTriggerClick}
      >
        <Menu size={32} className="hover:text-hover" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="bg-body/50 fixed inset-0 z-10" />

        <Drawer.Content
          className={cn(
            "bg-primary-500 px-container fixed inset-0 z-10 flex flex-col gap-16 py-6",
            "sm:py-12",
            "lg:w-1/2",
            "xl:w-2/5",
            "2xl:w-1/3",
          )}
        >
          {/*
           ** ERROR: `DialogContent` requires a `DialogTitle` for
           ** the component to be accessible for screen reader users.
           */}
          <Drawer.Title className="sr-only" />

          {/*
           ** WARNING: Missing `Description` or
           ** `aria-describedby={undefined}` for {DialogContent}.
           */}
          <Drawer.Description className="hidden" />

          <Drawer.Close
            ref={closeRef}
            className={cn("cursor-pointer self-end", "lg:p-0")}
          >
            <CircleX size={32} />
          </Drawer.Close>

          <Nav closeRef={closeRef} />

          <Footer />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
