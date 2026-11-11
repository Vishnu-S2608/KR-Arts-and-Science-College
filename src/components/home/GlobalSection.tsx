"use client";

import Link from "next/link";
import { Globe, Plane, ArrowRight, CheckCircle2, Award } from "lucide-react";

export default function GlobalSection() {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-[#FBF2D4]/15 via-white to-white relative"
      id="global"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[#0334A0] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Global Horizons &bull; Bilateral Alliances
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            International Academic MoUs &amp; Aviation Linkages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Expanding our rural scholars&apos; career orbits through verifiable
            cross-border university treaties and corporate aviation training
            centers.
          </p>
        </div>

        {/* 2 Flagship Global Cards (Pure White with Royal Blue & Warm Cream Accents) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Shinawatra University MoU */}
          <div className="pure-white-card p-6 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF2D4] border border-[#0334A0]/20 text-[#0334A0] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#0334A0]" />
                  International University Bilateral MoU
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Pathum Thani, Thailand
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0334A0]/10 border border-[#0334A0]/20 flex items-center justify-center text-[#0334A0] shrink-0 group-hover:bg-[#0334A0] group-hover:text-white transition-colors duration-300">
                  <Globe className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0334A0] transition-colors">
                    Shinawatra University, Thailand
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    Bilateral Research &bull; Student &amp; Faculty Mobility
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Formalized during the ICIRI 2026 Academic Summit in Pathum
                Thani, Thailand. Enables KR College students and faculty to
                collaborate on global scientific publications, attend
                international symposia, and engage in cross-cultural knowledge
                exchange.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="p-3 rounded-xl bg-[#0334A0]/5 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Student Exchange</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0334A0]/5 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Faculty Mobility</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0334A0]/5 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Joint Research</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0334A0]/5 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Global Certifications</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0334A0] bg-[#FBF2D4] px-2.5 py-1 rounded-md border border-[#0334A0]/20">
                Verifiable International Treaty
              </span>
              <Link
                href="/events"
                className="text-xs font-bold text-[#0334A0] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Read MoU Chronicle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: LKP Academy Aviation Partnership */}
          <div className="pure-white-card p-6 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0334A0]/10 border border-[#0334A0]/20 text-[#0334A0] text-xs font-bold uppercase tracking-wider">
                  <Plane className="w-3.5 h-3.5 text-[#0334A0]" />
                  Aviation Industry Partner
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Airport Logistics
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FBF2D4] border border-[#0334A0]/20 flex items-center justify-center text-[#0334A0] shrink-0 group-hover:bg-[#0334A0] group-hover:text-white transition-colors duration-300">
                  <Plane className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0334A0] transition-colors">
                    LKP Academy Aviation MoU
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    BBA Aviation Ground Operations &amp; Airport Immersion
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Direct academic integration for our BBA Aviation Management
                students. Encompasses airport terminal operations, passenger
                check-in simulation, air cargo logistics software, and scheduled
                field training visits to Madurai International Airport.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="p-3 rounded-xl bg-[#FBF2D4]/30 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Airport Operations</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FBF2D4]/30 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Ticketing Softwares</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FBF2D4]/30 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Madurai Airport Visits</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FBF2D4]/30 border border-[#0334A0]/10 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <span>Aviation Placement Links</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0334A0] bg-[#0334A0]/10 px-2.5 py-1 rounded-md border border-[#0334A0]/20">
                Industry-Certified Curriculum
              </span>
              <Link
                href="/events/lkp-aviation"
                className="text-xs font-bold text-[#0334A0] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>View BBA Aviation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
