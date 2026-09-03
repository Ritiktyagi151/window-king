"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#362A71] px-4 pb-16 pt-36 sm:px-6 sm:pt-40 md:pb-24">
      <Image
        src="/images/banner/banner1.png"
        alt="Window King architecture"
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
            About Window King
          </p>
          <h1 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
            Designed Around Quality
          </h1>
          <p className="mt-6 max-w-2xl border-l-4 border-[#F85A21] pl-5 text-base font-medium leading-8 text-white/85 md:text-lg">
            Established in 2021, WINDOW KING PRIVATE LIMITED manufactures and
            supplies uPVC glass windows with dependable service from Puri,
            Odisha.
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
              src="/images/banner/banner4.png"
              alt="Premium Window King window design"
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
