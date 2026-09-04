import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  Layers,
  Ruler,
  ShieldCheck,
  Wrench,
  Wind,
} from "lucide-react";
import type { MarketingItem, MarketingPageContent } from "@/components/MarketingPage";
import { getProductImage, slugifyProduct } from "@/lib/product-shared";

export default function ProductDetailPage({
  category,
  categoryContent,
  product,
  productImage,
}: {
  category: string;
  categoryContent: MarketingPageContent;
  product: MarketingItem;
  productImage: string;
}) {
  const material = category === "upvc" ? "uPVC" : "Aluminium";
  const title = product.title.toLowerCase();
  const isDoor = title.includes("door");
  const isSliding = title.includes("sliding");
  const isFixed = title.includes("fixed");
  const isCasement = title.includes("casement");
  const imageSeed = slugifyProduct(product.title).length;
  const typeLabel = isDoor ? "Door System" : "Window System";
  const uses = getProductUses({ isDoor, isSliding, isFixed, isCasement });
  const diagramItems = getDiagramItems(material, typeLabel);
  const galleryImages = [
    productImage,
    getProductImage(imageSeed + 1),
    getProductImage(imageSeed + 2),
    getProductImage(imageSeed + 3),
  ];

  return (
    <main className="bg-[#f7f7f8] pb-16 md:pb-24">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Link
            href={`/products/${category}`}
            className="inline-flex items-center gap-2 text-sm font-black uppercase text-[#F85A21]"
          >
            <ArrowLeft size={18} />
            Back To {material} Products
          </Link>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-[#F85A21]">
            {material} {typeLabel}
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-[#362A71] sm:text-5xl md:text-6xl">
            {product.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            {product.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Custom size support",
              "Premium finish options",
              "Reliable installation",
              "Built for daily performance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-bold text-[#362A71] shadow-sm"
              >
                <CheckCircle2 size={18} className="text-[#F85A21]" />
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F85A21] px-7 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-[#362A71]"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-2xl bg-white shadow-2xl md:min-h-[560px]">
          <Image
            src={productImage}
            alt={product.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/90 p-5 shadow-xl backdrop-blur-md">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
              {categoryContent.title}
            </p>
            <p className="mt-2 text-xl font-black uppercase text-[#362A71]">
              {typeLabel}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
            Product Description
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase text-[#362A71]">
            About This {typeLabel}
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-600">
            {product.description} This {material} solution is planned for clean
            appearance, practical operation, and dependable fitting on site.
            Window King can customise sizes, glass options, hardware, and finish
            details as per project requirement.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              `${material} profile system`,
              "Custom measurement support",
              "Glass and hardware options",
              "Professional installation guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[#f7f7f8] p-4 text-sm font-bold text-[#362A71]"
              >
                <CheckCircle2 size={18} className="text-[#F85A21]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#362A71] p-6 text-white shadow-xl md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
            Common Uses
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {uses.map((use) => {
              const Icon = use.icon;

              return (
                <div
                  key={use.title}
                  className="rounded-xl border border-white/10 bg-white/10 p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F85A21] text-white">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-lg font-black uppercase">{use.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    {use.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:mt-16">
        <div className="mb-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
            System Diagram
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase text-[#362A71]">
            How The System Works
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {diagramItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative h-52 bg-[#f7f7f8]">
                  <Image
                    src={getProductImage(imageSeed + index + 4)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#F85A21] shadow-lg">
                    <Icon size={21} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black uppercase text-[#362A71]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:mt-16">
        <div className="mb-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
            Product Images
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase text-[#362A71]">
            Visual Reference
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-56 overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <Image
                src={image}
                alt={`${product.title} reference ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function getProductUses({
  isDoor,
  isSliding,
  isFixed,
  isCasement,
}: {
  isDoor: boolean;
  isSliding: boolean;
  isFixed: boolean;
  isCasement: boolean;
}) {
  if (isDoor) {
    return [
      {
        title: "Balcony Access",
        description:
          "Useful for balcony, patio, terrace, and wide room openings.",
        icon: Home,
      },
      {
        title: "Commercial Entry",
        description:
          "Suitable for office, showroom, hotel, and customer-facing areas.",
        icon: Building2,
      },
      {
        title: "Smooth Movement",
        description: isSliding
          ? "Sliding movement saves space while keeping wider openings usable."
          : "Hinged or folding movement supports regular daily access.",
        icon: ArrowRight,
      },
      {
        title: "Secure Closing",
        description:
          "Hardware and fitting details support reliable closing and long-term use.",
        icon: ShieldCheck,
      },
    ];
  }

  return [
    {
      title: "Living Spaces",
      description:
        "Ideal for bedrooms, living rooms, kitchens, and ventilation-focused areas.",
      icon: Home,
    },
    {
      title: isFixed ? "Daylight Panels" : "Ventilation",
      description: isFixed
        ? "Fixed panels bring daylight and views where opening is not required."
        : "Openable windows support airflow, comfort, and day-to-day usability.",
      icon: Wind,
    },
    {
      title: isCasement ? "Wide Opening" : "Space Planning",
      description: isCasement
        ? "Casement operation supports stronger ventilation and easier access."
        : "Works well where compact layout and clean sightlines matter.",
      icon: Ruler,
    },
    {
      title: "Noise & Dust Control",
      description:
        "Better sealing can help reduce outside noise, dust, and weather impact.",
      icon: ShieldCheck,
    },
  ];
}

function getDiagramItems(material: string, typeLabel: string) {
  return [
    {
      title: `${material} Frame`,
      description:
        "The outer frame is measured and fixed into the building opening to create a stable base for the system.",
      icon: Ruler,
    },
    {
      title: "Glass / Panel Area",
      description:
        "Glass selection, panel size, and opening style are chosen according to light, safety, acoustic, and thermal needs.",
      icon: Layers,
    },
    {
      title: `${typeLabel} Hardware`,
      description:
        "Rollers, hinges, locks, handles, sealing, and drainage details support smooth operation and dependable performance.",
      icon: Wrench,
    },
  ];
}
