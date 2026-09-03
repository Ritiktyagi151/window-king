"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Settings, Users, Heart, CheckCircle2, Warehouse } from "lucide-react";

export default function InfrastructureSection() {
  // Reveal Variants: Isme clipPath hataya gaya hai taaki image hide na ho
  const revealVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Custom ease for premium feel
      } 
    }
  };

  return (
    <section id="infrastructure" className="relative overflow-hidden bg-white py-14 scroll-mt-24 md:py-24">
      {/* Background Subtle Text */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden -translate-y-1/2 select-none text-[15rem] font-black tracking-tighter text-gray-50 md:block">
        FACTORY
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        
        {/* Left Side: Image Frame */}
        <div className="relative group">
          <motion.div 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative h-[320px] min-h-[320px] w-full border-[10px] border-[#362A71]/5 bg-white p-2 shadow-xl sm:h-[400px] md:h-[550px] md:min-h-[400px] md:border-[15px] md:p-3"
          >
           <Image 
  src="/images/pexels-pixabay-247763.jpg" 
  alt="Window King Factory Machinery" 
  fill 
  priority
  className="object-cover rounded-sm"
/>
            {/* Glass Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute -bottom-8 right-4 z-20 bg-[#F85A21] p-5 text-white shadow-2xl md:-bottom-10 md:-right-10 md:p-8"
          >
            <p className="font-black text-3xl md:text-4xl leading-none">2021</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Established</p>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tighter text-[#362A71] md:mb-8 md:text-6xl">
              Manufacturing <br /> <span className="text-[#F85A21]">Might</span>
            </h2>
            <p className="mb-10 border-l-4 border-[#F85A21] pl-5 text-base italic leading-relaxed text-gray-600 md:pl-6 md:text-lg">
              Established in 2021, WINDOW KING PRIVATE LIMITED manufactures and supplies uPVC glass windows with a focus on quality products and dependable service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <InfoPoint idx={1} icon={<Settings size={22} />} title="Focused Manufacturing" desc="uPVC glass window production handled with attention to quality and finish." />
            <InfoPoint idx={2} icon={<Users size={22} />} title="Customer Guidance" desc="Support that helps customers choose suitable window solutions for their needs." />
            <InfoPoint idx={3} icon={<Warehouse size={22} />} title="Reliable Supply" desc="Manufacturer and supplier capabilities for residential and commercial requirements." />
            <InfoPoint idx={4} icon={<Heart size={22} />} title="Service First" desc="A dependable service approach that builds trust beyond the initial enquiry." />
          </div>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-gray-100 pt-8 font-bold text-[#362A71] text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#F85A21]" size={16}/> 100% Bespoke</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#F85A21]" size={16}/> Factory Tested</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#F85A21]" size={16}/> Expert Fitting</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPoint({ icon, title, desc, idx }: { icon: React.ReactNode; title: string; desc: string; idx: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="flex gap-4"
    >
      <div className="bg-[#362A71]/5 p-3 rounded-xl text-[#F85A21] h-fit">{icon}</div>
      <div>
        <h4 className="font-black text-[#362A71] text-sm uppercase mb-1">{title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
