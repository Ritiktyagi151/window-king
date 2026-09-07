"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        className={cn(
          "cursor-pointer whitespace-nowrap font-bold transition-colors duration-200 hover:text-[#F85A21]",
          transparent ? "text-white" : "text-[#362A71]"
        )}
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        >
          <div className="absolute left-1/2 top-[calc(100%_+_0.50rem)] -translate-x-1/2 pt-2">
            <div className="max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0px_20px_50px_rgba(54,42,113,0.15)] backdrop-blur-md">
              <div className="h-full w-max max-w-[calc(100vw-2rem)] p-4 lg:p-6">
                {children}
              </div>
            </div>
          </div>
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
  items,
  itemGroups,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  items?: string[];
  itemGroups?: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
}) => {
  const hasLinkedItems = itemGroups && itemGroups.length > 0;
  const Wrapper = hasLinkedItems ? "div" : "a";

  return (
    <Wrapper
      {...(!hasLinkedItems ? { href } : {})}
      className="group grid grid-cols-[180px_minmax(0,1fr)] gap-5 rounded-xl p-3 transition-all hover:bg-gray-50"
    >
      {hasLinkedItems ? (
        <Link href={href} className="block">
          <img
            src={src}
            width={180}
            height={110}
            alt={title}
            className="h-[110px] w-[180px] shrink-0 rounded-xl object-cover shadow-md transition-shadow duration-300 group-hover:shadow-xl"
          />
        </Link>
      ) : (
        <img
          src={src}
          width={180}
          height={110}
          alt={title}
          className="h-[110px] w-[180px] shrink-0 rounded-xl object-cover shadow-md transition-shadow duration-300 group-hover:shadow-xl"
        />
      )}
      <div className="min-w-0 py-1">
        {hasLinkedItems ? (
          <Link href={href}>
            <h4 className="mb-2 whitespace-nowrap text-xl font-bold leading-snug text-[#362A71] transition-colors hover:text-[#F85A21] group-hover:text-[#F85A21]">
              {title}
            </h4>
          </Link>
        ) : (
          <h4 className="mb-2 whitespace-nowrap text-xl font-bold leading-snug text-[#362A71] transition-colors group-hover:text-[#F85A21]">
            {title}
          </h4>
        )}
        <p className="text-sm leading-relaxed text-gray-500">
          {description}
        </p>
        {hasLinkedItems ? (
          <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-[420px] group-hover:opacity-100">
            <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-3">
              {itemGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#F85A21]">
                    {group.title}
                  </p>
                  <div className="grid gap-1.5 text-[12px] font-semibold text-[#362A71]">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-gray-100 transition-colors hover:bg-[#F85A21]/10 hover:text-[#F85A21]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : items && (
          <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-44 group-hover:opacity-100">
            <div className="grid grid-cols-1 gap-1.5 border-t border-gray-100 pt-3 text-[12px] font-semibold text-[#362A71] sm:grid-cols-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-[#F85A21]/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className="text-gray-600 font-medium hover:text-[#F85A21] transition-colors duration-200"
    >
      {children}
    </a>
  );
};
