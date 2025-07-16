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
  title: "درباره اندیشه",
  description:
    "آشنایی با استودیو نوآوری اندیشه، تیمی خلاق و متخصص در زمینه طراحی، توسعه و استراتژی کسب‌وکار. با فلسفه، مسیر و ساختار ما بیشتر آشنا شوید.",
};

// #############################################################################
// # Components
// #############################################################################

export default function About() {
  return (
    <>
      <main>
        <Title
          title="درباره اندیشــــه"
          description="روایتی از فلسفه، مسیر و ساختاری که اندیشه را ساخته است"
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
