"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Cog, DraftingCompass, Headphones } from "lucide-react";

const teamCards = [
  {
    title: "Design Engineers",
    description:
      "Experts who translate architectural intent into precise, buildable window and facade systems.",
    icon: DraftingCompass,
  },
  {
    title: "Production Specialists",
    description:
      "Factory teams trained on CNC-led workflows, quality checks, and efficient custom fabrication.",
    icon: Cog,
  },
  {
    title: "Installation Crew",
    description:
      "Site professionals focused on neat fitting, structural safety, and project handover readiness.",
    icon: BadgeCheck,
  },
  {
    title: "Support Advisors",
    description:
      "Customer-first coordinators guiding specification, delivery, and after-sales service.",
    icon: Headphones,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#f7f5ff] py-14 scroll-mt-28 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-[#F85A21] text-xs font-black uppercase tracking-[0.4em] mb-4">
            Team of Experts
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-[#362A71] sm:text-4xl md:text-6xl">
            Built by people who know windows inside out.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            From technical drawings to final installation, every Window King
            project is supported by specialists who combine engineering
            discipline with on-site practicality.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {teamCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-[#362A71]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl md:rounded-[2rem] md:p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#362A71]/5 text-[#F85A21] flex items-center justify-center">
                <card.icon size={26} />
              </div>
              <h3 className="mt-6 text-[#362A71] text-xl font-black uppercase">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
