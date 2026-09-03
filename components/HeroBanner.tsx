"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  "/images/banner/banner1.png",
  "/images/banner/banner2.png",
  "/images/banner/banner3.png",
  "/images/banner/banner4.png",
];

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-black pt-24 sm:pt-28 md:h-screen md:min-h-0 md:pt-0">
      {slides.map((slide, index) => (
        <motion.div
          key={slide}
          animate={{
            opacity: activeSlide === index ? 1 : 0,
            scale: activeSlide === index ? 1 : 1.04,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slide}')` }}
        />
      ))}
    </section>
  );
}
