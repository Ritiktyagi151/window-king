import ProfileSection from "./components/ProfileSection";
import StatsSection from "./components/StatsSection";
import FactsheetSection from "./components/FactsheetSection";
import InfrastructureSection from "./components/InfrastructureSection";
import TeamSection from "./components/TeamSection";
import MentorSection from "./components/MentorSection";

export default function About() {
  return (
    <main className="bg-white">
      <ProfileSection />
      <StatsSection />
      <FactsheetSection />
      <InfrastructureSection />
      <TeamSection />
      <MentorSection />
    </main>
  );
}
