"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMarquee from "@/components/FooterMarquee";
import CookieConsent from "@/components/CookieConsent";
import NonHomeBanner from "@/components/NonHomeBanner";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isVirtualTourPage = pathname === "/virtual-tour";
  const showNonHomeBanner = !pathname.startsWith("/about");

  if (isVirtualTourPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>
        {showNonHomeBanner && <NonHomeBanner />}
        {children}
      </main>
      <FooterMarquee />
      <Footer />
      <CookieConsent />
    </>
  );
}
