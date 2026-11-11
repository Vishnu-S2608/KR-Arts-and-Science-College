"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Programme {
  id: string;
  number: string;
  title: string;
  category: "tech" | "commerce" | "science" | "humanities";
  categoryLabel: string;
  duration: string;
  description: string;
}

const PROGRAMMES: Programme[] = [
  {
    id: "ai",
    number: "01",
    title: "B.Sc Artificial Intelligence",
    category: "tech",
    categoryLabel: "Computing & AI",
    duration: "3 Years Regular",
    description:
      "Machine learning, neural networks, predictive data modeling, and python computing algorithms.",
  },
  {
    id: "commerce",
    number: "02",
    title: "B.Com (Computer Applications)",
    category: "commerce",
    categoryLabel: "Commerce & Management",
    duration: "3 Years Regular",
    description:
      "Corporate accounting, GST & taxation systems, computerized business analytics, and banking operations.",
  },
  {
    id: "aviation",
    number: "03",
    title: "BBA Aviation Management",
    category: "commerce",
    categoryLabel: "Commerce & Management",
    duration: "3 Years Regular",
    description:
      "Airport terminal operations, airline dispatch, air ticketing, aviation logistics, and ground handling.",
  },
  {
    id: "cs",
    number: "04",
    title: "B.Sc Computer Science",
    category: "tech",
    categoryLabel: "Computing & AI",
    duration: "3 Years Regular",
    description:
      "Data structures, full stack web development, database management systems, and cybersecurity.",
  },
  {
    id: "tamil",
    number: "05",
    title: "B.A Tamil",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years Regular",
    description:
      "Classical Sangam literature, epigraphy, modern linguistics, media journalism, and Tamil creative writing.",
  },
  {
    id: "criminology",
    number: "06",
    title: "B.A Criminology & Police Administration",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years Regular",
    description:
      "Forensic science, criminal psychology, penology, police investigative procedures, and constitutional law.",
  },
  {
    id: "english",
    number: "07",
    title: "B.A English Literature",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years Regular",
    description:
      "British, American & Postcolonial literature, phonetics, linguistics, and professional corporate communication.",
  },
  {
    id: "physical-education",
    number: "08",
    title: "B.Sc Physical Education",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description:
      "Sports physiology, kinesiology, athletic conditioning, sports psychology, and tournament administration.",
  },
  {
    id: "chemistry",
    number: "09",
    title: "B.Sc Chemistry",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description:
      "Organic synthesis, inorganic chemistry, analytical spectrophotometry, and pharmaceutical lab techniques.",
  },
  {
    id: "home-science",
    number: "10",
    title: "B.Sc Home Science (Nutrition & Dietetics)",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description:
      "Clinical dietetics, food chemistry, public health nutrition, therapeutic meal planning, and hospital internship.",
  },
  {
    id: "mathematics",
    number: "11",
    title: "B.Sc Mathematics",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description:
      "Advanced calculus, abstract algebra, discrete structures, probability statistics, and operations research.",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Programmes (11)" },
  { key: "tech", label: "Computing & AI" },
  { key: "commerce", label: "Commerce & Aviation" },
  { key: "science", label: "Pure & Applied Sciences" },
  { key: "humanities", label: "Humanities & Law" },
];

export default function ProgrammesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? PROGRAMMES
      : PROGRAMMES.filter((p) => p.category === activeCategory);

  return (
    <section
      className="py-10 sm:py-12 md:py-14 bg-white relative"
      id="programmes"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-9">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
                Academic Degrees &bull; Affiliated to MKU
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              11 Career-Driven Undergraduate Programmes
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Curated curricula designed under Madurai Kamaraj University
              regulations, coupled with specialized value-added industry modules
              and placement guarantees.
            </p>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none text-sm font-bold shrink-0 self-start md:self-auto text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none group"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover:text-[#021B4E] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* Interactive Category Filter Tabs with Signature Diagonal Boxing */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-none ${
                  isActive
                    ? "bg-[#021B4E] text-[#F5B83D] border-2 border-[#C59B27] -translate-y-0.5"
                    : "bg-slate-100/90 text-slate-700 hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-slate-200/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Option 3: Clean Staggered Cascade Grid (Static 3-Column, No Carousels/Moving Tracks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog, idx) => {
            return (
              <article
                key={`${activeCategory}-${prog.id}`}
                style={{ animationDelay: `${idx * 45}ms` }}
                className="animate-card-fade-in relative bg-white rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none p-6 sm:p-7 border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5 cursor-pointer shadow-none"
              >
                {/* Subtle Top Accent Shimmer on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar inside Card: Large Course Index */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-slate-300 group-hover:text-[#0334A0] group-hover:scale-105 transition-all duration-300 select-none">
                      {prog.number}
                    </span>
                  </div>

                  {/* Course Title (Clean & Bold) */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#021B4E] group-hover:text-[#0334A0] transition-colors duration-200 leading-snug">
                    {prog.title}
                  </h3>

                  {/* Metadata: Duration & Category */}
                  <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-slate-500">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                    <span>{prog.duration}</span>
                    <span>&bull;</span>
                    <span>{prog.categoryLabel}</span>
                  </div>

                  {/* Course Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3.5 mb-6 line-clamp-3">
                    {prog.description}
                  </p>
                </div>

                {/* Bottom Actions with Signature Diagonal Cut */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/apply?course=${encodeURIComponent(prog.title)}`}
                    className="text-xs font-bold text-[#0334A0] hover:text-[#021B4E] inline-flex items-center gap-1.5 group/link transition-colors"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27] group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  {/* Apply Now: Navy by default, Cream on hover */}
                  <Link
                    href="/apply"
                    className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none"
                  >
                    Apply Now
                  </Link>
                </div>

                {/* Bottom Glowing Border Line Expanding on Hover */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
