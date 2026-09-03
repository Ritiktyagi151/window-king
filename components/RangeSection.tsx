"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function RangeSection() {
  const categories = [
    {
      title: "uPVC Window and Door Series",
      href: "/products/upvc",
      image: "/images/window.png",
      items: [
        "uPVC Sliding Window",
        "uPVC Casement Window",
        "uPVC Fixed Window",
        "uPVC Sliding Door",
        "uPVC Lift And Sliding Door",
      ],
    },
    {
      title: "Aluminium Window and Door Series",
      href: "/products/aluminium",
      image: "/images/istockphoto-547134212-612x612.jpg",
      items: [
        "Aluminium Sliding Window",
        "Aluminium Casement Window",
        "Aluminium Fixed Window",
        "Aluminium Sliding Door",
        "Aluminium Folding Door",
      ],
    },
  ];

  return (
    <section className="my-8 flex w-full items-center overflow-hidden bg-white py-14 md:my-10 md:min-h-[80vh] md:py-20">
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
            <div className="overflow-hidden rounded-2xl bg-gray-50 p-2 shadow-xl md:rounded-3xl md:p-4">
              <img 
                src="/images/window.png" 
                alt="Range" 
                className="h-[260px] w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[320px] md:h-[400px] md:rounded-2xl lg:h-[480px]" 
              />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#F85A21] text-white p-5 md:p-8 rounded-2xl shadow-xl z-20">
              <p className="text-2xl md:text-4xl font-black leading-none">2021</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-90">Established</p>
            </div>
          </motion.div>

          {/* Left Side: Light Content Box */}
          <motion.div 
            className="z-10 flex w-full flex-col justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl md:rounded-3xl md:p-12 lg:-mr-20 lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="text-[#F85A21] font-bold tracking-[0.2em] uppercase mb-3 text-xs md:text-sm">
              Premium Collection
            </span>
            
            <h2 className="mb-4 text-3xl font-black leading-tight text-[#362A71] sm:text-4xl md:text-5xl">
              Product Range <br />
              <span className="text-gray-400 font-light italic text-2xl md:text-3xl tracking-tight">Windows & Doors</span>
            </h2>
            
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Explore Window King uPVC Window and Door Series along with
              Aluminium Window and Door Series for home, office, and commercial
              openings.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {categories.map((cat) => (
                <Link key={cat.title} href={cat.href} className="group grid grid-cols-[84px_1fr_auto] items-center gap-4 rounded-xl border border-gray-100 p-3 transition-all hover:border-[#F85A21] hover:bg-[#F85A21]/5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-black uppercase leading-snug text-[#362A71]">
                      {cat.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs font-semibold leading-5 text-gray-500">
                      {cat.items.join(" | ")}
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#F85A21] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              ))}
            </div>

            <Link href="/products/upvc" className="block w-full py-4 bg-[#362A71] text-center text-white font-black rounded-xl text-sm hover:bg-[#F85A21] transition-all shadow-lg">
              EXPLORE CATALOGUE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
