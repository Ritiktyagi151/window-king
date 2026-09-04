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
  "/about": {
    eyebrow: "About Window King",
    title: "Designed Around Quality",
    description:
      "Established in 2021, WINDOW KING PRIVATE LIMITED manufactures and supplies uPVC glass windows with dependable service from Puri, Odisha.",
    image: "/images/banner/banner1.png",
    previewImage: "/images/banner/banner4.png",
  },
  "/about/profile": {
    eyebrow: "Company Profile",
    title: "Built For Better Openings",
    description:
      "A Puri-based manufacturer and supplier focused on practical, premium uPVC and aluminium window solutions for homes and commercial spaces.",
    image: "/images/banner/banner2.png",
    previewImage: "/images/our-masterpieces/masterslide2.png",
  },
  "/about/factsheet": {
    eyebrow: "Corporate Factsheet",
    title: "Company At A Glance",
    description:
      "Key business details, product focus, and company information for Window King Private Limited in one clear view.",
    image: "/images/pexels-pixabay-247763.jpg",
    previewImage: "/images/home-page-img/quality.png",
  },
  "/about/infrastructure": {
    eyebrow: "Infrastructure & Machinery",
    title: "Precision Manufacturing Setup",
    description:
      "Automatic machinery, structured workflows, and production discipline support consistent window and door quality.",
    image: "/images/home-page-img/quality5.png",
    previewImage: "/images/home-page-img/quality4.png",
  },
  "/about/team": {
    eyebrow: "Team Of Experts",
    title: "People Behind The Finish",
    description:
      "Trained engineers, production teams, and customer-facing experts work together to deliver dependable window solutions.",
    image: "/images/our-masterpieces/master2.png",
    previewImage: "/images/our-masterpieces/master3.png",
  },
  "/about/mentor": {
    eyebrow: "Our Mentor",
    title: "Guided By Experience",
    description:
      "Leadership guidance helps Window King stay focused on quality products, reliable service, and practical customer support.",
    image: "/images/our-masterpieces/master1.png",
    previewImage: "/images/banner/banner3.png",
  },
};

function getBannerContent(pathname: string) {
  return bannerContent[pathname] ?? bannerContent["/about"];
}

export default function HeroSection() {
  const pathname = usePathname();
  const content = getBannerContent(pathname);

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
