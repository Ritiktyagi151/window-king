"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, Images, ShieldCheck } from "lucide-react";
import { projectCategories } from "@/lib/projects";

const icons = [Home, Building2, Images, ShieldCheck];

export default function ProjectsSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
              Window King Work
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase leading-tight text-[#362A71] sm:text-4xl md:text-5xl">
              Our <span className="text-gray-400">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#362A71] px-6 py-3 text-xs font-bold uppercase text-white transition-all hover:bg-[#F85A21] sm:w-auto md:px-8 md:text-sm"
          >
            View All Projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projectCategories.map((project, index) => {
            const Icon = icons[index] ?? Images;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="group relative min-h-[320px] overflow-hidden rounded-lg bg-[#120d2b] shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d2b]/95 via-[#362A71]/55 to-transparent" />
                <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-6 sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F85A21] text-white shadow-xl">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/80">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-black uppercase text-[#362A71] transition-colors hover:bg-[#F85A21] hover:text-white"
                  >
                    Explore Project
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
