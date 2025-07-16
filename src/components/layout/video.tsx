"use client";

// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";

// #############################################################################
// # Components
// #############################################################################

export default function Video() {
  return (
    <section className="py-section">
      <Container>
        <div className="relative">
          <video
            controls
            autoPlay
            muted
            loop
            className="cursor-pointer rounded-lg"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}
