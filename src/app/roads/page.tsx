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
import Beliefs from "@/features/roads/components/beliefs";
import Timeline from "@/features/roads/components/timeline";

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "Thirdline Roads",
  description:
    "Get to know the cooperation paths of Thirdline Innovation Studio. We accompany you in different stages of your business growth by providing various solutions.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Roads() {
  return (
    <>
      <main className="self-center">
        <Title
          title="Thirdline Roads"
          description="Paths with real depth; from idea to effect, with a structure that brings creation to a result"
        />

        <Gallery />

        <Beliefs />

        <Timeline />

        <Faces />
      </main>

      <Footer />
    </>
  );
}
