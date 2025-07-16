// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { ComponentProps, ReactNode } from "react";

// src
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type ContainerProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

// #############################################################################
// # Components
// #############################################################################

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("px-container mx-auto w-full max-w-7xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
