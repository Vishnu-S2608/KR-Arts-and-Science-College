"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Calendar, Award, Compass, Plane, Trophy, ArrowRight } from "lucide-react";

interface ChronicleEvent {
  id: string;
  year: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  tagColor: "gold" | "sky" | "emerald" | "blue";
  icon: any;
  span2?: boolean;
}

const CHRONICLES: ChronicleEvent[] = [
  {
    id: "thal-sainik",
    year: "2025-26",
    category: "NCC Honors",
    title: "Cadet Selection for Prestigious Thal Sainik Camp",
    description:
      "Following gruelling multi-stage state conditioning trials, KR College NCC cadets achieved selection to represent the Directorate in national competition drills, marksmanship, and obstacle courses.",
    tag: "National NCC Selection",
    tagColor: "gold",
    icon: Award,
    span2: true,
  },
  {
    id: "shinawatra-mou",
    year: "2025-26",
    category: "International Partnership",
    title: "Shinawatra University, Thailand Bilateral MoU",
    description:
      "Signed in Pathum Thani, Thailand during ICIRI 2026. Establishes cross-border research and student exchange treaties.",
    tag: "Thailand Treaty",
    tagColor: "sky",
    icon: Compass,
  },
  {
    id: "placement-drive",
    year: "2025-26",
    category: "Placements",
    title: "Inaugural Batch 100% Placement Achievement",
    description:
      "All 18 graduating applicants received verifiable offer letters totaling 70+ placement confirmations across 7 corporate firms.",
    tag: "100% Placed",
    tagColor: "gold",
    icon: Sparkles,
  },
  {
    id: "airport-visit",
    year: "2024-25",
    category: "Aviation Management",
    title: "Madurai Airport Operational Training",
    description:
      "BBA Aviation scholars received direct field insight into passenger ticketing terminals, cargo air logistics, and security systems.",
    tag: "Aviation Immersion",
    tagColor: "blue",
    icon: Plane,
  },
  {
    id: "srivilliputhur-meet",
    year: "2024-25",
    category: "Athletics",
    title: "Srivilliputhur Athletic Meet Overall Championship",
    description:
      "College athletes won gold and silver honors across 100m, 400m relay, and long jump divisions.",
    tag: "Sports Trophy",
    tagColor: "emerald",
    icon: Trophy,
  },
  {
    id: "decathlon-visit",
    year: "2024-25",
    category: "Commerce & AI",
    title: "Decathlon Global Supply Chain Immersion",
    description:
      "Interactive industrial tour analyzing inventory software architecture, barcode integration, and logistics flow.",
    tag: "Industry Visit",
    tagColor: "sky",
    icon: Award,
  },
  {
    id: "spark-symposia",
    year: "2024-25",
    category: "Innovation",
    title: "SPARK Innovation Festival Grand Finale",
    description:
      "Inter-collegiate forum showcasing working models in renewable clean energy, AI vision tools, and community banking.",
    tag: "Innovation Expo",
    tagColor: "gold",
    icon: Sparkles,
  },
  {
    id: "trust-foundation",
    year: "2022-23",
    category: "Institutional Milestone",
    title: "Establishment & University Affiliation Clearance",
    description:
      "KR Educational and Charitable Trust laid the foundation for KR Arts And Science College in P. Thambipatti, securing official affiliation under Madurai Kamaraj University to inaugurate higher education in Peraiyur.",
    tag: "Foundation Milestone",
    tagColor: "blue",
    icon: Award,
    span2: true,
  },
];

const FILTER_YEARS = [
  { key: "all", label: "All Chronicles" },
  { key: "2025-26", label: "Academic Year 2025-26" },
  { key: "2024-25", label: "Academic Year 2024-25" },
  { key: "2022-23", label: "Establishment 2022-23" },
];

export default function EventsPage() {
  const [activeYear, setActiveYear] = useState<string>("all");

  const filteredEvents =
    activeYear === "all"
      ? CHRONICLES
      : CHRONICLES.filter((e) => e.year === activeYear);

  return (
    <main className="pt-8 sm:pt-12 pb-20 bg-gradient-to-b from-sky-50/40 via-white to-white min-h-screen">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            Campus Archive &bull; Documented Achievements
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Campus Chronicle &amp; Milestones
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A documented record of achievements, student breakthroughs, international MoUs, and community milestones at KR Arts And Science College.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {FILTER_YEARS.map((f) => {
            const isActive = activeYear === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveYear(f.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-sky-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const Icon = event.icon;
            return (
              <article
                key={event.id}
                className={`pure-white-card p-6 sm:p-7 flex flex-col justify-between group ${
                  event.span2 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-amber-50/20 to-sky-50/20" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>{event.category} &bull; {event.year}</span>
                    </span>

                    <span 
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        event.tagColor === "gold"
                          ? "bg-amber-50 text-amber-900 border-amber-300"
                          : event.tagColor === "sky"
                          ? "bg-sky-50 text-sky-800 border-sky-200"
                          : event.tagColor === "emerald"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-blue-50 text-blue-800 border-blue-200"
                      }`}
                    >
                      {event.tag}
                    </span>
                  </div>

                  <h3 className={`font-black text-slate-900 group-hover:text-sky-700 transition-colors leading-snug mb-3 ${
                    event.span2 ? "text-xl sm:text-2xl" : "text-lg"
                  }`}>
                    {event.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Verified Campus Record</span>
                  <Link 
                    href="/apply"
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Apply for 2026</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
