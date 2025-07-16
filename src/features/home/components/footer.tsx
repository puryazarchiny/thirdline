// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";

// src
import Container from "@/components/layout/container";
import { FOOTER as DATA } from "@/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Footer() {
  return (
    <footer className="py-container">
      <Container>
        <div
          className={cn(
            "flex flex-col items-center gap-4",
            "lg:flex-row lg:justify-between lg:gap-0",
          )}
        >
          {/* ################################ */}
          {/* # Socials                        */}
          {/* ################################ */}

          <ul className="flex gap-4">
            {DATA.map(({ href, src, alt }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  className="hover:bg-hover flex size-8 items-center justify-center rounded-sm"
                >
                  <Image src={src} alt={alt} width={16} height={16} />
                </a>
              </li>
            ))}
          </ul>

          {/* ################################ */}
          {/* # Copyright                      */}
          {/* ################################ */}

          <p dir="ltr" className="text-text-darker text-xs">
            © 2025 Andisheh Innovation Studio.
          </p>
        </div>
      </Container>
    </footer>
  );
}
