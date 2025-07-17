// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

// src
import Header from "@/components/layout/header";
import { cn } from "@/utils";

import "@/global.css";

// #############################################################################
// # Fonts
// #############################################################################

const inter = Inter({
  subsets: ["latin"],
});

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "Thirdline Innovation Studio",
  description:
    "Thirdline Innovation Studio, a space for creating and nurturing new ideas and turning them into successful businesses. At Thirdline, we support you in realizing your dreams by providing diverse services in design, development, and strategy.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/icons/logo-light.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/icons/logo-dark.svg",
    },
  ],
};

// #############################################################################
// # Types
// #############################################################################

type RootProps = {
  children: ReactNode;
};

// #############################################################################
// # Components
// #############################################################################

export default function Root({ children }: RootProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-body text-text grid min-h-svh grid-rows-[auto_1fr_auto]",
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
