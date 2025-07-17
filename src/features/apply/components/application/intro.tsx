// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";

// src
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Intro() {
  return (
    <div
      className={cn(
        "bg-primary-500 relative flex w-full flex-col gap-4 overflow-hidden rounded-lg px-8 py-16",
        "lg:w-80",
      )}
    >
      <h3 className="text-xl font-bold">Accompaniment starts here...</h3>

      <p className="text-text-dark">
        If you think your project or product is aligned with Thirdline&apos;s
        paths, and your team is ready to commit, correct, build, and advance,
        fill out the form carefully. Your information will be carefully
        reviewed, and if it is a good fit, we will enter the initial
        conversation stage.
      </p>

      <Image
        src={"/images/curves.png"}
        alt="Curves"
        width={544}
        height={350}
        className="absolute inset-0 h-full object-cover"
      />
    </div>
  );
}
