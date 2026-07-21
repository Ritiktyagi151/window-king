import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPage from "@/components/MarketingPage";
import { standalonePages } from "@/lib/page-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = standalonePages[slug];

  if (!content) {
    return {};
  }

  return {
    title: content.title,
    description: content.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(standalonePages).map((slug) => ({ slug }));
}

export default async function StandalonePage({ params }: PageProps) {
  const { slug } = await params;
  const content = standalonePages[slug];

  if (!content) {
    notFound();
  }

  return <MarketingPage content={content} />;
}
