import Preloader from "@/components/layout/Preloader";
import KineticHero from "@/components/home/KineticHero";
import AboutSection from "@/components/home/AboutSection";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import StatsSection from "@/components/home/StatsSection";
import LifeAtKR from "@/components/home/LifeAtKR";
import ClubsMarquee from "@/components/home/ClubsMarquee";
import InitiativesSection from "@/components/home/InitiativesSection";
import GlobalSection from "@/components/home/GlobalSection";
import PlacementsSection from "@/components/home/PlacementsSection";
import AdminSection from "@/components/home/AdminSection";
import ChronicleSection from "@/components/home/ChronicleSection";
import AdmissionCTA from "@/components/home/AdmissionCTA";

export default function Home() {
  return (
    <main id="main-content">
      <Preloader />
      <KineticHero />
      <AboutSection />
      <ProgrammesSection />
      <StatsSection />
      <LifeAtKR />
      <ClubsMarquee />
      <InitiativesSection />
      <GlobalSection />
      <PlacementsSection />
      <AdminSection />
      <ChronicleSection />
      <AdmissionCTA />
    </main>
  );
}
