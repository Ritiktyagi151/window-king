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
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", title: "Luxury Living Room" },
    { url: "https://images.unsplash.com/photo-1600607687940-4e524cb35d03", title: "Modern Kitchen Design" },
    { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", title: "Elegant Glass Windows" },
  ];

  const gridImages = [
    { id: 1, url: "https://www.shutterstock.com/shutterstock/photos/2687378145/display_1500/stock-photo-outdoor-photo-of-a-luxurious-desert-home-nestles-gently-into-the-picturesque-rocky-desert-mountain-2687378145.jpg", size: "col-span-2 row-span-2", title: "Architectural Marvel" },
    { id: 2, url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6", size: "col-span-1 row-span-1", title: "Interior Details" },
    { id: 3, url: "https://images.unsplash.com/photo-1484154218962-a197022b5858", size: "col-span-1 row-span-1", title: "Minimalist Style" },
    { id: 4, url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", size: "col-span-2 row-span-1", title: "Premium Finishes" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[#362A71] text-4xl font-black uppercase">Our Masterpieces</h2>
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
            className="h-[500px] w-full"
          >
            {sliderImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full group">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-center text-white"
                    >
                      <h3 className="text-5xl font-bold mb-4">{img.title}</h3>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
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