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
import Application from "@/features/apply/components/application";
import Intro from "@/features/apply/components/intro";
import Steps from "@/features/apply/components/steps";

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "Thirdline Accompaniment",
  description:
    "Start the journey of building, growing, and commercializing innovative businesses with Thirdline. To start cooperation and send a request, use this page.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Apply() {
  return (
    <>
      <main>
        <Title
          title="Thirdline Accompaniment"
          description="Entering a real path for building, growing, and commercializing innovative businesses"
        />

        <Gallery />

        <Intro />

        <Steps />

        <Application />

        <Faces />
      </main>

      <Footer />
    </>
  );
}
