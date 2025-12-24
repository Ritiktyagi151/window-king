"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Wind, VolumeX, Droplets } from "lucide-react";

export default function TrustSection() {
  const features = [
    { 
        title: "Low Maintenance", 
        icon: <Zap size={20} />, 
        img: "https://png.pngtree.com/png-clipart/20231011/original/pngtree-isolated-3d-rendering-of-a-modern-window-for-home-png-image_13294342.png" 
    },
    { 
        title: "Energy Efficient", 
        icon: <ShieldCheck size={20} />, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19QygKp4-ahFYNF74U0sjxLaB697DcsyswQ&s" 
    },
    { 
        title: "Rainwater Insulation", 
        icon: <Droplets size={20} />, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Q2pKCdv-lqpX209SnugxCYl90SJmBenVCA&s" 
    },
    { 
        title: "Noise Insulation", 
        icon: <VolumeX size={20} />, 
        img: "https://img.interiorcompany.com/interior/webproduct/776638684132852600337.png?aio=w-768;" 
    },
    { 
        title: "Storm Resistant", 
        icon: <Wind size={20} />, 
        img: "https://i.pinimg.com/736x/43/e2/bc/43e2bc41c54b686b9af6383546761355.jpg" 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(features[0].img);

  // Auto-change logic (8 Seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % features.length;
        setActiveImage(features[nextIndex].img);
        return nextIndex;
      });
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [features]);

  return (
    <section className="w-full bg-[#fcfcfc] md:min-h-[80vh] flex items-center overflow-hidden py-12 mb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
          
          {/* Left Side: Image Layer */}
          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative w-full max-w-[500px] bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl">
              
              {/* Dynamic Image with Animation */}
              <div className="relative h-[250px] md:h-[350px] w-full">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    src={activeImage} 
                    alt="Durability" 
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain" 
                  />
                </AnimatePresence>
              </div>

              {/* Progress Bar (Visual indicator for 8 seconds) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  key={activeIndex}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-full bg-[#F85A21]"
                />
              </div>

              <div className="absolute -top-4 -left-4 bg-[#362A71] text-white p-5 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-xl font-black italic">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Secure</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive List */}
          <motion.div 
            className="w-full lg:w-1/2 bg-white border border-gray-100 p-8 md:p-6 flex flex-col justify-center rounded-[2.5rem] shadow-2xl z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="text-[#F85A21] font-bold tracking-[0.3em] uppercase mb-4 text-xs">
              Safety First
            </span>
            
            <h2 className="text-3xl md:text-5xl flex flex-wrap gap-x-3 items-center font-black mb-6 text-[#362A71] leading-tight">
              Safety 
              <span className="text-gray-400 font-light italic text-2xl md:text-3xl">Worth Your Trust</span>
            </h2>

            <div className="grid grid-cols-1 gap-2 mb-4">
              {features.map((f, i) => (
                <div 
                  key={f.title} 
                  onClick={() => {
                      setActiveImage(f.img);
                      setActiveIndex(i);
                  }}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activeIndex === i 
                    ? "bg-[#F85A21]/5 border-[#F85A21]/30 translate-x-2 shadow-sm" 
                    : "bg-transparent border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeIndex === i ? "bg-[#F85A21] text-white" : "text-[#F85A21] bg-[#F85A21]/10"
                  }`}>
                    {f.icon}
                  </div>
                  <h4 className={`text-sm font-bold uppercase tracking-tight transition-colors ${
                    activeIndex === i ? "text-[#F85A21]" : "text-[#362A71]"
                  }`}>
                    {f.title}
                  </h4>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-[#F85A21] text-white font-black rounded-2xl hover:bg-[#362A71] transition-all shadow-lg shadow-[#F85A21]/20">
              EXPLORE ALL FEATURES
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}