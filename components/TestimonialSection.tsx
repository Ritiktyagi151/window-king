"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

type Testimonial = {
  id: number | string;
  name: string;
  role: string;
  content: string;
  rating: number;
  source: "Customer Review" | "Google Review";
  src?: string;
};

type ReviewTab = "client" | "google";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Home Owner",
    content: "Window King windows have completely transformed my living room. The noise insulation is amazing, especially living near the main road. The finish is incredibly premium!",
    rating: 5,
    src: "https://www.shutterstock.com/shutterstock/photos/2650288739/display_1500/stock-photo-create-a-realistic-image-of-a-middle-aged-indian-male-small-business-owner-sitting-at-the-counter-2650288739.jpg",
    source: "Customer Review",
  },
  {
    id: 2,
    name: "Anjali Gupta",
    role: "Interior Designer",
    content: "As a designer, I always recommend Window King for their durability and elegant designs. Their slim-line aluminium frames are perfect for modern minimalist interiors.",
    rating: 5,
    src: "https://www.shutterstock.com/shutterstock/photos/2635448943/display_1500/stock-photo-contemporary-indian-woman-about-years-old-dressed-in-western-outfit-real-image-style-2635448943.jpg",
    source: "Customer Review",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Architect",
    content: "The storm-resistant features are actually effective. We installed these in a coastal project, and the results are fantastic. High wind pressure handling is top-notch.",
    rating: 4,
    src: "https://www.shutterstock.com/shutterstock/photos/2679055915/display_1500/stock-photo-the-image-shows-a-confident-sri-lankan-male-it-professional-standing-in-a-solid-white-background-2679055915.jpg",
    source: "Customer Review",
  },
];

const googleReviews: Testimonial[] = [
  {
    id: "google-1",
    name: "Google User",
    role: "Google Review",
    content:
      "Good product quality and professional installation support. The team explained the window options clearly and completed the work neatly.",
    rating: 5,
    source: "Google Review",
  },
  {
    id: "google-2",
    name: "Google User",
    role: "Google Review",
    content:
      "Window King gave proper guidance for our home windows. The finish looks premium and the service response was helpful.",
    rating: 5,
    source: "Google Review",
  },
  {
    id: "google-3",
    name: "Google User",
    role: "Google Review",
    content:
      "Satisfied with the uPVC window work. Measurements, delivery, and fitting were handled smoothly by the team.",
    rating: 5,
    source: "Google Review",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<ReviewTab>("client");
  const activeReviews = useMemo(
    () => (activeTab === "client" ? testimonials : googleReviews),
    [activeTab]
  );

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1) % activeReviews.length);
  }, [activeReviews.length]);

  const prevStep = useCallback(() => {
    setIndex(
      (prev) => (prev - 1 + activeReviews.length) % activeReviews.length
    );
  }, [activeReviews.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const activeTestimonial = activeReviews[index];
  const isGoogleReview = activeTestimonial.source === "Google Review";

  return (
    <section className="w-full overflow-hidden bg-white py-7 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#F85A21] font-bold tracking-[0.3em] uppercase text-sm"
          >
            Voice of Customers
          </motion.span>
          <h2 className="mt-2 text-3xl font-black uppercase text-[#362A71] sm:text-4xl md:text-5xl">
            TRUSTED BY <span className="text-gray-400">THOUSANDS</span>
          </h2>
          <div className="mt-6 grid w-full max-w-md grid-cols-2 rounded-full border border-[#362A71]/10 bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => {
                setActiveTab("client");
                setIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "client"
                  ? "bg-[#362A71] text-white shadow-md"
                  : "text-[#362A71] hover:bg-white"
              }`}
            >
              Client Testimonials
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("google");
                setIndex(0);
              }}
              className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "google"
                  ? "bg-[#F85A21] text-white shadow-md"
                  : "text-[#362A71] hover:bg-white"
              }`}
            >
              <BadgeCheck size={15} />
              Google Reviews
            </button>
          </div>
        </div>

        {/* Main Slider Container */}
        <div className="relative overflow-hidden rounded-2xl border-b-[10px] border-[#F85A21] bg-[#362A71] p-6 pb-24 shadow-2xl md:rounded-[3rem] md:p-16">
          
          <Quote className="absolute top-10 left-10 text-white/5 w-40 h-40 -rotate-12" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            
            {/* Left Side: Animated Image (Aceternity Style) */}
            <div className="relative flex h-64 w-full items-center justify-center sm:h-80">
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
                            {activeTestimonial.src ? (
                              <img 
                                  src={activeTestimonial.src} 
                                  alt={activeTestimonial.name} 
                                  className="h-52 w-52 rounded-2xl object-cover shadow-2xl shadow-black/50 sm:h-64 sm:w-64 md:h-72 md:w-72 md:rounded-[2rem]"
                              />
                            ) : (
                              <div className="flex h-52 w-52 items-center justify-center rounded-2xl bg-white text-7xl font-black text-[#4285F4] shadow-2xl shadow-black/50 sm:h-64 sm:w-64 md:h-72 md:w-72 md:rounded-[2rem]">
                                G
                              </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Rating */}
                  <div className="mb-6 flex justify-center gap-1 md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < activeTestimonial.rating ? "fill-[#F85A21] text-[#F85A21]" : "text-white/20"} 
                      />
                    ))}
                  </div>

                  {isGoogleReview && (
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#362A71]">
                      <span className="text-[#4285F4]">G</span>
                      Verified Google Review
                    </div>
                  )}

                  {/* Content */}
                  <p className="mb-8 text-base font-medium italic leading-relaxed text-white sm:text-xl md:text-2xl">
                    &quot;{activeTestimonial.content}&quot;
                  </p>

                  {/* Profile */}
                  <div className="border-[#F85A21] md:border-l-4 md:pl-6">
                    <h4 className="text-white text-2xl font-black uppercase tracking-tight">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-[#F85A21] text-sm font-bold uppercase tracking-widest mt-1">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-4 md:left-auto md:right-10 md:translate-x-0">
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
              {activeReviews.map((_, i) => (
                <div 
                  key={`${activeTab}-${i}`}
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
