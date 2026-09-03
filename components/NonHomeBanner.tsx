"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  about: "About Window King",
  products: "Our Products",
  contact: "Contact Us",
  "privacy-policy": "Privacy Policy",
  terms: "Terms & Conditions",
  "raw-data": "Company Information",
};

function getPageTitle(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0] ?? "";

  return (
    pageTitles[segment] ??
    segment
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
}

export default function NonHomeBanner() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/contact") {
    return null;
  }

  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-[#362A71] px-6 pb-10 pt-36 sm:min-h-[420px] sm:px-10 sm:pb-14 lg:min-h-[480px] lg:px-16">
      <Image
        src="/images/pexels-pixabay-247763.jpg"
        alt="Modern Window King window installation"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#241b50]/75" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#F85A21]">
          Window King
        </p>
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {getPageTitle(pathname)}
        </h1>
      </div>
    </section>
  );
}
