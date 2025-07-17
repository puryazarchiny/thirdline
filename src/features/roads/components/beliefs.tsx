// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";

// #############################################################################
// # Components
// #############################################################################

export default function Beliefs() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-4">
          <h3 className="relative">
            <span className="text-fluid-30-48">What We Believe In</span>

            <span className="bg-primary-500 absolute -top-2 left-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full" />
          </h3>

          <p className="text-text-dark">
            Behind every decision, design, and participation in Thirdline
            Studio, there is a set of deep-rooted beliefs; beliefs that shape
            not only our work path, but also human relations, cooperation
            criteria, and our definition of &quot;success&quot;. What transforms
            us from a service provider to a real companion on the path of
            building is the mission, vision, social responsibility, and work
            culture of Thirdline Studio.
          </p>
        </div>
      </Container>
    </section>
  );
}
