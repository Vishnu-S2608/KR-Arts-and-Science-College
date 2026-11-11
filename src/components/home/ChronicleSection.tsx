"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface FestivalMilestone {
  id: string;
  year: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

const CHRONICLES_DATA: FestivalMilestone[] = [
  {
    id: "spark-2025",
    year: "2025-26",
    category: "Annual Innovation Symposia",
    title: "SPARK Innovation Festival Grand Finale",
    description:
      "Our flagship annual inter-collegiate technology & business model forum. Undergraduates present working prototypes in AI algorithms, sustainable agriculture, and solar clean-tech to panels of external corporate evaluators.",
    highlights: [
      "Technical Working Models & Hackathons",
      "₹1,00,000+ Cash Awards & Grants",
      "Corporate Talent Scout Evaluations",
    ],
    image: "/images/computer-lab.png",
  },
  {
    id: "thal-sainik",
    year: "2025-26",
    category: "National NCC Honors",
    title: "Cadet Selection for Prestigious Thal Sainik Camp",
    description:
      "Following gruelling multi-stage state conditioning trials, KR College NCC cadets achieved selection to represent the Directorate in national competition drills, obstacle courses, and marksmanship.",
    highlights: [
      "State Conditioning Trials Victory",
      "Directorate National Representation",
      "Elite Obstacle & Drill Honors",
    ],
    image: "/images/campus-hero.png",
  },
  {
    id: "shinawatra-mou",
    year: "2025-26",
    category: "Global Academic Alliance",
    title: "Shinawatra University, Thailand Bilateral MoU",
    description:
      "Signed in Pathum Thani, Thailand during ICIRI 2026. Establishes cross-border research collaboration, international faculty exchanges, and dual academic treaties.",
    highlights: [
      "Cross-Border Research Alliance",
      "International Faculty Exchange",
      "Dual Academic Treaties in Thailand",
    ],
    image: "/kr_lib.webp",
  },
  {
    id: "placement-drive",
    year: "2025-26",
    category: "Placement Milestone",
    title: "Inaugural Batch 100% Placement Achievement",
    description:
      "All 18 graduating applicants received verifiable offer letters totaling 70+ placement confirmations across 7 leading corporate firms in tech, banking, and aviation.",
    highlights: [
      "100% Placement Verification",
      "70+ Corporate Offer Letters",
      "7+ Leading Corporate Recruiters",
    ],
    image: "/images/computer-lab.png",
  },
  {
    id: "srivilliputhur-meet",
    year: "2024-25",
    category: "Athletics Championship",
    title: "Srivilliputhur Athletic Meet Overall Championship",
    description:
      "College athletes dominated track and field events, bagging multiple gold and silver trophies across 100m, 400m relay, and long jump divisions at the regional meet.",
    highlights: [
      "Overall Championship Trophy",
      "Gold in 100m & 400m Relay Meets",
      "Inter-Collegiate Sports Supremacy",
    ],
    image: "/images/campus-hero.png",
  },
  {
    id: "airport-visit",
    year: "2024-25",
    category: "Aviation Management",
    title: "Madurai Airport Operational Training Immersion",
    description:
      "BBA Aviation scholars received direct field insight into passenger ticketing terminals, cargo air logistics, and security systems from airport officials.",
    highlights: [
      "Live Runway & Terminal Protocols",
      "Air Cargo Logistics Direct Immersion",
      "Aviation Industry Certification",
    ],
    image: "/images/campus-hero.png",
  },
  {
    id: "decathlon-visit",
    year: "2024-25",
    category: "Commerce & AI Industrial Tour",
    title: "Decathlon Global Supply Chain Immersion",
    description:
      "Interactive industrial immersion analyzing inventory software architecture, barcode logistics integration, warehouse supply chain automation, and corporate management flow.",
    highlights: [
      "Inventory Software Architecture",
      "Barcode & Supply Chain Logistics",
      "Direct Corporate Warehouse Access",
    ],
    image: "/images/computer-lab.png",
  },
  {
    id: "trust-foundation",
    year: "2022-23",
    category: "Institutional Foundation",
    title: "Establishment & University Affiliation Clearance",
    description:
      "KR Educational and Charitable Trust laid the foundation for KR Arts And Science College in P. Thambipatti, securing official affiliation under Madurai Kamaraj University to pioneer higher education in Peraiyur.",
    highlights: [
      "Madurai Kamaraj University Affiliation",
      "Govt. of Tamil Nadu Official Sanction",
      "Higher Education Pioneer in Peraiyur",
    ],
    image: "/kr_campus.png",
  },
];

const YEAR_FILTERS = [
  { key: "all", label: "All Chronicles" },
  { key: "2025-26", label: "Academic Year 2025-26" },
  { key: "2024-25", label: "Academic Year 2024-25" },
  { key: "2022-23", label: "Establishment 2022-23" },
];

