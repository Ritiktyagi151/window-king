"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
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
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnquirySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEnquirySubmitted(true);
  };

  return (
    <header
      className={cn(
        "absolute left-0 top-0 z-50 w-full transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-0 before:h-[130px] before:bg-gradient-to-b before:from-white/70 before:to-transparent before:content-['']",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-[180px_1fr_auto] items-center gap-x-4 gap-y-1 px-5 py-2 sm:grid-cols-[220px_1fr_auto] sm:px-6 lg:grid-cols-[260px_1fr_auto] xl:grid-cols-[300px_1fr_auto]">
        <Link
          href="/"
          className="relative z-20 col-start-1 row-span-2 block h-14 w-36 shrink-0 self-center sm:h-16 sm:w-44 lg:h-20 lg:w-52 xl:h-24 xl:w-60"
        >
          <Image
            src="/window-king-logo.png"
            alt="Window King Logo"
            fill
            sizes="(min-width: 1280px) 240px, (min-width: 1024px) 208px, (min-width: 640px) 176px, 144px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="col-span-2 col-start-2 hidden items-center justify-end gap-2 lg:flex">
          <ActionButton icon={<BookOpen size={12} />} text="Brochure" />
          <ActionButton
            icon={<MessageSquare size={12} />}
            text="Enquire"
            onClick={() => {
              setEnquirySubmitted(false);
              setEnquiryOpen(true);
            }}
          />
          <a
            href="tel:+917065500903"
            className="flex items-center gap-2 rounded-full bg-[#F85A21] px-4 py-2 text-[11px] font-bold text-white shadow-md"
          >
            <Phone size={12} fill="white" /> +91 7065500903
          </a>
        </div>

        <div className="absolute inset-x-0 bottom-2 z-30 hidden justify-center xl:flex">
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
              <div className="grid w-[min(90vw,1120px)] grid-cols-1 gap-5 p-4 text-sm lg:grid-cols-2 lg:gap-8">
                <ProductItem
                  title="uPVC Window and Door Series"
                  href="/products/upvc"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  description="uPVC sliding, casement, fixed, villa, bay, arch, French, top hung, and door designs."
                  items={[
                    "Sliding Window",
                    "Casement Window",
                    "Fixed Window",
                    "Sliding Door",
                    "Lift And Sliding Door",
                  ]}
                />
                <ProductItem
                  title="Aluminium Window and Door Series"
                  href="/products/aluminium"
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
                  description="Aluminium window and door systems for homes, offices, and commercial spaces."
                  items={[
                    "Sliding Window",
                    "Casement Window",
                    "Fixed Window",
                    "Sliding Door",
                    "Folding Door",
                  ]}
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
              <div className="grid w-[min(76vw,900px)] grid-cols-1 gap-5 p-4 text-sm lg:grid-cols-2 lg:gap-8">
                <ProductItem
                  title="Residential Showcase"
                  href="/residential"
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
                  description="Premium window and door installations for villas, apartments, and modern homes."
                />
                <ProductItem
                  title="Commercial Projects"
                  href="/commercial"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                  description="Clean aluminium and uPVC solutions for offices, showrooms, and business spaces."
                />
                <ProductItem
                  title="Gallery"
                  href="/gallery"
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                  description="Explore completed Window King work across styles, spaces, and finishes."
                />
                <ProductItem
                  title="Completed Projects"
                  href="/projects"
                  src="https://images.unsplash.com/photo-1600585152915-d208bec867a1"
                  description="A closer look at finished installations and real spaces transformed by Window King."
                />
              </div>
            </MenuItem>

            <DesktopLink href="/contact" isScrolled={isScrolled}>
              Contact Us
            </DesktopLink>
          </Menu>
        </div>

        <div className="col-start-3 row-span-2 flex items-center justify-end gap-2 self-center lg:row-start-2 lg:row-span-1 lg:self-start xl:self-center">
          <form
            onSubmit={(event) => event.preventDefault()}
            className={cn(
              "hidden h-10 w-[285px] items-center rounded-full border pl-4 pr-1 shadow-lg backdrop-blur-md transition-all duration-300 lg:flex",
              isScrolled
                ? "border-gray-50 bg-white/80"
                : "border-white/20 bg-white/10"
            )}
          >
            <input
              type="search"
              aria-label="Search products"
              placeholder='Search "spices exp'
              className={cn(
                "min-w-0 flex-1 bg-transparent text-sm outline-none",
                isScrolled
                  ? "text-[#362A71] placeholder:text-gray-500"
                  : "text-white placeholder:text-white/85"
              )}
            />
            <button
              type="submit"
              aria-label="Search"
              className="ml-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F85A21] text-white transition-colors hover:bg-[#362A71]"
            >
              <Search size={16} strokeWidth={3} />
            </button>
          </form>

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

      {enquiryOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              aria-label="Close enquiry form"
              onClick={() => setEnquiryOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 text-[#362A71] transition-colors hover:bg-gray-200"
            >
              <X size={20} />
            </button>

            <div className="bg-[#362A71] px-6 py-5 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                Window King
              </p>
              <h2 className="mt-1 text-2xl font-black">Enquiry Form</h2>
            </div>

            {!enquirySubmitted ? (
              <form
                onSubmit={handleEnquirySubmit}
                className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2"
              >
                <div className="space-y-1">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#362A71]">
                    Full Name
                  </label>
                  <input
                    required
                    className="w-full rounded-xl border-2 border-transparent bg-gray-50 p-3 text-sm outline-none transition-all focus:border-[#362A71] focus:bg-white"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div className="space-y-1">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#362A71]">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full rounded-xl border-2 border-transparent bg-gray-50 p-3 text-sm outline-none transition-all focus:border-[#F85A21] focus:bg-white"
                    placeholder="+91 ..."
                  />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#362A71]">
                    Requirement Type
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-xl border-2 border-transparent bg-gray-50 p-3 text-sm outline-none transition-all focus:border-[#362A71] focus:bg-white">
                      <option>uPVC Window and Door Series</option>
                      <option>Aluminium Window and Door Series</option>
                      <option>Custom Design</option>
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#362A71]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full resize-none rounded-xl border-2 border-transparent bg-gray-50 p-3 text-sm outline-none transition-all focus:border-[#362A71] focus:bg-white"
                    placeholder="Project details..."
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-xl bg-[#F85A21] py-3 text-sm font-black uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-[#362A71]"
                >
                  Submit Details
                </button>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <CheckCircle2 size={34} />
                </div>
                <h3 className="text-2xl font-black text-[#362A71]">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  We will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(false)}
                  className="mt-6 rounded-full bg-[#362A71] px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-[#F85A21]"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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
                  label="uPVC Window and Door Series"
                  onClick={() => setMobileMenuOpen(false)}
                  sub
                />
                <MobileNavLink
                  href="/products/aluminium"
                  label="Aluminium Window and Door Series"
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
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-md bg-[#362A71] px-2.5 py-1.5 text-[10px] font-semibold uppercase text-white transition-all hover:bg-[#F85A21] hover:shadow-md"
    >
      {icon} {text}
    </button>
  );
}
