"use client";
import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function InnovationSection() {
  const innovations = [
    {
      title: "Tested for all Weather",
      desc: "Built to withstand extreme heat, heavy rain, and UV rays.",
      img: "https://www.shutterstock.com/shutterstock/photos/2695866349/display_1500/stock-photo-french-aluminum-windows-in-the-house-outside-the-window-winter-2695866349.jpg",
      // Desktop par ye box bada dikhega
      size: "md:col-span-2 md:row-span-2 h-[400px] md:h-full", 
    },
    {
      title: "Rain Track System",
      desc: "Patented design for zero water seepage.",
      img: "https://www.shutterstock.com/shutterstock/photos/2574710117/display_1500/stock-photo-studio-shot-photo-of-cheap-car-on-rainy-track-at-night-with-wind-storm-chaos-with-close-on-wet-glass-2574710117.jpg",
      size: "md:col-span-2 md:row-span-1 h-[250px] md:h-full",
    },
    {
      title: "Hurricane Bar",
      desc: "Reinforced strength for high-wind zones.",
      img: "https://www.shutterstock.com/shutterstock/photos/2550825415/display_1500/stock-photo-boy-looking-out-the-window-while-there-is-a-hurricane-2550825415.jpg",
      size: "md:col-span-1 md:row-span-1 h-[250px] md:h-full",
    },
    {
      title: "Fusion Joints",
      desc: "Perfectly welded corners for air-tight sealing.",
      img: "https://www.shutterstock.com/shutterstock/photos/2461974161/display_1500/stock-photo-fast-food-restaurant-with-drive-thru-photo-realistic-modern-architecture-stone-and-light-yellow-2461974161.jpg",
      size: "md:col-span-1 md:row-span-1 h-[250px] md:h-full",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:h-[85vh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#F85A21] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Engineered Excellence</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#362A71] uppercase leading-none mt-2">
              Quality & <span className="text-gray-400">Innovations</span>
            </h2>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-3 bg-[#362A71] text-white px-6 md:px-8 py-3 rounded-full font-bold text-xs md:text-sm transition-all hover:bg-[#F85A21]"
          >
            EXPLORE TECHNOLOGY <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        {/* Bento Grid - Box sizes are fixed regardless of image dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 flex-grow min-h-0">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-[2rem] bg-gray-100 border border-gray-50 shadow-sm ${item.size}`}
            >
              {/* 'object-cover' ensures the image fills the fixed-size box 
                  without stretching, no matter its original aspect ratio.
              */}
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.title}
              />

              {/* Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                <h3 className="text-white text-lg md:text-xl font-black mb-1 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[10px] md:text-xs font-medium max-w-[250px] line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
                <div className="w-10 h-1 bg-[#F85A21] mt-3 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}