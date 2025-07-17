// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { type Metadata } from "next";

// src
import Faces from "@/components/layout/faces";
import Footer from "@/components/layout/footer";
import Title from "@/components/layout/title";
import Posts from "@/features/blogs/components/posts";

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "Thirdline Flow",
  description:
    "A collection of articles, analyses, and viewpoints from the Thirdline team in the fields of innovation, entrepreneurship, and technology. Join our stream of thought.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Blogs() {
  return (
    <>
      <main>
        <Title
          title="Thirdline Flow"
          description="A narrative of the philosophy, path, and structure that has built Thirdline"
        />

        <Posts />

        <Faces />
      </main>

      <Footer />
    </>
  );
}
