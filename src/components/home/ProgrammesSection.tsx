"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COURSES_DATA } from "@/data/coursesData";

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
      ? COURSES_DATA
      : COURSES_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white relative"
      id="programmes"
      aria-label="Undergraduate Degree Programmes"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
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
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none text-sm font-bold shrink-0 self-start md:self-auto text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all duration-300 shadow-none"
          >
            <span>Apply for Admission</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 sm:mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-none ${
                  isActive
                    ? "bg-[#021B4E] text-[#F5B83D] border-2 border-[#C59B27]"
                    : "bg-slate-100/90 text-slate-700 hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-slate-200/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Programmes Grid with Generous Spacing and Zero Box Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 xl:gap-16">
          {filtered.map((prog, idx) => {
            return (
              <article
                key={`${activeCategory}-${prog.id}`}
                style={{ animationDelay: `${idx * 40}ms` }}
                className="animate-card-fade-in relative bg-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-none"
              >
                {/* Top Subtle Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none z-20" />

                <div>
                  {/* Photo Banner with Zoom on Hover */}
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="relative aspect-[16/10] w-full block overflow-hidden bg-slate-900"
                  >
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Animated Light Sweep across Photo on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3.5 py-1.5 rounded-tl-[7px] rounded-br-[7px] text-[10px] font-bold bg-[#021B4E]/95 text-[#F5B83D] border border-[#C59B27]/50 uppercase tracking-wider backdrop-blur-sm shadow-none">
                        {prog.categoryLabel}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-black text-white/95 drop-shadow select-none">
                        {prog.number}
                      </span>
                    </div>

                    {/* Bottom Duration Badge on Photo (No Icons) */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-xs font-semibold text-slate-200 drop-shadow">
                      <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                      <span>{prog.duration}</span>
                    </div>
                  </Link>

                  {/* Card Content with Generous Padding */}
                  <div className="p-8 sm:p-10 lg:p-11">
                    {/* Course Title */}
                    <Link
                      href={`/academics/${prog.slug}`}
                      className="block group-hover:text-[#0334A0] transition-colors"
                    >
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#021B4E] leading-snug">
                        {prog.title}
                      </h3>
                    </Link>

                    {/* Department Subtitle */}
                    <p className="mt-3 text-xs sm:text-sm text-[#C59B27] font-semibold tracking-wide">
                      {prog.department}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions with Generous Spacing and Signature Diagonal Cut */}
                <div className="p-8 pt-5 sm:p-10 sm:pt-6 lg:p-11 lg:pt-6 border-t border-slate-100 flex items-center justify-between mt-auto bg-slate-50/40">
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="text-xs sm:text-sm font-bold text-[#0334A0] hover:text-[#021B4E] inline-flex items-center gap-1.5 group/link transition-colors"
                  >
                    <span>View Curriculum</span>
                    <span className="text-[#C59B27] group-hover/link:translate-x-1.5 transition-transform duration-300 font-bold">
                      &rarr;
                    </span>
                  </Link>

                  <Link
                    href={`/apply?course=${encodeURIComponent(prog.title)}`}
                    className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all duration-300 shadow-none"
                  >
                    Apply Now
                  </Link>
                </div>

                {/* Bottom Border Accent Expanding on Hover */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
