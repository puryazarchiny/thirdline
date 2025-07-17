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

type ProjectsLGProps = {
  image: string;
  name: string;
  subject: string;
  tags: string[];
  href: string;
  index: number;
  hoveredProject: number | null;
  onHoveredProject: (index: number | null) => void;
};

// #############################################################################
// # Components
// #############################################################################

export default function ProjectsLG({
  image,
  name,
  subject,
  tags,
  href,
  index,
  hoveredProject,
  onHoveredProject,
}: ProjectsLGProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "hidden",
        "lg:relative lg:block lg:h-[448px] lg:max-w-96 lg:overflow-hidden lg:rounded-lg",
      )}
      onMouseEnter={() => onHoveredProject(index)}
      onMouseLeave={() => onHoveredProject(null)}
    >
      {/* ################################ */}
      {/* # Image                          */}
      {/* ################################ */}

      <Image
        src={image}
        alt={`پروژه ${name}`}
        width={4096}
        height={2732}
        className={cn(
          "h-full object-cover",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setIsLoaded(true)}
      />

      {/* ################################ */}
      {/* # Skeleton                       */}
      {/* ################################ */}

      {!isLoaded && (
        <>
          <div className="bg-skeleton absolute inset-0 -z-10 h-full animate-pulse rounded-lg" />

          <div className="bg-body-lightest absolute inset-0 -z-20 h-full rounded-lg" />
        </>
      )}

      {index === hoveredProject && (
        <div className="bg-body/80 absolute inset-0 flex flex-col items-start justify-center gap-16 p-8">
          <div className="flex flex-col gap-4">
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
                  <p className="bg-body-lightest rounded-sm p-2 text-xs">
                    {tag}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ################################ */}
          {/* # Button                         */}
          {/* ################################ */}

          <Link
            href={href}
            className="bg-primary-500 hover:bg-hover flex items-center gap-2 rounded-sm p-2 text-sm"
          >
            <span>View project</span>

            <ArrowUpRight />
          </Link>
        </div>
      )}
    </div>
  );
}
