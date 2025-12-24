"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Star, Award } from "lucide-react";

// --- AWARDS DATA ---
const awards = [
  {
    id: 1,
    img: "https://via.placeholder.com/100", // Apne awards logo yahan lagayein
    title: "Superbrands India 2025-26",
    desc: "Consumer Validated",
    icon: <Trophy className="text-yellow-500" />
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Most Preferred Brand 2025-26",
    desc: "Windows and Doors Category",
    icon: <Star className="text-orange-500" />
  },
  {
    id: 3,
    img: "https://via.placeholder.com/100",
    title: "Iconic Brand of India 2025",
    desc: "By ET Now",
    icon: <Award className="text-blue-500" />
  },
];

// --- CLIENTS DATA ---
const clients = [
  { name: "ITM University", logo: "https://www.shutterstock.com/shutterstock/photos/2646844501/display_1500/stock-photo-logo-design-for-a-car-oil-brand-named-disluven-incorporate-a-golden-oil-drop-integrated-with-a-2646844501.jpg" },
  { name: "Fortis Hospitals", logo: "https://www.shutterstock.com/shutterstock/photos/2383636793/display_1500/stock-vector-creative-purity-icon-vector-sign-2383636793.jpg" },
  { name: "Sheyn School", logo: "https://www.shutterstock.com/shutterstock/photos/2714546831/display_1500/stock-photo-a-logo-for-a-podcast-that-is-called-industrial-world-2714546831.jpg" },
  { name: "XLRI", logo: "https://www.shutterstock.com/shutterstock/photos/1225777705/display_1500/stock-vector-industrial-logo-design-1225777705.jpg" },
  { name: "Zauba Corp", logo: "https://www.shutterstock.com/shutterstock/photos/1324410407/display_1500/stock-vector-industrial-logo-design-1324410407.jpg" },
];

export default function TrustSections() {
  return (
    <div className="bg-white overflow-hidden">
      
      {/* --- SECTION 1: AWARDS & ACCREDITATIONS --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-[#362A71] uppercase tracking-tighter"
          >
            Awards & <span className="text-[#F85A21]">Accreditations</span>
          </motion.h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#362A71] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#F85A21] transition-all"
          >
            READ ALL <ArrowRight size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-gray-50 rounded-2xl border-b-4 border-transparent hover:border-[#F85A21] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="absolute top-4 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                {award.icon}
              </div>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white p-2 rounded-xl shadow-inner flex items-center justify-center">
                  <img src={award.img} alt={award.title} className="max-w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h3 className="font-bold text-[#362A71] text-lg leading-tight">{award.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">{award.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: CLIENTELE (Infinite Marquee Effect) --- */}
      <section className="py-20 bg-[#362A71] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
          <div className="text-white">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Our <span className="text-[#F85A21]">Clientele</span></h2>
            <p className="text-gray-300 mt-2">Trusted by India's leading institutions and corporations.</p>
          </div>
          <button className="text-[#F85A21] border-2 border-[#F85A21] px-6 py-2 rounded-full font-bold hover:bg-[#F85A21] hover:text-white transition-all text-sm">
            VIEW ALL
          </button>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee flex items-center whitespace-nowrap gap-16">
            {[...clients, ...clients].map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1 }}
                className="mx-4 flex-shrink-0 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-16 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" 
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom CSS for Marquee (Add this in your globals.css if possible, or use Tailwind config) */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
}