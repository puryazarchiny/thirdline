// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";
import Link from "next/link";

// src
import { LINKS as DATA } from "@/features/root/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Links() {
  return (
    <ul className={cn("flex justify-center gap-4", "lg:justify-start")}>
      {DATA.map(({ href, src, alt }, index) => (
        <li key={index}>
          <Link
            href={href}
            className={cn(
              "bg-body-lightest hover:bg-hover flex size-12 items-center justify-center rounded-sm",
              "lg:size-16 lg:rounded-lg",
            )}
          >
            <div className={cn("relative size-6", "lg:size-8")}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1023px) 24px, 32px"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
