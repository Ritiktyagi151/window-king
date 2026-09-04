import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/ProductDetailPage";
import { productPages } from "@/lib/page-content";
import { getProductImage, slugifyProduct } from "@/lib/product-shared";

type PageProps = {
  params: Promise<{ category: string; product: string }>;
};

function getProductInfo(category: string, productSlug: string) {
  const categoryContent = productPages[category];

  if (!categoryContent) return null;

  const windowProducts = categoryContent.highlights.filter((item) => {
    const title = item.title.toLowerCase();
    return (
      title.includes("window") ||
      title.includes("ventilator") ||
      title.includes("awning")
    );
  });
  const doorProducts = categoryContent.highlights.filter((item) =>
    item.title.toLowerCase().includes("door")
  );
  const productGroups = [...windowProducts, ...doorProducts];
  const productIndex = productGroups.findIndex(
    (item) => slugifyProduct(item.title) === productSlug
  );

  if (productIndex === -1) return null;

  return {
    categoryContent,
    product: productGroups[productIndex],
    productImage: getProductImage(productIndex),
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, product } = await params;
  const productInfo = getProductInfo(category, product);

  if (!productInfo) {
    return {};
  }

  return {
    title: productInfo.product.title,
    description: productInfo.product.description,
  };
}

export function generateStaticParams() {
  return Object.entries(productPages).flatMap(([category, content]) =>
    content.highlights.map((product) => ({
      category,
      product: slugifyProduct(product.title),
    }))
  );
}

export default async function Page({ params }: PageProps) {
  const { category, product } = await params;
  const productInfo = getProductInfo(category, product);

  if (!productInfo) {
    notFound();
  }

  return (
    <ProductDetailPage
      category={category}
      categoryContent={productInfo.categoryContent}
      product={productInfo.product}
      productImage={productInfo.productImage}
    />
  );
}
