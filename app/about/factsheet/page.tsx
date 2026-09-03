import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FactsheetSection from "../components/FactsheetSection";
import RawDocumentContent from "@/components/RawDocumentContent";

export default function AboutFactsheetPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsSection />
      <FactsheetSection />
      <RawDocumentContent
        title="Factsheet Source Content"
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
