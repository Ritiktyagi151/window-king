"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import TimelineSection from "./TimelineSection";

const highlights = [
  "Established in 2021",
  "uPVC and aluminium systems",
  "Manufacturer and supplier",
  "Puri, Odisha presence",
];

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="relative isolate overflow-hidden bg-[#f7f7f8] pb-16 pt-36 scroll-mt-28 sm:pt-40 md:pb-24"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[62%] bg-[#362A71]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[62%] bg-[linear-gradient(115deg,rgba(54,42,113,0.96),rgba(54,42,113,0.72),rgba(248,90,33,0.38))]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="pb-4 text-white"
          >
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
              About Window King
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
              Built For Better Openings
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/80 md:text-lg">
              WINDOW KING PRIVATE LIMITED is a Puri-based manufacturer and
              supplier focused on practical, premium uPVC glass window solutions
              for homes and commercial spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative h-[360px] overflow-hidden rounded-2xl shadow-2xl md:h-[520px]"
          >
            <Image
              src="/images/banner/banner2.png"
              alt="Modern Window King installation"
              fill
              priority
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 p-4 shadow-xl backdrop-blur-md">
              <p className="text-3xl font-black leading-none text-[#362A71]">
                2021
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#F85A21]">
                Established
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#f7f7f8] p-4"
                >
                  <CheckCircle2 className="shrink-0 text-[#F85A21]" size={20} />
                  <span className="text-sm font-black uppercase text-[#362A71]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#362A71] p-6 text-white shadow-xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
                  Company Profile
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase">
                  Quality Products. Dependable Service.
                </h2>
              </div>
              <ArrowUpRight className="shrink-0 text-[#F85A21]" size={30} />
            </div>
            <p className="mt-5 text-sm font-medium leading-7 text-white/75">
              Every solution is guided by durability, finish, customer support,
              and window systems that suit real site requirements.
            </p>
          </div>
        </div>
      </div>

      <TimelineSection />
    </section>
  );
}
