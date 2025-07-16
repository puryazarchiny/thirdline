// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { Image as IMG } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// src
import { PERSONS as DATA } from "@/features/members/data";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type PersonsProps = {
  activeTab: number;
};

type Group = "coFounders" | "keyMembers" | "companion";

// #############################################################################
// # Components
// #############################################################################

export default function Persons({ activeTab }: PersonsProps) {
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);

  let group: Group;

  switch (activeTab) {
    case 0:
      group = "coFounders";
      break;

    case 1:
      group = "keyMembers";
      break;

    case 2:
      group = "companion";
      break;

    default:
      group = "coFounders";
  }

  return (
    <ul
      className={cn(
        "grid w-full grid-cols-1 gap-x-8 gap-y-16",
        "sm:grid-cols-2",
        "lg:grid-cols-3",
      )}
    >
      {DATA[group].map(({ name, role, socials }, index) => (
        <li
          key={index}
          className="flex flex-col gap-4"
          onMouseEnter={() => setHoveredPerson(index)}
          onMouseLeave={() => setHoveredPerson(null)}
        >
          {/* ################################ */}
          {/* # Image                          */}
          {/* ################################ */}

          <div
            className={cn(
              "bg-body-lighter flex h-80 items-center justify-center rounded-lg",
              "sm:h-96",
            )}
          >
            <IMG size={64} />
          </div>

          <hgroup className="flex flex-col gap-2">
            {/* ################################ */}
            {/* # Name                           */}
            {/* ################################ */}

            <h3>{name}</h3>

            {/* ################################ */}
            {/* # Role                           */}
            {/* ################################ */}

            <p className="text-text-darker">{role}</p>
          </hgroup>

          {/* ################################ */}
          {/* # Socials (viewport < 1024)      */}
          {/* ################################ */}

          <ul className={cn("flex gap-4", "lg:hidden")}>
            {socials.map(({ href, src, alt }, index) => (
              <li key={index}>
                <a href={href} target="_blank">
                  <Image src={src} alt={alt} width={20} height={20} priority />
                </a>
              </li>
            ))}
          </ul>

          {/* ################################ */}
          {/* # Socials (viewport >= 1024)     */}
          {/* ################################ */}

          <ul className={cn("hidden", "lg:flex lg:gap-2")}>
            {index === hoveredPerson
              ? socials.map(({ href, src, alt }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="hover:bg-hover flex size-10 items-center justify-center rounded-sm"
                    >
                      <Image src={src} alt={alt} width={20} height={20} />
                    </a>
                  </li>
                ))
              : socials.map((_, index) => <li key={index} className="h-10" />)}
          </ul>
        </li>
      ))}
    </ul>
  );
}
