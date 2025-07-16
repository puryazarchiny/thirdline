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
  title: "جریان اندیشه",
  description:
    "مجموعه‌ای از مقالات، تحلیل‌ها و دیدگاه‌های تیم اندیشه در حوزه‌های نوآوری، کارآفرینی و تکنولوژی. با جریان فکری ما همراه شوید.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Blogs() {
  return (
    <>
      <main>
        <Title
          title="جریان اندیشــــه"
          description="روایتی از فلسفه، مسیر و ساختاری که اندیشه را ساخته است"
        />

        <Posts />

        <Faces />
      </main>

      <Footer />
    </>
  );
}
