"use client";

import Link from "next/link";

export default function AdmissionCTA() {
  return (
    <section
      className="py-8 sm:py-10 bg-white relative"
      id="admissions"
      aria-label="Admissions Open 2026-27"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Compact Signature Diagonal Admission Banner */}
        <div className="relative overflow-hidden rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none bg-[#011236] text-white p-6 sm:p-8 lg:p-9 border-2 border-[#FFD700] shadow-none group transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FFD700]/0 to-transparent group-hover:via-[#FFD700] transition-all duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left: Admissions Open Title & Key Badges */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FFD700] uppercase">
                  Admissions Open &bull; Academic Year 2026–2027
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                Admissions Open 2026–2027
              </h2>

              {/* Minimal Clean Text Badges (No Icons) */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
                <span className="bg-white/10 px-3 py-1 rounded-tl-[6px] rounded-br-[6px] border border-white/15">
                  MKU Affiliated
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-tl-[6px] rounded-br-[6px] border border-white/15">
                  100% Placement Record
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-tl-[6px] rounded-br-[6px] border border-white/15">
                  College Bus Transport
                </span>
              </div>
            </div>

            {/* Right: Action Buttons (Signature Diagonal Boxing, No Icons) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <Link
                href="/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-[#FFD700] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-black border-2 border-[#FFD700] transition-all duration-300 shadow-none whitespace-nowrap"
              >
                <span>Apply Online for 2026</span>
                <span>&rarr;</span>
              </Link>

              <a
                href="tel:+918072297109"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-[#FBF2D4] hover:text-black border border-white/25 hover:border-[#FFD700] transition-all duration-300 shadow-none whitespace-nowrap"
              >
                Call: +91 80722 97109
              </a>

              <a
                href="https://wa.me/918072297109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-[#F5B83D] bg-white/10 hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27]/50 hover:border-[#C59B27] transition-all duration-300 shadow-none whitespace-nowrap"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
