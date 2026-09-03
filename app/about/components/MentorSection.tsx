"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function MentorSection() {
  return (
    <section id="mentor" className="bg-white py-16 scroll-mt-24 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto h-[360px] w-full max-w-md overflow-hidden rounded-2xl bg-[#362A71] shadow-2xl md:h-[500px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Rajesh Parida"
            fill
            sizes="(min-width: 1024px) 430px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h2 className="text-3xl font-black uppercase">Rajesh Parida</h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-[#F85A21]">
              Company Mentor
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F85A21] text-white shadow-xl">
            <Quote size={30} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
            The Guiding Force
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none text-[#362A71] sm:text-5xl md:text-6xl">
            Guided By Quality And Customer Trust
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-9 text-gray-600 md:text-2xl">
            Our mentor Rajesh Parida guides WINDOW KING PRIVATE LIMITED with a
            focus on quality uPVC glass windows, dependable service, and
            customer-first decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
