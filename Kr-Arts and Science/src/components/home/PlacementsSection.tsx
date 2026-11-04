"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Briefcase, Sparkles, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import placementsData from "@/data/placements.json";

interface Student {
  id: string;
  name: string;
  offers: number;
  photo: string;
}

const RECRUITERS_LIST = [
  { name: "Besant Technologies", sector: "IT & Software Training" },
  { name: "Maruti Suzuki", sector: "Automotive & Logistics" },
  { name: "Best Money Gold", sector: "Financial Services" },
  { name: "Bhima Jewellers", sector: "Retail & Operations" },
  { name: "Pothys Group", sector: "Apparel Retail & E-Commerce" },
  { name: "Theni Anantham", sector: "Retail & Commercial" },
  { name: "BDreamz Global Solution", sector: "IT Services & BPO" },
];

function getInitials(fullName: string) {
  if (!fullName) return "";
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function PlacementsSection() {
  const [filterOffers, setFilterOffers] = useState<number | "all">("all");

  const students = [...(placementsData as Student[])].sort((a, b) => {
    if (b.offers !== a.offers) return b.offers - a.offers;
    return a.name.localeCompare(b.name);
  });

  const filteredStudents = filterOffers === "all"
    ? students
    : students.filter((s) => s.offers === filterOffers);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/30 to-white relative" id="placements">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-4 h-4 text-amber-600" />
              100% Placement Achievement &bull; Batch 2023-26
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              From Rural Classrooms to High-Growth Corporate Careers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Every single graduating applicant secured multiple appointment letters, proving the efficacy of our 
              industry-aligned training, soft skills drills, and corporate placement cell.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-4 bg-white rounded-2xl border border-sky-100 shadow-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-600">18 / 18</div>
              <div className="text-xs font-bold text-slate-500">Students Placed</div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-amber-200 shadow-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-500">70+</div>
              <div className="text-xs font-bold text-slate-500">Offer Letters</div>
            </div>
          </div>
        </div>

        {/* Corporate Recruiters Grid (REC Inspired) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Our Prominent Corporate Recruiters
            </span>
            <span className="text-xs font-semibold text-sky-600">7+ Participating Corporates</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {RECRUITERS_LIST.map((rec, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 font-bold text-sm shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {rec.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 block">
                    {rec.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Bar for Placed Students */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pt-6 border-t border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Honor Roll: Placed Graduates</h3>
            <p className="text-xs text-slate-500">Verifiable corporate offers per graduating student</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterOffers("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                filterOffers === "all"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All (18)
            </button>
            <button
              type="button"
              onClick={() => setFilterOffers(7)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                filterOffers === 7
                  ? "bg-amber-500 text-slate-950 font-black"
                  : "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100"
              }`}
            >
              ★ 7 Offers Club
            </button>
            <button
              type="button"
              onClick={() => setFilterOffers(6)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                filterOffers === 6
                  ? "bg-sky-600 text-white"
                  : "bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100"
              }`}
            >
              6 Offers
            </button>
          </div>
        </div>

        {/* Placed Students Grid (Pure White Cards with Golden Badges) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredStudents.map((student) => (
            <div 
              key={student.id}
              className="bg-white rounded-2xl p-3 border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-sky-50 via-slate-50 to-amber-50/40 mb-2.5 flex items-center justify-center border border-slate-100">
                <div className="flex flex-col items-center justify-center text-center p-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 text-white flex items-center justify-center font-black text-lg shadow-md mb-2 group-hover:scale-105 transition-transform">
                    {getInitials(student.name)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">Graduating Batch</span>
                </div>

                {/* Offer Badge Overlay */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black shadow-sm flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{student.offers} {student.offers === 1 ? "Offer" : "Offers"}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                  {student.name}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Placed Successfully</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Call to Action Banner */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-sky-50 via-white to-amber-50 rounded-3xl border border-sky-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">Want to secure an assured career placement?</h4>
            <p className="text-xs sm:text-sm text-slate-600">Join KR Arts And Science College for the 2026-27 academic session.</p>
          </div>

          <Link 
            href="/apply"
            className="gold-shimmer-btn px-6 py-3 rounded-full text-xs sm:text-sm font-bold inline-flex items-center gap-2 shrink-0"
          >
            <span>Apply for Admission Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
