"use client";

import TimelineSection from "./TimelineSection";

export default function ProfileSection() {
  const highlights = [
    "50,000 Sq. Ft. Facility",
    "German CNC Technology",
    "11 to 25 Skilled Experts",
  ];

  return (
    <section id="profile" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-14 sm:px-6 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <p className="text-[#F85A21] text-xs font-black uppercase tracking-[0.4em]">
            Company Profile
          </p>
          <h2 className="text-4xl font-black uppercase leading-none text-[#362A71] sm:text-5xl">
            Window <span className="text-[#F85A21]">King</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            Window King is a leading uPVC and aluminium systems brand focused on
            durable engineering, refined design, and dependable project
            execution.
          </p>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            Our product range spans top hung windows, casement systems, sliding
            solutions, acoustic upgrades, and custom fabrication for premium
            residential and commercial spaces.
          </p>
        </div>

        <div className="rounded-2xl border-l-4 border-[#F85A21] bg-gray-50 p-6 shadow-inner md:rounded-[2rem] md:border-l-8 md:p-8">
          <h3 className="text-[#362A71] font-black text-xl mb-4 uppercase">
            Company Highlights
          </h3>
          <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-tighter">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F85A21]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <TimelineSection />
      </div>
    </section>
  );
}
