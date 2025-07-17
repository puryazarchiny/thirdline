// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Link from "next/link";

// src
import { formatNumber } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function TopPostsLG() {
  return (
    <div className="bg-body-light flex flex-col gap-8 rounded-lg p-8">
      {/* ################################ */}
      {/* # Main Title                     */}
      {/* ################################ */}

      <h3 className="text-xl font-bold">Top Flow Posts</h3>

      <ul>
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {/* ################################ */}
              {/* # Number                         */}
              {/* ################################ */}

              <p className="text-primary-500 flex size-8 shrink-0 items-center justify-center rounded-sm bg-neutral-50 font-bold">
                {formatNumber(index + 1)}.
              </p>

              {/* ################################ */}
              {/* # Post Title                     */}
              {/* ################################ */}

              <Link href="#">
                <h3>
                  The Story of Thirdline&apos;s Formation; Not a Beginning, but
                  a Decision
                </h3>
              </Link>
            </div>

            {/* ################################ */}
            {/* # Author and Date                */}
            {/* ################################ */}

            <div className="flex items-center gap-8 text-xs">
              <p className="bg-body-lightest rounded-sm p-2">Topic Tag</p>

              <p className="text-text-dark">April 21, 2025</p>
            </div>

            {/* ################################ */}
            {/* # Divider                        */}
            {/* ################################ */}

            {index != 3 && <div className="bg-body-lighter mb-4 h-0.5" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
