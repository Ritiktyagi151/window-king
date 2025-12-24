import HeroBanner from "@/components/HeroBanner";
import RangeSection from "@/components/RangeSection";
import TrustSection from "@/components/TrustSection";
import InnovationSection from "@/components/InnovationSection";
import LocateUs from "@/components/LocateUs";
import ServiceHub from "@/components/ServiceHub";
import TestimonialSection from "@/components/TestimonialSection";
import Showcase from "@/components/Showcase";
import GallerySection from "@/components/GallerySection";
import TrustSections from "@/components/TrustSections";
import BlogSection from "@/components/BlogSection";
import BrandStory from "@/components/BrandStory";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* Har section apni natural height lega */}
      <HeroBanner />
      
      <RangeSection />
      
      <TrustSection />
      
      <InnovationSection />
      <LocateUs/>
      <ServiceHub/>
      <TestimonialSection/>
      <Showcase/>
      <GallerySection/>
      <TrustSections/>
      <BlogSection/>
      <BrandStory/>
    </main>
  );
}