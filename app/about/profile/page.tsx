import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ProfileSection from "../components/ProfileSection";
import RawDocumentContent from "@/components/RawDocumentContent";

export default function AboutProfilePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsSection />
      <ProfileSection />
      <RawDocumentContent
        title="Profile Source Content"
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
