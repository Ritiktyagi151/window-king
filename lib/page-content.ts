import type { MarketingPageContent } from "@/components/MarketingPage";

export const standalonePages: Record<string, MarketingPageContent> = {
  quality: {
    eyebrow: "Why Window King",
    title: "Quality Standards",
    description:
      "Every Window King system is developed with a strong focus on durability, finish consistency, weather resistance, and installation reliability.",
    primaryCta: { href: "/contact", label: "Book Consultation" },
    secondaryCta: { href: "/about/infrastructure", label: "View Facility" },
    metrics: [
      { label: "Factory Checks", value: "3-Step" },
      { label: "Warranty Focus", value: "10 Yr" },
      { label: "Install Teams", value: "Expert" },
      { label: "Custom Builds", value: "100%" },
    ],
    pillars: [
      {
        title: "Material screening",
        description:
          "Profiles, hardware, glass, and accessories are chosen for long-term performance and visual consistency.",
      },
      {
        title: "Process discipline",
        description:
          "Fabrication follows repeatable factory workflows so dimensions, sealing, and reinforcement stay dependable.",
      },
      {
        title: "Post-install support",
        description:
          "Quality is carried through final fitting, snag resolution, and service follow-ups after handover.",
      },
    ],
    highlights: [
      {
        title: "Weather-ready systems",
        description:
          "Built to handle heat, rain, and day-to-day wear without compromising fit or finish.",
      },
      {
        title: "Noise-control options",
        description:
          "Solutions tailored for quieter interiors in dense urban and roadside settings.",
      },
      {
        title: "Clean finishing",
        description:
          "Attention to junctions, trims, and alignment so the final result feels premium.",
      },
      {
        title: "Reliable execution",
        description:
          "Structured coordination between design, production, and site teams keeps delivery on track.",
      },
    ],
  },
  innovation: {
    eyebrow: "Why Window King",
    title: "Innovation Lab",
    description:
      "We combine modern fabrication practices, detail-led engineering, and custom product thinking to solve real design and performance challenges.",
    primaryCta: { href: "/products/aluminium", label: "Explore Systems" },
    secondaryCta: { href: "/contact", label: "Discuss Project" },
    metrics: [
      { label: "Custom Design", value: "Bespoke" },
      { label: "Precision Tools", value: "CNC" },
      { label: "Project Types", value: "Multi" },
      { label: "Iteration Speed", value: "Fast" },
    ],
    pillars: [
      {
        title: "Design-led engineering",
        description:
          "Architectural intent is translated into window and door systems that remain practical to produce and install.",
      },
      {
        title: "Prototype mindset",
        description:
          "Complex requirements are tested through detailing, specification refinement, and buildability review.",
      },
      {
        title: "Performance upgrades",
        description:
          "Acoustic, thermal, and movement-related requirements are considered early so systems stay future-ready.",
      },
    ],
    highlights: [
      {
        title: "Slim sightlines",
        description:
          "Contemporary systems designed for cleaner elevations and stronger indoor-outdoor connection.",
      },
      {
        title: "Acoustic detailing",
        description:
          "Configurations developed to support quieter living and working environments.",
      },
      {
        title: "Mixed material expertise",
        description:
          "uPVC and aluminium solutions can be aligned with different design budgets and styles.",
      },
      {
        title: "Site-responsive planning",
        description:
          "Recommendations reflect opening size, orientation, use case, and installation realities.",
      },
    ],
  },
  service: {
    eyebrow: "Why Window King",
    title: "After Sales Service",
    description:
      "Service is treated as part of the product experience, with support for consultation, installation coordination, maintenance guidance, and post-handover needs.",
    primaryCta: { href: "/contact", label: "Talk to Support" },
    secondaryCta: { href: "/quality", label: "See Standards" },
    metrics: [
      { label: "Response Style", value: "Fast" },
      { label: "Service Scope", value: "End-to-End" },
      { label: "Site Support", value: "Active" },
      { label: "Care Focus", value: "Long Term" },
    ],
    pillars: [
      {
        title: "Pre-install guidance",
        description:
          "Clear communication on opening readiness, timelines, and the right system choices before production starts.",
      },
      {
        title: "On-site coordination",
        description:
          "Installation teams work with practical sequencing and finishing details to reduce friction during execution.",
      },
      {
        title: "Post-handover assurance",
        description:
          "Customers get dependable support for adjustments, usage guidance, and service requests after delivery.",
      },
    ],
    highlights: [
      {
        title: "Consultative approach",
        description:
          "Recommendations are shaped around project type, usage, and performance expectations.",
      },
      {
        title: "Installation follow-through",
        description:
          "Site teams focus on alignment, cleanliness, and smooth final handover.",
      },
      {
        title: "Maintenance clarity",
        description:
          "Simple upkeep guidance helps systems continue performing well over time.",
      },
      {
        title: "Customer confidence",
        description:
          "A support-first mindset helps build trust beyond the initial project delivery.",
      },
    ],
  },
  residential: {
    eyebrow: "Showcase",
    title: "Residential Projects",
    description:
      "Window King residential systems are designed to elevate comfort, acoustic performance, daylight, and facade appeal for modern homes.",
    primaryCta: { href: "/products/upvc", label: "View uPVC Range" },
    secondaryCta: { href: "/contact", label: "Plan Home Project" },
    metrics: [
      { label: "Project Mood", value: "Premium" },
      { label: "Comfort Focus", value: "High" },
      { label: "Noise Control", value: "Yes" },
      { label: "Custom Sizes", value: "Flexible" },
    ],
    pillars: [
      {
        title: "Home-first performance",
        description:
          "Systems are selected to support ventilation, privacy, security, and everyday ease of use.",
      },
      {
        title: "Refined aesthetics",
        description:
          "Window and door combinations are planned to complement both contemporary and classic residences.",
      },
      {
        title: "Dependable comfort",
        description:
          "Attention to sealing, glazing, and fitting supports better thermal and acoustic outcomes.",
      },
    ],
    highlights: [
      {
        title: "Villas and builder floors",
        description:
          "Bespoke sizes and finish options tailored for high-visibility facade applications.",
      },
      {
        title: "Apartment upgrades",
        description:
          "Replacement systems that improve comfort and appearance without feeling generic.",
      },
      {
        title: "Balcony and slider options",
        description:
          "Layouts that improve movement, daylight, and usable space planning.",
      },
      {
        title: "Low-maintenance ownership",
        description:
          "Materials and finishes chosen for simpler upkeep in busy households.",
      },
    ],
  },
  commercial: {
    eyebrow: "Showcase",
    title: "Commercial Projects",
    description:
      "Our commercial solutions balance strong performance, clean detailing, and execution discipline for offices, retail spaces, institutions, and mixed-use developments.",
    primaryCta: { href: "/products/aluminium", label: "View Aluminium Range" },
    secondaryCta: { href: "/contact", label: "Discuss Commercial Build" },
    metrics: [
      { label: "Project Types", value: "Mixed" },
      { label: "Execution Mode", value: "Planned" },
      { label: "Facade Focus", value: "Clean" },
      { label: "Scalability", value: "Strong" },
    ],
    pillars: [
      {
        title: "Specification clarity",
        description:
          "System selection takes into account usage intensity, project scale, and facade intent.",
      },
      {
        title: "Execution readiness",
        description:
          "Teams align detailing, fabrication, and site coordination for smoother commercial delivery.",
      },
      {
        title: "Professional finish",
        description:
          "Visual precision and reliable operation are treated as essential parts of the final outcome.",
      },
    ],
    highlights: [
      {
        title: "Office environments",
        description:
          "Systems supporting daylight, acoustic comfort, and a polished client-facing impression.",
      },
      {
        title: "Retail and hospitality",
        description:
          "Slim, contemporary framing options that align with branded customer experiences.",
      },
      {
        title: "Institutional projects",
        description:
          "Durable systems selected for repeatable performance in high-traffic environments.",
      },
      {
        title: "Mixed-use developments",
        description:
          "Coordination across varying opening types and functional requirements.",
      },
    ],
  },
  gallery: {
    eyebrow: "Showcase",
    title: "Project Gallery",
    description:
      "A curated look at Window King design language, installation quality, and finished spaces across residential and commercial applications.",
    primaryCta: { href: "/residential", label: "See Residential Work" },
    secondaryCta: { href: "/commercial", label: "See Commercial Work" },
    metrics: [
      { label: "Project Types", value: "2+" },
      { label: "Visual Focus", value: "Detail" },
      { label: "Finish Quality", value: "Premium" },
      { label: "Use Cases", value: "Wide" },
    ],
    pillars: [
      {
        title: "Installed outcomes",
        description:
          "Browse examples that show how materials, openings, and proportions come together in real spaces.",
      },
      {
        title: "Detail appreciation",
        description:
          "The gallery highlights finish quality, slimmer profiles, and cleaner alignment on site.",
      },
      {
        title: "Inspiration-ready",
        description:
          "Useful reference points for clients comparing styles, system types, and project intent.",
      },
    ],
    highlights: [
      {
        title: "Facade snapshots",
        description:
          "Examples of how openings shape the overall identity of a building exterior.",
      },
      {
        title: "Interior views",
        description:
          "Projects that show light quality, sightlines, and spatial openness after installation.",
      },
      {
        title: "Hardware and finish details",
        description:
          "Closer looks at the elements that make a premium system feel complete.",
      },
      {
        title: "Project variety",
        description:
          "A mix of home and commercial references to support faster decision-making.",
      },
    ],
  },
};

