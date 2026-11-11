"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
} from "lucide-react";
import placementsData from "@/data/placements.json";

interface Student {
  id: string;
  name: string;
  offers: number;
  photo: string;
}

const RECRUITERS_LIST = [
  {
    name: "Pothys Group",
    sector: "Retail & E-Commerce",
    logo: "/images/companies/pothys.png",
  },
  {
    name: "Theni Anantham",
    sector: "Retail & Commercial Hub",
    logo: "/images/companies/theni-anantham.webp",
  },
  {
    name: "Besant Technologies",
    sector: "IT & Software Training",
    logo: "/images/companies/besant.png",
  },
  {
    name: "Best Money Gold",
    sector: "Financial Services",
    logo: "/images/companies/best-money-gold.jpg",
  },
  {
    name: "Maruti Suzuki",
    sector: "Automotive & Logistics",
    logo: "/images/companies/maruti-suzuki.jpg",
  },
  {
    name: "Bhima Jewellers",
    sector: "Luxury Retail & Bullion",
    logo: "/images/companies/bhima.png",
  },
  {
    name: "BDreamz Global",
    sector: "IT Solutions & BPO",
    logo: "/images/companies/bdreamz.png",
  },
];

export default function PlacementsSection() {
  const students = [...(placementsData as Student[])].sort((a, b) => {
    if (b.offers !== a.offers) return b.offers - a.offers;
    return a.name.localeCompare(b.name);
  });

  // Divide the 18 students into 3 balanced rows (6 students each)
  const row1 = students.slice(0, 6);
  const row2 = students.slice(6, 12);
  const row3 = students.slice(12, 18);

  const renderStudentCard = (student: Student, key: string | number) => (
    <div
      key={key}
      className="w-[195px] sm:w-[220px] shrink-0 bg-white rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none p-3 border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5 relative cursor-pointer overflow-hidden shadow-none"
    >
      {/* Top Accent Shimmer on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

      {/* Photo Container - Clean 3:4 Portrait with Defined Borders */}
      <div className="relative aspect-[3/4] w-full rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-100 mb-2.5 border border-slate-200/90 shadow-sm">
        <Image
          src={student.photo}
          alt={student.name}
          fill
          unoptimized
          sizes="220px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Offer Badge Overlay with Signature Cut */}
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] text-[10px] sm:text-[11px] font-black tracking-wide flex items-center gap-1 shadow-none">
          <span>
            {student.offers} {student.offers === 1 ? "Offer" : "Offers"}
          </span>
        </div>
      </div>

      {/* Student Details - Perfectly Centered */}
      <div className="text-center w-full px-1">
        <h4
          className="font-heading text-xs sm:text-sm font-bold text-[#021B4E] truncate group-hover:text-[#0334A0] transition-colors"
          title={student.name}
        >
          {student.name}
        </h4>
        <div className="inline-flex items-center justify-center gap-1 text-[10px] text-emerald-600 font-bold mt-1 bg-emerald-50/80 px-2 py-0.5 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none border border-emerald-200/60 max-w-full">
          <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-600" />
          <span className="truncate">Placed Successfully</span>
        </div>
      </div>

      {/* Bottom Glowing Border Line Expanding on Hover */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
    </div>
  );

  return (
    <section
      className="pt-8 sm:pt-10 pb-4 sm:pb-5 bg-gradient-to-b from-white via-[#FBF2D4]/15 to-white relative overflow-hidden"
      id="placements"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-9">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
                100% Placement Achievement &bull; Batch 2023-26
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#021B4E] tracking-tight">
              From Rural Classrooms to High-Growth Corporate Careers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Every single graduating applicant secured multiple appointment
              letters, proving the efficacy of our industry-aligned training,
              soft skills drills, and corporate placement cell.
            </p>
          </div>

          {/* Signature Diagonal Stat Boxes */}
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
            {/* 18 / 18 Box */}
            <div className="relative overflow-hidden bg-[#021B4E] text-white p-4 sm:p-5 rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none border-2 border-[#C59B27] min-w-[140px] sm:min-w-[160px] text-center transition-all duration-300 hover:-translate-y-1 group">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F5B83D]/0 to-transparent group-hover:via-[#F5B83D] transition-all duration-500 pointer-events-none" />
              <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#F5B83D] flex items-center justify-center gap-1 mb-1">
                <Sparkles className="w-3 h-3 text-[#F5B83D]" />
                100% Success
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
                18 <span className="text-[#F5B83D]">/</span> 18
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider mt-1.5">
                Students Placed
              </div>
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
            </div>

            {/* 70+ Offer Letters Box */}
            <div className="relative overflow-hidden bg-[#FBF2D4] text-[#021B4E] p-4 sm:p-5 rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none border-2 border-[#021B4E] hover:border-[#C59B27] min-w-[140px] sm:min-w-[160px] text-center transition-all duration-300 hover:-translate-y-1 group">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />
              <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#0334A0] flex items-center justify-center gap-1 mb-1">
                <Award className="w-3 h-3 text-[#0334A0]" />
                Multi-Offer
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#021B4E] tracking-tight leading-none">
                70<span className="text-[#C59B27]">+</span>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#021B4E]/80 uppercase tracking-wider mt-1.5">
                Offer Letters
              </div>
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Corporate Recruiters Section (Single Row Marquee of Cards) */}
        <div className="mb-8 sm:mb-9">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C59B27]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Our Prominent Corporate Recruiters
              </span>
            </div>
            <span className="text-xs font-semibold text-[#0334A0] bg-[#FBF2D4] px-2.5 py-0.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none border border-[#C59B27]/30">
              7+ Leading Brands
            </span>
          </div>

          {/* Marquee Track of Recruiter Cards */}
          <div className="w-full overflow-hidden py-3 relative">
            <div className="animate-recruiter-marquee items-center gap-4 py-2">
              {[...RECRUITERS_LIST, ...RECRUITERS_LIST, ...RECRUITERS_LIST].map(
                (rec, idx) => (
                  <div
                    key={idx}
                    className="w-[200px] sm:w-[220px] shrink-0 bg-white p-3 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center group cursor-pointer shadow-none relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />
                    <div className="w-full h-16 relative flex items-center justify-center bg-slate-50/70 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none p-2 group-hover:bg-[#FBF2D4]/30 transition-colors border border-slate-100">
                      <Image
                        src={rec.logo}
                        alt={rec.name}
                        fill
                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-2.5 w-full">
                      <h4
                        className="text-xs font-bold text-slate-900 group-hover:text-[#0334A0] transition-colors truncate"
                        title={rec.name}
                      >
                        {rec.name}
                      </h4>
                      <span
                        className="text-[10px] text-slate-500 block truncate mt-0.5"
                        title={rec.sector}
                      >
                        {rec.sector}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Header for Placed Students 3-Row Multi-Directional Marquee */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pt-6 border-t border-slate-200/80">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#C59B27]" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#021B4E]">
                Honor Roll: Placed Graduates (18 / 18)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified corporate appointment letters secured per graduating
              student &bull; Multi-Row Live Showcase
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] text-xs font-bold shadow-none">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B83D]" />
            <span>All 18 Placed &bull; 70+ Total Offers</span>
          </div>
        </div>
      </div>

      {/* 3-Row Alternating Direction Marquee Showcase (Full Width Edge-to-Edge) */}
      <div className="relative w-full overflow-hidden space-y-2 sm:space-y-3 py-4">
        {/* Row 1: Leftward Motion */}
        <div className="overflow-hidden py-3">
          <div className="animate-student-row1 gap-4 py-2">
            {[...row1, ...row1, ...row1, ...row1].map((s, idx) =>
              renderStudentCard(s, `r1-${idx}`),
            )}
          </div>
        </div>

        {/* Row 2: Rightward Motion (Alternating Direction) */}
        <div className="overflow-hidden py-3">
          <div className="animate-student-row2 gap-4 py-2">
            {[...row2, ...row2, ...row2, ...row2].map((s, idx) =>
              renderStudentCard(s, `r2-${idx}`),
            )}
          </div>
        </div>

        {/* Row 3: Leftward Motion (Same as Row 1) */}
        <div className="overflow-hidden py-3">
          <div className="animate-student-row3 gap-4 py-2">
            {[...row3, ...row3, ...row3, ...row3].map((s, idx) =>
              renderStudentCard(s, `r3-${idx}`),
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Placement Call to Action Banner */}
        <div className="mt-6 sm:mt-7 text-center p-6 sm:p-7 bg-[#FAFBFD] rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-[#0334A0]/20 hover:border-[#C59B27] transition-all duration-300 relative overflow-hidden group flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-lg font-bold text-[#021B4E]">
              Want to secure an assured career placement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Join KR Arts And Science College for the 2026-27 academic session.
            </p>
          </div>

          <Link
            href="/apply"
            className="px-5 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold inline-flex items-center gap-2 shrink-0 text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none"
          >
            <span>Apply for Admission Now</span>
            <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover:text-[#021B4E] transition-colors" />
          </Link>
          <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
