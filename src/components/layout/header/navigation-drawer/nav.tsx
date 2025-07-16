// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Link from "next/link";
import { RefObject } from "react";

// src
import { NAV as DATA } from "@/data";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type NavProps = {
  closeRef: RefObject<HTMLButtonElement | null>;
};

// #############################################################################
// # Components
// #############################################################################

export default function Nav({ closeRef }: NavProps) {
  return (
    <nav className="grow">
      <ul className="lg:flex lg:flex-col lg:gap-8">
        {DATA.map(({ href, label }, index) => (
          <li key={href} className="lg:flex lg:items-center lg:gap-4">
            {/* ################################ */}
            {/* # Pages                          */}
            {/* ################################ */}

            <Link
              href={href}
              className="peer text-fluid-20-30 shrink-0"
              onClick={() => closeRef.current?.click()}
            >
              {label}
            </Link>

            {/* ################################ */}
            {/* # Divider                        */}
            {/* ################################ */}

            <div
              className={cn(
                "bg-divider-dark my-4 h-0.5 w-full",
                index === DATA.length - 1 && "hidden",
                "lg:bg-text lg:my-0 lg:block lg:w-0 lg:transition-[width] lg:duration-700 lg:peer-hover:w-full",
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
