// #############################################################################
// # Imports
// #############################################################################

// src
import Footer from "@/features/home/components/footer";
import Hero from "@/features/home/components/hero";

// #############################################################################
// # Components
// #############################################################################

export default function Home() {
  return (
    <>
      <main className="self-center">
        <Hero />
      </main>

      <Footer />
    </>
  );
}
