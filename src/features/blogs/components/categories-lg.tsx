// #############################################################################
// # Imports
// #############################################################################

// src
import { formatNumber } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function CategoriesLG() {
  return (
    <div className="bg-body-light flex flex-col gap-8 rounded-lg p-8">
      {/* ################################ */}
      {/* # Title                          */}
      {/* ################################ */}

      <h3 className="text-xl font-bold">دسته‌بندی‌های جریان</h3>

      <ul>
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            {/* ################################ */}
            {/* # Categories                     */}
            {/* ################################ */}

            <p className="text-text-dark cursor-pointer">
              دسته‌بندی‌ها {formatNumber(index + 1)}
            </p>

            {/* ################################ */}
            {/* # Divider                        */}
            {/* ################################ */}

            {index != 3 && <div className="bg-body-lighter my-4 h-0.5" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
