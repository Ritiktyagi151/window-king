"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function VirtualShowroomTour() {
  return (
    <Link
      href="/virtual-tour"
      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#F85A21] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-[#F85A21]/25 transition-all hover:bg-white hover:text-[#362A71] active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-xs sm:tracking-[0.2em]"
    >
      <RotateCcw size={17} />
      Start 360 Tour
    </Link>
  );
}
