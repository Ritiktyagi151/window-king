import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs | Window King",
  description:
    "Read Window King blogs about uPVC windows, aluminium doors, modern designs, natural light, and home comfort.",
};

export default function BlogPage() {
  const [featuredPost, ...posts] = blogPosts;

  return (
    <main className="bg-[#f7f7f8] pb-16 md:pb-24">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F85A21]">
            Window King Blogs
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#362A71] sm:text-4xl md:text-5xl">
            Ideas For Better Windows And Doors
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-600">
            Practical guides for choosing uPVC and aluminium window or door
            systems for homes, offices, and commercial spaces.
          </p>
        </div>

        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group grid overflow-hidden rounded-xl border border-[#362A71]/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="relative min-h-[320px] bg-[#f7f7f8]">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <span className="w-fit rounded-full bg-[#F85A21]/10 px-4 py-1 text-[11px] font-black uppercase tracking-wider text-[#F85A21]">
              Featured
            </span>
            <h3 className="mt-5 text-2xl font-black uppercase leading-tight text-[#362A71] md:text-4xl">
              {featuredPost.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              {featuredPost.excerpt}
            </p>
            <BlogMeta date={featuredPost.date} readTime={featuredPost.readTime} />
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase text-[#F85A21]">
              Read Blog <ArrowRight size={15} />
            </span>
          </div>
        </Link>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl border border-[#362A71]/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 bg-[#f7f7f8]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-black uppercase tracking-wider text-[#F85A21]">
                  {post.category}
                </p>
                <h3 className="mt-3 text-lg font-black uppercase leading-snug text-[#362A71]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {post.excerpt}
                </p>
                <BlogMeta date={post.date} readTime={post.readTime} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogMeta({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold text-[#362A71]/60">
      <span className="inline-flex items-center gap-2">
        <Calendar size={14} className="text-[#F85A21]" />
        {date}
      </span>
      <span className="inline-flex items-center gap-2">
        <Clock size={14} className="text-[#F85A21]" />
        {readTime}
      </span>
    </div>
  );
}
