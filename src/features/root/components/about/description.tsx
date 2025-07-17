// #############################################################################
// # Imports
// #############################################################################

// src
import { DESCRIPTION as DATA } from "@/features/root/data";

// #############################################################################
// # Components
// #############################################################################

export default function Description() {
  return (
    <div className="flex flex-col gap-2">
      {DATA.map((paragraph, index) => (
        <p key={index} className="text-text-dark">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
