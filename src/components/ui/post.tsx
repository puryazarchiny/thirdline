// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { Calendar, Image as IMG, Share2, User } from "lucide-react";
import Link from "next/link";

// #############################################################################
// # Components
// #############################################################################

export default function Post() {
  return (
    <div className="bg-body-light flex flex-col gap-4 rounded-lg p-4">
      {/* ################################ */}
      {/* # Image                          */}
      {/* ################################ */}

      <Link
        href="#"
        className="bg-body-lighter flex h-80 items-center justify-center rounded-lg"
      >
        <IMG size={64} />
      </Link>

      <div className="flex flex-col gap-8">
        {/* ################################ */}
        {/* # Title                          */}
        {/* ################################ */}

        <Link href="/blogs/blog">
          <hgroup className="flex flex-col gap-2">
            <h3 className="text-xl">
              The Story of Thirdline&apos;s Formation; Not a Beginning, but a
              Decision
            </h3>

            <p className="text-text-darker">
              The Story of Thirdline&apos;s Formation; Not a Beginning, but a
              Decision
            </p>
          </hgroup>
        </Link>

        {/* ################################ */}
        {/* # Author and Date                */}
        {/* ################################ */}

        <div className="flex gap-8 text-xs">
          <div className="flex gap-2">
            <User size={16} />

            <span className="text-text-dark">Khatoon Irani</span>
          </div>

          <div className="flex gap-2">
            <Calendar size={16} />

            <span className="text-text-dark">April 21, 2025</span>
          </div>
        </div>

        {/* ################################ */}
        {/* # Tags and Share                 */}
        {/* ################################ */}

        <div className="flex justify-between">
          <p className="bg-body-lightest rounded-sm p-2 text-xs">Topic Tag</p>

          <button type="button" className="cursor-pointer">
            <Share2 />
          </button>
        </div>
      </div>
    </div>
  );
}
