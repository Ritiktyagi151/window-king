"use client";
import Image from "next/image";

export default function MentorSection() {
  return (
    <section id="mentor" className="py-24 bg-white text-center scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-40 h-40 mx-auto mb-10 group">
          <div className="absolute inset-0 border-[6px] border-[#F85A21] rounded-full group-hover:scale-110 transition-transform duration-500" />
          <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="Rajesh Parida" fill className="object-cover rounded-full p-2" />
        </div>
        <h2 className="text-[#362A71] text-4xl font-black uppercase mb-2">Rajesh Parida</h2>
        <p className="text-[#F85A21] font-bold uppercase tracking-[0.4em] text-xs mb-8">The Guiding Force</p>
        <p className="text-2xl md:text-3xl font-light italic text-gray-500 leading-snug">
          Our mentor Rajesh Parida guides WINDOW KING PRIVATE LIMITED with a focus on quality uPVC glass windows, dependable service, and customer trust.
        </p>
        <div className="mt-8 h-1 w-20 bg-[#F85A21] mx-auto rounded-full" />
        <p className="mt-4 font-black text-[#362A71] text-sm uppercase">Company Mentor</p>
      </div>
    </section>
  );
}
