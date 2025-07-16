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
              <span className="text-fluid-30-48">
                آنچه به آن بــــاور داریم
              </span>

              <span className="bg-primary-500 absolute -top-2 right-0 h-1 w-[calc(var(--fluid-30-48)*4)] rounded-full" />
            </h3>

            <p className="text-text-dark text-justify">
              پشت هر تصمیم، طراحی و مشارکت در استودیو اندیشه، مجموعه‌ای از
              باورهای ریشه‌دار ایستاده‌اند؛ باورهایی که نه‌تنها مسیر کاری ما،
              بلکه روابط انسانی، معیارهای همکاری، و تعریف ما از
              &quot;موفقیت&quot; را شکل می‌دهند. آنچه ما را از یک ارائه‌دهنده
              خدمات، به یک همراه واقعی در مسیر ساختن تبدیل می‌کند، مأموریت،
              چشم‌انداز، مسئولیت اجتماعی و فرهنگ کاری استودیو اندیشه است.
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

                <p className="text-text-dark text-justify">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
