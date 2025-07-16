// #############################################################################
// # Imports
// #############################################################################

// src
import { TABS as DATA } from "@/features/members/data";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type TabsProps = {
  activeTab: number;
  onActiveTab: (tab: number) => void;
};

// #############################################################################
// # Components
// #############################################################################

export default function Tabs({ activeTab, onActiveTab }: TabsProps) {
  return (
    <ul className={cn("bg-body flex rounded-lg p-2", "lg:p-4")}>
      {DATA.map((tab, index) => (
        <li key={index}>
          <button
            type="button"
            className={cn(
              "flex h-12 w-24 items-center justify-center rounded-sm text-xs",
              index === activeTab
                ? "bg-primary-500"
                : "hover:text-hover cursor-pointer",
              "lg:h-16 lg:w-32 lg:text-base",
            )}
            onClick={() => onActiveTab(index)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
}
