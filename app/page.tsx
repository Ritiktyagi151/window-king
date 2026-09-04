import HeroBanner from "@/components/HeroBanner";
import RangeSection from "@/components/RangeSection";
import TrustSection from "@/components/TrustSection";
import InnovationSection from "@/components/InnovationSection";
import ServiceHub from "@/components/ServiceHub";
import TestimonialSection from "@/components/TestimonialSection";
import ProjectsSection from "@/components/ProjectsSection";
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
      {/* <LocateUs/> */}
      <ServiceHub/>
      <TestimonialSection/>
      <ProjectsSection/>
      <GallerySection/>
      <TrustSections/>
      <BlogSection/>
      <BrandStory/>
    </main>
  );
}
