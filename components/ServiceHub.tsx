"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
        "Helpful guidance for choosing practical uPVC glass window solutions.",
    },
    {
      title: "Fast Delivery",
      icon: <Truck />,
      description:
        "Dependable supply support for customer and project requirements.",
    },
    {
      title: "Certified Quality",
      icon: <ShieldCheck />,
      description:
        "Quality-focused products made with attention to finish and durability.",
    },
    {
      title: "Expert Installation",
      icon: <Settings />,
      description:
        "Precision fitting by trained professionals for a perfect seal.",
    },
    {
      title: "Post Sales Service",
      icon: <Wrench />,
      description: "Dependable service support after product selection and supply.",
    },
    {
      title: "Premium Finish",
      icon: <Star />,
      description:
        "Elegant designs & wide range of colors to match your interiors.",
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-10 md:py-14">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/pexels-pixabay-247763.jpg')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-white/40" />
      {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.96),rgba(255,255,255,0.82),rgba(248,90,33,0.18))]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6 text-center md:mb-8">
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
            className="mt-3 text-3xl font-black uppercase text-[#362A71] sm:text-4xl md:text-5xl"
          >
            Why Choose <span className="text-[#F85A21]">Window King?</span>
          </motion.h2>

          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#F85A21]" />
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-gray-600">
            Practical guidance, precision manufacturing, and dependable service
            for uPVC and aluminium window projects.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
            className="group min-h-[180px] rounded-xl border border-white/80 bg-white/88 p-5 shadow-xl shadow-[#362A71]/10 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#F85A21]/40 hover:bg-white"
          >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#362A71] text-[#F85A21] shadow-lg transition-colors group-hover:bg-[#F85A21] group-hover:text-white">
                {React.cloneElement(service.icon, { size: 23 })}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#362A71]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-gray-600">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-7 text-center"
        >
          <Link
            href="/quality"
            className="inline-flex w-full justify-center rounded-xl bg-[#F85A21] px-8 py-3 text-sm font-black text-white shadow-xl shadow-[#F85A21]/20 transition-all hover:bg-[#362A71] sm:w-auto sm:px-10"
          >
            KNOW MORE ABOUT US
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
