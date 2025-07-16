"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { useState } from "react";

// src
import Container from "@/components/layout/container";

import Persons from "./persons";
import Tabs from "./tabs";

// #############################################################################
// # Components
// #############################################################################

export default function Components() {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-section relative">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <Tabs activeTab={activeTab} onActiveTab={handleActiveTab} />

          <Persons activeTab={activeTab} />

          <div className="bg-body-light absolute top-0 -z-10 h-72 w-full sm:h-96" />
        </div>
      </Container>
    </section>
  );
}
