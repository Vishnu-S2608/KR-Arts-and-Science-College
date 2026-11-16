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
    ? [
        ...filteredChronicles,
        ...filteredChronicles,
        ...filteredChronicles,
        ...filteredChronicles,
      ]
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
      className="group block w-[250px] sm:w-[275px] md:w-[295px] shrink-0 bg-white rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#FFD700] hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-none flex flex-col justify-between cursor-pointer"
    >
      {/* Top Accent Line */}
      <div className="h-[2.5px] bg-gradient-to-r from-transparent via-[#FFD700]/0 to-transparent group-hover:via-[#FFD700] transition-all duration-500 pointer-events-none" />

      <div className="flex flex-col h-full">
        {/* 1. FULL IMAGE VIEW (Unobscured full view without cutout curve or center badge) */}
        <div className="relative h-[200px] sm:h-[220px] w-full bg-slate-900 overflow-hidden shrink-0 border-b border-slate-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="295px"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          {/* Subtle top scrim for badge legibility only */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Header Badges placed cleanly in corners */}
          <div className="relative z-10 flex items-center justify-between p-3.5">
            <span className="px-2.5 py-1 rounded-tl-[6px] rounded-br-[6px] text-[9.5px] font-bold bg-[#021B4E]/95 text-[#FFD700] border border-[#FFD700]/60 uppercase tracking-wider backdrop-blur-sm shadow-none">
              {item.category}
            </span>
            <span className="text-[10px] font-mono font-bold text-white/95 bg-black/60 px-2.5 py-1 rounded-tl-[6px] rounded-br-[6px] backdrop-blur-sm border border-white/25">
              {item.year}
            </span>
          </div>
        </div>

        {/* 2. CARD BODY: TITLE ONLY (Sentences below heading removed per user request) */}
        <div className="p-4 sm:p-5 text-center flex items-center justify-center flex-1 min-h-[68px]">
          <h3 className="font-heading text-sm sm:text-base font-bold text-black group-hover:text-black transition-colors leading-snug">
            {item.title}
          </h3>
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
              <span className="w-8 sm:w-12 h-[2px] bg-[#FFD700] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-black uppercase">
                Annual Innovation Symposia &bull; Campus Milestones
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
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
                  className="w-10 h-10 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-slate-300 hover:border-[#FFD700] bg-white text-black hover:text-black hover:bg-[#FBF2D4] font-bold text-sm flex items-center justify-center transition-all shadow-none cursor-pointer"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={scrollRight}
                  aria-label="Scroll milestones right"
                  className="w-10 h-10 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-slate-300 hover:border-[#FFD700] bg-white text-black hover:text-black hover:bg-[#FBF2D4] font-bold text-sm flex items-center justify-center transition-all shadow-none cursor-pointer"
                >
                  &rarr;
                </button>
              </>
            )}

            <Link
              href="/chronicle"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-[#FFD700] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-black border border-[#FFD700] transition-all duration-300 shadow-none ml-1"
            >
              <span>All Chronicles &amp; Archives</span>
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
                    ? "bg-[#021B4E] text-[#FFD700] border-2 border-[#FFD700]"
                    : "bg-slate-100 text-black hover:bg-[#FBF2D4] hover:text-black border border-slate-200/90"
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
          className="w-full overflow-x-auto scrollbar-none py-6 px-4 sm:px-6 md:px-8 cursor-grab active:cursor-grabbing"
        >
          <div className="animate-chronicle-marquee gap-8 sm:gap-10 md:gap-12 lg:gap-14 flex items-stretch">
            {displayItems.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
      ) : (
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-stretch justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-14">
            {filteredChronicles.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
      )}

      {/* STRATEGIC BILATERAL MOUS SECTION (1 x 2 Side-by-Side Layout, Compact) */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200/80" id="global">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 sm:w-12 h-[2px] bg-[#FFD700] rounded-full" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-black uppercase">
            Strategic Bilateral MoUs &amp; Global Linkages
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#FFD700] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Banner 1: Thailand MoU (Shinawatra University) */}
          <div className="bg-white border-2 border-slate-200/90 hover:border-[#FFD700] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none overflow-hidden transition-all duration-300 shadow-none flex flex-col sm:flex-row items-stretch relative group">
            <div className="w-full sm:w-[150px] lg:w-[165px] relative overflow-hidden bg-[#021B4E] border-b-2 sm:border-b-0 sm:border-r-2 border-[#FFD700] shrink-0 min-h-[140px] sm:min-h-0">
              <Image
                src="/images/events/thailand-mou-iciri.jpg"
                alt="Shinawatra University Thailand ICIRI 2026 MoU"
                fill
                sizes="(max-width: 640px) 100vw, 170px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021B4E]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <span className="inline-block bg-[#021B4E]/95 px-2.5 py-0.5 rounded-tl-[5px] rounded-br-[5px] text-[9px] font-mono font-bold tracking-wider text-[#FFD700] border border-[#FFD700]/60 uppercase shadow-none">
                  MOU 2026
                </span>
              </div>
            </div>

            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#FFD700] text-black font-bold text-[9px] uppercase tracking-wider">
                    NEW
                  </span>
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#021B4E] text-white font-bold text-[9px] uppercase tracking-wider">
                    INTERNATIONAL MOU
                  </span>
                </div>

                <h3 className="font-heading text-sm sm:text-base font-bold text-black tracking-tight leading-snug">
                  KR Arts &amp; Science Partners with{" "}
                  <span className="italic text-[#D4AF37]">Shinawatra Univ, Thailand</span>
                </h3>

                <p className="mt-1.5 text-xs text-black leading-relaxed line-clamp-2">
                  Bilateral treaty formalized at ICIRI 2026 opening cross-border research collaboration, faculty exchange, and dual academic progression.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                <Link
                  href="/events/thailand-mou"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#FFD700] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-black border border-[#FFD700] transition-all duration-300 shadow-none"
                >
                  <span>Read Story &rarr;</span>
                </Link>
                <span className="text-[10px] font-medium text-slate-500">
                  Pathum Thani, Thailand
                </span>
              </div>
            </div>
          </div>

          {/* Banner 2: LKP Academy Aviation MoU */}
          <div className="bg-white border-2 border-slate-200/90 hover:border-[#FFD700] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none overflow-hidden transition-all duration-300 shadow-none flex flex-col sm:flex-row items-stretch relative group">
            <div className="w-full sm:w-[150px] lg:w-[165px] relative overflow-hidden bg-[#021B4E] border-b-2 sm:border-b-0 sm:border-r-2 border-[#FFD700] shrink-0 min-h-[140px] sm:min-h-0">
              <Image
                src="/images/campus/campus-hero.png"
                alt="LKP Academy Aviation Strategic MoU"
                fill
                sizes="(max-width: 640px) 100vw, 170px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021B4E]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <span className="inline-block bg-[#021B4E]/95 px-2.5 py-0.5 rounded-tl-[5px] rounded-br-[5px] text-[9px] font-mono font-bold tracking-wider text-[#FFD700] border border-[#FFD700]/60 uppercase shadow-none">
                  AVIATION 2026
                </span>
              </div>
            </div>

            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#021B4E] text-[#FFD700] font-bold text-[9px] uppercase tracking-wider">
                    INDUSTRY LINKAGE
                  </span>
                  <span className="px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] bg-[#FBF2D4] text-black font-bold text-[9px] uppercase tracking-wider border border-[#FFD700]/60">
                    AIRPORT INTERNSHIPS
                  </span>
                </div>

                <h3 className="font-heading text-sm sm:text-base font-bold text-black tracking-tight leading-snug">
                  Strategic Academic MoU with{" "}
                  <span className="italic text-[#D4AF37]">LKP Academy (Aviation)</span>
                </h3>

                <p className="mt-1.5 text-xs text-black leading-relaxed line-clamp-2">
                  Direct airline ground operations immersion, live airport terminal management training, and ticketing certifications for BBA students.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                <Link
                  href="/events/lkp-aviation"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#FFD700] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-black border border-[#FFD700] transition-all duration-300 shadow-none"
                >
                  <span>Read Story &rarr;</span>
                </Link>
                <span className="text-[10px] font-medium text-slate-500">
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
