"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Maximize2, ArrowRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const GallerySection = () => {
  const sliderImages = [
    { url: "/images/our-masterpieces/masterslide2.png", title: "" },
    { url: "/images/our-masterpieces/masterslide4.png", title: "" },
    { url: "/images/our-masterpieces/masterslider3.png", title: "" },
  ];

  const gridImages = [
    { id: 1, url: "/images/our-masterpieces/master1.png", size: "md:col-span-2 md:row-span-2", title: "Architectural Marvel" },
    { id: 2, url: "/images/our-masterpieces/master2.png", size: "", title: "Interior Details" },
    { id: 3, url: "/images/our-masterpieces/master3.png", size: "", title: "Minimalist Style" },
    { id: 4, url: "/images/our-masterpieces/masterpiece4.png", size: "md:col-span-2", title: "Premium Finishes" },
  ];

  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-black uppercase text-[#362A71] sm:text-4xl">Our Masterpieces</h2>
            <div className="h-1 w-20 bg-[#F85A21] mt-2"></div>
          </div>
          <p className="text-gray-500 max-w-md text-right hidden md:block">
            Explore our premium collection of window designs and interior inspirations.
          </p>
        </div>

        {/* --- PART 1: TOP SLIDER --- */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="h-[320px] w-full sm:h-[420px] md:h-[500px]"
          >
            {sliderImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full group">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="px-4 text-center text-white"
                    >
                      <h3 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">{img.title}</h3>
                      <button className="bg-[#F85A21] px-6 py-2 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-[#362A71] transition-colors">
                        View Project <ArrowRight size={18} />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- PART 2: MASONRY GRID --- */}
        <div className="grid grid-cols-1 gap-4 auto-rows-[220px] sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[200px]">
          {gridImages.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 0.98 }}
              className={`relative group overflow-hidden rounded-xl shadow-lg ${item.size}`}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#362A71]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-[#F85A21] font-bold text-sm mb-1 uppercase tracking-wider">Premium Selection</p>
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
                <div className="mt-4 flex gap-2">
                   <div className="p-2 bg-white/20 rounded-full text-white backdrop-blur-sm">
                      <Maximize2 size={18} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
