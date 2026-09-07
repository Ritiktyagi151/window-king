import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blogs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Window King Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f7f7f8] pb-16 md:pb-24">
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F85A21] transition-colors hover:text-[#362A71]"
        >
          <ArrowLeft size={16} />
          Back To Blogs
        </Link>

        <header className="mt-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F85A21]">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase leading-tight text-[#362A71] sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-[#362A71]/60">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} className="text-[#F85A21]" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-[#F85A21]" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="relative mt-10 h-[320px] overflow-hidden rounded-xl bg-white shadow-xl md:h-[460px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 rounded-xl border border-[#362A71]/10 bg-white p-6 shadow-sm md:p-10">
          <p className="text-lg leading-9 text-gray-700">{post.content.intro}</p>

          <div className="mt-10 space-y-9">
            {post.content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-black uppercase text-[#362A71]">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-8 text-gray-600">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-[#362A71] p-6 text-white">
            <h2 className="text-xl font-black uppercase">
              Need Help Choosing?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Window King can guide you with product selection, measurements,
              and practical design choices for your site.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-[#F85A21] px-6 py-3 text-xs font-black uppercase text-white transition-colors hover:bg-white hover:text-[#362A71]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
