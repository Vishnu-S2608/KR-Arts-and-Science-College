"use client";

import Link from "next/link";
import {
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Bus,
  Award,
} from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section
      className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white via-[#FBF2D4]/15 to-white relative"
      id="admissions"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Signature Diagonal Container Box */}
        <div className="relative overflow-hidden rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none bg-[#011236] text-white p-8 sm:p-14 md:p-16 border-2 border-[#C59B27] shadow-none group transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F5B83D]/0 to-transparent group-hover:via-[#F5B83D] transition-all duration-500 pointer-events-none" />

          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0334A0]/25 blur-[100px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FBF2D4]/10 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Top Eyebrow with Golden Lines */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 sm:w-12 h-[2px] bg-[#F5B83D] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#F5B83D] uppercase">
                Admissions Open for Academic Year 2026-2027
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-[#F5B83D] rounded-full" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Shape Your Collegiate Journey?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              Join KR Arts And Science College. Benefit from dedicated
              university faculty mentorship, hi-tech air conditioned
              laboratories, extensive college bus routes across Madurai
              district, and a documented 100% placement assurance.
            </p>

            {/* Quick Guarantees Strip with Signature Boxing */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-200">
              <span className="flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#F5B83D]" />
                MKU University Affiliated
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-white/10">
                <Award className="w-4 h-4 text-[#F5B83D]" />
                100% Placement Record
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none border border-white/10">
                <Bus className="w-4 h-4 text-emerald-400" />
                Free / Subsidized Bus Commute
              </span>
            </div>

            {/* Action CTA Buttons with Signature Diagonal Boxing */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none text-sm sm:text-base font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border-2 border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none group/btn"
              >
                <span>Apply Online for 2026</span>
                <ArrowRight className="w-4 h-4 text-[#F5B83D] group-hover/btn:text-[#021B4E] group-hover/btn:translate-x-1 transition-all" />
              </Link>

              <a
                href="tel:+918072297109"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-[#FBF2D4] hover:text-[#021B4E] border-2 border-white/30 hover:border-[#C59B27] transition-all duration-300 shadow-none"
              >
                <Phone className="w-4 h-4 text-[#F5B83D]" />
                <span>Call Helpline: +91 80722 97109</span>
              </a>

              <a
                href="https://wa.me/918072297109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none text-sm sm:text-base font-bold text-[#F5B83D] bg-white/10 hover:bg-[#FBF2D4] hover:text-[#021B4E] border-2 border-[#C59B27]/60 hover:border-[#C59B27] transition-all duration-300 shadow-none"
              >
                <MessageSquare className="w-4 h-4 text-[#F5B83D]" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
