"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function RangeSection() {
  const categories = ["Design", "Series", "Material", "Space"];

  return (
    <section className="w-full bg-white md:h-[80vh] flex items-center overflow-hidden py-20 md:py-0 my-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative w-full">
        
        {/* Decorative Text - Subtle Light Version */}
        <div className="absolute top-0 right-0 text-[8rem] lg:text-[10rem] font-black text-gray-100 select-none -z-0 leading-none tracking-tighter hidden md:block">
          RANGE
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-0 relative z-10">
          
          {/* Right Side: Image Layer */}
          <motion.div 
            className="w-full lg:w-7/12 relative group"
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-50 p-2 md:p-4">
              <img 
                src="/images/window.png" 
                alt="Range" 
                className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#F85A21] text-white p-5 md:p-8 rounded-2xl shadow-xl z-20">
              <p className="text-2xl md:text-4xl font-black leading-none">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-90">Years Exp.</p>
            </div>
          </motion.div>

          {/* Left Side: Light Content Box */}
          <motion.div 
            className="w-full lg:w-5/12 bg-white border border-gray-100 p-8 md:p-12 flex flex-col justify-center rounded-3xl lg:-mr-20 shadow-2xl z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="text-[#F85A21] font-bold tracking-[0.2em] uppercase mb-3 text-xs md:text-sm">
              Premium Collection
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#362A71] leading-tight">
              Wide Range <br />
              <span className="text-gray-400 font-light italic text-2xl md:text-3xl tracking-tight">Windows & Doors</span>
            </h2>
            
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Transform your living space with designs that balance safety and modern aesthetics perfectly.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {categories.map((cat) => (
                <div key={cat} className="group flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:border-[#F85A21] hover:bg-[#F85A21]/5 transition-all cursor-pointer">
                  <span className="font-bold text-[#362A71] uppercase text-[10px] md:text-xs tracking-wider">{cat}</span>
                  <ArrowUpRight size={14} className="text-[#F85A21] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-[#362A71] text-white font-black rounded-xl text-sm hover:bg-[#F85A21] transition-all shadow-lg">
              EXPLORE CATALOGUE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}