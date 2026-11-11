"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

// Reusable Floating Word component: floats each individual letter on hover
function FloatingWord({
  word,
  colorClass = "text-[#011640]",
}: {
  word: string;
  colorClass?: string;
}) {
  return (
    <span className={`inline-block whitespace-nowrap ${colorClass}`}>
      {word.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-200 ease-out hover:-translate-y-2 sm:hover:-translate-y-3.5 hover:scale-110 cursor-default select-none will-change-transform"
        >
          {char}
        </span>
      ))}
    </span>
  );
}

const MARQUEE_ROW_1 = [
  "NATIONAL CADET CORPS (NCC)",
  "KR LEADERS CLUB",
  "TRAINING & PLACEMENT CELL",
  "SPORTS & ATHLETICS CLUB",
  "GREEN CLUB ECO PRESERVATION",
  "UNNAT BHARAT ABHIYAN",
  "ART, CRAFT & LITERARY SOCIETY",
];

const MARQUEE_ROW_2 = [
  "NATIONAL SERVICE SCHEME (NSS)",
  "YOUTH RED CROSS (YRC)",
  "RED RIBBON CLUB",
  "WOMEN EMPOWERMENT CELL",
  "INNOVATION & CODING HUB",
  "FINE ARTS & CULTURAL CLUB",
  "CITIZEN CONSUMER CLUB",
  "CAREER GUIDANCE FORUM",
];

