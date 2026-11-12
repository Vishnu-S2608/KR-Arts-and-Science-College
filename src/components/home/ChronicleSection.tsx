"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface FestivalMilestone {
  id: string;
  year: string;
  category: string;
  badgeLabel: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  href: string;
}

const CHRONICLES_DATA: FestivalMilestone[] = [
  {
    id: "spark-2025",
    year: "2025-26",
    category: "Innovation Symposia",
    badgeLabel: "SPARK 2026",
    title: "SPARK Innovation Festival Grand Finale",
    description:
      "Our flagship annual inter-collegiate technology & business model forum. Undergraduates present working prototypes in AI algorithms, sustainable agriculture, and solar clean-tech.",
    image: "/images/campus/computer-lab.png",
    gradient: "from-[#021B4E] via-[#0334A0] to-[#011236]",
    href: "/events",
  },
  {
    id: "thal-sainik",
    year: "2025-26",
    category: "National NCC Honors",
    badgeLabel: "NCC HONORS",
    title: "Cadet Selection for Prestigious Thal Sainik Camp",
    description:
      "Following rigorous multi-stage state conditioning trials, KR College NCC cadets achieved selection to represent the Directorate in national competition drills and marksmanship.",
    image: "/images/campus/campus-hero.png",
    gradient: "from-[#011236] via-[#022878] to-[#0334A0]",
    href: "/clubs/ncc",
  },
  {
    id: "shinawatra-mou",
    year: "2025-26",
    category: "Global Alliance",
    badgeLabel: "THAILAND MOU",
    title: "Shinawatra University, Thailand Bilateral MoU",
    description:
      "Signed in Pathum Thani, Thailand during ICIRI 2026. Establishes cross-border research collaboration, international faculty exchanges, and student semester mobility.",
    image: "/images/events/thailand-mou-iciri.jpg",
    gradient: "from-[#021B4E] via-[#011A50] to-[#C59B27]",
    href: "/events/thailand-mou",
  },
  {
    id: "placement-drive",
    year: "2025-26",
    category: "Placement Milestone",
    badgeLabel: "100% PLACED",
    title: "Inaugural Batch 100% Placement Achievement",
    description:
      "All 18 graduating applicants received verifiable offer letters totaling 70+ placement confirmations across 7 leading corporate firms in tech, logistics, and retail banking.",
    image: "/images/campus/computer-lab.png",
    gradient: "from-[#0334A0] via-[#021B4E] to-[#F5B83D]",
    href: "/#placements",
  },
  {
    id: "srivilliputhur-meet",
    year: "2024-25",
    category: "Athletics Championship",
    badgeLabel: "ATHLETICS",
    title: "Srivilliputhur Athletic Meet Overall Championship",
    description:
      "College athletes dominated regional track and field meets, bagging multiple gold and silver trophies across 100m sprint, 400m relay, and long jump divisions.",
    image: "/images/about/campus.jpg",
    gradient: "from-[#0F4C3A] via-[#021B4E] to-[#011236]",
    href: "/clubs/sports-club",
  },
  {
    id: "airport-visit",
    year: "2024-25",
    category: "Aviation Management",
    badgeLabel: "AVIATION TOUR",
    title: "Madurai Airport Operational Training Immersion",
    description:
      "BBA Aviation scholars received direct field insight into passenger ticketing terminals, cargo air logistics, and security protocol systems from airport officials.",
    image: "/images/campus/campus-hero.png",
    gradient: "from-[#1A4FBF] via-[#021B4E] to-[#0334A0]",
    href: "/events/lkp-aviation",
  },
  {
    id: "decathlon-visit",
    year: "2024-25",
    category: "Industrial Immersion",
    badgeLabel: "SUPPLY CHAIN",
    title: "Decathlon Global Supply Chain Immersion",
    description:
      "Interactive industrial immersion analyzing inventory software architecture, barcode logistics integration, warehouse supply chain automation, and retail management flow.",
    image: "/images/about/skills.jpg",
    gradient: "from-[#022B85] via-[#0334A0] to-[#021B4E]",
    href: "/events",
  },
  {
    id: "trust-foundation",
    year: "2022-23",
    category: "Foundation Milestone",
    badgeLabel: "ESTD 2023",
    title: "Establishment & University Affiliation Clearance",
    description:
      "KR Educational and Charitable Trust laid the foundation for KR Arts And Science College in P. Thambipatti, securing official affiliation under Madurai Kamaraj University.",
    image: "/images/campus/kr_campus.png",
    gradient: "from-[#C59B27] via-[#8B6914] to-[#021B4E]",
    href: "/#about",
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
  const marqueeRef = useRef<HTMLDivElement>(null);

  const filteredChronicles =
    selectedYear === "all"
      ? CHRONICLES_DATA
      : CHRONICLES_DATA.filter((item) => item.year === selectedYear);

  // Keep marquee only when 4 or more cards exist
  const hasMarquee = filteredChronicles.length >= 4;

  const displayItems = hasMarquee
    ? [...filteredChronicles, ...filteredChronicles]
    : filteredChronicles;

  const scrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: -290, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: 290, behavior: "smooth" });
    }
  };

  const renderCard = (item: FestivalMilestone, idx: number) => (
    <div
      key={`${item.id}-${idx}`}
      className="group block w-[240px] sm:w-[260px] md:w-[275px] shrink-0 bg-white rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#C59B27] hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-none flex flex-col justify-between"
    >
      {/* Top Accent Line */}
      <div className="h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

      <div>
        {/* 1. TOP COLORED WAVE/SCOOP HEADER BLOCK (Our College Palette) */}
        <div
          className={`relative h-[115px] sm:h-[125px] w-full bg-gradient-to-br ${item.gradient} overflow-hidden p-3.5 flex flex-col justify-between`}
        >
          {/* Subtle Background Image with Light Sweep */}
          <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="280px"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

          {/* Header Badges */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-tl-[5px] rounded-br-[5px] text-[9px] font-bold bg-[#021B4E]/90 text-[#F5B83D] border border-[#C59B27]/50 uppercase tracking-wider backdrop-blur-sm shadow-none">
              {item.category}
            </span>
            <span className="text-[10px] font-mono font-bold text-white/90 bg-white/15 px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] backdrop-blur-sm border border-white/20">
              {item.year}
            </span>
          </div>

          {/* Centered Distinct Emblem / Badge */}
          <div className="relative z-10 self-center mb-0.5">
            <div className="w-8 h-8 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#F5B83D] font-mono font-extrabold text-xs shadow-none group-hover:scale-110 transition-transform duration-300">
              {String((idx % filteredChronicles.length) + 1).padStart(2, "0")}
            </div>
          </div>

          {/* DOWNWARD SCOOP WAVE CURVE CUTOUT */}
          <svg
            className="absolute bottom-0 left-0 right-0 w-full h-6 text-white pointer-events-none"
            viewBox="0 0 360 45"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C120,45 240,45 360,0 L360,45 L0,45 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* 2. CARD BODY: TITLE & SHORT DESCRIPTION WITH GENEROUS PADDING */}
        <div className="p-4 sm:p-5 pt-2 pb-5 text-center">
          <h3 className="font-heading text-sm sm:text-base font-bold text-[#021B4E] group-hover:text-[#0334A0] transition-colors leading-snug line-clamp-2">
            {item.title}
          </h3>
          <p className="mt-1.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden"
      id="chronicle"
      aria-label="SPARK Festival & Documented Campus Milestones"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
                Annual Innovation Symposia &bull; Campus Milestones
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              SPARK Festival &amp; Documented Milestones
            </h2>
          </div>

          {/* Manual Scroll Controls (Visible only when marquee is active) */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            {hasMarquee && (
              <>
                <button
                  type="button"
                  onClick={scrollLeft}
                  aria-label="Scroll milestones left"
                  className="w-10 h-10 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-slate-300 hover:border-[#C59B27] bg-white text-slate-700 hover:text-[#021B4E] hover:bg-[#FBF2D4] font-bold text-sm flex items-center justify-center transition-all shadow-none cursor-pointer"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={scrollRight}
                  aria-label="Scroll milestones right"
                  className="w-10 h-10 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-slate-300 hover:border-[#C59B27] bg-white text-slate-700 hover:text-[#021B4E] hover:bg-[#FBF2D4] font-bold text-sm flex items-center justify-center transition-all shadow-none cursor-pointer"
                >
                  &rarr;
                </button>
              </>
            )}

            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all duration-300 shadow-none ml-1"
            >
              <span>All Events</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Year Filter Pills */}
        <div className="flex items-center gap-2.5 flex-wrap mb-10 overflow-x-auto pb-2 scrollbar-none">
          {YEAR_FILTERS.map((f) => {
            const isActive = selectedYear === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setSelectedYear(f.key)}
                className={`px-4 sm:px-5 py-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold transition-all duration-200 cursor-pointer shadow-none whitespace-nowrap ${
                  isActive
                    ? "bg-[#021B4E] text-[#F5B83D] border-2 border-[#C59B27]"
                    : "bg-slate-100 text-slate-700 hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-slate-200/90"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* CARDS DISPLAY: Smooth Marquee if 4 or more cards, clean static grid if fewer */}
      {hasMarquee ? (
        <div
          ref={marqueeRef}
          className="w-full overflow-x-auto scrollbar-none py-4 px-4 sm:px-6 cursor-grab active:cursor-grabbing"
        >
          <div className="animate-chronicle-marquee gap-6 sm:gap-7 flex items-stretch">
            {displayItems.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
      ) : (
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap items-stretch justify-start gap-6 sm:gap-7">
            {filteredChronicles.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
      )}

      {/* STRATEGIC BILATERAL MOUS SECTION (1 x 2 Side-by-Side Layout, Compact) */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200/80" id="global">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
            Strategic Bilateral MoUs &amp; Global Linkages
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Banner 1: Thailand MoU (Shinawatra University) */}
          <div className="bg-white border-2 border-slate-200/90 hover:border-[#C59B27] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none overflow-hidden transition-all duration-300 shadow-none flex flex-col sm:flex-row items-stretch relative group">
            <div className="w-full sm:w-[150px] lg:w-[165px] relative overflow-hidden bg-[#021B4E] border-b-2 sm:border-b-0 sm:border-r-2 border-[#C59B27] shrink-0 min-h-[140px] sm:min-h-0">
              <Image
                src="/images/thailand-mou-iciri.jpg"
                alt="Shinawatra University Thailand ICIRI 2026 MoU"
                fill
                sizes="(max-width: 640px) 100vw, 170px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021B4E]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <span className="inline-block bg-[#021B4E]/95 px-2.5 py-0.5 rounded-tl-[5px] rounded-br-[5px] text-[9px] font-mono font-bold tracking-wider text-[#FBF2D4] border border-[#C59B27]/40 uppercase shadow-none">
                  MOU 2026
                </span>
              </div>
            </div>

            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#F5B83D] text-[#021B4E] font-bold text-[9px] uppercase tracking-wider">
                    NEW
                  </span>
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#021B4E] text-white font-bold text-[9px] uppercase tracking-wider">
                    INTERNATIONAL MOU
                  </span>
                </div>

                <h3 className="font-heading text-sm sm:text-base font-bold text-[#011640] tracking-tight leading-snug">
                  KR Arts &amp; Science Partners with{" "}
                  <span className="italic text-[#C59B27]">Shinawatra Univ, Thailand</span>
                </h3>

                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                  Bilateral treaty formalized at ICIRI 2026 opening cross-border research collaboration, faculty exchange, and dual academic progression.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                <Link
                  href="/events/thailand-mou"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all duration-300 shadow-none"
                >
                  <span>Read Story &rarr;</span>
                </Link>
                <span className="text-[10px] font-medium text-slate-400">
                  Pathum Thani, Thailand
                </span>
              </div>
            </div>
          </div>

          {/* Banner 2: LKP Academy Aviation MoU */}
          <div className="bg-white border-2 border-slate-200/90 hover:border-[#C59B27] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none overflow-hidden transition-all duration-300 shadow-none flex flex-col sm:flex-row items-stretch relative group">
            <div className="w-full sm:w-[150px] lg:w-[165px] relative overflow-hidden bg-[#021B4E] border-b-2 sm:border-b-0 sm:border-r-2 border-[#C59B27] shrink-0 min-h-[140px] sm:min-h-0">
              <Image
                src="/images/campus/campus-hero.png"
                alt="LKP Academy Aviation Strategic MoU"
                fill
                sizes="(max-width: 640px) 100vw, 170px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021B4E]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <span className="inline-block bg-[#021B4E]/95 px-2.5 py-0.5 rounded-tl-[5px] rounded-br-[5px] text-[9px] font-mono font-bold tracking-wider text-[#FBF2D4] border border-[#C59B27]/40 uppercase shadow-none">
                  AVIATION 2026
                </span>
              </div>
            </div>

            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#021B4E] text-[#F5B83D] font-bold text-[9px] uppercase tracking-wider">
                    INDUSTRY LINKAGE
                  </span>
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#FBF2D4] text-[#021B4E] font-bold text-[9px] uppercase tracking-wider border border-[#C59B27]/40">
                    AIRPORT INTERNSHIPS
                  </span>
                </div>

                <h3 className="font-heading text-sm sm:text-base font-bold text-[#011640] tracking-tight leading-snug">
                  Strategic Academic MoU with{" "}
                  <span className="italic text-[#C59B27]">LKP Academy (Aviation)</span>
                </h3>

                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                  Direct airline ground operations immersion, live airport terminal management training, and ticketing certifications for BBA students.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                <Link
                  href="/events/lkp-aviation"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all duration-300 shadow-none"
                >
                  <span>Read Story &rarr;</span>
                </Link>
                <span className="text-[10px] font-medium text-slate-400">
                  Madurai Airport Protocols
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
