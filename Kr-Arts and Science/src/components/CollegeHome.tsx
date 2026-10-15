"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Departments from "./Departments";
import CampusTour from "./CampusTour";
import AdmissionForm from "./AdmissionForm";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

export default function CollegeHome() {
  const [selectedProgramme, setSelectedProgramme] = useState<string>("");

  return (
    <main>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Departments onSelectDepartmentForApply={(prog) => setSelectedProgramme(prog)} />
      <CampusTour />
      <AdmissionForm preselectedProgramme={selectedProgramme} />
      <Footer />
    </main>
  );
}
