// #############################################################################
// # Imports
// #############################################################################

// src
import Container from "@/components/layout/container";
import { BELIEFS } from "@/features/about/data";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Beliefs() {
  return (
    <section className="py-section">
      <Container>
        <div
          className={cn("grid grid-cols-1 gap-8", "lg:grid-cols-2 lg:gap-32")}
        >
          {/* ################################ */}
          {/* # Intro                          */}
          {/* ################################ */}

          <div className="flex flex-col gap-4">
            <h3 className="relative">
              <span className="text-fluid-30-48">What We Believe In</span>

              <span className="bg-primary-500 absolute -top-2 left-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full" />
            </h3>

            <p className="text-text-dark">
              Behind every decision, design, and partnership at Thirdline
              Studio, lies a set of deep-rooted beliefs. These beliefs shape not
              only our professional path but also our human relationships,
              collaboration standards, and our definition of
              &quot;success.&quot; What transforms us from a service provider
              into a true partner on the building journey is Thirdline
              Studio&apos;s mission, vision, social responsibility, and work
              culture.
            </p>
          </div>

          {/* ################################ */}
          {/* # Belief List                    */}
          {/* ################################ */}

          <ul className="flex flex-col gap-8">
            {BELIEFS.map(({ title, subTitle, description }, index) => (
              <li key={index} className="flex flex-col gap-2">
                <hgroup className="flex flex-col">
                  <h4 className="text-fluid-20-30">{title}</h4>

                  <p className="text-text-darker text-lg">{subTitle}</p>
                </hgroup>

                <p className="text-text-dark">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
