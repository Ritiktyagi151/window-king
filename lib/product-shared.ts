export const productImages = [
  "/images/window.png",
  "/images/home-page-img/quality.png",
  "/images/home-page-img/quality3.png",
  "/images/home-page-img/quality4.png",
  "/images/home-page-img/quality5.png",
  "/images/our-masterpieces/master1.png",
  "/images/our-masterpieces/master2.png",
  "/images/our-masterpieces/master3.png",
  "/images/our-masterpieces/masterpiece4.png",
  "/images/our-masterpieces/masterslide2.png",
  "/images/our-masterpieces/masterslide4.png",
  "/images/our-masterpieces/masterslider3.png",
  "/images/banner/banner2.png",
  "/images/banner/banner3.png",
  "/images/banner/banner4.png",
];

export function slugifyProduct(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getProductImage(index: number) {
  return productImages[index % productImages.length];
}
