"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blogs";

const MotionLink = motion(Link);

export default function BlogSection() {
  const [featuredPost, ...sidePosts] = blogPosts;

  return (
    <section className="bg-[#F5F7FA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-black uppercase tracking-tighter text-[#362A71] sm:text-4xl md:text-5xl"
          >
            Latest <span className="text-[#F85A21]">Blogs</span>
          </motion.h2>
          <MotionLink
            href="/blog"
            whileHover={{ scale: 1.05 }}
            className="rounded bg-[#009EDB] px-6 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-[#362A71]"
          >
            Read All
          </MotionLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: Featured Large Post */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 bg-white rounded-xl border border-blue-100 overflow-hidden shadow-sm flex flex-col"
          >
            <div className="h-56 overflow-hidden sm:h-64">
                 <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={featuredPost.image}
                className="w-full h-full object-cover" 
                alt="blog" 
               />
            </div>
            <div className="flex flex-grow flex-col p-6 md:p-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar size={16} /> {featuredPost.date}
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight text-[#362A71] md:text-2xl">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="self-start rounded bg-[#009EDB] px-6 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-[#F85A21]"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Grid of Smaller Posts */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {sidePosts.map((post, index) => (
              <MotionLink
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm"
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
              </MotionLink>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
