"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, GraduationCap, Briefcase, Trees, Bus, ShieldCheck } from "lucide-react";

const STATS_DATA = [
  { 
    target: 100, 
    suffix: "%", 
    label: "Placement Achievement",
    subtext: "100% of applicants secured offers",
    icon: Award,
    color: "from-amber-400 to-amber-600"
  },
  { 
    target: 70, 
    suffix: "+", 
    label: "Offer Letters Secured",
    subtext: "Across 7+ corporate recruiters",
    icon: Briefcase,
    color: "from-sky-500 to-blue-600"
  },
  { 
    target: 11, 
    suffix: "", 
    label: "Approved Programmes",
    subtext: "Undergraduate degree courses",
    icon: GraduationCap,
    color: "from-sky-600 to-indigo-700"
  },
  { 
    target: 10, 
    suffix: "+", 
    label: "Green Campus Acres",
    subtext: "Lush eco-friendly learning space",
    icon: Trees,
    color: "from-emerald-500 to-teal-700"
  },
  { 
    target: 15, 
    suffix: "+", 
    label: "Transit Bus Routes",
    subtext: "Madurai, Virudhunagar & Peraiyur",
    icon: Bus,
    color: "from-amber-500 to-orange-600"
  },
  { 
    target: 2023, 
    suffix: "", 
    label: "Year of Establishment",
    subtext: "KR Educational & Charitable Trust",
    icon: ShieldCheck,
    color: "from-blue-600 to-sky-500"
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const statNumbers = section.querySelectorAll<HTMLElement>(".stat-num[data-target]");
    statNumbers.forEach((stat) => {
      const target = parseFloat(stat.getAttribute("data-target") || "0");
      const suffix = stat.getAttribute("data-suffix") || "";

      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          stat.textContent = `${Math.round(counterObj.val)}${suffix}`;
        },
      });
    });
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white relative" 
      id="stats"
    >
      <div id="numbers" className="sr-only" />
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Key Performance Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Proven Numbers That Speak For Themselves
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Backed by official verifiable track records in academic delivery, campus connectivity, and student career placements.
          </p>
        </div>

        {/* 6 High-Impact Stat Cards (Pure White + Sky Blue + Golden Yellow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="pure-white-card p-6 sm:p-8 flex items-start gap-5 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div 
                    className="stat-num text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
                    data-target={item.target} 
                    data-suffix={item.suffix}
                  >
                    0{item.suffix}
                  </div>
                  <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-800">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accreditations & Recognitions Ribbon (REC style) */}
        <div className="mt-16 p-6 sm:p-8 bg-white rounded-3xl border border-sky-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-600">
              <Award className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Recognized Academic Accreditations</h4>
              <p className="text-xs text-slate-500">Complying with University Grants Commission &amp; Tamil Nadu State Norms</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              🎓 Madurai Kamaraj University
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              🏛️ Govt. of Tamil Nadu Approved
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-bold">
              ★ AISHE Code: C-66023
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-bold">
              🌐 Shinawatra University MoU
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
