import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import InfrastructureSection from "../components/InfrastructureSection";
import RawDocumentContent from "@/components/RawDocumentContent";

export default function AboutInfrastructurePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsSection />
      <InfrastructureSection />
      <RawDocumentContent
        title="Infrastructure Source Content"
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
