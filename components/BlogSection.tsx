"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    date: "23-12-2025",
    title: "How to Pick the Perfect Window Design for Every Room",
    desc: "The window is one of the most crucial elements of any building, shaping both its functionality and style. It not only brings in natural light...",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511", // Replace with your image
    isFeatured: true,
  },
  {
    id: 2,
    date: "15-12-2025",
    title: "Sliding and Fold Doors: The Ultimate Space-Saving Solution",
    img: "https://images.unsplash.com/photo-1600607687940-4e524cb35d03",
  },
  {
    id: 3,
    date: "11-12-2025",
    title: "How to Maximise Natural Light with the Right Windows",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },
  {
    id: 4,
    date: "17-11-2025",
    title: "Trendy and Functional Door Designs for Homes in 2025",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
  {
    id: 5,
    date: "30-10-2025",
    title: "Design Tips: Using Glass Windows to Create a Spacious Look",
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
  },
];

export default function BlogSection() {
  const featuredPost = blogs.find((b) => b.isFeatured);
  const sidePosts = blogs.filter((b) => !b.isFeatured);

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl font-black text-[#362A71] uppercase tracking-tighter"
          >
            Latest <span className="text-[#F85A21]">Blogs</span>
          </motion.h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-[#009EDB] text-white px-6 py-2 rounded font-bold text-sm uppercase transition-colors hover:bg-[#362A71]"
          >
            Read All
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: Featured Large Post */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 bg-white rounded-xl border border-blue-100 overflow-hidden shadow-sm flex flex-col"
          >
            <div className="h-64 overflow-hidden">
               <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={featuredPost?.img} 
                className="w-full h-full object-cover" 
                alt="blog" 
               />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar size={16} /> {featuredPost?.date}
              </div>
              <h3 className="text-2xl font-bold text-[#362A71] mb-4 leading-tight">
                {featuredPost?.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">
                {featuredPost?.desc}
              </p>
              <button className="bg-[#009EDB] text-white px-6 py-2 rounded self-start font-bold uppercase text-xs hover:bg-[#F85A21] transition-colors">
                Read More
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Grid of Smaller Posts */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {sidePosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-blue-100 overflow-hidden shadow-sm group cursor-pointer"
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#362A71] group-hover:text-[#F85A21] transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                    <Calendar size={14} className="text-[#009EDB]" /> {post.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}