"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// --- COUNT UP ANIMATION COMPONENT ---
function Counter({ value, isInView }: { value: string; isInView: boolean }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, ""); 
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span className="flex items-center">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { label: "Products Available", value: "35+" },
    { label: "Total Employees", value: "25+" }, //
    { label: "Manufacturing Area", value: "50k" }, //
    { label: "Expert Engineers", value: "10+" }, //
  ];

  return (
    <div className="relative overflow-hidden bg-[#362A71] py-14 md:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat grayscale-[50%]"
        style={{ backgroundImage: "url('/images/pexels-pixabay-247763.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#362A71]/60 z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, { once: false, amount: 0.5 });

            return (
              <motion.div
                ref={cardRef}
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                // Cards par blur aur glassmorphism effects apply kiya gaya hai
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-[#F85A21]/90 hover:scale-105 md:rounded-3xl md:p-10"
              >
                {/* Internal Glow Effect */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 blur-3xl rounded-full transition-opacity group-hover:opacity-20" />

                <span className="flex items-center text-4xl font-black tracking-tighter text-white transition-transform group-hover:scale-110 md:text-6xl">
                  {/[0-9]/.test(stat.value) ? (
                    <Counter value={stat.value} isInView={isCardInView} />
                  ) : (
                    stat.value
                  )}
                </span>
                
                <span className="text-[#F85A21] text-[10px] font-bold uppercase tracking-[0.2em] mt-3 group-hover:text-white transition-colors text-center">
                  {stat.label}
                  {stat.label === "Manufacturing Area" && (
                    <span className="block text-[8px] opacity-80 mt-1 uppercase tracking-widest font-medium">Sq. Ft. Facility</span> //
                  )}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
