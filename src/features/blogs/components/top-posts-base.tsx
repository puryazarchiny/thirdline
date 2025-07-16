"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// src
import { TOP_POSTS_BASE as DATA } from "@/features/blogs/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function TopPostsBASE() {
  // #####################################
  // # States
  // #####################################

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("همه پست‌های جریان");

  // #####################################
  // # Refs
  // #####################################

  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  // #####################################
  // # Effects
  // #####################################

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // #####################################
  // # Variables
  // #####################################

  const selectedOption = DATA.find((option) => option.value === selectedValue);

  // #####################################
  // # Handlers
  // #####################################

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  // #####################################
  // # JSX
  // #####################################

  return (
    <div ref={selectRef} className={cn("relative w-full", "lg:hidden")}>
      <button
        type="button"
        className="bg-body-lightest flex w-full cursor-pointer items-center justify-between rounded-lg p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label}</span>

        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-500",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <ul
          ref={optionsRef}
          className="bg-body-lightest absolute z-10 mt-2 w-full rounded-lg p-2"
        >
          {DATA.map(({ label, value }, index) => (
            <li key={index}>
              <div
                className="rounded-sm p-4"
                onClick={() => handleSelect(value)}
              >
                {label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
