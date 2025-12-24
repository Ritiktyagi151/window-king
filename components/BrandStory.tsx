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
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#F85A21] font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Premium Manufacturer & Trader
            </p>
            
            <TypewriterEffectSmooth className="bg-amber-300" words={words} />

            <div className="mt-8 space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                We, <span className="text-[#362A71] font-bold">"Window King Private Limited"</span> are a premier 
                Manufacturer, Wholesaler, and Trader of high-quality 
                <span className="bg-orange-50 px-1 font-medium"> UPVC Top Hung Windows, Noise Proofing Solutions, and Casement Windows.</span>
              </p>
              
              <p className="text-base text-gray-600">
                Our offered range consists of best-grade products acknowledged for their 
                <span className="font-semibold italic"> easy-to-use design, superior quality, and long-lasting durability.</span>
              </p>

              {/* Mentor Highlight Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-2xl border-l-8 border-[#362A71] shadow-sm mt-10"
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
          <div className="grid grid-cols-2 gap-4 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#362A71]/5 blur-[100px] rounded-full"></div>
            
            <FeatureCard 
              icon={<ShieldCheck className="text-white" />} 
              title="High Quality" 
              desc="Certified best-grade materials for maximum safety."
              color="bg-[#362A71]"
              delay={0.2}
            />
            <FeatureCard 
              icon={<Zap className="text-white" />} 
              title="Innovation" 
              desc="Deep expertise in modern noise-proofing tech."
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
                  <h4 className="text-xl font-bold mb-2">Long Life Guaranteed</h4>
                  <p className="text-gray-400 text-sm">Our products are acknowledged for their extreme durability and ease of maintenance.</p>
               </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, color, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="p-6 rounded-3xl bg-white shadow-xl shadow-gray-100 border border-gray-50 flex flex-col gap-4"
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