"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  Cpu, 
  Bus, 
  HeartHandshake, 
  ArrowRight, 
  Sparkles,
  BookOpen,
  CheckCircle2
} from "lucide-react";

const PILLARS = [
  {
    title: "100% Placement Record",
    description: "Inaugural graduating batch achieved 100% verifiable placements with 70+ offer letters from leading corporate recruiters.",
    icon: Award,
    badge: "Documented Milestone",
    color: "from-amber-400 to-amber-600",
  },
  {
    title: "Global & Industry MoUs",
    description: "Active bilateral exchange with Shinawatra University (Thailand) and professional aviation training linkage with LKP Academy.",
    icon: Globe,
    badge: "International Reach",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Hi-Tech Air-Conditioned Labs",
    description: "Equipped with dedicated Artificial Intelligence & Computing labs, modern Chemistry research suites, and high-speed internet.",
    icon: Cpu,
    badge: "Advanced Tech",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Extensive Bus Transport",
    description: "Dedicated college bus network connecting rural students across Peraiyur, T. Kallupatti, Thirumangalam, and Virudhunagar.",
    icon: Bus,
    badge: "Safe Commute",
    color: "from-emerald-500 to-teal-700",
  },
  {
    title: "NCC & Character Building",
    description: "National Cadet Corps (NCC) cadet wing with state-level Thal Sainik Camp selections, plus dynamic KR Leaders Club forums.",
    icon: ShieldCheck,
    badge: "Leadership & Honor",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Individual Mentorship & Care",
    description: "Low student-to-faculty ratio ensuring personalized academic counselling, remedial guidance, and rural merit scholarships.",
    icon: HeartHandshake,
    badge: "Student-First",
    color: "from-sky-600 to-sky-400",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/30 via-white to-white relative" id="about">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Institutional Heritage &bull; Est. 2023
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nurturing Rural Talent into Global Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded by the <strong className="text-slate-900">KR Educational and Charitable Trust</strong>, KR Arts And Science College was established with a sacred vision: delivering premier higher education with zero compromise on quality right to Peraiyur, Madurai.
          </p>
        </div>

        {/* Bento Grid: Image Hero & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-sky-100 shadow-xl bg-white aspect-[4/5]">
              <img 
                src="/images/library.png" 
                alt="KR College Library & Learning Centre" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/computer-lab.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-100 text-xs font-bold text-sky-800 shadow-md">
                🎓 Madurai Kamaraj University Affiliation
              </div>

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-tamil text-amber-400 font-bold text-base block mb-1">
                  உள்ளுவதெல்லாம் உயர்வுள்ளல்
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  &ldquo;Our mission is to enable every passionate rural scholar to access cutting-edge disciplines, secure top corporate careers, and uplift their families.&rdquo;
                </p>
                <div className="mt-3 text-xs font-bold text-amber-300">
                  &mdash; Management, KR Educational Trust
                </div>
              </div>
            </div>

            {/* Overlapping Mini Card */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white p-4 rounded-2xl border border-amber-200 shadow-xl max-w-[220px]">
              <div className="flex items-center gap-2 text-amber-600 font-black text-xl">
                <Award className="w-5 h-5 text-amber-500" />
                <span>100% Placed</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Verifiable corporate placements for all registered students.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Pillars of Excellence */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="pure-white-card p-5 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Administration & Leadership Fast Banner */}
        <div className="p-6 sm:p-10 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
              Leadership &bull; Governance
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Guided by Visionary Academic Administrators
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Under the proactive stewardship of <strong>Mr. K. Pandiaraj</strong> (Secretary &amp; Correspondent) and <strong>Dr. P. S. Senthilkumar</strong> (Principal), maintaining stringent university standards and student welfare.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link 
              href="/contact"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              Meet Administration
            </Link>
            <Link 
              href="/apply"
              className="gold-shimmer-btn px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5"
            >
              <span>Join Us in 2026</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
