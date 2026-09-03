// app/about/layout.tsx (SEO Optimized)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Window King | uPVC Glass Window Manufacturer in Puri",
  description: "Learn about WINDOW KING PRIVATE LIMITED, established in 2021 and known in Puri for quality uPVC glass windows and dependable service.",
  alternates: { canonical: "https://windowking.in/about" },
  openGraph: {
    title: "About Window King | Established in 2021",
    description: "Discover WINDOW KING PRIVATE LIMITED, a trusted manufacturer and supplier of uPVC glass windows from Puri.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
