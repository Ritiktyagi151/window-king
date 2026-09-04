"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const bannerContent: Record<
  string,
  {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    previewImage: string;
  }
> = {
  products: {
    eyebrow: "Window King Products",
    title: "Our Products",
    description:
      "Explore uPVC and aluminium window and door systems designed for homes, offices, and commercial spaces.",
    image: "/images/banner/banner1.png",
    previewImage: "/images/home-page-img/quality.png",
  },
  projects: {
    eyebrow: "Window King Projects",
    title: "Our Projects",
    description:
      "Browse residential, commercial, gallery, and completed project work with real installation references.",
    image: "/images/our-masterpieces/masterslide2.png",
    previewImage: "/images/our-masterpieces/masterpiece4.png",
  },
  "privacy-policy": {
    eyebrow: "Window King",
    title: "Privacy Policy",
    description:
      "Understand how Window King handles enquiry details, project information, and customer communication data.",
    image: "/images/pexels-pixabay-247763.jpg",
    previewImage: "/images/banner/banner3.png",
  },
  terms: {
    eyebrow: "Window King",
    title: "Terms & Conditions",
    description:
      "Review important terms related to quotations, project scope, timelines, approvals, and website usage.",
    image: "/images/pexels-pixabay-247763.jpg",
    previewImage: "/images/banner/banner4.png",
  },
  "raw-data": {
    eyebrow: "Window King",
    title: "Company Information",
    description:
      "Source information and company content collected for Window King website pages.",
    image: "/images/pexels-pixabay-247763.jpg",
    previewImage: "/images/banner/banner2.png",
  },
};

function toTitleCase(value: string) {
  return value
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getBannerContent(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0] ?? "";
  const lastSegment = pathname.split("/").filter(Boolean).at(-1) ?? segment;

  if (bannerContent[segment]) {
    return {
      ...bannerContent[segment],
      title:
        segment === lastSegment
          ? bannerContent[segment].title
          : toTitleCase(lastSegment),
    };
  }

  return {
    eyebrow: "Window King",
    title: toTitleCase(lastSegment || "Window King"),
    description:
      "Premium window and door solutions with dependable service, practical guidance, and quality-focused execution.",
    image: "/images/pexels-pixabay-247763.jpg",
    previewImage: "/images/banner/banner4.png",
  };
}

export default function NonHomeBanner() {
  const pathname = usePathname();
  const content = getBannerContent(pathname);

  if (pathname === "/" || pathname === "/contact") {
    return null;
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#362A71] px-4 pb-16 pt-36 sm:px-6 sm:pt-40 md:pb-24">
      <Image
        src={content.image}
        alt={content.title}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#241b50]/75" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-white"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl border-l-4 border-[#F85A21] pl-5 text-base font-medium leading-8 text-white/85 md:text-lg">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative hidden h-[420px] overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:block"
        >
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={content.previewImage}
              alt={`${content.title} preview`}
              fill
              sizes="540px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
