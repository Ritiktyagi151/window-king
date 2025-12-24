"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Home Owner",
    content: "Window King windows have completely transformed my living room. The noise insulation is amazing, especially living near the main road. The finish is incredibly premium!",
    rating: 5,
    src: "https://www.shutterstock.com/shutterstock/photos/2650288739/display_1500/stock-photo-create-a-realistic-image-of-a-middle-aged-indian-male-small-business-owner-sitting-at-the-counter-2650288739.jpg"
  },
  {
    id: 2,
    name: "Anjali Gupta",
    role: "Interior Designer",
    content: "As a designer, I always recommend Window King for their durability and elegant designs. Their slim-line aluminium frames are perfect for modern minimalist interiors.",
    rating: 5,
    src: "https://www.shutterstock.com/shutterstock/photos/2635448943/display_1500/stock-photo-contemporary-indian-woman-about-years-old-dressed-in-western-outfit-real-image-style-2635448943.jpg"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Architect",
    content: "The storm-resistant features are actually effective. We installed these in a coastal project, and the results are fantastic. High wind pressure handling is top-notch.",
    rating: 4,
    src: "https://www.shutterstock.com/shutterstock/photos/2679055915/display_1500/stock-photo-the-image-shows-a-confident-sri-lankan-male-it-professional-standing-in-a-solid-white-background-2679055915.jpg"
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#F85A21] font-bold tracking-[0.3em] uppercase text-sm"
          >
            Voice of Customers
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-[#362A71] mt-2 uppercase">
            TRUSTED BY <span className="text-gray-400">THOUSANDS</span>
          </h2>
        </div>

        {/* Main Slider Container */}
        <div className="relative bg-[#362A71] rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden border-b-[10px] border-[#F85A21]">
          
          <Quote className="absolute top-10 left-10 text-white/5 w-40 h-40 -rotate-12" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Animated Image (Aceternity Style) */}
            <div className="relative h-80 w-full flex justify-center items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5, x: -50 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 1.1, rotate: 5, x: 50 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="absolute"
                    >
                        <div className="relative p-2 bg-white/10 rounded-[2.5rem] backdrop-blur-sm border border-white/20">
                            <img 
                                src={testimonials[index].src} 
                                alt={testimonials[index].name} 
                                className="h-64 w-64 md:h-72 md:w-72 object-cover rounded-[2rem] shadow-2xl shadow-black/50"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col justify-center text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonials[index].rating ? "fill-[#F85A21] text-[#F85A21]" : "text-white/20"} 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                    "{testimonials[index].content}"
                  </p>

                  {/* Profile */}
                  <div className="border-l-4 border-[#F85A21] pl-6">
                    <h4 className="text-white text-2xl font-black uppercase tracking-tight">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-[#F85A21] text-sm font-bold uppercase tracking-widest mt-1">
                      {testimonials[index].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-10 flex gap-4">
            <button 
              onClick={prevStep}
              className="p-4 rounded-full bg-white/5 text-white hover:bg-[#F85A21] transition-all border border-white/10 group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextStep}
              className="p-4 rounded-full bg-white/5 text-white hover:bg-[#F85A21] transition-all border border-white/10 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex gap-3">
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-10 bg-[#F85A21]" : "w-4 bg-white/20"
                  }`}
                />
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}