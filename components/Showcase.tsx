"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCw, ArrowRight } from "lucide-react";

export default function Showcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex min-h-[620px] w-full items-center overflow-hidden py-20 md:h-[85vh] md:min-h-0 md:py-0">
      
      {/* BACKGROUND IMAGE - Aap yahan apni manual image ka path dal sakte hain */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/laptop-img.png')", // Yahan apni image lagayein
        }}
      >
        {/* Overlay taaki text clear dikhe (Purple gradient theme) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#362A71]/90 via-[#362A71]/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* LEFT SIDE CONTENT - Ab ye full width ya left-aligned ho sakta hai */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            className="border-l-4 border-[#F85A21] pl-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21] sm:text-sm sm:tracking-[0.4em]"
            >
              Window King Experience
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-black uppercase leading-[1.1] text-white sm:text-5xl md:text-7xl"
            >
              Virtual <br /> 
              <span className="text-[#F85A21]">Showroom</span> <br />
              Tour
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-md text-base leading-relaxed text-gray-200 md:text-lg"
            >
              Hamare exclusive designs ko 360 degree mein dekhein. Bina kahin jaye, apne ghar ke liye best windows choose karein.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              {/* 360 Trigger Button */}
              <button 
                onClick={() => setIsOpen(true)}
                className="group flex w-full items-center justify-center gap-4 rounded-full bg-[#F85A21] px-8 py-4 font-black text-white shadow-2xl transition-all hover:bg-white hover:text-[#362A71] sm:w-auto sm:px-10"
              >
                START 360° TOUR 
                <div className="bg-white/20 p-1 rounded-full group-hover:bg-[#362A71]/10">
                  <RotateCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- 360° POP-UP MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#362A71]/95 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 h-[78vh] w-full max-w-6xl overflow-hidden rounded-2xl border-4 border-white/10 bg-black shadow-2xl md:h-[85vh] md:rounded-[2.5rem]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-20 rounded-full bg-[#F85A21] p-3 text-white shadow-xl transition-transform hover:scale-110 md:right-6 md:top-6"
              >
                <X size={24} />
              </button>

              {/* Instruction Label */}
              <div className="absolute left-4 right-16 top-4 z-20 rounded-full border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-md md:left-6 md:right-auto md:top-6 md:px-5">
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white sm:text-xs">
                  <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />
                  Live 360 View: Use Mouse to Rotate
                </p>
              </div>

              {/* 360 Iframe */}
              <iframe 
                src="https://momento360.com/e/u/7f67727195324707a82b3d683073740e?summary=true" 
                className="w-full h-full border-none"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Side Decorative Line */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-[#F85A21]/10 hidden lg:block" />
    </section>
  );
}
