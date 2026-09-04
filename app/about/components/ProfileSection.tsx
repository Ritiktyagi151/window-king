"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import TimelineSection from "./TimelineSection";

const highlights = [
  "Established in 2021",
  "uPVC and aluminium systems",
  "Manufacturer and supplier",
  "Puri, Odisha presence",
];

const aboutSections = [
  {
    title: "Who We Are",
    eyebrow: "About Us",
    image: "/images/banner/banner1.png",
    icon: Sparkles,
    body:
      "Window King is an Odisha-based uPVC and aluminium window and door manufacturer with a production facility in Astaranga. The company focuses on changing the fenestration experience with modern technology, durable systems, and refined finishing.",
    points: [
      "uPVC and aluminium windows and doors",
      "Solutions for homes and commercial spaces",
      "Designed for Indian climate conditions",
    ],
    details: [
      "Production facility in Astaranga with a focus on uPVC and system aluminium doors and windows.",
      "High-performance products help reduce street noise, dust, pollution, rain, and wind impact.",
      "The company aims to bring change in the fenestration industry with latest technology and durable systems.",
      "Experts can study new and old projects to suggest the right techno-commercial solution.",
      "Performance depends on frame material, glass, sealing, and bonding with the building.",
    ],
  },
  {
    title: "Service We Offer",
    eyebrow: "Customer Support",
    image: "/images/our-masterpieces/master1.png",
    icon: Handshake,
    body:
      "Window King supports clients through design advice, site study, manufacturing, installation, and after-sales service. The team helps clients choose the right techno-commercial solution for new projects and replacements.",
    points: [
      "Design and advisory service",
      "Site survey to installation",
      "Retail and project support",
    ],
    details: [
      "Complete package for new-build and replacement markets.",
      "Support for retail customers and high-standard project requirements.",
      "Precision-made uPVC and aluminium window systems.",
      "Best available material and trained workforce for dependable execution.",
      "Doors and windows are engineered for customer needs with customisation support.",
    ],
  },
  {
    title: "Product Range",
    eyebrow: "Window & Door Series",
    image: "/images/home-page-img/quality.png",
    icon: Wrench,
    body:
      "The product range includes uPVC sliding, casement, fixed, villa, combination, tilt and turn, bay, arch, ventilator, French, awning, and top-hung windows, along with sliding, casement, folding, and lift-and-slide doors.",
    points: [
      "uPVC window series",
      "uPVC door series",
      "Customised designs for home, office, and commercial use",
    ],
    details: [
      "uPVC Sliding Window",
      "uPVC Casement Window",
      "uPVC Fixed Window",
      "uPVC Villa Window",
      "uPVC Combination Window",
      "uPVC Tilt & Turn Window",
      "uPVC Bay Window",
      "uPVC Arch Window",
      "Ventilator",
      "French Window",
      "Awning / Top Hung Window",
      "uPVC Sliding Door",
      "uPVC Casement Door",
      "uPVC Slide And Folding Door",
      "uPVC Lift And Sliding Door",
    ],
  },
  {
    title: "Product Quality",
    eyebrow: "Quality Checks",
    image: "/images/home-page-img/quality3.png",
    icon: ShieldCheck,
    body:
      "Every product is checked for dimensions, composition, durability, and finish. Window King uses quality raw materials and precision processes so windows and doors perform reliably in sunlight, rain, dust, noise, and daily operation.",
    points: [
      "Multiple quality checks",
      "Energy efficient window and door systems",
      "Durable, low-maintenance finish",
    ],
    details: [
      "Quality auditors check flawlessness, durability, finish, and customer requirement fit.",
      "Products are tested and stamped for accurate composition and dimensions.",
      "uPVC windows and doors are made with superior raw materials that do not fade in sunlight.",
      "Systems are built for smooth operation without unwanted sound during opening and closing.",
      "Long-lasting beauty comes from strong material, internal frame quality, and manufacturing process.",
    ],
  },
  {
    title: "Customer Satisfaction",
    eyebrow: "End To End Service",
    image: "/images/our-masterpieces/masterslide2.png",
    icon: Handshake,
    body:
      "Window King believes customer relationships continue beyond a single project. The team focuses on trust, clear guidance, hassle-free buying, and dependable support from selection to installation and aftercare.",
    points: [
      "Design selection support",
      "Site survey, fabrication, delivery, and installation",
      "Aftercare and customer confidence",
    ],
    details: [
      "Customers are guided from selecting the right design to final installation.",
      "Window experts serve individual homes and large developers with equal attention.",
      "The buying journey is kept friendly, simple, and confidence-building.",
      "The team works to deliver happy memories with every purchase.",
      "Long-term trust is built through product quality and flawless service.",
    ],
  },
  {
    title: "Our Team",
    eyebrow: "Expert People",
    image: "/images/our-masterpieces/master2.png",
    icon: Users,
    body:
      "Window King works as a coordinated team, from management to trained engineers and production staff. The team is built around customer satisfaction, practical problem solving, and consistent product execution.",
    points: [
      "Experienced engineers",
      "Design to manufacturing support",
      "Customer-first working culture",
    ],
    details: [
      "Management, engineers, and workers operate as one team for customer satisfaction.",
      "Team members can share ideas to improve business and customer outcomes.",
      "Engineers are trained to provide top-notch service and ensure customer satisfaction.",
      "The expert team supports design possibilities for uPVC and aluminium windows and doors.",
      "Training is aligned with benefits for both company and clients.",
    ],
  },
  {
    title: "Machinery We Use",
    eyebrow: "Manufacturing Strength",
    image: "/images/home-page-img/quality5.png",
    icon: Factory,
    body:
      "The manufacturing process is supported by automatic German technology CNC machinery for cutting, welding, routing, drainage, bead cutting, corner cleaning, punching, bending, and strength checking.",
    points: [
      "Automatic CNC cutting and welding",
      "Corner cleaning and bead cutting machines",
      "Strength checking and precision finishing",
    ],
    details: [
      "uPVC Fully Automatic CNC Two Head Cutting Machine",
      "Three Head Seamless Corner Welding Machine",
      "Heavy Duty Copy Router with Triple Drill Machine",
      "Three Axis Drain Slot Machine",
      "10 Tool CNC Fully Automatic Corner Cleaning Machine",
      "Automatic Heavy Duty End Milling Machine",
      "Automatic V Cutting Machine",
      "Automatic Mullion Cutting Machine",
      "CNC Digital Automatic Bead Cutting Machine",
      "Automatic Interlock Punching",
      "Automatic Arc Bending Machine",
      "Automatic Aluminium Crimping / Punching Machine",
      "Welding Strength Checking Machine",
    ],
  },
];

