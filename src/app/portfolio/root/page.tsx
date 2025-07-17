// #############################################################################
// # Imports
// #############################################################################

// src
import Faces from "@/components/layout/faces";
import Footer from "@/components/layout/footer";
import Gallery from "@/components/layout/gallery";
import Images from "@/components/layout/images";
import Title from "@/components/layout/title";
import Video from "@/components/layout/video";
import About from "@/features/root/components/about";
import Role from "@/features/root/components/role";

// #############################################################################
// # Components
// #############################################################################

export default function Root() {
  return (
    <>
      <main>
        <Title
          title="Risheh Platform"
          description="Risheh is a comprehensive platform designed to meet the growing needs of Iran's elderly population"
        />

        <Gallery />

        <About />

        <Video />

        <Role />

        <Images />

        <Faces />
      </main>

      <Footer />
    </>
  );
}
