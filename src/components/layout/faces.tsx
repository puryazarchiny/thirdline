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

          <hgroup className="flex flex-col gap-4 text-justify">
            <h3 className="text-fluid-18-24">
              پشت هر ایده، هر مسیر و هر تصمیم، چهره‌هایی ایستاده‌اند که این
              داستان را واقعی کرده‌اند.
            </h3>

            <p className="text-text-dark">
              با
              <span className="text-text font-bold"> اهالی اندیشـــــه </span>
              آشنا شوید؛ چهره‌هایی که این مسیر را ساخته‌اند و هر روز دوباره
              می‌سازند
            </p>
          </hgroup>

          {/* ################################ */}
          {/* # Button                         */}
          {/* ################################ */}

          <Link
            href="/members"
            className="text-primary-500 hover:bg-hover hover:text-text z-10 shrink-0 rounded-md bg-neutral-50 px-8 py-4"
          >
            آشنایی با چهره‌ها
          </Link>

          {/* ################################ */}
          {/* # Background Noise               */}
          {/* ################################ */}

          <Image
            src={"/images/noise.png"}
            alt="نویز پس زمینه"
            width={1200}
            height={320}
            className="absolute inset-0 h-full opacity-50"
          />
        </div>
      </Container>
    </section>
  );
}
