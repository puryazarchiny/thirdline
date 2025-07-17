// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { type Metadata } from "next";

// src
import Footer from "@/components/layout/footer";
import Title from "@/components/layout/title";
import Components from "@/features/members/components";

// #############################################################################
// # Metadata
// #############################################################################

export const metadata: Metadata = {
  title: "Thirdline Members",
  description:
    "Meet the members of Thirdline Innovation Studio. A team of creative and committed specialists who strive together to achieve great goals.",
};

// #############################################################################
// # Components
// #############################################################################

export default function Members() {
  return (
    <>
      <main>
        <Title
          title="Thirdline Members"
          description="Thirdline Studio is not built by structures, it is built by people. Here you will get to know the faces that have a role in the formation, advancement and future of Thirdline; from the co-founders to the new generation that is building the rest of the way."
        />

        <Components />
      </main>

      <Footer />
    </>
  );
}
