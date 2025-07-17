// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";

// src
import Container from "@/components/layout/container";
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Profile() {
  return (
    <section className="py-section">
      <Container>
        <div
          className={cn("flex flex-col gap-8", "sm:flex-row sm:items-start")}
        >
          <div
            className={cn(
              "bg-body-light flex items-center gap-8 rounded-lg p-8",
              "sm:flex-col sm:p-16",
            )}
          >
            <div className="size-24 rounded-full bg-neutral-50" />

            <div className={cn("flex flex-col gap-4", "sm:items-center")}>
              <p className="text-center">Khatoon Irani</p>

              <div className="flex gap-4">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn icon"
                  width={16}
                  height={16}
                />

                <Image
                  src="/icons/x.svg"
                  alt="X social media icon"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-fluid-30-48">
              The Studio&apos;s Role in the Project
            </h3>

            <p className="text-text-dark">
              Risheh is one of the projects that was born in Thirdline Studio
              from the very beginning. As the project&apos;s founder, the studio
              took responsibility for the entire process, from ideation, problem
              definition, team building, and stock model formulation to
              designing the development path. We started the
              &apos;Discovery&apos; phase with field research, stakeholder
              mapping, in-depth interviews, and market analysis. Subsequently,
              the business model, brand identity, user experience design,
              service architecture, and growth scenarios were designed by the
              studio team in the &apos;Creation&apos; phase. Next, by forming
              the technical and operational team, we entered the MVP development
              phase and simultaneously developed and implemented the ESOP
              strategy to attract and retain specialists. The fundraising
              process was also fully handled by the studio, and we successfully
              secured the initial seed capital from Fakher Holding. Risheh is
              now in the initial product development stage, and Thirdline Studio
              remains with the team as a growth leader, infrastructure
              developer, and commercialization partner.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
