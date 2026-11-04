"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Globe2, 
  Bus, 
  PhoneCall, 
  CheckCircle2,
  Building2
} from "lucide-react";
import gsap from "gsap";

export default function KineticHero() {
  const heroRef = useRef<HTMLElement>(null);
  const marqueeA = useRef<HTMLDivElement>(null);
  const marqueeB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xA = 0;
    let xB = 0;

    const ticker = () => {
      if (marqueeA.current) {
        xA -= 0.8;
        if (Math.abs(xA) >= marqueeA.current.scrollWidth / 2) xA = 0;
        marqueeA.current.style.transform = `translateX(${xA}px)`;
      }
      if (marqueeB.current) {
        xB += 0.8;
        if (xB >= 0) xB = -marqueeB.current.scrollWidth / 2;
        marqueeB.current.style.transform = `translateX(${xB}px)`;
      }
    };

    gsap.ticker.add(ticker);
    return () => gsap.ticker.remove(ticker);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-10 sm:pt-14 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white"
      aria-label="KR Arts And Science College Hero"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/30 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-amber-200/20 blur-[90px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* 1. TOP LIVE STATUS BADGE (Rajalakshmi REC Inspired) */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4"></span>
            <span className="text-sky-700 font-bold uppercase tracking-wide">Admissions Open 2026-27</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-600">Madurai Kamaraj University Affiliation</span>
          </div>

          {/* 2. GRAND HEADLINE WITH PURE WHITE & SKY BLUE & GOLDEN ACCENTS */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-5xl">
            Where Ambition Meets{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
              Opportunity
            </span>{" "}
            &amp;{" "}
            <span className="relative inline-block text-slate-900">
              Excellence.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* 3. TAMIL MOTTO PRESTIGE PILL BADGE */}
          <div className="mt-5 inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 shadow-[0_4px_16px_rgba(234,179,8,0.15)] text-slate-900">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span className="font-tamil font-bold text-sm sm:text-base text-amber-900 tracking-wide">
              உள்ளுவதெல்லாம் உயர்வுள்ளல்
            </span>
            <span className="text-xs font-semibold text-amber-700 hidden sm:inline">
              (Aim High &bull; Think Elevated)
            </span>
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
          </div>

          {/* 4. SUBHEADLINE */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
            Empowering students with <strong className="text-slate-900">11 industry-ready undergraduate degrees</strong>, 
            international university partnerships, air-conditioned computing suites, and a documented <strong className="text-sky-700">100% placement track record</strong> in Peraiyur, Madurai.
          </p>

          {/* 5. HERO CALL TO ACTIONS */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link 
              href="/apply"
              className="gold-shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-bold shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>Apply Online for 2026</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            <a 
              href="#programmes"
              className="sky-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Explore 11 Programmes</span>
            </a>

            <a 
              href="tel:+918072297109"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-slate-800 bg-white border border-slate-300 hover:border-sky-500 hover:text-sky-700 hover:bg-sky-50/50 transition-all shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-sky-600" />
              <span>+91 80722 97109</span>
            </a>
          </div>

          {/* Key Checklist Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>MKU University Recognized</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>100% Placement Achievement</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span>Bus Routes: Madurai &amp; Virudhunagar</span>
            </div>
          </div>
        </div>

        {/* 6. HERO MEDIA SHOWCASE (Rajalakshmi College Style) */}
        <div className="mt-10 relative">
          {/* Main Visual Frame */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 shadow-2xl bg-white aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9]">
            <img 
              src="/images/campus-hero.png" 
              alt="KR Arts And Science College Campus" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/college-entrance.jpg";
              }}
            />
            {/* Gradient Overlays for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-950/40 via-transparent to-transparent"></div>

            {/* Bottom Caption inside media */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                P. Thambipatti &bull; Peraiyur Campus
              </span>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-md">
                10+ Acres of Pristine Eco-Friendly Academic Infrastructure
              </h2>
            </div>
          </div>

          {/* 7. FLOATING HIGHLIGHT CARDS (Inspired by REC) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
            {/* Card 1: 100% Placements */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-600 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950">100%</div>
                <div className="text-xs font-medium text-slate-600">Placement Record (70+ Offers)</div>
              </div>
            </div>

            {/* Card 2: 11 Approved Programmes */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950">11 Courses</div>
                <div className="text-xs font-medium text-slate-600">AI, CS, Aviation, Commerce &amp; Arts</div>
              </div>
            </div>

            {/* Card 3: Global Bilateral MoU */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950">Thailand MoU</div>
                <div className="text-xs font-medium text-slate-600">Shinawatra University Alliance</div>
              </div>
            </div>

            {/* Card 4: Bus Transit Fleet */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-300 transition-all flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 group-hover:scale-110 transition-transform">
                <Bus className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950">Dedicated Fleet</div>
                <div className="text-xs font-medium text-slate-600">Free/Subsidized Bus Routes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. RUNNING MARQUEE TICKER (Pure White Background with Golden Stars & Sky Blue Accents) */}
      <div className="mt-12 py-3 bg-white border-y border-sky-100 overflow-hidden whitespace-nowrap" aria-hidden="true">
        <div ref={marqueeA} className="flex gap-8 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-700">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-sky-700">ARTIFICIAL INTELLIGENCE</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-slate-900">BBA AVIATION MANAGEMENT</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-sky-700">COMPUTER SCIENCE</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-slate-900">COMMERCE (CA)</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-sky-700">CRIMINOLOGY &amp; POLICE ADMIN</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-slate-900">100% PLACEMENT GUARANTEE</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
