// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { type Metadata } from "next";

// src
import Faces from "@/components/layout/faces";
import Footer from "@/components/layout/footer";
import Gallery from "@/components/layout/gallery";
import Title from "@/components/layout/title";
import Beliefs from "@/features/about/components/beliefs";
import Story from "@/features/about/components/story";
import Timeline from "@/features/about/components/timeline";
import Values from "@/features/about/components/values";
import Video from "@/components/layout/video";

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "Thirdline Cognition",
  description:
    "Get to know Thirdline Innovation Studio, a creative and expert team in business design, development, and strategy. Learn more about our philosophy, journey, and structure.",
};

// #############################################################################
// # Components
// #############################################################################

export default function About() {
  return (
    <>
      <main>
        <Title
          title="Thirdline Cognition"
          description="A narrative of the philosophy, journey, and structure that has built Thirdline"
        />

        <Gallery />

        <Story />

        <Timeline />

        <Video />

        <Beliefs />

        <Values />

        <Faces />
      </main>

      <Footer />
    </>
  );
}
