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
    <div className="relative w-full min-h-[620px] overflow-hidden bg-black pt-24 sm:pt-28 md:mt-28 md:h-[85vh] md:min-h-0 md:pt-0">
      
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
          <motion.div className="font-black text-4xl uppercase tracking-tighter text-white drop-shadow-2xl sm:text-5xl md:text-7xl">
            Window King<span className="text-[#F85A21]">+</span>
            <br />
            <span className="text-xl md:text-3xl font-light normal-case tracking-normal block mt-2">
              Better by Design. Built for Life.
            </span>
          </motion.div>

          <motion.p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-gray-100 drop-shadow-md sm:text-base md:text-lg">
            India's premier choice for uPVC and Aluminium Windows & Doors. 
            Experience silence, safety, and style in every frame.
          </motion.p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center sm:gap-5">
            <button className="w-full rounded-full bg-[#362A71] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-[#F85A21] active:scale-95 sm:w-auto sm:px-10">
              View Collection
            </button>
            <button className="w-full rounded-full border border-white/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#362A71] active:scale-95 sm:w-auto sm:px-10">
              Consult an Expert
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent z-10" />
    </div>
  );
}
