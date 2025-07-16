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
  title: "همراهی اندیشه",
  description:
    "با اندیشه، مسیر ساخت، رشد و تجاری‌سازی کسب‌وکارهای نوآورانه را آغاز کنید. برای شروع همکاری و ارسال درخواست، از این صفحه اقدام کنید.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Apply() {
  return (
    <>
      <main>
        <Title
          title="همراهی اندیشــــه"
          description="ورود به یک مسیر واقعی برای ساخت، رشد و تجاری‌سازی کسب‌وکارهای
            نوآورانه"
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
