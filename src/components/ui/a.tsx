// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { MoveUpLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// #############################################################################
// # Types
// #############################################################################

type AProps = {
  href: string;
  children: ReactNode;
};

// #############################################################################
// # Components
// #############################################################################

export default function A({ href, children }: AProps) {
  return (
    <Link
      href={href}
      className="group border-border hover:border-hover flex items-center gap-4 rounded-full border-2 py-1 pr-4 pl-1"
    >
      <p className="text-sm">{children}</p>

      <div className="group-hover:bg-hover rounded-full bg-neutral-50 p-2">
        <MoveUpLeft className="text-primary-500 group-hover:text-text" />
      </div>
    </Link>
  );
}
