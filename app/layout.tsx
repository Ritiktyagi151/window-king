import type { Metadata } from "next"; // Metadata type import karein
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import FooterMarquee from "@/components/FooterMarquee";
import CookieConsent from "@/components/CookieConsent";
import NonHomeBanner from "@/components/NonHomeBanner";

// SEO ke liye Metadata object
export const metadata: Metadata = {
  title: {
    default: "Window King | Premium Window Solutions",
    template: "%s | Window King", 
  },
  description: "WINDOW KING PRIVATE LIMITED, established in 2021 in Puri, manufactures and supplies quality uPVC glass windows with dependable service.",
  keywords: ["uPVC glass windows", "Window King", "WINDOW KING PRIVATE LIMITED", "Puri windows", "window manufacturer"],
  icons: {
    icon: "/window-king-logo.png",
    shortcut: "/window-king-logo.png",
    apple: "/window-king-logo.png",
  },
  openGraph: {
    title: "Window King",
    description: "Established in 2021, WINDOW KING PRIVATE LIMITED is known in Puri for quality uPVC glass windows and dependable service.",
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
        <main>
          <NonHomeBanner />
          {children}
        </main> {/* SEO aur structure ke liye main tag behtar hai */}
        <FooterMarquee />
        <Footer /> 
        <CookieConsent />
      </body>
    </html>
  );
}
