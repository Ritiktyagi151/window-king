// app/about/layout.tsx (SEO Optimized)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Window King | India's Leading uPVC & Aluminium Expert",
  description: "Learn about Window King's journey since 2010. We specialize in German-tech uPVC windows, luxury aluminium series, and noise-proof solutions.",
  alternates: { canonical: "https://windowking.in/about" },
  openGraph: {
    title: "About Window King | Engineering Excellence",
    description: "Discover how we manufacture India's most durable windows.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}