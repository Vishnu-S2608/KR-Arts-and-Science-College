"use client";

import React, { useState } from "react";
import Preloader from "@/components/Preloader/Preloader";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Academics from "@/components/Academics/Academics";
import Departments, { DepartmentItem } from "@/components/Departments/Departments";
import CampusLife from "@/components/CampusLife/CampusLife";
import Achievements from "@/components/Achievements/Achievements";
import Facilities from "@/components/Facilities/Facilities";
import Events, { EventItem } from "@/components/Events/Events";
import Testimonials from "@/components/Testimonials/Testimonials";
import AdmissionsCTA from "@/components/AdmissionsCTA/AdmissionsCTA";
import Footer from "@/components/Footer/Footer";
import { ApplyModal, DepartmentModal, EventModal } from "@/components/Modals/Modals";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDept, setSelectedDept] = useState<DepartmentItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleOpenApply = (courseName: string = "") => {
    setSelectedCourse(courseName);
    setApplyModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#26384A] relative">
      {/* Signature K.R. Identity Orbit Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Main Production Website (Rendered & Prepared) */}
      <div className={`transition-opacity duration-700 ${loadingComplete ? "opacity-100" : "opacity-0"}`}>
        
        {/* Navigation Bar */}
        <Navbar onOpenApplyModal={() => handleOpenApply()} />

        {/* Hero Section */}
        <Hero onOpenApplyModal={() => handleOpenApply()} />

        {/* Institutional About Overview */}
        <About />

        {/* Why Choose K.R. College */}
        <WhyChoose />

        {/* Academics & Programs */}
        <Academics
          onSelectProgram={(program) => handleOpenApply(program.name)}
        />

        {/* Academic Departments */}
        <Departments
          onSelectDept={(dept) => setSelectedDept(dept)}
        />

        {/* Campus Life & Culture */}
        <CampusLife />

        {/* Achievements & Statistics */}
        <Achievements />

        {/* Campus Infrastructure Facilities */}
        <Facilities />

        {/* Upcoming Events & News */}
        <Events
          onSelectEvent={(evt) => setSelectedEvent(evt)}
        />

        {/* Student & Alumni Testimonials */}
        <Testimonials />

        {/* Admissions Call to Action */}
        <AdmissionsCTA onOpenApplyModal={() => handleOpenApply()} />

        {/* Institutional Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ApplyModal
          isOpen={applyModalOpen}
          onClose={() => setApplyModalOpen(false)}
          selectedCourseName={selectedCourse}
        />

        <DepartmentModal
          dept={selectedDept}
          onClose={() => setSelectedDept(null)}
          onOpenApply={() => handleOpenApply(selectedDept?.name || "")}
        />

        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />

      </div>
    </main>
  );
}
