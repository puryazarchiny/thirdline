// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";

// src
import { FOOTER as DATA } from "@/data";
import { cn } from "@/utils";

// #############################################################################
// # Imports
// #############################################################################

export default function Footer() {
  return (
    <ul className={cn("flex gap-4 self-center p-4", "lg:p-0")}>
      {DATA.map(({ href, src, alt }, index) => (
        <li key={index}>
          <a href={href} target="_blank">
            <Image src={src} alt={alt} width={16} height={16} />
          </a>
        </li>
      ))}
    </ul>
  );
}