const sectionReveal: Variants = {
  hidden: (imageFirst: boolean) => ({
    opacity: 0,
    x: imageFirst ? 80 : -80,
    y: 36,
    scale: 0.96,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="relative isolate overflow-hidden bg-[#f7f7f8] pb-14 pt-16 scroll-mt-12 sm:pt-20 md:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="pt-4 text-[#362A71] lg:pt-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
              About Window King
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
              Built For Better Openings
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-gray-600 md:text-lg">
              WINDOW KING PRIVATE LIMITED is a Puri-based manufacturer and
              supplier focused on practical, premium uPVC glass window solutions
              for homes and commercial spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative h-[360px] overflow-hidden rounded-2xl shadow-2xl md:h-[520px]"
          >
            <Image
              src="/images/banner/banner2.png"
              alt="Modern Window King installation"
              fill
              priority
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 p-4 shadow-xl backdrop-blur-md">
              <p className="text-3xl font-black leading-none text-[#362A71]">
                2021
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#F85A21]">
                Established
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="flex items-center gap-3 rounded-xl bg-[#f7f7f8] p-4"
                >
                  <CheckCircle2 className="shrink-0 text-[#F85A21]" size={20} />
                  <span className="text-sm font-black uppercase text-[#362A71]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#362A71] p-6 text-white shadow-xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
                  Company Profile
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase">
                  Quality Products. Dependable Service.
                </h2>
              </div>
              <ArrowUpRight className="shrink-0 text-[#F85A21]" size={30} />
            </div>
            <p className="mt-5 text-sm font-medium leading-7 text-white/75">
              Every solution is guided by durability, finish, customer support,
              and window systems that suit real site requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 md:mt-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
            About Us Content
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase text-[#362A71] sm:text-5xl">
            Divided Into Clear Sections
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Company profile content is now arranged into focused sections with
            images, highlights, and easy-to-scan points.
          </p>
        </div>

        <div className="space-y-8">
          {aboutSections.map((section, index) => {
            const Icon = section.icon;
            const imageFirst = index % 2 === 1;

            return (
              <motion.article
                key={section.title}
                custom={imageFirst}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.28 }}
                variants={sectionReveal}
                className="grid overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 lg:grid-cols-2"
              >
                <motion.div
                  variants={imageReveal}
                  className={`relative min-h-[280px] sm:min-h-[360px] ${
                    imageFirst ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/65 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
                >
                  <motion.div
                    variants={fadeUp}
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F85A21] text-white shadow-lg"
                  >
                    <Icon size={22} />
                  </motion.div>
                  <motion.p
                    variants={fadeUp}
                    className="text-xs font-black uppercase tracking-[0.28em] text-[#F85A21]"
                  >
                    {section.eyebrow}
                  </motion.p>
                  <motion.h3
                    variants={fadeUp}
                    className="mt-3 text-3xl font-black uppercase text-[#362A71]"
                  >
                    {section.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    className="mt-4 text-sm leading-7 text-gray-600 md:text-base"
                  >
                    {section.body}
                  </motion.p>
                  <motion.div variants={fadeUp} className="mt-6 grid gap-3">
                    {section.points.map((point) => (
                      <motion.div
                        key={point}
                        variants={fadeUp}
                        className="flex items-start gap-3 rounded-xl bg-[#f7f7f8] p-4"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-[#F85A21]"
                        />
                        <span className="text-sm font-bold text-[#362A71]">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                  {"details" in section && section.details.length > 0 ? (
                    <motion.div variants={fadeUp} className="mt-6">
                      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#362A71]/45">
                        Complete Details
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {section.details.map((detail) => (
                          <motion.div
                            key={detail}
                            variants={fadeUp}
                            className="rounded-lg border border-[#362A71]/10 bg-white px-3 py-2 text-xs font-semibold leading-5 text-gray-600 shadow-sm"
                          >
                            {detail}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <TimelineSection />
    </section>
  );
}
