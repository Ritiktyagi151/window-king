"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative mt-12 flex min-h-[560px] items-center overflow-hidden bg-[#362A71] py-24 md:h-[70vh] md:min-h-0 md:py-0">
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
          alt="Window King Architecture" 
          fill 
          className="object-cover scale-105"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-black uppercase leading-none tracking-tighter text-white sm:text-6xl md:text-8xl md:leading-[0.85]">
            Better by <br /> <span className="text-[#F85A21]">Design.</span>
          </h1>
          <p className="mt-8 max-w-xl border-l-4 border-[#F85A21] pl-5 text-base font-light leading-relaxed text-white/80 sm:text-lg md:pl-6 md:text-2xl">
            Window King is a leading uPVC window company committed to high-quality products and exceptional customer service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
