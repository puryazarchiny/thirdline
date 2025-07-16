// #############################################################################
// # Imports
// #############################################################################

// src
import { TABS as DATA } from "@/features/portfolio/data";
import { cn } from "@/utils";

// #############################################################################
// # Types
// #############################################################################

type TabsProps = {
  activeTab: number;
  onActiveTab: (index: number) => void;
};

// #############################################################################
// # Components
// #############################################################################

export default function Tabs({ activeTab, onActiveTab }: TabsProps) {
  return (
    <ul className={cn("hidden", "lg:bg-body lg:flex lg:rounded-lg lg:p-4")}>
      {DATA.map((tab, index) => (
        <li key={index}>
          <button
            type="button"
            className={cn(
              "rounded-sm p-4",
              index === activeTab
                ? "bg-primary-500"
                : "hover:text-hover cursor-pointer",
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
