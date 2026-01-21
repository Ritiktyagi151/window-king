import type { Metadata } from "next"; // Metadata type import karein
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

// SEO ke liye Metadata object
export const metadata: Metadata = {
  title: {
    default: "Window King | Premium Window Solutions",
    template: "%s | Window King", 
  },
  description: "Window King provides high-quality window installation, repair, and premium glass solutions for modern homes.",
  keywords: ["window installation", "window repair", "glass solutions", "Window King"],
  openGraph: {
    title: "Window King",
    description: "Premium Window Solutions for Modern Homes",
    url: "https://yourwebsite.com", // Apni actual domain yahan daalein
    siteName: "Window King",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white antialiased"> {/* antialiased se fonts clean dikhte hain */}
        <Navbar /> 
        <main>{children}</main> {/* SEO aur structure ke liye main tag behtar hai */}
        <Footer /> 
      </body>
    </html>
  );
}