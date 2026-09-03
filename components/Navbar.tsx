"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  MessageSquare,
  Phone,
  Search,
  X,
} from "lucide-react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "absolute left-0 top-0 z-50 w-full transition-colors duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[180px_1fr_auto] items-center gap-x-4 gap-y-1 px-5 py-2 sm:grid-cols-[220px_1fr_auto] sm:px-6 lg:grid-cols-[260px_1fr_auto] xl:grid-cols-[300px_1fr_auto]">
        <Link
          href="/"
          className="relative z-20 col-start-1 row-span-2 block h-20 w-44 shrink-0 self-center sm:h-24 sm:w-52 lg:h-28 lg:w-64 xl:h-32 xl:w-72"
        >
          <Image
            src="/window-king-logo.png"
            alt="Window King Logo"
            fill
            sizes="(min-width: 1280px) 288px, (min-width: 1024px) 256px, (min-width: 640px) 208px, 176px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="col-span-2 col-start-2 hidden items-center justify-end gap-2 lg:flex">
          <ActionButton icon={<BookOpen size={12} />} text="Brochure" />
          <ActionButton icon={<MessageSquare size={12} />} text="Enquire" />
          <a
            href="tel:+917065500903"
            className="flex items-center gap-2 rounded-full bg-[#F85A21] px-4 py-2 text-[11px] font-bold text-white shadow-md"
          >
            <Phone size={12} fill="white" /> +91 7065500903
          </a>
        </div>

        <div className="col-start-2 row-start-2 hidden min-w-0 justify-center xl:flex">
          <Menu setActive={setActive} transparent={!isScrolled}>
            <DesktopLink href="/" isScrolled={isScrolled}>
              Home
            </DesktopLink>

            <MenuItem
              setActive={setActive}
              active={active}
              item="About Us"
              transparent={!isScrolled}
            >
              <div className="flex flex-col space-y-4 p-2 text-sm">
                <HoveredLink href="/about/profile">Company Profile</HoveredLink>
                <HoveredLink href="/about/factsheet">
                  Corporate Factsheet
                </HoveredLink>
                <HoveredLink href="/about/infrastructure">
                  Infrastructure & Machinery
                </HoveredLink>
                <HoveredLink href="/about/team">Team of Experts</HoveredLink>
                <HoveredLink href="/about/mentor">Our Mentor</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item="Products"
              transparent={!isScrolled}
            >
              <div className="grid w-[min(76vw,900px)] grid-cols-1 gap-5 p-4 text-sm lg:grid-cols-2 lg:gap-8">
                <ProductItem
                  title="uPVC Window Series"
                  href="/products/upvc"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  description="Sliding, Casement, Fixed, Villa, Bay, Arch, French, and Top Hung designs."
                />
                <ProductItem
                  title="uPVC Door Series"
                  href="/products/upvc-doors"
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
                  description="Sliding, Casement, Slide & Folding, and Lift & Sliding doors."
                />
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item="Why Window King"
              transparent={!isScrolled}
            >
              <div className="flex flex-col space-y-4 p-2 text-sm text-[#362A71]">
                <HoveredLink href="/quality">Quality Standards</HoveredLink>
                <HoveredLink href="/innovation">Innovation Lab</HoveredLink>
                <HoveredLink href="/service">After Sales Service</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item="Showcase"
              transparent={!isScrolled}
            >
              <div className="flex flex-col space-y-4 p-2 text-sm text-[#362A71]">
                <HoveredLink href="/residential">Residential</HoveredLink>
                <HoveredLink href="/commercial">Commercial</HoveredLink>
                <HoveredLink href="/gallery">Gallery</HoveredLink>
              </div>
            </MenuItem>

            <DesktopLink href="/contact" isScrolled={isScrolled}>
              Contact Us
            </DesktopLink>
          </Menu>
        </div>

        <div className="col-start-3 row-span-2 flex items-center justify-end gap-2 self-center lg:row-start-2 lg:row-span-1 lg:self-start xl:self-center">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "hidden rounded-full p-2 text-white shadow-sm transition-colors hover:bg-[#F85A21] lg:block",
              isScrolled ? "bg-[#362A71]" : "bg-white/15 backdrop-blur-md"
            )}
          >
            <Search size={16} strokeWidth={3} />
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col items-end gap-1.5 p-2 xl:hidden"
          >
            <span
              className={cn(
                "h-1 w-8 rounded-full",
                isScrolled ? "bg-[#362A71]" : "bg-white"
              )}
            />
            <span className="h-1 w-5 rounded-full bg-[#F85A21]" />
            <span
              className={cn(
                "h-1 w-8 rounded-full",
                isScrolled ? "bg-[#362A71]" : "bg-white"
              )}
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm xl:hidden"
          />

          <div className="fixed right-0 top-0 z-[110] flex h-full w-[85%] max-w-[400px] flex-col bg-white shadow-2xl xl:hidden">
            <div className="flex items-center justify-between border-b p-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="relative block h-20 w-40"
              >
                <Image
                  src="/window-king-logo.png"
                  alt="Window King Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <X size={24} className="text-[#362A71]" />
              </button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-6">
              <MobileNavLink
                href="/"
                label="Home"
                onClick={() => setMobileMenuOpen(false)}
              />

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  About Window King
                </p>
                <MobileNavLink
                  href="/about#profile"
                  label="Company Profile"
                  onClick={() => setMobileMenuOpen(false)}
                  sub
                />
                <MobileNavLink
                  href="/about#awards"
                  label="Awards"
                  onClick={() => setMobileMenuOpen(false)}
                  sub
                />
                <MobileNavLink
                  href="/about#mentor"
                  label="Our Mentor"
                  onClick={() => setMobileMenuOpen(false)}
                  sub
                />
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Solutions
                </p>
                <MobileNavLink
                  href="/products/upvc"
                  label="uPVC Window Series"
                  onClick={() => setMobileMenuOpen(false)}
                  sub
                />
                <MobileNavLink
                  href="/products/upvc-doors"
                  label="uPVC Door Series"
                  onClick={() => setMobileMenuOpen(false)}
                  sub
                />
              </div>

              <MobileNavLink
                href="/contact"
                label="Contact Us"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            <div className="border-t bg-gray-50 p-6">
              <a
                href="tel:+917065500903"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#362A71] py-4 font-bold text-white transition-all hover:bg-[#F85A21]"
              >
                <Phone size={18} fill="white" /> Call Expert
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

function DesktopLink({
  href,
  isScrolled,
  children,
}: {
  href: string;
  isScrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap px-2 text-[15px] font-bold transition-colors hover:text-[#F85A21]",
        isScrolled ? "text-[#362A71]" : "text-white"
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
  sub = false,
}: {
  href: string;
  label: string;
  onClick: () => void;
  sub?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex items-center justify-between py-1",
        sub
          ? "text-lg font-semibold text-[#362A71]/80"
          : "text-2xl font-black uppercase tracking-tighter text-[#362A71]"
      )}
    >
      {label}
      <ChevronRight
        className={cn(
          "text-[#F85A21] opacity-0 transition-all group-hover:opacity-100",
          sub ? "h-4 w-4" : "h-6 w-6"
        )}
      />
    </Link>
  );
}

function ActionButton({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button className="flex items-center gap-1.5 rounded-md bg-[#362A71] px-2.5 py-1.5 text-[10px] font-semibold uppercase text-white transition-all hover:bg-[#F85A21] hover:shadow-md">
      {icon} {text}
    </button>
  );
}
