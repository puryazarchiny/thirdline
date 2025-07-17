"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// src
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type ProjectsBASEProps = {
  image: string;
  name: string;
  subject: string;
  tags: string[];
  href: string;
};

// #############################################################################
// # Components
// #############################################################################

export default function ProjectsBASE({
  image,
  name,
  subject,
  tags,
  href,
}: ProjectsBASEProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "grid h-[448px] auto-rows-fr grid-cols-1 overflow-hidden rounded-lg",
        "min-[512px]:h-[640px]",
        "sm:h-[448px]",
        "lg:hidden",
      )}
    >
      {/* ################################ */}
      {/* # Image                          */}
      {/* ################################ */}

      <div className="relative">
        <Image
          src={image}
          alt={`پروژه ${name}`}
          width={4096}
          height={2732}
          className={cn(
            "h-full object-cover",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={() => {
            setIsLoaded(true);
          }}
        />

        {!isLoaded && (
          <>
            <div className="bg-skeleton absolute inset-0 h-full animate-pulse" />

            <div className="bg-body-lightest absolute inset-0 -z-10 h-full" />
          </>
        )}
      </div>

      {/* ################################ */}
      {/* # Skeleton                       */}
      {/* ################################ */}

      <div className="bg-body-lighter flex flex-col p-4">
        <div className="flex grow flex-col gap-4">
          {/* ################################ */}
          {/* # Title                          */}
          {/* ################################ */}

          <hgroup className="flex flex-col gap-2">
            <h3 className="text-xl">{name}</h3>

            <p className="text-text-darker">{subject}</p>
          </hgroup>

          {/* ################################ */}
          {/* # Tags                           */}
          {/* ################################ */}

          <ul className="flex gap-2">
            {tags.map((tag, index) => (
              <li key={index}>
                <p className="bg-body-lightest rounded-sm p-2 text-xs">{tag}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ################################ */}
        {/* # Button                         */}
        {/* ################################ */}

        <Link
          href={href}
          className="border-primary-400 text-primary-400 flex items-center justify-center gap-2 rounded-sm border-2 p-2 text-sm"
        >
          <span>View project</span>

          <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
