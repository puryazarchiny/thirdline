// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// #############################################################################
// # Functions
// #############################################################################

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(number: number) {
  return Intl.NumberFormat("fa-IR").format(number);
}
