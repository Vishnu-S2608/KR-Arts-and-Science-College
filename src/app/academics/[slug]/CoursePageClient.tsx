"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CourseDetail } from "@/data/coursesData";

interface Props {
  course: CourseDetail;
  allCourses: CourseDetail[];
}

export default function CoursePageClient({ course, allCourses }: Props) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "laboratories" | "career" | "eligibility"
  >("overview");
  const [selectedSem, setSelectedSem] = useState<number>(1);

  const currentSemester =
    course.curriculum.find((s) => s.semNumber === selectedSem) ||
    course.curriculum[0];

  const totalSemCredits = currentSemester.courses.reduce(
    (sum, c) => sum + c.credits,
    0
  );

  const otherCourses = allCourses.filter((c) => c.slug !== course.slug);

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-900">
      {/* 1. Breadcrumbs Bar */}
      <div className="bg-[#FAF8F2] border-b border-slate-200/80 py-3.5">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#0334A0] transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <Link
            href="/#programmes"
            className="hover:text-[#0334A0] transition-colors"
          >
            Academics
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-[#021B4E] font-bold truncate">
            {course.title}
          </span>
        </div>
      </div>

      {/* 2. Department Hero Banner with Signature Diagonal Boxing */}
      <section className="relative bg-[#021B4E] text-white overflow-hidden py-14 sm:py-18">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(3,52,160,0.6),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(197,155,39,0.25),transparent_50%)]" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Department Metadata & Titles */}
            <div className="lg:col-span-7">
              {/* Badges Bar (Signature Diagonal Boxing) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[11px] font-bold bg-[#C59B27] text-slate-950 uppercase tracking-wider shadow-none">
                  {course.affiliation}
                </span>
                <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[11px] font-bold bg-white/10 text-white border border-white/20 shadow-none">
                  {course.duration}
                </span>
                <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[11px] font-bold bg-white/10 text-white border border-white/20 shadow-none">
                  {course.categoryLabel}
                </span>
              </div>

              {/* Course Title */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              {/* Department Name */}
              <p className="mt-2 text-sm sm:text-base font-semibold text-[#F5B83D]">
                {course.department}
              </p>

              {/* Tagline */}
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                {course.tagline}
              </p>

              {/* CTA Buttons (Signature Diagonal Boxing) */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/apply?course=${encodeURIComponent(course.title)}`}
                  className="px-7 py-3.5 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-sm font-bold text-slate-950 bg-[#C59B27] hover:bg-[#F5B83D] transition-all border border-[#C59B27] shadow-none"
                >
                  Apply for 2026-27 Admission &rarr;
                </Link>

                <a
                  href="tel:+918012530006"
                  className="px-6 py-3.5 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all shadow-none"
                >
                  Call Admission Desk (+91 80125 30006)
                </a>
              </div>
            </div>

            {/* Right Column: Featured Course Photo Card (Signature Diagonal Boxing) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none overflow-hidden border-2 border-[#C59B27] bg-slate-900 group cursor-pointer shadow-none">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={`${course.title} Department at KR Arts and Science College`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Animated Light Sweep across Photo on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#F5B83D] tracking-wider block">
                      Program Code: {course.number}
                    </span>
                    <span className="font-heading font-bold text-sm text-white">
                      {course.degree}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none bg-[#021B4E]/90 border border-[#C59B27]/50 text-[11px] font-semibold text-[#F5B83D]">
                    Admissions Open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Navigation Tabs Bar (Signature Diagonal Boxing) */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {[
              { id: "overview", label: "Overview & Objectives" },
              { id: "curriculum", label: "Curriculum & Syllabus" },
              { id: "laboratories", label: "Laboratories & Facilities" },
              { id: "career", label: "Career & Placements" },
              { id: "eligibility", label: "Eligibility & Admission" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-5 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer shadow-none ${
                    isActive
                      ? "bg-[#021B4E] text-[#F5B83D] border-2 border-[#C59B27]"
                      : "text-slate-600 hover:text-[#021B4E] hover:bg-[#FBF2D4] border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Main Body Content: Two-Column Layout (All with Signature Diagonal Boxing) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-10">
            {/* TAB 1: OVERVIEW & OBJECTIVES */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-fade-in">
                {/* About Department Card */}
                <div className="bg-white p-6 sm:p-8 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-[#C59B27]" />
                    <h2 className="font-heading text-2xl font-bold text-[#021B4E]">
                      About the Programme
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {course.overview}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100">
                    {course.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none bg-[#FAF8F2] border border-[#C59B27]/30 text-xs font-semibold text-slate-800 shadow-none"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#C59B27] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engaging Interactive Classroom Photo Banner with Sheen & Zoom */}
                <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full rounded-tl-[22px] rounded-br-[22px] rounded-tr-none rounded-bl-none overflow-hidden border-2 border-slate-200 hover:border-[#C59B27] transition-all duration-500 group bg-slate-900 cursor-pointer shadow-none">
                  <Image
                    src="/images/about/classroom.jpg"
                    alt="Academic Interactive Classrooms at KR College"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F5B83D] animate-ping" />
                    <span>Smart Interactive Classrooms</span>
                  </div>

                  {/* Bottom Text Description */}
                  <div className="absolute bottom-4 left-6 right-6 z-20 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-heading text-base sm:text-lg font-bold text-[#F5B83D]">
                      Modern Pedagogical Learning Environment
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1">
                      Air-conditioned lecture facilities with digital audio-visual connectivity, seminar pods, and collaborative seating.
                    </p>
                  </div>
                </div>

                {/* Department Vision & Mission Cards (Signature Diagonal Boxing) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision Card */}
                  <div className="bg-white p-6 sm:p-7 rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none border border-slate-200 hover:border-[#C59B27] transition-all duration-200 shadow-none">
                    <div className="mb-3">
                      <span className="px-3 py-1 text-[11px] font-bold text-[#C59B27] bg-[#FAF8F2] border border-[#C59B27]/40 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none uppercase tracking-wider inline-block">
                        Department Vision
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {course.vision}
                    </p>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-white p-6 sm:p-7 rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none border border-slate-200 hover:border-[#021B4E] transition-all duration-200 shadow-none">
                    <div className="mb-3">
                      <span className="px-3 py-1 text-[11px] font-bold text-[#021B4E] bg-blue-50/80 border border-[#021B4E]/30 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none uppercase tracking-wider inline-block">
                        Department Mission
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {course.mission.map((m, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#021B4E] mt-2 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Program Educational Objectives (PEOs) with Signature Diagonal Boxing */}
                <div className="bg-white p-6 sm:p-8 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
                  <h3 className="font-heading text-xl font-bold text-[#021B4E] mb-4">
                    Program Educational Objectives (PEOs)
                  </h3>
                  <div className="space-y-3">
                    {course.peos.map((peo, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-none"
                      >
                        {peo}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Outcomes (POs) with Signature Diagonal Boxing */}
                <div className="bg-white p-6 sm:p-8 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
                  <h3 className="font-heading text-xl font-bold text-[#021B4E] mb-4">
                    Program Outcomes (POs)
                  </h3>
                  <div className="space-y-3">
                    {course.pos.map((po, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3 shadow-none"
                      >
                        <span className="font-mono text-xs font-bold text-[#021B4E] mt-0.5">
                          0{idx + 1}.
                        </span>
                        <span>{po}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CURRICULUM & SYLLABUS */}
            {activeTab === "curriculum" && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-6 sm:p-8 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="w-8 h-[2px] bg-[#C59B27]" />
                        <h2 className="font-heading text-2xl font-bold text-[#021B4E]">
                          Curriculum &amp; Syllabus
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Madurai Kamaraj University CBCS Scheme (Semesters I to VI)
                      </p>
                    </div>

                    <Link
                      href={`/apply?course=${encodeURIComponent(course.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0334A0] hover:text-[#021B4E]"
                    >
                      <span>Apply with this Syllabus &rarr;</span>
                    </Link>
                  </div>

                  {/* Semester Tabs (Signature Diagonal Boxing) */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none mb-6">
                    {course.curriculum.map((sem) => (
                      <button
                        key={sem.semNumber}
                        onClick={() => setSelectedSem(sem.semNumber)}
                        className={`px-4 py-2 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-bold transition-all cursor-pointer shadow-none ${
                          selectedSem === sem.semNumber
                            ? "bg-[#021B4E] text-[#F5B83D] border border-[#C59B27]"
                            : "bg-slate-100 text-slate-700 hover:bg-[#FBF2D4]"
                        }`}
                      >
                        {sem.title}
                      </button>
                    ))}
                  </div>

                  {/* Course Table for Selected Semester */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-y border-slate-200">
                          <th className="py-3 px-4">Course Code</th>
                          <th className="py-3 px-4">Subject Title</th>
                          <th className="py-3 px-4">Course Type</th>
                          <th className="py-3 px-4 text-right">Credits</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                        {currentSemester.courses.map((sub, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-[#FAF8F2] transition-colors"
                          >
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0334A0]">
                              {sub.code}
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-slate-900">
                              {sub.title}
                            </td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none text-[10px] font-bold ${
                                  sub.type === "Practical Lab"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : sub.type === "Project"
                                      ? "bg-purple-100 text-purple-800"
                                      : sub.type === "Elective"
                                        ? "bg-amber-100 text-amber-800"
                                        : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {sub.type}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right font-bold text-slate-700">
                              {sub.credits}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-slate-50 border-t border-slate-200 text-xs font-bold text-slate-900">
                          <td colSpan={3} className="py-3 px-4 text-right">
                            Total Semester Credits:
                          </td>
                          <td className="py-3 px-4 text-right text-[#0334A0]">
                            {totalSemCredits} Credits
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: LABORATORIES & FACILITIES */}
            {activeTab === "laboratories" && (
              <div className="space-y-6 animate-fade-in">
                {/* Engaging Laboratory Photo Banner with Sheen & Zoom */}
                <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full rounded-tl-[22px] rounded-br-[22px] rounded-tr-none rounded-bl-none overflow-hidden border-2 border-slate-200 hover:border-[#0334A0] transition-all duration-500 group bg-slate-900 cursor-pointer shadow-none">
                  <Image
                    src="/images/campus/computer-lab.png"
                    alt="High-Tech Laboratory Suites at KR Arts and Science College"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500" />

                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Specialized Practical Toolsets &amp; Workstations</span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 z-20 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-heading text-base sm:text-lg font-bold text-[#F5B83D]">
                      Experiential Engineering &amp; Science Facilities
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1">
                      Air-conditioned computing clusters, wet chemistry suites, language audio consoles, and sports science centers.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[2px] bg-[#C59B27]" />
                    <h2 className="font-heading text-2xl font-bold text-[#021B4E]">
                      Specialized Laboratories &amp; Research Centers
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">
                    Practical training suites equipped with modern instrumentation and industrial toolsets.
                  </p>

                  <div className="space-y-6">
                    {course.laboratories.map((lab, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none border border-slate-200 bg-gradient-to-br from-white to-[#FAFBFD] shadow-none"
                      >
                        <h3 className="font-heading text-lg font-bold text-[#021B4E] mb-2">
                          {lab.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {lab.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                            Key Equipment &amp; Software Toolkits:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {lab.equipment.map((eq, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-none"
                              >
                                &bull; {eq}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CAREER & PLACEMENTS */}
            {activeTab === "career" && (
              <div className="space-y-6 animate-fade-in">
                {/* Engaging Corporate Placement Photo Banner with Sheen & Zoom */}
                <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full rounded-tl-[22px] rounded-br-[22px] rounded-tr-none rounded-bl-none overflow-hidden border-2 border-slate-200 hover:border-[#C59B27] transition-all duration-500 group bg-slate-900 cursor-pointer shadow-none">
                  <Image
                    src="/images/hero/placement.jpg"
                    alt="Campus Placement Drives and Corporate Offers at KR College"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500" />

                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F5B83D] animate-ping" />
                    <span>100% Placement Assurance &bull; Corporate Recruiters</span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 z-20 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-heading text-base sm:text-lg font-bold text-[#F5B83D]">
                      Corporate Recruitment &bull; Multi-Industry Placements
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1">
                      Over 70+ verified appointment letters secured across IT, Banking, Aviation, Healthcare, and Corporate Sectors.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[2px] bg-[#C59B27]" />
                    <h2 className="font-heading text-2xl font-bold text-[#021B4E]">
                      Career Scope &amp; Professional Roles
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">
                    Graduates from this department transition into high-growth industry roles and public sectors.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {course.careerRoles.map((role, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-[#FAF8F2] border border-[#C59B27]/30 hover:border-[#021B4E] transition-colors shadow-none"
                      >
                        <h4 className="font-heading font-bold text-[#021B4E] text-base mb-1">
                          {role.role}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Top Recruiters */}
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-heading text-lg font-bold text-[#021B4E] mb-3">
                      Prominent Hiring Partners &amp; Recruiters
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {course.recruiters.map((rec, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-slate-100 hover:bg-[#FBF2D4] text-slate-800 text-xs font-bold border border-slate-200 transition-colors shadow-none"
                        >
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: ELIGIBILITY & ADMISSION with Signature Diagonal Boxing */}
            {activeTab === "eligibility" && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-6 sm:p-8 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[2px] bg-[#C59B27]" />
                    <h2 className="font-heading text-2xl font-bold text-[#021B4E]">
                      Eligibility &amp; Admission Process
                    </h2>
                  </div>

                  {/* Academic Eligibility Criteria Box with Signature Diagonal Boxing */}
                  <div className="my-6 p-6 sm:p-7 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-[#FAF8F2] border border-[#C59B27]/40 shadow-none">
                    <span className="px-3 py-1 text-[11px] font-bold text-[#021B4E] bg-white border border-[#C59B27]/30 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none uppercase tracking-wider inline-block mb-3">
                      Academic Eligibility Criteria
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                      {course.eligibility}
                    </p>
                  </div>

                  {/* Admission Steps with Signature Diagonal Boxing */}
                  <h3 className="font-heading text-lg font-bold text-[#021B4E] mb-3">
                    Simple 3-Step Admission Process:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      {
                        step: "01",
                        title: "Submit Online Application",
                        desc: "Fill basic details & choose your preferred programme.",
                      },
                      {
                        step: "02",
                        title: "Document Verification",
                        desc: "Submit 10th & 12th marksheets & transfer certificates.",
                      },
                      {
                        step: "03",
                        title: "Seat Confirmation",
                        desc: "Receive admission confirmation letter & join orientation.",
                      },
                    ].map((st, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 shadow-none"
                      >
                        <span className="font-mono text-xl font-bold text-[#C59B27]">
                          {st.step}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">
                          {st.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">{st.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/apply?course=${encodeURIComponent(course.title)}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-sm font-bold text-slate-950 bg-[#C59B27] hover:bg-[#F5B83D] transition-colors shadow-none"
                    >
                      <span>Proceed to Online Application &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Right Sticky Sidebar (All Signature Diagonal Boxing, Zero Box Shadow) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            {/* Quick Programme Facts Card */}
            <div className="bg-white p-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border-2 border-slate-200 shadow-none">
              <h3 className="font-heading text-lg font-bold text-[#021B4E] mb-4 pb-2 border-b border-slate-100">
                Programme At a Glance
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Degree:</span>
                  <span className="font-bold text-slate-900 text-right">
                    {course.degree}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-bold text-slate-900">
                    3 Years (6 Semesters)
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Affiliation:</span>
                  <span className="font-bold text-[#0334A0]">
                    Madurai Kamaraj Univ.
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Study Mode:</span>
                  <span className="font-bold text-slate-900">Full Time Regular</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Status:</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Admissions Open</span>
                  </span>
                </div>
              </div>

              <Link
                href={`/apply?course=${encodeURIComponent(course.title)}`}
                className="mt-6 w-full py-3 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-center block text-slate-950 bg-[#C59B27] hover:bg-[#F5B83D] transition-colors shadow-none"
              >
                Apply for this Degree &rarr;
              </Link>
            </div>

            {/* Direct Admission Helpline Card (Signature Diagonal Boxing) */}
            <div className="bg-[#021B4E] text-white p-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-[#C59B27]/50 shadow-none">
              <span className="text-[10px] font-bold text-[#F5B83D] uppercase tracking-wider block mb-1">
                ADMISSION COUNSELING
              </span>
              <h4 className="font-heading text-lg font-bold text-white mb-2">
                Need Help Choosing?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Speak directly with our academic admissions advisors for fee structure, bus transport routes, and hostel assistance.
              </p>

              <div className="space-y-2.5">
                <a
                  href="tel:+918012530006"
                  className="w-full flex items-center justify-center py-2.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors shadow-none"
                >
                  Call +91 80125 30006
                </a>

                <a
                  href="https://wa.me/918012530006?text=Hello%20KR%20College,%20I%20am%20interested%20in%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-2.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-emerald-700 hover:bg-emerald-800 text-xs font-bold text-white transition-colors shadow-none"
                >
                  WhatsApp Admission Desk
                </a>
              </div>
            </div>

            {/* Other Programmes Quick Switcher (Signature Diagonal Boxing) */}
            <div className="bg-white p-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-slate-200 shadow-none">
              <h4 className="font-heading text-base font-bold text-[#021B4E] mb-3 pb-2 border-b border-slate-100">
                Explore Other Degrees
              </h4>

              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                {otherCourses.map((other) => (
                  <Link
                    key={other.id}
                    href={`/academics/${other.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-xs font-semibold text-slate-700 hover:text-[#021B4E] hover:bg-[#FAF8F2] border border-transparent hover:border-slate-200 transition-all group"
                  >
                    <span className="truncate">{other.title}</span>
                    <span className="text-slate-400 group-hover:text-[#C59B27] group-hover:translate-x-0.5 transition-all shrink-0">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
