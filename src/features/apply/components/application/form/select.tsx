// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// src
import { SELECT as DATA } from "@/features/apply/data";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type SelectProps = {
  onChange: (value: string) => void;
  value: string;
};

// #############################################################################
// # Components
// #############################################################################

export default function Select({ onChange, value }: SelectProps) {
  // #####################################
  // # States
  // #####################################

  const [isOpen, setIsOpen] = useState(false);

  // #####################################
  // # Refs
  // #####################################

  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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

  const selectedOption = DATA.find((option) => option.value === value);

  // #####################################
  // # Handlers
  // #####################################

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  // #####################################
  // # JSX
  // #####################################

  return (
    <div className="flex flex-col gap-2">
      <p
        className="cursor-default font-medium"
        onClick={() => buttonRef.current?.focus()}
      >
        Current status of the plan *
      </p>

      <div ref={selectRef} className="relative w-full">
        <button
          type="button"
          ref={buttonRef}
          className="focus:border-primary-400 flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-600 p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={cn(selectedOption ? "text-text" : "text-text-darker")}
          >
            {selectedOption?.label || "Select"}
          </span>

          <ChevronDown
            size={16}
            className={cn(
              "text-text-darker transition-transform duration-500",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {isOpen && (
          <ul
            ref={optionsRef}
            className="bg-body absolute z-10 mt-2 w-full rounded-lg border-2 border-gray-600 p-2"
          >
            {DATA.map(({ label, value }, index) => (
              <li key={index}>
                <div
                  className="hover:bg-hover cursor-pointer rounded-sm p-4"
                  onClick={() => handleSelect(value)}
                >
                  {label}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
