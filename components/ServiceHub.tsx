"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "../components/ui/card-hover-effect"; // Path check karlein
import { ShieldCheck, Truck, Headphones, Settings, Wrench, Star } from "lucide-react";

export default function ServiceHub() {
  const services = [
    { 
      title: "Free Consultation", 
      icon: <Headphones />, 
      description: "Expert advice for your home with our specialized design consultants.",
      link: "#" // Card hover effect ko link zaroori hota hai
    },
    { 
      title: "Fast Delivery", 
      icon: <Truck />, 
      description: "On-time delivery guaranteed with our robust logistics network.",
      link: "#" 
    },
    { 
      title: "Certified Quality", 
      icon: <ShieldCheck />, 
      description: "Tested for global standards to ensure long-lasting durability.",
      link: "#" 
    },
    { 
      title: "Expert Installation", 
      icon: <Settings />, 
      description: "Precision fitting by trained professionals for a perfect seal.",
      link: "#" 
    },
    { 
      title: "Post Sales Service", 
      icon: <Wrench />, 
      description: "24/7 support for maintenance and hassle-free service.",
      link: "#" 
    },
    { 
      title: "Premium Finish", 
      icon: <Star />, 
      description: "Elegant designs & wide range of colors to match your interiors.",
      link: "#" 
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Text (Attractive Look) */}
      <div className="absolute top-10 left-10 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none hidden md:block">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#F85A21] font-bold tracking-[0.4em] uppercase text-sm"
          >
            Our Commitment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mt-4 uppercase"
          >
            Why Choose <span className="text-[#F85A21]">Window King?</span>
          </motion.h2>
          <div className="h-1.5 w-32 bg-[#F85A21] mx-auto mt-6 rounded-full" />
        </div>

        {/* Aceternity Card Hover Effect */}
        {/* Isme maine icons ko render karne ke liye custom logic di hai niche */}
        <div className="max-w-7xl mx-auto">
          <HoverEffect 
            items={services.map((s) => ({
                ...s,
                // Custom icon wrapping inside the title or description if needed
                title: (
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 bg-[#362A71]/20 rounded-lg flex items-center justify-center text-[#F85A21] mb-2">
                            {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
                        </div>
                        <span className="text-white font-bold text-xl uppercase tracking-tight">{s.title}</span>
                    </div>
                )
            }))} 
          />
        </div>

        {/* Bottom Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <button className="px-12 py-4 bg-[#F85A21] text-white font-black rounded-xl hover:bg-white hover:text-[#362A71] transition-all shadow-xl">
            KNOW MORE ABOUT US
          </button>
        </motion.div>

      </div>
    </section>
  );
}