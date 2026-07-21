"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Components Imports
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FactsheetSection from "../components/FactsheetSection";
import InfrastructureSection from "../components/InfrastructureSection";
import MentorSection from "../components/MentorSection";
import TimelineSection from "../components/TimelineSection";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const sections = [
    { id: "stats", component: <StatsSection /> },
    { id: "profile", component: <ProfileContent /> },
    { id: "factsheet", component: <FactsheetSection /> },
    { id: "infrastructure", component: <InfrastructureSection /> },
    { id: "mentor", component: <MentorSection /> },
  ];

  return (
    <main className="relative bg-[#362A71] selection:bg-[#F85A21] selection:text-white">
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-1.5 bg-[#F85A21] origin-top z-[200] shadow-[-2px_0_10px_rgba(248,90,33,0.3)]"
        style={{ scaleY }}
      />

      <section className="relative z-[10] bg-white">
        <HeroSection />
      </section>
      
      {/* Container height is essential for scroll travel */}
      <div ref={containerRef} className="relative">
        {sections.map((section, index) => (
          <StackingCard 
            key={section.id} 
            index={index} 
            total={sections.length}
            progress={scrollYProgress}
          >
            {section.component}
          </StackingCard>
        ))}
      </div>

      <footer className="relative z-[150] bg-[#362A71] px-4 py-10 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-white/20 md:tracking-[1em]">
        Window King Private Limited
      </footer>
    </main>
  );
}

function StackingCard({ children, index, total, progress }: any) {
  // Stacking logic: 
  // 1. Target scale kam hoga taaki niche wala card side se dikhe
  const targetScale = 1 - ((total - index) * 0.04);
  
  // 2. Animation range
  const start = index / total;
  const end = (index + 1) / total;
  
  const scale = useTransform(progress, [start, end], [1, targetScale]);

  return (
    <div 
      className="flex min-h-screen items-center justify-center md:sticky md:top-0 md:h-screen"
      style={{ 
        // Z-INDEX SABSE IMPORTANT HAI: Naya card hamesha pichle se upar hona chahiye
        zIndex: index + 20 
      }}
    >
      <motion.div 
        style={{ 
          scale,
          // Har naya card thoda niche se start hoga (Stacking offset)
          top: `calc(4vh + ${index * 20}px)` 
        }}
        className="relative mx-3 h-auto min-h-[82vh] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.15)] md:mx-10 md:h-[85vh] md:rounded-[2.5rem]"
      >
        <div className="h-full overflow-y-auto pt-6 custom-scrollbar md:pt-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function ProfileContent() {
  return (
    <section className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 md:py-10">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-black uppercase leading-none text-[#362A71] sm:text-5xl">
            Window <span className="text-[#F85A21]">King</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            We are Window King, a leading uPVC window company committed to high-quality products. 
            With years of experience, we have built a reputation for excellence and reliability.
          </p>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            Hamara uPVC Top Hung, Noise Proofing aur Casement Windows range best grade products se bana hai.
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-[#F85A21] bg-gray-50 p-6 shadow-inner md:rounded-[2rem] md:border-l-8 md:p-8">
           <h3 className="text-[#362A71] font-black text-xl mb-4 uppercase">Company Highlights</h3>
           <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-tighter">
              <li className="flex items-center gap-2">• 50,000 Sq. Ft. Facility</li>
              <li className="flex items-center gap-2">• German CNC Technology</li>
              <li className="flex items-center gap-2">• 11 to 25 Skilled Experts</li>
           </ul>
        </div>
      </div>
      <div className="mt-10">
        <TimelineSection />
      </div>
    </section>
  );
}
