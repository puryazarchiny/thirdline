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
          title="پلتفرم ریشــــه"
          description="ریشه یک پلتفرم جامع برای پاسخ‌گویی به نیازهای رو‌به‌رشد جمعیت سالمند ایران است"
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
