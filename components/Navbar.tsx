"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Phone, BookOpen, MessageSquare, ArrowRight, X, ChevronRight } from "lucide-react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "../components/ui/navbar-menu"; 
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-2"
      )}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className={cn(
          "absolute left-14 z-20 hidden w-44 lg:block",
          isScrolled ? "-top-1 -bottom-1" : "-top-1 -bottom-1"
        )}
      >
        <Link href="/" className="relative block h-full w-full">
          <Image
            src="/window-king-logo.png"
            alt="Window King Logo"
            fill
            sizes="176px"
            className="absolute inset-0 object-contain object-left"
            priority
          />
        </Link>
      </motion.div>

      {/* Top Action Bar - Desktop Only (As per your design) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="hidden lg:flex max-w-7xl mx-auto px-4 pb-2 justify-end items-center gap-3 "
          >
            <ActionButton icon={<BookOpen size={14} />} text="Brochure" color="bg-[#362A71]" />
            <ActionButton icon={<MessageSquare size={14} />} text="Enquire" color="bg-[#362A71]" />
            <div className="flex items-center gap-2 bg-[#F85A21] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
              <Phone size={14} fill="white" /> +91 7065500903
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-1 grid grid-cols-[1fr_auto] xl:grid-cols-[180px_minmax(0,1fr)_52px] items-center gap-4">
        {/* Logo Section */}
        <motion.div whileHover={{ scale: 1.03 }} className="flex h-20 items-center lg:hidden">
          <Link href="/" className="relative block h-full w-32 shrink-0 sm:w-40 lg:w-52">
            <Image
              src="/window-king-logo.png"
              alt="Window King Logo"
              fill
              sizes="(min-width: 1024px) 192px, (min-width: 640px) 160px, 128px"
              className="absolute inset-0 object-contain object-left"
              priority
            />
          </Link>
        </motion.div>
        <div className="hidden xl:block" />

        {/* --- DESKTOP MENU (STRICTLY UNCHANGED) --- */}
        <div className="hidden min-w-0 justify-center xl:flex">
          <Menu setActive={setActive}>
            <Link href="/" className="whitespace-nowrap text-[#362A71] hover:text-[#F85A21] font-bold text-[15px] px-2 transition-colors">
              Home
            </Link>
            <MenuItem setActive={setActive} active={active} item="About Us">
  <div className="flex flex-col space-y-4 text-sm p-2">
    <HoveredLink href="/about/profile">Company Profile</HoveredLink>
    <HoveredLink href="/about/factsheet">Corporate Factsheet</HoveredLink>
    <HoveredLink href="/about/infrastructure">Infrastructure & Machinery</HoveredLink>
    <HoveredLink href="/about/team">Team of Experts</HoveredLink>
    <HoveredLink href="/about/mentor">Our Mentor</HoveredLink>
  </div>
</MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid w-[min(76vw,900px)] grid-cols-1 gap-5 p-4 lg:grid-cols-2 lg:gap-8">
                <ProductItem title="uPVC Windows" href="/products/upvc" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" description="Top Hung, Noise Proofing, and Casement solutions." />
                <ProductItem title="Aluminium Series" href="/products/aluminium" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6" description="Slim-line luxury doors and high-performance windows." />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Why Window King">
              <div className="flex flex-col space-y-4 text-sm p-2 text-[#362A71]">
                <HoveredLink href="/quality">Quality Standards</HoveredLink>
                <HoveredLink href="/innovation">Innovation Lab</HoveredLink>
                <HoveredLink href="/service">After Sales Service</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Showcase">
              <div className="flex flex-col space-y-4 text-sm p-2 text-[#362A71]">
                <HoveredLink href="/residential">Residential</HoveredLink>
                <HoveredLink href="/commercial">Commercial</HoveredLink>
                <HoveredLink href="/gallery">Gallery</HoveredLink>
              </div>
            </MenuItem>
            <Link href="/contact" className="whitespace-nowrap text-[#362A71] hover:text-[#F85A21] font-bold text-[15px] px-2 transition-colors">
              Contact Us
            </Link>
          </Menu>
        </div>

        {/* Right Side - Search & Hamburger */}
        <div className="flex items-center justify-end gap-4">
          <div className="hidden lg:block bg-[#362A71] p-2.5 rounded-full text-white cursor-pointer hover:bg-[#F85A21] transition-colors shadow-sm">
            <Search size={18} strokeWidth={3} />
          </div>

          {/* Hamburger Button for Mobile */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden flex flex-col items-end gap-1.5 p-2"
          >
            <span className="w-8 h-1 bg-[#362A71] rounded-full" />
            <span className="w-5 h-1 bg-[#F85A21] rounded-full" />
            <span className="w-8 h-1 bg-[#362A71] rounded-full" />
          </button>
        </div>
      </nav>

      {/* --- NEW MOBILE MENU OVERLAY (Side Drawer Style) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] xl:hidden"
            />
            
            {/* Menu Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[110] shadow-2xl flex flex-col xl:hidden"
            >
              {/* Drawer Header with Cross Icon */}
              <div className="p-6 flex justify-between items-center border-b">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative block h-16 w-20">
                  <Image
                    src="/window-king-logo.png"
                    alt="Window King Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={24} className="text-[#362A71]" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <MobileNavLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
                
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">About Window King</p>
                  <MobileNavLink href="/about#profile" label="Company Profile" onClick={() => setMobileMenuOpen(false)} sub />
                  <MobileNavLink href="/about#awards" label="Awards" onClick={() => setMobileMenuOpen(false)} sub />
                  <MobileNavLink href="/about#mentor" label="Our Mentor" onClick={() => setMobileMenuOpen(false)} sub />
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Solutions</p>
                  <MobileNavLink href="/products/upvc" label="uPVC Windows" onClick={() => setMobileMenuOpen(false)} sub />
                  <MobileNavLink href="/products/aluminium" label="Aluminium Series" onClick={() => setMobileMenuOpen(false)} sub />
                </div>

                <MobileNavLink href="/contact" label="Contact Us" onClick={() => setMobileMenuOpen(false)} />
              </div>

              {/* Drawer Footer */}
              <div className="p-6 bg-gray-50 border-t">
                <a 
                  href="tel:+917065500903" 
                  className="flex items-center justify-center gap-3 bg-[#362A71] text-white py-4 rounded-xl font-bold hover:bg-[#F85A21] transition-all"
                >
                  <Phone size={18} fill="white" /> Call Expert
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// Sub-component for Mobile Links
function MobileNavLink({ href, label, onClick, sub = false }: { href: string; label: string; onClick: () => void; sub?: boolean }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={cn(
        "flex items-center justify-between group py-1",
        sub ? "text-lg font-semibold text-[#362A71]/80" : "text-2xl font-black text-[#362A71] uppercase tracking-tighter"
      )}
    >
      {label}
      <ChevronRight className={cn("text-[#F85A21] opacity-0 group-hover:opacity-100 transition-all", sub ? "w-4 h-4" : "w-6 h-6")} />
    </Link>
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
