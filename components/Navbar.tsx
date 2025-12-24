"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Phone, Layout, BookOpen, MessageSquare, Menu as MenuIcon } from "lucide-react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "../components/ui/navbar-menu"; 
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        // Black shadow ko halke gray shadow mein badla
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-2"
      )}
    >
      {/* Top Action Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto px-4 pb-2 flex justify-end items-center gap-3 border-b border-gray-100"
          >
            <ActionButton icon={<Layout size={14} />} text="Virtual Showroom" color="bg-[#362A71]" />
            <ActionButton icon={<BookOpen size={14} />} text="Brochure" color="bg-[#362A71]" />
            <ActionButton icon={<MessageSquare size={14} />} text="Enquire" color="bg-[#362A71]" />
            <div className="flex items-center gap-2 bg-[#F85A21] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
              <Phone size={14} fill="white" /> +91 7065500903
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="max-w-[1400px] mx-auto px-6 flex justify-between items-center mt-1">
        {/* Logo Section */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col cursor-pointer shrink-0">
          <Link href="/">
            <span className="text-[#362A71] text-2xl lg:text-3xl font-black tracking-tighter leading-none uppercase">
              Window King<span className="text-[#F85A21] font-light">+</span>
            </span>
            <span className="text-[#F85A21] text-[9px] font-bold uppercase tracking-[0.2em] block">
              Better by Design
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu - Colors Fixed */}
        <div className="hidden xl:block">
          <Menu setActive={setActive}>
            <Link href="/" className="text-[#362A71] hover:text-[#F85A21] font-bold text-[15px] px-2 transition-colors">
              Home
            </Link>
            
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm p-2">
                <HoveredLink href="/story">Company Profile</HoveredLink>
                <HoveredLink href="/awards">Awards & Accreditations</HoveredLink>
                <HoveredLink href="/mentor">Our Mentor</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4 w-[550px]">
                <ProductItem
                  title="uPVC Windows"
                  href="/products/upvc"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  description="Top Hung, Noise Proofing, and Casement solutions."
                />
                <ProductItem
                  title="Aluminium Series"
                  href="/products/aluminium"
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
                  description="Slim-line luxury doors and high-performance windows."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Why Window King">
              <div className="flex flex-col space-y-4 text-sm p-2">
                <HoveredLink href="/quality">Quality Standards</HoveredLink>
                <HoveredLink href="/innovation">Innovation Lab</HoveredLink>
                <HoveredLink href="/service">After Sales Service</HoveredLink>
              </div>
            </MenuItem>

            {/* Baki items bhi isi tarah text-[#362A71] use karenge */}
            <MenuItem setActive={setActive} active={active} item="Showcase">
              <div className="flex flex-col space-y-4 text-sm p-2">
                <HoveredLink href="/residential">Residential</HoveredLink>
                <HoveredLink href="/commercial">Commercial</HoveredLink>
                <HoveredLink href="/gallery">Gallery</HoveredLink>
              </div>
            </MenuItem>

            <Link href="/customize" className="text-[#362A71] hover:text-[#F85A21] font-bold text-[15px] px-2 transition-colors">
              Customize
            </Link>

            <Link href="/contact" className="text-[#362A71] hover:text-[#F85A21] font-bold text-[15px] px-2 transition-colors">
              Contact Us
            </Link>
          </Menu>
        </div>

        {/* Right Side Search */}
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-[#362A71] p-2.5 rounded-full text-white cursor-pointer hover:bg-[#F85A21] transition-colors shadow-sm"
          >
            <Search size={18} strokeWidth={3} />
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

function ActionButton({ icon, text, color }: { icon: any; text: string; color: string }) {
  return (
    <motion.button 
      whileHover={{ y: -2 }}
      className={cn("flex items-center gap-2 text-white px-3 py-1.5 rounded-md text-[11px] font-semibold uppercase hover:shadow-md transition-all", color)}
    >
      {icon} {text}
    </motion.button>
  );
}