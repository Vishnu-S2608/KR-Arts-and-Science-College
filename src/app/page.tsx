import Preloader from "@/components/layout/Preloader";
import KineticHero from "@/components/home/KineticHero";
import AboutSection from "@/components/home/AboutSection";
import CampusZoomSection from "@/components/home/CampusZoomSection";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import StatsSection from "@/components/home/StatsSection";
import RecognitionsSection from "@/components/home/RecognitionsSection";

import ClubsMarquee from "@/components/home/ClubsMarquee";
import InitiativesSection from "@/components/home/InitiativesSection";

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

      <CampusZoomSection />

      <StatsSection />

      <RecognitionsSection />
      <ProgrammesSection />
      <ClubsMarquee />
      <InitiativesSection />

      <PlacementsSection />
      <AdminSection />
      <ChronicleSection />
      <AdmissionCTA />
    </main>
  );
}
