"use client";
import { motion } from "framer-motion";
import { ClipboardList, Building2, User, Landmark, ShieldCheck } from "lucide-react";

export default function FactsheetSection() {
  const statutoryData = [
    { label: "CEO", value: "RAJESH PARIDA", icon: <User size={20} /> },
    { label: "Nature of Business", value: "Manufacturer & Trader", icon: <Building2 size={20} /> },
    { label: "Total Employees", value: "11 to 25 People", icon: <ClipboardList size={20} /> },
    { label: "Legal Status", value: "Limited Company", icon: <ShieldCheck size={20} /> }
  ];

  return (
    <section id="factsheet" className="bg-gray-50/50 py-14 scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:text-left">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} className="mb-10 text-3xl font-black uppercase text-[#362A71] sm:text-4xl md:mb-12">Corporate <span className="text-[#F85A21]">Factsheet</span></motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statutoryData.map((item, i) => (
            <motion.div key={i} whileInView={{opacity:1, y:0}} initial={{opacity:0, y:20}} transition={{delay: i*0.1}} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl md:p-8">
              <div className="text-[#F85A21] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
              <p className="text-[#362A71] font-black mt-1 uppercase text-lg">{item.value}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
           <CodeCard label="GST No" code="21AACCW8866D1ZA" />
           <CodeCard label="CIN No" code="U25209OR2021PTC035673" />
           <CodeCard label="Banker" code="ICICI Bank" />
        </div>
      </div>
    </section>
  );
}

function CodeCard({ label, code }: { label: string, code: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#362A71] p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <p className="text-[10px] uppercase font-bold text-[#F85A21] tracking-widest">{label}</p>
      <p className="break-all text-lg font-black text-white sm:text-xl">{code}</p>
    </div>
  );
}
