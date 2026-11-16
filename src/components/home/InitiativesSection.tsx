"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLUBS_DATA } from "@/data/clubsData";

export default function InitiativesSection() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] relative border-t border-slate-200/80 overflow-hidden"
      id="clubs"
      aria-label="Student Clubs, NCC Cadet Wing & NSS Community Outreach"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 sm:w-12 h-[2px] bg-[#FFD700] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-black uppercase">
                Student Life &bull; Beyond Academics
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Student Clubs, NCC Cadet Wing &amp; NSS Outreach
            </h2>
          </div>

          <Link
            href="/clubs"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-[#FFD700] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-black border border-[#FFD700] transition-all duration-300 shadow-none shrink-0 self-start md:self-auto"
          >
            <span>All Clubs Directory</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Interactive Expanding Photo Image Viewer */}
        <div className="flex gap-2.5 sm:gap-4 h-[340px] sm:h-[420px] md:h-[480px] w-full">
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
                    ? "flex-[4] sm:flex-[5] lg:flex-[6] border-[#FFD700]"
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

                {/* Bottom Title Label */}
                <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-5 right-3 sm:right-5 z-20">
                  <div
                    className={`transition-all duration-500 overflow-hidden whitespace-nowrap ${
                      isActive
                        ? "opacity-100 max-w-[400px] translate-x-0"
                        : "opacity-0 max-w-0 -translate-x-4 pointer-events-none"
                    }`}
                  >
                    <span className="text-[10px] sm:text-xs font-bold text-[#FFD700] tracking-wider uppercase block">
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
