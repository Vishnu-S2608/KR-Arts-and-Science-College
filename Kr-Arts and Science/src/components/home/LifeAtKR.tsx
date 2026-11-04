"use client";

import { useState } from "react";
import { 
  Bus, 
  Trees, 
  Award, 
  Cpu, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Trophy,
  Sparkles,
  CheckCircle2
} from "lucide-react";

interface Facility {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  icon: any;
}

const FACILITIES: Facility[] = [
  {
    id: 0,
    number: "01",
    title: "Air-Conditioned Computer & AI Labs",
    category: "Cutting-Edge Technology",
    description: "Dedicated computing clusters with high-speed fiber internet, dual-boot Linux/Windows workstations, and specialized AI development environments.",
    highlights: ["High-Speed Gigabit LAN", "AI & Python Development Stacks", "1:1 Student Workstation Ratio"],
    image: "/images/computer-lab.png",
    icon: Cpu,
  },
  {
    id: 1,
    number: "02",
    title: "Dedicated College Bus Fleet",
    category: "Safe Transit",
    description: "Extensive transport fleet providing safe, reliable, and subsidized daily commute for rural students across Peraiyur, T. Kallupatti, Thirumangalam, and Virudhunagar.",
    highlights: ["GPS Tracked Buses", "Free/Subsidized Concession", "Over 15+ Transit Routes"],
    image: "/images/campus-hero.png",
    icon: Bus,
  },
  {
    id: 2,
    number: "03",
    title: "10+ Acre Clean & Green Eco-Campus",
    category: "Sustainable Environment",
    description: "Pristine, quiet, and pollution-free campus with lush landscaping, solar lighting, rainwater conservation ponds, and modern architectural aesthetics.",
    highlights: ["Pollution-Free Serene Atmosphere", "100% Eco-Friendly Campus", "Modern Academic Blocks"],
    image: "/images/college-entrance.jpg",
    icon: Trees,
  },
  {
    id: 3,
    number: "04",
    title: "Central Digital Library & Research Hub",
    category: "Knowledge Center",
    description: "Over thousands of academic volumes, reference encyclopedias, national journals, competitive exam prep guides, and e-learning terminals.",
    highlights: ["Extensive Book Collection", "Digital e-Journals & UGC Resources", "Quiet Reading Lounges"],
    image: "/images/library.png",
    icon: BookOpen,
  },
  {
    id: 4,
    number: "05",
    title: "Sports Complex & Athletic Grounds",
    category: "Athletics & Physical Fitness",
    description: "Dedicated track and field facilities, cricket pitch, volleyball courts, kabaddi arena, and indoor fitness conditioning overseen by sports faculty.",
    highlights: ["Inter-Collegiate Tournament Ground", "Annual Athletic Championships", "Physical Education Department"],
    image: "/images/campus-hero.png",
    icon: Trophy,
  },
  {
    id: 5,
    number: "06",
    title: "Personalized Faculty Mentorship",
    category: "Student Holistic Care",
    description: "Dedicated faculty advisors providing one-on-one academic counseling, career tracking, parent-teacher dialogues, and holistic personality grooming.",
    highlights: ["Low Student-Faculty Ratio", "Remedial Coaching for High Scorers", "Regular Parent Counseling"],
    image: "/images/library.png",
    icon: Users,
  },
];

export default function LifeAtKR() {
  const [activeId, setActiveId] = useState<number>(0);
  const activeFacility = FACILITIES[activeId];

  return (
    <section className="py-16 md:py-24 bg-white relative" id="life">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Campus Life &bull; World-Class Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            An Inspiring Environment Crafted for Learning &amp; Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From modern air-conditioned laboratories to expansive sports fields and dedicated bus networks, every element supports your total student journey.
          </p>
        </div>

        {/* Interactive Facilities Showcase (REC Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Tab List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {FACILITIES.map((fac) => {
              const Icon = fac.icon;
              const isActive = fac.id === activeId;
              return (
                <button
                  key={fac.id}
                  type="button"
                  onClick={() => setActiveId(fac.id)}
                  className={`p-4 rounded-2xl text-left transition-all flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? "bg-sky-50 border-sky-300 shadow-md translate-x-1"
                      : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive 
                        ? "bg-sky-600 text-white shadow-sm" 
                        : "bg-slate-100 text-slate-600"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isActive ? "text-sky-950 font-extrabold" : "text-slate-800"}`}>
                        {fac.title}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {fac.category}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
                    isActive ? "bg-amber-400 text-slate-950" : "text-slate-400"
                  }`}>
                    {fac.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Facility Visual Stage */}
          <div className="lg:col-span-7">
            <div className="pure-white-card overflow-hidden border-2 border-sky-100 p-6 sm:p-8">
              {/* Image Frame */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 shadow-inner mb-6">
                <img 
                  src={activeFacility.image} 
                  alt={activeFacility.title}
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/college-entrance.jpg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-sky-800 shadow-sm border border-sky-100">
                  {activeFacility.category}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {activeFacility.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {activeFacility.description}
                  </p>
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeFacility.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-sky-50/60 p-2.5 rounded-xl border border-sky-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
