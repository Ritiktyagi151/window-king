"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from "lucide-react";

const usefulLinks = [
  { label: "Windows", href: "/products/upvc" },
  { label: "Doors", href: "/products/upvc-doors" },
  { label: "Colour Options", href: "/quality" },
  { label: "Blogs", href: "/blog" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Raw Data", href: "/raw-data" },
];

const locationLinks = [
  "Puri",
  "Bhubaneswar",
  "Cuttack",
  "Konark",
  "Khurda",
  "Balasore",
  "Rourkela",
  "Sambalpur",
  "Berhampur",
  "More Location",
];

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
];

const quickActions = [
  { label: "Location", icon: MapPin, href: "/contact" },
  { label: "Brochure", icon: BookOpen, href: "#" },
  { label: "Enquiry", icon: ClipboardList, href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-[#10004B] bg-[#f7f7f8] text-[#0f2140]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.1fr_1.1fr] lg:gap-14 lg:py-12">
        <div>
          <Link href="/" className="relative block h-28 w-72 sm:h-32 sm:w-80">
            <Image
              src="/windowking.png"
              alt="Window King Logo"
              fill
              className="object-contain object-left"
            />
          </Link>

          <p className="mt-8 max-w-xs text-[15px] font-medium leading-7 text-[#111827]">
            Established in 2021, WINDOW KING PRIVATE LIMITED is a trusted
            manufacturer and supplier of uPVC glass windows, known in Puri for
            quality products and dependable service.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-black text-[#10004B]">Useful Links</h3>
          <ul className="mt-6 space-y-4">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base font-bold text-[#10004B] transition-colors hover:text-[#F85A21]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black text-[#10004B]">Useful Links</h3>
          <ul className="mt-6 space-y-5">
            <ContactItem icon={<MapPin size={24} />} href="/contact">
              WINDOW KING PRIVATE LIMITED
              <br />
              Puri, Odisha, India
            </ContactItem>
            <ContactItem icon={<Phone size={22} />} href="tel:+917065500903">
              +91 7065500903
            </ContactItem>
            <ContactItem icon={<MessageCircle size={22} />} href="https://wa.me/917065500903">
              +91 7065500903
            </ContactItem>
            <ContactItem icon={<Mail size={22} />} href="mailto:info@windowking.in">
              info@windowking.in
            </ContactItem>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black text-[#10004B]">Subscribe Now</h3>
          <p className="mt-6 max-w-xs text-base font-medium leading-7 text-[#111827]">
            Do not miss our future updates. Get subscribed today!
          </p>

          <form className="mt-7 flex max-w-xs overflow-hidden rounded-full border border-[#10004B]/50 bg-white">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Your mail here"
              className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-gray-500"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10004B] text-white transition-colors hover:bg-[#F85A21]"
            >
              <Send size={18} />
            </button>
          </form>

          <div className="mt-7 flex gap-4">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1269b0] shadow-sm transition-all hover:-translate-y-1 hover:text-[#F85A21] hover:shadow-md"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 sm:px-6">
        <h3 className="text-2xl font-black text-[#0f2140]">Location Links</h3>
        <div className="mt-6 flex flex-wrap gap-y-4 text-sm font-semibold text-[#10004B]">
          {locationLinks.map((location) => (
            <Link
              key={location}
              href="/contact"
              className="border-[#10004B]/45 pr-5 transition-colors hover:text-[#F85A21] [&:not(:last-child)]:mr-5 [&:not(:last-child)]:border-r"
            >
              {location}
            </Link>
          ))}
        </div>
      </div>

      <div
        className="relative bg-[#10004B] px-5 pb-12 pt-20 text-white sm:px-6 md:pb-8 md:pt-12"
        style={{
          clipPath: "polygon(0 0, 74% 18%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-3">
          <div className="text-2xl font-black uppercase leading-6 tracking-tight sm:text-3xl">
            <span className="block">Quality</span>
            <span className="block text-[#F2B93B]">Service</span>
            <span className="block">Trust</span>
          </div>

          <p className="text-center text-sm font-bold text-white/85">
            &copy;2025. Window King Private Limited. All Rights Reserved.
          </p>

          <p className="text-center text-xs font-semibold text-white/70 md:text-right">
            Designed & Developed by Jaikvik Technology India Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* <div className="fixed right-5 top-1/2 z-[60] hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {quickActions.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c79a36] text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#F85A21]"
          >
            <Icon size={22} />
          </Link>
        ))}
      </div> */}
    </footer>
  );
}

function ContactItem({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid grid-cols-[56px_1fr] items-center gap-3">
      <Link
        href={href}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10004B] text-white transition-colors hover:bg-[#F85A21]"
      >
        {icon}
      </Link>
      <Link
        href={href}
        className="text-[15px] font-medium leading-6 text-[#22324d] transition-colors hover:text-[#F85A21]"
      >
        {children}
      </Link>
    </li>
  );
}
