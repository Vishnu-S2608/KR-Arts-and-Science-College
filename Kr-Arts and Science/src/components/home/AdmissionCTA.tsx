"use client";

import Link from "next/link";
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, Bus, Award } from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white relative" id="admissions">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-8 sm:p-14 md:p-16 shadow-2xl border border-sky-800/50">
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[100px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Admissions Open for Academic Year 2026-2027</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Shape Your Collegiate Journey?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              Join KR Arts And Science College. Benefit from dedicated university faculty mentorship, 
              hi-tech air conditioned laboratories, extensive college bus routes across Madurai district, and a documented 100% placement assurance.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                MKU University Affiliated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                100% Placement Record
              </span>
              <span className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-emerald-400" />
                Free / Subsidized Bus Commute
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply"
                className="gold-shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Apply Online for 2026</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href="tel:+918072297109"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call Helpline: +91 80722 97109</span>
              </a>

              <a
                href="https://wa.me/918072297109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-bold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
