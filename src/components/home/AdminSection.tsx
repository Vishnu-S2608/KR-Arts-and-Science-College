"use client";

import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";

const LEADERS = [
  {
    name: "Mr. K. Pandiaraj",
    title: "Secretary & Correspondent",
    roleBadge: "Trustee • Governance",
    icon: Award,
    photo: "/images/leadership/pandiaraj.jpg",
    bio: "Spearheading the foundational mission of KR Educational and Charitable Trust to bring affordable, high-tech collegiate education, free transport access, and corporate recruitment linkages to rural youths.",
    footerLeft: "KR Educational & Charitable Trust",
    footerRight: "Peraiyur Campus",
  },
  {
    name: "Dr. P. S. Senthilkumar",
    title: "Principal & Head of Faculty",
    roleBadge: "Academic Executive",
    icon: GraduationCap,
    photo: "/images/leadership/senthilkumar.jpg",
    bio: "Directing university syllabus delivery, research compliance under Madurai Kamaraj University, faculty development programs, laboratory execution, and 100% placement coaching regimens.",
    footerLeft: "Ph.D. Academic Leadership",
    footerRight: "MKU Affiliation",
  },
];

export default function AdminSection() {
  return (
    <section
      className="pt-2 md:pt-4 pb-6 sm:pb-8 bg-white relative"
      id="administration"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
              Leadership &bull; Governance
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#021B4E] tracking-tight">
            Institutional Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dedicated administrative guides committed to academic rigour,
            student character development, and future placement excellence.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none p-5 sm:p-6 border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] transition-all duration-300 group flex flex-col justify-between shadow-none hover:-translate-y-1.5 relative overflow-hidden cursor-pointer"
            >
              {/* Top Accent Shimmer on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

              <div>
                {/* Real High-Resolution Portrait Photo */}
                <div className="relative aspect-[16/10] w-full rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-100 mb-5 border border-slate-200 shadow-sm">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Role Pill Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E]/90 backdrop-blur-sm text-[#F5B83D] border border-[#C59B27] text-[10px] sm:text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-none">
                    <leader.icon className="w-3.5 h-3.5 text-[#F5B83D]" />
                    <span>{leader.roleBadge}</span>
                  </div>
                </div>

                {/* Name & Designation */}
                <h3 className="font-heading text-2xl font-bold text-[#021B4E] group-hover:text-[#0334A0] transition-colors">
                  {leader.name}
                </h3>
                <div className="text-sm font-bold text-[#0334A0] mt-1 mb-3">
                  {leader.title}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              {/* Card Footer Strip */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">
                  {leader.footerLeft}
                </span>
                <span className="text-[#0334A0] font-bold bg-[#FBF2D4] px-2.5 py-0.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none border border-[#C59B27]/30">
                  {leader.footerRight}
                </span>
              </div>

              {/* Bottom Glowing Border Line Expanding on Hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
