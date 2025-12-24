"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Browser constraints bypass karne ke liye force play
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden md:mt-28 bg-black">
      
      {/* --- Background Video --- */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source 
          src="/video/6036531_Business_Man_3840x2160.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* --- Dark Overlay (Text ki visibility ke liye) --- */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* --- Main Content --- */}
      <div className="relative z-20 flex h-full flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div className="font-black text-4xl md:text-7xl uppercase tracking-tighter text-white drop-shadow-2xl">
            Window King<span className="text-[#F85A21]">+</span>
            <br />
            <span className="text-xl md:text-3xl font-light normal-case tracking-normal block mt-2">
              Better by Design. Built for Life.
            </span>
          </motion.div>

          <motion.p className="text-gray-100 text-sm md:text-lg mt-6 max-w-2xl font-medium leading-relaxed drop-shadow-md">
            India's premier choice for uPVC and Aluminium Windows & Doors. 
            Experience silence, safety, and style in every frame.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <button className="px-10 py-4 bg-[#362A71] text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#F85A21] transition-all shadow-xl active:scale-95">
              View Collection
            </button>
            <button className="px-10 py-4 backdrop-blur-md border border-white/40 text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-[#362A71] transition-all active:scale-95">
              Consult an Expert
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent z-10" />
    </div>
  );
}
