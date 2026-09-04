export type ProjectCategory = {
  slug: string;
  title: string;
  navTitle: string;
  description: string;
  image: string;
  images: string[];
  stats: string[];
};

const projectImages = [
  "/images/our-masterpieces/masterslide2.png",
  "/images/our-masterpieces/masterslide4.png",
  "/images/our-masterpieces/masterslider3.png",
  "/images/our-masterpieces/master1.png",
  "/images/our-masterpieces/master2.png",
  "/images/our-masterpieces/master3.png",
  "/images/our-masterpieces/masterpiece4.png",
];

export const projectCategories: ProjectCategory[] = [
  {
    slug: "residential",
    title: "Residential Projects",
    navTitle: "Residential Projects",
    description:
      "Premium window and door installations for villas, apartments, balconies, and modern homes.",
    image: "/images/our-masterpieces/masterslide2.png",
    images: projectImages.slice(0, 6),
    stats: ["Villas", "Apartments", "Balcony Systems"],
  },
  {
    slug: "commercial",
    title: "Commercial Projects",
    navTitle: "Commercial Projects",
    description:
      "Clean aluminium and uPVC solutions for offices, showrooms, hotels, and business spaces.",
    image: "/images/our-masterpieces/masterslide4.png",
    images: [
      projectImages[1],
      projectImages[2],
      projectImages[3],
      projectImages[4],
      projectImages[5],
      projectImages[6],
    ],
    stats: ["Offices", "Showrooms", "Hotel Spaces"],
  },
  {
    slug: "gallery",
    title: "Project Gallery",
    navTitle: "Project Gallery",
    description:
      "A visual collection of completed Window King work across styles, spaces, and finishes.",
    image: "/images/our-masterpieces/masterslider3.png",
    images: [
      projectImages[2],
      projectImages[3],
      projectImages[4],
      projectImages[5],
      projectImages[6],
      projectImages[0],
    ],
    stats: ["Finishes", "Interiors", "Exteriors"],
  },
  {
    slug: "completed",
    title: "Completed Projects",
    navTitle: "Completed Projects",
    description:
      "A closer look at finished installations and real spaces transformed by Window King.",
    image: "/images/our-masterpieces/masterpiece4.png",
    images: [
      projectImages[6],
      projectImages[0],
      projectImages[1],
      projectImages[2],
      projectImages[3],
      projectImages[4],
    ],
    stats: ["Installed", "Tested", "Delivered"],
  },
];

export function getProjectCategory(slug: string) {
  return projectCategories.find((category) => category.slug === slug);
}
