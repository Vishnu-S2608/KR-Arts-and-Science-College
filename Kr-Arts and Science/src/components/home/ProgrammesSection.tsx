"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  ArrowRight, 
  Code, 
  TrendingUp, 
  Plane, 
  Atom, 
  BookOpen, 
  ShieldAlert, 
  Languages, 
  Trophy, 
  HeartHandshake, 
  Calculator,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface Programme {
  id: string;
  number: string;
  title: string;
  category: "tech" | "commerce" | "science" | "humanities";
  categoryLabel: string;
  duration: string;
  description: string;
  tag: string;
  tagColor: "gold" | "sky" | "blue" | "emerald";
  image?: string;
  icon: any;
}

const PROGRAMMES: Programme[] = [
  {
    id: "ai",
    number: "01",
    title: "B.Sc Artificial Intelligence",
    category: "tech",
    categoryLabel: "Computing & AI",
    duration: "3 Years Regular",
    description: "Machine learning, neural networks, predictive data modeling, and python computing algorithms.",
    tag: "Frontier Tech",
    tagColor: "gold",
    image: "/images/computer-lab.png",
    icon: Code,
  },
  {
    id: "commerce",
    number: "02",
    title: "B.Com (Computer Applications)",
    category: "commerce",
    categoryLabel: "Commerce & Management",
    duration: "3 Years Regular",
    description: "Corporate accounting, GST & taxation systems, computerized business analytics, and banking operations.",
    tag: "High Corporate Demand",
    tagColor: "sky",
    icon: TrendingUp,
  },
  {
    id: "aviation",
    number: "03",
    title: "BBA Aviation Management",
    category: "commerce",
    categoryLabel: "Commerce & Management",
    duration: "3 Years Regular",
    description: "Airport terminal operations, airline dispatch, air ticketing, aviation logistics, and ground handling.",
    tag: "LKP Academy Partner",
    tagColor: "gold",
    icon: Plane,
  },
  {
    id: "cs",
    number: "04",
    title: "B.Sc Computer Science",
    category: "tech",
    categoryLabel: "Computing & AI",
    duration: "3 Years Regular",
    description: "Data structures, full stack web development, database management systems, and cybersecurity.",
    tag: "Core Engineering",
    tagColor: "sky",
    image: "/images/computer-lab.png",
    icon: Code,
  },
  {
    id: "tamil",
    number: "05",
    title: "B.A Tamil",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years Regular",
    description: "Classical Sangam literature, epigraphy, modern linguistics, media journalism, and Tamil creative writing.",
    tag: "Heritage Honors",
    tagColor: "emerald",
    icon: Languages,
  },
  {
    id: "criminology",
    number: "06",
    title: "B.A Criminology & Police Administration",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years Regular",
    description: "Forensic science, criminal psychology, penology, police investigative procedures, and constitutional law.",
    tag: "Civil Defense Career",
    tagColor: "gold",
    icon: ShieldAlert,
  },
  {
    id: "english",
    number: "07",
    title: "B.A English Literature",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years Regular",
    description: "British, American & Postcolonial literature, phonetics, linguistics, and professional corporate communication.",
    tag: "Global Communication",
    tagColor: "sky",
    icon: BookOpen,
  },
  {
    id: "physical-education",
    number: "08",
    title: "B.Sc Physical Education",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description: "Sports physiology, kinesiology, athletic conditioning, sports psychology, and tournament administration.",
    tag: "Sports Championship",
    tagColor: "emerald",
    icon: Trophy,
  },
  {
    id: "chemistry",
    number: "09",
    title: "B.Sc Chemistry",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description: "Organic synthesis, inorganic chemistry, analytical spectrophotometry, and pharmaceutical lab techniques.",
    tag: "Research & Pharma",
    tagColor: "sky",
    icon: Atom,
  },
  {
    id: "home-science",
    number: "10",
    title: "B.Sc Home Science (Nutrition & Dietetics)",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description: "Clinical dietetics, food chemistry, public health nutrition, therapeutic meal planning, and hospital internship.",
    tag: "Healthcare & Dietetics",
    tagColor: "gold",
    icon: HeartHandshake,
  },
  {
    id: "mathematics",
    number: "11",
    title: "B.Sc Mathematics",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years Regular",
    description: "Advanced calculus, abstract algebra, discrete structures, probability statistics, and operations research.",
    tag: "Data & Analytics",
    tagColor: "blue",
    icon: Calculator,
  },
];

const CATEGORIES = [
  { key: "all", label: "All Programmes (11)" },
  { key: "tech", label: "Computing & AI" },
  { key: "commerce", label: "Commerce & Aviation" },
  { key: "science", label: "Pure & Applied Sciences" },
  { key: "humanities", label: "Humanities & Law" },
];

export default function ProgrammesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all" 
    ? PROGRAMMES 
    : PROGRAMMES.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-white relative" id="programmes">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              Academic Degrees &bull; Affiliated to MKU
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              11 Career-Driven Undergraduate Programmes
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Curated curricula designed under Madurai Kamaraj University regulations, coupled with specialized 
              value-added industry modules and placement guarantees.
            </p>
          </div>

          <Link 
            href="/apply" 
            className="gold-shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shrink-0 self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Apply for Admission</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>
        </div>

        {/* Rajalakshmi Style Interactive Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Programmes Grid (Pure White Cards with Sky Blue & Gold Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => {
            const Icon = prog.icon;
            return (
              <article
                key={prog.id}
                className="pure-white-card p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-xl text-sky-700/60 group-hover:text-sky-600 transition-colors">
                      {prog.number}
                    </span>

                    <span 
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                        prog.tagColor === "gold"
                          ? "bg-amber-50 text-amber-900 border-amber-300"
                          : prog.tagColor === "sky"
                          ? "bg-sky-50 text-sky-800 border-sky-200"
                          : prog.tagColor === "emerald"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-blue-50 text-blue-800 border-blue-200"
                      }`}
                    >
                      {prog.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                        {prog.title}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">
                        {prog.duration} &bull; {prog.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 mb-6">
                    {prog.description}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/department/${prog.id}`}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/apply"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-amber-950 bg-amber-400 hover:bg-amber-500 transition-colors shadow-sm"
                  >
                    Apply Now
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
