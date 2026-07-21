"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  ShieldCheck,
  Truck,
  Headphones,
  Settings,
  Wrench,
  Star,
} from "lucide-react";

export default function ServiceHub() {
  const services = [
    {
      title: "Free Consultation",
      icon: <Headphones />,
      description:
        "Expert advice for your home with our specialized design consultants.",
      link: "#",
    },
    {
      title: "Fast Delivery",
      icon: <Truck />,
      description:
        "On-time delivery guaranteed with our robust logistics network.",
      link: "#",
    },
    {
      title: "Certified Quality",
      icon: <ShieldCheck />,
      description:
        "Tested for global standards to ensure long-lasting durability.",
      link: "#",
    },
    {
      title: "Expert Installation",
      icon: <Settings />,
      description:
        "Precision fitting by trained professionals for a perfect seal.",
      link: "#",
    },
    {
      title: "Post Sales Service",
      icon: <Wrench />,
      description: "24/7 support for maintenance and hassle-free service.",
      link: "#",
    },
    {
      title: "Premium Finish",
      icon: <Star />,
      description:
        "Elegant designs & wide range of colors to match your interiors.",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-14 md:py-24">
      {/* Background Text */}
      <div className="absolute top-10 left-10 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none hidden md:block">
        SERVICES
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 text-center md:mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21] sm:text-sm sm:tracking-[0.4em]"
          >
            Our Commitment
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl md:text-6xl"
          >
            Why Choose <span className="text-[#F85A21]">Window King?</span>
          </motion.h2>

          <div className="h-1.5 w-32 bg-[#F85A21] mx-auto mt-6 rounded-full" />
        </div>

        {/* Hover Cards */}
        <div className="max-w-7xl mx-auto">
          <HoverEffect
            items={
              services.map((s) => ({
                ...s,
                title: (
                  <div className="flex flex-col gap-2">
                    <div className="w-12 h-12 bg-[#362A71]/20 rounded-lg flex items-center justify-center text-[#F85A21] mb-2">
                      {React.cloneElement(
                        s.icon as React.ReactElement<any>,
                        { size: 28 } as any
                      )}
                    </div>
                    <span className="text-white font-bold text-xl uppercase tracking-tight">
                      {s.title}
                    </span>
                  </div>
                ),
              })) as any
            }
          />
        </div>

        {/* Bottom Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <button className="w-full rounded-xl bg-[#F85A21] px-8 py-4 font-black text-white shadow-xl transition-all hover:bg-white hover:text-[#362A71] sm:w-auto sm:px-12">
            KNOW MORE ABOUT US
          </button>
        </motion.div>
      </div>
    </section>
  );
}
