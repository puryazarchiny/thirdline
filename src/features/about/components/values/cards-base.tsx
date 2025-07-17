// #############################################################################
// # Imports
// #############################################################################

// src
import { VALUES as DATA } from "@/features/about/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function CardsBASE() {
  return (
    <ul className={cn("grid auto-rows-fr grid-cols-1 gap-4", "lg:hidden")}>
      {DATA.map(({ number, title, description }, index) => (
        <li
          key={index}
          className="bg-body-lighter flex flex-col gap-2 rounded-lg p-8"
        >
          <hgroup className="flex flex-col items-start gap-2">
            {/* ################################ */}
            {/* # Number                         */}
            {/* ################################ */}

            <p className="text-primary-500 flex size-[45px] items-center justify-center rounded-sm bg-neutral-50 text-3xl">
              {number}
            </p>

            {/* ################################ */}
            {/* # title                          */}
            {/* ################################ */}

            <h4 className="flex flex-col gap-1 text-xl font-bold">
              <span>{title[0]}</span>

              <span>{title[1]}</span>
            </h4>
          </hgroup>

          {/* ################################ */}
          {/* # Description                    */}
          {/* ################################ */}

          <p className="text-text-dark">{description}</p>
        </li>
      ))}
    </ul>
  );
}
