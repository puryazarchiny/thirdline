"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";
import { useState } from "react";

// src
import { VALUES as DATA } from "@/features/about/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function CardsLG() {
  const [expandedCard, setExpandedCard] = useState(0);

  const handleCardHover = (index: number) => {
    setExpandedCard(index === expandedCard ? 0 : index);
  };

  const isExpanded = (index: number) => index === expandedCard;

  return (
    <ul className={cn("hidden", "lg:flex lg:justify-center lg:gap-4")}>
      {DATA.map(({ number, title, description }, index) => (
        <li
          key={index}
          className={cn(
            "relative flex h-80 w-full flex-col items-start justify-end gap-2 overflow-hidden rounded-lg px-4 transition-all duration-200",
            isExpanded(index)
              ? "bg-primary-500 min-w-lg"
              : "bg-body-lighter min-w-40",
          )}
          onMouseEnter={() => handleCardHover(index)}
        >
          <hgroup
            className={cn(
              "flex flex-col items-start gap-2",
              isExpanded(index) ? "-translate-y-[35px]" : "translate-y-[70px]",
            )}
          >
            {/* ################################ */}
            {/* # Number                         */}
            {/* ################################ */}

            <p
              className={cn(
                "text-3xl",
                isExpanded(index) &&
                  "text-primary-500 flex size-[45px] items-center justify-center rounded-sm bg-neutral-50",
              )}
            >
              {number}
            </p>

            {/* ################################ */}
            {/* # Title                          */}
            {/* ################################ */}

            <h4
              className={cn(
                "flex h-14 w-64 flex-col",
                isExpanded(index) && "text-xl font-bold",
              )}
            >
              <span>{title[0]}</span>

              <span>{title[1]}</span>
            </h4>
          </hgroup>

          {/* ################################ */}
          {/* # Description                    */}
          {/* ################################ */}

          <p
            className={cn(
              "text-text-dark h-[72px] w-[480px] text-justify",
              isExpanded(index) ? "-translate-y-[35px]" : "translate-y-[70px]",
            )}
          >
            {description}
          </p>

          {/* ################################ */}
          {/* # Curves                         */}
          {/* ################################ */}

          {isExpanded(index) && (
            <Image
              src={"/images/curves.png"}
              alt="Curves"
              width={544}
              height={350}
              className="absolute inset-0"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
