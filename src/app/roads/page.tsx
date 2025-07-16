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
  title: "مسیرهای اندیشه",
  description:
    "با مسیرهای همکاری استودیو نوآوری اندیشه آشنا شوید. ما با ارائه راهکارهای متنوع، شما را در مراحل مختلف رشد کسب‌وکارتان همراهی می‌کنیم.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Roads() {
  return (
    <>
      <main className="self-center">
        <Title
          title="مسیرهای اندیشــــه"
          description="مسیرهایی با عمق واقعی؛ از ایده تا اثر، با ساختاری که خلق را به نتیجه
            می‌رساند"
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
