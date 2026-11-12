"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLUBS_DATA } from "@/data/clubsData";

export default function InitiativesSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const scrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Duplicate for seamless infinite marquee loop
  const duplicatedClubs = [...CLUBS_DATA, ...CLUBS_DATA];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] relative border-t border-slate-200/80 overflow-hidden"
      id="clubs"
      aria-label="Student Clubs, NCC Cadet Wing & NSS Community Outreach"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
                Student Life &bull; Beyond Academics
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Student Clubs, NCC Cadet Wing &amp; NSS Outreach
            </h2>
          </div>

          {/* Controls: Manual Scroll Buttons & Hub Directory Link */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll clubs left"
              className="w-10 h-10 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-slate-300 hover:border-[#C59B27] bg-white text-slate-700 hover:text-[#021B4E] hover:bg-[#FBF2D4] font-bold text-sm flex items-center justify-center transition-all shadow-none cursor-pointer"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll clubs right"
              className="w-10 h-10 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-slate-300 hover:border-[#C59B27] bg-white text-slate-700 hover:text-[#021B4E] hover:bg-[#FBF2D4] font-bold text-sm flex items-center justify-center transition-all shadow-none cursor-pointer"
            >
              &rarr;
            </button>

            <Link
              href="/clubs"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all duration-300 shadow-none ml-1"
            >
              <span>All Clubs</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CONTINUOUS SMOOTH MARQUEE SHOWCASE (Hover to pause, entire card is clickable, no clutter) */}
      <div
        ref={marqueeRef}
        className="w-full overflow-x-auto scrollbar-none py-4 px-4 sm:px-6 cursor-grab active:cursor-grabbing"
      >
        <div className="animate-clubs-marquee gap-8 sm:gap-10 flex items-stretch">
          {duplicatedClubs.map((club, idx) => (
            <Link
              key={`${club.slug}-${idx}`}
              href={`/clubs/${club.slug}`}
              className="group block w-[310px] sm:w-[350px] md:w-[380px] shrink-0 bg-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] transition-all duration-300 overflow-hidden shadow-none hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

              <div>
                {/* Photo Banner with Zoom and Sheen */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={club.image}
                    alt={club.title}
                    fill
                    sizes="(max-width: 640px) 310px, (max-width: 768px) 350px, 380px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Shimmer Light Sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#021B4E]/95 text-[#F5B83D] border border-[#C59B27]/50 uppercase tracking-wider backdrop-blur-sm shadow-none">
                      {club.category}
                    </span>
                  </div>

                  {/* Bottom Sub-badge on Photo */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <span className="text-[11px] font-semibold text-[#F5B83D] drop-shadow truncate">
                      {club.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body: Simple, Crisp, No Clutter */}
                <div className="p-7 sm:p-8">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#021B4E] group-hover:text-[#0334A0] transition-colors leading-snug">
                    {club.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {club.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Action: Clean Explore Link, No "Enroll" buttons */}
              <div className="p-7 pt-4 sm:p-8 sm:pt-4 border-t border-slate-100 flex items-center justify-between mt-auto bg-slate-50/50">
                <span className="text-xs font-bold text-[#0334A0] group-hover:text-[#021B4E] inline-flex items-center gap-1.5 transition-colors">
                  <span>Explore Details</span>
                  <span className="text-[#C59B27] group-hover:translate-x-1.5 transition-transform duration-300 font-bold">
                    &rarr;
                  </span>
                </span>

                <span className="text-[11px] font-semibold text-slate-400 group-hover:text-[#C59B27] transition-colors">
                  Click to View &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Expanding Photo Cards Animation (Pure Photo Effect, No Heading, No Sentence as Requested) */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="flex gap-2.5 sm:gap-4 h-[320px] sm:h-[400px] md:h-[450px] w-full">
          {CLUBS_DATA.map((item, idx) => {
            const isActive = idx === activeAccordion;

            return (
              <Link
                key={item.slug}
                href={`/clubs/${item.slug}`}
                onMouseEnter={() => setActiveAccordion(idx)}
                onClick={() => setActiveAccordion(idx)}
                className={`relative h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 cursor-pointer shadow-none group ${
                  isActive
                    ? "flex-[4] sm:flex-[5] lg:flex-[6] border-[#C59B27]"
                    : "flex-1 border-slate-200/90 hover:border-slate-400"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-75"
                  }`}
                />

                {/* Diagonal Light Sweep Sheen on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                {/* Bottom Number Badge & Title (Matching user reference image) */}
                <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-5 right-3 sm:right-5 z-20 flex items-center gap-3">
                  {/* Number Badge */}
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-none ${
                      isActive
                        ? "bg-[#C59B27] text-[#021B4E]"
                        : "bg-[#021B4E]/90 text-white/90 border border-white/20"
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Minimal Title Label revealed when expanded */}
                  <div
                    className={`transition-all duration-500 overflow-hidden whitespace-nowrap ${
                      isActive
                        ? "opacity-100 max-w-[400px] translate-x-0"
                        : "opacity-0 max-w-0 -translate-x-4 pointer-events-none"
                    }`}
                  >
                    <span className="text-[10px] sm:text-xs font-bold text-[#F5B83D] tracking-wider uppercase block">
                      {item.badge}
                    </span>
                    <span className="font-heading text-sm sm:text-lg font-bold text-white block">
                      {item.shortTitle}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
