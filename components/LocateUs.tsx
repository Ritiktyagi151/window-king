"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ChevronRight, Globe, ArrowRight, ArrowLeft } from "lucide-react";

export default function LocateUs() {
  // 9 Random Images for the Slider
  const sliderImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    "https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=1000",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1000",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // Auto Slider Logic (5 seconds per image)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const locations = [
    {
      city: "Noida",
      address: "The GIP Mall, 2nd floor, Sector 38, Noida - 201301. Near Sector 18 metro station",
      email: "response@windowking.com",
      phone: "1800 102 9880"
    },
    {
      city: "Gurgaon",
      address: "Signature Studio. Ground floor, Plot no 82, Sector 32, Gurugram, Haryana 122001, India",
      email: "response@windowking.com",
      phone: "1800 102 9880"
    },
    {
      city: "Mumbai",
      address: "Sea sequence Building, Appasaheb Marathe Marg, Mumbai, Maharashtra 400025",
      email: "response@windowking.com",
      phone: "1800 102 9880"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 md:py-20">
      
      {/* Animated Floating Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-no-repeat opacity-[0.03]"
          style={{ backgroundImage: "url('/images/pattern.png')" }} 
        />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#362A71]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F85A21]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="text-center lg:text-left">
            <h2 className="text-4xl font-black uppercase leading-none text-[#362A71] sm:text-5xl md:text-6xl">
              Locate <span className="text-[#F85A21]">Us</span>
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#F85A21] lg:mx-0" />
          </motion.div>
          
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F85A21] px-6 py-3 text-sm font-bold text-white shadow-xl transition-all hover:bg-[#362A71] sm:w-auto sm:px-8">
              <Globe size={18} /> VIRTUAL SHOWROOM
            </button>
            <div className="flex gap-2">
              <select className="w-full rounded-xl border border-gray-200 bg-white px-6 py-3 text-xs font-bold text-[#362A71] shadow-sm focus:outline-none sm:w-auto">
                <option>Select City</option>
              </select>
            </div>
          </div>
        </div>

        {/* 9 Image Parallax Slider Area */}
        <div className="relative mb-12 h-[320px] w-full overflow-hidden rounded-2xl border-8 border-white shadow-2xl sm:h-[400px] md:mb-16 md:h-[500px] md:rounded-[3rem] md:border-[12px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImg}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Image with Parallax Style */}
              <div 
                className="h-full w-full bg-cover bg-center md:bg-fixed"
                style={{ backgroundImage: `url(${sliderImages[currentImg]})` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/60 via-transparent to-black/10" />
          
          {/* Slider Controls */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:bottom-10 md:px-10">
             <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xl font-black text-white shadow-2xl backdrop-blur-md md:px-8 md:py-4 md:text-3xl">
                <span className="text-[#F85A21]">{currentImg + 1}</span> / 9 <span className="ml-2 hidden text-sm font-light uppercase tracking-widest sm:inline">Studios</span>
             </div>
             
             <div className="flex gap-3">
                <button 
                  onClick={() => setCurrentImg((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
                  className="rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition-all hover:bg-[#F85A21] md:p-4"
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  onClick={() => setCurrentImg((prev) => (prev + 1) % sliderImages.length)}
                  className="rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition-all hover:bg-[#F85A21] md:p-4"
                >
                  <ArrowRight size={24} />
                </button>
             </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-xl backdrop-blur-md md:rounded-[2.5rem] md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#362A71] p-4 rounded-2xl text-white group-hover:bg-[#F85A21] transition-colors">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#362A71] tracking-tight">{loc.city}</h3>
              </div>
              
              <div className="space-y-4 text-sm font-medium text-gray-600">
                <p className="leading-relaxed min-h-[60px]">{loc.address}</p>
                <div className="h-[1px] bg-gray-100 w-full my-4" />
                <div className="flex min-w-0 items-center gap-3 text-[#362A71] transition-colors hover:text-[#F85A21]">
                  <Mail size={18} />
                  <span className="break-all font-bold">{loc.email}</span>
                </div>
                <div className="flex items-center gap-3 text-[#362A71] font-black text-lg">
                  <Phone size={18} />
                  <span>{loc.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
