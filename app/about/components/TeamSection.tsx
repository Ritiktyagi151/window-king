"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Cog, DraftingCompass, Headphones } from "lucide-react";

const teamCards = [
  {
    title: "Design Engineers",
    description: "Translate architectural needs into precise window systems.",
    icon: DraftingCompass,
  },
  {
    title: "Production Specialists",
    description: "Handle fabrication with checks for finish and fit.",
    icon: Cog,
  },
  {
    title: "Installation Crew",
    description: "Coordinate neat fitting and site-ready handover.",
    icon: BadgeCheck,
  },
  {
    title: "Support Advisors",
    description: "Guide requirements, delivery updates, and service support.",
    icon: Headphones,
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#f7f7f8] py-16 scroll-mt-28 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
              Team of Experts
            </p>
            <h2 className="text-4xl font-black uppercase leading-none text-[#362A71] sm:text-5xl md:text-6xl">
              People Behind Every Perfect Fit
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              From measurements to final installation, Window King teams keep
              the process practical, coordinated, and focused on durable
              results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[340px] overflow-hidden rounded-2xl shadow-2xl md:h-[440px]"
          >
            <Image
              src="/images/istockphoto-547134212-612x612.jpg"
              alt="Window King expert team"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/65 to-transparent" />
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teamCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-[#362A71]/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#362A71] text-white">
                <card.icon size={25} />
              </div>
              <h3 className="mt-5 text-xl font-black uppercase text-[#362A71]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