export const productPages: Record<string, MarketingPageContent> = {
  upvc: {
    eyebrow: "Products",
    title: "uPVC Windows",
    description:
      "Window King's uPVC range is designed for everyday durability, thermal comfort, noise control, and effortless visual neatness.",
    primaryCta: { href: "/contact", label: "Get Product Advice" },
    secondaryCta: { href: "/quality", label: "See Quality Focus" },
    metrics: [
      { label: "Noise Control", value: "Strong" },
      { label: "Maintenance", value: "Low" },
      { label: "Weather Seal", value: "High" },
      { label: "Applications", value: "Wide" },
    ],
    pillars: [
      {
        title: "Comfort-oriented systems",
        description:
          "A strong fit for homes and light commercial projects where sealing and acoustic support matter.",
      },
      {
        title: "Flexible configurations",
        description:
          "Suitable for casement, sliding, top hung, and other practical opening types.",
      },
      {
        title: "Long-term ease",
        description:
          "Low-maintenance profiles make uPVC a dependable choice for busy properties.",
      },
    ],
    highlights: [
      {
        title: "Casement options",
        description:
          "Reliable daily-use windows with solid sealing and familiar operation.",
      },
      {
        title: "Sliding formats",
        description:
          "Space-efficient movement for balconies, bedrooms, and compact openings.",
      },
      {
        title: "Noise-conscious variants",
        description:
          "Well-suited for urban sites where quieter interiors are important.",
      },
      {
        title: "Clean white and custom looks",
        description:
          "Profile finishes that work across simple and premium interior palettes.",
      },
    ],
  },
  aluminium: {
    eyebrow: "Products",
    title: "Aluminium Series",
    description:
      "Our aluminium systems are built for slimmer sightlines, premium aesthetics, robust performance, and elevated architectural expression.",
    primaryCta: { href: "/contact", label: "Discuss Specifications" },
    secondaryCta: { href: "/innovation", label: "Visit Innovation Lab" },
    metrics: [
      { label: "Sightlines", value: "Slim" },
      { label: "Design Feel", value: "Luxury" },
      { label: "Project Fit", value: "Premium" },
      { label: "Facade Value", value: "High" },
    ],
    pillars: [
      {
        title: "Architectural presence",
        description:
          "Well-suited for projects where clean lines and premium finishes are part of the design language.",
      },
      {
        title: "Performance-ready detailing",
        description:
          "Systems are selected with strength, scale, and smooth operation in mind.",
      },
      {
        title: "Indoor-outdoor connection",
        description:
          "A strong choice for larger openings, sliders, and statement installations.",
      },
    ],
    highlights: [
      {
        title: "Luxury sliders",
        description:
          "Expansive openings that support openness, daylight, and visual continuity.",
      },
      {
        title: "Slim casements",
        description:
          "A refined alternative when design minimalism is a major priority.",
      },
      {
        title: "High-end facades",
        description:
          "Strong visual fit for premium homes, offices, and hospitality spaces.",
      },
      {
        title: "Custom fabrication",
        description:
          "A flexible route for tailored dimensions and project-specific detailing.",
      },
    ],
  },
};
