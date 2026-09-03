"use client";
import React from "react";
import { motion } from "framer-motion"; // 'motion/react' ki jagah standard 'framer-motion' use karein
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const; // Yahan 'as const' add kiya hai error fix karne ke liye

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  transparent = false,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  transparent?: boolean;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        // Black color hatakar Purple (#362A71) kiya aur font-bold badha di
        className={cn(
          "cursor-pointer whitespace-nowrap font-bold transition-colors duration-200 hover:text-[#F85A21]",
          transparent ? "text-white" : "text-[#362A71]"
        )}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            // Spacing badhane ke liye top value badhai hai
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                // Dark mode logic (dark:bg-black) hatakar pure white aur subtle gray border rakha hai
                className="max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0px_20px_50px_rgba(54,42,113,0.15)] backdrop-blur-md"
              >
                <motion.div
                  layout
                  className="h-full w-max max-w-[calc(100vw-2rem)] p-4 lg:p-6"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  transparent = false,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  transparent?: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      // Navbar ka background white aur border halke purple-tint mein rakha hai
      className={`relative flex items-center justify-center space-x-4 rounded-full border px-6 py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 2xl:space-x-8 2xl:px-10 2xl:py-3 ${
        transparent
          ? "border-white/20 bg-white/10"
          : "border-gray-50 bg-white/80"
      }`}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="group grid grid-cols-[180px_1fr] gap-5 rounded-xl p-3 transition-all hover:bg-gray-50">
      <img
        src={src}
        width={180}
        height={110}
        alt={title}
        className="h-[110px] w-[180px] shrink-0 rounded-xl object-cover shadow-md transition-shadow duration-300 group-hover:shadow-xl"
      />
      <div className="min-w-0 py-1">
        {/* Title ko brand purple kiya */}
        <h4 className="text-xl font-bold mb-2 leading-snug text-[#362A71] group-hover:text-[#F85A21] transition-colors">
          {title}
        </h4>
        <p className="text-gray-500 text-sm max-w-[15rem] leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      // Link color gray se Purple (#362A71) aur hover Orange (#F85A21) kiya
      className="text-gray-600 font-medium hover:text-[#F85A21] transition-colors duration-200"
    >
      {children}
    </a>
  );
};
