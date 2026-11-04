"use client";

import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, Trophy, Plane, Award, Compass, ExternalLink } from "lucide-react";

const CHRONICLES = [
  {
    id: "thal-sainik",
    category: "NCC Honors",
    year: "2025-26",
    title: "Cadet Selection for Prestigious National Thal Sainik Camp",
    description: "Following rigorous multi-tier state screening, KR College NCC cadets achieved selection to represent the Directorate in national competition drills, obstacle courses, and marksmanship.",
    tag: "National NCC Honors",
    icon: Award,
    tagColor: "gold",
    span2: true,
  },
  {
    id: "shinawatra-mou",
    category: "International Treaty",
    year: "2025-26",
    title: "Shinawatra University, Thailand Bilateral MoU Signed",
    description: "Inaugurated in Pathum Thani, Thailand during ICIRI 2026. Establishes cross-border research and student international exchange.",
    tag: "Thailand Treaty",
    icon: Compass,
    tagColor: "sky",
  },
  {
    id: "airport-visit",
    category: "Aviation Immersion",
    year: "2024-25",
    title: "Madurai International Airport Operational Field Visit",
    description: "BBA Aviation scholars received direct runway, air logistics, and passenger baggage dispatch protocol training from aviation authorities.",
    tag: "Field Immersion",
    icon: Plane,
    tagColor: "blue",
  },
  {
    id: "srivilliputhur-meet",
    category: "Athletics Championship",
    year: "2024-25",
    title: "Overall Championship Victory at Srivilliputhur Meet",
    description: "Our athletics contingent bagged multiple gold and silver trophies across 100m sprint, relay, and long-jump competitions.",
    tag: "Sports Trophy",
    icon: Trophy,
    tagColor: "emerald",
  },
  {
    id: "placement-drive",
    category: "Placements",
    year: "2025-26",
    title: "100% Placement Record Celebrated for Inaugural Batch",
    description: "All 18 registered final-year students received appointment orders totaling 70+ offer letters across 7 corporate companies.",
    tag: "100% Placed",
    icon: Sparkles,
    tagColor: "gold",
  },
];

export default function ChronicleSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/20 to-white relative" id="chronicle">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Fresh from KR Campus Feed
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Campus Chronicle &amp; Breakthrough Moments
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Documented milestones, international treaties, athletic championships, and student achievements at KR Arts And Science College.
            </p>
          </div>

          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-5 py-2.5 rounded-full transition-all group"
          >
            <span>View All Archives</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Chronicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHRONICLES.map((item) => {
            const Icon = item.icon;
            return (
              <article 
                key={item.id}
                className={`pure-white-card p-6 sm:p-7 flex flex-col justify-between group ${
                  item.span2 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-amber-50/20 to-sky-50/20" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>{item.category} &bull; {item.year}</span>
                    </span>

                    <span 
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        item.tagColor === "gold"
                          ? "bg-amber-50 text-amber-900 border-amber-300"
                          : item.tagColor === "sky"
                          ? "bg-sky-50 text-sky-800 border-sky-200"
                          : item.tagColor === "emerald"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-blue-50 text-blue-800 border-blue-200"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`font-black text-slate-900 group-hover:text-sky-700 transition-colors leading-snug mb-3 ${
                    item.span2 ? "text-xl sm:text-2xl" : "text-lg"
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Verifiable Archive</span>
                  <Link 
                    href="/events"
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Chronicle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
