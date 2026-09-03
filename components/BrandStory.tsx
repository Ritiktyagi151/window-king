"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect"; 
import { ShieldCheck, Zap, Award } from "lucide-react";

export default function BrandStory() {
  // Aceternity Words
  const words = [
    { text: "WINDOW" },
    { text: "KING" },
    { text: "PRIVATE" },
    { text: "LIMITED.", className: "text-[#362A71]" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#F85A21] sm:text-sm sm:tracking-[0.3em]">
              Premium Manufacturer & Trader
            </p>
            
            <TypewriterEffectSmooth className="bg-amber-300" words={words} />

            <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                Established in <span className="font-semibold">2021</span>, we,
                <span className="text-[#362A71] font-bold"> WINDOW KING PRIVATE LIMITED</span>, are a trusted
                manufacturer and supplier of
                <span className="bg-orange-50 px-1 font-medium"> uPVC glass windows</span>.
              </p>
              
              <p className="text-base text-gray-600">
                From Puri, we are known for
                <span className="font-semibold italic"> quality products, dependable service, and practical window solutions</span>
                for residential and commercial needs.
              </p>

              {/* Mentor Highlight Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-10 rounded-2xl border-l-4 border-[#362A71] bg-gray-50 p-5 shadow-sm md:border-l-8 md:p-6"
              >
                <p className="text-sm uppercase tracking-widest text-[#F85A21] font-bold mb-2">Our Visionary Mentor</p>
                <h3 className="text-2xl font-black text-[#362A71] mb-2">MR. RAJESH PARIDA</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The guiding force behind our rapid growth. His deep expertise encourages us 
                  to bring out perfect innovation in every window and door we craft.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Animated Feature Grid */}
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#362A71]/5 blur-[100px] rounded-full"></div>
            
            <FeatureCard 
              icon={<ShieldCheck className="text-white" />} 
              title="Quality Products" 
              desc="uPVC glass windows made with attention to finish and durability."
              color="bg-[#362A71]"
              delay={0.2}
            />
            <FeatureCard 
              icon={<Zap className="text-white" />} 
              title="Dependable Service" 
              desc="Customer-focused support from enquiry through installation."
              color="bg-[#F85A21]"
              delay={0.4}
            />
            <div className="col-span-2">
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group"
               >
                  <Award className="absolute right-4 bottom-4 text-white/10 w-32 h-32 rotate-12" />
                  <h4 className="text-xl font-bold mb-2">Established in 2021</h4>
                  <p className="text-gray-400 text-sm">A growing Puri-based company focused on trusted uPVC window manufacturing and supply.</p>
               </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  color,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="flex flex-col gap-4 rounded-2xl border border-gray-50 bg-white p-5 shadow-xl shadow-gray-100 md:rounded-3xl md:p-6"
    >
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-[#333]">{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}
