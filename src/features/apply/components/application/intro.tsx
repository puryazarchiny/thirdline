// #############################################################################
// # Imports
// #############################################################################

// node_modules
import Image from "next/image";

// src
import { cn } from "@/utils";

// #############################################################################
// # Components
// #############################################################################

export default function Intro() {
  return (
    <div
      className={cn(
        "bg-primary-500 relative flex w-full flex-col gap-4 overflow-hidden rounded-lg px-8 py-16",
        "lg:w-80",
      )}
    >
      <h3 className="text-xl font-bold">
        همراهـــــی از اینجا آغـــاز می‌شود...
      </h3>

      <p className="text-text-dark text-justify">
        اگر فکر می‌کنید طرح یا محصول شما با مسیرهای اندیشه هم‌راستاست، و تیم‌تان
        آماده‌ی تعهد، اصلاح، ساختن و پیش‌بردن است، فرم را با دقت پر کنید.
        اطلاعات شما با دقت بررسی می‌شود و در صورت تناسب، وارد مرحله گفت‌وگوی
        اولیه خواهیم شد.
      </p>

      <Image
        src={"/images/curves.png"}
        alt="منحنی‌ها"
        width={544}
        height={350}
        className="absolute inset-0 h-full object-cover"
      />
    </div>
  );
}
