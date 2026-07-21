import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPage from "@/components/MarketingPage";
import { productPages } from "@/lib/page-content";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const content = productPages[category];

  if (!content) {
    return {};
  }

  return {
    title: content.title,
    description: content.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(productPages).map((category) => ({ category }));
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const content = productPages[category];

  if (!content) {
    notFound();
  }

  return <MarketingPage content={content} />;
}
