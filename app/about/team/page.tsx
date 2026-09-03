import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import RawDocumentContent from "@/components/RawDocumentContent";

export default function AboutTeamPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsSection />
      <TeamSection />
      <RawDocumentContent
        title="Team Source Content"
        documents={[
          {
            title: "Window King About Us",
            fileName: "window king About us.txt",
          },
          {
            title: "Why Window King",
            fileName: "Why Window King .txt",
          },
        ]}
      />
    </main>
  );
}
