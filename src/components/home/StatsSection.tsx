"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ROW_1_DATA = [
  {
    target: 100,
    suffix: "%",
    label: "Placement Achievement",
    subtext: "100% of applicants secured offers",
  },
  {
    target: 70,
    suffix: "+",
    label: "Offer Letters Secured",
    subtext: "Across 7+ corporate recruiters",
  },
  {
    target: 11,
    suffix: "",
    label: "Approved Programmes",
    subtext: "Undergraduate degree courses",
  },
];

const ROW_2_DATA = [
  {
    target: 10,
    suffix: "+",
    label: "Green Campus Acres",
    subtext: "Lush eco-friendly learning space",
  },
  {
    target: 15,
    suffix: "+",
    label: "Transit Bus Routes",
    subtext: "Madurai, Virudhunagar & Peraiyur",
  },
  {
    target: 2023,
    suffix: "",
    label: "Year of Establishment",
    subtext: "KR Educational & Charitable Trust",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const statNumbers = section.querySelectorAll<HTMLElement>(
      ".stat-num[data-target]",
    );
    statNumbers.forEach((stat) => {
      const target = parseFloat(stat.getAttribute("data-target") || "0");
      const suffix = stat.getAttribute("data-suffix") || "";
      const startVal = parseFloat(stat.getAttribute("data-start") || "0");

      const counterObj = { val: startVal };
      gsap.fromTo(
        counterObj,
        { val: startVal },
        {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "restart reset restart reset",
          },
          onStart: () => {
            stat.textContent = `${Math.round(startVal)}${suffix}`;
          },
          onUpdate: () => {
            stat.textContent = `${Math.round(counterObj.val)}${suffix}`;
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 bg-[#061738] text-white relative overflow-hidden"
      id="stats"
      aria-label="Institutional Milestones and Documented Figures"
    >
      <div id="numbers" className="sr-only" />

      {/* Subtle ambient depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(31,79,204,0.35),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(245,184,61,0.08),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Left-aligned clean institutional styling */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-5 h-[2px] bg-[#F5B83D] inline-block"
              aria-hidden="true"
            />
            <span className="text-[#F5B83D] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              INSTITUTIONAL MILESTONES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Documented Facts &amp; Figures
          </h2>
        </div>

        {/* Top Horizontal Rule */}
        <div
          className="w-full h-px bg-white/15 mb-12 md:mb-16"
          aria-hidden="true"
        />

        {/* ROW 1: 3 Stats with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {ROW_1_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-start md:px-8 lg:px-12 ${
                idx === 0 ? "md:pl-0" : ""
              } ${
                idx !== ROW_1_DATA.length - 1
                  ? "md:border-r md:border-white/15"
                  : ""
              }`}
            >
              <div
                className="stat-num text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight tabular-nums transition-colors duration-300 group-hover:text-[#F5B83D]"
                data-target={item.target}
                data-suffix={item.suffix}
                data-start={item.target === 2023 ? 2000 : 0}
              >
                {item.target === 2023 ? "2023" : `0${item.suffix}`}
              </div>
              <h3 className="mt-3 text-xs sm:text-sm font-bold tracking-[0.14em] text-[#E8EFF9] uppercase">
                {item.label}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 font-medium">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Middle Horizontal Divider between Row 1 and Row 2 */}
        <div
          className="w-full h-px bg-white/10 my-10 md:my-14"
          aria-hidden="true"
        />

        {/* ROW 2: 3 Stats with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {ROW_2_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-start md:px-8 lg:px-12 ${
                idx === 0 ? "md:pl-0" : ""
              } ${
                idx !== ROW_2_DATA.length - 1
                  ? "md:border-r md:border-white/15"
                  : ""
              }`}
            >
              <div
                className="stat-num text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight tabular-nums transition-colors duration-300 group-hover:text-[#F5B83D]"
                data-target={item.target}
                data-suffix={item.suffix}
                data-start={item.target === 2023 ? 2000 : 0}
              >
                {item.target === 2023 ? "2023" : `0${item.suffix}`}
              </div>
              <h3 className="mt-3 text-xs sm:text-sm font-bold tracking-[0.14em] text-[#E8EFF9] uppercase">
                {item.label}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 font-medium">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================
            INSTITUTIONAL ACCREDITATIONS & STATUTORY CHARTER
            Open Architectural Tier: Seamless, unboxed, matching the stats above
            ======================================================== */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-white/15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {/* Pillar 1: Madurai Kamaraj University */}
            <div className="group flex flex-col justify-between lg:pr-8 lg:border-r lg:border-white/15 transition-all duration-300 hover:-translate-y-1 relative">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F5B83D] font-bold block mb-2">
                  Affiliating University
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F5B83D] transition-colors">
                  Madurai Kamaraj University
                </h4>
              </div>
              <div>
                <p className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400 font-medium">
                  State Public University &bull; Est. 1966
                </p>
                <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 mt-2" />
              </div>
            </div>

            {/* Pillar 2: Govt. of Tamil Nadu */}
            <div className="group flex flex-col justify-between lg:px-8 lg:border-r lg:border-white/15 transition-all duration-300 hover:-translate-y-1 relative">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F5B83D] font-bold block mb-2">
                  State Sanction
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F5B83D] transition-colors">
                  Govt. of Tamil Nadu
                </h4>
              </div>
              <div>
                <p className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400 font-medium">
                  Higher Education Dept. Sanctioned
                </p>
                <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 mt-2" />
              </div>
            </div>

            {/* Pillar 3: AISHE Code */}
            <div className="group flex flex-col justify-between lg:px-8 lg:border-r lg:border-white/15 transition-all duration-300 hover:-translate-y-1 relative">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F5B83D] font-bold block mb-2">
                  National Code
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F5B83D] transition-colors">
                  AISHE Code: C-66023
                </h4>
              </div>
              <div>
                <p className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400 font-medium">
                  Ministry of Education, Govt. of India
                </p>
                <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 mt-2" />
              </div>
            </div>

            {/* Pillar 4: Shinawatra University MoU */}
            <div className="group flex flex-col justify-between lg:pl-8 transition-all duration-300 hover:-translate-y-1 relative">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F5B83D] font-bold block mb-2">
                  Global Alliance
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F5B83D] transition-colors">
                  Shinawatra University
                </h4>
              </div>
              <div>
                <p className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400 font-medium">
                  Bangkok, Thailand &bull; Academic MoU
                </p>
                <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
