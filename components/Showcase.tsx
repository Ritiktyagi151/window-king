"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCw, ArrowRight } from "lucide-react";

export default function Showcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
      
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
              className="text-[#F85A21] font-bold tracking-[0.4em] uppercase text-sm border-l-4 border-[#F85A21] pl-4"
            >
              Window King Experience
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase"
            >
              Virtual <br /> 
              <span className="text-[#F85A21]">Showroom</span> <br />
              Tour
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-200 text-lg leading-relaxed max-w-md"
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
                className="bg-[#F85A21] text-white px-10 py-4 rounded-full font-black flex items-center gap-4 hover:bg-white hover:text-[#362A71] transition-all shadow-2xl group"
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
              className="relative w-full max-w-6xl h-[75vh] md:h-[85vh] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white/10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-20 bg-[#F85A21] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>

              {/* Instruction Label */}
              <div className="absolute top-6 left-6 z-20 bg-black/50 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
                <p className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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