export default function KineticHero() {
  const heroRef = useRef<HTMLElement>(null);
  const marqueeA = useRef<HTMLDivElement>(null);
  const marqueeB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xA = 0;
    let xB = 0;
    const speed = 0.85;

    // Initialize marqueeB offset so it flows seamlessly from left to right
    if (marqueeB.current) {
      xB = -marqueeB.current.scrollWidth / 2;
    }

    const ticker = () => {
      // Row 1: Right to Left motion (Soft Tone)
      if (marqueeA.current) {
        xA -= speed;
        const halfWidthA = marqueeA.current.scrollWidth / 2;
        if (Math.abs(xA) >= halfWidthA) {
          xA = 0;
        }
        marqueeA.current.style.transform = `translateX(${xA}px)`;
      }

      // Row 2: Left to Right motion (Solid Deep Navy)
      if (marqueeB.current) {
        xB += speed;
        const halfWidthB = marqueeB.current.scrollWidth / 2;
        if (xB >= 0) {
          xB = -halfWidthB;
        }
        marqueeB.current.style.transform = `translateX(${xB}px)`;
      }
    };

    gsap.ticker.add(ticker);
    return () => gsap.ticker.remove(ticker);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#FBF2D4]/25 via-white to-white"
      aria-label="KR Arts And Science College Hero"
    >
      {/* Ambient Background Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0334A0]/8 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#FBF2D4]/60 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* ======================================================== */}
        {/* HERO TITLE SECTION WITH PURE MOTION TRANSITIONS (NO COLOR CHANGE) */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
          {/* 1. TOP STATUS EYEBROW: Motion-only Line Elongation on Hover */}
          <div className="group/eyebrow inline-flex items-center justify-center gap-3 mb-3 sm:mb-4 cursor-default select-none">
            <span className="w-8 sm:w-14 h-[2px] bg-amber-400 rounded-full group-hover/eyebrow:w-16 sm:group-hover/eyebrow:w-24 transition-all duration-300 ease-out" />
            <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest text-[#0334A0] uppercase group-hover/eyebrow:tracking-[0.2em] transition-all duration-300 ease-out">
              KR Arts And Science College &bull; Peraiyur, Madurai
            </span>
            <span className="w-8 sm:w-14 h-[2px] bg-amber-400 rounded-full group-hover/eyebrow:w-16 sm:group-hover/eyebrow:w-24 transition-all duration-300 ease-out" />
          </div>

          {/* 2. GRAND HEADLINE: Pure Kinetic Letter-by-Letter Floating Effect (ZERO Color Change) */}
          <div className="relative group/title inline-block">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] max-w-5xl select-none flex flex-wrap justify-center items-baseline gap-x-2.5 sm:gap-x-4 gap-y-1">
              <FloatingWord word="Where" colorClass="text-[#011640]" />
              <FloatingWord word="Ambition" colorClass="text-[#011640]" />

              {/* Forced line break on sm and larger displays */}
              <span className="w-full h-0 hidden sm:block basis-full" />

              <FloatingWord word="Meets" colorClass="text-[#011640]" />
              <FloatingWord word="Opportunity" colorClass="text-[#C59B27]" />
              <FloatingWord word="&" colorClass="text-[#011640]" />
              <FloatingWord word="Excellence." colorClass="text-[#C59B27]" />
            </h1>

            {/* Smooth Kinetic Line Reveal across width on hover (Pure motion transition) */}
            <div className="mt-2 mx-auto w-0 group-hover/title:w-48 sm:group-hover/title:w-72 h-[2.5px] bg-[#C59B27] rounded-full transition-all duration-500 ease-out" />
          </div>

          {/* 3. TAMIL MOTTO: Smooth Levitation Float Transition on Hover (ZERO Color Change) */}
          <div className="mt-3.5 sm:mt-4 inline-flex items-center justify-center relative select-none">
            <div className="relative px-10 sm:px-12 py-2 flex items-center justify-center min-w-[280px] sm:min-w-[340px] transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer">
              {/* Olai Chuvadi Palm Leaf SVG Container (Wide 380x42 viewBox with zero dot-text overlap) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm"
                preserveAspectRatio="none"
                viewBox="0 0 380 42"
              >
                <defs>
                  {/* Natural aged palm leaf grain gradient */}
                  <linearGradient
                    id="heroOlaiLeafGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#EAD9AB" />
                    <stop offset="12%" stopColor="#F6ECC9" />
                    <stop offset="50%" stopColor="#FFF9E8" />
                    <stop offset="88%" stopColor="#F6ECC9" />
                    <stop offset="100%" stopColor="#EAD9AB" />
                  </linearGradient>
                </defs>

                {/* Palm Leaf Manuscript Outline */}
                <path
                  d="M 12 2 L 368 2 C 375 2 380 8 377 21 C 380 34 375 40 368 40 L 12 40 C 5 40 0 34 3 21 C 0 8 5 2 12 2 Z"
                  fill="url(#heroOlaiLeafGrad)"
                  stroke="#BCA060"
                  strokeWidth="1.25"
                />

                {/* Subtle dried palm fiber horizontal grain lines */}
                <line
                  x1="26"
                  y1="11"
                  x2="354"
                  y2="11"
                  stroke="#CBB177"
                  strokeWidth="0.6"
                  strokeDasharray="6 3"
                  opacity="0.6"
                />
                <line
                  x1="26"
                  y1="31"
                  x2="354"
                  y2="31"
                  stroke="#CBB177"
                  strokeWidth="0.6"
                  strokeDasharray="8 4"
                  opacity="0.6"
                />

                {/* Left cord binding eyelet (Placed at cx=14, giving complete clearance from text) */}
                <circle
                  cx="14"
                  cy="21"
                  r="3.2"
                  fill="#D9C494"
                  stroke="#8E7036"
                  strokeWidth="1"
                />
                <circle cx="14" cy="21" r="1.3" fill="#5A431A" />

                {/* Right cord binding eyelet (Placed at cx=366, giving complete clearance from text) */}
                <circle
                  cx="366"
                  cy="21"
                  r="3.2"
                  fill="#D9C494"
                  stroke="#8E7036"
                  strokeWidth="1"
                />
                <circle cx="366" cy="21" r="1.3" fill="#5A431A" />
              </svg>

              {/* Traditional etched Tamil script text */}
              <span className="relative z-10 font-tamil font-bold text-xs sm:text-sm md:text-[15px] text-[#2C1802] tracking-wider">
                உள்ளுவதெல்லாம் உயர்வுள்ளல்
              </span>
            </div>
          </div>

          {/* 4. CRISP SUMMARIZED SUBTITLE: Smooth Tracking Expansion Transition on Hover (ZERO Color Change) */}
          <p className="mt-3 sm:mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed cursor-default transition-all duration-300 ease-out hover:tracking-wide">
            Industry-ready degrees, global MoUs and a 100% placement focus.
          </p>

          {/* 5. HERO CALL TO ACTIONS with Signature Diagonal Boxing */}
          <div className="mt-6 sm:mt-7 flex flex-row items-center justify-center gap-3 sm:gap-4 w-auto">
            <Link
              href="/apply"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none text-sm sm:text-base font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border-2 border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-[#F5B83D] group-hover:text-[#021B4E] group-hover:translate-x-1 transition-all" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] group-hover:w-full transition-all duration-300" />
            </Link>

            <a
              href="#programmes"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none text-sm sm:text-base font-bold text-[#021B4E] bg-white hover:bg-[#FBF2D4] hover:text-[#021B4E] border-2 border-slate-200/90 hover:border-[#C59B27] transition-all duration-300 shadow-none"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>Explore Programmes</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* 6. DUAL TRACK TYPOGRAPHIC MARQUEE (EXACTLY LIKE PHOTO 2) */}
        <div className="pt-6 sm:pt-8 overflow-hidden select-none flex flex-col gap-3 sm:gap-4 w-full">
          {/* Row 1: Soft-Tone Text — Right to Left motion */}
          <div className="overflow-hidden whitespace-nowrap flex">
            <div ref={marqueeA} className="flex shrink-0 will-change-transform">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  {MARQUEE_ROW_1.map((item, idx) => (
                    <span key={idx} className="flex items-center">
                      <span className="font-marquee text-2xl sm:text-3xl lg:text-4xl uppercase text-[#0334A0]/30 tracking-wide font-extrabold">
                        {item}
                      </span>
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shrink-0 mx-5 sm:mx-7" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Deep Midnight Navy Solid Text — Left to Right motion */}
          <div className="overflow-hidden whitespace-nowrap flex">
            <div ref={marqueeB} className="flex shrink-0 will-change-transform">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  {MARQUEE_ROW_2.map((item, idx) => (
                    <span key={idx} className="flex items-center">
                      <span className="font-marquee text-2xl sm:text-3xl lg:text-4xl uppercase text-[#021B4E] tracking-wide font-extrabold">
                        {item}
                      </span>
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shrink-0 mx-5 sm:mx-7" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