export default function ChronicleSection() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const filteredChronicles =
    selectedYear === "all"
      ? CHRONICLES_DATA
      : CHRONICLES_DATA.filter((item) => item.year === selectedYear);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeItem =
    filteredChronicles[activeIndex] ||
    filteredChronicles[0] ||
    CHRONICLES_DATA[0];

  return (
    <section
      className="pt-8 sm:pt-10 pb-10 sm:pb-12 bg-white border-t border-slate-100 relative"
      id="chronicle"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
              Annual Innovation Symposia &bull; Campus Milestones
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            SPARK Festival &amp; Documented Milestones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore our annual inter-collegiate technology symposia alongside
            historic student milestones across academic years without navigating
            away.
          </p>

          {/* Year Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6">
            {YEAR_FILTERS.map((f) => {
              const isActive = selectedYear === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => {
                    setSelectedYear(f.key);
                    setActiveIndex(0);
                  }}
                  className={`px-4 py-1.5 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-xs font-bold transition-all duration-200 cursor-pointer shadow-none ${
                    isActive
                      ? "bg-[#021B4E] text-[#F5B83D] border-2 border-[#C59B27] -translate-y-0.5"
                      : "bg-slate-100/90 text-slate-700 hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-slate-200/80"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Showcase: Options on LEFT, Visual on RIGHT (completing the zig-zag) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Milestone Options (Fixed Common Size, No Dynamic Stretching) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-2.5 h-full">
            {filteredChronicles.map((item, idx) => {
              const isActive = item.id === activeItem.id;
              const formattedNum = String(idx + 1).padStart(2, "0");

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
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
                      {item.title}
                    </h4>
                    <span
                      className={`text-[10px] sm:text-[11px] font-medium block mt-0.5 transition-colors duration-200 ${
                        isActive
                          ? "text-[#FBF2D4]"
                          : "text-slate-500 group-hover:text-[#FBF2D4]"
                      }`}
                    >
                      {item.category} &bull; {item.year}
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none transition-colors duration-200 shadow-none shrink-0 ${
                      isActive
                        ? "bg-[#C59B27] text-[#021B4E] font-extrabold"
                        : "bg-[#021B4E]/10 text-[#021B4E] group-hover:bg-[#C59B27] group-hover:text-[#021B4E]"
                    }`}
                  >
                    {formattedNum}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Stage (Equal Height with Left Column) */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="h-full flex flex-col justify-between bg-white border-2 border-slate-200/90 hover:border-[#C59B27] rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none p-6 sm:p-7 shadow-none relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

              {/* Image Frame with Signature Diagonal Shape */}
              <div className="relative h-[250px] sm:h-[280px] w-full rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-100 mb-5 shrink-0 shadow-none border border-slate-200">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:scale-[1.02] duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/campus-hero.png";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#0334A0] border border-[#0334A0]/20 shadow-none">
                  {activeItem.category} &bull; {activeItem.year}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-center my-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#021B4E] transition-colors">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Bullet Highlights: Diagonal-Styled Chips */}
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5 shrink-0">
                {activeItem.highlights.map((h, i) => (
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

        {/* =========================================================================
            FEATURED HIGHLIGHT BANNERS: STRATEGIC INTERNATIONAL & INDUSTRY MOUS
            (Sleek, Compact Height, Proportionally Balanced with Details)
            ========================================================================= */}
        <div className="mt-12 pt-8 border-t border-slate-200/80" id="global">
          {/* Eyebrow Label with Accent Rules */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
              Strategic Bilateral MoUs &amp; Horizons
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>

          <div className="space-y-5">
            {/* -------------------------------------------------------------
                BANNER 1: THAILAND MOU (SHINAWATRA UNIVERSITY)
                Sleek, Compact Height, Image Fits Space Fully
                ------------------------------------------------------------- */}
            <div className="bg-white border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none overflow-hidden transition-all duration-300 shadow-none flex flex-col md:flex-row items-stretch relative group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

              {/* Left Column: Compact Full-Bleed Image Fitting Space */}
              <div className="w-full md:w-[210px] lg:w-[230px] relative overflow-hidden bg-[#021B4E] border-b-2 md:border-b-0 md:border-r-2 border-[#C59B27] shrink-0 min-h-[190px] md:min-h-0 flex flex-col">
                <img
                  src="/images/thailand-mou-iciri.jpg"
                  alt="Shinawatra University Thailand ICIRI 2026 MoU Conference Poster"
                  className="w-full h-full object-cover object-top block group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021B4E]/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-2.5 left-0 right-0 text-center">
                  <span className="inline-block bg-[#021B4E]/90 backdrop-blur-md px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-mono font-extrabold tracking-[0.2em] text-[#FBF2D4] border border-[#C59B27]/40 uppercase shadow-md">
                    MOU 2026
                  </span>
                </div>
              </div>

              {/* Right Column: Compact Details & Actions */}
              <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between">
                <div>
                  {/* Meta Badges */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] bg-[#F5B83D] text-[#021B4E] font-extrabold text-[10px] uppercase tracking-wider">
                        NEW
                      </span>
                      <span className="px-3 py-0.5 rounded-tl-[6px] rounded-br-[6px] bg-[#021B4E] text-white font-bold text-[10px] uppercase tracking-wider">
                        INTERNATIONAL MOU
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">
                      ICIRI 2026 &bull; Pathum Thani, Thailand
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading text-lg sm:text-xl lg:text-[22px] font-bold text-[#011640] tracking-tight leading-snug">
                    KR Arts &amp; Science College Partners with{" "}
                    <span className="font-serif italic text-[#C59B27] block sm:inline">
                      Shinawatra University, Thailand
                    </span>
                  </h3>

                  {/* Paragraph */}
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    We are proud to announce a landmark collaboration formalized
                    at the{" "}
                    <strong className="text-slate-900 font-bold">
                      International Conference on Integrated Research &amp;
                      Innovation (ICIRI 2026)
                    </strong>
                    . This bilateral treaty opens world-class cross-border
                    opportunities for our students and faculty, bridging
                    academic research, cultural immersion, and international
                    degree progress.
                  </p>

                  {/* Highlight Chips */}
                  <div className="flex flex-wrap items-center gap-2 mt-3.5">
                    {[
                      "Student Exchange",
                      "Faculty Mobility",
                      "Joint Research",
                      "Global Internships",
                    ].map((chip, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-tl-[8px] rounded-br-[8px] bg-[#FBF2D4] border border-[#0334A0]/15 text-[11px] font-bold text-[#021B4E]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]"></span>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <Link
                    href="/events/thailand-mou"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none group/link"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27] group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-semibold text-slate-400">
                    SKRGC Academy Alliance &bull; Verifiable Cross-Border Treaty
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
            </div>

            {/* -------------------------------------------------------------
                BANNER 2: LKP ACADEMY AVIATION MOU
                Sleek, Compact Height, Image Fits Space Fully
                ------------------------------------------------------------- */}
            <div className="bg-white border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none overflow-hidden transition-all duration-300 shadow-none flex flex-col md:flex-row items-stretch relative group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

              {/* Left Column: Compact Full-Bleed Airport Training Image Fitting Space */}
              <div className="w-full md:w-[210px] lg:w-[230px] relative overflow-hidden bg-[#021B4E] border-b-2 md:border-b-0 md:border-r-2 border-[#C59B27] shrink-0 min-h-[190px] md:min-h-0 flex flex-col">
                <img
                  src="/images/campus-hero.png"
                  alt="LKP Academy Aviation Madurai International Airport Training Immersion"
                  className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021B4E]/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-2.5 left-0 right-0 text-center">
                  <span className="inline-block bg-[#021B4E]/90 backdrop-blur-md px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-mono font-extrabold tracking-[0.2em] text-[#FBF2D4] border border-[#C59B27]/40 uppercase shadow-md">
                    AVIATION 2026
                  </span>
                </div>
              </div>

              {/* Right Column: Compact Details & Actions */}
              <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between">
                <div>
                  {/* Meta Badges */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] bg-[#F5B83D] text-[#021B4E] font-extrabold text-[10px] uppercase tracking-wider">
                        AVIATION PARTNER
                      </span>
                      <span className="px-3 py-0.5 rounded-tl-[6px] rounded-br-[6px] bg-[#021B4E] text-white font-bold text-[10px] uppercase tracking-wider">
                        INDUSTRY MOU
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Madurai Airport &bull; Airport Logistics
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading text-lg sm:text-xl lg:text-[22px] font-bold text-[#011640] tracking-tight leading-snug">
                    KR Arts &amp; Science College Partners with{" "}
                    <span className="font-serif italic text-[#C59B27] block sm:inline">
                      LKP Academy Aviation
                    </span>
                  </h3>
                  <p className="text-[10px] font-bold text-[#0334A0] uppercase tracking-wider mt-0.5">
                    BBA Aviation Ground Operations &amp; Airport Immersion
                  </p>

                  {/* Paragraph */}
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    Direct academic integration for our BBA Aviation Management
                    students. Encompasses airport terminal operations, passenger
                    check-in simulation, air cargo logistics software, and
                    scheduled field training visits to Madurai International
                    Airport.
                  </p>

                  {/* Highlight Chips */}
                  <div className="flex flex-wrap items-center gap-2 mt-3.5">
                    {[
                      "Airport Operations",
                      "Ticketing Softwares",
                      "Madurai Airport Visits",
                      "Aviation Placement Links",
                    ].map((chip, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-tl-[8px] rounded-br-[8px] bg-[#FBF2D4] border border-[#0334A0]/15 text-[11px] font-bold text-[#021B4E]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]"></span>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <Link
                    href="/events/lkp-aviation"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none group/link"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27] group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-semibold text-slate-400">
                    Industry-Certified Curriculum &bull; Madurai International
                    Airport Immersion
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
