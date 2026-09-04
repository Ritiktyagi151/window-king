import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { getProductImage, slugifyProduct } from "@/lib/product-shared";

export type MarketingMetric = {
  label: string;
  value: string;
};

export type MarketingItem = {
  title: string;
  description: string;
};

export type MarketingPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  metrics: MarketingMetric[];
  pillars: MarketingItem[];
  highlights: MarketingItem[];
  sourceDocuments?: { title: string; fileName: string }[];
};

const pageVisuals: Record<
  string,
  {
    image: string;
    badge: string;
    accent: string;
  }
> = {
  "Quality Standards": {
    image: "/images/home-page-img/quality3.png",
    badge: "Factory Checked",
    accent: "Weather-ready systems with clean finishing.",
  },
  "Innovation Lab": {
    image: "/images/home-page-img/quality5.png",
    badge: "CNC Precision",
    accent: "Modern fabrication for custom project needs.",
  },
  "After Sales Service": {
    image: "/images/our-masterpieces/master1.png",
    badge: "Service First",
    accent: "Support from selection to handover and aftercare.",
  },
  "uPVC Window and Door Series": {
    image: "/images/home-page-img/quality.png",
    badge: "uPVC Range",
    accent: "Window and door options for practical everyday use.",
  },
  "Aluminium Window and Door Series": {
    image: "/images/our-masterpieces/masterslide4.png",
    badge: "Aluminium Range",
    accent: "Slim, strong systems for modern spaces.",
  },
};

const icons = [ShieldCheck, Zap, Wrench, Sparkles, Lightbulb, Headphones];

function getVisuals(title: string) {
  return (
    pageVisuals[title] ?? {
      image: "/images/banner/banner4.png",
      badge: "Window King",
      accent: "Premium window and door solutions built for real projects.",
    }
  );
}

export default function MarketingPage({
  content,
}: {
  content: MarketingPageContent;
}) {
  const visuals = getVisuals(content.title);
  const showProductGrid = content.title.includes("Window and Door Series");
  const categorySlug = content.title.startsWith("uPVC") ? "upvc" : "aluminium";
  const windowProducts = content.highlights.filter((item) =>
    item.title.toLowerCase().includes("window") ||
    item.title.toLowerCase().includes("ventilator") ||
    item.title.toLowerCase().includes("awning")
  );
  const doorProducts = content.highlights.filter((item) =>
    item.title.toLowerCase().includes("door")
  );

  return (
    <div className="min-h-screen bg-[#f7f7f8] pb-16 md:pb-24">
      {!showProductGrid && (
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F85A21]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#362A71] sm:text-4xl md:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F85A21] px-7 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-[#362A71]"
            >
              {content.primaryCta.label}
              <ArrowRight size={18} />
            </Link>
            {content.secondaryCta ? (
              <Link
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-[#362A71]/20 px-7 py-3 text-sm font-black uppercase text-[#362A71] transition-colors hover:border-[#F85A21] hover:text-[#F85A21]"
              >
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-2xl shadow-2xl md:min-h-[500px]">
          <Image
            src={visuals.image}
            alt={content.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
              {visuals.badge}
            </p>
            <p className="mt-2 text-xl font-black uppercase leading-tight text-[#362A71]">
              {visuals.accent}
            </p>
          </div>
        </div>
      </section>
      )}

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`grid grid-cols-2 gap-4 lg:grid-cols-4 ${
            showProductGrid ? "pt-10 md:pt-14" : ""
          }`}
        >
          {content.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-[#362A71]/10 bg-white p-5 shadow-sm"
            >
              <p className="text-3xl font-black text-[#362A71]">
                {metric.value}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F85A21]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {showProductGrid ? (
        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:mt-16">
          <ProductGrid
            title="Window Series"
            products={windowProducts}
            imageOffset={0}
            categorySlug={categorySlug}
          />
          <div className="mt-12">
            <ProductGrid
              title="Door Series"
              products={doorProducts}
              imageOffset={windowProducts.length}
              categorySlug={categorySlug}
            />
          </div>
        </section>
      ) : (
      <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 md:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl bg-[#362A71] p-6 text-white shadow-xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21] sm:tracking-[0.35em]">
            Core Strengths
          </p>
          <div className="mt-8 space-y-5">
            {content.pillars.map((pillar, index) => {
              const Icon = icons[index] ?? CheckCircle2;

              return (
              <div
                key={pillar.title}
                className="grid grid-cols-[44px_1fr] gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#F85A21]">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-xl font-black uppercase tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {pillar.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-[#F85A21]/10 bg-white p-6 shadow-sm md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#362A71] sm:tracking-[0.35em]">
            {showProductGrid ? "Product Grid" : "What You Can Expect"}
          </p>
          <div
            className={`mt-8 grid gap-5 ${
              showProductGrid ? "sm:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"
            }`}
          >
            {content.highlights.map((highlight, index) => {
              const Icon = icons[index + 2] ?? CheckCircle2;
              const productImage = getProductImage(index);

              return (
              <div
                key={highlight.title}
                className="overflow-hidden rounded-xl border border-[#362A71]/8 bg-[#f7f7f8] transition-colors hover:bg-[#fff7f3]"
              >
                {showProductGrid ? (
                  <div className="relative h-48 bg-white">
                    <Image
                      src={productImage}
                      alt={highlight.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F85A21] text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-black uppercase text-[#362A71]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
      )}
    </div>
  );
}

function ProductGrid({
  title,
  products,
  imageOffset,
  categorySlug,
}: {
  title: string;
  products: MarketingItem[];
  imageOffset: number;
  categorySlug: string;
}) {
  if (products.length === 0) return null;

  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
            Product Grid
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase text-[#362A71]">
            {title}
          </h2>
        </div>
        <p className="hidden text-sm font-bold uppercase tracking-wider text-[#362A71]/50 sm:block">
          {products.length} Products
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const Icon = icons[index + 2] ?? CheckCircle2;
          const productImage = getProductImage(index + imageOffset);

          return (
            <Link
              key={product.title}
              href={`/products/${categorySlug}/${slugifyProduct(product.title)}`}
              className="overflow-hidden rounded-xl border border-[#362A71]/8 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 bg-[#f7f7f8]">
                <Image
                  src={productImage}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F85A21] text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-black uppercase text-[#362A71]">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase text-[#F85A21]">
                  View Details
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
