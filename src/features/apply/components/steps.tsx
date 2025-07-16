// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { Clock } from "lucide-react";

// src
import Container from "@/components/layout/container";
import { STEPS as DATA } from "@/features/apply/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Steps() {
  return (
    <section className={cn("pb-section relative pt-96", "sm:pt-80")}>
      <Container>
        <ul className="grid auto-rows-fr grid-cols-1 gap-8">
          {DATA.map(({ step, title, description, estimatedTime }, index) => (
            <li
              key={index}
              className={cn(
                "bg-body-lighter flex flex-col gap-4 rounded-lg p-4",
                "sm:flex-row",
              )}
            >
              {/* ################################ */}
              {/* # Step                           */}
              {/* ################################ */}

              <p
                className={cn(
                  "bg-body-light flex h-16 w-full shrink-0 items-center justify-center gap-1 rounded-sm text-xl",
                  "sm:h-full sm:min-h-32 sm:w-24 sm:flex-col sm:gap-0",
                )}
              >
                <span>{step[0]}</span>

                <span>{step[1]}</span>
              </p>

              <div
                className={cn(
                  "flex grow flex-col justify-baseline gap-4 p-4",
                  "sm:justify-center",
                )}
              >
                <div className="flex items-center justify-between">
                  {/* ################################ */}
                  {/* # Title                          */}
                  {/* ################################ */}

                  <h4 className="text-xl">{title}</h4>

                  {/* ################################ */}
                  {/* # Time (viewport >= 1024)        */}
                  {/* ################################ */}

                  <div
                    className={cn("hidden", "sm:flex sm:items-center sm:gap-2")}
                  >
                    <p className="text-sm">{estimatedTime}</p>

                    <Clock size={16} />
                  </div>
                </div>

                {/* ################################ */}
                {/* # Description                    */}
                {/* ################################ */}

                <p className="text-text-dark grow text-justify">
                  {description}
                </p>

                {/* ################################ */}
                {/* # Time (viewport < 1024)         */}
                {/* ################################ */}

                <div
                  className={cn(
                    "flex items-center justify-end gap-2",
                    "sm:hidden",
                  )}
                >
                  <p className="text-sm">{estimatedTime}</p>

                  <Clock size={16} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      {/* ################################ */}
      {/* Intro                            */}
      {/* ################################ */}

      <div
        className={cn(
          "bg-primary-500 absolute top-0 -z-10 h-[448px] w-full",
          "sm:h-96",
        )}
      >
        <Container className="flex h-full flex-col justify-center gap-4">
          <h3 className="relative">
            <span className="text-fluid-30-48">
              مسیر همراهی چگونه پیش می‌رود؟
            </span>

            <span className="bg-text absolute -top-2 right-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full" />
          </h3>

          <p className="text-text-dark text-justify">
            فرآیند همکاری با استودیو اندیشه بر پایه یک چارچوب مرحله‌ای طراحی شده
            که طی آن، تیم‌ها به‌صورت تدریجی و مبتنی بر تحقق شاخص‌های کلیدی، وارد
            مسیر رشد و تجاری‌سازی می‌شوند. این همکاری به‌طور معمول طی پنج گام
            اصلی انجام می‌شود.
          </p>
        </Container>
      </div>
    </section>
  );
}
