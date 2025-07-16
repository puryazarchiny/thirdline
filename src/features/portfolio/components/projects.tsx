"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { useState } from "react";

// src
import Container from "@/components/layout/container";
import { PROJECTS as DATA } from "@/features/portfolio/data";
import { cn } from "@/utils";

import ProjectsBASE from "./projects-base";
import ProjectsLG from "./projects-lg";
import Select from "./select";
import Tabs from "./tabs";

// #############################################################################
// # Components
// #############################################################################

export default function Projects() {
  // #####################################
  // # States
  // #####################################

  const [selectedValue, setSelectedValue] = useState("همه نمونه‌ها");
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // #####################################
  // # Variables
  // #####################################

  const selectedValueProjects =
    selectedValue === "همه نمونه‌ها"
      ? DATA[1]
      : DATA[1].filter((project) => project.category.includes(selectedValue));

  const activeTabProjects =
    activeTab === 0
      ? DATA[1]
      : DATA[1].filter((project) =>
          project.category.includes(DATA[0][activeTab]),
        );

  // #####################################
  // # Handlers
  // #####################################

  const handleOnSelectedValue = (value: string) => {
    setSelectedValue(value);
  };

  const handleOnActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const handleOnHoveredProject = (index: number | null) => {
    setHoveredProject(index);
  };

  // #####################################
  // # JSX
  // #####################################

  return (
    <section className="py-section relative">
      <Container>
        <div className="flex flex-col items-center gap-8">
          {/* ################################ */}
          {/* # Categories                     */}
          {/* ################################ */}

          <Select
            selectedValue={selectedValue}
            onSelectedValue={handleOnSelectedValue}
          />

          <Tabs activeTab={activeTab} onActiveTab={handleOnActiveTab} />

          {/* ################################ */}
          {/* # Projects (viewport < 1024)     */}
          {/* ################################ */}

          <ul
            className={cn(
              "grid grid-cols-1 justify-items-center gap-8",
              "sm:grid-cols-2",
              "lg:hidden",
            )}
          >
            {selectedValueProjects.map(
              ({ image, name, subject, tags, href }, index) => (
                <li key={index}>
                  <ProjectsBASE
                    image={image}
                    name={name}
                    subject={subject}
                    tags={tags}
                    href={href}
                  />
                </li>
              ),
            )}
          </ul>

          {/* ################################ */}
          {/* # Projects (viewport >= 1024)    */}
          {/* ################################ */}

          <ul className={cn("hidden", "lg:grid lg:grid-cols-3 lg:gap-8")}>
            {activeTabProjects.map(
              ({ image, name, subject, tags, href }, index) => (
                <li key={index}>
                  <ProjectsLG
                    image={image}
                    name={name}
                    subject={subject}
                    tags={tags}
                    href={href}
                    index={index}
                    hoveredProject={hoveredProject}
                    onHoveredProject={handleOnHoveredProject}
                  />
                </li>
              ),
            )}
          </ul>

          <div
            className={cn(
              "bg-body-light absolute top-0 -z-30 h-72 w-full",
              "sm:h-96",
            )}
          />
        </div>
      </Container>
    </section>
  );
}
