// #############################################################################
// # Imports
// #############################################################################

// src
import { HERO as DATA } from "@/features/home/data";

// #############################################################################
// # Components
// #############################################################################

export default function Typewriter() {
  return (
    <ul className="h-[45px] overflow-hidden">
      {DATA.map((word, index) => (
        <li
          key={index}
          className="relative top-0 animate-[slide_9s_steps(3)_infinite] pl-2"
        >
          {/* ################################ */}
          {/* # Word                           */}
          {/* ################################ */}

          <p className="text-text-dark text-3xl leading-[45px]">{word}</p>

          {/* ################################ */}
          {/* # Cursor                         */}
          {/* ################################ */}

          <span className="bg-body border-r-border absolute top-0 right-0 h-full w-full animate-[typing_3s_infinite] border-r-2" />
        </li>
      ))}
    </ul>
  );
}
