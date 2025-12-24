"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Facebook, Instagram, Twitter, Linkedin, Youtube, 
  MapPin, Phone, Mail, ArrowRight, ShieldCheck 
} from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-[#362A71] text-white pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F85A21]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
      >
        
        {/* Column 1: Brand Identity */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="group cursor-pointer">
            <h2 className="text-3xl font-black tracking-tighter text-white transition-transform group-hover:scale-105 duration-300">
              WINDOW KING<span className="text-[#F85A21] font-light">+</span>
            </h2>
            <p className="text-[#F85A21] text-[10px] font-bold uppercase tracking-[0.3em]">
              Better by Design
            </p>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Pioneering the future of fenestration. India's trusted choice for 
            precision-engineered uPVC and Aluminium solutions that redefine luxury living.
          </p>

          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -5, color: "#F85A21" }}
                className="bg-white/10 p-2.5 rounded-full backdrop-blur-md transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Column 2: Quick Navigation */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-8 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#F85A21] rounded-full"></span>
          </h3>
          <ul className="space-y-4">
            {['About Us', 'Our Products', 'Project Showcase', 'Find a Store', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="group text-gray-400 hover:text-white flex items-center gap-2 transition-all duration-300"
                >
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#F85A21]" />
                  <span className="text-sm">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Premium Products */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-8 relative inline-block">
            Our Products
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#F85A21] rounded-full"></span>
          </h3>
          <ul className="space-y-4">
            {['uPVC Windows', 'uPVC Doors', 'Aluminium Windows', 'Aluminium Doors', 'Solid Panel Doors'].map((item) => (
              <li key={item}>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-[#F85A21] text-sm block transition-colors border-l border-white/5 pl-4 hover:border-[#F85A21]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4: Contact & Assurance */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#F85A21] rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="bg-[#F85A21]/20 p-2 rounded-lg group-hover:bg-[#F85A21] transition-colors">
                  <MapPin size={18} className="text-[#F85A21] group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-300 leading-snug">
                  123, Business District, <br /> New Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-[#F85A21]/20 p-2 rounded-lg group-hover:bg-[#F85A21] transition-colors">
                  <Phone size={18} className="text-[#F85A21] group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-300 font-semibold group-hover:text-white transition-colors">
                  1800-102-9880
                </span>
              </li>
            </ul>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#F85A21] text-white py-3 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#F85A21]/20 hover:shadow-[#F85A21]/40 transition-all"
          >
            <ShieldCheck size={16} />
            ENQUIRE NOW
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-500 font-medium">
            © 2025 <span className="text-gray-300">WINDOW KING PRIVATE LIMITED</span>. All Masterpieces Reserved.
          </p>
          
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((link) => (
              <Link 
                key={link} 
                href="#" 
                className="text-[11px] text-gray-500 hover:text-[#F85A21] uppercase tracking-widest transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}