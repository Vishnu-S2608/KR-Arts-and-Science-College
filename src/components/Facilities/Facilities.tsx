"use client";

import React from "react";
import { BookOpen, Monitor, Microchip, Bus, Utensils, Award, Sparkles } from "lucide-react";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";
import ScrollImageMotion from "../Motion/ScrollImageMotion";

export default function Facilities() {
  const facilities = [
    {
      title: "Central Digital Library",
      desc: "Vast collection of over 30,000 reference books, e-journals, IEEE subscriptions, and quiet study zones.",
      icon: BookOpen,
      image: "/library.png",
    },
    {
      title: "Advanced Computer Centers",
      desc: "3 modern air-conditioned labs equipped with 180+ high-end i7 systems, high-speed fiber internet, and server software.",
      icon: Monitor,
      image: "/computer-lab.png",
    },
    {
      title: "Biotech & Science Labs",
      desc: "Research-grade laboratories for tissue culture, microbiology, molecular biology, and chemistry experiments.",
      icon: Microchip,
      image: "/campus-hero.png",
    },
    {
      title: "Transportation Fleet",
      desc: "Fleet of 25+ modern college buses connecting Kovilpatti, Thoothukudi, Tirunelveli, Sattur, and surrounding rural routes.",
      icon: Bus,
      image: "/library.png",
    },
    {
      title: "Hygienic Cafeteria",
      desc: "Clean, spacious dining hall providing nutritious, wholesome South Indian meals, snacks, and fresh beverages.",
      icon: Utensils,
      image: "/campus-hero.png",
    },
    {
      title: "Indoor & Outdoor Sports Complex",
      desc: "Spacious athletic track, cricket ground, volleyball courts, badminton hall, and fitness gymnasium.",
      icon: Award,
      image: "/computer-lab.png",
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-[#F0F4F8] text-[#234052] relative border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#38A9E8]" />
            <span>CAMPUS INFRASTRUCTURE</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-4xl font-extrabold text-[#234052] tracking-tight">
            World-Class Learning Facilities
          </ScrollTextMotion>

          <p className="mt-4 text-base text-[#5A7080] font-medium">
            Designed to foster intellectual exploration, practical skills, physical fitness, and student comfort.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => {
            const IconComponent = fac.icon;
            return (
              <div
                key={fac.title}
                className="bg-white rounded-2xl overflow-hidden border border-[#D8E3EC] hover:border-[#38A9E8] hover:shadow-md transition-all duration-250 group flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-white border-b border-[#D8E3EC]">
                  <ScrollImageMotion
                    src={fac.image}
                    alt={fac.title}
                    minScale={1.00}
                    maxScale={1.05}
                    className="w-full h-full"
                  />
                  
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white border border-[#D8E3EC] flex items-center justify-center text-[#38A9E8] shadow-sm z-10">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#234052] mb-2 group-hover:text-[#38A9E8] transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-[#5A7080] leading-relaxed font-medium">
                    {fac.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollSection>
    </section>
  );
}

