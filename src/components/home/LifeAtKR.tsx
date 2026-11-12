"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface Facility {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
}

const FACILITIES: Facility[] = [
  {
    id: 0,
    number: "01",
    title: "Air-Conditioned Computer & AI Labs",
    category: "Cutting-Edge Technology",
    description:
      "Dedicated computing clusters with high-speed fiber internet, dual-boot Linux/Windows workstations, and specialized AI development environments.",
    highlights: [
      "High-Speed Gigabit LAN",
      "AI & Python Development Stacks",
      "1:1 Student Workstation Ratio",
    ],
    image: "/images/campus/computer-lab.png",
  },
  {
    id: 1,
    number: "02",
    title: "Dedicated College Bus Fleet",
    category: "Safe Transit",
    description:
      "Extensive transport fleet providing safe, reliable, and subsidized daily commute for rural students across Peraiyur, T. Kallupatti, Thirumangalam, and Virudhunagar.",
    highlights: [
      "GPS Tracked Buses",
      "Free/Subsidized Concession",
      "Over 15+ Transit Routes",
    ],
    image: "/images/campus/campus-hero.png",
  },
  {
    id: 2,
    number: "03",
    title: "10+ Acre Clean & Green Eco-Campus",
    category: "Sustainable Environment",
    description:
      "Pristine, quiet, and pollution-free campus with lush landscaping, solar lighting, rainwater conservation ponds, and modern architectural aesthetics.",
    highlights: [
      "Pollution-Free Serene Atmosphere",
      "100% Eco-Friendly Campus",
      "Modern Academic Blocks",
    ],
    image: "/images/campus/kr_campus_2.png",
  },
  {
    id: 3,
    number: "04",
    title: "Central Digital Library & Research Hub",
    category: "Knowledge Center",
    description:
      "Over thousands of academic volumes, reference encyclopedias, national journals, competitive exam prep guides, and e-learning terminals.",
    highlights: [
      "Extensive Book Collection",
      "Digital e-Journals & UGC Resources",
      "Quiet Reading Lounges",
    ],
    image: "/images/campus/kr_lib.webp",
  },
  {
    id: 4,
    number: "05",
    title: "Sports Complex & Athletic Grounds",
    category: "Athletics & Physical Fitness",
    description:
      "Dedicated track and field facilities, cricket pitch, volleyball courts, kabaddi arena, and indoor fitness conditioning overseen by sports faculty.",
    highlights: [
      "Inter-Collegiate Tournament Ground",
      "Annual Athletic Championships",
      "Physical Education Department",
    ],
    image: "/images/campus/campus-hero.png",
  },
  {
    id: 5,
    number: "06",
    title: "Personalized Faculty Mentorship",
    category: "Student Holistic Care",
    description:
      "Dedicated faculty advisors providing one-on-one academic counseling, career tracking, parent-teacher dialogues, and holistic personality grooming.",
    highlights: [
      "Low Student-Faculty Ratio",
      "Remedial Coaching for High Scorers",
      "Regular Parent Counseling",
    ],
    image: "/images/campus/kr_student.jpg",
  },
];

export default function LifeAtKR() {
  const [activeId, setActiveId] = useState<number>(0);
  const activeFacility = FACILITIES[activeId];

  return (
    <section
      className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-white relative"
      id="life"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
              Campus Life &bull; World-Class Facilities
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            An Inspiring Environment Crafted for Learning &amp; Growth
          </h2>
        </div>

        {/* Interactive Facilities Showcase: Equal Height for Left Options and Right Visual Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 6 Option Buttons (Plain & Simple, Navbar Full Blue, Bold Gold Outline on Hover/Active) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 h-full">
            {FACILITIES.map((fac) => {
              const isActive = fac.id === activeId;

              return (
                <button
                  key={fac.id}
                  type="button"
                  onMouseEnter={() => setActiveId(fac.id)}
                  onClick={() => setActiveId(fac.id)}
                  className={`group flex-1 px-5 py-3.5 sm:px-6 sm:py-4 text-left transition-all duration-300 flex items-center justify-between cursor-pointer rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none shadow-none relative overflow-hidden ${
                    isActive
                      ? "bg-[#021B4E] border-2 border-[#C59B27] translate-x-1.5"
                      : "bg-[#021B4E]/8 border border-[#021B4E]/15 hover:bg-[#021B4E] hover:border-2 hover:border-[#C59B27] hover:translate-x-1"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />
                  <div className="pr-4">
                    <h4
                      className={`text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-white font-extrabold"
                          : "text-[#021B4E] group-hover:text-white"
                      }`}
                    >
                      {fac.title}
                    </h4>
                    <span
                      className={`text-[10px] sm:text-[11px] font-medium block mt-0.5 transition-colors duration-200 ${
                        isActive
                          ? "text-[#FBF2D4]"
                          : "text-slate-500 group-hover:text-[#FBF2D4]"
                      }`}
                    >
                      {fac.category}
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none transition-colors duration-200 shadow-none shrink-0 ${
                      isActive
                        ? "bg-[#C59B27] text-[#021B4E] font-extrabold"
                        : "bg-[#021B4E]/10 text-[#021B4E] group-hover:bg-[#C59B27] group-hover:text-[#021B4E]"
                    }`}
                  >
                    {fac.number}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Facility Visual Stage (Equal Height with Left Column) */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="h-full flex flex-col justify-between bg-white border-2 border-slate-200/90 hover:border-[#C59B27] rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none p-6 sm:p-7 shadow-none relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

              {/* Image Frame with Diagonal Shape */}
              <div className="relative h-[250px] sm:h-[280px] w-full rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-100 mb-5 shrink-0 shadow-none border border-slate-200">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:scale-[1.02] duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/campus/college-entrance.jpg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#0334A0] border border-[#0334A0]/20 shadow-none">
                  {activeFacility.category}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-center my-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#021B4E] transition-colors">
                  {activeFacility.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {activeFacility.description}
                </p>
              </div>

              {/* Bullet Highlights: Diagonal-Styled Chips */}
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5 shrink-0">
                {activeFacility.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-[#0334A0]/5 hover:bg-[#FBF2D4] p-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-[#0334A0]/10 hover:border-[#C59B27] transition-colors shadow-none"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0334A0] shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
