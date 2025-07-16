"use client";

// #############################################################################
// # Imports
// #############################################################################

// node_modules
import dynamic from "next/dynamic";

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

const Form = dynamic(() => import("./form"), { ssr: false });
import Intro from "./intro";

// #############################################################################
// # Components
// #############################################################################

export default function Application() {
  return (
    <section className="py-section">
      <Container>
        <div
          className={cn("flex flex-col gap-16", "lg:flex-row lg:items-start")}
        >
          <Intro />

          <Form />
        </div>
      </Container>
    </section>
  );
}
