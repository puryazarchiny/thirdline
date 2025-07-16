// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";
import Link from "next/link";

// src
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/icons/logo-dark.svg"
        alt="لوگو استودیو نوآوری اندیشه"
        width={32}
        height={32}
        className={cn("size-8", "sm:size-12")}
      />
    </Link>
  );
}
