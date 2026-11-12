"use client";

import Image from "next/image";
import Link from "next/link";
import type { ClubDetail } from "@/data/clubsData";

interface Props {
  club: ClubDetail;
  allClubs: ClubDetail[];
}

export default function ClubPageClient({ club, allClubs }: Props) {
  const otherClubs = allClubs.filter((c) => c.slug !== club.slug);

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-900">
      {/* 1. Breadcrumbs Bar */}
      <div className="bg-[#FAF8F2] border-b border-slate-200/80 py-3.5">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#0334A0] transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <Link href="/clubs" className="hover:text-[#0334A0] transition-colors">
            Clubs &amp; Societies
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-[#021B4E] font-bold truncate">
            {club.shortTitle}
          </span>
        </div>
      </div>

      {/* 2. Hero Banner with Signature Diagonal Boxing */}
      <section className="relative bg-[#021B4E] text-white overflow-hidden py-14 sm:py-18">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(3,52,160,0.6),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(197,155,39,0.25),transparent_50%)]" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[11px] font-bold bg-[#C59B27] text-slate-950 uppercase tracking-wider shadow-none">
                {club.badge}
              </span>
              <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[11px] font-bold bg-white/10 text-white border border-white/20 shadow-none">
                {club.category}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {club.title}
            </h1>

            <p className="mt-2 text-sm sm:text-base font-semibold text-[#F5B83D]">
              Motto: &ldquo;{club.motto}&rdquo;
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              {club.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Content Two-Column Layout */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Column */}
          <main className="lg:col-span-8 space-y-10">
            {/* Interactive Photo Banner with Zoom on Hover and Sheen */}
            <div className="relative aspect-[16/9] w-full rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none overflow-hidden border-2 border-slate-200 hover:border-[#C59B27] transition-all duration-500 group bg-slate-900 shadow-none">
              <Image
                src={club.image}
                alt={club.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E]/90 border border-[#C59B27]/50 text-xs font-bold text-[#F5B83D]">
                {club.affiliation}
              </div>

              <div className="absolute bottom-4 left-6 right-6 z-20 text-white">
                <span className="text-xs font-bold text-[#F5B83D] uppercase tracking-wider block mb-1">
                  Active Student Unit
                </span>
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-white">
                  {club.title}
                </h3>
              </div>
            </div>

            {/* Overview Card */}
            <div className="bg-white p-7 sm:p-9 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#C59B27]" />
                <h2 className="font-heading text-2xl font-bold text-[#021B4E]">
                  About {club.shortTitle}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {club.overview}
              </p>
            </div>

            {/* Aims & Core Objectives */}
            <div className="bg-white p-7 sm:p-9 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C59B27]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#021B4E]">
                  Aims &amp; Core Objectives
                </h3>
              </div>
              <div className="space-y-3">
                {club.aims.map((aim, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3 shadow-none"
                  >
                    <span className="font-mono text-xs font-bold text-[#C59B27] mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{aim}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Activities & Training Modules */}
            <div className="bg-white p-7 sm:p-9 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#C59B27]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#021B4E]">
                  Training Activities &amp; Initiatives
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {club.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-slate-50/70 border border-slate-200 hover:border-[#C59B27] transition-all duration-200 shadow-none flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-[#0334A0] block mb-2">
                        MODULE 0{idx + 1}
                      </span>
                      <h4 className="font-heading text-base font-bold text-[#021B4E] mb-2">
                        {act.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Benefits & Opportunities */}
            <div className="bg-white p-7 sm:p-9 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C59B27]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#021B4E]">
                  Student Benefits &amp; Career Advantages
                </h3>
              </div>
              <div className="space-y-3">
                {club.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-[#0334A0]/5 border border-[#0334A0]/15 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start gap-3 shadow-none"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0334A0] mt-1.5 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Right Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            {/* Unit Facts Card */}
            <div className="bg-white p-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border-2 border-slate-200 shadow-none">
              <h4 className="font-heading text-base font-bold text-[#021B4E] mb-4 pb-2 border-b border-slate-100">
                Unit At A Glance
              </h4>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-bold text-slate-900 text-right">
                    {club.category}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Motto:</span>
                  <span className="font-bold text-[#C59B27] text-right italic">
                    {club.motto}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Affiliation:</span>
                  <span className="font-bold text-[#0334A0] text-right">
                    {club.badge}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Eligibility:</span>
                  <span className="font-bold text-slate-900">
                    All Enrolled Students
                  </span>
                </div>
              </div>
            </div>

            {/* Officer in Charge Card */}
            <div className="bg-slate-50 p-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
              <span className="text-[10px] font-bold text-[#C59B27] uppercase tracking-wider block mb-1">
                FACULTY COORDINATOR
              </span>
              <h4 className="font-heading text-base font-bold text-[#021B4E]">
                {club.officerInCharge.role}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {club.officerInCharge.department}
              </p>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
                Coordinating annual schedules, camps, student registrations, and university examinations.
              </p>
            </div>

            {/* Other Clubs Switcher */}
            <div className="bg-white p-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
              <h4 className="font-heading text-base font-bold text-[#021B4E] mb-3 pb-2 border-b border-slate-100">
                Explore Other Clubs &amp; Wings
              </h4>

              <div className="space-y-2">
                {otherClubs.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/clubs/${other.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-semibold text-slate-700 hover:text-[#021B4E] hover:bg-[#FAF8F2] border border-transparent hover:border-slate-200 transition-all group"
                  >
                    <span className="truncate">{other.shortTitle}</span>
                    <span className="text-slate-400 group-hover:text-[#C59B27] group-hover:translate-x-0.5 transition-all shrink-0">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Information Desk */}
            <div className="bg-[#021B4E] text-white p-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-[#C59B27]/50 shadow-none">
              <span className="text-[10px] font-bold text-[#F5B83D] uppercase tracking-wider block mb-1">
                CAMPUS INFORMATION DESK
              </span>
              <h4 className="font-heading text-base font-bold text-white mb-2">
                Questions on Student Activities?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Reach out to our campus office for event dates, participation criteria, and tournament schedules.
              </p>
              <a
                href="tel:+918012530006"
                className="w-full flex items-center justify-center py-2.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors shadow-none"
              >
                Call +91 80125 30006
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
