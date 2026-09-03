import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import MentorSection from "../components/MentorSection";
import RawDocumentContent from "@/components/RawDocumentContent";

export default function AboutMentorPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsSection />
      <MentorSection />
      <RawDocumentContent
        title="Mentor Source Content"
        documents={[
          {
            title: "Window King About Us",
            fileName: "window king About us.txt",
          },
        ]}
      />
    </main>
  );
}
