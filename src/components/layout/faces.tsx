// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";
import Link from "next/link";

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Faces() {
  return (
    <section className="py-section">
      <Container>
        <div
          className={cn(
            "to-primary-500 from-primary-950 p-faces relative flex flex-col items-start gap-8 overflow-hidden rounded-lg bg-gradient-to-r",
            "lg:flex-row lg:items-center lg:justify-between lg:gap-32",
          )}
        >
          {/* ################################ */}
          {/* # Content                        */}
          {/* ################################ */}

          <hgroup className="flex flex-col gap-4">
            <h3 className="text-fluid-18-24">
              Behind every idea, every path, and every decision, there are faces
              that have made this story real.
            </h3>

            <p className="text-text-dark">
              Meet the
              <span className="text-text font-bold"> people of Thirdline</span>;
              the faces that have built this path and rebuild it every day.
            </p>
          </hgroup>

          {/* ################################ */}
          {/* # Button                         */}
          {/* ################################ */}

          <Link
            href="/members"
            className="text-primary-500 hover:bg-hover hover:text-text z-10 shrink-0 rounded-md bg-neutral-50 px-8 py-4"
          >
            Meet the Faces
          </Link>

          {/* ################################ */}
          {/* # Background Noise               */}
          {/* ################################ */}

          <Image
            src={"/images/noise.png"}
            alt="Background Noise"
            width={1200}
            height={320}
            className="absolute inset-0 h-full opacity-50"
          />
        </div>
      </Container>
    </section>
  );
}
