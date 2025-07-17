// #############################################################################
// # Imports
// #############################################################################

// src
import Footer from "@/components/layout/footer";
import Images from "@/components/layout/images";
import Paragraphs from "@/features/blog/components/paragraphs";
import Picture from "@/features/blog/components/picture";
import Posts from "@/features/blog/components/posts";
import Profile from "@/features/blog/components/profile";
import Section from "@/features/blog/components/section";
import Title from "@/features/blog/components/title";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export const runtime = "edge";

export default function Blog() {
  return (
    <>
      <main>
        <Title />

        <Picture />

        <Profile />

        <Section />

        <Picture className={cn("sm:h-96", "lg:h-[640px]")} />

        <Paragraphs />

        <Images />

        <Section />

        <Posts />
      </main>

      <Footer />
    </>
  );
}
