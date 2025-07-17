// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { type Metadata } from "next";

// src
import Faces from "@/components/layout/faces";
import Footer from "@/components/layout/footer";
import Title from "@/components/layout/title";
import Projects from "@/features/portfolio/components/projects";

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "Thirdline Portfolio",
  description:
    "A collection of successful projects and businesses that have come to fruition with the support of Thirdline Innovation Studio. See our portfolio in various fields.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Portfolio() {
  return (
    <>
      <main>
        <Title
          title="Thirdline Portfolio"
          description="What you see in this section is not merely a portfolio or a project; it is a reflection of the real processes of building, testing, revising, and growing. Some of Thirdline's works have taken the form of independent companies. Others are projects that have progressed through packages of discovery, creation, development, commercialization, and investment. All these works are the product of accompanying teams that were selected, remained committed, and followed the path to creation."
        />

        <Projects />

        <Faces />
      </main>

      <Footer />
    </>
  );
}
