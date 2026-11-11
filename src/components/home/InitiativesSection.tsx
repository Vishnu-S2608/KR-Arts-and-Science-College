"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface ClubItem {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  image: string;
}

const CLUBS_DATA: ClubItem[] = [
  {
    id: "ncc",
    number: "01",
    title: "National Cadet Corps (NCC)",
    category: "Honor & Defense Wing",
    badge: "B & C Certificate",
    description:
      "Instilling selfless service, leadership, and military-grade discipline. Cadets undergo rigorous drill maneuvers, obstacle navigation, weapon handling, and national Thal Sainik Camp conditioning.",
    highlights: [
      "B & C Certificate National Training",
      "Annual Thal Sainik Camp Trials",
      "Republic Day Parade Camp Path",
    ],
    image: "/images/campus-hero.png",
  },
  {
    id: "leaders-club",
    number: "02",
    title: "KR Leaders Club",
    category: "Civic Governance & Leadership",
    badge: "Active Civic Forum",
    description:
      "Dynamic student platform for parliamentary debates, public policy critiques, civic advocacy, and youth governance dialogues with police officers and district administrators.",
    highlights: [
      "Model Youth Parliament & Moot Courts",
      "Rural Citizen Outreach & Literacy",
      "Direct Dialogue with Bureaucrats",
    ],
    image: "/kr_student.jpg",
  },
  {
    id: "placement-cell",
    number: "03",
    title: "Training & Placement Cell",
    category: "Corporate Careers & 100% Placement",
    badge: "100% Placements",
    description:
      "Conducting continuous aptitude sessions, corporate technical mock interviews, resume writing labs, and coordinating with 7+ top recruiting companies across Tamil Nadu.",
    highlights: [
      "Continuous Aptitude & Soft Skills Bootcamps",
      "Corporate Mock Interviews & Technical Prep",
      "70+ Offer Letters for Inaugural Batch",
    ],
    image: "/images/computer-lab.png",
  },
  {
    id: "sports-club",
    number: "04",
    title: "Sports & Athletics Club",
    category: "Championship Ground & Fitness",
    badge: "Championship Ground",
    description:
      "Managing inter-collegiate track and field meets, cricket tournaments, volleyball championships, kabaddi arena, and athletic physical conditioning overseen by sports faculty.",
    highlights: [
      "Inter-Collegiate Tournament Ground",
      "Track & Field Sprint / Relay Honors",
      "Dedicated Volleyball & Kabaddi Courts",
    ],
    image: "/images/campus-hero.png",
  },
  {
    id: "green-club",
    number: "05",
    title: "Green Club Eco Preservation",
    category: "Clean & Green Eco-Campus",
    badge: "Sustainable Campus",
    description:
      "Dedicated to 10+ acre botanical stewardship, tree planting drives, rainwater monitoring, eco-friendly plastic separation, and green environmental awareness across Peraiyur.",
    highlights: [
      "10+ Acre Clean & Green Eco-Campus",
      "Solar Campus & Clean Energy Monitoring",
      "Clean Peraiyur Environmental Outreach",
    ],
    image: "/kr_campus_2.png",
  },
  {
    id: "unnat-bharat",
    number: "06",
    title: "Unnat Bharat Abhiyan & NSS",
    category: "Rural Outreach & Social Impact",
    badge: "Civic Action",
    description:
      "Connecting higher education institutions with rural villages for socio-economic development, digital literacy, blood donation camps, and government welfare enrollment.",
    highlights: [
      "Rural Village Baseline Surveys & Camps",
      "Village Digital Literacy Initiatives",
      "Blood Donation & Health Outreach",
    ],
    image: "/kr_student.jpg",
  },
  {
    id: "literary-society",
    number: "07",
    title: "Art, Craft & Literary Society",
    category: "Creative Arts & Cultural Expression",
    badge: "Creative Arts",
    description:
      "Fostering fine arts, painting, traditional Tamil rangoli, theatre staging, poetry recitals, and campus cultural festival management celebrating heritage and creativity.",
    highlights: [
      "Annual Arts & Fine Arts Exhibits",
      "Tamil Literary Competitions & Poetry",
      "Cultural Stage & Drama Productions",
    ],
    image: "/kr_lib.webp",
  },
];

export default function InitiativesSection() {
  const [activeClubIndex, setActiveClubIndex] = useState<number>(0);
  const activeClub = CLUBS_DATA[activeClubIndex] || CLUBS_DATA[0];

  return (
    <section
      className="py-10 sm:py-12 md:py-14 bg-white relative"
      id="initiatives"
      aria-label="Student Clubs, NCC & Societies"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
              Student Leadership &bull; Active Societies &amp; NCC
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Student Clubs, NCC Cadet Wing &amp; Civic Societies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore all active co-curricular organizations fostering patriotic
            character, creative artistic expression, environmental stewardship,
            and sportsmanship without navigating away.
          </p>
        </div>

        {/* Interactive Clubs Showcase: Left Visual Stage, Right Options (Zig-zag) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (Desktop): Active Club Visual Stage */}
          <div className="lg:col-span-7 h-full flex flex-col order-2 lg:order-1">
            <div className="h-full flex flex-col justify-between bg-white border-2 border-slate-200/90 hover:border-[#C59B27] rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none p-6 sm:p-7 shadow-none relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

              {/* Image Frame with Signature Diagonal Shape */}
              <div className="relative h-[250px] sm:h-[280px] w-full rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-100 mb-5 shrink-0 shadow-none border border-slate-200">
                <img
                  src={activeClub.image}
                  alt={activeClub.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:scale-[1.02] duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/college-entrance.jpg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#0334A0] border border-[#0334A0]/20 shadow-none">
                  {activeClub.category}
                </div>
                <div className="absolute top-4 right-4 bg-[#FBF2D4] text-[#0334A0] font-bold text-xs px-3 py-1 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none border border-[#0334A0]/20 shadow-none">
                  {activeClub.badge}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-center my-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#021B4E] transition-colors">
                  {activeClub.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {activeClub.description}
                </p>
              </div>

              {/* Bullet Highlights: Diagonal-Styled Chips */}
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5 shrink-0">
                {activeClub.highlights.map((h, i) => (
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

          {/* Right Column (Desktop): 7 Club Options (Fixed Common Size, No Dynamic Stretching) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-2.5 h-full order-1 lg:order-2">
            {CLUBS_DATA.map((club, idx) => {
              const isActive = idx === activeClubIndex;

              return (
                <button
                  key={club.id}
                  type="button"
                  onMouseEnter={() => setActiveClubIndex(idx)}
                  onClick={() => setActiveClubIndex(idx)}
                  className={`group w-full min-h-[64px] sm:min-h-[68px] px-5 py-3 sm:px-6 sm:py-3.5 text-left transition-all duration-300 flex items-center justify-between cursor-pointer rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none shadow-none shrink-0 relative overflow-hidden ${
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
                      {club.title}
                    </h4>
                    <span
                      className={`text-[10px] sm:text-[11px] font-medium block mt-0.5 transition-colors duration-200 ${
                        isActive
                          ? "text-[#FBF2D4]"
                          : "text-slate-500 group-hover:text-[#FBF2D4]"
                      }`}
                    >
                      {club.category}
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none transition-colors duration-200 shadow-none shrink-0 ${
                      isActive
                        ? "bg-[#C59B27] text-[#021B4E] font-extrabold"
                        : "bg-[#021B4E]/10 text-[#021B4E] group-hover:bg-[#C59B27] group-hover:text-[#021B4E]"
                    }`}
                  >
                    {club.number}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
