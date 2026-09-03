"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, MapPin, ShieldCheck, User } from "lucide-react";

const statutoryData = [
  { label: "CEO", value: "Rajesh Parida", icon: User },
  { label: "Nature of Business", value: "Manufacturer & Supplier", icon: Building2 },
  { label: "Location", value: "Puri, Odisha", icon: MapPin },
  { label: "Legal Status", value: "Limited Company", icon: ShieldCheck },
];

export default function FactsheetSection() {
  return (
    <section
      id="factsheet"
      className="relative overflow-hidden bg-white py-16 scroll-mt-24 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#362A71] shadow-2xl"
        >
          <Image
            src="/images/banner/banner3.png"
            alt="Window King corporate profile"
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#362A71] via-[#362A71]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7 text-white md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F85A21]">
              Corporate Factsheet
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none md:text-5xl">
              Company At A Glance
            </h2>
          </div>
        </motion.div>

        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {statutoryData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl border border-[#362A71]/10 bg-[#f7f7f8] p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#F85A21] shadow-sm group-hover:bg-[#F85A21] group-hover:text-white">
                  <item.icon size={22} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-black uppercase text-[#362A71]">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <CodeCard label="GST No" code="21AACCW8866D1ZA" />
            <CodeCard label="CIN No" code="U25209OR2021PTC035673" />
            <CodeCard label="Banker" code="ICICI Bank" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeCard({ label, code }: { label: string; code: string }) {
  return (
    <div className="rounded-2xl bg-[#362A71] p-5 shadow-lg">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#F85A21]">
        {label}
      </p>
      <p className="mt-2 break-all text-base font-black text-white">{code}</p>
    </div>
  );
}
