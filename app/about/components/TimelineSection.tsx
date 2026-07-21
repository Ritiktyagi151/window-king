"use client";
import { motion } from "framer-motion";

export default function TimelineSection() {
  const milestones = [
    { year: "2010", title: "The Foundation", desc: "Start of a vision to bring silence and dust-free living to India." },
    { year: "2015", title: "The Expansion", desc: "Established North India's largest integrated uPVC manufacturing unit." },
    { year: "2020", title: "Luxury Aluminium", desc: "Launched Slim-line profiles for world-class architectural designs." },
    { year: "2024", title: "Window King+", desc: "Setting a new benchmark with AI-integrated smart window solutions." }
  ];

  return (
    <section className="relative bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center md:mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-[#362A71] sm:text-5xl md:text-6xl">Our <span className="text-[#F85A21]">Evolution</span></h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest mt-2">A Legacy of Quality</p>
        </div>

        <div className="relative ml-4 border-l-2 border-gray-100 md:ml-0 md:flex md:justify-between md:border-l-0 md:before:absolute md:before:top-1/2 md:before:h-1 md:before:w-full md:before:bg-gray-100">
          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative mb-10 px-6 md:mb-0 md:w-1/4 md:px-8"
            >
              <div className="hidden md:block absolute top-1/2 left-0 w-6 h-6 bg-[#F85A21] rounded-full -translate-y-1/2 -translate-x-3 z-10 border-4 border-white" />
              <div className="text-[#F85A21] text-5xl font-black mb-4">{m.year}</div>
              <h3 className="text-[#362A71] font-bold text-xl uppercase mb-2">{m.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
