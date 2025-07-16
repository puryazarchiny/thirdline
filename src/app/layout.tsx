// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { type Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

// src
import Header from "@/components/layout/header";
import { cn } from "@/utils";

import "@/global.css";

// #############################################################################
// # Fonts
// #############################################################################

const dana = localFont({ src: "../../public/fonts/dana.woff2" });

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "استودیو نوآوری اندیشه",
  description:
    "استودیو نوآوری اندیشه، فضایی برای خلق و پرورش ایده‌های نو و تبدیل آن‌ها به کسب‌وکارهای موفق. ما در اندیشه با ارائه خدمات متنوع در حوزه‌های طراحی، توسعه و استراتژی، شما را در مسیر تحقق رویاهایتان همراهی می‌کنیم.",
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
    <html dir="rtl" lang="fa">
      <body
        className={cn(
          dana.className,
          "bg-body text-text grid min-h-svh grid-rows-[auto_1fr_auto]",
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
