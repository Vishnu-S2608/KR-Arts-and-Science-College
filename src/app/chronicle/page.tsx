"use client";

import { useState } from "react";
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
    href: "/placements",
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
    gradient: "from-[#011236] via-[#021B4E] to-[#0F4C3A]",
    href: "/academics/commerce",
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

const YEAR_TABS = [
  { key: "all", label: "All Chronicles" },
  { key: "2025-26", label: "Academic Year 2025-26" },
  { key: "2024-25", label: "Academic Year 2024-25" },
  { key: "2022-23", label: "Establishment 2022-23" },
];

export default function ChroniclePage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const filtered =
    selectedYear === "all"
      ? CHRONICLES_DATA
      : CHRONICLES_DATA.filter((item) => item.year === selectedYear);

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-900">
      {/* 1. Breadcrumbs */}
      <div className="bg-[#FAF8F2] border-b border-slate-200/80 py-3.5">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-semibold text-black/70">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-black font-bold">Campus Chronicle</span>
        </div>
      </div>

      {/* 2. Compact Hero Section (No Vast Empty Background Space) */}
      <section className="relative bg-[#021B4E] text-white overflow-hidden py-7 sm:py-9">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(3,52,160,0.6),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,215,0,0.25),transparent_50%)]" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-8">
            {/* Left: Titles & Badges */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-3 py-1 rounded-tl-[7px] rounded-br-[7px] rounded-tr-none rounded-bl-none text-[10px] font-bold bg-[#FFD700] text-black uppercase tracking-wider shadow-none">
                  Campus Archives &bull; Est. 2023
                </span>
                <span className="px-3 py-1 rounded-tl-[7px] rounded-br-[7px] rounded-tr-none rounded-bl-none text-[10px] font-bold bg-white/10 text-white border border-white/20 shadow-none">
                  Madurai Kamaraj University Affiliated
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Campus Chronicle &amp; Milestones
              </h1>
            </div>

            {/* Right: Compact Description & Key Metric Pills */}
            <div className="lg:max-w-md lg:border-l lg:border-white/15 lg:pl-6 shrink-0">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Explore the landmark achievements, international memorandums, athletic triumphs, and academic symposiums shaping KR Arts and Science College.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] text-[11px] font-semibold bg-white/10 border border-white/15 text-white">
                  8 Documented Archives
                </span>
                <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] text-[11px] font-semibold bg-white/10 border border-white/15 text-white">
                  Global MoUs
                </span>
                <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] text-[11px] font-semibold bg-[#FFD700] text-black font-bold">
                  100% Placement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Year Filter Tabs */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3.5 scrollbar-none">
            {YEAR_TABS.map((tab) => {
              const isActive = selectedYear === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedYear(tab.key)}
                  className={`px-5 py-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer shadow-none ${
                    isActive
                      ? "bg-[#021B4E] text-[#FFD700] border-2 border-[#FFD700]"
                      : "bg-[#FDFCF7] text-black hover:text-black hover:bg-[#FBF2D4] border border-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Asymmetric Archival Bento Showcase (No Uniform Rows & Columns) */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 sm:w-12 h-[2px] bg-[#FFD700]" />
                <span className="text-xs font-bold tracking-widest text-black uppercase">
                  Institutional Archives &bull; Documented Milestones
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">
                Chronicle of Landmark Achievements &amp; Global Alliances
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/75 max-w-md">
              From historic university affiliation and 100% placements to international Thailand treaties and national military drill honors.
            </p>
          </div>

          {/* DYNAMIC ASYMMETRIC BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {filtered.map((item, idx) => {
              const patternIdx = idx % 4;
              let colSpan = "lg:col-span-6";
              let isWide = false;

              if (filtered.length >= 4) {
                if (idx < 4) {
                  if (patternIdx === 0) {
                    colSpan = "lg:col-span-8";
                    isWide = true;
                  } else if (patternIdx === 1) {
                    colSpan = "lg:col-span-4";
                  } else if (patternIdx === 2) {
                    colSpan = "lg:col-span-4";
                  } else if (patternIdx === 3) {
                    colSpan = "lg:col-span-8";
                    isWide = true;
                  }
                } else if (filtered.length % 2 === 0) {
                  colSpan = "lg:col-span-6";
                }
              }

              return (
                <article
                  key={item.id}
                  className={`${colSpan} bg-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#FFD700] transition-all duration-300 flex ${
                    isWide ? "flex-col md:flex-row" : "flex-col"
                  } justify-between overflow-hidden group shadow-xs hover:shadow-md cursor-pointer`}
                >
                  {/* Photo Container */}
                  <div
                    className={`${
                      isWide ? "w-full md:w-[46%] min-h-[260px] md:min-h-0" : "relative aspect-[16/10] w-full"
                    } relative overflow-hidden bg-slate-900 shrink-0`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={isWide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                      <span className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#021B4E]/95 text-[#FFD700] border border-[#FFD700]/60 uppercase tracking-wider backdrop-blur-sm shadow-xs">
                        {item.badgeLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-mono font-bold bg-black/60 text-white backdrop-blur-xs border border-white/20">
                        {item.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 pointer-events-none">
                      <span className="text-[10px] font-mono font-bold text-[#FFD700] uppercase tracking-wider block">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                        <span className="text-[10px] font-mono font-bold text-black uppercase tracking-wider">
                          Documented Archive &bull; {item.year}
                        </span>
                      </div>

                      <h2
                        className={`font-heading ${
                          isWide ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl"
                        } font-bold text-black group-hover:text-black transition-colors leading-snug mb-3`}
                      >
                        {item.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-black leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Detail Metric Pill / Focus Highlight */}
                      <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-tl-[8px] rounded-br-[8px] mb-4">
                        <span className="text-[9px] font-bold text-black uppercase block mb-0.5 tracking-wider">
                          Chronicle Highlight
                        </span>
                        <p className="text-xs text-black font-semibold truncate">
                          {item.id === "spark-2025" && "AI Algorithms, Clean Tech & Working Prototypes"}
                          {item.id === "shinawatra-mou" && "Bilateral Research, Faculty Exchange & Student Mobility"}
                          {item.id === "thal-sainik" && "National Competition Drills & 0.22 Rifle Marksmanship"}
                          {item.id === "placement-drive" && "70+ Confirmed Offers Across 7 Leading Corporates"}
                          {item.id === "srivilliputhur-meet" && "Regional Track Gold & Silver Championship Trophies"}
                          {item.id === "airport-visit" && "Passenger Ticketing Terminals & Cargo Air Logistics"}
                          {item.id === "decathlon-visit" && "Warehouse Barcode Automation & Inventory Logistics Flow"}
                          {item.id === "trust-foundation" && "Official Madurai Kamaraj University Affiliation Clearance"}
                        </p>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <Link
                        href={item.href}
                        className="text-xs font-bold text-black group-hover:text-black inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Read Full Story</span>
                        <span className="text-[#FFD700] group-hover:translate-x-1.5 transition-transform duration-300 font-bold">
                          &rarr;
                        </span>
                      </Link>

                      <span className="text-[10px] font-mono text-slate-500">
                        {item.badgeLabel}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
