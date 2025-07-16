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
              <p>خاتون ایرانی</p>

              <div className="flex gap-4">
                <Image
                  src="/icons/linkedin.svg"
                  alt="آیکون لینکدین"
                  width={16}
                  height={16}
                />

                <Image
                  src="/icons/x.svg"
                  alt="آیکون شبکه اجتماعی ایکس"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-fluid-30-48">نقش استودیو در پروژه</h3>

            <p className="text-text-dark text-justify">
              ریشه یکی از پروژه‌هایی‌ست که از ابتدا در استودیو اندیشه متولد شد.
              استودیو، به‌عنوان بنیان‌گذار پروژه، از مرحله ایده‌پردازی، تعریف
              مسئله، ساخت تیم، تدوین مدل سهامی و طراحی مسیر توسعه، مسئولیت کل
              فرآیند را بر عهده گرفت. از فاز «کشف» با تحقیق میدانی، تدوین نقشه
              ذی‌نفعان، مصاحبه‌های عمیق و تحلیل بازار شروع کردیم و در ادامه، مدل
              کسب‌وکار، هویت برند، طراحی تجربه کاربر، معماری سرویس، و سناریوهای
              رشد در فاز «خلق» توسط تیم استودیو طراحی شد. در ادامه، با تشکیل تیم
              فنی و عملیاتی، وارد فاز توسعه MVP شدیم و هم‌زمان، استراتژی ESOP را
              برای جذب و نگهداشت متخصصان تدوین و اجرا کردیم. فرآیند جذب سرمایه
              نیز به‌طور کامل توسط استودیو انجام شد و موفق شدیم تأمین سرمایه
              اولیه را از هلدینگ فاخر دریافت کنیم. اکنون ریشه در مرحله توسعه
              محصول اولیه قرار دارد و استودیو اندیشه همچنان به‌عنوان راهبر رشد،
              توسعه‌دهنده زیرساخت و شریک تجاری‌سازی در کنار تیم باقی مانده است.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
