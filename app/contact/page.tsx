"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';
import { 
  MapPin, Phone, Clock, CheckCircle2, 
  MessageSquare, ShieldCheck, Globe, HelpCircle,
  ChevronDown, Ruler, Building2, Calendar,
  Truck, PenTool, Headphones, ExternalLink
} from 'lucide-react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fix for Hydration Error: Client-side only render check
  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Success message resets after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Prevent Hydration Mismatch
  if (!mounted) return <div className="min-h-screen bg-gray-50" />;

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f4f7f9] pt-40 pb-20 px-4 md:px-10 font-sans selection:bg-[#7c3aed] selection:text-white overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: MAIN CONTACT CARD */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white rounded-[30px] md:rounded-[60px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[750px] relative border border-gray-100"
        >
          {/* LEFT SIDE: Image & Info Cards */}
          <div className="relative h-80 lg:h-auto overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" 
              alt="Premium Interior Windows" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 z-10" />
            
            {/* Floating Info Cards */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[30px] shadow-xl hidden md:flex flex-col gap-8 w-72 border border-white/50">
              {[
                { id: 'loc-1', icon: MapPin, t: "Head Office", d: "Window King Plaza, Delhi", c: "text-purple-600" },
                { id: 'ph-1', icon: Phone, t: "Support Line", d: "+91 7065500903", c: "text-orange-500" },
                { id: 'hrs-1', icon: Clock, t: "Visit Hours", d: "9 AM - 7 PM", c: "text-purple-600" }
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-4 group">
                  <div className={`p-3 bg-gray-50 rounded-2xl ${item.c} group-hover:scale-110 transition-transform`}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm leading-none">{item.t}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Form Section */}
          <div className="p-8 md:p-16 flex flex-col justify-center bg-white relative">
            {/* Floating Brand Badge */}
            <div className="absolute -right-4 top-10 hidden lg:block z-30">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-[30px] shadow-xl text-white font-black rotate-6 border-4 border-white/20"
               >
                 Window<br/><span className="text-purple-900 text-xl">King+</span>
               </motion.div>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter">Contact <span className="text-purple-600 italic">Us</span></h2>
                  <p className="text-gray-400 mb-10 text-sm italic underline decoration-orange-500 underline-offset-4">Premium window solutions are just a message away.</p>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-purple-600 uppercase tracking-widest ml-1">Full Name</label>
                      <input required className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white outline-none transition-all text-sm" placeholder="Rahul Sharma" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-purple-600 uppercase tracking-widest ml-1">Phone</label>
                      <input required type="tel" className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 focus:bg-white outline-none transition-all text-sm" placeholder="+91 ..." />
                    </div>
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-[10px] font-bold text-purple-600 uppercase tracking-widest ml-1">Requirement Type</label>
                      <div className="relative">
                        <select className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-500 outline-none appearance-none cursor-pointer text-sm">
                          <option>uPVC Windows</option>
                          <option>Aluminium Systems</option>
                          <option>Glass Partitions</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-[10px] font-bold text-purple-600 uppercase tracking-widest ml-1">Message</label>
                      <textarea required rows={3} className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white outline-none transition-all resize-none text-sm" placeholder="Project details..." />
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="md:col-span-2 w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-purple-200"
                    >
                      Submit Details
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={50} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 italic">We will get back to you within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 text-purple-600 font-bold hover:underline">Send another message</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* SECTION 2: MAP & SHOWROOM */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-32 bg-white rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100"
        >
          <div className="p-12 md:p-20 flex flex-col justify-center bg-white md:w-1/3">
            <h2 className="text-4xl font-black text-gray-900 mb-6 italic">Our <span className="text-orange-500">Showroom</span></h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm">Experience premium quality in person. Visit our Delhi hub for a free consultation.</p>
            <div className="flex items-start gap-4 text-purple-600">
              <MapPin size={24} />
              <p className="text-gray-800 font-bold text-sm">Okhla Estate, Phase 3, New Delhi</p>
            </div>
            <button className="flex items-center gap-2 text-purple-600 font-bold text-sm hover:underline mt-6">
              Get Directions <ExternalLink size={16} />
            </button>
          </div>
          <div className="md:w-2/3 h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112134.425946114!2d77.100985!3d28.563065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3970725359b%3A0xd680327f12e8736a!2sOkhla%20Industrial%20Estate%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1642250000000" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              loading="lazy" 
            />
          </div>
        </motion.div>

        {/* SECTION 3: TRUST CARDS */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 't1', icon: ShieldCheck, title: "10 Year Warranty", color: "text-purple-600" },
            { id: 't2', icon: Building2, title: "Expert Installation", color: "text-orange-500" },
            { id: 't3', icon: Headphones, title: "24/7 Support", color: "text-purple-600" }
          ].map((card) => (
            <motion.div 
              key={card.id}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm text-center md:text-left group"
            >
              <card.icon size={40} className={`${card.color} mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform`} />
              <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed italic italic">Ensuring peak performance and safety for your home.</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;